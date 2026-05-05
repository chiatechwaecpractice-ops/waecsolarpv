const crypto = require("node:crypto");

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "1vf1SZmDp4QZe7tndKkfuMQYtA38Fwj0htIFu6wmOLgE";
const RANGE = process.env.GOOGLE_SHEET_RANGE || "A:K";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
const APPS_SCRIPT_AUTH_URL = process.env.GOOGLE_APPS_SCRIPT_AUTH_URL || process.env.APPS_SCRIPT_AUTH_URL || "";
const APPS_SCRIPT_AUTH_TOKEN = process.env.GOOGLE_APPS_SCRIPT_AUTH_TOKEN || process.env.APPS_SCRIPT_AUTH_TOKEN || "";

exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, message: "POST required." });
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    if (payload.type !== "student") {
      return json(400, { ok: false, message: "Unsupported login type." });
    }

    const scriptResult = await authenticateWithAppsScript(payload);
    if (scriptResult) {
      return json(scriptResult.ok ? 200 : 401, scriptResult);
    }

    const rows = await readSheetRows();
    const result = await validateStudent(payload, rows);
    return json(result.ok ? 200 : 401, result);
  } catch (error) {
    console.error(error);
    return json(500, {
      ok: false,
      message: "PIN access could not be confirmed. Please contact admin on WhatsApp: 07037689917."
    });
  }
};

async function authenticateWithAppsScript(payload) {
  if (!APPS_SCRIPT_AUTH_URL) return null;
  if (!APPS_SCRIPT_AUTH_TOKEN) {
    throw new Error("Apps Script token is not configured.");
  }

  const response = await fetch(APPS_SCRIPT_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "student",
      pin: clean(payload.pin),
      name: clean(payload.name),
      email: clean(payload.email).toLowerCase(),
      phone: normalizePhone(payload.phone),
      deviceId: clean(payload.deviceId),
      deviceName: clean(payload.deviceName),
      token: APPS_SCRIPT_AUTH_TOKEN
    })
  });

  const text = await response.text();
  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error("Apps Script returned an unreadable response.");
  }

  return sanitizeAuthResult(result);
}

function sanitizeAuthResult(result) {
  if (!result || typeof result !== "object") {
    return { ok: false, message: "PIN access could not be confirmed. Please contact admin on WhatsApp: 07037689917." };
  }

  const ok = result.ok === true;
  return {
    ok,
    message: ok ? undefined : clean(result.message) || "PIN details were not accepted. Check your access details or contact admin.",
    offlineAllowed: result.offlineAllowed !== false,
    user: ok ? {
      pin: clean(result.user && result.user.pin),
      name: clean(result.user && result.user.name),
      email: clean(result.user && result.user.email).toLowerCase(),
      phone: normalizePhone(result.user && result.user.phone)
    } : undefined
  };
}

async function validateStudent(payload, rows) {
  if (!rows || rows.length < 2) {
    return { ok: false, message: "PIN sheet has no user records." };
  }

  const headers = rows[0].map(value => clean(value).toLowerCase());
  const records = rows.slice(1).map((row, index) => ({
    rowNumber: index + 2,
    data: Object.fromEntries(headers.map((header, columnIndex) => [header, row[columnIndex] || ""]))
  }));

  const pin = clean(payload.pin);
  const name = clean(payload.name).toLowerCase();
  const email = clean(payload.email).toLowerCase();
  const phone = normalizePhone(payload.phone);
  const deviceId = clean(payload.deviceId);
  const deviceName = clean(payload.deviceName);

  const record = records.find(item => {
    const row = item.data;
    return clean(row.pin) === pin &&
      clean(row.name).toLowerCase() === name &&
      clean(row.email).toLowerCase() === email &&
      normalizePhone(row.phone) === phone;
  });

  if (!record) {
    return { ok: false, message: "PIN details were not found on the access sheet." };
  }

  const data = record.data;
  if (isBlocked(data.status)) {
    return { ok: false, message: "This PIN is not active. Contact admin." };
  }

  const sheetDevice = clean(data.deviceid);
  if (sheetDevice && sheetDevice !== deviceId) {
    return { ok: false, message: "This PIN is already tied to another device. Contact admin." };
  }

  await updateLoginColumns(record.rowNumber, {
    deviceId: sheetDevice || deviceId,
    deviceName,
    lastLogin: new Date().toISOString()
  });

  return {
    ok: true,
    offlineAllowed: parseAllowed(data.offlineallowed),
    user: {
      pin,
      name: data.name || payload.name,
      email: data.email || payload.email,
      phone: data.phone || payload.phone
    }
  };
}

