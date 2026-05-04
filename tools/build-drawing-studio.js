const fs = require("node:fs");
const path = require("node:path");

const outDir = path.join(__dirname, "..", "assets", "solarpv", "drawing-studio");
fs.mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 760;

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function t(x, y, text, cls = "txt", size = 20) {
  return `<text x="${x}" y="${y}" class="${cls}" font-size="${size}">${esc(text)}</text>`;
}

function wrap(x, y, lines, size = 18, cls = "txt") {
  return lines.map((line, index) => t(x, y + index * (size + 6), line, cls, size)).join("");
}

function line(x1, y1, x2, y2, cls = "ink") {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
}

function pathD(d, cls = "ink") {
  return `<path d="${d}" class="${cls}"/>`;
}

function rect(x, y, w, h, cls = "ink", rx = 0) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" class="${cls}"/>`;
}

function circle(x, y, r, cls = "ink") {
  return `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
}

function label(x1, y1, x2, y2, text, dx = 8, dy = -6) {
  return `${line(x1, y1, x2, y2, "leader")}${t(x2 + dx, y2 + dy, text, "label", 16)}`;
}

function terminal(x, y, name) {
  return `${circle(x, y, 12, "terminal")}${t(x - 14, y + 34, name, "label", 15)}`;
}

function lamp(x, y, id = "L") {
  return `<g>
    ${circle(x, y, 20, "ink")}
    ${line(x - 14, y - 14, x + 14, y + 14)}
    ${line(x + 14, y - 14, x - 14, y + 14)}
    ${t(x - 12, y + 43, id, "label", 15)}
  </g>`;
}

function fan(x, y, id = "CF") {
  return `<g>
    ${circle(x, y, 16, "ink")}
    <path d="M ${x} ${y - 8} C ${x + 58} ${y - 58}, ${x + 110} ${y - 30}, ${x + 72} ${y + 2}" class="ink"/>
    <path d="M ${x - 8} ${y + 5} C ${x - 78} ${y + 38}, ${x - 110} ${y - 18}, ${x - 46} ${y - 28}" class="ink"/>
    <path d="M ${x + 8} ${y + 8} C ${x + 22} ${y + 86}, ${x - 48} ${y + 104}, ${x - 36} ${y + 36}" class="ink"/>
    ${t(x - 18, y + 60, id, "label", 15)}
  </g>`;
}

function socket(x, y, labelText = "13A") {
  return `<g>
    ${rect(x - 20, y - 18, 40, 36, "ink", 5)}
    ${circle(x - 8, y, 3, "filled")}
    ${circle(x + 8, y, 3, "filled")}
    ${t(x - 20, y + 40, labelText, "label", 15)}
  </g>`;
}

function switchSymbol(x, y, labelText = "S1") {
  return `<g>
    ${rect(x - 17, y - 17, 34, 34, "ink", 4)}
    ${line(x - 8, y + 7, x + 10, y - 8)}
    ${t(x - 18, y + 38, labelText, "label", 15)}
  </g>`;
}

function db(x, y, labelText = "DB") {
  return `<g>
    ${rect(x - 28, y - 22, 56, 44, "ink", 4)}
    ${line(x - 18, y - 8, x + 18, y - 8)}
    ${line(x - 18, y + 5, x + 18, y + 5)}
    ${t(x - 18, y + 45, labelText, "label", 15)}
  </g>`;
}

function room(x, y, w, h, name) {
  return `<g>
    ${rect(x, y, w, h, "wall")}
    ${t(x + 14, y + 28, name, "room-title", 18)}
  </g>`;
}

function door(x, y, size = 58, dir = "right") {
  const sweep = dir === "left" ? `M ${x} ${y} A ${size} ${size} 0 0 0 ${x - size} ${y + size}` : `M ${x} ${y} A ${size} ${size} 0 0 1 ${x + size} ${y + size}`;
  const leaf = dir === "left" ? line(x, y, x - size, y + size, "thin") : line(x, y, x + size, y + size, "thin");
  return `<g>${leaf}<path d="${sweep}" class="pencil"/></g>`;
}

function windowSym(x, y, w, horizontal = true) {
  return horizontal
    ? `<g>${line(x, y, x + w, y, "window")}${line(x, y + 8, x + w, y + 8, "window")}</g>`
    : `<g>${line(x, y, x, y + w, "window")}${line(x + 8, y, x + 8, y + w, "window")}</g>`;
}

function legend(x, y, items) {
  const rows = items.map((item, index) => {
    const yy = y + index * 34;
    return `<g transform="translate(${x},${yy})">${item.symbol}<text x="45" y="7" class="legend" font-size="15">${esc(item.text)}</text></g>`;
  }).join("");
  return `<g>${rect(x - 16, y - 28, 310, Math.max(70, items.length * 34 + 24), "legend-box", 8)}${t(x - 4, y - 8, "Legend", "heading-small", 18)}${rows}</g>`;
}

function legendItems() {
  return [
    { symbol: lamp(0, 0, ""), text: "Lamp point" },
    { symbol: fan(0, 0, ""), text: "Ceiling fan point" },
    { symbol: switchSymbol(0, 0, ""), text: "1-way or 2-way switch" },
    { symbol: socket(0, 0, ""), text: "13 A socket outlet" },
    { symbol: db(0, 0, ""), text: "Distribution board" }
  ];
}

function svg(title, subtitle, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}">
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e8edf5" stroke-width="1"/>
    </pattern>
    <filter id="pencil">
      <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="1" seed="7"/>
      <feDisplacementMap in="SourceGraphic" scale="0.7"/>
    </filter>
  </defs>
  <style>
    .paper{fill:#fffef8}.grid-bg{fill:url(#grid)}.ink{fill:none;stroke:#182238;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round;filter:url(#pencil)}
    .thin{fill:none;stroke:#182238;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.pencil{fill:none;stroke:#98a5b8;stroke-width:1.8;stroke-dasharray:7 7}
    .leader{fill:none;stroke:#42526b;stroke-width:1.8;stroke-linecap:round}.wall{fill:#fff;stroke:#13203a;stroke-width:5;stroke-linejoin:round}
    .window{fill:none;stroke:#0c70b7;stroke-width:4;stroke-linecap:round}.live{fill:none;stroke:#c72525;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
    .neutral{fill:none;stroke:#1c6fc9;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.earth{fill:none;stroke:#157a48;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
    .filled{fill:#182238;stroke:none}.terminal{fill:#fff;stroke:#182238;stroke-width:3}.panel{fill:#f7fbff;stroke:#cfd9ea;stroke-width:2}.note{fill:#fff8df;stroke:#e5c957;stroke-width:2}
    .legend-box{fill:#fbfcff;stroke:#cfd9ea;stroke-width:2}.txt,.label,.legend{font-family:Arial,Helvetica,sans-serif;fill:#1d2a42}.title{font-family:Arial,Helvetica,sans-serif;fill:#0b2e69;font-weight:800}
    .subtitle{font-family:Arial,Helvetica,sans-serif;fill:#40516d}.room-title{font-family:Arial,Helvetica,sans-serif;fill:#0b2e69;font-weight:800}.heading-small{font-family:Arial,Helvetica,sans-serif;fill:#0b2e69;font-weight:800}
  </style>
  ${rect(0, 0, W, H, "paper")}
  ${rect(0, 0, W, H, "grid-bg")}
  ${rect(28, 24, W - 56, H - 48, "thin", 6)}
  ${t(52, 64, title, "title", 32)}
  ${t(54, 94, subtitle, "subtitle", 18)}
  ${body}
  ${rect(820, 682, 318, 38, "panel", 5)}
  ${t(834, 707, "A-One Tutorial Center - WAEC SolarPV 2026 Drawing Studio", "subtitle", 14)}
</svg>`;
}

