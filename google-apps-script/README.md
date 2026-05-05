# CHIATECH WAEC PIN Google Apps Script

Use `code.gs` as the secure Google Sheet validator for student PIN login.

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
