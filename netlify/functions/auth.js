const crypto = require("node:crypto");

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "1vf1SZmDp4QZe7tndKkfuMQYtA38Fwj0htIFu6wmOLgE";
const RANGE = process.env.GOOGLE_SHEET_RANGE || "A:K";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
const APPS_SCRIPT_AUTH_URL = process.env.GOOGLE_APPS_SCRIPT_AUTH_URL ||
  process.env.APPS_SCRIPT_AUTH_URL ||
  process.env.GOOGLE_SCRIPT_WEB_APP_URL ||
  process.env.APPS_SCRIPT_WEB_APP_URL ||
  process.env.PIN_AUTH_WEB_APP_URL ||
  "https://script.google.com/macros/s/AKfycbwXrD2S5aOlcBwIp6r-d2LmXzqYNxUKPGGLZ7AQfd6r1aUdWqGOlDE6xUxvphrbQKTq/exec";
const APPS_SCRIPT_AUTH_TOKEN = process.env.GOOGLE_APPS_SCRIPT_AUTH_TOKEN ||
  process.env.APPS_SCRIPT_AUTH_TOKEN ||
  process.env.PORTAL_AUTH_TOKEN ||
  process.env.PIN_AUTH_TOKEN ||
  "";
const EMERGENCY_PIN_HASHES = [
  "1659ab53e0c5ffd055b1d1e74ba04d01bc6c44c9a6a93930bde421a880baddbd",
  "a366e1b1b21eb58d11bb4c41c08faae99868ec41196737c345600cb169fcb34b",
  "9805d24babbd8e2f1cb18e08968cebe8a0a105b7e9a6698f2775710129230318",
  "f722d3c80e447c41509894cb979c4c633a363b63f893b90aa237b1cfcc5ccd19",
  "a8d969b61cf8e6107ccbff4a512d19033bd5ea7972b87ce5737315689dc194df",
  "36581c1dec7ceb6f80a0e65c830535e8e0823b9263fa51573e71ae25651bcc0e",
  "cd04b5312be88ab24d5e810324cb1d0d9d9421eb9fbe8e444a5d9d26831564a0",
  "d54614f5f72247bb72d816a5445df0398551351bfbd248ddba7c87fa8da423dc",
  "4b831c1151b9313b9ce66f55186ae6e783452894a3f3563d701b950cf8ba6b7b",
  "6b388cc7a599ac6949c00832648d65568ddbdc64117758cc6eadadea926ff137",
  "66eb26ef05f3ae42901ae47f51d6b653e34c2304ebdd25f070fb5ce99b87a9f2",
  "4ed7a245f8323ed2cb128bdd9c82d04e3f0cb323f3fad9912311330288c4832e",
  "05e8fa2b9ae35ce2918ca72e62f21a8ccbad9091f73e49c9353347e0d5266c4c",
  "358892ae9f42f52f25ec8cf98e0594a557031e9a439cb20da7bcba1c9a863dfe",
  "ba5e52a2bf04fe0fed91b17a589ad42e0d5d337a6b92ca4fab486dc9873dbee1",
  "07548980e8fe8c8b6b017f4f75361c969cd3694bc02768151f33276bcc2c759e",
  "cef33a5ba991a09d800e94d9da76252392c6cef0633acdcf9292d1bd55e8b1a4",
  "9f2050dedc382f777898675cf7be0cbf002e213074e954ad75b41746429b9fc1",
  "876b93ca4bb4ab2b38ac06862aa5336758772d6678a1cfc3f61b4e35dcaf0546",
  "f6b62d6c6b0258e78a8159a10b301fe340a6db75c43fc1bfc3653282c0a11299"
];

exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod === "GET") {
    return json(200, {
      ok: true,
      service: "CHIATECH WAEC PIN access",
      appsScriptUrlReady: Boolean(APPS_SCRIPT_AUTH_URL),
      appsScriptTokenReady: Boolean(APPS_SCRIPT_AUTH_TOKEN),
      serviceAccountReady: hasServiceAccountCredentials(),
      publicSheetFallbackReady: process.env.ALLOW_PUBLIC_SHEET_AUTH === "true",
      emergencyPinFallbackReady: getEmergencyPinHashes().length > 0,
      mode: APPS_SCRIPT_AUTH_URL ? "sheet-proxy" : "service-account"
    });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, message: "POST required." });
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    if (payload.type !== "student") {
      return json(400, { ok: false, message: "Unsupported login type." });
    }

    let scriptResult = null;
    try {
      scriptResult = await authenticateWithAppsScript(payload);
    } catch (scriptError) {
      console.warn("Apps Script auth unavailable; trying Sheet and emergency fallback", {
        reason: scriptError && scriptError.message
      });
    }
    if (scriptResult && scriptResult.ok) {
      return json(200, scriptResult);
    }
    if (scriptResult && !shouldTrySheetFallback(scriptResult)) {
      return json(401, scriptResult);
    }

    try {
      const rows = await readSheetRows();
      const result = await validateStudent(payload, rows);
      return json(result.ok ? 200 : 401, result);
    } catch (sheetError) {
      const emergencyResult = validateEmergencyStudent(payload);
      if (emergencyResult.ok) {
        console.warn("Student auth used emergency server-side PIN fallback", {
          reason: sheetError && sheetError.message
        });
        return json(200, emergencyResult);
      }
      throw sheetError;
    }
  } catch (error) {
    console.error("Student auth failed", {
      reason: error && error.message,
      hasAppsScriptUrl: Boolean(APPS_SCRIPT_AUTH_URL),
      hasAppsScriptToken: Boolean(APPS_SCRIPT_AUTH_TOKEN),
      hasServiceAccountEmail: Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
      hasPrivateKey: Boolean(process.env.GOOGLE_PRIVATE_KEY)
    });
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
  if (!response.ok) {
    throw new Error(`Apps Script request failed: ${response.status}`);
  }

  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(`Apps Script returned an unreadable response: ${text.slice(0, 120)}`);
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
      name: clean(result.user && result.user.name),
      email: clean(result.user && result.user.email).toLowerCase(),
      phone: normalizePhone(result.user && result.user.phone)
    } : undefined
  };
}

function shouldTrySheetFallback(result) {
  const message = clean(result && result.message).toLowerCase();
  return !message || message.includes("could not be confirmed") || message.includes("contact admin on whatsapp");
}

function validateEmergencyStudent(payload) {
  const pin = clean(payload.pin);
  const name = clean(payload.name);
  const email = clean(payload.email).toLowerCase();
  const phone = normalizePhone(payload.phone);
  if (!pin || !name || !email || !phone) {
    return { ok: false, message: "PIN details were not accepted. Check your access details or contact admin." };
  }
  const pinHash = sha256(pin);
  if (!getEmergencyPinHashes().includes(pinHash)) {
    return { ok: false, message: "PIN details were not accepted. Check your access details or contact admin." };
  }
  return {
    ok: true,
    offlineAllowed: true,
    user: { name, email, phone }
  };
}

function getEmergencyPinHashes() {
  const envPins = clean(process.env.EMERGENCY_PIN_SHA256_LIST)
    .split(/[,\s]+/)
    .map(clean)
    .filter(Boolean);
  return Array.from(new Set([...envPins, ...EMERGENCY_PIN_HASHES]));
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

  const record = records.find(item => clean(item.data.pin) === pin);

  if (!record) {
    return { ok: false, message: "PIN details were not accepted. Check your access details or contact admin." };
  }

  const data = record.data;
  if (isBlocked(data.status)) {
    return { ok: false, message: "This PIN is not active. Contact admin." };
  }

  if (!matchesOrCanClaim(data.name, name, "text") ||
      !matchesOrCanClaim(data.email, email, "email") ||
      !matchesOrCanClaim(data.phone, phone, "phone")) {
    return { ok: false, message: "PIN details were not accepted. Check your access details or contact admin." };
  }

  const sheetDevice = clean(data.deviceid);
  if (sheetDevice && sheetDevice !== deviceId) {
    return { ok: false, message: "This PIN is already tied to another device. Contact admin." };
  }

  await updateLoginColumns(record.rowNumber, {
    name: data.name || payload.name,
    email: data.email || payload.email,
    phone: data.phone || payload.phone,
    deviceId: sheetDevice || deviceId,
    deviceName,
    lastLogin: new Date().toISOString()
  });

  return {
    ok: true,
    offlineAllowed: parseAllowed(data.offlineallowed),
    user: {
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
    { range: `B${rowNumber}:D${rowNumber}`, values: [[values.name, values.email, values.phone]] },
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

function hasServiceAccountCredentials() {
  try {
    const credentials = getServiceAccountCredentials();
    return Boolean(credentials.email && credentials.privateKey);
  } catch {
    return false;
  }
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

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function clean(value) {
  return String(value || "").trim();
}

function normalizePhone(value) {
  return clean(value).replace(/[^\d+]/g, "");
}

function matchesOrCanClaim(sheetValue, submittedValue, type) {
  const saved = type === "phone"
    ? normalizePhone(sheetValue)
    : clean(sheetValue).toLowerCase();
  const submitted = type === "phone"
    ? normalizePhone(submittedValue)
    : clean(submittedValue).toLowerCase();
  if (!submitted) return false;
  return !saved || saved === submitted;
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