function save(name, title, subtitle, body) {
  fs.writeFileSync(path.join(outDir, name), svg(title, subtitle, body), "utf8");
}

save("bs-symbols-and-legend.svg", "B.S. Symbols and Layout Legend", "Memorise the symbol, its full name and where it is used on a practical drawing.", `
  ${rect(58, 125, 1084, 500, "panel", 10)}
  ${[
    ["Lamp point", lamp(0, 0, ""), "Ceiling light point"],
    ["1-way switch", switchSymbol(0, 0, ""), "Single position control"],
    ["2-way switch", switchSymbol(0, 0, ""), "Two position control"],
    ["13 A socket", socket(0, 0, ""), "Portable appliances"],
    ["15 A socket", socket(0, 0, ""), "Heavy load outlet"],
    ["Ceiling fan", fan(0, 0, ""), "Fan point"],
    ["Fan regulator", `<g>${rect(-20,-18,40,36,"ink",4)}${line(-11,9,12,-9)}${t(-13,40,"FR","label",15)}</g>`, "Speed control"],
    ["Distribution board", db(0, 0, ""), "Circuit protection"],
    ["Cooker control", `<g>${rect(-25,-20,50,40,"ink",4)}${circle(0,0,7,"ink")}${t(-16,42,"CCU","label",14)}</g>`, "Kitchen cooker isolator"],
    ["Fuse", `<g>${line(-28,0,-9,0)}${rect(-9,-10,18,20,"ink",1)}${line(9,0,28,0)}</g>`, "Overcurrent protection"],
    ["Circuit breaker", `<g>${rect(-24,-18,48,36,"ink",4)}${line(-12,8,12,-8)}</g>`, "Resettable protection"],
    ["Earth electrode", `<g>${line(0,-24,0,4)}${line(-22,4,22,4)}${line(-15,13,15,13)}${line(-8,22,8,22)}</g>`, "Earthing point"],
    ["Energy meter", `<g>${circle(0,0,23,"ink")}${t(-11,7,"kWh","label",12)}</g>`, "Energy measurement"],
    ["Transformer", `<g>${pathD("M -28 0 C -22 -18 -12 -18 -7 0 C -2 18 8 18 13 0 C 18 -18 28 -18 33 0","ink")}${line(-48,0,-28,0)}${line(33,0,52,0)}</g>`, "Voltage step up or down"],
    ["Motor", `<g>${circle(0,0,24,"ink")}${t(-10,7,"M","label",19)}</g>`, "Electrical machine"]
  ].map((row, index) => {
    const col = index % 3;
    const r = Math.floor(index / 3);
    const x = 110 + col * 345;
    const y = 175 + r * 86;
    return `<g transform="translate(${x},${y})">${row[1]}${t(52, -5, row[0], "heading-small", 17)}${t(52, 21, row[2], "txt", 15)}</g>`;
  }).join("")}
  ${rect(86, 645, 650, 48, "note", 8)}
  ${wrap(108, 672, ["Candidate rule: draw the symbol first, write the legend beside it, then place it on the plan."], 16)}
`);

