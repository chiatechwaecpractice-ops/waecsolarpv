const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const authFunction = require("../netlify/functions/auth.js");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf"
};

http.createServer((request, response) => {
  const url = new URL(request.url, `http://localhost:${port}`);
  if (url.pathname === "/.netlify/functions/auth") {
    handleFunction(request, response);
    return;
  }

  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  const filePath = path.normalize(path.join(root, pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": pathname.endsWith("service-worker.js") ? "no-cache" : "no-store"
    });
    response.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`A-One WAEC Solar PV app running at http://127.0.0.1:${port}/`);
});

function handleFunction(request, response) {
  let body = "";
  request.on("data", chunk => {
    body += chunk;
  });
  request.on("end", async () => {
    try {
      const result = await authFunction.handler({
        httpMethod: request.method,
        headers: request.headers,
        body
      });
      response.writeHead(result.statusCode || 200, result.headers || {});
      response.end(result.body || "");
    } catch (error) {
      response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: false, message: "Local auth function failed.", detail: error.message }));
    }
  });
}