async function readSheetRows() {
  const token = await getAccessToken();
  if (token) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(RANGE)}`;
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!response.ok) throw new Error(`Google Sheets API read failed: ${response.status}`);
    const data = await response.json();
    return data.values || [];
  }

  if (process.env.ALLOW_PUBLIC_SHEET_AUTH !== "true") {
    const error = new Error("Missing Google service account credentials for private Sheet access.");
    throw error;
  }

  const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=0`;
  const response = await fetch(csvUrl);
  if (!response.ok) throw new Error(`Public sheet read failed: ${response.status}`);
  return parseCsv(await response.text());
}

async function updateLoginColumns(rowNumber, values) {
  const token = await getAccessToken();
  if (!token) return;

  const updates = [
    { range: `F${rowNumber}:G${rowNumber}`, values: [[values.deviceId, values.deviceName]] },
    { range: `J${rowNumber}:J${rowNumber}`, values: [[values.lastLogin]] }
  ];

  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchUpdate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      valueInputOption: "USER_ENTERED",
      data: updates
    })
  });

  if (!response.ok) {
    console.error("Google Sheets API update failed", response.status, await response.text());
  }
}

async function getAccessToken() {
  const credentials = getServiceAccountCredentials();
  const email = credentials.email;
  const privateKey = credentials.privateKey;
  if (!email || !privateKey) return null;

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(JSON.stringify({
    iss: email,
    scope: SCOPES,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  }));
  const unsigned = `${header}.${claim}`;
  const key = normalizePrivateKey(privateKey);
  let signature;
  try {
    signature = crypto.createSign("RSA-SHA256").update(unsigned).sign(key, "base64url");
  } catch (error) {
    throw error;
  }
  const assertion = `${unsigned}.${signature}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!response.ok) throw new Error(`Google token request failed: ${response.status}`);
  const data = await response.json();
  return data.access_token;
}

function getServiceAccountCredentials() {
  const rawJson = clean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  if (rawJson) {
    const parsed = parseServiceAccountJson(rawJson);
    return {
      email: parsed.client_email,
      privateKey: parsed.private_key
    };
  }

  const rawBase64 = clean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64);
  if (rawBase64) {
    const parsed = parseServiceAccountJson(Buffer.from(rawBase64, "base64").toString("utf8"));
    return {
      email: parsed.client_email,
      privateKey: parsed.private_key
    };
  }

  return {
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY
  };
}

function parseServiceAccountJson(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    error.publicMessage = "GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON.";
    throw error;
  }
}

function normalizePrivateKey(value) {
  let key = clean(value);
  if (key.startsWith("{")) {
    key = clean(parseServiceAccountJson(key).private_key);
  } else {
    const embedded = key.match(/"private_key"\s*:\s*"([^"]+)"/);
    if (embedded) key = embedded[1];
  }
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    try {
      key = JSON.parse(key);
    } catch {
      key = key.slice(1, -1);
    }
  }
  key = key.replace(/\\n/g, "\n");
  key = key.replace(/\r\n/g, "\n");
  key = rebuildSingleLinePem(key);
  if (!key.includes("BEGIN PRIVATE KEY")) {
    const error = new Error("Service account private key is missing PEM header.");
    throw error;
  }
  return key;
}

function rebuildSingleLinePem(value) {
  const begin = "-----BEGIN PRIVATE KEY-----";
  const end = "-----END PRIVATE KEY-----";
  if (!value.includes(begin) || !value.includes(end) || value.includes("\n")) return value;
  const body = value
    .replace(begin, "")
    .replace(end, "")
    .replace(/\s+/g, "");
  const wrapped = body.match(/.{1,64}/g) || [];
  return [begin, ...wrapped, end, ""].join("\n");
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function clean(value) {
  return String(value || "").trim();
}

function normalizePhone(value) {
  return clean(value).replace(/[^\d+]/g, "");
}

function isBlocked(status) {
  return ["blocked", "disabled", "inactive", "expired", "used", "no"].includes(clean(status).toLowerCase());
}

function parseAllowed(value) {
  const text = clean(value).toLowerCase();
  if (!text) return true;
  return ["yes", "true", "1", "allow", "allowed", "active"].includes(text);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      field += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      if (row.some(cell => clean(cell))) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  row.push(field);
  if (row.some(cell => clean(cell))) rows.push(row);
  return rows;
}