save("switching-circuits-board.svg", "Switching Circuit Board", "One-way, two-way and independent lamp control with live, neutral and earth separated.", `
  ${rect(60, 128, 330, 485, "panel", 10)}
  ${t(90, 165, "Two lamps in parallel", "heading-small", 20)}
  ${switchSymbol(108, 255, "S")}
  ${lamp(260, 220, "L1")}${lamp(260, 350, "L2")}
  ${pathD("M 80 245 L 108 245 L 210 245 L 210 220 L 240 220", "live")}
  ${pathD("M 210 245 L 210 350 L 240 350", "live")}
  ${pathD("M 298 220 L 345 220 L 345 350 L 298 350", "neutral")}
  ${pathD("M 70 390 L 345 390", "earth")}
  ${label(80,245,80,205,"Live feeds switch")}
  ${label(345,285,350,255,"Neutral common")}
  ${rect(430, 128, 330, 485, "panel", 10)}
  ${t(465, 165, "Two-way switching", "heading-small", 20)}
  ${switchSymbol(500, 300, "S1")}${switchSymbol(690, 300, "S2")}${lamp(600, 455, "L")}
  ${terminal(465, 245, "COM")}${terminal(725, 245, "COM")}
  ${pathD("M 470 245 L 500 245 L 500 283", "live")}
  ${pathD("M 520 293 L 672 293", "ink")}
  ${pathD("M 520 315 L 672 315", "ink")}
  ${pathD("M 690 318 L 690 405 L 600 405 L 600 435", "live")}
  ${pathD("M 640 455 L 735 455", "neutral")}
  ${label(585,293,560,248,"Strappers L1 and L2")}
  ${label(690,405,705,405,"Switched live")}
  ${rect(800, 128, 330, 485, "panel", 10)}
  ${t(832, 165, "Three lamps independent", "heading-small", 20)}
  ${rect(935, 205, 74, 52, "ink", 5)}${t(943,238,"JB","label",20)}
  ${switchSymbol(842, 315, "S1")}${switchSymbol(842, 405, "S2")}${switchSymbol(842, 495, "S3")}
  ${lamp(1050, 285, "L1")}${lamp(1050, 400, "L2")}${lamp(1050, 515, "L3")}
  ${pathD("M 830 270 L 935 230", "live")}${pathD("M 879 315 L 1030 285", "live")}${pathD("M 879 405 L 1030 400", "live")}${pathD("M 879 495 L 1030 515", "live")}
  ${pathD("M 1080 285 L 1112 285 L 1112 515 L 1080 515", "neutral")}
  ${pathD("M 915 565 L 1112 565", "earth")}
  ${wrap(835, 620, ["Mark live to switches; neutral goes direct to lamps; earth to all metal parts."], 15)}
`);

