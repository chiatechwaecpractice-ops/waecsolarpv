# CHIATECH WAEC PIN Google Apps Script

Use `code.gs` as the secure Google Sheet validator for student PIN login.

The Sheet should include these headers: `pin`, `name`, `email`, `phone`, `status`, `deviceid`, `devicename`, `lastlogin`, and `offlineallowed`.
Only `pin` must be filled before sale. On first valid login, blank `name`, `email`, `phone`, and device columns are claimed by that student, `status` is set to `used`, and `lastlogin` is updated. If those cells are already filled, they must match the student's login details. A `used` PIN remains valid only on the recorded device ID; use `blocked`, `disabled`, `inactive`, or `expired` to stop access.

## Required Script Property

Create a long private token and save it in Apps Script as:

```text
PORTAL_AUTH_TOKEN
```

Use the same value in Netlify as:

```text
GOOGLE_APPS_SCRIPT_AUTH_TOKEN
```

## Required Netlify Variables

```text
GOOGLE_APPS_SCRIPT_AUTH_URL
GOOGLE_APPS_SCRIPT_AUTH_TOKEN
```

The browser does not receive this token. It stays in Netlify and is sent server-to-server to Apps Script.
