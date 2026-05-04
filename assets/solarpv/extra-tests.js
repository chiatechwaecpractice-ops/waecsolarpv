window.extraTests = [
  {
    id: "test6",
    title: "Test 6 - Technical Drawing Practical Masterclass",
    intro: "Full drawing-demanding practice. Candidates must use pencil, ruler, neat symbols, correct labels and clear conductor routing.",
    items: [
      {
        no: 1,
        title: "Solar PV Standalone System Drawing",
        prompts: [
          ["a", "Draw a neat labelled block diagram of a standalone solar PV system supplying both d.c. and a.c. loads."],
          ["b", "Show PV module, d.c. isolator/fuse, charge controller, battery bank, inverter, a.c. protective device, a.c. load, d.c. load and earth electrode."],
          ["c", "State four drawing rules a candidate must observe in this diagram."]
        ],
        answers: [
          ["a-b", ["Start from the PV module on the left and move in the direction of energy flow.", "Connect PV module to d.c. protection, then to charge controller.", "From the charge controller, show battery bank and d.c. loads.", "From battery/controller d.c. side, connect inverter and then a.c. protective device and a.c. loads.", "Show earthing from exposed metalwork/protection point to earth electrode."]],
          ["c", ["Use a ruler for all conductors and block lines.", "Label every block and polarity where necessary.", "Use arrows to show energy flow.", "Keep d.c. and a.c. parts separate.", "Avoid crossing lines unnecessarily.", "Write terminal labels clearly."]]
        ],
        figures: [
      { place: "answer", src: "assets/solarpv/drawing-studio/schematicdiagramofpowerstages.PNG", caption: "Standalone PV system block diagram and energy flow." }
    ],
    note: "WAEC drawing steps: mark the major blocks first, connect them with straight lines, label d.c. side and a.c. side, then add safety devices and load names."
      },
      {
        no: 2,
        title: "Two-Way Switching Pencil Drawing",
        prompts: [
          ["a", "Draw the wiring diagram of one lamp controlled independently from two positions by two 2-way switches."],
          ["b", "Label live, neutral, common terminals, L1, L2, strappers, switched live and lamp."],
          ["c", "Explain why the switch must be connected in the live conductor."]
        ],
        answers: [
          ["a-b", ["Live supply goes to common terminal of the first 2-way switch.", "L1 of first switch connects to L1 of second switch.", "L2 of first switch connects to L2 of second switch.", "Common terminal of second switch goes to the lamp as switched live.", "Neutral goes directly to the lamp.", "Earth continuity conductor is shown for safety."]],
          ["c", "The switch is placed in the live conductor so that the lamp holder is not left live when the lamp is switched off."]
        ],
        figures: [
      { place: "answer", src: "assets/solarpv/drawing-studio/2wayswitching.PNG", caption: "Two-way switching diagram with strappers and switched live." },
      { place: "answer", src: "assets/solarpv/waec-official/einstall223mq1-1-einstall223mq1-clip-image002.png", caption: "Official WAEC reference: two-way lamp control drawing style." }
    ],
    note: "WAEC drawing steps: draw the two switch boxes first, mark COM/L1/L2, add the two strappers, then draw the lamp and neutral return."
      },
      {
        no: 3,
        title: "Ring Circuit with Spurs",
        prompts: [
          ["a", "Draw a domestic ring circuit with nine 13 A socket outlets."],
          ["b", "Show the recommended number of spurs using the past-question rule."],
          ["c", "State the protective fuse rating and usual cable size."]
        ],
        answers: [
          ["a-b", ["The ring starts from one way in the distribution board and returns to the same way.", "Nine socket outlets are placed on the ring.", "Recommended spurs = 9 / 3 = 3 spurs.", "Each spur is taken from a suitable point on the ring."]],
          ["c", ["Fuse rating: 30 A.", "Usual cable size: 2.5 mm&sup2; PVC/TRS cable."]]
        ],
        figures: [
      { place: "answer", src: "assets/solarpv/drawing-studio/Ringcircuitsockets.PNG", caption: "Domestic ring circuit with socket outlets and spurs." },
      { place: "answer", src: "assets/solarpv/essay/test1/solution5ai.png", caption: "Captured past-question solution: domestic ring circuit with spurs." }
    ],
    note: "WAEC drawing steps: draw the ring loop first, return both ends to the consumer unit, then add socket symbols and spurs evenly."
      },
      {
        no: 4,
        title: "Three-Phase Star and Delta Connections",
        prompts: [
          ["a", "Draw the six terminals of a three-phase motor winding labelled A1, B1, C1, A2, B2 and C2."],
          ["b", "Redraw the terminals for star connection."],
          ["c", "Redraw the terminals for delta connection."],
          ["d", "State one use of star connection during starting."]
        ],
        answers: [
          ["a-c", ["For star connection, join A2, B2 and C2 together to form the star point; connect supply lines to A1, B1 and C1.", "For delta connection, connect the end of each winding to the start of the next winding; connect the supply lines to the three junctions."]],
          ["d", "Star connection reduces starting current during starting of a three-phase induction motor."]
        ],
        figures: [
          { place: "question", src: "assets/solarpv/essay/test3/questions4b.png", caption: "Question reference: three-phase stator winding terminals." },
          { place: "answer", src: "assets/solarpv/essay/test3/solution2bi.png", caption: "Teacher solution: star connection." },
          { place: "answer", src: "assets/solarpv/essay/test3/solution2bii.png", caption: "Teacher solution: delta connection." },
          { place: "answer", src: "assets/solarpv/essay/test3/starvsdelta.png", caption: "Study reference: star versus delta connection." }
        ],
    note: "WAEC drawing steps: write terminal names before linking. Wrong terminal names usually lead to wrong star or delta connection."
      },
      {
        no: 5,
        title: "Meter Connection Correction Drawing",
        prompts: [
          ["a", "Study the wrong meter connection and identify the two errors."],
          ["b", "Redraw the circuit correctly with ammeter and voltmeter."],
          ["c", "State two effects of the wrong connection."]
        ],
        answers: [
          ["a", ["The ammeter is wrongly connected in parallel instead of series.", "The voltmeter is wrongly connected in series instead of parallel."]],
          ["b", ["Connect the ammeter in series with the load.", "Connect the voltmeter in parallel across the load.", "Observe correct supply polarity where indicated."]],
          ["c", ["The instruments may give wrong readings.", "The instruments may be damaged."]]
        ],
        figures: [
          { place: "question", src: "assets/solarpv/essay/test4/question5c.png", caption: "Question reference: incorrect ammeter and voltmeter connection." },
          { place: "answer", src: "assets/solarpv/essay/test4/solution5ciii.png", caption: "Teacher solution: correct ammeter in series and voltmeter in parallel." },
          { place: "answer", src: "assets/solarpv/waec-official/einstall2019q5-3-capture5c.png", caption: "Official WAEC reference: wrong measuring instrument connection." },
          { place: "answer", src: "assets/solarpv/waec-official/einstall2019q5-4-capture5ccc.png", caption: "Official WAEC reference: corrected measuring instrument connection." }
        ],
    note: "WAEC measuring rule: ammeter is along the line in series; voltmeter is connected across the load in parallel."
      },
      {
        no: 6,
        title: "Living-Room Layout and Legend",
        prompts: [
          ["a", "Prepare a legend for lamps, 13 A sockets, 15 A sockets, wall brackets, ceiling fan, fan regulator, distribution board and 2-way switch."],
          ["b", "Use the legend to complete a living-room electrical layout."],
          ["c", "State four rules for placing fittings on a floor plan."]
        ],
        answers: [
          ["a-b", ["Use standard symbols and keep the same symbol throughout the drawing.", "Place lamps centrally or where lighting is required.", "Place switches near entrances and at convenient control positions.", "Place socket outlets at useful wall positions.", "Place distribution board where it is accessible and safe."]],
          ["c", ["Do not crowd symbols.", "Do not hide symbols under wall lines.", "Use a neat legend/key.", "Keep labels readable.", "Use appropriate fitting positions for the room function."]]
        ],
        figures: [
          { place: "question", src: "assets/solarpv/essay/test1/question4.png", caption: "Question reference: living-room wiring layout." },
          { place: "answer", src: "assets/solarpv/essay/test1/solution4a.png", caption: "Teacher solution: key to layout symbols." },
          { place: "answer", src: "assets/solarpv/essay/test1/solution4b.png", caption: "Teacher solution: parallel lamp-control arrangement." },
          { place: "answer", src: "assets/solarpv/waec-official/einstall235mq5-2-einstall235mq5a.png", caption: "Official WAEC reference: apartment layout symbols and positions." }
        ],
    note: "WAEC layout rule: prepare the legend before inserting symbols on the plan. It improves neatness and prevents symbol changes."
      }
    ]
  },
  {
    id: "test7",
    title: "Test 7 - Syllabus Calculation Tutorial",
    intro: "Calculation practice from Ohm's law, power, energy, illumination, cable resistance, transformer ratio, PV sizing and business costing.",
    items: [
      { no: 1, title: "Ohm's Law", prompts: [["a", "Calculate the current in a 24 V circuit with resistance of 6 &Omega;."]], answers: [["a", "I = V/R = 24/6 = 4 A."]] },
      { no: 2, title: "Resistance", prompts: [["a", "A lamp draws 2 A from a 12 V battery. Calculate its resistance."]], answers: [["a", "R = V/I = 12/2 = 6 &Omega;."]] },
      { no: 3, title: "Power", prompts: [["a", "Calculate the power of a 230 V appliance taking 5 A."]], answers: [["a", "P = VI = 230 x 5 = 1150 W = 1.15 kW."]] },
      { no: 4, title: "Energy Cost", prompts: [["a", "A 1.5 kW load operates for 4 hours. Calculate the energy consumed."]], answers: [["a", "Energy = power x time = 1.5 x 4 = 6 kWh."]] },
      { no: 5, title: "Fuse Selection", prompts: [["a", "A 920 W appliance is supplied at 230 V. Calculate the operating current and choose a suitable fuse from 3 A, 5 A and 13 A."]], answers: [["a", "I = P/V = 920/230 = 4 A. A 5 A fuse is suitable."]] },
      { no: 6, title: "Illumination", prompts: [["a", "Calculate illumination on a surface 3 m below a 540 cd point source."]], answers: [["a", "E = I/d&sup2; = 540/3&sup2; = 540/9 = 60 lux."]] },
      { no: 7, title: "Lamp Quantity", prompts: [["a", "A room requires 6000 lumens. If each lamp gives 1200 lumens, how many lamps are required?"]], answers: [["a", "Number of lamps = 6000/1200 = 5 lamps."]] },
      { no: 8, title: "Ring Circuit Spurs", prompts: [["a", "Using the past-question rule, calculate the recommended number of spurs for 12 socket outlets."]], answers: [["a", "Recommended spurs = 12/3 = 4 spurs."]] },
      { no: 9, title: "Series Battery Voltage", prompts: [["a", "Four 12 V batteries are connected in series. Calculate total voltage."]], answers: [["a", "Series voltages add: 12 x 4 = 48 V."]] },
      { no: 10, title: "Parallel Battery Capacity", prompts: [["a", "Three 12 V, 100 Ah batteries are connected in parallel. State total voltage and capacity."]], answers: [["a", "Voltage remains 12 V. Capacity adds: 100 x 3 = 300 Ah."]] },
      { no: 11, title: "PV Array Voltage", prompts: [["a", "Two 18 V PV modules are connected in series. Calculate output voltage."]], answers: [["a", "Series voltages add: 18 + 18 = 36 V."]] },
      { no: 12, title: "PV Array Current", prompts: [["a", "Three 8 A PV modules are connected in parallel. Calculate total current."]], answers: [["a", "Parallel currents add: 8 x 3 = 24 A."]] },
      { no: 13, title: "PV Power", prompts: [["a", "A PV module gives 36 V and 8 A. Calculate its power."]], answers: [["a", "P = VI = 36 x 8 = 288 W."]] },
      { no: 14, title: "Daily Energy", prompts: [["a", "A 200 W load runs for 5 hours daily. Calculate daily energy in Wh."]], answers: [["a", "Energy = 200 x 5 = 1000 Wh = 1 kWh."]] },
      { no: 15, title: "PV Sizing", prompts: [["a", "A load needs 1200 Wh per day. If effective sunshine is 5 hours, estimate minimum PV wattage ignoring losses."]], answers: [["a", "PV watts = 1200/5 = 240 W."]] },
      { no: 16, title: "Battery Sizing", prompts: [["a", "A 24 V system must store 2400 Wh. Calculate ideal Ah capacity."]], answers: [["a", "Ah = Wh/V = 2400/24 = 100 Ah."]] },
      { no: 17, title: "Charge Current", prompts: [["a", "A 300 W panel charges a 12 V battery system. Estimate charging current ignoring losses."]], answers: [["a", "I = P/V = 300/12 = 25 A."]] },
      { no: 18, title: "Transformer Ratio", prompts: [["a", "A transformer has 1000 primary turns and 200 secondary turns. If primary voltage is 230 V, calculate secondary voltage."]], answers: [["a", "Vs/Vp = Ns/Np. Vs = 230 x 200/1000 = 46 V."]] },
      { no: 19, title: "Cable Voltage Drop", prompts: [["a", "A cable has resistance 0.4 &Omega; and carries 10 A. Calculate voltage drop."]], answers: [["a", "Voltage drop = IR = 10 x 0.4 = 4 V."]] },
      { no: 20, title: "Business Borrowing", prompts: [["a", "A business estimate totals &#8358;92,000. If the candidate has &#8358;55,000, calculate amount to borrow."]], answers: [["a", "Amount to borrow = 92,000 - 55,000 = &#8358;37,000."]] },
      { no: 21, title: "Profit", prompts: [["a", "Materials cost &#8358;36,000 and labour charged is &#8358;14,000. If the customer pays &#8358;60,000, calculate profit."]], answers: [["a", "Total cost = 36,000 + 14,000 = &#8358;50,000. Profit = 60,000 - 50,000 = &#8358;10,000."]] },
      { no: 22, title: "Conduit Space Factor", prompts: [["a", "If total cable area is 120 mm&sup2; and conduit internal area is 400 mm&sup2;, calculate space factor percentage."]], answers: [["a", "Space factor = 120/400 x 100 = 30%. This is within 40%."]] },
      { no: 23, title: "Motor Output", prompts: [["a", "A motor output is 2 hp. Use 1 hp = 746 W to convert to watts."]], answers: [["a", "Output = 2 x 746 = 1492 W."]] },
      { no: 24, title: "Efficiency", prompts: [["a", "A motor input is 2000 W and output is 1600 W. Calculate efficiency."]], answers: [["a", "Efficiency = output/input x 100 = 1600/2000 x 100 = 80%."]] },
      { no: 25, title: "Megger Reading", prompts: [["a", "A measured insulation resistance is 0.25 M&Omega;. State whether it passes if the minimum acceptable value is 0.5 M&Omega;."]], answers: [["a", "It fails because 0.25 M&Omega; is less than 0.5 M&Omega;."]]}
    ]
  },
  {
    id: "test8",
    title: "Test 8 - 50 Objective Questions: Full Syllabus Concepts",
    intro: "Objective test covering safety, tools, accessories, wiring, machines, testing, maintenance, Solar PV and entrepreneurship.",
    objectiveMode: true,
    objectives: [
      { q: "The first action when rescuing a victim of electric shock is to", options: ["isolate the supply", "pour water on the victim", "pull the victim with bare hands", "apply oil to the skin"], answer: 0, explanation: "Supply isolation prevents the rescuer from also receiving electric shock." },
      { q: "A material that offers very high resistance to current is called", options: ["a conductor", "an insulator", "a semiconductor", "an electrode"], answer: 1, explanation: "Insulators oppose current flow and are used for electrical protection." },
      { q: "The instrument used for insulation resistance test is", options: ["ammeter", "voltmeter", "megger", "tachometer"], answer: 2, explanation: "A megger/insulation resistance tester applies test voltage and reads insulation resistance." },
      { q: "A fuse should normally be connected in the", options: ["neutral conductor", "live conductor", "earth electrode", "lamp glass"], answer: 1, explanation: "Fusing the live conductor disconnects the dangerous live supply during a fault." },
      { q: "Corrective maintenance is carried out", options: ["before any fault occurs", "after equipment breaks down", "only during installation", "only on new machines"], answer: 1, explanation: "Corrective maintenance restores faulty equipment to working condition." },
      { q: "Preventive maintenance includes", options: ["inspection and cleaning", "ignoring vibration", "overloading circuits", "removing earthing"], answer: 0, explanation: "Inspection, cleaning, tightening and lubrication prevent breakdown." },
      { q: "A 13 A socket is an example of", options: ["protective clothing", "electrical accessory", "winding tool", "earth electrode"], answer: 1, explanation: "Sockets, switches, lamp holders and plugs are electrical accessories." },
      { q: "The rotating part of a d.c. machine is the", options: ["field frame", "armature", "terminal box", "base plate"], answer: 1, explanation: "The armature is the rotating part of most d.c. machines." },
      { q: "Back e.m.f. in a d.c. motor opposes the", options: ["applied voltage", "shaft", "frame", "brush holder"], answer: 0, explanation: "Back e.m.f. is induced in the armature and opposes the supply voltage." },
      { q: "A squirrel-cage motor is a type of", options: ["d.c. generator", "induction motor", "photometer", "fuse carrier"], answer: 1, explanation: "Squirrel-cage and wound-rotor motors are induction motor types." },
      { q: "A three-phase induction motor is reversed by", options: ["interchanging any two supply lines", "removing the earth wire", "reducing lamp voltage", "adding a capacitor across neutral"], answer: 0, explanation: "Changing any two phases reverses the rotating magnetic field." },
      { q: "Single phasing means", options: ["one phase conductor is open", "all three phases are balanced", "neutral is oversized", "earth is disconnected only"], answer: 0, explanation: "Single phasing occurs when one line to a three-phase motor is open." },
      { q: "A totally enclosed motor is suitable for a dusty place because it", options: ["admits dust freely", "protects internal moving parts", "has no shaft", "uses only d.c."], answer: 1, explanation: "The enclosure reduces entry of dust and particles." },
      { q: "The e.m.f. of a Leclanche cell is about", options: ["0.5 V", "1.5 V", "12 V", "230 V"], answer: 1, explanation: "A Leclanche cell is commonly taken as about 1.5 V." },
      { q: "A primary cell is", options: ["rechargeable", "not rechargeable", "always 230 V", "an a.c. source"], answer: 1, explanation: "Primary cells are used once and are not normally recharged." },
      { q: "A secondary cell is", options: ["rechargeable", "never rechargeable", "a fuse", "a resistor"], answer: 0, explanation: "Secondary cells can be charged and discharged repeatedly." },
      { q: "Local action in a simple cell is minimized by", options: ["coating zinc with mercury", "removing electrolyte", "shorting the terminals", "adding dry sand"], answer: 0, explanation: "Amalgamating zinc reduces local action." },
      { q: "The instrument for measuring electrolyte specific gravity is", options: ["hydrometer", "photometer", "tachometer", "wattmeter"], answer: 0, explanation: "A hydrometer measures specific gravity of battery electrolyte." },
      { q: "Illumination is measured in", options: ["ohms", "lux", "amperes", "hertz"], answer: 1, explanation: "Lux is the unit of illumination." },
      { q: "The formula for illumination from a point source is", options: ["E = I/d&sup2;", "P = IV&sup2;", "R = VI", "F = ma"], answer: 0, explanation: "Illumination on a normal plane varies inversely with square of distance." },
      { q: "A sodium lamp is commonly used for", options: ["street lighting", "battery electrolyte", "measuring current", "rewinding slots"], answer: 0, explanation: "Sodium lamps are bright and useful for road/street lighting." },
      { q: "The switch in a lamp circuit should be connected in the", options: ["live conductor", "earth electrode only", "neutral only", "lamp glass"], answer: 0, explanation: "Switching the live conductor makes the lamp holder safer when off." },
      { q: "A two-way switch is used when a lamp is controlled from", options: ["two positions", "no position", "the earth electrode", "a fuse only"], answer: 0, explanation: "Two-way switching gives control from two locations." },
      { q: "In a domestic ring circuit, both ends of the loop connect to", options: ["one way in the distribution board", "different street poles", "the lamp glass", "a battery cap"], answer: 0, explanation: "A ring final circuit returns to the same protective way." },
      { q: "The common fuse rating in the captured ring-circuit question is", options: ["5 A", "13 A", "30 A", "100 A"], answer: 2, explanation: "The ring circuit answer guide gives 30 A protection." },
      { q: "The common cable size for the ring circuit question is", options: ["0.5 mm&sup2;", "1.0 mm&sup2;", "2.5 mm&sup2;", "10 mm&sup2;"], answer: 2, explanation: "2.5 mm&sup2; PVC/TRS cable is the expected size." },
      { q: "An ammeter is connected", options: ["in series", "in parallel only", "to earth only", "across the lamp glass"], answer: 0, explanation: "Current must pass through an ammeter, so it is connected in series." },
      { q: "A voltmeter is connected", options: ["in parallel", "in series only", "as a fuse", "as an earth rod"], answer: 0, explanation: "Voltage is measured across two points, so the voltmeter is parallel." },
      { q: "A charge controller in a PV system mainly", options: ["regulates battery charging", "acts as roof sheet", "stores sunlight", "changes a.c. to sunlight"], answer: 0, explanation: "The charge controller manages PV charging of the battery." },
      { q: "An inverter changes", options: ["d.c. to a.c.", "a.c. to wood", "earth to neutral", "light to conduit"], answer: 0, explanation: "Inverters convert d.c. supply to a.c. output." },
      { q: "PV modules connected in series increase", options: ["voltage", "room area", "frequency of sunlight", "earth resistance"], answer: 0, explanation: "Series PV connection adds voltage." },
      { q: "PV modules connected in parallel increase", options: ["current", "wire length only", "frequency", "insulation thickness only"], answer: 0, explanation: "Parallel connection adds current capacity." },
      { q: "Before battery charging, the room should be", options: ["well ventilated", "sealed completely", "filled with flame", "wet and slippery"], answer: 0, explanation: "Ventilation disperses gas produced during charging." },
      { q: "A naked flame should be avoided near charging batteries because", options: ["explosive gas may be present", "it improves charging", "it increases insulation", "it measures voltage"], answer: 0, explanation: "Hydrogen gas from charging can ignite." },
      { q: "The purpose of flux in soldering is to", options: ["remove oxide and help solder flow", "increase shock risk", "act as final insulation only", "replace the conductor"], answer: 0, explanation: "Flux cleans the joint and helps solder wet the metal." },
      { q: "A coupler in conduit work is used to", options: ["join two lengths of conduit", "measure speed", "hold electrolyte", "read current"], answer: 0, explanation: "A coupler connects conduit lengths." },
      { q: "A locknut is used to", options: ["hold conduit firmly", "measure illumination", "charge batteries", "reverse a motor"], answer: 0, explanation: "Locknuts secure conduit fittings and boxes." },
      { q: "Conduit burrs should be removed to prevent", options: ["cable abrasion", "brighter lamps", "lower gravity", "battery charging"], answer: 0, explanation: "Sharp burrs can damage cable insulation." },
      { q: "The conduit space factor commonly stated in the syllabus should not exceed", options: ["10%", "40%", "75%", "100%"], answer: 1, explanation: "The answer guide and syllabus notes use 40% as the limit." },
      { q: "A distribution board is used to", options: ["distribute and protect final circuits", "store acid", "measure speed only", "replace all switches"], answer: 0, explanation: "The DB houses protective devices and distributes circuits." },
      { q: "A ceiling rose is used to connect supply to", options: ["a pendant lamp", "a battery plate", "a motor shaft", "a hydrometer"], answer: 0, explanation: "A ceiling rose connects pendant lamp wiring." },
      { q: "A business cash book records", options: ["cash receipts and payments", "only lamp symbols", "motor speed only", "insulation colour only"], answer: 0, explanation: "A cash book tracks cash coming in and going out." },
      { q: "Trade credit means", options: ["obtaining goods now and paying later", "cash stolen from business", "a safety boot", "a type of fuse"], answer: 0, explanation: "Trade credit allows delayed payment to suppliers." },
      { q: "A proposal budget states", options: ["estimated costs", "only the candidate's name", "only symbol colours", "battery polarity only"], answer: 0, explanation: "A proposal must include cost and funding information." },
      { q: "In technical drawing, conductors should be drawn", options: ["straight and neat", "randomly curved", "without labels", "only in red crayon"], answer: 0, explanation: "WAEC practical diagrams reward neatness, standard symbols and labels." },
      { q: "A protective device is installed to prevent", options: ["electric shock and fire risk", "neat drawing", "room painting", "business records"], answer: 0, explanation: "Protective devices reduce shock, overcurrent and fire hazards." },
      { q: "A d.c. machine commutator works with", options: ["brushes", "lamp glass only", "PVC conduit only", "a hydrometer"], answer: 0, explanation: "Brushes and commutator form the d.c. machine current-collection system." },
      { q: "A motor winding that gets burnt should be", options: ["rewound after taking winding data", "washed with petrol and ignored", "connected directly to water", "used as a fuse"], answer: 0, explanation: "Winding data is taken before removing burnt windings for rewinding." },
      { q: "The best first step before dismantling a motor is to", options: ["mark the end shields", "break the shaft", "remove all labels", "short the supply"], answer: 0, explanation: "Marking helps correct reassembly." },
      { q: "A candidate should use a ruler in practical drawing to", options: ["keep conductors straight and professional", "increase current", "reduce battery voltage", "replace a switch"], answer: 0, explanation: "Straight lines improve readability and technical quality." }
    ]
  },
  {
    id: "test9",
    title: "Test 9 - 50 Objective Questions: Diagrams, BS Symbols and Practical Tasks",
    intro: "Objective test targeting diagram recognition, BS symbols, layout interpretation, tools and practical drawing tasks.",
    objectiveMode: true,
    objectives: [
      { q: "A resistor symbol in BS-style drawings represents a component that", options: ["opposes current", "stores acid", "rotates the shaft", "measures speed"], answer: 0, explanation: "A resistor limits/opposes current flow." },
      { q: "A capacitor symbol represents a component that", options: ["stores electric charge", "acts as a hammer", "is always an earth rod", "is a motor base"], answer: 0, explanation: "A capacitor stores electric charge and may improve power factor." },
      { q: "An earth electrode symbol indicates", options: ["connection to ground", "lamp filament", "battery cap", "switch handle only"], answer: 0, explanation: "Earth symbols show connection to the general mass of earth." },
      { q: "A circuit breaker symbol represents a device used for", options: ["circuit protection and switching", "measuring room length", "holding electrolyte", "cutting wood"], answer: 0, explanation: "Circuit breakers open circuits under fault conditions." },
      { q: "A fuse symbol represents a device that operates by", options: ["melting its element on excess current", "storing sunlight", "measuring lux", "adding battery acid"], answer: 0, explanation: "A fuse melts and opens the circuit during overcurrent." },
      { q: "An energy meter symbol is associated with", options: ["measuring electrical energy", "joining conduit", "holding lamps", "battery ventilation"], answer: 0, explanation: "Energy meters measure kWh consumption for billing." },
      { q: "A transformer symbol shows a device that changes", options: ["voltage level", "frequency", "water level", "room height"], answer: 0, explanation: "Transformers step voltage up or down but do not change frequency." },
      { q: "A discharge lamp symbol is used for", options: ["gas-discharge lighting", "a d.c. armature", "a conduit coupler", "a cash book"], answer: 0, explanation: "Discharge lamps produce light through gas discharge." },
      { q: "A change-over point symbol indicates", options: ["selection between supplies or paths", "earth resistance only", "lamp breakage", "battery hydrometer"], answer: 0, explanation: "Change-over devices transfer a connection from one path/supply to another." },
      { q: "Wires crossing without electrical connection should be drawn as", options: ["crossing without a junction dot/with bridge convention", "a large earth rod", "a fuse element only", "a motor symbol"], answer: 0, explanation: "Connected and unconnected wire crossings must be distinguished." },
      { q: "A socket outlet symbol on a layout should be placed", options: ["at practical wall positions", "in the middle of a window only", "inside the battery acid", "on the roof without reason"], answer: 0, explanation: "Socket outlets are located for safe and convenient appliance use." },
      { q: "A ceiling fan symbol should normally be placed", options: ["centrally in the room where required", "inside a wall line", "only in the distribution board", "on a socket symbol"], answer: 0, explanation: "A ceiling fan is normally central for effective air circulation." },
      { q: "A cooker control unit symbol belongs mainly in the", options: ["kitchen", "bathroom floor drain", "ceiling rose only", "battery cell"], answer: 0, explanation: "Cooker control is placed near cooking equipment." },
      { q: "A distribution board on a plan should be", options: ["accessible and safely located", "hidden behind permanent furniture", "inside a wet floor", "inside a lamp bulb"], answer: 0, explanation: "Access is needed for isolation and protection." },
      { q: "A legend is useful because it", options: ["explains symbols used on the drawing", "replaces all wiring", "increases current", "charges batteries"], answer: 0, explanation: "A legend/key identifies symbols on a plan." },
      { q: "In a drawing of two-way switching, L1 and L2 conductors are called", options: ["strappers/travellers", "earth electrodes", "battery plates", "fuse links only"], answer: 0, explanation: "Strappers connect corresponding terminals between two 2-way switches." },
      { q: "A lamp controlled by one switch from one location uses", options: ["one-way switching", "star-delta starting", "hydrometer testing", "armature winding"], answer: 0, explanation: "One-way switching controls a point from one position." },
      { q: "Three lamps each controlled independently require", options: ["separate switch paths for each lamp", "one unlabelled earth rod only", "no neutral", "only a hydrometer"], answer: 0, explanation: "Independent control means each switch controls its own lamp." },
      { q: "A ring final circuit diagram must show the circuit", options: ["returning to the same distribution board way", "ending at the first socket", "connected to battery acid", "drawn without socket symbols"], answer: 0, explanation: "A ring is a loop connected at both ends to the same protective way." },
      { q: "A spur on a ring circuit is", options: ["a branch from the ring", "a motor bearing", "a cell defect", "a photometer part"], answer: 0, explanation: "A spur feeds an outlet from the ring circuit." },
      { q: "A simple cell drawing should include", options: ["electrodes, electrolyte and container", "only a switch", "only a motor shaft", "only a fuse"], answer: 0, explanation: "A simple cell needs positive/negative electrodes and electrolyte." },
      { q: "A Leclanche cell carbon plate is usually the", options: ["positive electrode", "negative electrode", "earth rod", "lamp holder"], answer: 0, explanation: "Carbon is the positive electrode in the Leclanche cell." },
      { q: "A zinc plate in a simple Leclanche cell is the", options: ["negative electrode", "circuit breaker", "photometer base", "ceiling rose"], answer: 0, explanation: "Zinc is the negative electrode." },
      { q: "A motor longitudinal section drawing should label", options: ["rotor, stator winding, shaft and base", "only lamps", "only sockets", "only cash book"], answer: 0, explanation: "Those are key motor parts commonly labelled in WAEC diagrams." },
      { q: "In a stator winding terminal diagram, A1, B1 and C1 usually indicate", options: ["start terminals", "earth electrodes", "lamp caps", "cash records"], answer: 0, explanation: "A1/B1/C1 are winding starts; A2/B2/C2 are ends." },
      { q: "In star connection, the winding ends are", options: ["joined together", "left open at random", "connected to lamp glass", "used as a fuse"], answer: 0, explanation: "Joining the ends forms the star point." },
      { q: "In delta connection, each winding end is connected to", options: ["the next winding start", "earth only", "battery acid", "a ceiling fan blade"], answer: 0, explanation: "Delta forms a closed triangular connection." },
      { q: "A correct voltmeter drawing places it", options: ["across the load", "in series with the load", "inside a fuse carrier", "inside electrolyte"], answer: 0, explanation: "A voltmeter is connected in parallel across the load." },
      { q: "A correct ammeter drawing places it", options: ["in series with the load", "across the load", "between earth and soil only", "inside a lamp cap"], answer: 0, explanation: "An ammeter is placed in series to measure current flow." },
      { q: "A PVC armoured cable drawing should identify", options: ["outer sheath, armour, insulation and conductor", "lamp glass only", "cash book only", "hydrometer float only"], answer: 0, explanation: "Those are core layers in an armoured cable." },
      { q: "A conduit elbow is used to", options: ["change direction of conduit run", "measure speed", "store energy", "act as a cell"], answer: 0, explanation: "Elbows help conduit turn through an angle." },
      { q: "An inspection tee gives", options: ["branching and access for cable drawing", "battery specific gravity", "motor horsepower only", "lamp brightness only"], answer: 0, explanation: "Inspection fittings provide access at bends/branches." },
      { q: "A through box is used mainly for", options: ["straight conduit run access", "battery charging only", "measuring current", "business accounting"], answer: 0, explanation: "Through boxes assist cable drawing in straight conduit runs." },
      { q: "Pliers in a tool diagram are used for", options: ["holding, gripping, twisting or cutting conductors", "measuring lux only", "charging batteries", "recording purchases"], answer: 0, explanation: "Combination pliers are common hand tools for conductor work." },
      { q: "A screwdriver is used for", options: ["driving screws", "measuring energy", "filling acid", "drawing earth only"], answer: 0, explanation: "Screwdrivers tighten and loosen screws." },
      { q: "A hammer is used for", options: ["driving nails", "measuring voltage", "holding electrolyte", "starting motors"], answer: 0, explanation: "Surface wiring often uses hammer and clips/nails." },
      { q: "A neon tester is used to", options: ["detect presence of voltage", "measure speed", "increase PV output", "draw a ring circuit"], answer: 0, explanation: "A neon tester indicates live voltage." },
      { q: "A measuring tape is used to", options: ["measure cable lengths and positions", "measure current", "store solar energy", "protect against overload"], answer: 0, explanation: "Measuring and marking are part of installation layout." },
      { q: "A photometer is associated with", options: ["illumination measurement", "motor dismantling", "business funding", "wire stripping only"], answer: 0, explanation: "Photometers/light meters measure light intensity/illumination." },
      { q: "A tachometer is used to measure", options: ["speed of rotation", "insulation resistance", "specific gravity", "lamp cap size"], answer: 0, explanation: "Tachometers measure rotational speed." },
      { q: "The best way to reproduce a WAEC diagram is to", options: ["observe proportions, then redraw neatly with labels", "copy only the title", "ignore terminal names", "shade all symbols black"], answer: 0, explanation: "Marks are awarded for correct arrangement, symbols and labels." },
      { q: "A diagram label line should", options: ["point clearly to the part being named", "cross all parts randomly", "hide the drawing", "replace the answer text"], answer: 0, explanation: "Clear leader lines improve identification." },
      { q: "In layout drawings, symbols should not", options: ["overlap walls and labels", "be listed in a legend", "be drawn neatly", "be standard"], answer: 0, explanation: "Overlapping symbols make the drawing unclear." },
      { q: "A joint box is used to", options: ["house conductor joints", "measure voltage", "store acid", "rewind motors"], answer: 0, explanation: "Joint boxes protect and enclose joints." },
      { q: "A lamp holder is used to", options: ["hold and connect a lamp", "hold a motor rotor", "measure insulation", "borrow capital"], answer: 0, explanation: "Lamp holders provide mechanical support and electrical contact." },
      { q: "A ceiling rose is normally drawn in", options: ["lighting circuits", "battery cells only", "motor shafts only", "business tables only"], answer: 0, explanation: "Ceiling roses are lighting accessories." },
      { q: "A fan regulator symbol is used with", options: ["ceiling fan control", "battery electrolyte", "fuse rewiring", "hydrometer reading"], answer: 0, explanation: "Fan regulators control ceiling fan speed." },
      { q: "The best colour-free exam drawing practice is to distinguish wires by", options: ["labels and line routing", "random shading", "smudging", "unlabelled loops"], answer: 0, explanation: "WAEC answer booklets are usually pencil/pen drawings; labels matter." },
      { q: "When drawing a supply sequence, the meter comes after the", options: ["service fuse", "final lamp only", "cooker only", "battery plate"], answer: 0, explanation: "Typical sequence: service cable, service fuse, meter, main switch, distribution board." },
      { q: "When drawing a PV system, the charge controller is placed between", options: ["PV module and battery bank", "lamp glass and switch only", "earth rod and soil only", "cash book and receipt"], answer: 0, explanation: "The controller regulates charging between PV modules and batteries." }
    ]
  },
  {
    id: "test10",
    title: "Test 10 - 50 Calculation Objectives",
    intro: "Calculation objective test covering electrical principles, illumination, PV sizing, batteries, transformer ratio, cable voltage drop, ring spurs and business costing.",
    objectiveMode: true,
    objectives: [
      { q: "A 12 V circuit has 3 &Omega; resistance. Current is", options: ["4 A", "9 A", "15 A", "36 A"], answer: 0, explanation: "I = V/R = 12/3 = 4 A." },
      { q: "A 24 V supply drives 6 A. Resistance is", options: ["4 &Omega;", "30 &Omega;", "144 &Omega;", "18 &Omega;"], answer: 0, explanation: "R = V/I = 24/6 = 4 &Omega;." },
      { q: "A 230 V appliance takes 2 A. Power is", options: ["460 W", "115 W", "232 W", "228 W"], answer: 0, explanation: "P = VI = 230 x 2 = 460 W." },
      { q: "A 1000 W load runs for 3 hours. Energy is", options: ["3 kWh", "0.3 kWh", "300 kWh", "1003 kWh"], answer: 0, explanation: "1 kW x 3 h = 3 kWh." },
      { q: "A 60 W lamp on 230 V takes approximately", options: ["0.26 A", "3.83 A", "13.8 A", "290 A"], answer: 0, explanation: "I = P/V = 60/230 = 0.26 A approximately." },
      { q: "A 1150 W heater on 230 V takes", options: ["5 A", "0.2 A", "920 A", "1380 A"], answer: 0, explanation: "I = 1150/230 = 5 A." },
      { q: "A point source of 128 cd is 4 m away. Illumination is", options: ["8 lux", "32 lux", "512 lux", "2 lux"], answer: 0, explanation: "E = I/d&sup2; = 128/16 = 8 lux." },
      { q: "A point source of 540 cd is 3 m away. Illumination is", options: ["60 lux", "180 lux", "1620 lux", "6 lux"], answer: 0, explanation: "E = 540/9 = 60 lux." },
      { q: "A room needs 4800 lumens. Each lamp gives 800 lumens. Lamps needed are", options: ["6", "4", "8", "12"], answer: 0, explanation: "4800/800 = 6 lamps." },
      { q: "A 1.2 kW load operates for 5 hours. Energy is", options: ["6 kWh", "0.24 kWh", "12 kWh", "5.2 kWh"], answer: 0, explanation: "1.2 x 5 = 6 kWh." },
      { q: "If energy tariff is &#8358;70/kWh, 6 kWh costs", options: ["&#8358;420", "&#8358;76", "&#8358;700", "&#8358;35"], answer: 0, explanation: "6 x 70 = &#8358;420." },
      { q: "Two 12 V batteries in series give", options: ["24 V", "12 V", "6 V", "144 V"], answer: 0, explanation: "Series voltages add." },
      { q: "Four 12 V batteries in series give", options: ["48 V", "24 V", "12 V", "36 V"], answer: 0, explanation: "12 x 4 = 48 V." },
      { q: "Three 100 Ah batteries in parallel give capacity", options: ["300 Ah", "100 Ah", "33 Ah", "12 Ah"], answer: 0, explanation: "Parallel capacities add." },
      { q: "Two 150 W PV panels in series have total power", options: ["300 W", "150 W", "75 W", "600 W"], answer: 0, explanation: "Power ratings add when both panels operate at rated condition." },
      { q: "Two 18 V, 8 A panels in series give array voltage", options: ["36 V", "18 V", "8 V", "26 V"], answer: 0, explanation: "Series voltage = 18 + 18 = 36 V." },
      { q: "Two 18 V, 8 A panels in parallel give current", options: ["16 A", "8 A", "36 A", "10 A"], answer: 0, explanation: "Parallel current = 8 + 8 = 16 A." },
      { q: "A 36 V panel supplies 8 A. Power is", options: ["288 W", "44 W", "4.5 W", "360 W"], answer: 0, explanation: "P = VI = 36 x 8 = 288 W." },
      { q: "A 1200 Wh daily load with 5 peak sun hours needs minimum PV power of", options: ["240 W", "6000 W", "60 W", "1205 W"], answer: 0, explanation: "PV watts = 1200/5 = 240 W ignoring losses." },
      { q: "A 2400 Wh store on a 24 V battery needs ideal capacity", options: ["100 Ah", "240 Ah", "24 Ah", "57,600 Ah"], answer: 0, explanation: "Ah = Wh/V = 2400/24 = 100 Ah." },
      { q: "A 600 W inverter at 12 V draws ideal current", options: ["50 A", "5 A", "7200 A", "0.02 A"], answer: 0, explanation: "I = P/V = 600/12 = 50 A." },
      { q: "A 300 W panel charging a 12 V system gives ideal current", options: ["25 A", "3.6 A", "288 A", "312 A"], answer: 0, explanation: "I = P/V = 300/12 = 25 A." },
      { q: "If a 24 V load current is 10 A, power is", options: ["240 W", "2.4 W", "34 W", "14 W"], answer: 0, explanation: "P = VI = 24 x 10 = 240 W." },
      { q: "A cable of 0.5 &Omega; carries 8 A. Voltage drop is", options: ["4 V", "16 V", "0.0625 V", "8.5 V"], answer: 0, explanation: "Vdrop = IR = 8 x 0.5 = 4 V." },
      { q: "A cable drops 6 V at 12 A. Resistance is", options: ["0.5 &Omega;", "72 &Omega;", "18 &Omega;", "2 &Omega;"], answer: 0, explanation: "R = V/I = 6/12 = 0.5 &Omega;." },
      { q: "A transformer with Np=1000, Ns=500 and Vp=240 V gives Vs", options: ["120 V", "480 V", "740 V", "2 V"], answer: 0, explanation: "Vs = 240 x 500/1000 = 120 V." },
      { q: "A transformer steps 230 V down to 46 V. Voltage ratio is", options: ["5:1", "1:5", "276:1", "184:1"], answer: 0, explanation: "230/46 = 5." },
      { q: "A motor input is 2000 W and output is 1500 W. Efficiency is", options: ["75%", "50%", "125%", "25%"], answer: 0, explanation: "Efficiency = 1500/2000 x 100 = 75%." },
      { q: "A 2 hp motor output in watts using 746 W/hp is", options: ["1492 W", "748 W", "1500 hp", "373 W"], answer: 0, explanation: "2 x 746 = 1492 W." },
      { q: "A 30 A ring circuit at 230 V has maximum apparent power of", options: ["6900 VA", "260 VA", "7.67 VA", "23030 VA"], answer: 0, explanation: "S = VI = 230 x 30 = 6900 VA." },
      { q: "Using the past-question rule, 9 socket outlets give spurs", options: ["3", "6", "9", "27"], answer: 0, explanation: "Spurs = 9/3 = 3." },
      { q: "Using the same rule, 15 socket outlets give spurs", options: ["5", "3", "45", "12"], answer: 0, explanation: "15/3 = 5." },
      { q: "Total cable area 160 mm&sup2; in conduit area 400 mm&sup2; gives space factor", options: ["40%", "25%", "160%", "2.5%"], answer: 0, explanation: "160/400 x 100 = 40%." },
      { q: "Total cable area 100 mm&sup2; in conduit area 500 mm&sup2; gives", options: ["20%", "50%", "5%", "400%"], answer: 0, explanation: "100/500 x 100 = 20%." },
      { q: "A business estimate is &#8358;66,000 and capital is &#8358;50,000. Borrowing is", options: ["&#8358;16,000", "&#8358;116,000", "&#8358;50,000", "&#8358;66,000"], answer: 0, explanation: "66,000 - 50,000 = 16,000." },
      { q: "Materials cost &#8358;40,000 and labour is &#8358;15,000. Total cost is", options: ["&#8358;55,000", "&#8358;25,000", "&#8358;600,000", "&#8358;40,015"], answer: 0, explanation: "40,000 + 15,000 = 55,000." },
      { q: "Selling price &#8358;80,000 and total cost &#8358;55,000 gives profit", options: ["&#8358;25,000", "&#8358;135,000", "&#8358;55,000", "&#8358;80,000"], answer: 0, explanation: "80,000 - 55,000 = 25,000." },
      { q: "Five coils at &#8358;3,500 each cost", options: ["&#8358;17,500", "&#8358;8,500", "&#8358;35,000", "&#8358;700"], answer: 0, explanation: "5 x 3,500 = 17,500." },
      { q: "Twenty bulbs at &#8358;800 each cost", options: ["&#8358;16,000", "&#8358;820", "&#8358;8,000", "&#8358;20,800"], answer: 0, explanation: "20 x 800 = 16,000." },
      { q: "Ten switches at &#8358;250 each cost", options: ["&#8358;2,500", "&#8358;260", "&#8358;25,000", "&#8358;1,250"], answer: 0, explanation: "10 x 250 = 2,500." },
      { q: "A 5 A current flows for 2 hours from a battery. Charge used is", options: ["10 Ah", "2.5 Ah", "7 Ah", "25 Ah"], answer: 0, explanation: "Ah = current x time = 5 x 2 = 10 Ah." },
      { q: "A 100 Ah battery supplying 5 A ideally lasts", options: ["20 h", "5 h", "100 h", "500 h"], answer: 0, explanation: "Time = Ah/I = 100/5 = 20 h." },
      { q: "A 48 V battery bank of 100 Ah stores ideal energy", options: ["4800 Wh", "148 Wh", "48 Wh", "100 Wh"], answer: 0, explanation: "Wh = V x Ah = 48 x 100 = 4800 Wh." },
      { q: "A 12 V, 200 Ah battery stores", options: ["2400 Wh", "212 Wh", "16.7 Wh", "2000 Wh"], answer: 0, explanation: "12 x 200 = 2400 Wh." },
      { q: "Three 100 W lamps run for 4 hours. Energy is", options: ["1.2 kWh", "12 kWh", "0.12 kWh", "300 kWh"], answer: 0, explanation: "Total power = 300 W = 0.3 kW; energy = 0.3 x 4 = 1.2 kWh." },
      { q: "A 150 W fan runs for 8 hours. Energy is", options: ["1.2 kWh", "18.75 kWh", "120 kWh", "0.187 kWh"], answer: 0, explanation: "0.15 kW x 8 h = 1.2 kWh." },
      { q: "A 60 W lamp at 12 V draws", options: ["5 A", "0.2 A", "720 A", "48 A"], answer: 0, explanation: "I = P/V = 60/12 = 5 A." },
      { q: "A 12 V circuit draws 5 A. Resistance is", options: ["2.4 &Omega;", "60 &Omega;", "17 &Omega;", "0.42 &Omega;"], answer: 0, explanation: "R = 12/5 = 2.4 &Omega;." },
      { q: "A 1 M&Omega; insulation reading equals", options: ["1,000,000 &Omega;", "1000 &Omega;", "100 &Omega;", "0.5 &Omega;"], answer: 0, explanation: "Mega means one million." },
      { q: "A 0.5 M&Omega; reading equals", options: ["500,000 &Omega;", "500 &Omega;", "50 &Omega;", "5 &Omega;"], answer: 0, explanation: "0.5 x 1,000,000 = 500,000 &Omega;." }
    ]
  }
];