save("ring-radial-spur-layout.svg", "Ring Circuit, Radial Circuit and Spurs", "Recommended ring drawing method for 13 A socket outlets and common final sub-circuits.", `
  ${rect(70, 130, 660, 450, "panel", 10)}
  ${db(140, 345, "DB")}
  ${[0,1,2,3,4,5,6,7,8].map((n) => {
    const pts = [[250,190],[390,190],[530,190],[640,280],[640,430],[500,500],[360,500],[230,440],[230,290]];
    return socket(pts[n][0], pts[n][1], `SO${n+1}`);
  }).join("")}
  ${pathD("M 168 335 C 210 245 245 190 250 190 L 390 190 L 530 190 C 610 190 640 225 640 280 L 640 430 C 640 480 555 500 500 500 L 360 500 C 270 500 230 465 230 440 L 230 290 C 230 250 240 210 250 190", "live")}
  ${pathD("M 168 355 C 215 520 310 560 430 552 C 560 545 690 500 685 365 C 682 230 600 145 450 145 C 305 145 210 215 168 355", "neutral")}
  ${pathD("M 365 190 L 365 120 L 430 120", "thin")}${socket(430,120,"SP1")}
  ${pathD("M 640 365 L 725 365", "thin")}${socket(745,365,"SP2")}
  ${pathD("M 360 500 L 360 610 L 430 610", "thin")}${socket(430,610,"SP3")}
  ${label(140,345,80,300,"30 A fuse or MCB")}
  ${label(430,120,475,88,"Spurs = 9 / 3 = 3")}
  ${rect(775, 130, 330, 450, "panel", 10)}
  ${t(810, 168, "Radial examples", "heading-small", 22)}
  ${db(825, 245, "DB")}
  ${socket(975, 210, "15A")}${socket(975, 315, "13A")}${socket(975, 420, "CCU")}
  ${pathD("M 855 235 L 950 210", "live")}${pathD("M 855 245 L 950 315", "live")}${pathD("M 855 255 L 950 420", "live")}
  ${pathD("M 1005 210 L 1060 210 L 1060 420 L 1005 420", "neutral")}
  ${pathD("M 825 485 L 1060 485", "earth")}
  ${wrap(805, 615, ["Ring: both cable ends return to DB.", "Radial: one path from DB to the load.", "Label cable size, fuse rating and outlet rating."], 16)}
`);

save("consumer-protection-earthing.svg", "Consumer Supply, Protection and Earthing", "Sequence from service cable to final sub-circuit with correct protective devices.", `
  ${rect(80, 145, 1040, 360, "panel", 10)}
  ${[
    ["Service cable", 130],
    ["Service fuse", 280],
    ["Energy meter", 430],
    ["Main switch", 580],
    ["RCD or ELCB", 730],
    ["Consumer unit", 880],
    ["Final circuits", 1040]
  ].map(([name,x], index) => `<g>
    ${index === 1 ? `<g transform="translate(${x},300)">${line(-32,0,-12,0)}${rect(-12,-13,24,26,"ink",2)}${line(12,0,32,0)}</g>` :
      index === 2 ? `<g transform="translate(${x},300)">${circle(0,0,36,"ink")}${t(-17,6,"kWh","label",14)}</g>` :
      index === 5 ? db(x,300,"CU") :
      index === 6 ? `<g>${lamp(x,230,"L")}${socket(x,340,"SO")}${fan(x,440,"CF")}</g>` :
      `${rect(x-46,270,92,60,"ink",6)}`
    }
    ${t(x - 56, 382, name, "label", 16)}
  </g>`).join("")}
  ${pathD("M 176 300 L 248 300 L 352 300 L 394 300 L 544 300 L 684 300 L 840 300 L 995 300", "live")}
  ${pathD("M 176 322 L 248 322 L 352 322 L 394 322 L 544 322 L 684 322 L 840 322 L 995 322", "neutral")}
  ${pathD("M 176 344 L 840 344 L 990 455", "earth")}
  ${line(835, 455, 835, 595, "earth")}${line(790,595,880,595,"earth")}${line(805,612,865,612,"earth")}${line(820,629,850,629,"earth")}
  ${label(835,595,900,606,"Earth electrode")}
  ${label(730,270,720,215,"Trips on earth leakage")}
  ${label(880,330,930,390,"MCBs feed lighting, socket, cooker and PV circuits")}
  ${rect(115, 545, 620, 76, "note", 8)}
  ${wrap(135, 575, ["Candidate drawing order: service cable -> fuse -> meter -> main switch -> RCD -> DB -> final sub-circuits.", "Show earth continuity conductor and electrode clearly."], 16)}
`);

