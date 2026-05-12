const SHEET_ID = "1vf1SZmDp4QZe7tndKkfuMQYtA38Fwj0htIFu6wmOLgE";
const DEFAULT_SHEET_NAME = "";
const ADMIN_WHATSAPP = "07037689917";

const CANONICAL_HEADERS = [
  "pin",
  "name",
  "email",
  "phone",
  "status",
  "deviceid",
  "devicename",
  "firstlogin",
  "lastlogin",
  "logincount",
  "offlineallowed",
  "useragent"
];

const HEADER_ALIASES = {
  pin: ["pins", "accesspin", "accesscode", "code", "pinno", "pinnumber"],
  name: ["fullname", "student", "studentname", "candidate", "candidatename"],
  email: ["emailaddress", "mail", "studentemail"],
  phone: ["phonenumber", "phoneNo", "telephone", "mobile", "whatsapp", "whatsappnumber"],
  status: ["used", "pinstatus", "usagestatus", "usedunused", "usedorunused"],
  deviceid: ["device", "devicecode", "devicefingerprint", "devicekey", "deviceidentity"],
  devicename: ["deviceinfo", "browser", "browserdevice", "devicebrowser"],
  firstlogin: ["firstused", "firstloginat", "dateused", "claimedat"],
  lastlogin: ["loginat", "lastused", "lastaccess", "lastseen"],
  logincount: ["timesused", "login_count", "logins", "accesscount"],
  offlineallowed: ["offline", "allowoffline", "offlineaccess", "allowofflineaccess"],
  useragent: ["useragentstring", "agent", "browseragent"]
};

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(5000);
    const payload = parsePayload(event);
    const token = PropertiesService.getScriptProperties().getProperty("PORTAL_AUTH_TOKEN");

    if (token && clean(payload.token) !== token) {
      return sendJson({
        ok: false,
        message: supportMessage()
      });
    }

    if (clean(payload.type) !== "student") {
      return sendJson({
        ok: false,
        message: "PIN details were not accepted. Check your access details or contact admin."
      });
    }

    return sendJson(validateStudent(payload));
  } catch (error) {
    console.error(error);
    return sendJson({
      ok: false,
      message: supportMessage()
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (error) {
      console.warn(error);
    }
  }
}

function doGet() {
  return sendJson({
    ok: true,
    service: "CHIATECH WAEC Solar PV PIN service",
    ready: true
  });
}

function validateStudent(payload) {
  const sheet = getAccessSheet();
  const prepared = prepareSheet(sheet);
  const values = prepared.values;
  const index = prepared.index;

  if (values.length < 2 || index.pin === -1) {
    return {
      ok: false,
      message: "PIN access is not ready. Please contact admin."
    };
  }

  const pin = clean(payload.pin);
  const submittedName = clean(payload.name);
  const submittedEmail = clean(payload.email).toLowerCase();
  const submittedPhone = normalizePhone(payload.phone);
  const deviceId = clean(payload.deviceId);
  const deviceName = clean(payload.deviceName);
  const userAgent = clean(payload.userAgent);

  if (!pin) {
    return {
      ok: false,
      message: "Enter your PIN to continue."
    };
  }

  if (!deviceId) {
    return {
      ok: false,
      message: "Refresh this page and try login again."
    };
  }

  for (let rowIndex = 1; rowIndex < values.length; rowIndex += 1) {
    const row = values[rowIndex];
    const rowPin = clean(cell(row, index.pin));

    if (rowPin !== pin) {
      continue;
    }

    const status = clean(cell(row, index.status)).toLowerCase();
    if (isBlocked(status)) {
      return {
        ok: false,
        message: "This PIN is not active. Please contact admin."
      };
    }

    const savedDeviceId = clean(cell(row, index.deviceid));
    if (savedDeviceId && savedDeviceId !== deviceId) {
      return {
        ok: false,
        message: "This PIN is already active on another device. Please contact admin."
      };
    }

    const savedName = clean(cell(row, index.name));
    const savedEmail = clean(cell(row, index.email)).toLowerCase();
    const savedPhone = normalizePhone(cell(row, index.phone));
    const hasSavedDetails = Boolean(savedName || savedEmail || savedPhone);
    const hasSubmittedDetails = Boolean(submittedName || submittedEmail || submittedPhone);
    const sameDeviceCanRecover = Boolean(savedDeviceId && savedDeviceId === deviceId && hasSavedDetails && !hasSubmittedDetails);

    if (!sameDeviceCanRecover) {
      if (!submittedName || !submittedEmail || !submittedPhone) {
        return {
          ok: false,
          message: "Enter the name, email, and phone for this PIN. This is only needed on the first login."
        };
      }

      if (!matchesOrCanClaim(savedName, submittedName, "text") ||
          !matchesOrCanClaim(savedEmail, submittedEmail, "email") ||
          !matchesOrCanClaim(savedPhone, submittedPhone, "phone")) {
        return {
          ok: false,
          message: "PIN details were not accepted. Check your access details or contact admin."
        };
      }
    }

    const now = new Date();
    const loginCount = toNumber(cell(row, index.logincount)) + 1;
    const finalUser = {
      name: savedName || submittedName,
      email: savedEmail || submittedEmail,
      phone: savedPhone || submittedPhone
    };

    updateLoginColumns(sheet, rowIndex + 1, index, row, {
      name: finalUser.name,
      email: finalUser.email,
      phone: finalUser.phone,
      status: "used",
      deviceId: savedDeviceId || deviceId,
      deviceName: deviceName,
      firstLogin: clean(cell(row, index.firstlogin)) || now,
      lastLogin: now,
      loginCount: loginCount,
      userAgent: userAgent
    });

    return {
      ok: true,
      offlineAllowed: index.offlineallowed === -1 ? true : parseAllowed(cell(row, index.offlineallowed)),
      user: finalUser
    };
  }

  return {
    ok: false,
    message: "PIN details were not accepted. Check your access details or contact admin."
  };
}

function prepareSheet(sheet) {
  if (sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) {
    sheet.getRange(1, 1, 1, CANONICAL_HEADERS.length).setValues([CANONICAL_HEADERS]);
  }

  let values = sheet.getDataRange().getValues();
  let headers = (values[0] || []).map(normalizeHeader);
  let index = getHeaderIndex(headers);

  if (index.pin === -1 && looksLikePinOnlySheet(values, headers)) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, CANONICAL_HEADERS.length).setValues([CANONICAL_HEADERS]);
    values = sheet.getDataRange().getValues();
    headers = (values[0] || []).map(normalizeHeader);
    index = getHeaderIndex(headers);
  }

  const missing = CANONICAL_HEADERS.filter(header => header !== "pin" && index[header] === -1);
  if (missing.length) {
    const startColumn = Math.max(sheet.getLastColumn(), values[0].length, 1) + 1;
    sheet.getRange(1, startColumn, 1, missing.length).setValues([missing]);
    values = sheet.getDataRange().getValues();
    headers = (values[0] || []).map(normalizeHeader);
    index = getHeaderIndex(headers);
  }

  return {
    values: values,
    index: index
  };
}

