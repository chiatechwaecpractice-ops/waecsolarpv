const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "waec2026solarpv.html");
const downloadsDir = path.join(root, "downloads");
fs.mkdirSync(downloadsDir, { recursive: true });

const sourceHtml = fs.readFileSync(htmlPath, "utf8");
const testsMatch = sourceHtml.match(/const tests = ([\s\S]*?);\s*const mount/);
if (!testsMatch) {
  throw new Error("Could not extract tests array from waec2026solarpv.html");
}

const context = { tests: null };
vm.createContext(context);
vm.runInContext(`tests = ${testsMatch[1]};`, context);
const tests = context.tests;
const extraTestsPath = path.join(root, "assets", "solarpv", "extra-tests.js");
if (fs.existsSync(extraTestsPath)) {
  const extraContext = { window: {} };
  vm.createContext(extraContext);
  vm.runInContext(fs.readFileSync(extraTestsPath, "utf8"), extraContext);
  if (Array.isArray(extraContext.window.extraTests)) {
    tests.push(...extraContext.window.extraTests);
  }
}

const edgeCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
];
const browser = edgeCandidates.find(candidate => fs.existsSync(candidate));
if (!browser) {
  throw new Error("No Edge or Chrome executable found for headless PDF generation.");
}

function renderContent(content) {
  if (Array.isArray(content)) {
    return `<ul>${content.map(item => `<li>${renderContent(item)}</li>`).join("")}</ul>`;
  }
  if (content && typeof content === "object") {
    return `<ul>${Object.entries(content).map(([key, value]) => `<li><strong>${key}:</strong> ${renderContent(value)}</li>`).join("")}</ul>`;
  }
  return String(content);
}

function figureMarkup(figure) {
  return `
    <figure>
      <img src="../${figure.src}" alt="${figure.caption}">
      <figcaption>${figure.caption}</figcaption>
    </figure>
  `;
}