save("conduit-accessories-fittings.svg", "Conduit Boxes, Fittings and Accessories", "Identify the fitting by number of ways, inspection access and function.", `
  ${rect(60, 130, 1080, 465, "panel", 10)}
  ${[
    ["End box", "one entry at end of run"],
    ["2-way box", "straight through conduit link"],
    ["3-way box", "tee branch to another point"],
    ["4-way box", "four direction branch"],
    ["Back-entry box", "final lamp or fan connection"],
    ["Inspection elbow", "turn plus drawing access"],
    ["Coupler", "joins two conduit lengths"],
    ["Locknut and bushing", "secures box entry"],
    ["Saddle", "fixes conduit to surface"]
  ].map((item, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = 155 + col * 350;
    const y = 210 + row * 125;
    const shape = index === 0 ? `${circle(x,y,28,"ink")}${line(x-70,y,x-28,y)}` :
      index === 1 ? `${circle(x,y,30,"ink")}${line(x-80,y,x-30,y)}${line(x+30,y,x+80,y)}` :
      index === 2 ? `${circle(x,y,30,"ink")}${line(x-80,y,x-30,y)}${line(x+30,y,x+80,y)}${line(x,y-80,x,y-30)}` :
      index === 3 ? `${circle(x,y,30,"ink")}${line(x-80,y,x-30,y)}${line(x+30,y,x+80,y)}${line(x,y-80,x,y-30)}${line(x,y+30,x,y+80)}` :
      index === 4 ? `${rect(x-35,y-35,70,70,"ink",8)}${circle(x,y,18,"ink")}` :
      index === 5 ? `${pathD(`M ${x-75} ${y} L ${x-15} ${y} Q ${x+35} ${y} ${x+35} ${y-55}`,"ink")}${rect(x+5,y-40,55,38,"thin",4)}` :
      index === 6 ? `${rect(x-58,y-18,116,36,"ink",4)}${line(x-90,y,x-58,y)}${line(x+58,y,x+90,y)}` :
      index === 7 ? `${rect(x-55,y-24,35,48,"ink",3)}${rect(x+15,y-24,35,48,"ink",3)}${line(x-20,y,x+15,y)}` :
      `${pathD(`M ${x-70} ${y} L ${x+70} ${y}`,"ink")}${pathD(`M ${x-32} ${y} Q ${x} ${y-48} ${x+32} ${y}`,"ink")}`;
    return `<g>${shape}${t(x-84,y+56,item[0],"heading-small",17)}${t(x-84,y+82,item[1],"txt",14)}</g>`;
  }).join("")}
  ${wrap(90, 650, ["Exam sentence pattern: name the fitting, state where it is used, then give one safety or drawing reason."], 16)}
`);

save("cells-and-battery-charging.svg", "Cells, Battery Charging and PV Storage", "Label electrodes, electrolyte, polarity and safe charging arrangement.", `
  ${rect(78, 135, 440, 470, "panel", 10)}
  ${t(120, 175, "Simple Leclanche cell", "heading-small", 22)}
  ${rect(190, 245, 220, 250, "ink", 10)}
  ${rect(210, 310, 180, 165, "thin", 8)}
  ${rect(245, 205, 34, 210, "ink", 3)}
  ${rect(335, 205, 28, 210, "ink", 3)}
  ${line(262,205,262,160,"ink")}${line(350,205,350,160,"ink")}
  ${t(230, 145, "Zinc -", "label", 16)}${t(322, 145, "Carbon +", "label", 16)}
  ${label(230,370,95,345,"Electrolyte: sal ammoniac")}
  ${label(335,250,430,235,"Positive electrode")}
  ${label(245,255,92,245,"Negative electrode")}
  ${rect(590, 135, 500, 470, "panel", 10)}
  ${t(635, 175, "Battery charging practice", "heading-small", 22)}
  ${rect(635, 245, 120, 88, "ink", 8)}${t(654,298,"Charger","label",20)}
  ${rect(850, 235, 160, 110, "ink", 8)}${line(880,235,880,210,"ink")}${line(980,235,980,210,"ink")}
  ${t(852,385,"Lead-acid battery","label",18)}${t(872,202,"+","label",24)}${t(972,202,"-","label",24)}
  ${pathD("M 755 270 L 880 210", "live")}${pathD("M 755 310 L 980 210", "neutral")}
  ${rect(650, 445, 120, 70, "thin", 8)}${t(667,488,"Hydrometer","label",17)}
  ${label(915,210,950,150,"Check polarity before switch-on")}
  ${label(690,445,620,410,"Measures specific gravity")}
  ${rect(805, 455, 250, 68, "note", 8)}
  ${wrap(822, 480, ["Safety: ventilate room, remove vent plugs,", "no naked flame, use PPE and correct polarity."], 15)}
`);