function looksLikePinOnlySheet(values, headers) {
  const knownHeader = headers.some(header => {
    if (!header) return false;
    return CANONICAL_HEADERS.some(field => header === field || normalizedAliases(field).indexOf(header) !== -1);
  });
  if (knownHeader) return false;
  return values.some(row => clean(row[0]));
}

function updateLoginColumns(sheet, rowNumber, index, row, data) {
  setCell(sheet, rowNumber, index.name, data.name);
  setCell(sheet, rowNumber, index.email, data.email);
  setCell(sheet, rowNumber, index.phone, data.phone);
  setCell(sheet, rowNumber, index.status, data.status);
  setCell(sheet, rowNumber, index.deviceid, data.deviceId);
  setCell(sheet, rowNumber, index.devicename, data.deviceName);
  if (!clean(cell(row, index.firstlogin))) {
    setCell(sheet, rowNumber, index.firstlogin, data.firstLogin);
  }
  setCell(sheet, rowNumber, index.lastlogin, data.lastLogin);
  setCell(sheet, rowNumber, index.logincount, data.loginCount);
  setCell(sheet, rowNumber, index.useragent, data.userAgent);
  SpreadsheetApp.flush();
}

function setCell(sheet, rowNumber, columnIndex, value) {
  if (columnIndex === -1) return;
  sheet.getRange(rowNumber, columnIndex + 1).setValue(value);
}

function getAccessSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  if (DEFAULT_SHEET_NAME) {
    return spreadsheet.getSheetByName(DEFAULT_SHEET_NAME) || spreadsheet.getSheets()[0];
  }
  return spreadsheet.getSheets()[0];
}

function getHeaderIndex(headers) {
  const index = {};
  CANONICAL_HEADERS.forEach(field => {
    index[field] = findHeaderIndex(headers, field);
  });
  return index;
}

function findHeaderIndex(headers, field) {
  const candidates = [field].concat(normalizedAliases(field));
  for (let index = 0; index < candidates.length; index += 1) {
    const found = headers.indexOf(candidates[index]);
    if (found !== -1) return found;
  }
  return -1;
}

function normalizedAliases(field) {
  return (HEADER_ALIASES[field] || []).map(normalizeHeader);
}

function cell(row, columnIndex) {
  if (columnIndex === -1) return "";
  return row[columnIndex] || "";
}

function parsePayload(event) {
  const text = event && event.postData && event.postData.contents ? event.postData.contents : "{}";
  return JSON.parse(text);
}

function sendJson(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function normalizeHeader(value) {
  return clean(value).toLowerCase().replace(/[^a-z0-9]/g, "");
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
  return ["blocked", "disabled", "inactive", "expired", "no"].indexOf(clean(status).toLowerCase()) !== -1;
}

function parseAllowed(value) {
  const text = clean(value).toLowerCase();
  if (!text) return true;
  return ["yes", "true", "1", "allow", "allowed", "active", "used"].indexOf(text) !== -1;
}

function toNumber(value) {
  const number = Number(clean(value));
  return Number.isFinite(number) ? number : 0;
}

function supportMessage() {
  return "PIN access could not be confirmed. Please contact admin on WhatsApp: " + ADMIN_WHATSAPP + ".";
}