function docShell(test, mode) {
  const isSolution = mode === "solutions";
  const label = isSolution ? "Solution Set" : "Question Set";
  const filenameLabel = `${test.id.replace("test", "Test ")} ${label}`;
  const content = test.objectiveMode ? test.objectives.map((item, index) => {
    return `
      <article class="question">
        <h2>Question ${index + 1}</h2>
        <p><strong>${item.q}</strong></p>
        <ol class="mcq-options" type="A">
          ${item.options.map(option => `<li>${option}</li>`).join("")}
        </ol>
        ${isSolution ? `
          <h3>Answer and Explanation</h3>
          <p><strong>Answer:</strong> ${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}</p>
          <p><strong>Explanation:</strong> ${item.explanation}</p>
        ` : ""}
      </article>
    `;
  }).join("") : test.items.map(item => {
    const questionFigures = (item.figures || []).filter(figure => figure.place === "question");
    const answerFigures = (item.figures || []).filter(figure => figure.place === "answer");
    return `
      <article class="question">
        <h2>Question ${item.no}: ${item.title}</h2>
        <h3>${isSolution ? "Question Focus" : "Questions"}</h3>
        <ol class="qa-list">
          ${item.prompts.map(([part, text]) => `<li><span>${part}</span><p>${text}</p></li>`).join("")}
        </ol>
        ${questionFigures.map(figureMarkup).join("")}
        ${isSolution ? `
          <h3>Teacher's Solution Guide</h3>
          <ol class="answer-list">
            ${item.answers.map(([part, answer]) => `<li><span>${part}</span><div>${renderContent(answer)}</div></li>`).join("")}
          </ol>
          ${answerFigures.map(figureMarkup).join("")}
        ` : ""}
        ${item.note ? `<p class="teacher-note"><strong>Class note:</strong> ${item.note}</p>` : ""}
      </article>
    `;
  }).join("");

  return `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${filenameLabel} - A-One WAEC Solar PV</title>
    <style>
      @page { size: A4; margin: 12mm; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        color: #071126;
        font-family: "Segoe UI", Arial, sans-serif;
        font-size: 11.5pt;
        line-height: 1.42;
      }
      .cover {
        min-height: 250mm;
        display: grid;
        grid-template-rows: auto 1fr auto;
        border: 2px solid #0c4fb3;
        border-radius: 8px;
        overflow: hidden;
        page-break-after: always;
      }
      .cover-top {
        display: grid;
        grid-template-columns: 74px 1fr;
        gap: 14px;
        align-items: center;
        padding: 18px 22px;
        background: #071126;
        color: #fff;
      }
      .cover-top img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 8px;
        background: #fff;
      }
      .cover-top p, .cover-body p, .contact p { margin: 0; }
      .cover-top strong {
        display: block;
        font-size: 18pt;
        line-height: 1.05;
      }
      .cover-body {
        padding: 28px 30px;
        display: grid;
        align-content: center;
        gap: 16px;
      }
      .badge {
        display: inline-block;
        width: max-content;
        padding: 7px 10px;
        border-radius: 8px;
        background: #ffd21c;
        color: #08235f;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 9.5pt;
      }
      h1 {
        margin: 0;
        font-size: 32pt;
        line-height: 1.02;
        color: #08235f;
      }
      .subtitle {
        font-size: 15pt;
        color: #536078;
      }
      .cover-points {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 8px;
      }
      .cover-points div {
        border: 1px solid #dce5f3;
        border-radius: 8px;
        padding: 12px;
        background: #f7f9ff;
        font-weight: 800;
      }
      .contact {
        padding: 16px 22px;
        background: #eef4ff;
        border-top: 1px solid #dce5f3;
        font-size: 10pt;
      }
      .sheet-header {
        display: grid;
        grid-template-columns: 42px 1fr;
        gap: 10px;
        align-items: center;
        border-bottom: 2px solid #0c4fb3;
        padding-bottom: 8px;
        margin-bottom: 14px;
      }
      .sheet-header img {
        width: 42px;
        height: 42px;
        object-fit: cover;
        border-radius: 6px;
      }
      .sheet-header strong {
        display: block;
        color: #08235f;
      }
      .sheet-header span {
        color: #536078;
        font-size: 9.5pt;
      }
      .question {
        page-break-inside: avoid;
        margin: 0 0 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid #dce5f3;
      }
      h2 {
        margin: 0 0 8px;
        color: #08235f;
        font-size: 16pt;
      }
      h3 {
        margin: 10px 0 6px;
        color: #0d7a4f;
        font-size: 12pt;
      }
      .qa-list, .answer-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .qa-list li, .answer-list li {
        display: grid;
        grid-template-columns: 52px 1fr;
        gap: 8px;
        padding: 5px 0;
        border-bottom: 1px solid #edf2f9;
      }
      .qa-list span, .answer-list span {
        color: #0c4fb3;
        font-weight: 900;
      }
      .answer-list span {
        color: #0d7a4f;
      }
      .qa-list p, .answer-list p {
        margin: 0;
      }
      ul {
        margin: 0;
        padding-left: 17px;
      }
      .mcq-options {
        margin: 6px 0 0;
        padding-left: 28px;
      }
      li {
        margin: 2px 0;
      }
      figure {
        margin: 10px 0;
        border: 1px solid #dce5f3;
        border-radius: 8px;
        padding: 8px;
        page-break-inside: avoid;
      }
      figure img {
        width: 100%;
        max-height: 130mm;
        object-fit: contain;
      }
      figcaption {
        color: #536078;
        font-size: 9.5pt;
        border-top: 1px solid #edf2f9;
        padding-top: 5px;
      }
      .teacher-note {
        margin: 10px 0 0;
        padding: 9px 10px;
        border-left: 4px solid #ffd21c;
        background: #fff8dd;
      }
      .print-rule {
        margin-top: 12px;
        padding: 12px;
        border-radius: 8px;
        background: #eaf8f0;
        color: #063a28;
      }
    </style>
  </head>
  <body>
    <section class="cover">
      <div class="cover-top">
        <img src="../assets/logo.png" alt="ChiaTech logo">
        <div>
          <strong>A-One WAEC Solar PV Academy</strong>
          <p>A-One Tutorial Center, Gwagwalada Abuja | ChiaTech Solutions</p>
        </div>
      </div>
      <div class="cover-body">
        <span class="badge">WAEC 2026 ${label}</span>
        <h1>${test.title.replace(" - ", "<br>")}</h1>
        <p class="subtitle">${test.intro}</p>
        <div class="cover-points">
          <div>Past-question practice</div>
          <div>Exam-ready technical terms</div>
          <div>Neat drawing emphasis</div>
          <div>Solar PV installation bridge</div>
        </div>
        <p class="print-rule"><strong>Candidate instruction:</strong> Draw all diagrams with pencil first, use a ruler for conductors, label every terminal clearly, and keep answers concise.</p>
      </div>
      <div class="contact">
        <p><strong>Call/WhatsApp:</strong> +234 703 768 9917 | <strong>Email:</strong> chiatech01@gmail.com | <strong>Web:</strong> waecsolarpv.chiatechsolutions.com</p>
      </div>
    </section>
    <header class="sheet-header">
      <img src="../assets/logo.png" alt="ChiaTech logo">
      <div>
        <strong>${filenameLabel}</strong>
        <span>A-One Tutorial Center | +234 703 768 9917 | chiatech01@gmail.com</span>
      </div>
    </header>
    ${content}
  </body>
  </html>`;
}

for (const test of tests) {
  for (const mode of ["questions", "solutions"]) {
    const base = `waec2026solarpv-${test.id}-${mode}`;
    const htmlOut = path.join(downloadsDir, `${base}.html`);
    const pdfOut = path.join(downloadsDir, `${base}.pdf`);
    fs.writeFileSync(htmlOut, docShell(test, mode), "utf8");
    if (fs.existsSync(pdfOut) && fs.statSync(pdfOut).size > 10000) {
      console.log(`Already exists ${path.relative(root, pdfOut)}`);
      continue;
    }

    const fileUrl = `file:///${htmlOut.replace(/\\/g, "/")}`;
    const profileDir = path.join(downloadsDir, `.edge-profile-${base}`);
    fs.mkdirSync(profileDir, { recursive: true });
    const result = spawnSync(browser, [
      "--headless",
      "--disable-gpu",
      "--disable-extensions",
      "--allow-file-access-from-files",
      "--no-pdf-header-footer",
      `--user-data-dir=${profileDir}`,
      `--print-to-pdf=${pdfOut}`,
      fileUrl
    ], { encoding: "utf8", timeout: 120000 });

    if (result.status !== 0 || !fs.existsSync(pdfOut)) {
      throw new Error(`Failed to generate ${pdfOut}\n${result.stderr || result.stdout}`);
    }
    console.log(`Created ${path.relative(root, pdfOut)}`);
  }
}