save("motor-star-delta-and-single-phasing.svg", "Three-Phase Motor: Star, Delta and Single Phasing", "Draw start and finish terminals before joining star or delta links.", `
  ${rect(70, 130, 330, 500, "panel", 10)}
  ${t(112,170,"Stator terminals","heading-small",22)}
  ${terminal(145,250,"A1")}${terminal(245,250,"B1")}${terminal(345,250,"C1")}
  ${terminal(145,405,"A2")}${terminal(245,405,"B2")}${terminal(345,405,"C2")}
  ${pathD("M 145 250 C 105 300 105 355 145 405","ink")}
  ${pathD("M 245 250 C 205 300 205 355 245 405","ink")}
  ${pathD("M 345 250 C 305 300 305 355 345 405","ink")}
  ${wrap(105,520,["A1/B1/C1 are starts.", "A2/B2/C2 are finishes."],16)}
  ${rect(435, 130, 330, 500, "panel", 10)}
  ${t(488,170,"STAR connection","heading-small",22)}
  ${terminal(500,250,"A1")}${terminal(600,250,"B1")}${terminal(700,250,"C1")}
  ${terminal(500,405,"A2")}${terminal(600,405,"B2")}${terminal(700,405,"C2")}
  ${pathD("M 500 405 L 600 405 L 700 405","live")}
  ${pathD("M 500 250 L 470 220","ink")}${pathD("M 600 250 L 600 215","ink")}${pathD("M 700 250 L 735 220","ink")}
  ${t(470,215,"L1","label",18)}${t(590,210,"L2","label",18)}${t(735,215,"L3","label",18)}
  ${wrap(482,520,["Finish terminals joined together.", "Used to reduce starting current."],16)}
  ${rect(800, 130, 330, 500, "panel", 10)}
  ${t(850,170,"DELTA connection","heading-small",22)}
  ${terminal(865,250,"A1")}${terminal(965,250,"B1")}${terminal(1065,250,"C1")}
  ${terminal(865,405,"A2")}${terminal(965,405,"B2")}${terminal(1065,405,"C2")}
  ${pathD("M 865 250 L 965 405 L 1065 250 L 865 405 L 965 250 L 1065 405","live")}
  ${t(840,216,"L1","label",18)}${t(942,216,"L2","label",18)}${t(1054,216,"L3","label",18)}
  ${rect(830, 520, 260, 65, "note", 8)}
  ${wrap(848,548,["Single phasing: one supply line opens.", "Motor overheats and may fail."],15)}
`);

save("testing-instruments-and-metering.svg", "Testing Instruments and Meter Connections", "Ammeter in series, voltmeter in parallel, megger for insulation resistance.", `
  ${rect(70, 135, 330, 450, "panel", 10)}
  ${t(105,175,"Ammeter and voltmeter","heading-small",21)}
  ${rect(130,270,80,70,"ink",8)}${t(150,314,"Load","label",18)}
  ${circle(95,305,28,"ink")}${t(83,312,"A","label",20)}
  ${circle(250,230,28,"ink")}${t(238,237,"V","label",20)}
  ${pathD("M 60 305 L 67 305 M 123 305 L 130 305 M 210 305 L 340 305","live")}
  ${pathD("M 250 258 L 250 340 L 210 340 L 210 305","neutral")}
  ${label(95,305,86,245,"Ammeter in series")}
  ${label(250,230,280,190,"Voltmeter in parallel")}
  ${rect(440, 135, 330, 450, "panel", 10)}
  ${t(502,175,"Megger test","heading-small",21)}
  ${rect(500,250,120,84,"ink",8)}${t(526,300,"Megger","label",18)}
  ${line(620,270,705,220,"live")}${line(620,315,705,410,"earth")}
  ${rect(705,190,90,60,"ink",4)}${t(725,225,"L-N","label",18)}
  ${line(750,410,750,520,"earth")}${line(710,520,790,520,"earth")}${line(725,536,775,536,"earth")}${line(740,552,760,552,"earth")}
  ${label(705,220,675,205,"Insulation between conductors")}
  ${label(750,520,790,502,"Insulation to earth")}
  ${rect(810, 135, 330, 450, "panel", 10)}
  ${t(842,175,"Installation tests","heading-small",21)}
  ${wrap(850,230,[
    "1. Continuity test: checks complete path.",
    "2. Polarity test: switch in live conductor.",
    "3. Insulation resistance: no leakage.",
    "4. Earth test: low resistance fault path.",
    "5. Ring continuity: both ring ends return."
  ], 18)}
  ${rect(850, 430, 240, 72, "note", 8)}
  ${wrap(868,458,["Minimum values used in past papers:", "0.5 Mohm or 1 Mohm as stated."],15)}
`);

save("joints-tools-and-soldering.svg", "Electrical Joints, Tools and Soldering", "Show clean bare conductors, tight winding direction, solder and insulation.", `
  ${rect(65, 130, 1065, 480, "panel", 10)}
  ${[
    ["Tee joint", `<g>${line(-75,0,75,0)}${pathD("M 0 0 C -8 25 8 45 0 72","ink")}${pathD("M 0 0 C 18 18 32 35 36 62","ink")}</g>`],
    ["Married joint", `<g>${pathD("M -90 0 C -50 -35 -15 -35 0 0 C 15 35 50 35 90 0","ink")}${pathD("M -90 18 C -50 -17 -15 -17 0 18 C 15 53 50 53 90 18","ink")}</g>`],
    ["Britannia joint", `<g>${line(-90,0,90,0)}${pathD("M -20 -24 C 0 -5 0 5 -20 24 M 0 -24 C 20 -5 20 5 0 24","ink")}</g>`],
    ["Straight-through joint", `<g>${pathD("M -90 0 L -18 0 M 18 0 L 90 0","ink")}${pathD("M -18 0 C -5 -22 8 -22 18 0 C 5 22 -8 22 -18 0","ink")}</g>`],
    ["Soldered joint", `<g>${line(-95,0,95,0)}${rect(-42,-14,84,28,"thin",8)}${t(-28,45,"solder","label",14)}</g>`],
    ["Tool set", `<g>${rect(-75,-10,90,20,"ink",4)}${line(15,0,78,-45)}${line(15,0,78,45)}${circle(15,0,9,"ink")}</g>`]
  ].map((item, index) => {
    const x = 170 + (index % 3) * 345;
    const y = 225 + Math.floor(index / 3) * 170;
    return `<g transform="translate(${x},${y})">${item[1]}${t(-95,90,item[0],"heading-small",18)}</g>`;
  }).join("")}
  ${rect(130, 535, 830, 48, "note", 8)}
  ${wrap(150,563,["Practical rule: strip, clean, make mechanically strong, solder where required, then insulate properly."],16)}
`);

