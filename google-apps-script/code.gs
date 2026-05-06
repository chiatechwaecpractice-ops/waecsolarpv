const SHEET_ID = "1vf1SZmDp4QZe7tndKkfuMQYtA38Fwj0htIFu6wmOLgE";
const DEFAULT_SHEET_NAME = "";
const ADMIN_WHATSAPP = "07037689917";

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(5000);
    const payload = parsePayload(event);
    const token = PropertiesService.getScriptProperties().getProperty("PORTAL_AUTH_TOKEN");

    if (!token || clean(payload.token) !== token) {
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
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return {
      ok: false,
      message: "PIN access is not ready. Please contact admin."
    };
  }

  const headers = values[0].map(normalizeHeader);
  const index = getHeaderIndex(headers);
  const required = ["pin", "name", "email", "phone"];
  const missing = required.filter(field => index[field] === -1);
  if (missing.length) {
    return {
      ok: false,
      message: "PIN access is not ready. Please contact admin."
    };
  }

  const pin = clean(payload.pin);
  const name = clean(payload.name).toLowerCase();
  const email = clean(payload.email).toLowerCase();
  const phone = normalizePhone(payload.phone);
  const deviceId = clean(payload.deviceId);
  const deviceName = clean(payload.deviceName);

  for (let rowIndex = 1; rowIndex < values.length; rowIndex += 1) {
    const row = values[rowIndex];
    const rowPin = clean(row[index.pin]);
    const rowName = clean(row[index.name]).toLowerCase();
    const rowEmail = clean(row[index.email]).toLowerCase();
    const rowPhone = normalizePhone(row[index.phone]);

    if (rowPin !== pin) {
      continue;
    }

    const status = index.status === -1 ? "" : clean(row[index.status]).toLowerCase();
    if (isBlocked(status)) {
      return {
        ok: false,
        message: "This PIN is not active. Please contact admin."
      };
    }

    if (!matchesOrCanClaim(row[index.name], name, "text") ||
        !matchesOrCanClaim(row[index.email], email, "email") ||
        !matchesOrCanClaim(row[index.phone], phone, "phone")) {
      return {
        ok: false,
        message: "PIN details were not accepted. Check your access details or contact admin."
      };
    }

    const savedDeviceId = index.deviceid === -1 ? "" : clean(row[index.deviceid]);
    if (savedDeviceId && savedDeviceId !== deviceId) {
      return {
        ok: false,
        message: "This PIN is already active on another device. Please contact admin."
      };
    }

    updateLoginColumns(sheet, rowIndex + 1, index, {
      name: rowName || clean(payload.name),
      email: rowEmail || clean(payload.email).toLowerCase(),
      phone: rowPhone || normalizePhone(payload.phone),
      deviceId: savedDeviceId || deviceId,
      deviceName: deviceName,
      lastLogin: new Date()
    });

    return {
      ok: true,
      offlineAllowed: index.offlineallowed === -1 ? true : parseAllowed(row[index.offlineallowed]),
      user: {
        name: rowName || clean(payload.name),
        email: rowEmail || clean(payload.email).toLowerCase(),
        phone: rowPhone || normalizePhone(payload.phone)
      }
    };
  }

  return {
    ok: false,
    message: "PIN details were not accepted. Check your access details or contact admin."
  };
}

function updateLoginColumns(sheet, rowNumber, index, data) {
  if (index.name !== -1) {
    sheet.getRange(rowNumber, index.name + 1).setValue(data.name);
  }
  if (index.email !== -1) {
    sheet.getRange(rowNumber, index.email + 1).setValue(data.email);
  }
  if (index.phone !== -1) {
    sheet.getRange(rowNumber, index.phone + 1).setValue(data.phone);
  }
  if (index.deviceid !== -1) {
    sheet.getRange(rowNumber, index.deviceid + 1).setValue(data.deviceId);
  }
  if (index.devicename !== -1) {
    sheet.getRange(rowNumber, index.devicename + 1).setValue(data.deviceName);
  }
  if (index.lastlogin !== -1) {
    sheet.getRange(rowNumber, index.lastlogin + 1).setValue(data.lastLogin);
  }
}

function getAccessSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  if (DEFAULT_SHEET_NAME) {
    return spreadsheet.getSheetByName(DEFAULT_SHEET_NAME) || spreadsheet.getSheets()[0];
  }
  return spreadsheet.getSheets()[0];
}

function getHeaderIndex(headers) {
  return {
    pin: headers.indexOf("pin"),
    name: headers.indexOf("name"),
    email: headers.indexOf("email"),
    phone: headers.indexOf("phone"),
    status: headers.indexOf("status"),
    deviceid: headers.indexOf("deviceid"),
    devicename: headers.indexOf("devicename"),
    lastlogin: headers.indexOf("lastlogin"),
    offlineallowed: headers.indexOf("offlineallowed")
  };
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
  return ["blocked", "disabled", "inactive", "expired", "used", "no"].indexOf(clean(status).toLowerCase()) !== -1;
}

function parseAllowed(value) {
  const text = clean(value).toLowerCase();
  if (!text) return true;
  return ["yes", "true", "1", "allow", "allowed", "active"].indexOf(text) !== -1;
}

function supportMessage() {
  return "PIN access could not be confirmed. Please contact admin on WhatsApp: " + ADMIN_WHATSAPP + ".";
}