save("solar-pv-installation-3d.svg", "Solar PV Installation: Isometric Field Sketch", "Use this 3D-style plate to explain module, controller, battery, inverter, load and earthing positions.", `
  ${rect(60, 128, 1080, 500, "panel", 10)}
  ${pathD("M 125 385 L 435 230 L 745 385 L 435 540 Z","thin")}
  ${pathD("M 170 385 L 435 255 L 700 385 L 435 515 Z","ink")}
  ${[0,1,2,3].map((n) => {
    const x = 255 + n * 86;
    return `${pathD(`M ${x} 342 L ${x+80} 302 L ${x+165} 344 L ${x+85} 384 Z`,"ink")}${line(x+40,322,x+125,364,"thin")}${line(x+82,301,x+167,343,"thin")}`;
  }).join("")}
  ${t(300,245,"PV modules on roof", "heading-small", 20)}
  ${rect(805,190,120,70,"ink",8)}${t(826,232,"Combiner","label",18)}
  ${rect(805,310,120,70,"ink",8)}${t(825,352,"DC Isolator","label",18)}
  ${rect(805,430,120,70,"ink",8)}${t(822,472,"Controller","label",18)}
  ${rect(980,310,110,80,"ink",8)}${t(1006,355,"Battery","label",18)}
  ${rect(980,455,110,80,"ink",8)}${t(1005,500,"Inverter","label",18)}
  ${pathD("M 710 350 L 805 225", "live")}${pathD("M 710 382 L 805 345", "neutral")}
  ${pathD("M 865 260 L 865 310", "live")}${pathD("M 865 380 L 865 430", "live")}
  ${pathD("M 925 465 L 980 350", "live")}${pathD("M 1035 390 L 1035 455", "live")}
  ${pathD("M 1035 535 L 1035 590 L 890 590", "earth")}
  ${line(890,590,890,640,"earth")}${line(850,640,930,640,"earth")}${line(866,656,914,656,"earth")}
  ${label(890,640,945,638,"Earth electrode")}
  ${label(805,225,790,160,"String fuses and SPD in combiner")}
  ${label(980,500,935,555,"AC output to consumer unit")}
`);

function layoutCommon(title, subtitle, body) {
  return save(title, subtitle, "Plan symbols, circuit positions and interpretation notes for WAEC practical layout questions.", body);
}

layoutCommon("layout-single-room.svg", "Single Room Electrical Layout with Legend", `
  ${room(90,135,640,470,"Single room")}
  ${door(360,605,70,"right")}${windowSym(180,135,170,true)}${windowSym(90,300,145,false)}
  ${lamp(410,345,"L1")}${fan(500,345,"CF")}${switchSymbol(118,545,"S1")}${socket(165,550,"13A")}${socket(680,550,"13A")}${socket(675,190,"15A")}${db(128,175,"DB")}
  ${pathD("M 128 175 L 118 545 L 410 345", "pencil")}${pathD("M 128 175 L 165 550 L 680 550", "pencil")}
  ${legend(800,180,legendItems())}
  ${rect(790, 485, 330, 100, "note", 8)}
  ${wrap(810,512,["Interpretation: one central lamp, fan at clear centre,", "switch near entrance, sockets on usable walls,", "DB placed high near entry for access."], 15)}
`);

layoutCommon("layout-one-bedroom.svg", "One Bedroom Self-Contained Layout", `
  ${room(75,135,410,250,"Bedroom")}${room(485,135,310,250,"Kitchen")}${room(75,385,410,190,"Living")}${room(795,135,170,205,"Bath/WC")}${room(795,340,170,235,"Porch")}
  ${door(250,385,55,"right")}${door(620,385,50,"left")}${door(795,245,45,"left")}${door(850,575,55,"right")}
  ${lamp(280,255,"L1")}${fan(335,255,"CF")}${lamp(635,250,"L2")}${lamp(880,235,"L3")}${lamp(285,480,"L4")}${lamp(880,455,"L5")}
  ${switchSymbol(105,405,"S1")}${switchSymbol(520,405,"S2")}${switchSymbol(812,350,"S3")}${switchSymbol(815,545,"S4")}
  ${socket(125,185,"13A")}${socket(440,330,"13A")}${socket(120,535,"13A")}${socket(440,535,"13A")}${socket(720,330,"13A")}${db(104,155,"DB")}<g transform="translate(715,205)">${rect(-28,-22,56,44,"ink",4)}${t(-18,45,"CCU","label",15)}</g>
  ${legend(990,170,legendItems().slice(0,5))}
  ${rect(985, 470, 160, 100, "note", 8)}
  ${wrap(1000,498,["Kitchen gets CCU.", "Bedroom gets fan.", "Switches near doors."], 14)}
`);

layoutCommon("layout-two-bedroom.svg", "Two Bedroom Electrical Layout and Interpretation", `
  ${room(70,130,300,220,"Bedroom 1")}${room(370,130,300,220,"Bedroom 2")}${room(70,350,600,220,"Living / dining")}${room(670,130,250,210,"Kitchen")}${room(670,340,250,120,"Bath")}${room(670,460,250,110,"Lobby")}
  ${door(210,350,50,"right")}${door(510,350,50,"right")}${door(670,410,48,"left")}${door(800,570,55,"right")}
  ${lamp(220,240,"L1")}${fan(265,240,"CF1")}${lamp(520,240,"L2")}${fan(565,240,"CF2")}${lamp(350,455,"L3")}${fan(425,455,"CF3")}${lamp(795,235,"L4")}${lamp(795,405,"L5")}${lamp(795,520,"L6")}
  ${switchSymbol(92,330,"S1")}${switchSymbol(392,330,"S2")}${switchSymbol(92,535,"S3")}${switchSymbol(685,535,"S4")}${switchSymbol(690,350,"S5")}
  ${socket(110,180,"13A")}${socket(340,320,"13A")}${socket(410,180,"13A")}${socket(640,320,"13A")}${socket(130,520,"13A")}${socket(610,520,"13A")}${socket(880,300,"13A")}<g transform="translate(865,190)">${rect(-28,-22,56,44,"ink",4)}${t(-18,45,"CCU","label",15)}</g>${db(102,160,"DB")}
  ${legend(965,155,legendItems())}
  ${rect(960, 490, 180, 96, "note", 8)}
  ${wrap(975,518,["Two-way control is best", "for lobby or passage.", "Keep DB accessible."], 14)}
`);

layoutCommon("layout-three-bedroom.svg", "Three Bedroom Layout with Circuit Interpretation", `
  ${room(55,125,255,195,"Bed 1")}${room(310,125,255,195,"Bed 2")}${room(565,125,255,195,"Bed 3")}${room(55,320,520,235,"Living / dining")}${room(575,320,250,235,"Kitchen")}${room(825,125,240,195,"Baths")}${room(825,320,240,235,"Passage / porch")}
  ${door(160,320,45,"right")}${door(415,320,45,"right")}${door(670,320,45,"right")}${door(575,445,50,"left")}${door(940,555,55,"right")}
  ${lamp(180,220,"L1")}${fan(220,220,"CF1")}${lamp(435,220,"L2")}${fan(475,220,"CF2")}${lamp(690,220,"L3")}${fan(730,220,"CF3")}${lamp(300,435,"L4")}${fan(385,435,"CF4")}${lamp(695,430,"L5")}${lamp(945,220,"L6")}${lamp(945,440,"L7")}
  ${switchSymbol(75,300,"S1")}${switchSymbol(330,300,"S2")}${switchSymbol(585,300,"S3")}${switchSymbol(75,530,"S4")}${switchSymbol(590,530,"S5")}${switchSymbol(842,535,"S6")}
  ${socket(75,170,"13A")}${socket(290,300,"13A")}${socket(330,170,"13A")}${socket(545,300,"13A")}${socket(585,170,"13A")}${socket(800,300,"13A")}${socket(95,520,"13A")}${socket(545,520,"13A")}${socket(785,520,"13A")}<g transform="translate(775,370)">${rect(-28,-22,56,44,"ink",4)}${t(-18,45,"CCU","label",15)}</g>${db(105,145,"DB")}
  ${rect(1080, 145, 85, 420, "legend-box", 8)}
  ${t(1092,174,"Key", "heading-small", 18)}${lamp(1122,220,"")}${t(1094,263,"Lamp","legend",14)}${switchSymbol(1122,300,"")}${t(1090,344,"Switch","legend",14)}${socket(1122,380,"13A")}${t(1088,424,"Socket","legend",14)}${fan(1122,478,"")}${t(1098,535,"Fan","legend",14)}
  ${rect(55, 610, 820, 58, "note", 8)}
  ${wrap(75,637,["Interpretation: give each room a lamp, bedrooms/living get fans, kitchen gets CCU, sockets are distributed on usable walls."],16)}
`);

console.log(`Drawing Studio assets written to ${outDir}`);
