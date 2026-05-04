/* =========================================================
   CHIATECH WAEC SOLAR PV INSTALLATION AND MAINTENANCE 2026
   solarpv.js
   SECTION 1: SYLLABUS + FACT SHEET
   Adopted and harmonized from the old WAEC Electrical
   Installation and Maintenance Work syllabus.
========================================================= */

window.WAEC_SUBJECTS = window.WAEC_SUBJECTS || {};

window.WAEC_SUBJECTS["solarpv"] = {
  subject: "Solar PV Installation and Maintenance",
  exam: "WAEC",
  year: "2026",
  brand: "CHIATECH Solutions & Resources Ltd",
  cardImage: "assets/common/subject-cards/solarpv.png",
  adoptedFrom: "WAEC Electrical Installation and Maintenance Work",
  description:
    "Master safety, electrical installation practice, PV components, wiring, protection, testing, maintenance, fault diagnosis and business readiness using the old WAEC Electrical Installation syllabus as the adopted technical base.",

  syllabus: {
    title: "WAEC Solar PV Installation and Maintenance Syllabus and Master Study Guide",
    teacherIntro:
      "Solar PV is best learnt as practical electrical installation with a renewable-energy focus. This guide adopts the old WAEC Electrical Installation and Maintenance Work syllabus, then connects each topic to PV modules, batteries, charge controllers, inverters, isolators, earthing, protection, testing and maintenance. Students should learn the name of each tool or accessory, its purpose, the safe method of use, the correct wiring principle and the WAEC-style explanation.",

    adoptionNote:
      "The official working base is Electrical Installation and Maintenance Work. Solar PV examples have been added where they strengthen safety, wiring, protection, testing, maintenance and entrepreneurship preparation.",

    aims: [
      "Understand safety rules and statutory regulations in electrical and Solar PV installation work.",
      "Identify and use electrical tools, materials, accessories, cables, cells and measuring instruments correctly.",
      "Interpret working drawings, wiring diagrams, circuit symbols and installation layouts.",
      "Apply sound workshop practice in surface wiring, conduit wiring, joints, terminations, soldering, illumination and domestic installation.",
      "Understand generation, transmission and distribution as the background for grid-tied and stand-alone PV supply.",
      "Install and maintain protective devices, domestic circuits, batteries, controllers, inverters, machines and related equipment.",
      "Diagnose faults using observation, testing instruments and logical troubleshooting steps.",
      "Acquire entrepreneurship skills for small-scale installation, maintenance and repair services."
    ],

    examinationObjectives: [
      {
        skill: "Knowledge and Understanding",
        details: [
          "Recall electrical safety rules, first-aid steps, statutory regulations and workshop procedures.",
          "Name tools, cables, accessories, cells, protective devices and measuring instruments.",
          "Explain the functions of switches, fuses, circuit breakers, ELCB/RCD units, distribution boards, meters, lamps, motors, generators and PV balance-of-system components.",
          "Recognize common electrical and PV symbols on diagrams and layout drawings."
        ]
      },
      {
        skill: "Application and Installation Skill",
        details: [
          "Select suitable tools, cables, wiring methods and protective devices for a given installation.",
          "Interpret domestic wiring, conduit routes, lighting points, socket outlets and PV cable runs.",
          "Apply safe polarity, earthing, isolation, cable sizing and termination practices.",
          "Relate old WAEC installation topics to modern PV systems: module wiring, battery banks, charge controllers, inverters, AC output circuits and protection."
        ]
      },
      {
        skill: "Testing, Maintenance and Fault Diagnosis",
        details: [
          "Use continuity, polarity, insulation resistance and earth-continuity tests correctly.",
          "State precautions before energizing, isolating or testing an installation.",
          "Identify likely causes of faults such as open circuit, short circuit, earth leakage, overload, loose connection, low insulation resistance and reversed polarity.",
          "Distinguish preventive, corrective and emergency maintenance."
        ]
      },
      {
        skill: "Practical and Business Readiness",
        details: [
          "Prepare neat wiring boards, joints, terminations, tables, diagrams and installation reports.",
          "Explain safe handling of batteries, tools, ladders, conductors and energized equipment.",
          "Prepare simple estimates, budgets and proposals for installation and maintenance work.",
          "Understand registration, customer records, costing, quality assurance and after-service support."
        ]
      }
    ],

    paperStructure: {
      paper1: {
        name: "Paper 1",
        type: "Objective",
        format: "Multiple-choice questions on safety, tools, materials, wiring practice, protection, machines, testing, maintenance and entrepreneurship.",
        studentTarget:
          "Answer quickly but carefully. Expect definitions, apparatus identification, symbols, wiring accessories, first aid, regulations, testing instruments and practical fault situations."
      },
      paper2: {
        name: "Paper 2",
        type: "Essay / Theory",
        format: "Structured questions requiring explanations, labelled diagrams, comparisons, procedures, calculations and maintenance reasoning.",
        studentTarget:
          "Use correct technical terms. Give functions, steps, advantages, disadvantages, precautions and clear diagram labels where required."
      },
      paper3: {
        name: "Practical / Test of Practical Work",
        type: "Practical / Alternative to Practical",
        format: "Tasks based on tools, joints, wiring boards, conduit accessories, testing instruments, machines, circuits, fault tracing and installation interpretation.",
        studentTarget:
          "Identify apparatus, state uses, follow safe procedure, draw neat diagrams, complete tables and explain observations in workshop language."
      }
    },

    topicGroups: [
      {
        group: "1. Workshop Safety Rules and Regulations",
        topics: [
          {
            title: "Hazards and Dangers in Electrical Workshops",
            keyConcepts: [
              "Electric shock",
              "Short circuit",
              "Fire hazard",
              "Overload",
              "Poor insulation",
              "Loose connection",
              "Wrong tool use",
              "Battery and PV DC hazard"
            ],
            facts: [
              "Electric shock occurs when current passes through the body.",
              "Loose live conductors can cause shock, sparking, short circuit and fire.",
              "PV modules can produce voltage whenever exposed to light, so DC conductors must be treated as live.",
              "Wet floors, damaged insulation and metallic jewellery increase electrical danger."
            ],
            waecFocus:
              "WAEC commonly asks for workshop hazards, causes of accidents, accident prevention and safe handling of tools and materials."
          },
          {
            title: "First Aid and Rescue from Electric Shock",
            keyConcepts: [
              "Isolation of supply",
              "Non-conducting rescue aid",
              "Artificial respiration",
              "Burn treatment",
              "First-aid box",
              "Emergency reporting"
            ],
            facts: [
              "Do not touch a person in contact with a live conductor until the supply is isolated or contact is broken safely.",
              "A dry wooden stick, dry cloth or other insulating material may be used to separate a victim from a live part.",
              "Artificial respiration is used when breathing has stopped and should continue until breathing resumes or medical help arrives.",
              "First aid is temporary treatment before professional medical care."
            ],
            waecFocus:
              "Know the first action in electric shock cases, contents of a first-aid box and steps in artificial respiration."
          },
          {
            title: "Statutory Regulations and Safe Work Practice",
            keyConcepts: [
              "Electrical regulations",
              "Personal protective equipment",
              "Lock-out and isolation",
              "Warning signs",
              "Permit to work",
              "Standard materials"
            ],
            facts: [
              "Regulations promote safe and standard installation practice.",
              "Isolation, testing and warning notices reduce accidents during maintenance.",
              "Approved materials and correct cable sizes protect users and equipment.",
              "Good workmanship includes neat routing, firm support, proper termination and correct labelling."
            ],
            waecFocus:
              "State the purpose of regulations and list safe practices before, during and after installation work."
          }
        ]
      },

      {
        group: "2. Tools, Materials, Cables and Accessories",
        topics: [
          {
            title: "Tools and Measuring Instruments",
            keyConcepts: [
              "Measuring tools",
              "Marking tools",
              "Cutting tools",
              "Striking tools",
              "Driving tools",
              "Drilling tools",
              "Multimeter",
              "Megger insulation tester"
            ],
            facts: [
              "Measuring tools include measuring tape, steel rule, micrometer screw gauge and standard wire gauge.",
              "Screwdrivers, pliers, cable cutters, hacksaws, hammers and chisels must be used for their correct purposes.",
              "A multimeter can measure voltage, current and resistance depending on the selected range.",
              "A megger is used to test insulation resistance."
            ],
            waecFocus:
              "Identify tools from diagrams, state their uses and match measuring instruments with the quantities they measure."
          },
          {
            title: "Cables, Conductors and Current Rating",
            keyConcepts: [
              "Conductor",
              "Insulation",
              "PVC cable",
              "Armoured cable",
              "Flexible cord",
              "MICC cable",
              "Cable size",
              "Current rating",
              "Voltage drop"
            ],
            facts: [
              "A cable is an insulated conductor or a group of insulated conductors protected for electrical use.",
              "Cable current rating depends on conductor size, insulation, installation method, grouping and ambient temperature.",
              "As ambient temperature increases, the safe current-carrying capacity of a cable decreases.",
              "PV DC cables should be correctly sized, weather-resistant where exposed, and connected with correct polarity."
            ],
            waecFocus:
              "Expect questions on cable types, cable preparation, constructional features, current rating and effects of temperature."
          },
          {
            title: "Electrical Accessories and Cells",
            keyConcepts: [
              "Switches",
              "Socket outlets",
              "Plugs",
              "Lamp holders",
              "Junction boxes",
              "Conduit boxes",
              "Primary cells",
              "Secondary cells",
              "Battery banks"
            ],
            facts: [
              "A one-way switch controls a lamp from one point; a two-way switch controls a lamp from two points.",
              "Conduit boxes allow cable drawing, inspection and branching of conduit runs.",
              "Primary cells are not rechargeable; secondary cells are rechargeable.",
              "PV systems commonly use rechargeable batteries for energy storage."
            ],
            waecFocus:
              "Know symbols, uses and identification of common accessories such as switches, sockets, lamp holders, plugs, ceiling roses, conduit boxes and batteries."
          }
        ]
      },

      {
        group: "3. Workshop Practice and Wiring Systems",
        topics: [
          {
            title: "Working Drawing, Symbols and Layout Interpretation",
            keyConcepts: [
              "Working drawing",
              "Circuit diagram",
              "Wiring diagram",
              "Layout drawing",
              "BS symbols",
              "Single-line diagram",
              "Scale drawing"
            ],
            facts: [
              "A working drawing guides the installer on positions of fittings, routes and connections.",
              "Electrical symbols make drawings compact and standard.",
              "A layout drawing shows physical positions of lights, switches, socket outlets and equipment.",
              "PV drawings may include modules, combiner boxes, charge controllers, batteries, inverters, isolators and loads."
            ],
            waecFocus:
              "WAEC likes symbol recognition, living-room wiring layouts and interpretation of single-line diagrams."
          },
          {
            title: "Surface Wiring and Conduit Wiring",
            keyConcepts: [
              "Surface wiring",
              "Concealed conduit",
              "Open conduit",
              "Inspection elbow",
              "Through box",
              "Bends",
              "Bushes",
              "Saddles"
            ],
            facts: [
              "Surface wiring is installed on the surface of walls or ceilings and is easy to inspect.",
              "Conduit wiring protects cables mechanically and gives a neat installation.",
              "Inspection fittings allow cables to be drawn and inspected.",
              "Cables should not be overfilled in conduits, sharply bent or pulled with damaged insulation."
            ],
            waecFocus:
              "Identify conduit accessories, state their functions and explain advantages or disadvantages of wiring systems."
          },
          {
            title: "Illumination, Lamps and Lighting Circuits",
            keyConcepts: [
              "Illumination",
              "Luminous flux",
              "Lamp types",
              "Maintenance factor",
              "Street lighting",
              "Lighting control",
              "Energy efficiency"
            ],
            facts: [
              "Illumination is the amount of light falling on a surface.",
              "Maintenance factor accounts for reduction in light output due to dirt and ageing.",
              "Common lamps include incandescent, fluorescent, sodium vapour, mercury vapour and LED lamps.",
              "Solar lighting systems combine PV modules, charge controllers, batteries, LED lamps and controls."
            ],
            waecFocus:
              "Know lamp types, lighting terms, maintenance factor and practical lighting applications."
          },
          {
            title: "Joints, Terminations and Soldering",
            keyConcepts: [
              "Married joint",
              "Tee joint",
              "Britannia joint",
              "Western union joint",
              "Soldering",
              "Flux",
              "Crimping",
              "Terminal blocks"
            ],
            facts: [
              "A good joint must be mechanically firm, electrically continuous and properly insulated.",
              "Soldering uses solder and flux to make a firm electrical joint.",
              "Terminations must be tight to reduce heating, voltage drop and intermittent faults.",
              "PV connectors and battery lugs must be correctly crimped and protected against corrosion."
            ],
            waecFocus:
              "Expect identification of joints, reasons for soldering, qualities of a good joint and termination precautions."
          },
          {
            title: "Inspection and Testing of Installations",
            keyConcepts: [
              "Visual inspection",
              "Continuity test",
              "Polarity test",
              "Insulation resistance test",
              "Earth continuity",
              "Functional test",
              "Megger",
              "Multimeter"
            ],
            facts: [
              "Visual inspection comes before electrical testing.",
              "Continuity test confirms an unbroken conducting path.",
              "Polarity test confirms that switches and protective devices are placed in the live conductor.",
              "Insulation resistance test checks leakage through damaged or weak insulation."
            ],
            waecFocus:
              "Know test instruments, test sequence, acceptable insulation ideas, precautions and how to interpret common test results."
          }
        ]
      },

      {
        group: "4. Supply Systems, Machines, Protection and Maintenance",
        topics: [
          {
            title: "Generation, Transmission and Distribution",
            keyConcepts: [
              "Power generation",
              "Transmission",
              "Distribution",
              "Transformer",
              "Overhead line",
              "Underground cable",
              "Consumer unit",
              "PV supply"
            ],
            facts: [
              "Electric power is generated, stepped up for transmission and stepped down for distribution.",
              "Transformers work on alternating current.",
              "A distribution board houses protective and control devices for final circuits.",
              "PV systems may be stand-alone, hybrid or grid-tied depending on the source arrangement."
            ],
            waecFocus:
              "Understand basic supply-chain diagrams, transformer function, overhead and underground installations."
          },
          {
            title: "Protective Devices and Earthing",
            keyConcepts: [
              "Fuse",
              "MCB",
              "ELCB",
              "RCD",
              "Circuit breaker",
              "Earthing",
              "Overload",
              "Short circuit",
              "Isolation"
            ],
            facts: [
              "A fuse protects a circuit by melting when excess current flows.",
              "A circuit breaker disconnects a circuit during fault or overload conditions.",
              "Earthing provides a low-resistance path for fault current and helps protect users.",
              "PV installations require suitable DC and AC isolation, overcurrent protection and earthing or bonding where applicable."
            ],
            waecFocus:
              "Identify protective devices, state their functions and explain why correct rating and placement are important."
          },
          {
            title: "D.C. Machines, A.C. Machines and Rewinding",
            keyConcepts: [
              "D.C. generator",
              "D.C. motor",
              "A.C. motor",
              "Armature",
              "Commutator",
              "Slip ring",
              "Field winding",
              "Rewinding tools"
            ],
            facts: [
              "A motor converts electrical energy to mechanical energy.",
              "A generator converts mechanical energy to electrical energy.",
              "A commutator is associated with many d.c. machines; slip rings are used in some a.c. machines and alternators.",
              "Rewinding requires correct coil data, insulation, slot preparation, connections and testing."
            ],
            waecFocus:
              "Compare motors and generators, identify machine parts, state faults and causes, and know basic rewinding tools."
          },
          {
            title: "Maintenance, Repair and Troubleshooting",
            keyConcepts: [
              "Preventive maintenance",
              "Corrective maintenance",
              "Fault tracing",
              "Open circuit",
              "Short circuit",
              "Earth fault",
              "Loose connection",
              "Overheating"
            ],
            facts: [
              "Preventive maintenance is planned work carried out to reduce failures.",
              "Corrective maintenance is repair after a fault has occurred.",
              "Troubleshooting should follow a logical sequence: observe, isolate, test, confirm, repair and retest.",
              "PV faults may include dirty modules, loose terminals, damaged cables, weak batteries, blown fuses, inverter errors and controller faults."
            ],
            waecFocus:
              "WAEC often asks for fault symptoms, causes, remedies, maintenance procedures and testing precautions."
          }
        ]
      },

      {
        group: "5. Entrepreneurship and Installation Business Practice",
        topics: [
          {
            title: "Funding, Proposals, Budgeting and Business Management",
            keyConcepts: [
              "Sources of fund",
              "Proposal writing",
              "Budgeting",
              "Costing",
              "Business registration",
              "Customer service",
              "Records",
              "Warranty support"
            ],
            facts: [
              "Sources of fund include personal savings, family support, cooperative loans, bank loans, trade credit and government support.",
              "A proposal states the need, objectives, scope, method, cost and expected benefit of a project.",
              "Budgeting helps estimate materials, labour, transport, tools, contingency and profit.",
              "A small installation business needs records, receipts, quotations, safety practice and customer follow-up."
            ],
            waecFocus:
              "Know proposal components, budget items, sources of finance and rules affecting small business registration."
          }
        ]
      }
    ]
  },

  factSheet: {
    title: "WAEC Solar PV and Electrical Installation Key Concepts Sheet",
    instruction:
      "Use this sheet before objective practice, essay writing and practical work. For every question, identify the tool, accessory, fault, test, safety rule or wiring principle being tested, then answer with short technical language.",

    sections: [
      {
        title: "Safety and First Aid",
        keyFacts: [
          "Treat every conductor as live until it has been isolated and tested.",
          "Do not touch a person in contact with electricity; isolate the supply first or use a dry insulating object.",
          "Keep water, wet hands and metallic jewellery away from live electrical work.",
          "Use PPE such as insulated gloves, safety boots, eye protection and suitable work clothing.",
          "PV modules can generate DC voltage whenever exposed to sunlight."
        ],
        examGold:
          "In electric shock questions, the first action is always to break contact with the supply safely before treatment."
      },
      {
        title: "Tools and Instruments",
        keyFacts: [
          "Measuring tape measures length and layout distances.",
          "Standard wire gauge measures conductor size.",
          "Micrometer screw gauge measures small wire diameter.",
          "Multimeter measures voltage, current and resistance depending on the selected range.",
          "Megger insulation tester measures insulation resistance.",
          "Hydrometer measures specific gravity of a cell or battery electrolyte."
        ],
        examGold:
          "Match the instrument to the quantity: voltmeter-voltage, ammeter-current, ohmmeter-resistance, wattmeter-power, tachometer-speed."
      },
      {
        title: "Cables and Accessories",
        keyFacts: [
          "A cable is an insulated conductor or group of insulated conductors.",
          "Cable current rating decreases when ambient temperature increases.",
          "A good cable joint must be mechanically strong, electrically continuous and properly insulated.",
          "Switches should be connected in the live conductor.",
          "Conduit boxes help with drawing, inspection and branching of cables.",
          "Secondary cells are rechargeable and are used for storage in many PV systems."
        ],
        examGold:
          "Do not confuse cable type with protective device. PVC cable, armoured cable and flexible cord carry current; fuses and breakers protect circuits."
      },
      {
        title: "Wiring Practice",
        keyFacts: [
          "Surface wiring is easy to inspect and repair but is more exposed.",
          "Conduit wiring gives mechanical protection and neat appearance.",
          "A one-way switch controls a lamp from one point.",
          "A two-way switch controls a lamp from two different points.",
          "A distribution board distributes supply and contains protective devices.",
          "Working drawings and symbols guide accurate installation."
        ],
        examGold:
          "In wiring diagrams, trace live, neutral and earth paths separately before choosing an answer."
      },
      {
        title: "Protection, Earthing and Testing",
        keyFacts: [
          "A fuse melts under excess current and opens the circuit.",
          "An MCB trips during overload or short-circuit conditions.",
          "An ELCB/RCD helps protect against earth leakage and electric shock.",
          "Earthing provides a low-resistance path for fault current.",
          "Continuity test checks whether a conductor path is complete.",
          "Polarity test confirms that live and neutral are correctly connected.",
          "Insulation resistance test checks for leakage through insulation."
        ],
        examGold:
          "Visual inspection comes before electrical testing; testing comes before energizing."
      },
      {
        title: "Solar PV System Essentials",
        keyFacts: [
          "PV modules convert sunlight into DC electrical energy.",
          "A charge controller regulates battery charging and helps prevent overcharge or deep discharge.",
          "A battery stores electrical energy for later use.",
          "An inverter converts DC supply to AC supply for AC loads.",
          "PV strings must keep correct polarity and suitable voltage/current ratings.",
          "DC isolators, fuses, breakers, surge protection and correct cable sizing improve safety."
        ],
        formulas: [
          { name: "Electrical power", formula: "P = VI", unit: "W" },
          { name: "Energy", formula: "E = Pt", unit: "Wh or J" },
          { name: "Ohm's law", formula: "V = IR", unit: "" },
          { name: "Series voltage", formula: "Vtotal = V1 + V2 + V3", unit: "V" },
          { name: "Parallel current", formula: "Itotal = I1 + I2 + I3", unit: "A" }
        ],
        examGold:
          "Series PV connection increases voltage; parallel PV connection increases current."
      },
      {
        title: "Machines and Maintenance",
        keyFacts: [
          "A motor converts electrical energy to mechanical energy.",
          "A generator converts mechanical energy to electrical energy.",
          "Preventive maintenance reduces the chance of failure.",
          "Corrective maintenance repairs a fault after it occurs.",
          "Common faults include open circuit, short circuit, earth fault, loose connection, overload and overheating.",
          "Troubleshooting should move from symptom to likely cause, test, repair and retest."
        ],
        examGold:
          "When asked for causes of a fault, give practical causes such as worn brush, dirty commutator, loose terminal, blown fuse, weak battery or damaged insulation."
      },
      {
        title: "Entrepreneurship",
        keyFacts: [
          "Sources of fund include savings, family support, cooperative loans, bank loans, trade credit and government schemes.",
          "A proposal includes title, introduction, objectives, scope, method, budget and conclusion.",
          "A budget should include materials, labour, transport, tools, contingency and profit.",
          "Business registration, record keeping, receipts, customer care and warranty support build trust."
        ],
        examGold:
          "For proposal-writing questions, answer in organized headings instead of one long paragraph."
      }
    ]
  },

objectives: {
  test1: [
    {
      id: 1,
      topic: "Workshop Safety",
      question: "Which of the following is a major hazard in an electrical workshop?",
      options: {
        A: "Proper insulation",
        B: "Loose live conductors",
        C: "Correct tool storage",
        D: "Dry rubber mat"
      },
      correctAnswer: "B",
      explanation: "Loose live conductors are dangerous because they can cause electric shock, short circuit, and fire."
    },
    {
      id: 2,
      topic: "First Aid",
      question: "The first action when a person is in contact with a live conductor is to:",
      options: {
        A: "Pour water on the victim",
        B: "Pull the person directly",
        C: "Break contact with the live source safely",
        D: "Replace the fuse"
      },
      correctAnswer: "C",
      explanation: "The power source must first be isolated or broken safely before giving first aid."
    },
    {
      id: 3,
      topic: "Regulations",
      question: "Electrical regulations are mainly intended to:",
      options: {
        A: "Increase cable prices",
        B: "Promote safe and standard practice",
        C: "Replace testing",
        D: "Reduce workshop work"
      },
      correctAnswer: "B",
      explanation: "Regulations guide safe installation, maintenance, and use of electrical systems."
    },
    {
      id: 4,
      topic: "Tools",
      question: "Which of the following is a measuring tool?",
      options: {
        A: "Hammer",
        B: "Measuring tape",
        C: "Screwdriver",
        D: "Chisel"
      },
      correctAnswer: "B",
      explanation: "A measuring tape is used to determine dimensions before cutting or installation."
    },
    {
      id: 5,
      topic: "Accessories",
      question: "An end box in conduit wiring is commonly used:",
      options: {
        A: "At the end of a conduit run",
        B: "To control motor speed",
        C: "As a battery container",
        D: "To replace a fuse"
      },
      correctAnswer: "A",
      explanation: "An end box is fitted at the end of a conduit line or near a lamp holder base."
    },
    {
      id: 6,
      topic: "Accessories",
      question: "A 4-way conduit box is used to:",
      options: {
        A: "Measure cable length",
        B: "Branch conduit in four directions",
        C: "Test insulation resistance",
        D: "Control lamp brightness"
      },
      correctAnswer: "B",
      explanation: "A 4-way conduit box allows conduit runs to connect in four directions."
    },
    {
      id: 7,
      topic: "Accessories",
      question: "A 3-way conduit box is used to:",
      options: {
        A: "Branch conduit in three directions",
        B: "Seal battery terminals",
        C: "Support underground cable only",
        D: "Act as a switch"
      },
      correctAnswer: "A",
      explanation: "A 3-way box is used where conduits branch in three directions."
    },
    {
      id: 8,
      topic: "Accessories",
      question: "A 2-way conduit box is used to:",
      options: {
        A: "Join conduit in two directions",
        B: "Increase current rating",
        C: "Improve illumination",
        D: "Serve as a fuse carrier"
      },
      correctAnswer: "A",
      explanation: "A 2-way box links conduit runs in two directions."
    },
    {
      id: 9,
      topic: "Installation Practice",
      question: "A point of light controlled from two independent positions requires:",
      options: {
        A: "Two one-way switches",
        B: "Two 2-way switches",
        C: "One socket outlet",
        D: "One bell push"
      },
      correctAnswer: "B",
      explanation: "Two 2-way switches are used to control one lamp from two different positions."
    },
    {
      id: 10,
      topic: "Machines",
      question: "The rotating part of a d.c. machine is called the:",
      options: {
        A: "Field winding",
        B: "Pole shoe",
        C: "Armature",
        D: "Main frame"
      },
      correctAnswer: "C",
      explanation: "The armature is the rotating member of a d.c. machine."
    },
    {
      id: 11,
      topic: "Machines",
      question: "Which of the following is a part of a d.c. machine?",
      options: {
        A: "Commutator",
        B: "Ceiling rose",
        C: "Lamp holder",
        D: "Socket plate"
      },
      correctAnswer: "A",
      explanation: "The commutator is a major part of a d.c. machine."
    },
    {
      id: 12,
      topic: "D.C. Generator",
      question: "A series d.c. generator is used as a booster because:",
      options: {
        A: "Its voltage increases with load current",
        B: "It has no armature",
        C: "It produces only low current",
        D: "It operates without field winding"
      },
      correctAnswer: "A",
      explanation: "A series d.c. generator has increasing terminal voltage characteristics as load current increases."
    },
    {
      id: 13,
      topic: "D.C. Machines",
      question: "Which of the following is a type of d.c. generator?",
      options: {
        A: "Series generator",
        B: "Incandescent generator",
        C: "Sodium generator",
        D: "Tube generator"
      },
      correctAnswer: "A",
      explanation: "Series, shunt, compound, self-excited, and separately excited are types of d.c. generators."
    },
    {
      id: 14,
      topic: "D.C. Motors",
      question: "Back e.m.f. in a d.c. motor is generated in the:",
      options: {
        A: "Armature conductors",
        B: "Socket contacts",
        C: "Fuse body",
        D: "Cable clips"
      },
      correctAnswer: "A",
      explanation: "Back e.m.f. is produced in the armature conductors as they cut magnetic flux."
    },
    {
      id: 15,
      topic: "D.C. Motors",
      question: "One method of controlling the speed of a d.c. motor is by varying the:",
      options: {
        A: "Armature voltage",
        B: "Wall paint",
        C: "Cable colour",
        D: "Socket height"
      },
      correctAnswer: "A",
      explanation: "The speed of a d.c. motor may be controlled by varying the armature voltage or field strength."
    },
    {
      id: 16,
      topic: "D.C. Motors",
      question: "The starting current of a d.c. motor is dangerous because it can:",
      options: {
        A: "Become very large and damage the motor",
        B: "Increase room illumination",
        C: "Stop magnetic flux completely",
        D: "Turn the motor into a generator instantly"
      },
      correctAnswer: "A",
      explanation: "At starting, the current can be excessive and may damage the motor if not limited."
    },
    {
      id: 17,
      topic: "D.C. Motors",
      question: "A common method of reducing starting current in a d.c. motor is to use a:",
      options: {
        A: "Rheostat in series with the armature",
        B: "Lamp holder",
        C: "Cable saddle",
        D: "Conduit box"
      },
      correctAnswer: "A",
      explanation: "A rheostat or variable resistor in series with the armature helps limit starting current."
    },
    {
      id: 18,
      topic: "Induction Motors",
      question: "Which of the following is a type of induction motor?",
      options: {
        A: "Squirrel-cage motor",
        B: "Series lamp motor",
        C: "Fuse motor",
        D: "Socket motor"
      },
      correctAnswer: "A",
      explanation: "The two main types are squirrel-cage and wound-rotor induction motors."
    },
    {
      id: 19,
      topic: "Induction Motors",
      question: "Which of the following is a starter used for induction motors?",
      options: {
        A: "Star-delta starter",
        B: "Ceiling fan regulator",
        C: "Lamp bracket",
        D: "Back-entry box"
      },
      correctAnswer: "A",
      explanation: "Common induction motor starters include direct-on-line and star-delta starters."
    },
    {
      id: 20,
      topic: "Induction Motors",
      question: "A three-phase induction motor may be reversed by:",
      options: {
        A: "Interchanging any two supply lines",
        B: "Changing the fuse rating",
        C: "Disconnecting the earth wire",
        D: "Reducing conductor size"
      },
      correctAnswer: "A",
      explanation: "Interchanging any two supply lines reverses the phase sequence and the motor direction."
    },
    {
      id: 21,
      topic: "Machine Installation",
      question: "A motor installed in a sawmill should preferably have a:",
      options: {
        A: "Totally enclosed enclosure",
        B: "Paper enclosure",
        C: "Glass enclosure",
        D: "Decorative frame"
      },
      correctAnswer: "A",
      explanation: "A totally enclosed enclosure protects the motor against dust and particles."
    },
    {
      id: 22,
      topic: "Machine Installation",
      question: "One advantage of flexible conduit for motor connection is that it:",
      options: {
        A: "Absorbs vibration",
        B: "Raises supply voltage",
        C: "Acts as a fuse",
        D: "Replaces the starter"
      },
      correctAnswer: "A",
      explanation: "Flexible conduit absorbs vibration and makes alignment easier."
    },
    {
      id: 23,
      topic: "Testing",
      question: "The test used to detect earth fault on a neutral conductor is the:",
      options: {
        A: "Insulation resistance test",
        B: "Illumination test",
        C: "Sound test",
        D: "Colour test"
      },
      correctAnswer: "A",
      explanation: "Earth faults are detected with an insulation resistance test."
    },
    {
      id: 24,
      topic: "Electrical Cells",
      question: "An electrical cell converts:",
      options: {
        A: "Chemical energy into electrical energy",
        B: "Mechanical energy into heat",
        C: "Electrical energy into sound",
        D: "Heat energy into light"
      },
      correctAnswer: "A",
      explanation: "An electrical cell converts chemical energy to electrical energy."
    },
    {
      id: 25,
      topic: "Electrical Cells",
      question: "Which of the following is a type of electrical cell?",
      options: {
        A: "Primary cell",
        B: "Socket cell",
        C: "Conduit cell",
        D: "Switch cell"
      },
      correctAnswer: "A",
      explanation: "Electrical cells are broadly divided into primary and secondary cells."
    },
    {
      id: 26,
      topic: "Supply Sequence",
      question: "In the supply sequence to a consumer’s installation, the first item from the supply authority is the:",
      options: {
        A: "Service cable",
        B: "Wall bracket",
        C: "Socket outlet",
        D: "Ceiling fan"
      },
      correctAnswer: "A",
      explanation: "The sequence begins with the service cable from the supply authority."
    },
    {
      id: 27,
      topic: "Supply Sequence",
      question: "Which of the following comes after the service fuse in the supply sequence?",
      options: {
        A: "Meter",
        B: "Wall switch",
        C: "Ceiling rose",
        D: "Socket cover"
      },
      correctAnswer: "A",
      explanation: "The basic sequence is service cable, service fuse, meter, main switch, distribution board, and final sub-circuit."
    },
    {
      id: 28,
      topic: "Entrepreneurship",
      question: "Which of the following is a possible source of business startup fund?",
      options: {
        A: "Personal savings",
        B: "Broken conduit",
        C: "Old lamp tube",
        D: "Insulation tape"
      },
      correctAnswer: "A",
      explanation: "Personal savings are a common source of startup capital."
    },
    {
      id: 29,
      topic: "Entrepreneurship",
      question: "Trade credit means obtaining goods:",
      options: {
        A: "On credit for payment later",
        B: "Without supplier approval",
        C: "Only with immediate cash",
        D: "Only through bank loan"
      },
      correctAnswer: "A",
      explanation: "Trade credit allows materials to be purchased now and paid for later."
    },
    {
      id: 30,
      topic: "Layout Interpretation",
      question: "In the given living-room layout, the quantity of 15A sockets is:",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      correctAnswer: "A",
      explanation: "The layout shows one 15A socket."
    },
    {
      id: 31,
      topic: "Layout Interpretation",
      question: "In the living-room layout, the quantity of 13A sockets is:",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "5"
      },
      correctAnswer: "B",
      explanation: "The layout key indicates two 13A sockets."
    },
    {
      id: 32,
      topic: "Layout Interpretation",
      question: "The quantity of wall brackets in the living-room layout is:",
      options: {
        A: "1",
        B: "2",
        C: "4",
        D: "6"
      },
      correctAnswer: "B",
      explanation: "The layout contains two wall brackets."
    },
    {
      id: 33,
      topic: "Layout Interpretation",
      question: "The quantity of two-way switches in the living-room layout is:",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      correctAnswer: "B",
      explanation: "The drawing and key show two two-way switches."
    },
    {
      id: 34,
      topic: "Testing",
      question: "The instrument used to carry out insulation resistance test is the:",
      options: {
        A: "Megger",
        B: "Thermometer",
        C: "Hydrometer",
        D: "Stopwatch"
      },
      correctAnswer: "A",
      explanation: "A megger is used to test insulation resistance."
    },
    {
      id: 35,
      topic: "Testing",
      question: "The minimum acceptable insulation resistance value is:",
      options: {
        A: "0.5 MΩ",
        B: "0.05 Ω",
        C: "5 Ω",
        D: "50 Ω"
      },
      correctAnswer: "A",
      explanation: "A minimum value of 0.5 megohm is acceptable here."
    },
    {
      id: 36,
      topic: "Installation Heights",
      question: "The specified mounting height for switches from finished floor level is:",
      options: {
        A: "1200 mm - 1500 mm",
        B: "100 mm - 200 mm",
        C: "450 mm - 500 mm",
        D: "2000 mm - 2500 mm"
      },
      correctAnswer: "A",
      explanation: "Switches are commonly mounted between 1200 mm and 1500 mm above finished floor level."
    },
    {
      id: 37,
      topic: "Installation Heights",
      question: "The common mounting height for 13A socket outlets is:",
      options: {
        A: "450 mm - 500 mm",
        B: "1200 mm - 1500 mm",
        C: "50 mm - 100 mm",
        D: "2000 mm - 2200 mm"
      },
      correctAnswer: "A",
      explanation: "13A socket outlets are commonly mounted between 450 mm and 500 mm above finished floor level."
    },
    {
      id: 38,
      topic: "Ring Circuit",
      question: "The protective fuse rating for a domestic ring circuit is:",
      options: {
        A: "5A",
        B: "13A",
        C: "30A",
        D: "60A"
      },
      correctAnswer: "C",
      explanation: "A domestic ring circuit is commonly protected by a 30A fuse."
    },
    {
      id: 39,
      topic: "Ring Circuit",
      question: "The standard cable size commonly used for a domestic ring circuit is:",
      options: {
        A: "1.0 mm²",
        B: "1.5 mm²",
        C: "2.5 mm²",
        D: "10 mm²"
      },
      correctAnswer: "C",
      explanation: "A 2.5 mm² conductor is the standard size associated with the ring circuit here."
    },
    {
      id: 40,
      topic: "Fluorescent Lamp Faults",
      question: "If a fluorescent lamp fuse blows when the lamp is switched on, the likely cause is:",
      options: {
        A: "Short circuit in the wiring",
        B: "Perfect starter",
        C: "Correct power factor",
        D: "Good tube condition"
      },
      correctAnswer: "A",
      explanation: "A blown fuse on switching on usually indicates a short circuit in the wiring."
    },
    {
      id: 41,
      topic: "Fluorescent Lamp Faults",
      question: "A fluorescent lamp that makes repeated effort to start may have:",
      options: {
        A: "Aging lamp or faulty starter",
        B: "Perfect wiring",
        C: "Correct voltage always",
        D: "New capacitor only"
      },
      correctAnswer: "A",
      explanation: "Repeated effort to start may be caused by an aging lamp, low voltage, or a faulty starter."
    },
    {
      id: 42,
      topic: "Lighting",
      question: "A capacitor in a fluorescent lamp circuit is connected mainly to:",
      options: {
        A: "Improve power factor",
        B: "Reduce room size",
        C: "Change socket type",
        D: "Replace the choke"
      },
      correctAnswer: "A",
      explanation: "The capacitor improves the power factor and may also suppress radio interference."
    },
    {
      id: 43,
      topic: "Lighting",
      question: "One reason sodium lamps are used for street lighting is that they:",
      options: {
        A: "Are very bright",
        B: "Need no electric supply",
        C: "Have no fittings",
        D: "Work without maintenance"
      },
      correctAnswer: "A",
      explanation: "Sodium lamps are bright and suitable for street lighting."
    },
    {
      id: 44,
      topic: "Protective Devices",
      question: "One major reason for installing protective devices is to:",
      options: {
        A: "Prevent electric shock",
        B: "Increase wall thickness",
        C: "Decorate the installation",
        D: "Replace proper wiring"
      },
      correctAnswer: "A",
      explanation: "Protective devices help prevent electric shock, fire damage, and other faults."
    },
    {
      id: 45,
      topic: "Maintenance",
      question: "Preventive maintenance is carried out on a machine in order to:",
      options: {
        A: "Keep it serviceable and avoid breakdown",
        B: "Destroy worn parts quickly",
        C: "Stop all testing",
        D: "Reduce conductor size"
      },
      correctAnswer: "A",
      explanation: "Preventive maintenance keeps equipment operational and helps prevent complete breakdown."
    },
    {
      id: 46,
      topic: "Maintenance",
      question: "Corrective maintenance is carried out:",
      options: {
        A: "On a faulty or broken-down machine",
        B: "Only before purchase",
        C: "To increase workshop size",
        D: "To reduce lamp voltage"
      },
      correctAnswer: "A",
      explanation: "Corrective maintenance restores faulty or broken-down equipment to working condition."
    },
    {
      id: 47,
      topic: "Maintenance",
      question: "Which of the following is a preventive maintenance procedure?",
      options: {
        A: "Cleaning",
        B: "Ignoring defects",
        C: "Overloading the motor",
        D: "Removing insulation"
      },
      correctAnswer: "A",
      explanation: "Cleaning is one of the routine procedures in preventive maintenance."
    },
    {
      id: 48,
      topic: "Maintenance",
      question: "Which of the following is also a preventive maintenance procedure?",
      options: {
        A: "Lubricating",
        B: "Disconnecting earth wire",
        C: "Leaving terminals loose",
        D: "Using wrong tools"
      },
      correctAnswer: "A",
      explanation: "Lubricating moving parts helps reduce wear and maintain smooth operation."
    },
    {
      id: 49,
      topic: "Domestic Installation",
      question: "A domestic ring circuit is a final sub-circuit in which conductors are connected in the form of a:",
      options: {
        A: "Loop",
        B: "Triangle only",
        C: "Spiral spring",
        D: "Single rod"
      },
      correctAnswer: "A",
      explanation: "A ring circuit is defined by its loop arrangement with both ends connected to the same distribution point."
    },
    {
      id: 50,
      topic: "Domestic Installation",
      question: "One rule for domestic ring circuits is that spurs should not be more than:",
      options: {
        A: "Half the number of socket outlets",
        B: "Twice the number of socket outlets",
        C: "The number of lamps",
        D: "The number of fuses"
      },
      correctAnswer: "A",
      explanation: "Spurs should not exceed half the number of socket outlets on the ring circuit."
    }
  ],
  test2: [{
    id: 1,
    topic: "Workshop Safety",
    question: "Which of the following can cause accidents in an electrical workshop?",
    options: {
      A: "Good insulation",
      B: "Faulty equipment",
      C: "Proper lighting",
      D: "Correct tool handling"
    },
    correctAnswer: "B",
    explanation: "Faulty equipment can lead to electric shock, fire, and mechanical injury in the workshop."
  },
  {
    id: 2,
    topic: "Workshop Safety",
    question: "Poor joints and bad insulation in an installation may result in:",
    options: {
      A: "Safer operation",
      B: "Electrical hazards",
      C: "Lower tool cost",
      D: "Better efficiency always"
    },
    correctAnswer: "B",
    explanation: "Poor joints and bad insulation can cause overheating, shock, and fire."
  },
  {
    id: 3,
    topic: "First Aid",
    question: "Which of the following should be found in a first-aid box?",
    options: {
      A: "Cutlass",
      B: "Bandage",
      C: "Soldering iron",
      D: "Conduit bush"
    },
    correctAnswer: "B",
    explanation: "A bandage is a basic first-aid item used for cuts and wounds."
  },
  {
    id: 4,
    topic: "Tools",
    question: "Which of the following is mainly used for striking work?",
    options: {
      A: "Hammer",
      B: "Megger",
      C: "Voltmeter",
      D: "Try square"
    },
    correctAnswer: "A",
    explanation: "A hammer is a striking tool used in fastening and light shaping work."
  },
  {
    id: 5,
    topic: "Tools",
    question: "A screwdriver is mainly used for:",
    options: {
      A: "Driving screws",
      B: "Measuring voltage",
      C: "Testing insulation",
      D: "Drawing symbols"
    },
    correctAnswer: "A",
    explanation: "A screwdriver is used to tighten or loosen screws during installation and maintenance."
  },
  {
    id: 6,
    topic: "Cables",
    question: "One reason for armouring a cable is to:",
    options: {
      A: "Provide mechanical protection",
      B: "Reduce conductor size",
      C: "Increase lamp brightness",
      D: "Replace insulation completely"
    },
    correctAnswer: "A",
    explanation: "Armouring protects the cable against physical damage during installation and service."
  },
  {
    id: 7,
    topic: "Cables",
    question: "Which of the following is a data cable?",
    options: {
      A: "Fibre optic cable",
      B: "Twin flex only",
      C: "Lamp cord only",
      D: "Fuse wire"
    },
    correctAnswer: "A",
    explanation: "Fibre optic cable is a data cable used for communication and signal transmission."
  },
  {
    id: 8,
    topic: "Accessories",
    question: "Which of the following is an electrical accessory?",
    options: {
      A: "Socket outlet",
      B: "Mortar",
      C: "Paint brush",
      D: "Wheelbarrow"
    },
    correctAnswer: "A",
    explanation: "A socket outlet is a standard electrical accessory used for connecting appliances."
  },
  {
    id: 9,
    topic: "Cells",
    question: "A rechargeable electrical cell is known as a:",
    options: {
      A: "Primary cell",
      B: "Secondary cell",
      C: "Dead cell",
      D: "Fuse cell"
    },
    correctAnswer: "B",
    explanation: "A secondary cell can be recharged and used repeatedly."
  },
  {
    id: 10,
    topic: "Drawing and Symbols",
    question: "Electrical symbols are important because they:",
    options: {
      A: "Make circuit drawings easy to interpret",
      B: "Increase supply voltage",
      C: "Replace practical work",
      D: "Reduce insulation resistance"
    },
    correctAnswer: "A",
    explanation: "Electrical symbols provide a standard method for representing components in diagrams."
  },
  {
    id: 11,
    topic: "Surface Wiring",
    question: "A common material used in surface wiring is:",
    options: {
      A: "Cable clips",
      B: "Engine oil",
      C: "Glass wool only",
      D: "Clay block"
    },
    correctAnswer: "A",
    explanation: "Cable clips are commonly used to fasten cables neatly in surface wiring."
  },
  {
    id: 12,
    topic: "Surface Wiring",
    question: "One factor affecting the current rating of a cable is:",
    options: {
      A: "Ambient temperature",
      B: "Wall colour",
      C: "Room decoration",
      D: "Switch position alone"
    },
    correctAnswer: "A",
    explanation: "Ambient temperature affects heat dissipation and therefore the cable current rating."
  },
  {
    id: 13,
    topic: "Conduit Wiring",
    question: "Which of the following is a type of conduit wiring?",
    options: {
      A: "PVC conduit",
      B: "Timber conduit",
      C: "Paper conduit",
      D: "Rubber conduit only"
    },
    correctAnswer: "A",
    explanation: "PVC conduit is one of the recognized types of conduit used in wiring."
  },
  {
    id: 14,
    topic: "Conduit Wiring",
    question: "A tool used in conduit bending is the:",
    options: {
      A: "Bending spring",
      B: "Hydrometer",
      C: "Paint roller",
      D: "Funnel"
    },
    correctAnswer: "A",
    explanation: "A bending spring is used to bend conduit pipes without collapsing them."
  },
  {
    id: 15,
    topic: "Illumination",
    question: "The concept of illumination deals with:",
    options: {
      A: "Lighting level",
      B: "Water pressure",
      C: "Cable colour",
      D: "Motor speed only"
    },
    correctAnswer: "A",
    explanation: "Illumination refers to the amount of light falling on a surface."
  },
  {
    id: 16,
    topic: "Illumination",
    question: "The instrument used to measure illumination is the:",
    options: {
      A: "Photometer",
      B: "Ammeter",
      C: "Ohmmeter",
      D: "Protractor"
    },
    correctAnswer: "A",
    explanation: "A photometer is used to measure the level of illumination."
  },
  {
    id: 17,
    topic: "Soldering",
    question: "Which of the following is used in soldering?",
    options: {
      A: "Flux",
      B: "Plaster",
      C: "Grease only",
      D: "Cement"
    },
    correctAnswer: "A",
    explanation: "Flux helps clean metal surfaces and improves the soldering process."
  },
  {
    id: 18,
    topic: "Soldering",
    question: "A blow-lamp is used mainly for:",
    options: {
      A: "Heating during soldering work",
      B: "Measuring resistance",
      C: "Testing voltage",
      D: "Fixing sockets to walls"
    },
    correctAnswer: "A",
    explanation: "A blow-lamp provides heat needed for soldering operations."
  },
  {
    id: 19,
    topic: "Cable Jointing",
    question: "Which of the following is a type of cable joint?",
    options: {
      A: "Tee joint",
      B: "Circular joint",
      C: "Mirror joint",
      D: "Panel joint"
    },
    correctAnswer: "A",
    explanation: "A tee joint is one of the recognized types of electrical cable joints."
  },
  {
    id: 20,
    topic: "Cable Jointing",
    question: "One common conducting material used in cables is:",
    options: {
      A: "Copper",
      B: "Wood",
      C: "Plastic",
      D: "Glass"
    },
    correctAnswer: "A",
    explanation: "Copper is widely used in electrical conductors because of its high conductivity."
  },
  {
    id: 21,
    topic: "Insulating Materials",
    question: "Which of the following is an insulating material?",
    options: {
      A: "PVC",
      B: "Silver",
      C: "Aluminium",
      D: "Copper"
    },
    correctAnswer: "A",
    explanation: "PVC is widely used as cable insulation because it resists electrical conduction."
  },
  {
    id: 22,
    topic: "Installation",
    question: "MICC means:",
    options: {
      A: "Mineral Insulated Copper Clad cable",
      B: "Metal Insulated Circular Cable",
      C: "Main Internal Copper Connection",
      D: "Mechanical Installation Control Cable"
    },
    correctAnswer: "A",
    explanation: "MICC stands for Mineral Insulated Copper Clad cable."
  },
  {
    id: 23,
    topic: "Installation",
    question: "One advantage of MICC cable is that it:",
    options: {
      A: "Has good fire resistance",
      B: "Needs no insulation",
      C: "Cannot be terminated",
      D: "Is made of wood"
    },
    correctAnswer: "A",
    explanation: "MICC cable is valued for strong fire resistance and durability."
  },
  {
    id: 24,
    topic: "Underground Cable Installation",
    question: "Before laying underground cable, the trench must be:",
    options: {
      A: "Prepared properly",
      B: "Filled with water",
      C: "Ignored completely",
      D: "Used as a passage only"
    },
    correctAnswer: "A",
    explanation: "Proper trench preparation is essential for safe underground cable installation."
  },
  {
    id: 25,
    topic: "Overhead Installation",
    question: "Stay wires in overhead lines are used mainly to:",
    options: {
      A: "Provide support and stability",
      B: "Increase voltage",
      C: "Replace insulators",
      D: "Measure current"
    },
    correctAnswer: "A",
    explanation: "Stay wires help support poles and maintain stability in overhead installations."
  },
  {
    id: 26,
    topic: "Testing",
    question: "Which of the following is one of the sequence of tests in domestic installation?",
    options: {
      A: "Polarity test",
      B: "Colour test",
      C: "Sound test",
      D: "Pressure test"
    },
    correctAnswer: "A",
    explanation: "Polarity test is one of the standard tests carried out on electrical installations."
  },
  {
    id: 27,
    topic: "Testing",
    question: "A bell set may be used for:",
    options: {
      A: "Testing continuity",
      B: "Painting fittings",
      C: "Measuring illumination",
      D: "Cutting conduit"
    },
    correctAnswer: "A",
    explanation: "A bell set is commonly used in continuity testing."
  },
  {
    id: 28,
    topic: "D.C. Machines",
    question: "Which of the following is a type of d.c. motor or generator winding arrangement?",
    options: {
      A: "Lap winding",
      B: "Brick winding",
      C: "Socket winding",
      D: "Conduit winding"
    },
    correctAnswer: "A",
    explanation: "Lap winding is a recognized winding arrangement in electrical machines."
  },
  {
    id: 29,
    topic: "D.C. Machines",
    question: "Another winding arrangement used in electrical machines is:",
    options: {
      A: "Wave winding",
      B: "Tube winding",
      C: "Plate winding",
      D: "Wall winding"
    },
    correctAnswer: "A",
    explanation: "Wave winding is also a standard winding arrangement."
  },
  {
    id: 30,
    topic: "Rewinding",
    question: "A tool used in rewinding jobs is the:",
    options: {
      A: "Winding machine",
      B: "Paint tray",
      C: "Photometer",
      D: "Bucket"
    },
    correctAnswer: "A",
    explanation: "A winding machine is used in the process of rewinding electrical machines."
  },
  {
    id: 31,
    topic: "Rewinding",
    question: "Continuity and earthing test are important after:",
    options: {
      A: "Connecting winding coils",
      B: "Sweeping the workshop",
      C: "Drawing wall brackets",
      D: "Buying the machine"
    },
    correctAnswer: "A",
    explanation: "After coil connection, continuity and earthing tests confirm correct and safe winding."
  },
  {
    id: 32,
    topic: "Protective Devices",
    question: "Which of the following is a protective device?",
    options: {
      A: "Fuse",
      B: "Cable clip",
      C: "Wall bracket",
      D: "Fan regulator"
    },
    correctAnswer: "A",
    explanation: "A fuse is a protective device that opens the circuit under fault current."
  },
  {
    id: 33,
    topic: "Protective Devices",
    question: "A circuit breaker is used mainly to:",
    options: {
      A: "Protect the circuit against faults",
      B: "Decorate the panel",
      C: "Improve wall finishing",
      D: "Control lamp colour"
    },
    correctAnswer: "A",
    explanation: "A circuit breaker protects the circuit by interrupting abnormal current."
  },
  {
    id: 34,
    topic: "Maintenance",
    question: "Which type of maintenance is carried out regularly on working equipment?",
    options: {
      A: "Preventive maintenance",
      B: "Corrective maintenance",
      C: "Accidental maintenance",
      D: "Decorative maintenance"
    },
    correctAnswer: "A",
    explanation: "Preventive maintenance is done routinely to avoid breakdown."
  },
  {
    id: 35,
    topic: "Maintenance",
    question: "Corrective maintenance is carried out to:",
    options: {
      A: "Restore faulty equipment to service",
      B: "Increase workshop rent",
      C: "Reduce cable length",
      D: "Change regulations"
    },
    correctAnswer: "A",
    explanation: "Corrective maintenance repairs faults and restores equipment to working condition."
  },
  {
    id: 36,
    topic: "Faults and Troubleshooting",
    question: "One sign of machine fault is:",
    options: {
      A: "Abnormal performance",
      B: "Correct rotation always",
      C: "Perfect insulation only",
      D: "Standard colour marking"
    },
    correctAnswer: "A",
    explanation: "Faults often show up as abnormal performance, overheating, noise, or failure."
  },
  {
    id: 37,
    topic: "Machines",
    question: "Test for correct rotation is important during:",
    options: {
      A: "Machine installation",
      B: "Room painting",
      C: "Layout drawing only",
      D: "Budget preparation"
    },
    correctAnswer: "A",
    explanation: "Correct rotation must be checked when installing motors and machines."
  },
  {
    id: 38,
    topic: "Entrepreneurship",
    question: "A business proposal is useful for:",
    options: {
      A: "Seeking funds and planning the business",
      B: "Testing insulation resistance",
      C: "Controlling lamp brightness",
      D: "Bending conduit"
    },
    correctAnswer: "A",
    explanation: "A proposal helps present the business idea clearly for funding and planning."
  },
  {
    id: 39,
    topic: "Entrepreneurship",
    question: "Budgeting in business is important because it helps to:",
    options: {
      A: "Plan income and expenditure",
      B: "Reverse motor direction",
      C: "Measure illumination",
      D: "Replace circuit breakers"
    },
    correctAnswer: "A",
    explanation: "Budgeting helps manage money by planning expected income and expenses."
  },
  {
    id: 40,
    topic: "Entrepreneurship",
    question: "One government rule affecting small business operation is:",
    options: {
      A: "Business registration requirement",
      B: "Lamp holder colour rule",
      C: "Fan blade length rule",
      D: "Wall bracket shape rule"
    },
    correctAnswer: "A",
    explanation: "Business registration is a formal requirement affecting legal operation of a small business."
  },
  {
    id: 41,
    topic: "Solar PV Adaptation",
    question: "In Solar PV practical work, safe handling of tools and cables is important mainly to:",
    options: {
      A: "Prevent accidents and equipment damage",
      B: "Reduce sunlight",
      C: "Increase roof weight",
      D: "Change battery colour"
    },
    correctAnswer: "A",
    explanation: "Safe handling prevents injury, electrical faults, and damage to system components."
  },
  {
    id: 42,
    topic: "Solar PV Adaptation",
    question: "Good maintenance of a Solar PV installation helps to:",
    options: {
      A: "Improve reliability and service life",
      B: "Stop all charging permanently",
      C: "Remove all wiring",
      D: "Eliminate need for testing forever"
    },
    correctAnswer: "A",
    explanation: "Regular maintenance helps the system perform reliably and last longer."
  },
  {
    id: 43,
    topic: "Solar PV Adaptation",
    question: "A protective device in a Solar PV-related installation is important mainly to:",
    options: {
      A: "Protect persons and equipment",
      B: "Increase panel size",
      C: "Reduce sun intensity",
      D: "Change roof design"
    },
    correctAnswer: "A",
    explanation: "Protective devices safeguard both users and equipment from faults."
  },
  {
    id: 44,
    topic: "Workshop Practice",
    question: "Neatness in electrical installation is important because it:",
    options: {
      A: "Improves safety and ease of inspection",
      B: "Increases conductor resistance",
      C: "Eliminates voltage drop completely",
      D: "Replaces regulation"
    },
    correctAnswer: "A",
    explanation: "A neat installation is easier to inspect, maintain, and operate safely."
  },
  {
    id: 45,
    topic: "Workshop Practice",
    question: "Using the correct tool for a task helps to:",
    options: {
      A: "Avoid damage and improve safety",
      B: "Reduce conductor conductivity",
      C: "Increase earth leakage",
      D: "Stop all future faults"
    },
    correctAnswer: "A",
    explanation: "Correct tool selection improves workmanship and reduces accidents or damage."
  },
  {
    id: 46,
    topic: "Supply and Distribution",
    question: "The consumer’s main switch is used to:",
      options: {
        A: "Control the supply to the installation",
        B: "Measure illumination",
        C: "Support overhead lines",
        D: "Charge a primary cell"
      },
    correctAnswer: "A",
    explanation: "The consumer’s main switch controls supply entering the installation."
  },
  {
    id: 47,
    topic: "Supply and Distribution",
    question: "The main distribution fuse board is associated with:",
    options: {
      A: "Distribution of supply to final circuits",
      B: "Painting accessories",
      C: "Motor rewinding only",
      D: "Street lighting poles only"
    },
    correctAnswer: "A",
    explanation: "The distribution board supplies and protects final sub-circuits."
  },
  {
    id: 48,
    topic: "Domestic Installation",
    question: "Fixed appliances connected to a ring circuit should be protected by:",
    options: {
      A: "A local fuse",
      B: "A wall bracket",
      C: "A conduit saddle",
      D: "A measuring tape"
    },
    correctAnswer: "A",
    explanation: "Fixed appliances on a ring circuit should have local fuse protection."
  },
  {
    id: 49,
    topic: "Domestic Installation",
    question: "Portable appliances on socket outlets are commonly protected by a:",
    options: {
      A: "Fused 13A plug",
      B: "Bare conductor",
      C: "Loose joint",
      D: "Lamp tube"
    },
    correctAnswer: "A",
    explanation: "Portable appliances are commonly connected through fused 13A plugs."
  },
  {
    id: 50,
    topic: "General Revision",
    question: "Which of the following best supports safe, standard, and effective installation work?",
    options: {
      A: "Testing, correct materials, and proper regulations",
      B: "Guesswork and speed only",
      C: "Loose terminations and reused damaged parts",
      D: "Ignoring maintenance"
    },
    correctAnswer: "A",
    explanation: "Safe installation depends on correct materials, proper testing, and compliance with regulations."
  }
],
  test3: [
  {
    id: 1,
    topic: "Preventive Maintenance",
    question: "Which of the following is a task carried out during preventive maintenance?",
    options: {
      A: "Ignoring loose terminals",
      B: "Cleaning and lubricating moving parts",
      C: "Overloading the machine",
      D: "Removing protective devices"
    },
    correctAnswer: "B",
    solution: {
      classNote: "Preventive maintenance is carried out before failure occurs. It includes cleaning, lubrication, checking terminals, inspecting insulation, checking oil level where applicable, and correcting minor defects early.",
      examTrapAlert: "Preventive maintenance prevents breakdown; corrective maintenance repairs after breakdown.",
      whyOtherOptionsAreWrong: {
        A: "Loose terminals must be corrected, not ignored.",
        C: "Overloading causes damage.",
        D: "Protective devices must remain installed for safety."
      }
    }
  },
  {
    id: 2,
    topic: "Preventive Maintenance",
    question: "The main purpose of preventive maintenance is to:",
    options: {
      A: "keep equipment serviceable and reduce sudden breakdown",
      B: "increase the number of faults",
      C: "avoid inspection completely",
      D: "remove all machine guards"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Preventive maintenance keeps equipment in good working condition. It reduces unexpected failure, extends service life, improves safety, and saves repair cost.",
      examTrapAlert: "The key word is 'preventive' — it is done before failure becomes serious.",
      whyOtherOptionsAreWrong: {
        B: "Maintenance reduces faults.",
        C: "Inspection is part of maintenance.",
        D: "Machine guards improve safety and must not be removed."
      }
    }
  },
  {
    id: 3,
    topic: "Wiring Systems",
    question: "Which of the following is a type of wiring system?",
    options: {
      A: "Cleated wiring",
      B: "Battery painting",
      C: "Lamp polishing",
      D: "Switch decoration"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Common wiring systems include cleated wiring, conduit wiring, trunking, ducting, and surface wiring. The choice depends on cost, safety, appearance, building type, and expected load.",
      examTrapAlert: "WAEC often asks candidates to list actual wiring systems, not accessories.",
      whyOtherOptionsAreWrong: {
        B: "Battery painting is not a wiring system.",
        C: "Lamp polishing is not a wiring system.",
        D: "Switch decoration is not a wiring method."
      }
    }
  },
  {
    id: 4,
    topic: "Choice of Wiring System",
    question: "Which factor should be considered when choosing a wiring system?",
    options: {
      A: "Safety",
      B: "Colour of the classroom only",
      C: "Number of chairs in the room",
      D: "Brand of chalk used"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Safety is a major factor in selecting a wiring system. Other factors include durability, cost, accessibility, appearance, mechanical protection, future extension, type of load, and type of building.",
      examTrapAlert: "Choose technical and safety-related factors.",
      whyOtherOptionsAreWrong: {
        B: "Wall colour alone does not determine a wiring system.",
        C: "Furniture count is not a wiring selection factor.",
        D: "Chalk brand is irrelevant."
      }
    }
  },
  {
    id: 5,
    topic: "Wiring Systems",
    question: "A wiring system chosen mainly for high mechanical protection is:",
    options: {
      A: "conduit wiring",
      B: "loose table wiring",
      C: "bare conductor wiring",
      D: "temporary string wiring"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit wiring protects cables inside PVC or metallic conduit pipes. It is suitable where mechanical protection, neatness, and durability are required.",
      examTrapAlert: "Conduit protects conductors physically; cleated wiring is simpler and more exposed.",
      whyOtherOptionsAreWrong: {
        B: "Loose wiring is unsafe.",
        C: "Bare conductors are dangerous.",
        D: "String is not an electrical wiring system."
      }
    }
  },
  {
    id: 6,
    topic: "ELCB Diagram",
    diagram: "assets/solarpv/obj/test2/elcb.png",
    question: "The diagram shown represents an ELCB. What does ELCB stand for?",
    options: {
      A: "Earth Leakage Circuit Breaker",
      B: "Electric Lamp Control Box",
      C: "External Line Cable Board",
      D: "Energy Load Current Base"
    },
    correctAnswer: "A",
    solution: {
      classNote: "ELCB means Earth Leakage Circuit Breaker. It is a protective device used to disconnect supply when leakage current to earth is detected, thereby reducing the risk of electric shock.",
      examTrapAlert: "ELCB is a protection device, not a lamp accessory.",
      whyOtherOptionsAreWrong: {
        B: "This is not the meaning of ELCB.",
        C: "This is not a standard electrical term.",
        D: "This is not a recognized protective device name."
      }
    }
  },
  {
    id: 7,
    topic: "ELCB Diagram",
    diagram: "assets/solarpv/obj/test2/elcb.png",
    question: "The main function of the device shown in the diagram is to:",
    options: {
      A: "protect users from earth leakage shock",
      B: "increase room illumination",
      C: "store electrical energy",
      D: "measure cable length"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An ELCB protects persons and installations by disconnecting the circuit when leakage current flows to earth. It is useful where insulation failure may expose metal parts to dangerous voltage.",
      examTrapAlert: "Protection devices act during faults; they do not store or generate energy.",
      whyOtherOptionsAreWrong: {
        B: "Lighting is done by lamps, not ELCBs.",
        C: "Energy storage is done by cells or batteries.",
        D: "Cable length is measured with a tape."
      }
    }
  },
  {
    id: 8,
    topic: "Protective Devices",
    question: "Which of the following is a protective device?",
    options: {
      A: "Fuse",
      B: "Cable clip",
      C: "Paint brush",
      D: "Measuring tape"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A fuse is a protective device. It melts and opens the circuit when excessive current flows, preventing damage to wiring and equipment.",
      examTrapAlert: "Do not confuse installation accessories with protective devices.",
      whyOtherOptionsAreWrong: {
        B: "Cable clips only support cables.",
        C: "A paint brush is not electrical protection.",
        D: "A measuring tape is a measuring tool."
      }
    }
  },
  {
    id: 9,
    topic: "Protective Devices",
    question: "A circuit breaker protects an installation by:",
    options: {
      A: "interrupting abnormal current",
      B: "increasing the cable size",
      C: "storing electricity",
      D: "reducing room temperature"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A circuit breaker automatically disconnects a circuit during overload or fault current. Unlike a fuse, it can usually be reset after the fault has been cleared.",
      examTrapAlert: "Circuit breakers do not prevent faults; they disconnect supply when faults occur.",
      whyOtherOptionsAreWrong: {
        B: "It does not increase cable size.",
        C: "It does not store electricity.",
        D: "It has no function of cooling a room."
      }
    }
  },
  {
    id: 10,
    topic: "One-Way One-Gang Switch Diagram",
    diagram: "assets/solarpv/obj/test2/One-Way-One-Gang-Switch.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "one-way one-gang switch",
      B: "distribution board",
      C: "ceiling fan",
      D: "energy meter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The symbol represents a one-way one-gang switch. One-way switching controls a light point from only one position.",
      examTrapAlert: "A switch symbol must not be confused with socket or lamp symbols.",
      whyOtherOptionsAreWrong: {
        B: "A distribution board has a different symbol and function.",
        C: "A ceiling fan symbol usually shows fan blades.",
        D: "An energy meter symbol is different."
      }
    }
  },
  {
    id: 11,
    topic: "One-Way Switching",
    diagram: "assets/solarpv/obj/test2/One-Way-One-Gang-Switch.PNG",
    question: "The device represented by the symbol is used mainly to:",
    options: {
      A: "control a lamp from one position",
      B: "measure insulation resistance",
      C: "protect against earth leakage",
      D: "join underground cables"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A one-way switch is used to control a lamp or circuit from one location. It is common in simple rooms where only one entrance control point is needed.",
      examTrapAlert: "The word 'one-way' means one control position.",
      whyOtherOptionsAreWrong: {
        B: "A megger measures insulation resistance.",
        C: "An ELCB protects against earth leakage.",
        D: "Cable jointing requires proper jointing materials."
      }
    }
  },
  {
    id: 12,
    topic: "Two-Way Switching",
    question: "A point of light controlled from two independent positions requires:",
    options: {
      A: "two 2-way switches",
      B: "two 13A sockets",
      C: "one fuse only",
      D: "one ceiling rose only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Two-way switching uses two 2-way switches to control one lamp from two different points. This is common in staircases, corridors, and large rooms.",
      examTrapAlert: "When WAEC says 'two independent positions', think of two-way switching.",
      whyOtherOptionsAreWrong: {
        B: "Sockets do not perform switch control.",
        C: "A fuse protects but does not control from two points.",
        D: "A ceiling rose is an accessory, not a two-way control system."
      }
    }
  },
  {
    id: 13,
    topic: "Inspection Elbow Diagram",
    diagram: "assets/solarpv/obj/test2/obj_inspection_elbow.png",
    question: "The conduit accessory shown in the diagram is best described as an:",
    options: {
      A: "inspection elbow",
      B: "ceiling rose",
      C: "fuse carrier",
      D: "lamp holder"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An inspection elbow is a conduit fitting used to change direction while still allowing access for drawing in, inspecting, or maintaining cables.",
      examTrapAlert: "Inspection fittings provide access; ordinary bends may not.",
      whyOtherOptionsAreWrong: {
        B: "A ceiling rose is used for lighting connection.",
        C: "A fuse carrier holds a fuse.",
        D: "A lamp holder carries a lamp."
      }
    }
  },
  {
    id: 14,
    topic: "Inspection Elbow Diagram",
    diagram: "assets/solarpv/obj/test2/obj_inspection_elbow.png",
    question: "The main advantage of the conduit fitting shown is that it:",
    options: {
      A: "allows inspection and cable drawing at a bend",
      B: "stores electrical charge",
      C: "measures current",
      D: "controls motor speed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The inspection elbow is useful where conduit changes direction. Its removable cover allows access to cables during installation, inspection, and fault tracing.",
      examTrapAlert: "A conduit fitting is mechanical support/access, not an electrical measuring instrument.",
      whyOtherOptionsAreWrong: {
        B: "It does not store charge.",
        C: "Current is measured with an ammeter or tong tester.",
        D: "Motor speed control requires control equipment."
      }
    }
  },
  {
    id: 15,
    topic: "Conduit Wiring",
    question: "Which tool is commonly used for bending PVC conduit?",
    options: {
      A: "Bending spring",
      B: "Hydrometer",
      C: "Photometer",
      D: "Stopwatch"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A bending spring is inserted into PVC conduit to prevent flattening or collapse during bending. It helps produce a smooth bend.",
      examTrapAlert: "Conduit bending questions usually point to bending spring or bending machine.",
      whyOtherOptionsAreWrong: {
        B: "A hydrometer measures specific gravity of liquids.",
        C: "A photometer measures illumination.",
        D: "A stopwatch measures time."
      }
    }
  },
  {
    id: 16,
    topic: "Conduit Wiring",
    question: "Which of the following is a material used in conduit wiring?",
    options: {
      A: "Conduit pipe",
      B: "Engine oil only",
      C: "Wooden spoon",
      D: "Sand paper only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit wiring materials include conduit pipes, conduit boxes, couplers, saddles, bushes, bends, and union gum for PVC work.",
      examTrapAlert: "Distinguish tools from materials and accessories.",
      whyOtherOptionsAreWrong: {
        B: "Engine oil is not a conduit wiring material.",
        C: "A wooden spoon is irrelevant.",
        D: "Sand paper may clean surfaces but is not a conduit wiring material."
      }
    }
  },
  {
    id: 17,
    topic: "AC Motor Diagram",
    diagram: "assets/solarpv/obj/test2/longitudinal-section-of-an-ac-motor.PNG",
    question: "In the AC motor diagram, label III points to the:",
    options: {
      A: "shaft",
      B: "terminal box",
      C: "cooling fan",
      D: "stator core"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The shaft is the projecting rotating member used to transmit mechanical power from the motor to the driven machine.",
      examTrapAlert: "The long projecting central part of a motor is usually the shaft.",
      whyOtherOptionsAreWrong: {
        B: "The terminal box is a connection enclosure.",
        C: "The fan is usually at the rear end.",
        D: "The stator core is the stationary magnetic part."
      }
    }
  },
  {
    id: 18,
    topic: "AC Motor Diagram",
    diagram: "assets/solarpv/obj/test2/longitudinal-section-of-an-ac-motor.PNG",
    question: "In the AC motor diagram, label IV most likely indicates the:",
    options: {
      A: "base or foot mounting",
      B: "commutator",
      C: "lamp holder",
      D: "fuse link"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The base or foot mounting supports the motor and allows it to be bolted firmly to a foundation or machine frame.",
      examTrapAlert: "A motor base is mechanical support; a commutator is associated mainly with DC machines.",
      whyOtherOptionsAreWrong: {
        B: "Commutators are not typical parts of induction motors.",
        C: "A lamp holder is a lighting accessory.",
        D: "A fuse link is a protective part, not a motor base."
      }
    }
  },
  {
    id: 19,
    topic: "AC Motor Diagram",
    diagram: "assets/solarpv/obj/test2/longitudinal-section-of-an-ac-motor.PNG",
    question: "The stationary magnetic part of an AC motor is the:",
    options: {
      A: "stator",
      B: "shaft",
      C: "pulley",
      D: "brush only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The stator is the fixed part of an AC motor. It carries the stator core and windings that produce the rotating magnetic field.",
      examTrapAlert: "Stator means stationary; rotor means rotating.",
      whyOtherOptionsAreWrong: {
        B: "The shaft rotates with the rotor.",
        C: "A pulley is an external drive component.",
        D: "Brushes are not the stationary magnetic core."
      }
    }
  },
  {
    id: 20,
    topic: "AC Motor Diagram",
    diagram: "assets/solarpv/obj/test2/longitudinal-section-of-an-ac-motor.PNG",
    question: "The rotating part of an induction motor is called the:",
    options: {
      A: "rotor",
      B: "stator",
      C: "frame",
      D: "terminal box"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The rotor is the rotating part of an induction motor. It carries the rotor core and conductors and rotates due to the rotating magnetic field produced by the stator.",
      examTrapAlert: "Rotor = rotates; stator = stationary.",
      whyOtherOptionsAreWrong: {
        B: "The stator is fixed.",
        C: "The frame supports and protects the motor.",
        D: "The terminal box houses connection terminals."
      }
    }
  },
  {
    id: 21,
    topic: "Three-Phase Induction Motor",
    question: "The two main parts of an induction motor are the:",
    options: {
      A: "stator and rotor",
      B: "fuse and switch",
      C: "lamp and holder",
      D: "socket and plug"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An induction motor consists mainly of a stator and a rotor. The stator produces the rotating magnetic field, while the rotor turns and delivers mechanical output.",
      examTrapAlert: "WAEC machine questions often test basic construction first.",
      whyOtherOptionsAreWrong: {
        B: "Fuse and switch are circuit accessories/protection devices.",
        C: "Lamp and holder are lighting parts.",
        D: "Socket and plug are connection accessories."
      }
    }
  },
  {
    id: 22,
    topic: "Three-Phase Induction Motor",
    question: "Which of the following is a method of starting a three-phase squirrel-cage induction motor?",
    options: {
      A: "Star-delta starter",
      B: "Ceiling rose starter",
      C: "Socket starter",
      D: "Lamp holder starter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Common methods of starting a three-phase squirrel-cage induction motor include direct-on-line starting, star-delta starting, and auto-transformer starting.",
      examTrapAlert: "Choose actual motor starters, not lighting accessories.",
      whyOtherOptionsAreWrong: {
        B: "A ceiling rose is a lighting accessory.",
        C: "A socket is not a motor starter.",
        D: "A lamp holder is not a starter."
      }
    }
  },
  {
    id: 23,
    topic: "Three-Phase Induction Motor",
    question: "A three-phase induction motor can be reversed by:",
    options: {
      A: "interchanging any two supply lines",
      B: "changing the lamp holder",
      C: "removing the earth wire",
      D: "reducing the socket height"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Interchanging any two of the three-phase supply lines reverses the phase sequence and changes the direction of the rotating magnetic field.",
      examTrapAlert: "Direction of rotation depends on phase sequence.",
      whyOtherOptionsAreWrong: {
        B: "Lamp holder has no effect on motor direction.",
        C: "Earth wire must not be removed.",
        D: "Socket height is irrelevant."
      }
    }
  },
  {
    id: 24,
    topic: "Motor Installation",
    question: "Which factor should be considered when choosing an electric motor?",
    options: {
      A: "Type of supply available",
      B: "Colour of classroom wall",
      C: "Size of notebook",
      D: "Brand of pen used"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Factors in choosing a motor include type of supply, speed control need, mounting, enclosure, working environment, load or power rating, and cost.",
      examTrapAlert: "Motor selection depends on electrical and mechanical requirements.",
      whyOtherOptionsAreWrong: {
        B: "Wall colour is irrelevant.",
        C: "Notebook size is irrelevant.",
        D: "Pen brand has no relation to motor selection."
      }
    }
  },
  {
    id: 25,
    topic: "Motor Control Regulations",
    question: "IEE regulations on motor control require:",
    options: {
      A: "means of isolating the motor from supply",
      B: "removal of overload protection",
      C: "automatic restart after power failure",
      D: "smaller cable than full-load current"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Motor control must include isolation, overload protection, excess current protection, safe starting and stopping, and prevention of automatic restarting after supply failure.",
      examTrapAlert: "Automatic restarting after failure of supply is dangerous and must be prevented.",
      whyOtherOptionsAreWrong: {
        B: "Overload protection is required.",
        C: "Automatic restart is unsafe.",
        D: "The cable must carry starting and full-load currents safely."
      }
    }
  },
  {
    id: 26,
    topic: "Living Room Layout Diagram",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "The diagram shown is mainly used for:",
    options: {
      A: "interpreting positions of electrical points in a building",
      B: "testing electrolyte level",
      C: "measuring motor speed",
      D: "rewinding an armature"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A building electrical layout shows the positions of lamps, switches, sockets, distribution boards, and other electrical accessories. It guides installation work.",
      examTrapAlert: "A floor plan/layout question usually tests interpretation of symbols and accessory positions.",
      whyOtherOptionsAreWrong: {
        B: "Electrolyte level relates to batteries.",
        C: "Motor speed is measured by tachometer.",
        D: "Armature rewinding uses winding diagrams and tools."
      }
    }
  },
  {
    id: 27,
    topic: "Living Room Layout Diagram",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "In building layout interpretation, a dashed curved line from a switch to a lamp usually indicates:",
    options: {
      A: "the control relationship between switch and lighting point",
      B: "water pipe direction only",
      C: "wall painting path",
      D: "earth leakage fault"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Dashed control lines in electrical layout drawings commonly show which switch controls which lamp or lighting point.",
      examTrapAlert: "Do not treat every line in a layout as a physical cable route; some lines show control relationship.",
      whyOtherOptionsAreWrong: {
        B: "It is not a plumbing line in this electrical drawing.",
        C: "It is not a painting guide.",
        D: "A layout control line does not indicate a fault."
      }
    }
  },
  {
    id: 28,
    topic: "Living Room Layout Diagram",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "Socket outlets in a living-room layout are mainly provided for:",
    options: {
      A: "connecting portable appliances",
      B: "holding ceiling fans",
      C: "measuring insulation resistance",
      D: "joining conduit pipes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Socket outlets provide connection points for portable electrical appliances. Their ratings and positions must meet installation requirements.",
      examTrapAlert: "Sockets supply appliances; switches control circuits.",
      whyOtherOptionsAreWrong: {
        B: "Ceiling fans require fan points and regulators.",
        C: "Insulation resistance is measured with a megger.",
        D: "Conduit pipes are joined with couplers and boxes."
      }
    }
  },
  {
    id: 29,
    topic: "Living Room Layout Diagram",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "The correct positioning of accessories on a floor plan helps the electrician to:",
    options: {
      A: "install fittings at required locations",
      B: "avoid all testing",
      C: "remove circuit protection",
      D: "increase cable faults"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical layouts guide the electrician in placing switches, lamps, sockets, fan points, and distribution boards correctly according to the building plan.",
      examTrapAlert: "Layout interpretation is about position and function.",
      whyOtherOptionsAreWrong: {
        B: "Testing is still required after installation.",
        C: "Protection must not be removed.",
        D: "Good layout reduces confusion and faults."
      }
    }
  },
  {
    id: 30,
    topic: "Inspection and Testing",
    question: "Which instrument is used for insulation resistance testing?",
    options: {
      A: "Megger",
      B: "Photometer",
      C: "Hydrometer",
      D: "Stopwatch"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A megger, or insulation resistance tester, is used to test insulation between conductors and between conductors and earth.",
      examTrapAlert: "Megger is for insulation resistance; photometer is for illumination.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures illumination.",
        C: "Hydrometer tests liquid specific gravity.",
        D: "Stopwatch measures time."
      }
    }
  },
  {
    id: 31,
    topic: "Inspection and Testing",
    question: "Which of the following is a test carried out on domestic electrical installation?",
    options: {
      A: "Polarity test",
      B: "Taste test",
      C: "Paint test",
      D: "Sound colour test"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Standard domestic installation tests include polarity test, insulation resistance test, continuity test, earthing test, and ring circuit continuity test.",
      examTrapAlert: "WAEC expects recognized electrical tests, not ordinary descriptive words.",
      whyOtherOptionsAreWrong: {
        B: "Taste is unsafe and irrelevant.",
        C: "Paint test is not an electrical installation test.",
        D: "This is not a recognized test."
      }
    }
  },
  {
    id: 32,
    topic: "Pole Test",
    question: "Which instrument may be used for a pole test in electrical installation?",
    options: {
      A: "Ohmmeter or bell set",
      B: "Paint roller",
      C: "Hacksaw only",
      D: "Spirit level only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A pole test may be carried out using an ohmmeter, multimeter, or bell set. The expected result is zero reading on an ohmmeter or continuity on a bell set.",
      examTrapAlert: "Pole test checks continuity condition, not physical alignment.",
      whyOtherOptionsAreWrong: {
        B: "Paint roller is not a testing instrument.",
        C: "Hacksaw cuts materials.",
        D: "Spirit level checks alignment."
      }
    }
  },
  {
    id: 33,
    topic: "Pole Test",
    question: "Before carrying out an effective pole test, the supply should be:",
    options: {
      A: "switched off",
      B: "increased above normal",
      C: "connected directly to earth",
      D: "left uncontrolled"
    },
    correctAnswer: "A",
    solution: {
      classNote: "For a safe pole test, the supply must be switched off. Lamps and appliances should be removed or put off, switches placed in the OFF position, and the circuit prepared for continuity checking.",
      examTrapAlert: "Never test continuity on a live circuit.",
      whyOtherOptionsAreWrong: {
        B: "Increasing voltage is dangerous.",
        C: "Direct earthing of live supply is unsafe.",
        D: "Uncontrolled supply is hazardous."
      }
    }
  },
  {
    id: 34,
    topic: "Cable Jointing",
    question: "Which of the following is a type of electrical joint?",
    options: {
      A: "Tee joint",
      B: "Paint joint",
      C: "Glass joint",
      D: "Rubber joint only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Types of electrical joints include tee joint, married joint, scarf joint, Britannia joint, telescope joint, and straight-through joint.",
      examTrapAlert: "Electrical joints are conductor connection methods.",
      whyOtherOptionsAreWrong: {
        B: "Paint joint is not an electrical joint.",
        C: "Glass joint is not a standard cable joint.",
        D: "Rubber is an insulating material, not a joint type."
      }
    }
  },
  {
    id: 35,
    topic: "Cable Jointing",
    question: "Before making a tee joint, the conductor should first be:",
    options: {
      A: "stripped and cleaned",
      B: "painted with oil",
      C: "buried without preparation",
      D: "covered with cement"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Preparing a tee joint involves stripping the conductors to the required length, cleaning the bare conductors, arranging strands, and winding them firmly.",
      examTrapAlert: "Good jointing begins with clean bare conductors.",
      whyOtherOptionsAreWrong: {
        B: "Oil prevents good electrical contact.",
        C: "Unprepared conductors make poor joints.",
        D: "Cement is not used for conductor joint preparation."
      }
    }
  },
  {
    id: 36,
    topic: "Insulators",
    question: "Which of the following is a characteristic of an insulator?",
    options: {
      A: "High resistance to current",
      B: "Very high conductivity",
      C: "Easy soldering",
      D: "Low resistance to voltage"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An insulator has high resistance to current, low conductivity, and is used to prevent current from flowing where it is not wanted.",
      examTrapAlert: "Conductors conduct; insulators resist current flow.",
      whyOtherOptionsAreWrong: {
        B: "High conductivity is a conductor property.",
        C: "Insulators generally cannot be soldered like metals.",
        D: "Insulators should resist voltage stress."
      }
    }
  },
  {
    id: 37,
    topic: "Conductors",
    question: "Which of the following is a characteristic of a good conductor?",
    options: {
      A: "Low resistance",
      B: "Low conductivity",
      C: "Cannot be soldered",
      D: "Always made of wood"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A good conductor has low resistance, high conductivity, ductility, mechanical strength, and can often be soldered.",
      examTrapAlert: "Copper and aluminium are common conductors because they allow current flow.",
      whyOtherOptionsAreWrong: {
        B: "Low conductivity describes poor conduction.",
        C: "Many conductors can be soldered.",
        D: "Wood is generally an insulator."
      }
    }
  },
  {
    id: 38,
    topic: "Business Costing",
    question: "If 5 coils of 2.5 mm² cable cost ₦3,500 each, the total cost is:",
    options: {
      A: "₦17,500",
      B: "₦7,000",
      C: "₦3,505",
      D: "₦1,750"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Total cost = Quantity × Unit price = 5 × ₦3,500 = ₦17,500.",
      examTrapAlert: "Multiply quantity by unit price; do not add them.",
      whyOtherOptionsAreWrong: {
        B: "This is not 5 × 3,500.",
        C: "This adds wrongly.",
        D: "This is too low."
      }
    }
  },
  {
    id: 39,
    topic: "Business Costing",
    question: "If the grand total for business materials is ₦66,000 and available capital is ₦50,000, the amount to be borrowed is:",
    options: {
      A: "₦16,000",
      B: "₦116,000",
      C: "₦50,000",
      D: "₦66,000"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Amount borrowed = Total cost − Available capital = ₦66,000 − ₦50,000 = ₦16,000.",
      examTrapAlert: "Borrowing covers the shortfall, not the whole total.",
      whyOtherOptionsAreWrong: {
        B: "This adds the two values.",
        C: "This is only available capital.",
        D: "This is the total cost, not the amount to borrow."
      }
    }
  },
  {
    id: 40,
    topic: "Entrepreneurship",
    question: "Which of the following is a source of business fund?",
    options: {
      A: "Loan from cooperative",
      B: "Loose switch terminal",
      C: "Broken lamp tube",
      D: "Used insulation tape"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sources of funds include personal savings, loans from friends or family, bank loans, cooperative loans, grants, gifts, and donations.",
      examTrapAlert: "Funding sources are financial, not damaged materials.",
      whyOtherOptionsAreWrong: {
        B: "A loose terminal is a fault.",
        C: "A broken lamp tube is waste or defective material.",
        D: "Used insulation tape is not a funding source."
      }
    }
  },
  {
    id: 41,
    topic: "Business Records",
    question: "Which book is useful for recording sales in a small electrical business?",
    options: {
      A: "Sales record book",
      B: "Faulty lamp book",
      C: "Paint colour book",
      D: "Cable bending book only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A sales record book helps the business owner track sales transactions. Other important books include cash book, receipt book, stock inventory book, invoice book, and purchase book.",
      examTrapAlert: "WAEC entrepreneurship questions expect simple business record books.",
      whyOtherOptionsAreWrong: {
        B: "This is not a standard business book.",
        C: "Paint colour book is not a sales record.",
        D: "This is not a standard accounting record."
      }
    }
  },
  {
    id: 42,
    topic: "DC Generator Faults",
    question: "One possible cause of no voltage at the terminals of a d.c. generator is:",
    options: {
      A: "failure of residual magnetism",
      B: "perfect brush contact",
      C: "correct speed and excitation",
      D: "clean commutator always"
    },
    correctAnswer: "A",
    solution: {
      classNote: "No voltage at the terminals may result from open circuit in the field, open circuit in the armature, poor brush contact, short circuit, or loss of residual magnetism.",
      examTrapAlert: "No voltage means generation has failed; choose a fault condition.",
      whyOtherOptionsAreWrong: {
        B: "Perfect brush contact supports operation.",
        C: "Correct speed and excitation help voltage generation.",
        D: "A clean commutator supports good contact."
      }
    }
  },
  {
    id: 43,
    topic: "DC Generator Faults",
    question: "Very low voltage at the terminals of a d.c. generator may be caused by:",
    options: {
      A: "dirty commutator",
      B: "perfect magnetic strength",
      C: "correct rated speed",
      D: "new brushes with good contact"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Very low terminal voltage may be caused by dirty commutator, poor brush contact, very low speed, weak magnetic field, or high voltage drop at the brushes.",
      examTrapAlert: "Low voltage points to poor contact, low speed, or weak field.",
      whyOtherOptionsAreWrong: {
        B: "Good magnetic strength supports normal voltage.",
        C: "Rated speed supports proper generation.",
        D: "Good brushes improve voltage output."
      }
    }
  },
  {
    id: 44,
    topic: "DC Generator Faults",
    question: "Sparking at the commutator may be caused by:",
    options: {
      A: "worn brushes or dirty commutator",
      B: "perfect commutation",
      C: "correct brush pressure always",
      D: "clean and smooth commutator"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sparking may be caused by worn brushes, dirty commutator, high mica, loose brush spring, burnt brush spring, or electrical overload.",
      examTrapAlert: "Sparking points to brush, commutator, mica, or overload problems.",
      whyOtherOptionsAreWrong: {
        B: "Perfect commutation reduces sparking.",
        C: "Correct brush pressure reduces sparking.",
        D: "A clean smooth commutator supports normal operation."
      }
    }
  },
  {
    id: 45,
    topic: "Rewinding Materials",
    question: "Which of the following is used as a winding material?",
    options: {
      A: "Enamelled copper conductor",
      B: "Cement block",
      C: "Paint brush",
      D: "Glass cup"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Materials used for winding include enamelled copper conductor, sleeving, prespan, binding rope, varnish, solder, and insulating materials.",
      examTrapAlert: "Winding materials are electrical and insulating materials used inside machines.",
      whyOtherOptionsAreWrong: {
        B: "Cement block is not used for motor winding.",
        C: "Paint brush is not a winding material.",
        D: "Glass cup is irrelevant."
      }
    }
  },
  {
    id: 46,
    topic: "Machine Terms",
    question: "Pole pitch is the:",
    options: {
      A: "distance between the centre lines of adjacent poles",
      B: "height of a socket above floor",
      C: "length of a conduit pipe only",
      D: "thickness of insulation tape"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Pole pitch is the distance measured between the centre line of one pole and the centre line of the next adjacent pole on an electrical machine.",
      examTrapAlert: "Machine pitch terms refer to distances around the armature or winding layout.",
      whyOtherOptionsAreWrong: {
        B: "Socket height is an installation measurement.",
        C: "Conduit length is not pole pitch.",
        D: "Tape thickness is unrelated."
      }
    }
  },
  {
    id: 47,
    topic: "Machine Terms",
    question: "Slot pitch is the distance between:",
    options: {
      A: "successive slots around the armature",
      B: "two lamps in a room",
      C: "two socket outlets only",
      D: "earth and neutral conductors"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Slot pitch is the distance between successive slots around the periphery of an armature.",
      examTrapAlert: "Slot pitch is a machine winding term.",
      whyOtherOptionsAreWrong: {
        B: "Lamp spacing is not slot pitch.",
        C: "Socket spacing is not slot pitch.",
        D: "Earth-neutral relationship is not slot pitch."
      }
    }
  },
  {
    id: 48,
    topic: "Machine Maintenance",
    question: "Skimming in machine maintenance means:",
    options: {
      A: "cleaning dirty slip rings or commutator with emery cloth",
      B: "painting a conduit box",
      C: "cutting PVC pipe",
      D: "installing a socket outlet"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Skimming is the cleaning or smoothing of dirty slip rings, commutators, or armature surfaces using emery cloth or sand paper where appropriate.",
      examTrapAlert: "Skimming relates to machine surface maintenance, not building wiring.",
      whyOtherOptionsAreWrong: {
        B: "Painting is not skimming.",
        C: "Cutting conduit is installation work.",
        D: "Installing sockets is accessory installation."
      }
    }
  },
  {
    id: 49,
    topic: "Machine Maintenance",
    question: "Undercutting in a commutator means:",
    options: {
      A: "removing or reducing mica insulation between commutator bars",
      B: "cutting a cable shorter than required",
      C: "reducing wall thickness",
      D: "removing all fuses from a board"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Undercutting is the process of lowering or removing mica insulation between commutator bars so that brushes make proper contact with the copper segments.",
      examTrapAlert: "Undercutting is specific to commutator maintenance.",
      whyOtherOptionsAreWrong: {
        B: "Cable cutting is not undercutting.",
        C: "Wall thickness is unrelated.",
        D: "Removing fuses is unsafe."
      }
    }
  },
  {
    id: 50,
    topic: "General WAEC Revision",
    question: "Which combination best represents good electrical installation practice?",
    options: {
      A: "Correct wiring system, proper testing, and protective devices",
      B: "Loose joints, no testing, and no earthing",
      C: "Wrong cable size and overloaded circuits",
      D: "Damaged tools and poor insulation"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Good electrical installation practice requires correct materials, suitable wiring method, proper workmanship, inspection and testing, earthing, and protective devices.",
      examTrapAlert: "WAEC rewards safe, standard, tested, and regulated practice.",
      whyOtherOptionsAreWrong: {
        B: "Loose joints and no testing are dangerous.",
        C: "Wrong cable size and overload cause overheating and fire.",
        D: "Damaged tools and poor insulation create hazards."
      }
    }
  }
],
test4: [
  {
    id: 1,
    topic: "Busbar Trunking",
    diagram: "assets/solarpv/obj/test4/busbar.png",
    question: "The diagram shown represents a:",
    options: {
      A: "busbar",
      B: "lamp holder",
      C: "ceiling rose",
      D: "bell push"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A busbar is a metallic conducting bar used for distributing electrical power within panels, switchboards, trunking systems, and distribution assemblies.",
      examTrapAlert: "Busbar is a power-distribution conductor, not a lighting accessory.",
      whyOtherOptionsAreWrong: {
        B: "A lamp holder carries a lamp.",
        C: "A ceiling rose connects pendant lighting.",
        D: "A bell push operates a bell circuit."
      }
    }
  },
  {
    id: 2,
    topic: "Busbar Trunking",
    diagram: "assets/solarpv/obj/test4/busbar.png",
    question: "A major use of a busbar is to:",
    options: {
      A: "distribute large current to circuits",
      B: "measure illumination",
      C: "bend conduit pipes",
      D: "store chemical energy"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Busbars are used where several circuits require reliable current distribution from a common supply point.",
      examTrapAlert: "Busbars distribute current; they do not measure, bend, or store energy.",
      whyOtherOptionsAreWrong: {
        B: "A photometer measures illumination.",
        C: "A bending spring or bending machine bends conduit.",
        D: "Cells and batteries store chemical energy."
      }
    }
  },
  {
    id: 3,
    topic: "Conduit Wiring",
    diagram: "assets/solarpv/obj/test4/Conduit-Behind-Wall.PNG",
    question: "The diagram indicates a conduit installed:",
    options: {
      A: "behind or within a wall",
      B: "inside a battery",
      C: "as a lamp filament",
      D: "as a fuse element"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit installed behind or within a wall is concealed conduit wiring. It protects the cables and improves appearance.",
      examTrapAlert: "Behind-wall conduit usually means concealed installation.",
      whyOtherOptionsAreWrong: {
        B: "A conduit is not installed inside a battery.",
        C: "A filament is part of a lamp.",
        D: "A fuse element is a protective conductor designed to melt."
      }
    }
  },
  {
    id: 4,
    topic: "Concealed Conduit",
    diagram: "assets/solarpv/obj/test4/Conduit-Behind-Wall.PNG",
    question: "One advantage of the wiring method shown is:",
    options: {
      A: "neat appearance and mechanical protection",
      B: "easy exposure to damage",
      C: "no need for inspection",
      D: "automatic battery charging"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Concealed conduit gives a neat appearance and protects cables from mechanical damage when properly installed.",
      examTrapAlert: "Do not choose options that remove testing or safety.",
      whyOtherOptionsAreWrong: {
        B: "Conduit reduces exposure to damage.",
        C: "Inspection and testing remain necessary.",
        D: "Conduit does not charge batteries."
      }
    }
  },
  {
    id: 5,
    topic: "Earthing Symbol",
    diagram: "assets/solarpv/obj/test4/Consumer’s-Earth-Terminal.PNG",
    question: "The symbol shown represents the:",
    options: {
      A: "consumer’s earth terminal",
      B: "ceiling fan",
      C: "socket outlet",
      D: "energy meter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The consumer’s earth terminal is the point where the earthing conductor is connected to provide a safe path for fault current.",
      examTrapAlert: "Earth symbols usually show vertical and horizontal grounding lines.",
      whyOtherOptionsAreWrong: {
        B: "A fan symbol is different.",
        C: "A socket outlet symbol is different.",
        D: "An energy meter has a different symbol."
      }
    }
  },
  {
    id: 6,
    topic: "Earthing",
    diagram: "assets/solarpv/obj/test4/Consumer’s-Earth-Terminal.PNG",
    question: "The main purpose of earthing in an electrical installation is to:",
    options: {
      A: "provide a safe path for fault current",
      B: "increase lamp brightness only",
      C: "reduce cable length",
      D: "replace all fuses"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Earthing protects users by providing a low-resistance path for fault current so protective devices can operate quickly.",
      examTrapAlert: "Earthing is a safety measure; it does not replace protective devices.",
      whyOtherOptionsAreWrong: {
        B: "Lamp brightness is not the purpose of earthing.",
        C: "Earthing does not reduce cable length.",
        D: "Fuses and circuit breakers are still required."
      }
    }
  },
  {
    id: 7,
    topic: "Socket Outlet Symbol",
    diagram: "assets/solarpv/obj/test4/Double-Socket-Outlet.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "double socket outlet",
      B: "single lamp point",
      C: "fan regulator",
      D: "bell transformer"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A double socket outlet provides two outlet points for connecting portable appliances.",
      examTrapAlert: "Two outlet arcs or points usually indicate a double outlet.",
      whyOtherOptionsAreWrong: {
        B: "A lamp point symbol differs.",
        C: "A fan regulator is a control accessory.",
        D: "A bell transformer has a transformer symbol."
      }
    }
  },
  {
    id: 8,
    topic: "Socket Outlet",
    diagram: "assets/solarpv/obj/test4/Double-Socket-Outlet.PNG",
    question: "The device shown is used mainly for:",
    options: {
      A: "connecting portable appliances",
      B: "testing insulation resistance",
      C: "joining conduit in four directions",
      D: "measuring light intensity"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Socket outlets provide connection points for appliances through plugs. Their rating and installation height must follow standard practice.",
      examTrapAlert: "Sockets connect loads; instruments test circuits.",
      whyOtherOptionsAreWrong: {
        B: "A megger tests insulation resistance.",
        C: "A 4-way box joins conduit in four directions.",
        D: "A photometer measures light intensity."
      }
    }
  },
  {
    id: 9,
    topic: "Joint Box Symbol",
    diagram: "assets/solarpv/obj/test4/Joint-Box.PNG",
    question: "The diagram represents a:",
    options: {
      A: "joint box",
      B: "starter motor",
      C: "battery cell",
      D: "earth electrode only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A joint box is used to house cable joints and provide access for inspection or maintenance.",
      examTrapAlert: "Joint boxes are wiring accessories, not machines.",
      whyOtherOptionsAreWrong: {
        B: "A starter motor is a machine/control device.",
        C: "A cell stores energy chemically.",
        D: "An earth electrode is part of the earthing system."
      }
    }
  },
  {
    id: 10,
    topic: "Joint Box",
    diagram: "assets/solarpv/obj/test4/Joint-Box.PNG",
    question: "A joint box is used mainly to:",
    options: {
      A: "enclose and protect cable joints",
      B: "increase supply frequency",
      C: "measure voltage directly",
      D: "generate solar energy"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Cable joints should be protected mechanically and electrically. A joint box provides enclosure and accessibility.",
      examTrapAlert: "Joints must not be left exposed.",
      whyOtherOptionsAreWrong: {
        B: "Frequency is set by the supply system.",
        C: "Voltage is measured with a voltmeter.",
        D: "Solar panels generate solar electricity."
      }
    }
  },
  {
    id: 11,
    topic: "Living Room Symbols",
    diagram: "assets/solarpv/obj/test4/living_symbols.png",
    question: "The diagram title suggests the image is used for studying:",
    options: {
      A: "electrical symbols used in living-room layouts",
      B: "battery electrolyte level",
      C: "motor bearing noise",
      D: "solar panel tilt only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Living-room electrical symbols help students interpret positions of lamps, switches, sockets, fan points, and other accessories in a building plan.",
      examTrapAlert: "A layout-symbol sheet is for drawing interpretation.",
      whyOtherOptionsAreWrong: {
        B: "Electrolyte level is a battery maintenance issue.",
        C: "Bearing noise relates to machine faults.",
        D: "Solar panel tilt is not the focus of this symbol sheet."
      }
    }
  },
  {
    id: 12,
    topic: "Building Drawing",
    diagram: "assets/solarpv/obj/test4/living_symbols.png",
    question: "Electrical symbols in a living-room drawing help the installer to:",
    options: {
      A: "identify accessory positions correctly",
      B: "avoid using protective devices",
      C: "remove all earthing conductors",
      D: "ignore the wiring plan"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Symbols make a wiring drawing easy to interpret and help the electrician position each accessory correctly.",
      examTrapAlert: "WAEC often tests interpretation of symbols and legends.",
      whyOtherOptionsAreWrong: {
        B: "Protective devices are required.",
        C: "Earthing must not be removed.",
        D: "The wiring plan must be followed."
      }
    }
  },
  {
    id: 13,
    topic: "Miniature Circuit Breaker",
    diagram: "assets/solarpv/obj/test4/Miniature-Circuit-Breaker.PNG",
    question: "The diagram shown represents a:",
    options: {
      A: "miniature circuit breaker",
      B: "ceiling rose",
      C: "lamp holder",
      D: "conduit saddle"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A miniature circuit breaker, or MCB, is a protective device that trips during overload or short-circuit conditions.",
      examTrapAlert: "MCB is protection; ceiling rose and lamp holder are lighting accessories.",
      whyOtherOptionsAreWrong: {
        B: "A ceiling rose is not a circuit breaker.",
        C: "A lamp holder carries a lamp.",
        D: "A conduit saddle supports conduit."
      }
    }
  },
  {
    id: 14,
    topic: "Miniature Circuit Breaker",
    diagram: "assets/solarpv/obj/test4/Miniature-Circuit-Breaker.PNG",
    question: "The device shown operates mainly when there is:",
    options: {
      A: "overload or short circuit",
      B: "low room temperature",
      C: "poor wall painting",
      D: "high ceiling height"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An MCB disconnects a circuit automatically when current exceeds a safe value due to overload or short circuit.",
      examTrapAlert: "Protection devices respond to electrical faults.",
      whyOtherOptionsAreWrong: {
        B: "Room temperature is not the normal operating trigger.",
        C: "Wall painting is irrelevant.",
        D: "Ceiling height does not trip an MCB."
      }
    }
  },
  {
    id: 15,
    topic: "One-Way Two-Gang Switch",
    diagram: "assets/solarpv/obj/test4/One-Way-Two-Gang-Switch.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "one-way two-gang switch",
      B: "single socket outlet",
      C: "busbar chamber",
      D: "earth terminal"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A one-way two-gang switch has two switch mechanisms on one plate, each controlling a circuit from one position.",
      examTrapAlert: "Two-gang means two switches on one plate.",
      whyOtherOptionsAreWrong: {
        B: "A socket outlet has a different symbol.",
        C: "A busbar chamber is not a switch.",
        D: "Earth terminal has the grounding symbol."
      }
    }
  },
  {
    id: 16,
    topic: "Switching",
    diagram: "assets/solarpv/obj/test4/One-Way-Two-Gang-Switch.PNG",
    question: "A one-way two-gang switch can control:",
    options: {
      A: "two separate lighting points from one position",
      B: "one motor from three positions",
      C: "earth leakage current only",
      D: "battery electrolyte level"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Because it has two switch gangs, it can control two separate lamps or lighting circuits from one location.",
      examTrapAlert: "Gang refers to the number of switch units.",
      whyOtherOptionsAreWrong: {
        B: "That requires a different control arrangement.",
        C: "Earth leakage is handled by ELCB/RCD.",
        D: "Electrolyte level is not controlled by a switch."
      }
    }
  },
  {
    id: 17,
    topic: "Plug Pin",
    diagram: "assets/solarpv/obj/test4/Plug-Pin.PNG",
    question: "The diagram shown represents a:",
    options: {
      A: "plug pin",
      B: "MCB",
      C: "lamp holder",
      D: "ceiling rose"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A plug pin is the metal conducting part of a plug that enters the socket outlet to make electrical contact.",
      examTrapAlert: "A plug connects an appliance to a socket outlet.",
      whyOtherOptionsAreWrong: {
        B: "An MCB is a protective device.",
        C: "A lamp holder holds a lamp.",
        D: "A ceiling rose is a lighting connection accessory."
      }
    }
  },
  {
    id: 18,
    topic: "Plug and Socket",
    diagram: "assets/solarpv/obj/test4/Plug-Pin.PNG",
    question: "The conducting part of a plug must be properly insulated around the body to:",
    options: {
      A: "prevent electric shock",
      B: "increase wall height",
      C: "reduce building cost only",
      D: "replace the fuse"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Only the necessary contact portion of the pin should conduct into the socket. Proper insulation prevents accidental contact with live parts.",
      examTrapAlert: "Safety is the key reason for insulation around plug parts.",
      whyOtherOptionsAreWrong: {
        B: "Wall height is unrelated.",
        C: "Cost is not the safety reason.",
        D: "Insulation does not replace a fuse."
      }
    }
  },
  {
    id: 19,
    topic: "Socket Outlet",
    diagram: "assets/solarpv/obj/test4/socket.png",
    question: "The diagram shown is a physical representation of a:",
    options: {
      A: "socket outlet",
      B: "battery charger only",
      C: "motor rotor",
      D: "photometer"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A socket outlet is installed to provide a safe point where plugs can connect appliances to the electrical supply.",
      examTrapAlert: "Do not confuse the physical socket plate with its symbolic representation.",
      whyOtherOptionsAreWrong: {
        B: "A charger is a separate device.",
        C: "A rotor is a motor part.",
        D: "A photometer measures illumination."
      }
    }
  },
  {
    id: 20,
    topic: "Socket Outlet",
    diagram: "assets/solarpv/obj/test4/socket.png",
    question: "Socket outlets are commonly connected to circuits supplying:",
    options: {
      A: "portable appliances",
      B: "only earthing rods",
      C: "only ceiling roses",
      D: "only conduit boxes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Socket outlets supply portable appliances such as chargers, televisions, radios, and other plug-connected loads.",
      examTrapAlert: "Socket outlet questions usually test appliance connection.",
      whyOtherOptionsAreWrong: {
        B: "Earthing rods are not supplied as loads.",
        C: "Ceiling roses are lighting accessories.",
        D: "Conduit boxes are wiring accessories."
      }
    }
  },
  {
    id: 21,
    topic: "Socket Outlet Symbol",
    diagram: "assets/solarpv/obj/test4/Socket-Outlet.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "socket outlet",
      B: "fan regulator",
      C: "joint box",
      D: "earth terminal"
    },
    correctAnswer: "A",
    solution: {
      classNote: "This is a socket outlet symbol used in electrical layout drawings to indicate where an outlet should be installed.",
      examTrapAlert: "Learn both the real accessory and its drawing symbol.",
      whyOtherOptionsAreWrong: {
        B: "A fan regulator has a different control symbol.",
        C: "A joint box symbol is different.",
        D: "An earth terminal uses the earthing symbol."
      }
    }
  },
  {
    id: 22,
    topic: "Socket Outlet Symbol",
    diagram: "assets/solarpv/obj/test4/Socket-Outlet.PNG",
    question: "In a wiring layout, this symbol helps the electrician identify:",
    options: {
      A: "where a socket outlet should be fixed",
      B: "where to pour water",
      C: "where to remove insulation completely",
      D: "where to stop earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical symbols guide the accurate placement of accessories during installation.",
      examTrapAlert: "Symbols on plans are installation instructions.",
      whyOtherOptionsAreWrong: {
        B: "Water is dangerous around electrical installations.",
        C: "Insulation must not be removed completely.",
        D: "Earthing is essential for safety."
      }
    }
  },
  {
    id: 23,
    topic: "Two-Way One-Gang Switch",
    diagram: "assets/solarpv/obj/test4/Two-Way-One-Gang Switch.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "two-way one-gang switch",
      B: "double socket outlet",
      C: "joint box",
      D: "consumer earth terminal"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A two-way one-gang switch is one switch unit used as part of a two-way lighting control circuit.",
      examTrapAlert: "Two-way refers to switching method; one-gang refers to one switch unit.",
      whyOtherOptionsAreWrong: {
        B: "A double socket has outlet symbols.",
        C: "A joint box has a junction symbol.",
        D: "An earth terminal has the grounding symbol."
      }
    }
  },
  {
    id: 24,
    topic: "Two-Way Switching",
    diagram: "assets/solarpv/obj/test4/Two-Way-One-Gang Switch.PNG",
    question: "Two-way switching is useful where a lamp is controlled from:",
    options: {
      A: "two different positions",
      B: "no switch at all",
      C: "only the distribution board",
      D: "a battery electrolyte cap"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Two-way switching allows one lamp to be controlled from two positions, such as both ends of a corridor or staircase.",
      examTrapAlert: "Two-way = two control positions.",
      whyOtherOptionsAreWrong: {
        B: "A lamp requires proper control.",
        C: "The distribution board is for distribution and protection.",
        D: "A battery cap is irrelevant."
      }
    }
  },
  {
    id: 25,
    topic: "Electrical Symbols",
    question: "Why are British Standard electrical symbols used in installation drawings?",
    options: {
      A: "To make drawings easy to interpret",
      B: "To increase current automatically",
      C: "To replace practical installation",
      D: "To remove the need for regulations"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Standard symbols provide a common language for representing electrical accessories and circuits in drawings.",
      examTrapAlert: "Symbols aid communication; they do not replace safety or practical work.",
      whyOtherOptionsAreWrong: {
        B: "Symbols do not increase current.",
        C: "Practical installation is still required.",
        D: "Regulations remain necessary."
      }
    }
  },
  {
    id: 26,
    topic: "Electrical Accessories",
    question: "Which of the following is an electrical accessory?",
    options: {
      A: "Socket outlet",
      B: "Cement block",
      C: "Wooden table",
      D: "Water bucket"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical accessories include switches, sockets, lamp holders, ceiling roses, joint boxes, plugs, and distribution-related fittings.",
      examTrapAlert: "Accessories are parts used in wiring and connection.",
      whyOtherOptionsAreWrong: {
        B: "Cement block is a building material.",
        C: "A table is furniture.",
        D: "A bucket is not an electrical accessory."
      }
    }
  },
  {
    id: 27,
    topic: "Conduit Fittings",
    question: "Which fitting is used to join two lengths of conduit together?",
    options: {
      A: "Coupler",
      B: "Photometer",
      C: "Hydrometer",
      D: "Ammeter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A coupler joins two conduit pipes end to end in a conduit wiring system.",
      examTrapAlert: "Conduit fittings are mechanical joining/support parts.",
      whyOtherOptionsAreWrong: {
        B: "A photometer measures illumination.",
        C: "A hydrometer tests liquid density.",
        D: "An ammeter measures current."
      }
    }
  },
  {
    id: 28,
    topic: "Conduit Wiring",
    question: "Which of the following is a tool for conduit work?",
    options: {
      A: "Hacksaw",
      B: "Cooking pot",
      C: "School bell only",
      D: "Water hose"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Tools for conduit work include hacksaw, bending spring, bending machine, hammer, chisel, and screwdriver.",
      examTrapAlert: "Hacksaw is used for cutting conduit.",
      whyOtherOptionsAreWrong: {
        B: "A cooking pot is not a conduit tool.",
        C: "A school bell is not used for conduit work.",
        D: "A water hose is unrelated."
      }
    }
  },
  {
    id: 29,
    topic: "Testing",
    question: "Which test checks whether switches are connected in the live conductor?",
    options: {
      A: "Polarity test",
      B: "Illumination test",
      C: "Paint test",
      D: "Temperature taste test"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A polarity test confirms that switches, fuses, and protective devices are placed in the live conductor and that connections are correctly made.",
      examTrapAlert: "Polarity is about correct live and neutral connection.",
      whyOtherOptionsAreWrong: {
        B: "Illumination test concerns lighting level.",
        C: "Paint test is not an electrical test.",
        D: "Taste is unsafe and irrelevant."
      }
    }
  },
  {
    id: 30,
    topic: "Insulation Resistance",
    question: "Insulation resistance is measured with a:",
    options: {
      A: "megger",
      B: "hammer",
      C: "saw",
      D: "chisel"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A megger measures insulation resistance between conductors and between conductor and earth.",
      examTrapAlert: "Megger is the WAEC keyword for insulation resistance.",
      whyOtherOptionsAreWrong: {
        B: "Hammer is a striking tool.",
        C: "Saw is a cutting tool.",
        D: "Chisel is a cutting/chipping tool."
      }
    }
  },
  {
    id: 31,
    topic: "Continuity Test",
    question: "A bell set may be used to test:",
    options: {
      A: "continuity",
      B: "illumination",
      C: "battery colour",
      D: "room size"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A bell set can be used to check continuity. If the circuit is continuous, the bell sounds.",
      examTrapAlert: "Bell set means continuity checking.",
      whyOtherOptionsAreWrong: {
        B: "Illumination is measured by photometer.",
        C: "Battery colour is not an electrical test.",
        D: "Room size is measured with a tape."
      }
    }
  },
  {
    id: 32,
    topic: "Ring Circuit",
    question: "A domestic ring circuit is commonly protected by a:",
    options: {
      A: "30A protective device",
      B: "2A lamp cap",
      C: "paint brush",
      D: "wooden peg"
    },
    correctAnswer: "A",
    solution: {
      classNote: "In the traditional WAEC domestic ring circuit context, the ring circuit is commonly protected by a 30A fuse or suitable protective device.",
      examTrapAlert: "Do not confuse 13A plug fuse with ring circuit protection.",
      whyOtherOptionsAreWrong: {
        B: "A lamp cap is not ring-circuit protection.",
        C: "A brush is not a protective device.",
        D: "A wooden peg is not electrical protection."
      }
    }
  },
  {
    id: 33,
    topic: "Cable Size",
    question: "The standard cable size commonly associated with a domestic ring circuit is:",
    options: {
      A: "2.5 mm²",
      B: "0.25 mm²",
      C: "16 mm² only",
      D: "50 mm² only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A 2.5 mm² cable is commonly associated with domestic socket ring circuits in this examination context.",
      examTrapAlert: "Lighting circuits often use smaller sizes; socket ring circuits commonly use 2.5 mm².",
      whyOtherOptionsAreWrong: {
        B: "Too small for the context.",
        C: "Too large for normal domestic ring circuit.",
        D: "Far too large for the examined domestic context."
      }
    }
  },
  {
    id: 34,
    topic: "Surface Wiring",
    question: "Which item is commonly used to hold surface wiring cables to a wall?",
    options: {
      A: "Cable clips",
      B: "Cooking spoon",
      C: "Hydrometer",
      D: "Lamp tube only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Cable clips are used in surface wiring to secure cables neatly to walls or boards.",
      examTrapAlert: "Surface wiring uses visible cable support materials.",
      whyOtherOptionsAreWrong: {
        B: "A spoon is irrelevant.",
        C: "A hydrometer is not for cable fixing.",
        D: "A lamp tube is not for fixing cables."
      }
    }
  },
  {
    id: 35,
    topic: "Surface Wiring Tools",
    question: "Which hand tool is used for driving nails during wiring installation?",
    options: {
      A: "Hammer",
      B: "Megger",
      C: "Photometer",
      D: "Voltmeter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A hammer is used for driving nails, including nails for clips or cleats in installation work.",
      examTrapAlert: "Hammer is a striking tool, not a measuring instrument.",
      whyOtherOptionsAreWrong: {
        B: "Megger tests insulation.",
        C: "Photometer measures illumination.",
        D: "Voltmeter measures voltage."
      }
    }
  },
  {
    id: 36,
    topic: "Illumination",
    question: "The instrument used for measuring illumination is a:",
    options: {
      A: "photometer",
      B: "megger",
      C: "hacksaw",
      D: "fuse carrier"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A photometer measures illumination or lighting level. Illumination is the amount of light falling on a surface.",
      examTrapAlert: "Photo relates to light.",
      whyOtherOptionsAreWrong: {
        B: "Megger measures insulation resistance.",
        C: "Hacksaw cuts materials.",
        D: "Fuse carrier holds a fuse."
      }
    }
  },
  {
    id: 37,
    topic: "Protective Devices",
    question: "Which of the following is a major purpose of protective devices?",
    options: {
      A: "To protect persons and equipment during faults",
      B: "To decorate the room",
      C: "To increase conductor damage",
      D: "To remove earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Protective devices such as fuses, circuit breakers, ELCBs, and MCBs reduce danger from overload, short circuit, and earth leakage faults.",
      examTrapAlert: "Protection devices improve safety.",
      whyOtherOptionsAreWrong: {
        B: "Decoration is not their purpose.",
        C: "They prevent damage.",
        D: "Earthing is part of safety."
      }
    }
  },
  {
    id: 38,
    topic: "Electrical Safety",
    question: "A damaged plug pin should be:",
    options: {
      A: "replaced before use",
      B: "used without inspection",
      C: "wrapped with wet cloth",
      D: "forced into any socket"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Damaged plug pins can cause poor contact, overheating, arcing, and electric shock. They should be replaced before use.",
      examTrapAlert: "Never continue using damaged electrical accessories.",
      whyOtherOptionsAreWrong: {
        B: "Unsafe practice.",
        C: "Wet cloth increases danger.",
        D: "Forcing a plug can damage the socket and cause hazards."
      }
    }
  },
  {
    id: 39,
    topic: "Accessories",
    question: "A plug is used with a socket outlet to:",
    options: {
      A: "connect an appliance to the supply",
      B: "measure insulation resistance",
      C: "bend conduit pipes",
      D: "reduce earth continuity"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The plug and socket arrangement provides a convenient and safe detachable connection for portable appliances.",
      examTrapAlert: "Plug + socket = appliance connection.",
      whyOtherOptionsAreWrong: {
        B: "Insulation is tested with a megger.",
        C: "Conduit bending uses bending tools.",
        D: "Earth continuity must be maintained."
      }
    }
  },
  {
    id: 40,
    topic: "Earthing",
    question: "A good earthing system should have:",
    options: {
      A: "low resistance path to earth",
      B: "broken earth conductor",
      C: "loose terminal only",
      D: "painted live conductor"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A good earthing system provides a low-resistance path to earth, allowing fault current to flow and protective devices to operate quickly.",
      examTrapAlert: "Low earth resistance is desirable.",
      whyOtherOptionsAreWrong: {
        B: "A broken earth conductor is dangerous.",
        C: "Loose terminals cause faults.",
        D: "Painting does not provide earthing safety."
      }
    }
  },
  {
    id: 41,
    topic: "Distribution Board",
    question: "The distribution board in an installation is used to:",
    options: {
      A: "distribute supply to final circuits",
      B: "store water",
      C: "hold ceiling fans only",
      D: "measure room length"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A distribution board receives supply and distributes it to final circuits through protective devices.",
      examTrapAlert: "Distribution board means circuit distribution and protection.",
      whyOtherOptionsAreWrong: {
        B: "It does not store water.",
        C: "It does not hold fans.",
        D: "Room length is measured with tape."
      }
    }
  },
  {
    id: 42,
    topic: "Supply Sequence",
    question: "In a consumer installation, the supply sequence normally includes:",
    options: {
      A: "service cable, service fuse, meter, main switch, distribution board",
      B: "lamp, paint, water, chair, table",
      C: "socket, chalk, book, bag, pen",
      D: "ceiling rose, window, broom, wall, door"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The basic supply sequence is service cable, service fuse, energy meter, main switch, distribution board, and final sub-circuits.",
      examTrapAlert: "WAEC often tests the correct order of supply to consumer installation.",
      whyOtherOptionsAreWrong: {
        B: "This is not an electrical supply sequence.",
        C: "This is not an installation sequence.",
        D: "This mixes unrelated items."
      }
    }
  },
  {
    id: 43,
    topic: "Regulations",
    question: "Electrical installation regulations are important because they:",
    options: {
      A: "promote safety and standard practice",
      B: "encourage careless wiring",
      C: "replace all testing",
      D: "make earthing unnecessary"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Regulations guide safe installation, correct materials, testing, protection, earthing, and standard workmanship.",
      examTrapAlert: "Regulations support safety; they do not remove practical requirements.",
      whyOtherOptionsAreWrong: {
        B: "Regulations discourage careless work.",
        C: "Testing remains necessary.",
        D: "Earthing remains necessary."
      }
    }
  },
  {
    id: 44,
    topic: "First Aid",
    question: "The first action when a person is in contact with a live conductor is to:",
    options: {
      A: "isolate the supply safely",
      B: "pull the person with bare hands",
      C: "pour water on the person",
      D: "continue working"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The supply must first be isolated or the casualty separated from the live source using a dry non-conducting material before first aid is given.",
      examTrapAlert: "Do not touch a person in contact with live electricity.",
      whyOtherOptionsAreWrong: {
        B: "The rescuer may also be shocked.",
        C: "Water increases danger.",
        D: "Work must stop during an accident."
      }
    }
  },
  {
    id: 45,
    topic: "Workshop Safety",
    question: "Which condition is dangerous in an electrical workshop?",
    options: {
      A: "Loose live conductor",
      B: "Dry rubber mat",
      C: "Proper tool storage",
      D: "Correct insulation"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Loose live conductors can cause electric shock, short circuit, burns, and fire. They must be isolated, insulated, and terminated properly.",
      examTrapAlert: "Choose the unsafe condition.",
      whyOtherOptionsAreWrong: {
        B: "Dry rubber mat improves safety.",
        C: "Proper storage prevents accidents.",
        D: "Correct insulation reduces danger."
      }
    }
  },
  {
    id: 46,
    topic: "Maintenance",
    question: "Corrective maintenance is carried out:",
    options: {
      A: "after a fault or breakdown",
      B: "only before equipment is used",
      C: "to avoid all repairs forever",
      D: "to remove all protective devices"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Corrective maintenance is done to restore faulty or broken-down equipment to service.",
      examTrapAlert: "Corrective = corrects an existing fault.",
      whyOtherOptionsAreWrong: {
        B: "Before-failure work is preventive maintenance.",
        C: "Repairs may still be needed.",
        D: "Protective devices must not be removed."
      }
    }
  },
  {
    id: 47,
    topic: "Machine Faults",
    question: "One sign of machine fault is:",
    options: {
      A: "abnormal noise or overheating",
      B: "normal running only",
      C: "correct rated operation",
      D: "proper lubrication always"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Faulty machines may show abnormal noise, overheating, vibration, smoke, poor performance, or failure to start.",
      examTrapAlert: "Fault symptoms are abnormal conditions.",
      whyOtherOptionsAreWrong: {
        B: "Normal running is not a fault.",
        C: "Rated operation is desirable.",
        D: "Proper lubrication prevents faults."
      }
    }
  },
  {
    id: 48,
    topic: "Entrepreneurship",
    question: "Which of the following is a source of funds for electrical installation business?",
    options: {
      A: "Bank loan",
      B: "Broken conduit",
      C: "Damaged socket",
      D: "Loose terminal"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sources of funds include personal savings, family support, cooperative loans, bank loans, grants, and trade credit.",
      examTrapAlert: "Funding sources are financial sources.",
      whyOtherOptionsAreWrong: {
        B: "Broken conduit is not a fund.",
        C: "Damaged socket is not capital.",
        D: "Loose terminal is a fault."
      }
    }
  },
  {
    id: 49,
    topic: "Business Records",
    question: "Which book is useful for recording cash transactions?",
    options: {
      A: "Cash book",
      B: "Conduit book only",
      C: "Socket drawing book only",
      D: "Lamp holder book only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A cash book records money received and money paid out. It helps the business owner monitor cash flow.",
      examTrapAlert: "WAEC entrepreneurship questions include simple business records.",
      whyOtherOptionsAreWrong: {
        B: "This is not a standard cash record.",
        C: "This does not record cash transactions.",
        D: "This is not a business accounting book."
      }
    }
  },
  {
    id: 50,
    topic: "General Installation Practice",
    question: "Good electrical installation practice requires:",
    options: {
      A: "correct symbols, proper materials, testing, and safety compliance",
      B: "guesswork and no testing",
      C: "loose joints and wrong cable size",
      D: "damaged tools and wet working area"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A standard installation requires correct interpretation of drawings, proper materials, correct cable sizes, safe workmanship, protective devices, earthing, inspection, and testing.",
      examTrapAlert: "The correct WAEC answer will always support safety, regulation, and standard practice.",
      whyOtherOptionsAreWrong: {
        B: "Guesswork and no testing are unsafe.",
        C: "Loose joints and wrong cable size cause faults.",
        D: "Damaged tools and wet areas are dangerous."
      }
    }
  }
],
test5: [
  {
    id: 1,
    topic: "Concealed Conduit",
    diagram: "assets/solarpv/obj/test5/Concealed-Conduit.png",
    question: "The diagram shown represents:",
    options: {
      A: "concealed conduit wiring",
      B: "surface cleat wiring",
      C: "overhead line",
      D: "busbar trunking"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Concealed conduit wiring is installed within or behind the wall before cables are drawn into it. It gives a neat appearance and protects cables from mechanical damage.",
      examTrapAlert: "A conduit hidden in wall/floor structure is concealed conduit.",
      whyOtherOptionsAreWrong: {
        B: "Cleat wiring is exposed on the surface.",
        C: "Overhead line is mounted above ground on supports.",
        D: "Busbar trunking is for power distribution, not this symbol."
      }
    }
  },
  {
    id: 2,
    topic: "Conduit Installation",
    diagram: "assets/solarpv/obj/test5/Concealed-Conduit.png",
    question: "According to good conduit practice, cables should be drawn into conduit:",
    options: {
      A: "after the conduit has been erected",
      B: "before the conduit is fixed",
      C: "only after removing insulation",
      D: "without checking bends"
    },
    correctAnswer: "A",
    solution: {
      classNote: "In proper conduit installation, the conduit system is first erected, made mechanically sound, and then cables are drawn into it.",
      examTrapAlert: "WAEC often tests the rule: conduit first, cables later.",
      whyOtherOptionsAreWrong: {
        B: "Cables are not normally drawn before conduit erection.",
        C: "Cable insulation must remain intact.",
        D: "Bends must be smooth to prevent cable damage."
      }
    }
  },
  {
    id: 3,
    topic: "Conduit Boxes",
    diagram: "assets/solarpv/obj/test5/conduit_boxes.png",
    question: "The diagram shows conduit boxes. Their main use is to:",
    options: {
      A: "provide junctions and access points in conduit wiring",
      B: "store electrical energy",
      C: "measure insulation resistance",
      D: "generate alternating current"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit boxes are used where conduit runs end, turn, or branch. They provide access for drawing cables, inspection, and connection.",
      examTrapAlert: "Conduit boxes are wiring accessories, not measuring instruments.",
      whyOtherOptionsAreWrong: {
        B: "Cells or batteries store energy.",
        C: "A megger measures insulation resistance.",
        D: "A generator produces electrical energy."
      }
    }
  },
  {
    id: 4,
    topic: "Conduit Fittings",
    diagram: "assets/solarpv/obj/test5/conduit_boxes.png",
    question: "A conduit box that allows conduit runs to branch in different directions is used mainly for:",
    options: {
      A: "cable routing and junction access",
      B: "motor speed control",
      C: "battery charging",
      D: "illumination measurement"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit boxes assist cable routing through bends, junctions, and branches. They must be properly fixed and accessible where required.",
      examTrapAlert: "Branching conduit means wiring route control, not motor control.",
      whyOtherOptionsAreWrong: {
        B: "Motor speed is controlled by electrical control methods.",
        C: "Battery charging needs a charger.",
        D: "Illumination is measured with a photometer."
      }
    }
  },
  {
    id: 5,
    topic: "Two-Way Lighting Circuit",
    diagram: "assets/solarpv/obj/test5/Howa2-WayLightSwitchWorks.png",
    question: "The diagram illustrates:",
    options: {
      A: "two-way lighting control",
      B: "single cell construction",
      C: "busbar distribution",
      D: "earth electrode testing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Two-way lighting control allows one lamp to be controlled from two different switch positions. It is commonly used in staircases, corridors, and rooms with two entrances.",
      examTrapAlert: "Two switches controlling one lamp usually means two-way switching.",
      whyOtherOptionsAreWrong: {
        B: "The diagram is not a cell.",
        C: "It is not busbar distribution.",
        D: "It is not an earth test diagram."
      }
    }
  },
  {
    id: 6,
    topic: "Two-Way Lighting Circuit",
    diagram: "assets/solarpv/obj/test5/Howa2-WayLightSwitchWorks.png",
    question: "In the two-way lighting circuit, the red conductor shown to the lamp is most likely carrying:",
    options: {
      A: "switched live supply",
      B: "earth only",
      C: "neutral only before switching",
      D: "mechanical force"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The switched live conductor carries supply to the lamp when the switching path is completed.",
      examTrapAlert: "The live conductor is switched; the neutral normally returns from the load.",
      whyOtherOptionsAreWrong: {
        B: "Earth is for safety and is not the lamp operating live conductor.",
        C: "Neutral is not normally switched in simple lighting control.",
        D: "Mechanical force is not an electrical conductor function."
      }
    }
  },
  {
    id: 7,
    topic: "Lamp Holder",
    diagram: "assets/solarpv/obj/test5/lamp_holder.png",
    question: "The diagram shown represents a:",
    options: {
      A: "lamp holder",
      B: "socket outlet",
      C: "fuse carrier",
      D: "slip ring"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A lamp holder is an accessory used to hold a lamp and provide electrical contact to it.",
      examTrapAlert: "Lamp holder holds a lamp; socket outlet receives a plug.",
      whyOtherOptionsAreWrong: {
        B: "Socket outlet is used for plugs.",
        C: "Fuse carrier holds a fuse.",
        D: "Slip ring is a rotating machine component."
      }
    }
  },
  {
    id: 8,
    topic: "Lamp Holder",
    diagram: "assets/solarpv/obj/test5/lamp_holder.png",
    question: "The main function of the accessory shown is to:",
    options: {
      A: "hold and connect a lamp to the circuit",
      B: "measure current",
      C: "protect against overload",
      D: "join conduit pipes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A lamp holder mechanically supports a lamp and electrically connects its terminals to the lighting circuit.",
      examTrapAlert: "Lighting accessories support or connect lamps; protective devices interrupt faults.",
      whyOtherOptionsAreWrong: {
        B: "Current is measured by an ammeter.",
        C: "Fuses or circuit breakers protect against overload.",
        D: "Couplers join conduit pipes."
      }
    }
  },
  {
    id: 9,
    topic: "Multimeter",
    diagram: "assets/solarpv/obj/test5/obj_multimeter_front.png",
    question: "The instrument shown is a:",
    options: {
      A: "multimeter",
      B: "photometer",
      C: "hydrometer",
      D: "tachometer"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A multimeter is used to measure electrical quantities such as voltage, current, and resistance depending on the selected range.",
      examTrapAlert: "COM, VΩ, A terminals indicate a multimeter.",
      whyOtherOptionsAreWrong: {
        B: "A photometer measures light intensity.",
        C: "A hydrometer measures specific gravity.",
        D: "A tachometer measures speed."
      }
    }
  },
  {
    id: 10,
    topic: "Multimeter",
    diagram: "assets/solarpv/obj/test5/obj_multimeter_front.png",
    question: "The selector knob on the instrument is used to:",
    options: {
      A: "choose the quantity and range to be measured",
      B: "store electrical energy",
      C: "increase cable size",
      D: "hold a lamp"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The selector knob sets the meter to the required function and range, such as voltage, resistance, or current.",
      examTrapAlert: "Wrong range selection may damage the meter or give wrong readings.",
      whyOtherOptionsAreWrong: {
        B: "The meter does not store energy as its main function.",
        C: "Cable size cannot be increased with a knob.",
        D: "A lamp holder holds a lamp."
      }
    }
  },
  {
    id: 11,
    topic: "Multimeter Safety",
    diagram: "assets/solarpv/obj/test5/obj_multimeter_front.png",
    question: "Before using the instrument to measure resistance, the circuit should be:",
    options: {
      A: "switched off",
      B: "connected to high voltage",
      C: "short-circuited with wet hands",
      D: "loaded beyond rating"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Resistance measurement should be done on a de-energized circuit to avoid meter damage and electric shock.",
      examTrapAlert: "Never measure resistance on a live circuit.",
      whyOtherOptionsAreWrong: {
        B: "High voltage can damage the meter.",
        C: "Wet hands increase shock risk.",
        D: "Overloading is unsafe."
      }
    }
  },
  {
    id: 12,
    topic: "Tee Joint",
    diagram: "assets/solarpv/obj/test5/obj_tee_joint.png",
    question: "The diagram shown represents a:",
    options: {
      A: "tee joint",
      B: "socket outlet",
      C: "busbar",
      D: "lamp holder"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A tee joint is used where one conductor branches from another conductor at an angle, forming a T-shape.",
      examTrapAlert: "A branch conductor joined to a straight conductor suggests a tee joint.",
      whyOtherOptionsAreWrong: {
        B: "A socket outlet receives plugs.",
        C: "A busbar distributes heavy current.",
        D: "A lamp holder carries a lamp."
      }
    }
  },
  {
    id: 13,
    topic: "Tee Joint Preparation",
    diagram: "assets/solarpv/obj/test5/obj_tee_joint.png",
    question: "Before making the joint shown, the conductors should be:",
    options: {
      A: "stripped and cleaned",
      B: "painted with oil",
      C: "covered with cement",
      D: "left insulated at the joint point"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Cable joint preparation requires stripping the insulation, cleaning the bare conductors, arranging the strands properly, and winding them firmly.",
      examTrapAlert: "Clean bare metal gives good electrical contact.",
      whyOtherOptionsAreWrong: {
        B: "Oil prevents good contact.",
        C: "Cement is not a jointing material.",
        D: "Insulation must be removed only at the joint point."
      }
    }
  },
  {
    id: 14,
    topic: "Cable Jointing",
    diagram: "assets/solarpv/obj/test5/obj_tee_joint.png",
    question: "One method of joining electrical conductors is:",
    options: {
      A: "soldering",
      B: "painting",
      C: "freezing",
      D: "watering"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical conductors may be joined mechanically, by soldering, or by welding. Soldering uses heat and solder to produce a sound joint.",
      examTrapAlert: "WAEC accepts mechanical, soldering, and welding methods.",
      whyOtherOptionsAreWrong: {
        B: "Painting does not join conductors electrically.",
        C: "Freezing is not a conductor jointing method.",
        D: "Watering causes electrical danger."
      }
    }
  },
  {
    id: 15,
    topic: "Open Conduit",
    diagram: "assets/solarpv/obj/test5/Open-Conduit.png",
    question: "The symbol shown represents:",
    options: {
      A: "open conduit",
      B: "lamp holder",
      C: "earth terminal",
      D: "commutator"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Open conduit indicates a conduit route shown openly on a drawing or installation symbol sheet.",
      examTrapAlert: "Conduit symbols are part of wiring drawing interpretation.",
      whyOtherOptionsAreWrong: {
        B: "A lamp holder has a different symbol.",
        C: "Earth terminal uses the ground symbol.",
        D: "A commutator is a machine component."
      }
    }
  },
  {
    id: 16,
    topic: "Open Conduit",
    diagram: "assets/solarpv/obj/test5/Open-Conduit.png",
    question: "Conduit wiring is used mainly to:",
    options: {
      A: "protect and route cables",
      B: "generate voltage",
      C: "store charge",
      D: "measure speed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit wiring provides a protected route for conductors and improves safety, orderliness, and mechanical protection.",
      examTrapAlert: "Conduit is a cable protection/routing system.",
      whyOtherOptionsAreWrong: {
        B: "Generators generate voltage.",
        C: "Capacitors or cells store energy/charge.",
        D: "Tachometers measure speed."
      }
    }
  },
  {
    id: 17,
    topic: "Overhead Line",
    diagram: "assets/solarpv/obj/test5/overhead.png",
    question: "The diagram shown represents an:",
    options: {
      A: "overhead line",
      B: "underground cable",
      C: "lamp holder",
      D: "fuse link"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An overhead line carries electrical conductors above ground level, usually supported by poles, cross-arms, and insulators.",
      examTrapAlert: "A line drawn above a vertical support suggests overhead distribution.",
      whyOtherOptionsAreWrong: {
        B: "Underground cable is buried below ground.",
        C: "A lamp holder is a lighting accessory.",
        D: "A fuse link is a protective element."
      }
    }
  },
  {
    id: 18,
    topic: "Overhead Installation",
    diagram: "assets/solarpv/obj/test5/overhead.png",
    question: "In overhead installation, stay wires are used to:",
    options: {
      A: "support and stabilize poles",
      B: "measure current",
      C: "store electricity",
      D: "replace insulators"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Stay wires support poles and prevent them from leaning due to conductor tension or wind forces.",
      examTrapAlert: "Stay wires give mechanical support, not electrical measurement.",
      whyOtherOptionsAreWrong: {
        B: "Current is measured with an ammeter or tong tester.",
        C: "Stay wires do not store electricity.",
        D: "Insulators are still required."
      }
    }
  },
  {
    id: 19,
    topic: "Push Button Symbols",
    diagram: "assets/solarpv/obj/test5/Pushbutton.png",
    question: "From the diagram, which labelled option most clearly represents a push button symbol?",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A push button is a momentary control device. In symbol questions, the small marked contact point inside or associated with the switch body indicates a push-button type control.",
      examTrapAlert: "Study the symbol carefully; WAEC often asks candidates to identify symbols from a group.",
      whyOtherOptionsAreWrong: {
        B: "This does not show the most complete push-button indication.",
        C: "This appears more like another accessory symbol.",
        D: "This appears as a different switch/accessory form."
      }
    }
  },
  {
    id: 20,
    topic: "Push Button",
    diagram: "assets/solarpv/obj/test5/Pushbutton.png",
    question: "A push button is commonly used where:",
    options: {
      A: "momentary control is required",
      B: "continuous cable insulation is removed",
      C: "earth continuity is broken",
      D: "a circuit is left unprotected"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A push button is used for momentary control, such as bell circuits, control circuits, and some starter control operations.",
      examTrapAlert: "Push buttons operate only while pressed, unless part of a latching control circuit.",
      whyOtherOptionsAreWrong: {
        B: "Removing insulation continuously is unsafe.",
        C: "Earth continuity must not be broken.",
        D: "Circuits must be protected."
      }
    }
  },
  {
    id: 21,
    topic: "Slip Ring",
    diagram: "assets/solarpv/obj/test5/slip_ring.png",
    question: "The diagram shown represents a:",
    options: {
      A: "slip ring",
      B: "socket outlet",
      C: "lamp holder",
      D: "conduit elbow"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A slip ring is a circular conducting ring used in some electrical machines to transfer current between stationary and rotating parts.",
      examTrapAlert: "Slip rings are associated with rotating machines.",
      whyOtherOptionsAreWrong: {
        B: "Socket outlets connect appliances.",
        C: "Lamp holders carry lamps.",
        D: "Conduit elbows change conduit direction."
      }
    }
  },
  {
    id: 22,
    topic: "Slip Ring",
    diagram: "assets/solarpv/obj/test5/slip_ring.png",
    question: "Slip rings are commonly associated with:",
    options: {
      A: "rotating electrical machines",
      B: "wall painting",
      C: "water piping only",
      D: "wooden furniture"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Slip rings are used where electrical connection must be maintained with a rotating winding or rotor circuit.",
      examTrapAlert: "Slip ring questions normally belong to machines, not building accessories.",
      whyOtherOptionsAreWrong: {
        B: "Painting is unrelated.",
        C: "Water piping is not an electrical machine system.",
        D: "Furniture is irrelevant."
      }
    }
  },
  {
    id: 23,
    topic: "Symbols",
    diagram: "assets/solarpv/obj/test5/symbols.png",
    question: "In the diagram, symbol D represents:",
    options: {
      A: "earth",
      B: "lamp",
      C: "socket",
      D: "motor"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The earth symbol is shown by a vertical line connected to horizontal lines of decreasing length. It represents connection to earth for safety.",
      examTrapAlert: "Earth symbol is one of the most repeated BS symbols.",
      whyOtherOptionsAreWrong: {
        B: "Lamp symbols are different.",
        C: "Socket symbols are different.",
        D: "Motor symbols are different."
      }
    }
  },
  {
    id: 24,
    topic: "Symbols",
    diagram: "assets/solarpv/obj/test5/symbols.png",
    question: "In electrical drawings, symbols are used mainly to:",
    options: {
      A: "represent devices clearly and uniformly",
      B: "increase current automatically",
      C: "replace installation testing",
      D: "remove regulations"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical symbols provide a standard method of representing devices, accessories, and connections in circuit and layout drawings.",
      examTrapAlert: "Symbols improve interpretation; they do not replace safety tests.",
      whyOtherOptionsAreWrong: {
        B: "Symbols do not increase current.",
        C: "Testing is still required.",
        D: "Regulations are still required."
      }
    }
  },
  {
    id: 25,
    topic: "Two-Way Two-Gang Switch",
    diagram: "assets/solarpv/obj/test5/Two-Way-Two-Gang Switch.png",
    question: "The symbol shown represents a:",
    options: {
      A: "two-way two-gang switch",
      B: "single socket outlet",
      C: "earth terminal",
      D: "lamp holder"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A two-way two-gang switch contains two two-way switches on one plate. It can be used to control two lighting circuits from two positions.",
      examTrapAlert: "Two-way is the switching method; two-gang is the number of switch units.",
      whyOtherOptionsAreWrong: {
        B: "A socket outlet symbol is different.",
        C: "Earth terminal has grounding lines.",
        D: "Lamp holder has a different symbol."
      }
    }
  },
  {
    id: 26,
    topic: "Two-Way Switching",
    diagram: "assets/solarpv/obj/test5/Two-Way-Two-Gang Switch.png",
    question: "The word 'two-gang' means:",
    options: {
      A: "two switch units on one plate",
      B: "two earth rods",
      C: "two batteries in series",
      D: "two overhead poles"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Gang refers to the number of switch mechanisms mounted together on one switch plate.",
      examTrapAlert: "Gang = number of switch units; way = switching arrangement.",
      whyOtherOptionsAreWrong: {
        B: "Earth rods are not switch gangs.",
        C: "Battery arrangement is not switch gang.",
        D: "Overhead poles are unrelated."
      }
    }
  },
  {
    id: 27,
    topic: "Domestic Installation Tests",
    question: "Which of the following is a domestic installation test?",
    options: {
      A: "Polarity test",
      B: "Paint test",
      C: "Taste test",
      D: "Colour preference test"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Domestic installation tests include polarity test, insulation resistance test, earthing test, and continuity test.",
      examTrapAlert: "WAEC repeatedly lists polarity, insulation resistance, earthing, and continuity.",
      whyOtherOptionsAreWrong: {
        B: "Paint test is not an electrical test.",
        C: "Taste test is dangerous and irrelevant.",
        D: "Colour preference is not an installation test."
      }
    }
  },
  {
    id: 28,
    topic: "Electrical Testing",
    question: "One importance of testing a domestic installation is to:",
    options: {
      A: "certify that it is safe for use",
      B: "remove all protective devices",
      C: "increase faults",
      D: "avoid earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Testing confirms proper installation, detects faults, helps correct faults, prevents hazards, and certifies that the installation is safe for use.",
      examTrapAlert: "Testing is done before an installation is approved for use.",
      whyOtherOptionsAreWrong: {
        B: "Protective devices must remain.",
        C: "Testing detects faults; it does not increase them.",
        D: "Earthing is essential."
      }
    }
  },
  {
    id: 29,
    topic: "Testing Instruments",
    question: "Which instrument is used for measuring insulation resistance?",
    options: {
      A: "Megger",
      B: "Hammer",
      C: "Bending spring",
      D: "Screwdriver only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A megger or insulation resistance tester measures insulation resistance between conductors and between conductors and earth.",
      examTrapAlert: "Megger is the direct WAEC answer for insulation resistance.",
      whyOtherOptionsAreWrong: {
        B: "Hammer is a striking tool.",
        C: "Bending spring bends conduit.",
        D: "A screwdriver drives screws."
      }
    }
  },
  {
    id: 30,
    topic: "Megger Precaution",
    question: "Before using a megger on an installation, all loads should be:",
    options: {
      A: "removed",
      B: "overloaded",
      C: "soaked with water",
      D: "short-circuited deliberately"
    },
    correctAnswer: "A",
    solution: {
      classNote: "All loads should be removed before using a megger to prevent damage to equipment and to obtain reliable insulation resistance readings.",
      examTrapAlert: "Megger generates test voltage; remove loads first.",
      whyOtherOptionsAreWrong: {
        B: "Overloading is dangerous.",
        C: "Water increases shock risk.",
        D: "Deliberate short-circuiting can damage equipment."
      }
    }
  },
  {
    id: 31,
    topic: "Megger Reading",
    question: "The acceptable minimum insulation resistance between conductor and earth may be:",
    options: {
      A: "0.5 MΩ",
      B: "0.5 Ω",
      C: "5 A",
      D: "230 V"
    },
    correctAnswer: "A",
    solution: {
      classNote: "WAEC marking guidance accepts 0.5 MΩ between conductor and general mass of earth, and 1 MΩ between conductors in the cited practical context.",
      examTrapAlert: "Watch the unit: MΩ is megaohm, not ohm, ampere, or volt.",
      whyOtherOptionsAreWrong: {
        B: "0.5 Ω is too low and wrong unit scale.",
        C: "Ampere measures current.",
        D: "Volt measures potential difference."
      }
    }
  },
  {
    id: 32,
    topic: "AC Motors",
    question: "An a.c. motor is a device that converts:",
    options: {
      A: "electrical energy to mechanical energy",
      B: "mechanical energy to electrical energy",
      C: "chemical energy to light only",
      D: "sound energy to heat only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An electric motor converts electrical energy into mechanical energy. Examples include ceiling fans, pumps, blenders, grinders, and drilling machines.",
      examTrapAlert: "Motor uses electricity to produce motion; generator uses motion to produce electricity.",
      whyOtherOptionsAreWrong: {
        B: "That describes a generator.",
        C: "That is not the function of an AC motor.",
        D: "That is not motor operation."
      }
    }
  },
  {
    id: 33,
    topic: "Motor and Generator",
    question: "A generator converts:",
    options: {
      A: "mechanical energy to electrical energy",
      B: "electrical energy to mechanical energy",
      C: "light energy to sound only",
      D: "chemical energy to heat only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A generator converts mechanical energy into electrical energy by electromagnetic induction.",
      examTrapAlert: "Generator generates electricity; motor produces motion.",
      whyOtherOptionsAreWrong: {
        B: "That describes a motor.",
        C: "This is not generator action.",
        D: "This is not generator action."
      }
    }
  },
  {
    id: 34,
    topic: "AC Motor Application",
    question: "Which of the following is an application of an a.c. motor?",
    options: {
      A: "Ceiling fan",
      B: "Dry cell only",
      C: "Fuse wire",
      D: "Conduit box"
    },
    correctAnswer: "A",
    solution: {
      classNote: "AC motors are used in ceiling fans, water pumps, blenders, grinders, compressors, drilling machines, and many domestic or industrial machines.",
      examTrapAlert: "Choose a device that produces rotary motion from AC supply.",
      whyOtherOptionsAreWrong: {
        B: "A dry cell stores chemical energy.",
        C: "Fuse wire is a protective element.",
        D: "Conduit box is a wiring accessory."
      }
    }
  },
  {
    id: 35,
    topic: "AC and DC Motors",
    question: "One difference between a.c. and d.c. motors is that:",
    options: {
      A: "AC motors are powered by AC supply while DC motors are powered by DC supply",
      B: "AC motors never rotate",
      C: "DC motors require no conductors",
      D: "AC motors are always lamps"
    },
    correctAnswer: "A",
    solution: {
      classNote: "AC motors operate from alternating current supply, while DC motors operate from direct current supply. Their construction and speed control methods may differ.",
      examTrapAlert: "Supply type is the simplest difference.",
      whyOtherOptionsAreWrong: {
        B: "AC motors rotate.",
        C: "DC motors require conductors and windings.",
        D: "Motors are not lamps."
      }
    }
  },
  {
    id: 36,
    topic: "Protective Devices",
    question: "One reason for installing protective devices is to:",
    options: {
      A: "prevent electric shock and excess current damage",
      B: "increase faults",
      C: "remove all earthing",
      D: "make testing unnecessary"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Protective devices help prevent electric shock, earth leakage danger, excess current, fire damage, and equipment damage.",
      examTrapAlert: "Protection devices are installed for safety and fault limitation.",
      whyOtherOptionsAreWrong: {
        B: "They reduce the effect of faults.",
        C: "Earthing remains necessary.",
        D: "Testing remains necessary."
      }
    }
  },
  {
    id: 37,
    topic: "Corrective Maintenance",
    question: "Corrective maintenance is carried out:",
    options: {
      A: "after breakdown to restore equipment",
      B: "before any fault appears only",
      C: "to damage equipment",
      D: "to avoid repairs forever"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Corrective maintenance is repair work done after equipment, a machine, or an installation has broken down or become faulty.",
      examTrapAlert: "Corrective maintenance corrects an existing fault.",
      whyOtherOptionsAreWrong: {
        B: "Before-failure work is preventive maintenance.",
        C: "Maintenance should not damage equipment.",
        D: "Repairs cannot be avoided forever."
      }
    }
  },
  {
    id: 38,
    topic: "Corrective Maintenance",
    question: "One disadvantage of corrective maintenance is that it:",
    options: {
      A: "causes stoppage or delay of work",
      B: "prevents all breakdowns before they occur",
      C: "always costs nothing",
      D: "removes need for spare parts"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Corrective maintenance may lead to work stoppage, delay, higher cost, and time loss because action is taken after failure.",
      examTrapAlert: "Corrective maintenance is usually less convenient than preventive maintenance.",
      whyOtherOptionsAreWrong: {
        B: "Preventive maintenance reduces breakdowns before they occur.",
        C: "Corrective maintenance can be costly.",
        D: "Spare parts may be needed."
      }
    }
  },
  {
    id: 39,
    topic: "Machine Enclosures",
    question: "Which of the following is a type of electrical machine enclosure?",
    options: {
      A: "Totally enclosed",
      B: "Lamp enclosed only",
      C: "Socket enclosed only",
      D: "Battery painted"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Types of electrical machine enclosures include open type, drip-proof, screen protected, pipe ventilated, flameproof, and totally enclosed.",
      examTrapAlert: "Machine enclosure names describe protection against environment and hazards.",
      whyOtherOptionsAreWrong: {
        B: "This is not a standard machine enclosure type.",
        C: "This is not a standard machine enclosure type.",
        D: "This is not an enclosure type."
      }
    }
  },
  {
    id: 40,
    topic: "Conduit Fittings",
    question: "A conduit coupler is used to:",
    options: {
      A: "join two lengths of conduit",
      B: "measure illumination",
      C: "store electrical charge",
      D: "hold a lamp"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A coupler joins two conduit pipes together in a conduit installation.",
      examTrapAlert: "Coupler = coupling/joining pipes.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures illumination.",
        C: "Capacitors or cells store charge/energy.",
        D: "Lamp holder holds a lamp."
      }
    }
  },
  {
    id: 41,
    topic: "Conduit Fittings",
    question: "A locknut in conduit installation is used to:",
    options: {
      A: "hold conduit firmly in place",
      B: "test insulation resistance",
      C: "measure speed",
      D: "generate voltage"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A locknut secures conduit fittings firmly, especially where conduit enters boxes or enclosures.",
      examTrapAlert: "Locknut means locking or securing a fitting.",
      whyOtherOptionsAreWrong: {
        B: "Megger tests insulation resistance.",
        C: "Tachometer measures speed.",
        D: "Generators generate voltage."
      }
    }
  },
  {
    id: 42,
    topic: "Conduit Regulations",
    question: "Which is a requirement for conduit installations?",
    options: {
      A: "All joints must be mechanically sound and electrically continuous",
      B: "All burrs must be left inside conduit",
      C: "Conduit must never be earthed",
      D: "Cable insulation must be damaged before drawing in"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Good conduit practice requires mechanically sound joints, electrical continuity, removal of burrs, protection against corrosion, proper earthing, and correct space factor.",
      examTrapAlert: "Conduit systems must protect cables, not damage them.",
      whyOtherOptionsAreWrong: {
        B: "Burrs must be removed to prevent abrasion.",
        C: "Metal conduit systems must be efficiently earthed.",
        D: "Cable insulation must not be damaged."
      }
    }
  },
  {
    id: 43,
    topic: "Three-Phase Machine Nameplate",
    question: "Which information may be found on a three-phase machine nameplate?",
    options: {
      A: "Rated voltage and frequency",
      B: "Wall paint colour",
      C: "Classroom size",
      D: "Number of chairs"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A machine nameplate may show rated voltage, frequency, horsepower or power rating, speed, current rating, winding connection, and manufacturer details.",
      examTrapAlert: "Nameplate information helps correct installation and operation.",
      whyOtherOptionsAreWrong: {
        B: "Paint colour is irrelevant.",
        C: "Classroom size is irrelevant.",
        D: "Chair count is irrelevant."
      }
    }
  },
  {
    id: 44,
    topic: "DC Machine",
    question: "Which of the following is a constructional feature of a d.c. machine?",
    options: {
      A: "Commutator",
      B: "Socket outlet",
      C: "PVC conduit only",
      D: "Ceiling rose"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Constructional features of a DC machine include yoke, pole shoe, field winding, armature winding, commutator, interpole, and brush gear.",
      examTrapAlert: "Commutator is strongly associated with DC machines.",
      whyOtherOptionsAreWrong: {
        B: "Socket outlet is a building accessory.",
        C: "PVC conduit is wiring material.",
        D: "Ceiling rose is a lighting accessory."
      }
    }
  },
  {
    id: 45,
    topic: "AC Generator Fault",
    question: "One possible cause of low voltage output of an a.c. generator is:",
    options: {
      A: "low speed",
      B: "perfect AVR",
      C: "correct residual magnetism",
      D: "rated speed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Low voltage output of an AC generator may be caused by low speed, faulty AVR, or loss of residual magnetism.",
      examTrapAlert: "Low voltage output points to low speed, excitation, or AVR problems.",
      whyOtherOptionsAreWrong: {
        B: "A perfect AVR supports correct voltage.",
        C: "Correct residual magnetism helps excitation.",
        D: "Rated speed supports correct voltage."
      }
    }
  },
  {
    id: 46,
    topic: "Three-Phase Induction Motor Starting",
    question: "Which of the following is a method of starting a three-phase induction motor?",
    options: {
      A: "Star-delta starter",
      B: "Lamp holder starter",
      C: "Socket cap starter",
      D: "Cable clip starter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Methods of starting three-phase induction motors include direct-on-line, star-delta, auto-transformer, rotor resistance, stator resistance, and primary resistance starting.",
      examTrapAlert: "Choose a recognized starter method.",
      whyOtherOptionsAreWrong: {
        B: "Lamp holder is not a starter.",
        C: "Socket cap is not a starter.",
        D: "Cable clip is not a starter."
      }
    }
  },
  {
    id: 47,
    topic: "First Aid",
    question: "First aid is best defined as:",
    options: {
      A: "temporary treatment given before professional medical help arrives",
      B: "permanent surgery carried out in the workshop",
      C: "repair of electrical tools",
      D: "replacement of fuses"
    },
    correctAnswer: "A",
    solution: {
      classNote: "First aid is the temporary treatment given to an accident victim before the person is taken to hospital or before professional medical help arrives.",
      examTrapAlert: "First aid is immediate temporary help, not final medical treatment.",
      whyOtherOptionsAreWrong: {
        B: "Surgery is not first aid.",
        C: "Tool repair is maintenance.",
        D: "Fuse replacement is electrical repair."
      }
    }
  },
  {
    id: 48,
    topic: "Artificial Respiration",
    question: "One step in administering artificial respiration is to:",
    options: {
      A: "clear the victim’s mouth and tilt the head backward",
      B: "pour water into the victim’s mouth",
      C: "leave the victim unattended",
      D: "continue electrical work immediately"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Artificial respiration involves clearing the mouth, positioning the victim properly, tilting the head backward, blowing air into the lungs until the chest expands, and repeating until breathing resumes or help arrives.",
      examTrapAlert: "Airway must be cleared before rescue breathing.",
      whyOtherOptionsAreWrong: {
        B: "Pouring water is dangerous.",
        C: "The victim must not be abandoned.",
        D: "Electrical work must stop during rescue."
      }
    }
  },
  {
    id: 49,
    topic: "Cable Construction",
    question: "A cable may be defined as:",
    options: {
      A: "one or more insulated conductors arranged for electrical use",
      B: "a wooden support only",
      C: "a lamp without holder",
      D: "a fuse without conductor"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A cable is a length of insulated conductor or two or more conductors, each provided with insulation, arranged for carrying electrical current.",
      examTrapAlert: "Cable = insulated conductor arrangement.",
      whyOtherOptionsAreWrong: {
        B: "Wooden support is not a cable.",
        C: "A lamp is not a cable.",
        D: "A fuse is a protective device."
      }
    }
  },
  {
    id: 50,
    topic: "Cable Current Rating",
    question: "As ambient temperature increases, the current rating of a cable generally:",
    options: {
      A: "decreases",
      B: "increases without limit",
      C: "becomes zero always",
      D: "changes into voltage rating"
    },
    correctAnswer: "A",
    solution: {
      classNote: "As ambient temperature increases, cable resistance and heating effect increase, so the safe current-carrying capacity or current rating decreases.",
      examTrapAlert: "Higher temperature reduces safe current capacity.",
      whyOtherOptionsAreWrong: {
        B: "Current rating does not increase without limit.",
        C: "It does not always become zero.",
        D: "Current rating does not become voltage rating."
      }
    }
  }
],
},

     objectiveTests: {
  test1: [
    {
      id: 1,
      topic: "Workshop Safety",
      question: "Which of the following is a major hazard in an electrical workshop?",
      options: {
        A: "Proper insulation",
        B: "Loose live conductors",
        C: "Correct tool storage",
        D: "Dry rubber mat"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Loose live conductors expose workers to electric shock, short circuit, and fire hazards. Good workshop practice requires insulation, proper routing, and secure termination of conductors before any circuit is energized.",
        examTrapAlert: "Do not choose safe conditions as hazards.",
        whyOtherOptionsAreWrong: {
          A: "Proper insulation reduces danger.",
          C: "Correct tool storage improves safety.",
          D: "A dry rubber mat helps protect the user."
        }
      }
    },
    {
      id: 2,
      topic: "First Aid",
      question: "The first action when a person is in contact with a live conductor is to:",
      options: {
        A: "Pour water on the victim",
        B: "Pull the person directly",
        C: "Break the contact with the live source safely",
        D: "Start wiring repairs immediately"
      },
      correctAnswer: "C",
      solution: {
        classNote: "In electrical accidents, the first priority is to safely separate the casualty from the live source using a non-conducting material or by isolating the supply. First aid follows only after the victim is free from danger.",
        examTrapAlert: "Never touch a casualty directly while current is still flowing.",
        whyOtherOptionsAreWrong: {
          A: "Water increases electrical danger.",
          B: "Direct pulling may electrocute the rescuer.",
          D: "Repairs come after rescue and safety."
        }
      }
    },
    {
      id: 3,
      topic: "Regulations",
      question: "Statutory regulations in electrical installation are mainly intended to:",
      options: {
        A: "Increase cable prices",
        B: "Reduce the use of tools",
        C: "Promote safe and standard practice",
        D: "Replace all practical work"
      },
      correctAnswer: "C",
      solution: {
        classNote: "Electrical regulations guide safe installation, operation, and maintenance. They protect life, property, and equipment by prescribing acceptable standards for materials, testing, and working methods.",
        examTrapAlert: "Regulations are for safety and standardization, not commercial control.",
        whyOtherOptionsAreWrong: {
          A: "Price control is not the purpose here.",
          B: "Tools are still required for installation.",
          D: "Practical work remains essential."
        }
      }
    },
    {
      id: 4,
      topic: "Tools",
      question: "Which of the following is a measuring tool?",
      options: {
        A: "Hammer",
        B: "Screwdriver",
        C: "Measuring tape",
        D: "Cold chisel"
      },
      correctAnswer: "C",
      solution: {
        classNote: "A measuring tape is used to obtain dimensions before cutting, marking, or positioning installation materials. Accurate measurement ensures proper fitting, alignment, and compliance with layout requirements.",
        examTrapAlert: "Differentiate measuring tools from striking and fastening tools.",
        whyOtherOptionsAreWrong: {
          A: "Hammer is a striking tool.",
          B: "Screwdriver is a driving tool.",
          D: "Cold chisel is a cutting tool."
        }
      }
    },
    {
      id: 5,
      topic: "Accessories",
      question: "A conduit end box is commonly used:",
      options: {
        A: "At the end of a conduit run",
        B: "For underground cable jointing",
        C: "As a fuse carrier",
        D: "As a battery container"
      },
      correctAnswer: "A",
      solution: {
        classNote: "An end box is fitted at the end of a conduit line or near a lamp holder base to terminate the run neatly and allow proper connection of accessories.",
        examTrapAlert: "Do not confuse conduit fittings with protective devices.",
        whyOtherOptionsAreWrong: {
          B: "Underground cable jointing uses different materials.",
          C: "It does not serve as a fuse carrier.",
          D: "It is not used as a battery container."
        }
      }
    },
    {
      id: 6,
      topic: "Electrical Cells",
      question: "An electrical cell converts:",
      options: {
        A: "Mechanical energy to heat energy",
        B: "Chemical energy to electrical energy",
        C: "Electrical energy to magnetic energy only",
        D: "Heat energy to sound energy"
      },
      correctAnswer: "B",
      solution: {
        classNote: "An electrical cell produces electricity through chemical action. This principle forms the basis of primary and secondary cells used in small electrical and electronic applications.",
        examTrapAlert: "Remember the source of the energy change in a cell.",
        whyOtherOptionsAreWrong: {
          A: "That is not the function of a cell.",
          C: "This is incomplete and incorrect.",
          D: "That is not the operation of a cell."
        }
      }
    },
    {
      id: 7,
      topic: "Electrical Cells",
      question: "The two main types of electrical cells are:",
      options: {
        A: "Wet and dry transformers",
        B: "Primary and secondary cells",
        C: "Series and parallel cells",
        D: "Live and neutral cells"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Electrical cells are broadly classified as primary cells, which are usually non-rechargeable, and secondary cells, which can be recharged and reused.",
        examTrapAlert: "Do not confuse connection methods with cell types.",
        whyOtherOptionsAreWrong: {
          A: "Transformers are not cells.",
          C: "Series and parallel describe arrangement, not type.",
          D: "Live and neutral are supply conductors, not cells."
        }
      }
    },
    {
      id: 8,
      topic: "Wiring Practice",
      question: "A point of light controlled from two independent positions uses:",
      options: {
        A: "Two one-way switches",
        B: "Two 2-way switches",
        C: "One bell push",
        D: "One socket outlet"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Control of one lamp from two positions is achieved with two 2-way switches connected with strappers. This is common in corridors, staircases, and large rooms with multiple access points.",
        examTrapAlert: "The phrase 'two independent positions' points directly to 2-way switching.",
        whyOtherOptionsAreWrong: {
          A: "One-way switches cannot provide two-position control in this setup.",
          C: "A bell push is not a changeover switch.",
          D: "A socket outlet is not a switch."
        }
      }
    },
    {
      id: 9,
      topic: "Conduit Wiring",
      question: "A 4-way conduit box is used to:",
      options: {
        A: "Measure cable size",
        B: "Branch conduit in four directions",
        C: "Test insulation resistance",
        D: "Control motor speed"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A 4-way conduit box allows conduits to meet and branch in four directions. It is used where a central junction is needed in surface or conduit wiring layouts.",
        examTrapAlert: "The number in the name often indicates the number of directions.",
        whyOtherOptionsAreWrong: {
          A: "Cable size is not measured with a conduit box.",
          C: "Testing is done with instruments such as a megger.",
          D: "Motor speed control uses starters or controllers."
        }
      }
    },
    {
      id: 10,
      topic: "Installation Testing",
      question: "The instrument used for insulation resistance test is the:",
      options: {
        A: "Voltmeter",
        B: "Megger",
        C: "Ammeter",
        D: "Tong tester only"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A megger, also called an insulation resistance tester, is used to determine whether insulation between conductors and earth is sufficiently high for safe installation.",
        examTrapAlert: "Do not use ordinary measuring instruments for insulation testing questions.",
        whyOtherOptionsAreWrong: {
          A: "A voltmeter measures potential difference.",
          C: "An ammeter measures current.",
          D: "A tong tester measures current without circuit break, not insulation resistance."
        }
      }
    },
    {
      id: 11,
      topic: "Installation Testing",
      question: "The minimum acceptable insulation resistance for a domestic installation is:",
      options: {
        A: "0.05 MΩ",
        B: "0.5 MΩ",
        C: "5 Ω",
        D: "50 Ω"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A minimum insulation resistance value of 0.5 megohm indicates that leakage through insulation is low enough for safe operation in the tested installation.",
        examTrapAlert: "Pay attention to units. Megohm is not the same as ohm.",
        whyOtherOptionsAreWrong: {
          A: "Too low for acceptable insulation standard here.",
          C: "Wrong unit and far too low.",
          D: "Wrong unit and insufficient for this test."
        }
      }
    },
    {
      id: 12,
      topic: "Ring Circuit",
      question: "The protective fuse rating commonly used for a domestic ring circuit is:",
      options: {
        A: "5A",
        B: "13A",
        C: "15A",
        D: "30A"
      },
      correctAnswer: "D",
      solution: {
        classNote: "A domestic ring circuit is commonly protected by a 30A fuse. This allows the ring to supply multiple socket outlets under the required installation rules.",
        examTrapAlert: "Do not confuse socket plug fuse rating with ring main protection.",
        whyOtherOptionsAreWrong: {
          A: "Too low for a ring circuit.",
          B: "13A is typical for fused plugs, not the ring circuit itself.",
          C: "15A is not the standard answer here."
        }
      }
    },
    {
      id: 13,
      topic: "Ring Circuit",
      question: "A standard cable size for a domestic ring circuit is:",
      options: {
        A: "1.0 mm²",
        B: "1.5 mm²",
        C: "2.5 mm²",
        D: "6.0 mm²"
      },
      correctAnswer: "C",
      solution: {
        classNote: "A 2.5 mm² conductor is the standard cable size associated with the domestic ring circuit in the examined context. It provides suitable current-carrying capacity for socket outlet circuits.",
        examTrapAlert: "Choose the standard socket-circuit conductor size, not lighting-circuit size.",
        whyOtherOptionsAreWrong: {
          A: "Usually too small for this purpose.",
          B: "Common in some lighting and lighter circuits, not this ring circuit answer.",
          D: "Much larger than required here."
        }
      }
    },
    {
      id: 14,
      topic: "Ring Circuit",
      question: "The number of spurs on a domestic ring circuit may be determined by:",
      options: {
        A: "Multiplying total sockets by three",
        B: "Dividing total sockets by three",
        C: "Adding 30A to total sockets",
        D: "Using the floor height"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A common guide in this question set is that the number of spurs is obtained by dividing the total number of sockets by three. This limits overloading and maintains order in the installation.",
        examTrapAlert: "This is a direct rule-based question.",
        whyOtherOptionsAreWrong: {
          A: "This gives an unrealistic result.",
          C: "Fuse rating is unrelated to this calculation.",
          D: "Floor height has no role here."
        }
      }
    },
    {
      id: 15,
      topic: "Fluorescent Lamp Faults",
      question: "If the fuse blows when a fluorescent lamp is switched on, the most likely cause is:",
      options: {
        A: "Low voltage only",
        B: "Short circuit in the wiring",
        C: "Aging lamp only",
        D: "Bright illumination"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A fuse blows when current rises excessively, often because of a short circuit. In a fluorescent lamp circuit, wiring faults are a common cause of this condition.",
        examTrapAlert: "A blown fuse points to excessive current, not normal low-voltage operation.",
        whyOtherOptionsAreWrong: {
          A: "Low voltage does not normally blow the fuse directly.",
          C: "An aging lamp alone usually causes poor starting, not immediate fuse blowing.",
          D: "Brightness is not a fault."
        }
      }
    },
    {
      id: 16,
      topic: "Fluorescent Lamp Faults",
      question: "A fluorescent lamp that appears dead when switched on may be due to:",
      options: {
        A: "No power supply",
        B: "Correct power factor",
        C: "Perfect starter",
        D: "Properly working choke"
      },
      correctAnswer: "A",
      solution: {
        classNote: "A dead fluorescent lamp may result from no supply, broken tube electrode, faulty starter, dead tube, or faulty choke. All these interrupt normal starting and operation.",
        examTrapAlert: "Choose an actual fault condition, not a normal operating condition.",
        whyOtherOptionsAreWrong: {
          B: "Correct power factor is not a fault.",
          C: "A perfect starter would not cause deadness.",
          D: "A properly working choke supports operation."
        }
      }
    },
    {
      id: 17,
      topic: "Fluorescent Lamp Faults",
      question: "Repeated effort to start in a fluorescent lamp circuit may be caused by:",
      options: {
        A: "Aging lamp or faulty starter",
        B: "Correct wiring",
        C: "Strong sunlight",
        D: "Proper earthing only"
      },
      correctAnswer: "A",
      solution: {
        classNote: "Aging lamps, faulty starters, and low voltage commonly cause repeated unsuccessful starting attempts in fluorescent lamp circuits.",
        examTrapAlert: "This symptom points to starting difficulty, not installation neatness.",
        whyOtherOptionsAreWrong: {
          B: "Correct wiring should support normal operation.",
          C: "Sunlight is not the cause here.",
          D: "Proper earthing alone does not produce this symptom."
        }
      }
    },
    {
      id: 18,
      topic: "Lighting",
      question: "A capacitor connected in a fluorescent lamp circuit is used mainly to:",
      options: {
        A: "Increase cable length",
        B: "Improve power factor",
        C: "Change socket size",
        D: "Reduce conductor area"
      },
      correctAnswer: "B",
      solution: {
        classNote: "The capacitor in a fluorescent fitting helps improve power factor and may also suppress radio-frequency interference. This makes lamp operation more efficient and reduces undesirable effects on the supply.",
        examTrapAlert: "Do not confuse electrical correction components with mechanical fittings.",
        whyOtherOptionsAreWrong: {
          A: "A capacitor does not extend cable length.",
          C: "It does not alter socket size.",
          D: "It does not reduce conductor cross-section."
        }
      }
    },
    {
      id: 19,
      topic: "Lighting",
      question: "One reason sodium lamps are suitable for street lighting is that they:",
      options: {
        A: "Strike immediately on switching on",
        B: "Require no supply voltage",
        C: "Remove all shadows completely",
        D: "Work without fittings"
      },
      correctAnswer: "A",
      solution: {
        classNote: "Sodium lamps are valued for street lighting because they strike quickly, are bright, and provide warning effect. These characteristics make them useful in public outdoor illumination.",
        examTrapAlert: "Choose the operating advantage, not an impossible condition.",
        whyOtherOptionsAreWrong: {
          B: "All lamps require supply.",
          C: "No lamp removes every shadow completely.",
          D: "Every lamp needs suitable fittings."
        }
      }
    },
    {
      id: 20,
      topic: "D.C. Machines",
      question: "The rotating part of a d.c. machine is the:",
      options: {
        A: "Pole shoe",
        B: "Field winding",
        C: "Armature",
        D: "Main frame"
      },
      correctAnswer: "C",
      solution: {
        classNote: "The armature is the rotating member of a d.c. machine. It carries conductors in which e.m.f. is induced or current flows during motor or generator action.",
        examTrapAlert: "Do not confuse stationary field parts with rotating members.",
        whyOtherOptionsAreWrong: {
          A: "Pole shoe is part of the magnetic structure.",
          B: "Field winding is generally stationary.",
          C: "Correct.",
          D: "Main frame is stationary."
        }
      }
    },
    {
      id: 21,
      topic: "D.C. Machines",
      question: "Back e.m.f. in a d.c. motor is generated in the:",
      options: {
        A: "Armature conductors",
        B: "Switch contacts only",
        C: "Fuse body",
        D: "Cable clips"
      },
      correctAnswer: "A",
      solution: {
        classNote: "Back e.m.f. is generated in the armature conductors as they rotate and cut the magnetic flux of the field system. It opposes the applied voltage and limits current during normal running.",
        examTrapAlert: "Back e.m.f. is an electromagnetic effect inside the motor, not in accessories.",
        whyOtherOptionsAreWrong: {
          B: "Switch contacts do not generate the motor’s back e.m.f.",
          C: "Fuse bodies do not generate e.m.f.",
          D: "Cable clips are only support fittings."
        }
      }
    },
    {
      id: 22,
      topic: "D.C. Motors",
      question: "One method of controlling the speed of a d.c. motor is by varying the:",
      options: {
        A: "Colour of the casing",
        B: "Armature voltage",
        C: "Room temperature only",
        D: "Fuse shape"
      },
      correctAnswer: "B",
      solution: {
        classNote: "The speed of a d.c. motor can be controlled by varying the armature voltage or by varying the field strength. These methods change the operating conditions of the machine.",
        examTrapAlert: "Speed control is electrical, not decorative or environmental in this context.",
        whyOtherOptionsAreWrong: {
          A: "Casing colour has no effect.",
          C: "Room temperature is not a standard control method.",
          D: "Fuse shape does not control speed."
        }
      }
    },
    {
      id: 23,
      topic: "D.C. Motors",
      question: "The starting current of a d.c. motor is dangerous because it can:",
      options: {
        A: "Become too large and damage the motor",
        B: "Increase lamp brightness only",
        C: "Reduce magnetic flux to zero always",
        D: "Polish the commutator automatically"
      },
      correctAnswer: "A",
      solution: {
        classNote: "At start, the back e.m.f. is zero, so armature current can become very large if not limited. This excessive current may overheat windings and damage the motor.",
        examTrapAlert: "Starting current questions often test your understanding of zero back e.m.f. at start.",
        whyOtherOptionsAreWrong: {
          B: "This is unrelated.",
          C: "Flux does not automatically become zero.",
          D: "Commutator polishing is not the result."
        }
      }
    },
    {
      id: 24,
      topic: "D.C. Motors",
      question: "A common method of reducing starting current in a d.c. motor is to use a:",
      options: {
        A: "Bell set",
        B: "Rheostat in series with the armature",
        C: "Ceiling rose",
        D: "Cable saddle"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A rheostat or variable resistor placed in series with the armature limits the starting current until the motor gains speed and develops back e.m.f.",
        examTrapAlert: "Choose a current-limiting device, not a fitting.",
        whyOtherOptionsAreWrong: {
          A: "Bell set is not for motor starting control.",
          C: "Ceiling rose is a lighting accessory.",
          D: "Cable saddle is a support item."
        }
      }
    },
    {
      id: 25,
      topic: "Induction Motors",
      question: "Which pair correctly represents the two main types of induction motors?",
      options: {
        A: "Series and shunt",
        B: "Squirrel-cage and wound-rotor",
        C: "Primary and secondary",
        D: "Step-up and step-down"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Induction motors are commonly grouped into squirrel-cage and wound-rotor types. Their rotor constructions differ, which affects starting methods and control possibilities.",
        examTrapAlert: "Do not confuse motor classes with cell types or transformer types.",
        whyOtherOptionsAreWrong: {
          A: "These are more associated with d.c. machines.",
          C: "These describe cells.",
          D: "These are transformer terms."
        }
      }
    },
    {
      id: 26,
      topic: "Induction Motors",
      question: "A common starter used for induction motors is the:",
      options: {
        A: "Star-delta starter",
        B: "Torch light",
        C: "Lamp holder",
        D: "Conduit bush"
      },
      correctAnswer: "A",
      solution: {
        classNote: "The star-delta starter is widely used for starting suitable induction motors. It reduces starting current by initially connecting the motor in star before changing to delta.",
        examTrapAlert: "Identify actual motor-control equipment.",
        whyOtherOptionsAreWrong: {
          B: "Torch light is not a starter.",
          C: "Lamp holder is a lighting accessory.",
          D: "Conduit bush is only a fitting."
        }
      }
    },
    {
      id: 27,
      topic: "Induction Motors",
      question: "The best method of reversing a three-phase induction motor is by:",
      options: {
        A: "Changing the lamp",
        B: "Interchanging any two supply lines",
        C: "Disconnecting the earth only",
        D: "Doubling the fuse"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Reversing a three-phase induction motor is achieved by interchanging any two of the three supply lines, which reverses the rotating magnetic field and hence rotor direction.",
        examTrapAlert: "Direction reversal is done electrically at the supply phase sequence.",
        whyOtherOptionsAreWrong: {
          A: "Lamp replacement has no effect on motor direction.",
          C: "Earth is for safety, not direction control.",
          D: "Fuse size does not reverse rotation."
        }
      }
    },
    {
      id: 28,
      topic: "Machine Installation",
      question: "A motor installed in a sawmill should preferably have a:",
      options: {
        A: "Totally enclosed enclosure",
        B: "Completely open frame",
        C: "Decorative cover only",
        D: "Paper enclosure"
      },
      correctAnswer: "A",
      solution: {
        classNote: "A sawmill environment contains dust and particles. A totally enclosed motor protects the rotating parts and internal components from such contaminants.",
        examTrapAlert: "Match the enclosure to the working environment.",
        whyOtherOptionsAreWrong: {
          B: "An open frame admits dust easily.",
          C: "Decoration offers no protection.",
          D: "Paper is unsuitable and unsafe."
        }
      }
    },
    {
      id: 29,
      topic: "Machine Installation",
      question: "One advantage of flexible conduit for motor connection is that it:",
      options: {
        A: "Absorbs vibration",
        B: "Increases supply voltage",
        C: "Acts as a battery charger",
        D: "Replaces a starter"
      },
      correctAnswer: "A",
      solution: {
        classNote: "Flexible conduit helps absorb vibration and reduce transmission of mechanical movement to connected conductors. It also makes motor alignment easier during installation.",
        examTrapAlert: "Think of mechanical flexibility, not electrical transformation.",
        whyOtherOptionsAreWrong: {
          B: "Conduit does not raise voltage.",
          C: "It does not charge batteries.",
          D: "It is not a starter."
        }
      }
    },
    {
      id: 30,
      topic: "Testing",
      question: "The test used to detect earth fault on a neutral conductor is the:",
      options: {
        A: "Insulation resistance test",
        B: "Illumination test",
        C: "Pressure test",
        D: "Colour test"
      },
      correctAnswer: "A",
      solution: {
        classNote: "Earth faults on conductors can be detected by insulation resistance testing. This checks whether insulation between conductors and earth is adequately high.",
        examTrapAlert: "Fault-to-earth questions commonly point to insulation resistance test.",
        whyOtherOptionsAreWrong: {
          B: "Illumination test relates to lighting level.",
          C: "Pressure test is not the relevant electrical test here.",
          D: "Colour test is not a standard electrical fault test."
        }
      }
    },
    {
      id: 31,
      topic: "Entrepreneurship",
      question: "Which of the following is a source of fund for small business take-off?",
      options: {
        A: "Personal savings",
        B: "Broken insulator",
        C: "Used cable clip",
        D: "Lamp soot"
      },
      correctAnswer: "A",
      solution: {
        classNote: "Personal savings are a common source of startup capital. An electrician or Solar PV installer may begin business using previously saved income or funds.",
        examTrapAlert: "A source of fund must be financial, not a material object.",
        whyOtherOptionsAreWrong: {
          B: "Not a source of finance.",
          C: "Not a source of startup capital.",
          D: "Not a financial resource."
        }
      }
    },
    {
      id: 32,
      topic: "Entrepreneurship",
      question: "Trade credit means obtaining goods:",
      options: {
        A: "By theft",
        B: "On credit for payment later",
        C: "Only with cash immediately",
        D: "Only through government grant"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Trade credit allows a business owner to purchase goods from suppliers and pay later. It is useful for small businesses that need materials before immediate full payment is possible.",
        examTrapAlert: "Trade credit is about delayed payment, not free supply.",
        whyOtherOptionsAreWrong: {
          A: "Illegal and not a business funding method.",
          C: "This contradicts the idea of credit.",
          D: "Trade credit comes from suppliers, not government grants."
        }
      }
    },
    {
      id: 33,
      topic: "Supply Sequence",
      question: "The correct sequence from supply authority to final sub-circuit begins with the:",
      options: {
        A: "Service cable",
        B: "Wall bracket",
        C: "Fan regulator",
        D: "Socket front plate"
      },
      correctAnswer: "A",
      solution: {
        classNote: "The supply sequence starts from the service cable, then proceeds through service fuse, meter, consumer’s main switch, main distribution fuse board, and finally the final sub-circuit.",
        examTrapAlert: "Learn the order as a flow from source to load.",
        whyOtherOptionsAreWrong: {
          B: "This is a load accessory, not the starting point.",
          C: "A fan regulator is downstream equipment.",
          D: "A socket front plate is not the supply entry point."
        }
      }
    },
    {
      id: 34,
      topic: "Surface Wiring",
      question: "A layout key in installation drawing is mainly used to:",
      options: {
        A: "Hide the symbols",
        B: "Explain the symbols used on the drawing",
        C: "Increase current flow",
        D: "Replace testing"
      },
      correctAnswer: "B",
      solution: {
        classNote: "A key identifies and explains the meaning of symbols used in the electrical drawing. It helps the installer interpret fittings, accessories, and control points correctly.",
        examTrapAlert: "The key is for interpretation, not circuit operation.",
        whyOtherOptionsAreWrong: {
          A: "It reveals, not hides, symbols.",
          C: "It does not affect current flow.",
          D: "Testing is still required after installation."
        }
      }
    },
    {
      id: 35,
      topic: "Lighting Layout",
      question: "In the given living-room layout, the quantity of two-way switches is:",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      correctAnswer: "B",
      solution: {
        classNote: "The layout key and quantity list indicate two two-way switches. These support independent control arrangement from two positions in the room.",
        examTrapAlert: "Read layout counts carefully; do not guess from appearance alone.",
        whyOtherOptionsAreWrong: {
          A: "Insufficient for the specified arrangement.",
          C: "Greater than the listed quantity.",
          D: "Greater than the listed quantity."
        }
      }
    },
    {
      id: 36,
      topic: "Lighting Layout",
      question: "The quantity of wall brackets in the living-room layout is:",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "5"
      },
      correctAnswer: "B",
      solution: {
        classNote: "The quantity list for the layout shows two wall brackets. Accurate counting of fittings is important in installation planning, costing, and material preparation.",
        examTrapAlert: "These questions test drawing interpretation and counting.",
        whyOtherOptionsAreWrong: {
          A: "Too few compared with the layout record.",
          C: "Too many.",
          D: "Far too many."
        }
      }
    },
    {
      id: 37,
      topic: "Lighting Layout",
      question: "The quantity of 13A sockets in the living-room layout is:",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "6"
      },
      correctAnswer: "B",
      solution: {
        classNote: "The layout quantity schedule gives two 13A sockets. Socket identification is important in layout reading and wiring estimation.",
        examTrapAlert: "Do not confuse the 13A sockets with the single 15A socket.",
        whyOtherOptionsAreWrong: {
          A: "Too few.",
          C: "Too many.",
          D: "Far too many."
        }
      }
    },
    {
      id: 38,
      topic: "Installation Heights",
      question: "The maximum height for switches from finished floor level is commonly given as:",
      options: {
        A: "150 mm",
        B: "500 mm",
        C: "1200 mm - 1500 mm",
        D: "3000 mm"
      },
      correctAnswer: "C",
      solution: {
        classNote: "The acceptable mounting height for switches in this examined context is given as 1200 mm to 1500 mm above finished floor level. This supports safe and convenient operation.",
        examTrapAlert: "Different accessories have different mounting heights.",
        whyOtherOptionsAreWrong: {
          A: "Far too low.",
          B: "This range relates more to socket mounting.",
          D: "Far too high for normal wall switches."
        }
      }
    },
    {
      id: 39,
      topic: "Installation Heights",
      question: "The mounting height for 13A socket outlets is commonly:",
      options: {
        A: "45 mm - 50 mm",
        B: "450 mm - 500 mm",
        C: "1200 mm - 1500 mm",
        D: "2000 mm - 2500 mm"
      },
      correctAnswer: "B",
      solution: {
        classNote: "The usual height given here for 13A socket outlets is 450 mm to 500 mm above finished floor level. Correct mounting height improves convenience and standard compliance.",
        examTrapAlert: "Do not confuse socket height with switch height.",
        whyOtherOptionsAreWrong: {
          A: "Ten times too low.",
          C: "This is the switch range in this context.",
          D: "Too high for socket outlets."
        }
      }
    },
    {
      id: 40,
      topic: "Protective Devices",
      question: "One major reason for installing protective devices is to:",
      options: {
        A: "Increase conductor resistance",
        B: "Prevent electric shock and fire damage",
        C: "Reduce number of fittings",
        D: "Replace maintenance completely"
      },
      correctAnswer: "B",
      solution: {
        classNote: "Protective devices such as fuses and circuit breakers are installed to protect persons and property. They help prevent electric shock, earth leakage effects, overcurrent damage, and fire outbreak.",
        examTrapAlert: "Protection questions focus on safety and continuity, not convenience.",
        whyOtherOptionsAreWrong: {
          A: "Increasing resistance is not the aim.",
          C: "Protective devices do not reduce fittings.",
          D: "Maintenance is still necessary."
        }
      }
    }
   ],
  test2: [
  {
    id: 1,
    topic: "Workshop Safety",
    question: "Which of the following is the safest practice before repairing an electrical circuit?",
    options: {
      A: "Switch off and isolate the supply",
      B: "Touch the conductor to confirm current",
      C: "Pour water on the circuit",
      D: "Remove the earth wire"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Before repair work begins, the supply must be switched off and isolated. This prevents electric shock, short circuit, burns, and accidental energizing of the circuit.",
      examTrapAlert: "Never work on a live circuit unless the work is specifically designed and controlled for live testing.",
      whyOtherOptionsAreWrong: {
        B: "Touching a conductor is dangerous.",
        C: "Water increases electrical risk.",
        D: "The earth wire is a safety conductor and must not be removed."
      }
    }
  },
  {
    id: 2,
    topic: "Workshop Safety",
    question: "Which item protects a worker from electric shock while standing on the floor?",
    options: {
      A: "Wet cloth",
      B: "Dry rubber mat",
      C: "Bare copper wire",
      D: "Metal stool"
    },
    correctAnswer: "B",
    solution: {
      classNote: "A dry rubber mat is an insulating safety material. It reduces the chance of current passing through the worker’s body to earth.",
      examTrapAlert: "Dry insulating materials protect; wet and metallic materials increase danger.",
      whyOtherOptionsAreWrong: {
        A: "Wet cloth can conduct electricity.",
        C: "Bare copper is a conductor.",
        D: "Metal can conduct current."
      }
    }
  },
  {
    id: 3,
    topic: "First Aid",
    question: "After safely removing an electric shock victim from contact with supply, the next important action is to:",
    options: {
      A: "check breathing and give first aid",
      B: "restart the machine immediately",
      C: "hide the faulty cable",
      D: "touch the live conductor again"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Once the victim is free from the live source, check breathing, call for help, and administer appropriate first aid such as artificial respiration if needed.",
      examTrapAlert: "Rescue comes before repair.",
      whyOtherOptionsAreWrong: {
        B: "The machine must not be restarted until safe.",
        C: "Faults must be reported and corrected.",
        D: "Touching live conductors is dangerous."
      }
    }
  },
  {
    id: 4,
    topic: "Electrical Regulations",
    question: "One purpose of statutory electrical regulations is to:",
    options: {
      A: "ensure safe installation practice",
      B: "encourage poor workmanship",
      C: "avoid inspection",
      D: "increase accidents"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical regulations guide safe design, installation, testing, maintenance, and use of electrical systems. They protect life, property, and equipment.",
      examTrapAlert: "Regulations are linked to safety, standard practice, and compliance.",
      whyOtherOptionsAreWrong: {
        B: "Regulations prevent poor workmanship.",
        C: "Inspection is encouraged by regulations.",
        D: "Regulations reduce accidents."
      }
    }
  },
  {
    id: 5,
    topic: "Tools",
    question: "Which tool is used for checking vertical or horizontal alignment during installation?",
    options: {
      A: "Spirit level",
      B: "Megger",
      C: "Hydrometer",
      D: "Ammeter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A spirit level is used to check whether fittings, conduit runs, trunking, and mounting boards are level or vertical.",
      examTrapAlert: "Alignment tools are different from electrical measuring instruments.",
      whyOtherOptionsAreWrong: {
        B: "A megger tests insulation resistance.",
        C: "A hydrometer measures specific gravity.",
        D: "An ammeter measures current."
      }
    }
  },
  {
    id: 6,
    topic: "Tools",
    question: "Which tool is used for cutting conduit or metal trunking?",
    options: {
      A: "Hacksaw",
      B: "Photometer",
      C: "Bell set",
      D: "Voltmeter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A hacksaw is a cutting tool used for cutting conduit pipes, trunking, and other metallic or plastic installation materials.",
      examTrapAlert: "Cutting tools are not testing instruments.",
      whyOtherOptionsAreWrong: {
        B: "A photometer measures illumination.",
        C: "A bell set checks continuity.",
        D: "A voltmeter measures voltage."
      }
    }
  },
  {
    id: 7,
    topic: "Cables",
    question: "The main reason for insulating a cable conductor is to:",
    options: {
      A: "prevent leakage of current and electric shock",
      B: "increase bare contact",
      C: "make the conductor rust faster",
      D: "reduce mechanical strength"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Insulation prevents unwanted current flow, protects users from shock, and prevents short circuit between conductors.",
      examTrapAlert: "Insulation is a safety barrier.",
      whyOtherOptionsAreWrong: {
        B: "Bare contact is dangerous.",
        C: "Insulation protects, not rusts.",
        D: "It does not aim to reduce strength."
      }
    }
  },
  {
    id: 8,
    topic: "Cables",
    question: "Which of the following is commonly used as a conductor in electrical cables?",
    options: {
      A: "Copper",
      B: "Wood",
      C: "Glass",
      D: "Rubber"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Copper is widely used as an electrical conductor because it has low resistance, high conductivity, ductility, and good mechanical properties.",
      examTrapAlert: "Rubber and PVC are usually insulators, not conductors.",
      whyOtherOptionsAreWrong: {
        B: "Wood is generally an insulator.",
        C: "Glass is an insulator.",
        D: "Rubber is used for insulation."
      }
    }
  },
  {
    id: 9,
    topic: "Electrical Accessories",
    question: "Which accessory is used to connect a portable appliance to a socket outlet?",
    options: {
      A: "Plug",
      B: "Conduit saddle",
      C: "Ceiling rose",
      D: "Joint box"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A plug is attached to a flexible cord and inserted into a socket outlet to connect a portable appliance to the electrical supply.",
      examTrapAlert: "Plug and socket work together for appliance connection.",
      whyOtherOptionsAreWrong: {
        B: "A conduit saddle supports conduit.",
        C: "A ceiling rose is used in lighting connection.",
        D: "A joint box encloses cable joints."
      }
    }
  },
  {
    id: 10,
    topic: "Electrical Accessories",
    question: "A ceiling rose is mainly used for:",
    options: {
      A: "connecting a pendant lamp point",
      B: "testing insulation",
      C: "bending conduit",
      D: "measuring speed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A ceiling rose provides terminals for connecting a pendant lamp or lighting point to the lighting circuit.",
      examTrapAlert: "Ceiling rose belongs to lighting accessories.",
      whyOtherOptionsAreWrong: {
        B: "A megger tests insulation.",
        C: "A bending spring bends conduit.",
        D: "A tachometer measures speed."
      }
    }
  },
  {
    id: 11,
    topic: "Electrical Cells",
    question: "A secondary cell is different from a primary cell because it:",
    options: {
      A: "can be recharged",
      B: "cannot supply current",
      C: "has no electrolyte",
      D: "is always made of wood"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A secondary cell can be recharged and used repeatedly. A primary cell is usually not rechargeable after discharge.",
      examTrapAlert: "Secondary = rechargeable.",
      whyOtherOptionsAreWrong: {
        B: "A secondary cell can supply current.",
        C: "Cells normally require electrolyte or electrochemical medium.",
        D: "Cells are not made of wood."
      }
    }
  },
  {
    id: 12,
    topic: "Electrical Cells",
    question: "The electrolyte in a simple cell helps to:",
    options: {
      A: "permit chemical action for current production",
      B: "hold a lamp to the ceiling",
      C: "bend conduit pipe",
      D: "measure voltage directly"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The electrolyte participates in the chemical reaction that enables the cell to produce electrical energy.",
      examTrapAlert: "Cell questions usually involve chemical energy changing to electrical energy.",
      whyOtherOptionsAreWrong: {
        B: "That is the role of a lighting accessory.",
        C: "That is conduit work.",
        D: "A voltmeter measures voltage."
      }
    }
  },
  {
    id: 13,
    topic: "One-Way Switch",
    diagram: "assets/solarpv/obj/test2/One-Way-One-Gang-Switch.PNG",
    question: "The symbol shown represents a switch used to control a lamp from:",
    options: {
      A: "one position",
      B: "two positions",
      C: "three positions",
      D: "no position"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A one-way one-gang switch controls one lighting point from one position. It is common in simple rooms with one entrance control point.",
      examTrapAlert: "One-way means one control point.",
      whyOtherOptionsAreWrong: {
        B: "Two-position control requires two-way switching.",
        C: "Three-position control requires a more advanced arrangement.",
        D: "A switch must have a control function."
      }
    }
  },
  {
    id: 14,
    topic: "One-Way Switch",
    diagram: "assets/solarpv/obj/test2/One-Way-One-Gang-Switch.PNG",
    question: "The device represented in the diagram is classified as:",
    options: {
      A: "an electrical accessory",
      B: "a measuring instrument",
      C: "a power generator",
      D: "a storage cell"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A switch is an electrical accessory used to make or break a circuit manually.",
      examTrapAlert: "Switches are accessories, not instruments.",
      whyOtherOptionsAreWrong: {
        B: "It does not measure electrical quantities.",
        C: "It does not generate power.",
        D: "It does not store energy."
      }
    }
  },
  {
    id: 15,
    topic: "Conduit Wiring",
    question: "Which material is used to support conduit on a wall?",
    options: {
      A: "Conduit saddle",
      B: "Hydrometer",
      C: "Lamp tube",
      D: "Fuse wire"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A conduit saddle is used to hold conduit firmly to a wall or surface during conduit installation.",
      examTrapAlert: "Saddles support conduit mechanically.",
      whyOtherOptionsAreWrong: {
        B: "A hydrometer measures specific gravity.",
        C: "A lamp tube is a lighting component.",
        D: "Fuse wire is for protection."
      }
    }
  },
  {
    id: 16,
    topic: "Conduit Wiring",
    question: "Which rule is correct for conduit installation?",
    options: {
      A: "Remove burrs after cutting conduit",
      B: "Leave sharp edges inside conduit",
      C: "Damage cable insulation before drawing",
      D: "Use wet hands to pull live cables"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Burrs must be removed after cutting conduit to prevent abrasion and damage to cable insulation during cable drawing.",
      examTrapAlert: "Sharp conduit edges damage insulation.",
      whyOtherOptionsAreWrong: {
        B: "Sharp edges are dangerous.",
        C: "Cable insulation must be protected.",
        D: "Live cable handling with wet hands is dangerous."
      }
    }
  },
  {
    id: 17,
    topic: "Inspection Elbow",
    diagram: "assets/solarpv/obj/test2/obj_inspection_elbow.png",
    question: "The conduit fitting shown is used where a conduit run:",
    options: {
      A: "changes direction and needs inspection access",
      B: "stores current",
      C: "acts as a lamp",
      D: "measures voltage"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An inspection elbow allows a conduit route to turn while still providing access for drawing in, inspecting, or maintaining cables.",
      examTrapAlert: "Inspection fittings provide access.",
      whyOtherOptionsAreWrong: {
        B: "Conduit does not store current.",
        C: "It is not a lamp.",
        D: "Voltage is measured with a voltmeter."
      }
    }
  },
  {
    id: 18,
    topic: "Inspection Elbow",
    diagram: "assets/solarpv/obj/test2/obj_inspection_elbow.png",
    question: "The removable cover on an inspection elbow helps during:",
    options: {
      A: "cable drawing and fault inspection",
      B: "battery charging only",
      C: "room painting only",
      D: "lamp brightness control"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The cover gives access to cables at the bend. This makes cable drawing easier and supports inspection or maintenance work.",
      examTrapAlert: "Access is the key function of inspection fittings.",
      whyOtherOptionsAreWrong: {
        B: "Battery charging is unrelated.",
        C: "Painting is unrelated.",
        D: "Lamp brightness is controlled by electrical control devices."
      }
    }
  },
  {
    id: 19,
    topic: "Illumination",
    question: "Illumination is best defined as:",
    options: {
      A: "the amount of light falling on a surface",
      B: "the resistance of a cable",
      C: "the speed of a motor",
      D: "the weight of a battery"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Illumination refers to the quantity of light falling on a surface. It is important in lighting design for rooms, workshops, and outdoor areas.",
      examTrapAlert: "Illumination relates to lighting level.",
      whyOtherOptionsAreWrong: {
        B: "Cable resistance is an electrical property.",
        C: "Motor speed is mechanical rotation rate.",
        D: "Battery weight is not illumination."
      }
    }
  },
  {
    id: 20,
    topic: "Illumination",
    question: "Which lamp type is commonly used for street lighting?",
    options: {
      A: "Sodium discharge lamp",
      B: "Torch dry cell",
      C: "Fuse link",
      D: "Ceiling rose"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sodium discharge lamps have been widely used for street lighting because of their brightness and suitability for outdoor illumination.",
      examTrapAlert: "Street lighting questions usually include sodium, mercury vapour, LED, or high-intensity discharge lamps.",
      whyOtherOptionsAreWrong: {
        B: "A dry cell is not a lamp type.",
        C: "A fuse link is protective.",
        D: "A ceiling rose is an accessory."
      }
    }
  },
  {
    id: 21,
    topic: "Soldering",
    question: "Flux is used in soldering mainly to:",
    options: {
      A: "clean the joint surface and assist solder flow",
      B: "increase cable insulation thickness",
      C: "measure current",
      D: "hold a lamp"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Flux removes oxide from metal surfaces and helps solder flow properly to produce a sound electrical joint.",
      examTrapAlert: "Flux improves soldering quality.",
      whyOtherOptionsAreWrong: {
        B: "Flux does not thicken insulation.",
        C: "Current is measured with an ammeter.",
        D: "A lamp holder holds a lamp."
      }
    }
  },
  {
    id: 22,
    topic: "Cable Jointing",
    question: "A good cable joint should have:",
    options: {
      A: "firm mechanical strength and good electrical continuity",
      B: "loose contact",
      C: "exposed live strands",
      D: "wet insulation"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A good joint must be mechanically strong, electrically continuous, properly insulated, and safe from overheating or accidental contact.",
      examTrapAlert: "Good joint = strong, continuous, insulated.",
      whyOtherOptionsAreWrong: {
        B: "Loose contact causes heating.",
        C: "Exposed live strands are dangerous.",
        D: "Wet insulation is unsafe."
      }
    }
  },
  {
    id: 23,
    topic: "Cable Jointing",
    question: "Which of the following is a type of electrical joint?",
    options: {
      A: "Married joint",
      B: "Paint joint",
      C: "Glass joint",
      D: "Water joint"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Recognized electrical joints include married joint, tee joint, Britannia joint, scarf joint, telescope joint, and straight-through joint.",
      examTrapAlert: "WAEC asks joint names directly.",
      whyOtherOptionsAreWrong: {
        B: "Paint joint is not an electrical joint.",
        C: "Glass joint is not a standard conductor joint.",
        D: "Water is dangerous in electrical joints."
      }
    }
  },
  {
    id: 24,
    topic: "Underground Cable",
    question: "Before laying underground cable, the trench should be:",
    options: {
      A: "properly prepared",
      B: "filled with sharp metal scraps",
      C: "left full of water",
      D: "ignored completely"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Proper trench preparation protects underground cable from mechanical damage and supports safe installation.",
      examTrapAlert: "Underground cable work needs preparation and protection.",
      whyOtherOptionsAreWrong: {
        B: "Sharp metal can damage cable.",
        C: "Water can create hazards.",
        D: "The trench must not be ignored."
      }
    }
  },
  {
    id: 25,
    topic: "Overhead Installation",
    question: "Insulators on overhead lines are used to:",
    options: {
      A: "support conductors and prevent leakage to the pole",
      B: "increase pole weight",
      C: "store current",
      D: "measure illumination"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Overhead line insulators support conductors and prevent current leakage from the conductor to the pole or support structure.",
      examTrapAlert: "Insulators prevent unwanted current flow.",
      whyOtherOptionsAreWrong: {
        B: "Increasing pole weight is not the purpose.",
        C: "Insulators do not store current.",
        D: "Illumination is measured by a photometer."
      }
    }
  },
  {
    id: 26,
    topic: "ELCB",
    diagram: "assets/solarpv/obj/test2/elcb.png",
    question: "The device shown is installed mainly to protect against:",
    options: {
      A: "earth leakage",
      B: "low room brightness",
      C: "poor wall colour",
      D: "short measuring tape"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An ELCB disconnects supply when leakage to earth is detected. This reduces shock risk and improves installation safety.",
      examTrapAlert: "ELCB = earth leakage protection.",
      whyOtherOptionsAreWrong: {
        B: "Brightness is a lighting issue.",
        C: "Wall colour is not an electrical fault.",
        D: "Tape length is unrelated."
      }
    }
  },
  {
    id: 27,
    topic: "ELCB",
    diagram: "assets/solarpv/obj/test2/elcb.png",
    question: "Which condition may cause an ELCB to trip?",
    options: {
      A: "Leakage current flowing to earth",
      B: "Correct insulation",
      C: "Proper earthing with no fault",
      D: "A clean switch plate"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An ELCB trips when leakage current flows to earth beyond the operating limit, indicating a dangerous fault condition.",
      examTrapAlert: "A trip usually suggests leakage or fault current.",
      whyOtherOptionsAreWrong: {
        B: "Correct insulation prevents leakage.",
        C: "Proper earthing alone should not trip without a fault.",
        D: "A clean plate is not a fault."
      }
    }
  },
  {
    id: 28,
    topic: "Installation Testing",
    question: "A continuity test is carried out to confirm that:",
    options: {
      A: "a conductor path is complete",
      B: "a lamp is brighter than the sun",
      C: "a cable is painted",
      D: "a room is well decorated"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Continuity testing checks whether an electrical path is complete from one point to another.",
      examTrapAlert: "Continuity means unbroken path.",
      whyOtherOptionsAreWrong: {
        B: "Brightness is not continuity.",
        C: "Painting is irrelevant.",
        D: "Decoration is irrelevant."
      }
    }
  },
  {
    id: 29,
    topic: "Installation Testing",
    question: "A polarity test ensures that:",
    options: {
      A: "switches and fuses are connected in the live conductor",
      B: "walls are painted correctly",
      C: "cables are longer than the room",
      D: "earth wires are removed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Polarity testing confirms correct connection of live and neutral conductors, especially that switches and fuses are placed in the live conductor.",
      examTrapAlert: "Polarity relates to correct live/neutral arrangement.",
      whyOtherOptionsAreWrong: {
        B: "Painting is not polarity.",
        C: "Cable length is not polarity.",
        D: "Earth conductors must not be removed."
      }
    }
  },
  {
    id: 30,
    topic: "AC Motor Diagram",
    diagram: "assets/solarpv/obj/test2/longitudinal-section-of-an-ac-motor.PNG",
    question: "The diagram shows a section of an AC motor. The outer casing or frame is used mainly to:",
    options: {
      A: "support and protect internal motor parts",
      B: "measure current",
      C: "act as a dry cell",
      D: "replace winding insulation"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The motor frame supports the stator, protects internal parts, and helps dissipate heat during operation.",
      examTrapAlert: "Motor frame is mechanical support and protection.",
      whyOtherOptionsAreWrong: {
        B: "Current is measured with an ammeter.",
        C: "A motor frame is not a cell.",
        D: "It does not replace insulation."
      }
    }
  },
  {
    id: 31,
    topic: "AC Motor Diagram",
    diagram: "assets/solarpv/obj/test2/longitudinal-section-of-an-ac-motor.PNG",
    question: "The shaft of an AC motor is used to:",
    options: {
      A: "deliver mechanical output",
      B: "store chemical energy",
      C: "measure resistance",
      D: "hold a fuse"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The shaft transmits mechanical power from the rotating part of the motor to the driven machine or load.",
      examTrapAlert: "Motor shaft delivers rotation.",
      whyOtherOptionsAreWrong: {
        B: "Cells store chemical energy.",
        C: "Ohmmeter measures resistance.",
        D: "Fuse carrier holds fuse."
      }
    }
  },
  {
    id: 32,
    topic: "AC Motors",
    question: "An AC motor converts:",
    options: {
      A: "electrical energy into mechanical energy",
      B: "mechanical energy into electrical energy",
      C: "chemical energy into light only",
      D: "heat energy into water"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An AC motor uses alternating current supply to produce mechanical rotation or motion.",
      examTrapAlert: "Motor = electrical to mechanical.",
      whyOtherOptionsAreWrong: {
        B: "That describes a generator.",
        C: "That does not describe a motor.",
        D: "This is incorrect."
      }
    }
  },
  {
    id: 33,
    topic: "DC Machines",
    question: "The commutator in a DC machine is associated with:",
    options: {
      A: "current reversal and connection to brushes",
      B: "holding a lamp",
      C: "supporting conduit",
      D: "measuring illumination"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The commutator works with brushes in a DC machine to maintain the required direction of current in the external circuit or armature action.",
      examTrapAlert: "Commutator and brushes are key DC machine parts.",
      whyOtherOptionsAreWrong: {
        B: "Lamp holder holds a lamp.",
        C: "Conduit saddles support conduit.",
        D: "Photometer measures illumination."
      }
    }
  },
  {
    id: 34,
    topic: "DC Generator Faults",
    question: "One cause of no voltage at the terminals of a DC generator is:",
    options: {
      A: "loss of residual magnetism",
      B: "correct brush contact",
      C: "rated speed",
      D: "clean commutator"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A DC generator may fail to generate voltage if residual magnetism is lost, if the field circuit is open, or if there is poor brush contact.",
      examTrapAlert: "No voltage means a generating condition has failed.",
      whyOtherOptionsAreWrong: {
        B: "Correct brush contact helps generation.",
        C: "Rated speed supports voltage generation.",
        D: "Clean commutator improves operation."
      }
    }
  },
  {
    id: 35,
    topic: "DC Generator Faults",
    question: "Sparking at the commutator may be caused by:",
    options: {
      A: "worn brushes",
      B: "perfect brush pressure",
      C: "clean commutator",
      D: "normal load only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Worn brushes, dirty commutator, high mica, loose brush spring, or overload can cause sparking at the commutator.",
      examTrapAlert: "Sparking points to brush, commutator, or overload fault.",
      whyOtherOptionsAreWrong: {
        B: "Correct pressure reduces sparking.",
        C: "Clean commutator supports good operation.",
        D: "Normal load should not cause sparking."
      }
    }
  },
  {
    id: 36,
    topic: "Machine Enclosure",
    question: "A totally enclosed motor is suitable in a dusty environment because it:",
    options: {
      A: "prevents dust entering the motor easily",
      B: "allows dust to fill the winding",
      C: "removes the need for maintenance forever",
      D: "works without ventilation consideration"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A totally enclosed enclosure protects internal parts from dust, particles, and environmental contamination.",
      examTrapAlert: "Choose enclosure according to environment.",
      whyOtherOptionsAreWrong: {
        B: "Dust entry is harmful.",
        C: "Maintenance is still required.",
        D: "Heat and ventilation must still be considered."
      }
    }
  },
  {
    id: 37,
    topic: "Motor Starter",
    question: "A starter is used with motors mainly to:",
    options: {
      A: "control starting current and starting operation",
      B: "paint the motor frame",
      C: "measure room light",
      D: "hold a lamp tube"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Motor starters help control starting current, protect the motor, and provide safe starting and stopping.",
      examTrapAlert: "Starter = safe motor starting and control.",
      whyOtherOptionsAreWrong: {
        B: "Painting is not starter function.",
        C: "Photometer measures light.",
        D: "Lamp holder holds lamp."
      }
    }
  },
  {
    id: 38,
    topic: "Living Room Layout",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "The layout diagram is used mainly to determine:",
    options: {
      A: "positions of electrical accessories in the building",
      B: "battery electrolyte strength",
      C: "motor winding resistance only",
      D: "weather condition"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A layout drawing shows where switches, lamps, sockets, fans, and other accessories should be installed.",
      examTrapAlert: "Layout = position and interpretation.",
      whyOtherOptionsAreWrong: {
        B: "Hydrometer checks electrolyte strength.",
        C: "Winding resistance needs an ohmmeter.",
        D: "Weather is unrelated."
      }
    }
  },
  {
    id: 39,
    topic: "Living Room Layout",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "In a layout drawing, a symbol key or legend helps to:",
    options: {
      A: "identify the meaning of symbols",
      B: "increase voltage",
      C: "reduce earthing",
      D: "make testing unnecessary"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A legend explains the symbols used in a drawing so that the installer can understand the required accessories and positions.",
      examTrapAlert: "Legend = symbol explanation.",
      whyOtherOptionsAreWrong: {
        B: "It does not affect voltage.",
        C: "Earthing must not be reduced.",
        D: "Testing is still required."
      }
    }
  },
  {
    id: 40,
    topic: "Living Room Layout",
    diagram: "assets/solarpv/obj/test2/obj_living_room_layout.png",
    question: "Correct interpretation of a building electrical layout helps to reduce:",
    options: {
      A: "wrong placement of fittings",
      B: "safe workmanship",
      C: "proper testing",
      D: "standard installation"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Correct layout interpretation prevents wrong placement of switches, sockets, lamps, distribution boards, and other accessories.",
      examTrapAlert: "The layout is a guide for accurate installation.",
      whyOtherOptionsAreWrong: {
        B: "Safe workmanship should increase, not reduce.",
        C: "Proper testing must not be reduced.",
        D: "Standard installation is desired."
      }
    }
  },
  {
    id: 41,
    topic: "Maintenance",
    question: "Preventive maintenance is done:",
    options: {
      A: "before breakdown occurs",
      B: "only after complete failure",
      C: "to destroy machines",
      D: "to remove all lubrication"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Preventive maintenance is routine work done to keep equipment serviceable and prevent sudden breakdown.",
      examTrapAlert: "Preventive = before failure.",
      whyOtherOptionsAreWrong: {
        B: "That is corrective maintenance.",
        C: "Maintenance preserves machines.",
        D: "Lubrication is part of maintenance."
      }
    }
  },
  {
    id: 42,
    topic: "Maintenance",
    question: "Corrective maintenance is carried out:",
    options: {
      A: "after a fault has occurred",
      B: "before installation begins only",
      C: "to remove protective devices",
      D: "to avoid repairs"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Corrective maintenance restores faulty or broken-down equipment to working condition.",
      examTrapAlert: "Corrective = correct existing fault.",
      whyOtherOptionsAreWrong: {
        B: "This does not define corrective maintenance.",
        C: "Protective devices must remain.",
        D: "Corrective maintenance is repair work."
      }
    }
  },
  {
    id: 43,
    topic: "Fault Diagnosis",
    question: "Abnormal noise in a motor may indicate:",
    options: {
      A: "a mechanical or bearing fault",
      B: "perfect operation always",
      C: "correct installation always",
      D: "good lubrication always"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Abnormal noise can indicate worn bearings, loose parts, misalignment, or other mechanical faults.",
      examTrapAlert: "Abnormal condition suggests fault.",
      whyOtherOptionsAreWrong: {
        B: "Abnormal noise is not perfect operation.",
        C: "It may show poor installation or wear.",
        D: "Good lubrication reduces noise."
      }
    }
  },
  {
    id: 44,
    topic: "Entrepreneurship",
    question: "A business proposal is useful because it:",
    options: {
      A: "presents the business idea and funding needs",
      B: "replaces technical skill",
      C: "serves as a fuse",
      D: "acts as a motor starter"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A business proposal explains the business idea, objectives, budget, expected resources, and funding needs.",
      examTrapAlert: "Proposal = planning and funding document.",
      whyOtherOptionsAreWrong: {
        B: "Technical skill is still needed.",
        C: "It is not a protective device.",
        D: "It is not motor-control equipment."
      }
    }
  },
  {
    id: 45,
    topic: "Entrepreneurship",
    question: "Which record helps a business owner track money received and paid out?",
    options: {
      A: "Cash book",
      B: "Conduit box",
      C: "Lamp holder",
      D: "Fuse carrier"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A cash book records cash inflow and outflow. It helps the owner monitor business finances.",
      examTrapAlert: "Business books are records, not electrical accessories.",
      whyOtherOptionsAreWrong: {
        B: "Conduit box is a wiring accessory.",
        C: "Lamp holder is a lighting accessory.",
        D: "Fuse carrier holds a fuse."
      }
    }
  },
  {
    id: 46,
    topic: "Solar PV Adaptation",
    question: "In a Solar PV installation, a fuse or circuit breaker is used to:",
    options: {
      A: "protect cables and equipment against fault current",
      B: "increase sunlight",
      C: "change panel colour",
      D: "store charge"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Protective devices in Solar PV systems protect conductors, controllers, inverters, batteries, and users from overcurrent and fault conditions.",
      examTrapAlert: "PV protection follows the same safety logic as electrical installation.",
      whyOtherOptionsAreWrong: {
        B: "Sunlight cannot be increased by a fuse.",
        C: "Panel colour is irrelevant.",
        D: "Batteries store charge."
      }
    }
  },
  {
    id: 47,
    topic: "Solar PV Adaptation",
    question: "A charge controller in a Solar PV system is used mainly to:",
    options: {
      A: "regulate battery charging",
      B: "serve as a wall switch only",
      C: "replace all cables",
      D: "measure room length"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A charge controller regulates charging from solar panels to the battery. It helps prevent overcharging and improves battery life.",
      examTrapAlert: "Controller controls charging, not room measurement.",
      whyOtherOptionsAreWrong: {
        B: "It is not merely a wall switch.",
        C: "Cables are still required.",
        D: "Length is measured with tape."
      }
    }
  },
  {
    id: 48,
    topic: "Solar PV Adaptation",
    question: "Proper cable sizing in Solar PV installation helps to reduce:",
    options: {
      A: "voltage drop and overheating",
      B: "sunlight exposure",
      C: "panel efficiency to zero",
      D: "battery usefulness"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Correct cable size reduces voltage drop, overheating, power loss, and fire risk in Solar PV and electrical installations.",
      examTrapAlert: "Cable size affects current-carrying capacity and voltage drop.",
      whyOtherOptionsAreWrong: {
        B: "Cable size does not reduce sunlight.",
        C: "Correct sizing improves performance.",
        D: "It supports battery usefulness."
      }
    }
  },
  {
    id: 49,
    topic: "Solar PV Maintenance",
    question: "Dust on solar panels should be removed because it can:",
    options: {
      A: "reduce light reaching the panel surface",
      B: "increase panel output always",
      C: "replace the inverter",
      D: "charge the battery directly"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Dust reduces the amount of sunlight reaching the solar cells, which can lower the power output of the PV module.",
      examTrapAlert: "Clean panel surface improves energy capture.",
      whyOtherOptionsAreWrong: {
        B: "Dust usually reduces output.",
        C: "Dust cannot replace an inverter.",
        D: "Dust does not charge batteries."
      }
    }
  },
  {
    id: 50,
    topic: "General Installation Practice",
    question: "Which statement best describes good electrical and Solar PV installation practice?",
    options: {
      A: "Use correct materials, test properly, and follow safety rules",
      B: "Use damaged tools and ignore testing",
      C: "Leave joints exposed",
      D: "Remove protective devices"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Good installation practice requires correct tools, proper materials, neat workmanship, adequate protection, earthing, testing, and safety compliance.",
      examTrapAlert: "The safest and most standard option is usually the correct WAEC answer.",
      whyOtherOptionsAreWrong: {
        B: "Damaged tools and no testing are unsafe.",
        C: "Exposed joints are dangerous.",
        D: "Protective devices must remain installed."
      }
    }
  }
],
  test3: [
  {
    id: 1,
    topic: "Workshop Safety",
    question: "Which unsafe condition is most likely to cause electric shock in a workshop?",
    options: {
      A: "Dry insulated handle",
      B: "Exposed live terminal",
      C: "Proper earthing",
      D: "Correct cable rating"
    },
    correctAnswer: "B",
    solution: {
      classNote: "An exposed live terminal can make direct contact with the body and cause electric shock. All live parts must be insulated, enclosed, or isolated.",
      examTrapAlert: "Choose the option that presents direct contact with electricity.",
      whyOtherOptionsAreWrong: {
        A: "A dry insulated handle improves safety.",
        C: "Proper earthing reduces shock risk.",
        D: "Correct cable rating supports safe operation."
      }
    }
  },
  {
    id: 2,
    topic: "Workshop Safety",
    question: "Which action should be avoided when working near electrical equipment?",
    options: {
      A: "Using dry hands",
      B: "Standing on an insulating mat",
      C: "Using wet tools",
      D: "Switching off supply before repair"
    },
    correctAnswer: "C",
    solution: {
      classNote: "Wet tools reduce insulation and increase the risk of electric shock, especially when used near live electrical equipment.",
      examTrapAlert: "Water and electricity form a dangerous combination.",
      whyOtherOptionsAreWrong: {
        A: "Dry hands are safer than wet hands.",
        B: "An insulating mat improves safety.",
        D: "Switching off supply before repair is correct practice."
      }
    }
  },
  {
    id: 3,
    topic: "First Aid",
    question: "Artificial respiration is given to an electric shock victim mainly when the victim:",
    options: {
      A: "has stopped breathing",
      B: "is asking questions",
      C: "has a clean uniform",
      D: "is holding a screwdriver"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Artificial respiration is applied when a victim is not breathing or breathing is seriously impaired after being safely removed from the live source.",
      examTrapAlert: "Artificial respiration relates to breathing, not appearance.",
      whyOtherOptionsAreWrong: {
        B: "A person asking questions is breathing.",
        C: "Uniform condition is irrelevant.",
        D: "Holding a tool does not determine need for artificial respiration."
      }
    }
  },
  {
    id: 4,
    topic: "First Aid",
    question: "Which item is most appropriate in a first-aid box for treating cuts?",
    options: {
      A: "Bandage",
      B: "Fuse wire",
      C: "Conduit coupler",
      D: "Cable clip"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A bandage is used to dress wounds and control bleeding temporarily before proper medical care.",
      examTrapAlert: "First-aid items are medical support items, not electrical accessories.",
      whyOtherOptionsAreWrong: {
        B: "Fuse wire is an electrical protective material.",
        C: "A conduit coupler joins conduit pipes.",
        D: "Cable clips hold cables in surface wiring."
      }
    }
  },
  {
    id: 5,
    topic: "Statutory Regulations",
    question: "The main reason electrical installations are tested before use is to ensure that they are:",
    options: {
      A: "safe and fit for service",
      B: "painted beautifully",
      C: "hidden from inspection",
      D: "free from all switches"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Testing confirms correct wiring, proper insulation, continuity, polarity, and earthing before an installation is energized for use.",
      examTrapAlert: "Testing is about safety and correctness.",
      whyOtherOptionsAreWrong: {
        B: "Painting is not the main purpose of testing.",
        C: "Inspection must not be avoided.",
        D: "Switches are required for control."
      }
    }
  },
  {
    id: 6,
    topic: "Tools",
    question: "Which tool is most suitable for removing insulation from a cable without damaging the conductor?",
    options: {
      A: "Wire stripper",
      B: "Mallet",
      C: "Photometer",
      D: "Hydrometer"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A wire stripper is designed to remove insulation safely while reducing the chance of cutting or weakening the conductor.",
      examTrapAlert: "Choose the tool made specifically for cable preparation.",
      whyOtherOptionsAreWrong: {
        B: "A mallet is a striking tool.",
        C: "A photometer measures illumination.",
        D: "A hydrometer measures specific gravity."
      }
    }
  },
  {
    id: 7,
    topic: "Tools",
    question: "Which tool is used for gripping and twisting conductors during jointing?",
    options: {
      A: "Combination pliers",
      B: "Measuring tape",
      C: "Spirit level",
      D: "Megger"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Combination pliers can grip, twist, bend, and cut conductors during wiring and jointing operations.",
      examTrapAlert: "Pliers are hand tools for gripping and manipulating wires.",
      whyOtherOptionsAreWrong: {
        B: "Measuring tape measures length.",
        C: "Spirit level checks alignment.",
        D: "Megger tests insulation resistance."
      }
    }
  },
  {
    id: 8,
    topic: "Cables",
    question: "Which cable type is specially designed to resist fire better than ordinary PVC cable?",
    options: {
      A: "MICC cable",
      B: "Bare copper wire",
      C: "Lamp cord only",
      D: "Fuse wire"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Mineral Insulated Copper Clad cable has good fire resistance and is used where heat resistance and reliability are required.",
      examTrapAlert: "MICC is associated with fire resistance and durability.",
      whyOtherOptionsAreWrong: {
        B: "Bare copper wire lacks insulation.",
        C: "Lamp cord is not the best fire-resistant answer.",
        D: "Fuse wire is a protective element, not installation cable."
      }
    }
  },
  {
    id: 9,
    topic: "Cables",
    question: "The current rating of a cable is affected by:",
    options: {
      A: "ambient temperature",
      B: "colour of the wall",
      C: "shape of the room only",
      D: "brand of chalk"
    },
    correctAnswer: "A",
    solution: {
      classNote: "As ambient temperature increases, cable heat dissipation becomes poorer, so its safe current-carrying capacity may reduce.",
      examTrapAlert: "Cable rating depends on heat, installation method, conductor size, and protection.",
      whyOtherOptionsAreWrong: {
        B: "Wall colour does not determine current rating.",
        C: "Room shape alone is not the determining factor.",
        D: "Chalk brand is irrelevant."
      }
    }
  },
  {
    id: 10,
    topic: "Electrical Accessories",
    question: "Which accessory is used to connect a pendant lamp to a lighting circuit?",
    options: {
      A: "Ceiling rose",
      B: "Socket outlet",
      C: "Conduit saddle",
      D: "Busbar"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A ceiling rose provides terminals for connecting a pendant lamp to the lighting circuit.",
      examTrapAlert: "Pendant lamp connection points usually involve ceiling roses.",
      whyOtherOptionsAreWrong: {
        B: "Socket outlet receives plugs.",
        C: "Conduit saddle holds conduit.",
        D: "Busbar distributes larger current."
      }
    }
  },
  {
    id: 11,
    topic: "Electrical Accessories",
    question: "A socket outlet is used mainly for:",
    options: {
      A: "connecting portable appliances",
      B: "supporting overhead conductors",
      C: "testing insulation resistance",
      D: "holding conduit to the wall"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A socket outlet provides a safe point where a plug can connect a portable appliance to supply.",
      examTrapAlert: "Socket outlet means appliance connection point.",
      whyOtherOptionsAreWrong: {
        B: "Overhead conductors are supported by insulators and poles.",
        C: "Megger tests insulation resistance.",
        D: "Conduit saddle holds conduit."
      }
    }
  },
  {
    id: 12,
    topic: "Electrical Cells",
    question: "The e.m.f. of a simple Leclanché cell is commonly about:",
    options: {
      A: "1.5 V",
      B: "12 V",
      C: "230 V",
      D: "415 V"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A simple Leclanché cell has an e.m.f. of about 1.5 volts and is used in low-current applications.",
      examTrapAlert: "Leclanché cell questions commonly point to 1.5 V.",
      whyOtherOptionsAreWrong: {
        B: "12 V is common for some batteries, not one simple Leclanché cell.",
        C: "230 V is mains voltage in many installations.",
        D: "415 V is three-phase line voltage."
      }
    }
  },
  {
    id: 13,
    topic: "Electrical Cells",
    question: "Polarization in a simple cell reduces its efficiency because it:",
    options: {
      A: "opposes proper current production",
      B: "increases safe current output permanently",
      C: "changes the cell into a transformer",
      D: "makes the cell rechargeable automatically"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Polarization occurs when hydrogen bubbles collect around the positive electrode, reducing the cell’s effective action.",
      examTrapAlert: "Polarization is a defect of simple cells.",
      whyOtherOptionsAreWrong: {
        B: "It reduces performance.",
        C: "A cell cannot become a transformer.",
        D: "It does not make the cell rechargeable."
      }
    }
  },
  {
    id: 14,
    topic: "Living Room Layout",
    diagram: "assets/solarpv/obj/test3/obj_living_room_layout.png",
    question: "In the building layout diagram, electrical symbols are used mainly to show:",
    options: {
      A: "positions of fittings and accessories",
      B: "amount of cement required",
      C: "colour of paint to use",
      D: "number of chairs in the room"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Electrical layout symbols show the positions of lamps, switches, sockets, fan points, distribution boards, and other electrical accessories.",
      examTrapAlert: "Layout questions test interpretation of symbols and positions.",
      whyOtherOptionsAreWrong: {
        B: "Cement estimate is not the purpose of electrical symbols.",
        C: "Paint colour is not the purpose.",
        D: "Furniture count is irrelevant."
      }
    }
  },
  {
    id: 15,
    topic: "Living Room Layout",
    diagram: "assets/solarpv/obj/test3/obj_living_room_layout.png",
    question: "A dashed control line between a switch and a lamp in a layout usually indicates:",
    options: {
      A: "which switch controls the lamp",
      B: "water pipe route",
      C: "wall crack line",
      D: "furniture arrangement"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Dashed control lines in electrical layout drawings often show the relationship between switches and the lamp points they control.",
      examTrapAlert: "Dashed control lines are not always physical cable routes.",
      whyOtherOptionsAreWrong: {
        B: "It is not a plumbing drawing.",
        C: "It is not a crack indication.",
        D: "It does not represent furniture."
      }
    }
  },
  {
    id: 16,
    topic: "Living Room Layout",
    diagram: "assets/solarpv/obj/test3/obj_living_room_layout.png",
    question: "Which item is usually controlled by a wall switch in a room layout?",
    options: {
      A: "Lighting point",
      B: "Earth rod only",
      C: "Service cable",
      D: "Main pole"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Wall switches are commonly used to control lighting points, fan points, or similar room circuits depending on the layout.",
      examTrapAlert: "Switches control loads, especially lighting loads.",
      whyOtherOptionsAreWrong: {
        B: "Earth rods are not controlled by switches.",
        C: "Service cable is supply authority entry cable.",
        D: "Main pole is not controlled by a room switch."
      }
    }
  },
  {
    id: 17,
    topic: "One-Way Switch Symbol",
    diagram: "assets/solarpv/obj/test3/One-Way-One-Gang-Switch.PNG",
    question: "The symbol shown is used where a lamp is to be controlled from:",
    options: {
      A: "one point only",
      B: "four points",
      C: "three distribution boards",
      D: "the earth electrode"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A one-way switch controls a lighting point from one position only. It is simple and common in single-entry rooms.",
      examTrapAlert: "One-way means one control position.",
      whyOtherOptionsAreWrong: {
        B: "Four-point control needs a different arrangement.",
        C: "Distribution boards are not switch positions.",
        D: "Earth electrode does not control lamps."
      }
    }
  },
  {
    id: 18,
    topic: "Switching",
    diagram: "assets/solarpv/obj/test3/One-Way-One-Gang-Switch.PNG",
    question: "The switch symbol shown is an example of:",
    options: {
      A: "a control accessory",
      B: "a measuring instrument",
      C: "a generating machine",
      D: "an insulating material"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A switch is a control accessory used to make or break an electrical circuit.",
      examTrapAlert: "Switches control circuits; meters measure quantities.",
      whyOtherOptionsAreWrong: {
        B: "It does not measure.",
        C: "It does not generate electricity.",
        D: "It is not classified as insulation material."
      }
    }
  },
  {
    id: 19,
    topic: "Conduit Fitting",
    diagram: "assets/solarpv/obj/test3/obj_inspection_elbow.png",
    question: "The fitting shown is most useful where a conduit route:",
    options: {
      A: "changes direction",
      B: "becomes a battery",
      C: "measures voltage",
      D: "turns into a lamp"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An inspection elbow permits a change in conduit direction while allowing access for cable drawing and inspection.",
      examTrapAlert: "Elbow indicates change of direction.",
      whyOtherOptionsAreWrong: {
        B: "Conduit fittings do not become batteries.",
        C: "Voltage is measured with a voltmeter.",
        D: "A conduit fitting cannot become a lamp."
      }
    }
  },
  {
    id: 20,
    topic: "Conduit Fitting",
    diagram: "assets/solarpv/obj/test3/obj_inspection_elbow.png",
    question: "The inspection part of the fitting shown helps mainly during:",
    options: {
      A: "drawing and checking cables",
      B: "charging dry cells",
      C: "measuring room temperature",
      D: "soldering large busbars only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Inspection covers provide access to conductors inside conduit for pulling, checking, and maintenance.",
      examTrapAlert: "Inspection fittings provide access.",
      whyOtherOptionsAreWrong: {
        B: "It has no charging function.",
        C: "It does not measure temperature.",
        D: "It is not a soldering tool."
      }
    }
  },
  {
    id: 21,
    topic: "Conduit Wiring",
    question: "Which of the following is a disadvantage of conduit wiring?",
    options: {
      A: "Higher initial cost",
      B: "No protection for cables",
      C: "Cannot be used in buildings",
      D: "Always causes shock"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Conduit wiring gives good protection and neatness, but it is usually more expensive and requires skilled labour compared with simpler wiring methods.",
      examTrapAlert: "Disadvantages often include cost and installation difficulty.",
      whyOtherOptionsAreWrong: {
        B: "Conduit protects cables.",
        C: "It is widely used in buildings.",
        D: "Proper conduit wiring should not cause shock."
      }
    }
  },
  {
    id: 22,
    topic: "Conduit Wiring",
    question: "The space factor in conduit wiring is important because it prevents:",
    options: {
      A: "overcrowding of cables in conduit",
      B: "use of switches",
      C: "installation testing",
      D: "proper earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Space factor limits the number of cables drawn into a conduit so that heat, pulling difficulty, and insulation damage are minimized.",
      examTrapAlert: "Space factor deals with cable capacity inside conduit.",
      whyOtherOptionsAreWrong: {
        B: "It does not prevent switches.",
        C: "Testing remains necessary.",
        D: "Earthing remains required."
      }
    }
  },
  {
    id: 23,
    topic: "Surface Wiring",
    question: "Which material is commonly used to fix cables neatly on a surface wiring job?",
    options: {
      A: "Cable clips",
      B: "Hydrometer",
      C: "Soldering lead only",
      D: "Slip ring"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Cable clips are used to fasten surface wiring cables neatly to walls or boards.",
      examTrapAlert: "Surface wiring uses clips or cleats to hold cables.",
      whyOtherOptionsAreWrong: {
        B: "Hydrometer measures specific gravity.",
        C: "Soldering lead is for soldering.",
        D: "Slip ring belongs to machines."
      }
    }
  },
  {
    id: 24,
    topic: "Illumination",
    question: "Maintenance factor in illumination relates to loss of light output due to:",
    options: {
      A: "lamp ageing and dirt on fittings",
      B: "increase in cable length only",
      C: "earth resistance only",
      D: "number of switches only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Maintenance factor accounts for reduction in illumination caused by lamp ageing, dirt accumulation, and deterioration of fittings.",
      examTrapAlert: "Maintenance factor belongs to lighting design.",
      whyOtherOptionsAreWrong: {
        B: "Cable length is not the direct definition.",
        C: "Earth resistance is a safety test issue.",
        D: "Switch quantity does not define maintenance factor."
      }
    }
  },
  {
    id: 25,
    topic: "Illumination",
    question: "Which lamp is suitable for modern street lighting because of energy efficiency?",
    options: {
      A: "LED lamp",
      B: "Dry cell",
      C: "Fuse carrier",
      D: "Ceiling rose"
    },
    correctAnswer: "A",
    solution: {
      classNote: "LED lamps are widely used in modern street lighting because they are efficient, durable, and provide good illumination.",
      examTrapAlert: "Street lighting lamps include sodium, mercury vapour, HID, and LED.",
      whyOtherOptionsAreWrong: {
        B: "A dry cell is not a lamp.",
        C: "A fuse carrier is protective equipment.",
        D: "A ceiling rose is a lighting accessory, not a lamp."
      }
    }
  },
  {
    id: 26,
    topic: "Soldering",
    question: "A dry joint in soldering is undesirable because it may cause:",
    options: {
      A: "poor electrical contact",
      B: "perfect conductivity",
      C: "stronger insulation",
      D: "automatic earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A dry joint gives poor electrical contact and may cause heating, intermittent faults, or open circuit conditions.",
      examTrapAlert: "Poor soldering causes poor continuity.",
      whyOtherOptionsAreWrong: {
        B: "It does not give perfect conductivity.",
        C: "It does not improve insulation.",
        D: "It does not provide earthing."
      }
    }
  },
  {
    id: 27,
    topic: "Cable Jointing",
    question: "Which method joins conductors using heat and solder?",
    options: {
      A: "Soldering method",
      B: "Painting method",
      C: "Folding method only",
      D: "Washing method"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The soldering method uses heat, solder, and flux to produce a reliable electrical and mechanical connection.",
      examTrapAlert: "Heat and solder point directly to soldering.",
      whyOtherOptionsAreWrong: {
        B: "Painting does not join conductors.",
        C: "Folding alone is not a proper conductor jointing method.",
        D: "Washing is not a jointing method."
      }
    }
  },
  {
    id: 28,
    topic: "AC Motor",
    diagram: "assets/solarpv/obj/test3/longitudinal-section-of-an-ac-motor.PNG",
    question: "The diagram is a longitudinal section of an AC motor. The part that produces the rotating magnetic field is the:",
    options: {
      A: "stator winding",
      B: "foot base only",
      C: "nameplate",
      D: "cooling cover only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "In an AC motor, the stator winding produces a rotating magnetic field when supplied with alternating current.",
      examTrapAlert: "In induction motors, the stator winding creates the rotating field.",
      whyOtherOptionsAreWrong: {
        B: "The foot base supports the motor.",
        C: "The nameplate gives rating information.",
        D: "The cover protects parts but does not create the field."
      }
    }
  },
  {
    id: 29,
    topic: "AC Motor",
    diagram: "assets/solarpv/obj/test3/longitudinal-section-of-an-ac-motor.PNG",
    question: "The rotor of the motor shown is the part that:",
    options: {
      A: "rotates inside the stator",
      B: "holds the wall switch",
      C: "measures insulation resistance",
      D: "acts as a fuse link"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The rotor is the rotating part of an AC motor and develops mechanical output through the shaft.",
      examTrapAlert: "Rotor means rotating part.",
      whyOtherOptionsAreWrong: {
        B: "A wall switch is not part of the rotor.",
        C: "Megger measures insulation resistance.",
        D: "Fuse link is a protective element."
      }
    }
  },
  {
    id: 30,
    topic: "AC Motor",
    diagram: "assets/solarpv/obj/test3/longitudinal-section-of-an-ac-motor.PNG",
    question: "The bearing in an AC motor is used mainly to:",
    options: {
      A: "support smooth shaft rotation",
      B: "increase supply voltage",
      C: "store electrical energy",
      D: "replace the stator winding"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Bearings support the rotating shaft and reduce friction during motor operation.",
      examTrapAlert: "Bearing faults often cause noise and heating.",
      whyOtherOptionsAreWrong: {
        B: "Bearings do not increase voltage.",
        C: "Bearings do not store electrical energy.",
        D: "They do not replace windings."
      }
    }
  },
  {
    id: 31,
    topic: "Machine Nameplate",
    question: "Which information is normally found on a three-phase motor nameplate?",
    options: {
      A: "Rated voltage",
      B: "Wall colour",
      C: "Room shape",
      D: "Number of windows"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A motor nameplate commonly shows rated voltage, current, frequency, speed, power rating, connection type, and manufacturer information.",
      examTrapAlert: "Nameplate data helps correct motor selection and connection.",
      whyOtherOptionsAreWrong: {
        B: "Wall colour is irrelevant.",
        C: "Room shape is irrelevant.",
        D: "Window number is not machine data."
      }
    }
  },
  {
    id: 32,
    topic: "Motor Starter",
    question: "Which starter reduces starting current by first connecting the motor in star and later in delta?",
    options: {
      A: "Star-delta starter",
      B: "Lamp holder",
      C: "Ceiling rose",
      D: "Bell push"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A star-delta starter starts a suitable three-phase motor in star to reduce starting current, then changes to delta for normal running.",
      examTrapAlert: "Star first, delta later = star-delta starter.",
      whyOtherOptionsAreWrong: {
        B: "Lamp holder is not a starter.",
        C: "Ceiling rose is a lighting accessory.",
        D: "Bell push is not a motor starter."
      }
    }
  },
  {
    id: 33,
    topic: "DC Machine",
    question: "Which part of a DC machine carries the armature conductors?",
    options: {
      A: "Armature core",
      B: "Socket outlet",
      C: "Conduit box",
      D: "Lamp cap"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The armature core has slots that carry armature conductors or windings in a DC machine.",
      examTrapAlert: "Armature conductors are found in the armature slots.",
      whyOtherOptionsAreWrong: {
        B: "Socket outlet is a building accessory.",
        C: "Conduit box is a wiring accessory.",
        D: "Lamp cap belongs to a lamp."
      }
    }
  },
  {
    id: 34,
    topic: "DC Generator Fault",
    question: "A DC generator that fails to excite may have:",
    options: {
      A: "loss of residual magnetism",
      B: "correct field connection",
      C: "clean commutator only",
      D: "rated speed with perfect field"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A generator may fail to excite due to loss of residual magnetism, wrong field connection, open circuit, short circuit, or poor connections.",
      examTrapAlert: "Failure to excite often points to residual magnetism or field circuit fault.",
      whyOtherOptionsAreWrong: {
        B: "Correct field connection helps excitation.",
        C: "A clean commutator supports operation.",
        D: "Rated speed and good field should support excitation."
      }
    }
  },
  {
    id: 35,
    topic: "Slip Ring",
    question: "A slip ring is used in some machines to:",
    options: {
      A: "connect a rotating circuit to an external circuit",
      B: "hold a lamp on the ceiling",
      C: "fix conduit to a wall",
      D: "measure light intensity"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Slip rings maintain electrical connection between rotating windings and external stationary circuits.",
      examTrapAlert: "Slip rings are machine components.",
      whyOtherOptionsAreWrong: {
        B: "A lamp holder holds a lamp.",
        C: "A conduit saddle fixes conduit.",
        D: "A photometer measures light intensity."
      }
    }
  },
  {
    id: 36,
    topic: "Protective Devices",
    question: "Which device automatically opens a circuit during overload or short circuit?",
    options: {
      A: "Circuit breaker",
      B: "Cable clip",
      C: "Measuring tape",
      D: "Lamp holder"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A circuit breaker automatically interrupts abnormal current caused by overload or short circuit.",
      examTrapAlert: "Automatic disconnection points to circuit breaker.",
      whyOtherOptionsAreWrong: {
        B: "Cable clip only holds cable.",
        C: "Measuring tape measures length.",
        D: "Lamp holder holds a lamp."
      }
    }
  },
  {
    id: 37,
    topic: "Protective Devices",
    question: "A fuse protects a circuit because its element:",
    options: {
      A: "melts when excessive current flows",
      B: "stores charge permanently",
      C: "increases current dangerously",
      D: "removes earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The fuse element melts under excessive current, opening the circuit and preventing damage or fire.",
      examTrapAlert: "Fuse operation depends on melting under overcurrent.",
      whyOtherOptionsAreWrong: {
        B: "A fuse does not store charge.",
        C: "It limits danger rather than increasing it.",
        D: "Earthing remains necessary."
      }
    }
  },
  {
    id: 38,
    topic: "ELCB",
    diagram: "assets/solarpv/obj/test3/elcb.png",
    question: "The protective device shown is most useful when current leaks from live parts to:",
    options: {
      A: "earth",
      B: "lamp shade",
      C: "window frame only",
      D: "measuring tape"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An Earth Leakage Circuit Breaker detects leakage current to earth and disconnects the supply to reduce electric shock risk.",
      examTrapAlert: "ELCB means earth leakage protection.",
      whyOtherOptionsAreWrong: {
        B: "Lamp shade is not the leakage reference point.",
        C: "Window frame is not the standard answer unless earthed metalwork is involved.",
        D: "Measuring tape is irrelevant."
      }
    }
  },
  {
    id: 39,
    topic: "ELCB",
    diagram: "assets/solarpv/obj/test3/elcb.png",
    question: "An ELCB improves safety mainly by:",
    options: {
      A: "disconnecting supply during earth leakage",
      B: "increasing room temperature",
      C: "charging the battery",
      D: "measuring conduit length"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The ELCB disconnects the circuit when leakage current to earth reaches an unsafe level.",
      examTrapAlert: "ELCB action is protective disconnection.",
      whyOtherOptionsAreWrong: {
        B: "It does not control temperature.",
        C: "It does not charge batteries.",
        D: "It does not measure length."
      }
    }
  },
  {
    id: 40,
    topic: "Testing",
    question: "Which test confirms that all metal parts meant to be earthed are effectively connected to earth?",
    options: {
      A: "Earth continuity test",
      B: "Colour matching test",
      C: "Paint thickness test",
      D: "Fan speed test"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Earth continuity testing checks that exposed conductive parts are properly connected to the earthing system.",
      examTrapAlert: "Earth continuity means unbroken earth path.",
      whyOtherOptionsAreWrong: {
        B: "Colour matching is not an electrical test.",
        C: "Paint thickness is not the required electrical test.",
        D: "Fan speed is not earthing."
      }
    }
  },
  {
    id: 41,
    topic: "Testing",
    question: "Which instrument can be used for continuity testing?",
    options: {
      A: "Bell set",
      B: "Photometer",
      C: "Hydrometer",
      D: "Tachometer"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A bell set can indicate continuity by sounding when the circuit path is complete.",
      examTrapAlert: "Bell set is a common WAEC answer for continuity test.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures illumination.",
        C: "Hydrometer measures liquid specific gravity.",
        D: "Tachometer measures rotational speed."
      }
    }
  },
  {
    id: 42,
    topic: "Maintenance",
    question: "Which action is part of preventive maintenance of a motor?",
    options: {
      A: "Checking for overheating and abnormal noise",
      B: "Removing all bearings",
      C: "Running it overloaded",
      D: "Disconnecting the earth conductor"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Preventive maintenance includes checking for overheating, vibration, abnormal noise, loose connections, lubrication, and insulation condition.",
      examTrapAlert: "Preventive maintenance detects early signs before breakdown.",
      whyOtherOptionsAreWrong: {
        B: "Bearings should not be removed unnecessarily.",
        C: "Overloading damages motors.",
        D: "Earth conductor is essential for safety."
      }
    }
  },
  {
    id: 43,
    topic: "Maintenance",
    question: "Which fault symptom suggests a possible bearing problem in a motor?",
    options: {
      A: "Unusual noise during operation",
      B: "Correct quiet running",
      C: "Normal rated speed",
      D: "Clean nameplate"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Bearing faults often produce unusual noise, vibration, overheating, or rough rotation.",
      examTrapAlert: "Noise and vibration are common machine fault symptoms.",
      whyOtherOptionsAreWrong: {
        B: "Quiet running suggests normal operation.",
        C: "Rated speed is desirable.",
        D: "Clean nameplate is not a bearing fault."
      }
    }
  },
  {
    id: 44,
    topic: "Entrepreneurship",
    question: "Which item is normally included in a business proposal?",
    options: {
      A: "Budget or cost estimate",
      B: "Broken lamp only",
      C: "Loose cable joint",
      D: "Burnt fuse"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A business proposal commonly includes title page, summary, objectives, project description, qualification, budget, conclusion, and appendices.",
      examTrapAlert: "Proposal questions test business planning documents.",
      whyOtherOptionsAreWrong: {
        B: "Broken lamp is not a proposal component.",
        C: "Loose joint is a fault.",
        D: "Burnt fuse is a fault condition."
      }
    }
  },
  {
    id: 45,
    topic: "Entrepreneurship",
    question: "Which record helps monitor goods bought for resale or installation work?",
    options: {
      A: "Stock inventory book",
      B: "Earth rod only",
      C: "Conduit bend",
      D: "Lamp shade"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A stock inventory book records materials and goods available, purchased, issued, or sold in the business.",
      examTrapAlert: "Inventory records materials and stock.",
      whyOtherOptionsAreWrong: {
        B: "Earth rod is a material, not a record book.",
        C: "Conduit bend is a fitting.",
        D: "Lamp shade is not a record."
      }
    }
  },
  {
    id: 46,
    topic: "Solar PV Safety",
    question: "Before maintaining a Solar PV inverter circuit, the technician should first:",
    options: {
      A: "isolate the AC and DC sources safely",
      B: "wet the terminals",
      C: "short the battery terminals",
      D: "remove all warning labels"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Solar PV systems can have both DC and AC sources. Safe isolation prevents shock, burns, and equipment damage during maintenance.",
      examTrapAlert: "PV systems may remain live from panels even when AC supply is off.",
      whyOtherOptionsAreWrong: {
        B: "Water increases danger.",
        C: "Shorting batteries can cause fire or explosion.",
        D: "Warning labels support safety."
      }
    }
  },
  {
    id: 47,
    topic: "Solar PV Protection",
    question: "In a Solar PV system, a DC isolator is used to:",
    options: {
      A: "disconnect the DC supply for safety",
      B: "increase sunlight",
      C: "store energy like a battery",
      D: "replace all fuses permanently"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A DC isolator disconnects the DC side of a Solar PV system during installation, maintenance, or emergency isolation.",
      examTrapAlert: "Isolator = disconnection for safety.",
      whyOtherOptionsAreWrong: {
        B: "It cannot increase sunlight.",
        C: "It does not store energy.",
        D: "Fuses or breakers are still required."
      }
    }
  },
  {
    id: 48,
    topic: "Solar PV Installation",
    question: "Why should PV cables be correctly sized?",
    options: {
      A: "To reduce overheating and voltage drop",
      B: "To reduce panel exposure to sunlight",
      C: "To make batteries unnecessary",
      D: "To stop current flow completely"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Correct PV cable sizing reduces voltage drop, overheating, power loss, and fire risk.",
      examTrapAlert: "Cable size affects current capacity and voltage drop.",
      whyOtherOptionsAreWrong: {
        B: "Cable size does not reduce sunlight.",
        C: "Batteries may still be required depending on system design.",
        D: "A cable is meant to carry current safely, not stop it completely."
      }
    }
  },
  {
    id: 49,
    topic: "Solar PV Maintenance",
    question: "A loose terminal connection in a Solar PV system can cause:",
    options: {
      A: "heating and power loss",
      B: "better efficiency always",
      C: "higher sunlight intensity",
      D: "automatic panel cleaning"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Loose connections increase resistance, causing heating, voltage drop, arcing, and power loss.",
      examTrapAlert: "Loose electrical joints create heat and faults.",
      whyOtherOptionsAreWrong: {
        B: "Loose terminals reduce reliability.",
        C: "Sunlight intensity is environmental.",
        D: "Loose terminals do not clean panels."
      }
    }
  },
  {
    id: 50,
    topic: "General WAEC Objective Revision",
    question: "Which option best represents standard electrical installation practice?",
    options: {
      A: "Correct materials, safe isolation, proper testing, and protection",
      B: "Guesswork, wet tools, and exposed joints",
      C: "No testing, no earthing, and wrong cable size",
      D: "Damaged insulation and overloaded conductors"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Standard installation practice requires correct materials, safe working methods, proper earthing, protective devices, inspection, and testing.",
      examTrapAlert: "WAEC objective answers usually favour safety, standards, and correct procedure.",
      whyOtherOptionsAreWrong: {
        B: "These are unsafe practices.",
        C: "Testing, earthing, and correct cable size are essential.",
        D: "Damaged insulation and overload are dangerous."
      }
    }
  }
],
 test4: [
  {
    id: 1,
    topic: "Joint Box Symbol",
    diagram: "assets/solarpv/obj/test4/Joint-Box.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "joint box",
      B: "lamp holder",
      C: "energy meter",
      D: "ceiling fan"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A joint box is an electrical accessory used to house and protect cable joints while allowing access for inspection and maintenance.",
      examTrapAlert: "A black central junction with conductors entering from different directions commonly indicates a joint box.",
      whyOtherOptionsAreWrong: {
        B: "A lamp holder supports and connects a lamp.",
        C: "An energy meter measures energy consumption.",
        D: "A ceiling fan symbol is different and shows fan blades."
      }
    }
  },
  {
    id: 2,
    topic: "Joint Box",
    diagram: "assets/solarpv/obj/test4/Joint-Box.PNG",
    question: "The main reason for using the accessory shown is to:",
    options: {
      A: "protect and enclose conductor joints",
      B: "increase supply voltage",
      C: "measure insulation resistance",
      D: "control motor speed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Cable joints must not be left exposed. A joint box encloses the connection, protects it mechanically, and improves safety.",
      examTrapAlert: "Joint boxes are for safe junctions, not voltage boosting.",
      whyOtherOptionsAreWrong: {
        B: "A joint box does not increase voltage.",
        C: "A megger measures insulation resistance.",
        D: "Motor speed is controlled by suitable starters or controllers."
      }
    }
  },
  {
    id: 3,
    topic: "Lap Winding",
    diagram: "assets/solarpv/obj/test4/Lapwinding.PNG",
    question: "In a lap winding, the finishing end of one coil is connected to:",
    options: {
      A: "an adjacent commutator segment",
      B: "a distant non-adjacent segment only",
      C: "the earth electrode",
      D: "the lamp holder terminal"
    },
    correctAnswer: "A",
    solution: {
      classNote: "In lap winding, coil ends are connected to adjacent commutator segments. This produces multiple parallel paths and makes it suitable for high-current, low-voltage machines.",
      examTrapAlert: "Lap winding 'laps back' to nearby commutator segments.",
      whyOtherOptionsAreWrong: {
        B: "Non-adjacent connection is associated more with wave winding.",
        C: "The earth electrode is not part of armature winding.",
        D: "A lamp holder is not part of armature winding."
      }
    }
  },
  {
    id: 4,
    topic: "Lap Winding",
    diagram: "assets/solarpv/obj/test4/Lapwinding.PNG",
    question: "A simplex lap winding has the number of parallel paths equal to the:",
    options: {
      A: "number of poles",
      B: "number of lamps",
      C: "number of socket outlets",
      D: "number of conduit boxes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "For a simplex lap winding, the number of parallel paths is equal to the number of poles. This is why lap winding is suitable for heavy-current machines.",
      examTrapAlert: "Lap winding: A = P for simplex lap.",
      whyOtherOptionsAreWrong: {
        B: "Lamps are not related to armature parallel paths.",
        C: "Socket outlets are installation accessories.",
        D: "Conduit boxes are wiring fittings."
      }
    }
  },
  {
    id: 5,
    topic: "Lap Winding",
    diagram: "assets/solarpv/obj/test4/Lapwinding.PNG",
    question: "Lap winding is most suitable for:",
    options: {
      A: "low-voltage, high-current machines",
      B: "high-voltage, low-current machines only",
      C: "lighting switches only",
      D: "earthing rods only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Because lap winding has several parallel paths, it can carry large current. It is therefore suitable for low-voltage, high-current DC machines.",
      examTrapAlert: "High current points to lap winding.",
      whyOtherOptionsAreWrong: {
        B: "High-voltage, low-current operation is associated more with wave winding.",
        C: "Switches are wiring accessories, not armature windings.",
        D: "Earthing rods are unrelated to winding type."
      }
    }
  },
  {
    id: 6,
    topic: "Wave Winding",
    diagram: "assets/solarpv/obj/test4/Wavewinding.PNG",
    question: "In wave winding, the number of parallel paths in a simplex winding is:",
    options: {
      A: "two",
      B: "equal to the number of lamps",
      C: "zero",
      D: "equal to socket outlets"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A simplex wave winding has two parallel paths regardless of the number of poles. It is suitable for high-voltage, low-current machines.",
      examTrapAlert: "Wave winding: A = 2 for simplex wave.",
      whyOtherOptionsAreWrong: {
        B: "Lamps are not related to armature paths.",
        C: "There must be current paths.",
        D: "Socket outlets are not winding paths."
      }
    }
  },
  {
    id: 7,
    topic: "Wave Winding",
    diagram: "assets/solarpv/obj/test4/Wavewinding.PNG",
    question: "Wave winding is commonly suitable for:",
    options: {
      A: "high-voltage, low-current machines",
      B: "low-voltage, very high-current machines only",
      C: "conduit bending only",
      D: "lamp holder connection only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Wave winding gives fewer parallel paths and is suitable where higher voltage and lower current are required.",
      examTrapAlert: "High voltage points to wave winding.",
      whyOtherOptionsAreWrong: {
        B: "That better describes lap winding suitability.",
        C: "Conduit bending is installation work.",
        D: "Lamp holders are lighting accessories."
      }
    }
  },
  {
    id: 8,
    topic: "Wave Winding",
    diagram: "assets/solarpv/obj/test4/Wavewinding.PNG",
    question: "Dummy coils may be used in wave winding mainly to:",
    options: {
      A: "obtain mechanical balance",
      B: "increase room illumination",
      C: "replace all commutator segments",
      D: "serve as earth electrodes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Dummy coils are sometimes fitted in wave winding to maintain mechanical balance even though they are not electrically active.",
      examTrapAlert: "Dummy coils may exist physically but are not electrically connected.",
      whyOtherOptionsAreWrong: {
        B: "They do not affect room lighting.",
        C: "They do not replace commutator segments.",
        D: "They are not earthing devices."
      }
    }
  },
  {
    id: 9,
    topic: "Transmission and Distribution",
    diagram: "assets/solarpv/obj/test4/SingleLineDiagramofElectricalSystem.PNG",
    question: "In the single-line diagram, the transformer at the power station is used mainly to:",
    options: {
      A: "step up voltage for transmission",
      B: "hold lamps in position",
      C: "measure room illumination",
      D: "join conduit pipes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Voltage is stepped up at the power station for efficient transmission over long distances, reducing current and line losses.",
      examTrapAlert: "Generation to transmission usually requires voltage step-up.",
      whyOtherOptionsAreWrong: {
        B: "Lamp holders hold lamps.",
        C: "Photometer measures illumination.",
        D: "Couplers join conduit pipes."
      }
    }
  },
  {
    id: 10,
    topic: "Transmission and Distribution",
    diagram: "assets/solarpv/obj/test4/SingleLineDiagramofElectricalSystem.PNG",
    question: "The 11 kV feeder in the diagram supplies power from the transmission substation to the:",
    options: {
      A: "distribution substation",
      B: "lamp cap",
      C: "soldering iron",
      D: "ceiling rose only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A feeder carries power from a substation to a distribution point. In the diagram, the 11 kV feeder links the transmission stage to the distribution substation.",
      examTrapAlert: "Feeder carries bulk supply, not final small appliance load.",
      whyOtherOptionsAreWrong: {
        B: "A lamp cap is a lighting part.",
        C: "A soldering iron is a tool.",
        D: "A ceiling rose is a lighting accessory."
      }
    }
  },
  {
    id: 11,
    topic: "Transmission and Distribution",
    diagram: "assets/solarpv/obj/test4/SingleLineDiagramofElectricalSystem.PNG",
    question: "A distributor in an electrical supply system is the part from which:",
    options: {
      A: "service mains are tapped to consumers",
      B: "only conduit bends are made",
      C: "armature coils are wound",
      D: "soldering flux is produced"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A distributor is a conductor or system section from which service mains are taken to individual consumers.",
      examTrapAlert: "Distributor supplies service mains to consumers.",
      whyOtherOptionsAreWrong: {
        B: "Conduit bending is unrelated.",
        C: "Armature winding is machine work.",
        D: "Flux is soldering material."
      }
    }
  },
  {
    id: 12,
    topic: "Electrical Plan",
    diagram: "assets/solarpv/obj/test4/Wiringdrawingandscaledrawingofalivingroom.PNG",
    question: "The electrical plan shown is used mainly to identify:",
    options: {
      A: "positions of lights, switches and socket outlets",
      B: "chemical composition of cells",
      C: "bearing size of motors only",
      D: "fuel level in a generator"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An electrical plan shows the locations of lighting points, switches, sockets, fans and related accessories in a building.",
      examTrapAlert: "Electrical plan questions test layout interpretation.",
      whyOtherOptionsAreWrong: {
        B: "Cell chemistry is not shown on a building plan.",
        C: "Motor bearings are not the focus of a living-room wiring plan.",
        D: "Fuel level is not shown in wiring drawings."
      }
    }
  },
  {
    id: 13,
    topic: "Electrical Plan",
    diagram: "assets/solarpv/obj/test4/Wiringdrawingandscaledrawingofalivingroom.PNG",
    question: "The legend on an electrical plan is important because it:",
    options: {
      A: "explains the meaning of symbols used",
      B: "increases the supply frequency",
      C: "replaces all testing",
      D: "removes the need for earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A legend explains the symbols on a drawing so that the installer can interpret the plan correctly.",
      examTrapAlert: "Legend = symbol explanation.",
      whyOtherOptionsAreWrong: {
        B: "A legend cannot change frequency.",
        C: "Testing is still compulsory.",
        D: "Earthing is still required."
      }
    }
  },
  {
    id: 14,
    topic: "Electrical Plan",
    diagram: "assets/solarpv/obj/test4/Wiringdrawingandscaledrawingofalivingroom.PNG",
    question: "A curved dashed line from a switch to a light point usually shows:",
    options: {
      A: "which switch controls the light",
      B: "a water pipe route",
      C: "the path of sunlight",
      D: "a crack in the wall"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Control lines in electrical plans show the relationship between switches and the lights they control.",
      examTrapAlert: "Do not treat every curved line as a physical cable route.",
      whyOtherOptionsAreWrong: {
        B: "This is not a plumbing drawing.",
        C: "Sunlight path is not represented this way.",
        D: "Wall cracks are not electrical control lines."
      }
    }
  },
  {
    id: 15,
    topic: "Living Room Symbols",
    diagram: "assets/solarpv/obj/test4/living_symbols.png",
    question: "A sheet of living-room symbols is useful to an electrician because it helps in:",
    options: {
      A: "interpreting accessories on a wiring drawing",
      B: "mixing concrete",
      C: "testing battery specific gravity",
      D: "measuring motor speed"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Living-room symbols help identify lamps, switches, socket outlets, fan points and other accessories during wiring interpretation.",
      examTrapAlert: "Symbol sheets are for drawing interpretation.",
      whyOtherOptionsAreWrong: {
        B: "Concrete mixing is building work.",
        C: "Hydrometer tests specific gravity.",
        D: "Tachometer measures motor speed."
      }
    }
  },
  {
    id: 16,
    topic: "Miniature Circuit Breaker",
    diagram: "assets/solarpv/obj/test4/Miniature-Circuit-Breaker.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "miniature circuit breaker",
      B: "lamp holder",
      C: "ceiling rose",
      D: "conduit saddle"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A miniature circuit breaker automatically disconnects a circuit when excessive current flows due to overload or short circuit.",
      examTrapAlert: "MCB is a protective device.",
      whyOtherOptionsAreWrong: {
        B: "Lamp holder carries a lamp.",
        C: "Ceiling rose connects a pendant lamp.",
        D: "Conduit saddle supports conduit."
      }
    }
  },
  {
    id: 17,
    topic: "Protective Devices",
    diagram: "assets/solarpv/obj/test4/Miniature-Circuit-Breaker.PNG",
    question: "The device shown operates when there is:",
    options: {
      A: "overload or short circuit",
      B: "low paint quality",
      C: "poor room decoration",
      D: "wrong furniture arrangement"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An MCB trips during abnormal current conditions, such as overload or short circuit, to protect cables and equipment.",
      examTrapAlert: "Protective devices respond to electrical faults.",
      whyOtherOptionsAreWrong: {
        B: "Paint quality is irrelevant.",
        C: "Decoration does not trip an MCB.",
        D: "Furniture arrangement is unrelated."
      }
    }
  },
  {
    id: 18,
    topic: "Socket Outlet",
    diagram: "assets/solarpv/obj/test4/socket.png",
    question: "The device shown is used for:",
    options: {
      A: "connecting portable appliances",
      B: "measuring insulation resistance",
      C: "bending conduit",
      D: "storing chemical energy"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A socket outlet provides a safe connection point for a plug attached to a portable appliance.",
      examTrapAlert: "Socket outlet = appliance connection point.",
      whyOtherOptionsAreWrong: {
        B: "A megger measures insulation resistance.",
        C: "A bending spring bends conduit.",
        D: "Cells and batteries store chemical energy."
      }
    }
  },
  {
    id: 19,
    topic: "Socket Outlet Symbol",
    diagram: "assets/solarpv/obj/test4/Socket-Outlet.PNG",
    question: "The symbol shown represents a:",
    options: {
      A: "socket outlet",
      B: "earth electrode",
      C: "slip ring",
      D: "winding coil"
    },
    correctAnswer: "A",
    solution: {
      classNote: "This symbol indicates the position of a socket outlet on an electrical drawing.",
      examTrapAlert: "Know both the physical accessory and its drawing symbol.",
      whyOtherOptionsAreWrong: {
        B: "Earth symbols use grounding lines.",
        C: "Slip rings are machine parts.",
        D: "Winding coils are shown differently."
      }
    }
  },
  {
    id: 20,
    topic: "One-Way Two-Gang Switch",
    diagram: "assets/solarpv/obj/test4/One-Way-Two-Gang-Switch.PNG",
    question: "A one-way two-gang switch can control:",
    options: {
      A: "two lighting points from one position",
      B: "one lamp from three positions",
      C: "battery charging current only",
      D: "earth resistance only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Two-gang means two switch mechanisms on one plate. One-way means each controls from one position.",
      examTrapAlert: "Gang = number of switches on one plate.",
      whyOtherOptionsAreWrong: {
        B: "Three-position control requires a different switching arrangement.",
        C: "Battery charging requires a charger/controller.",
        D: "Earth resistance is measured, not controlled by a switch."
      }
    }
  },
  {
    id: 21,
    topic: "Two-Way One-Gang Switch",
    diagram: "assets/solarpv/obj/test4/Two-Way-One-Gang Switch.PNG",
    question: "A two-way one-gang switch is used as part of a circuit that controls one lamp from:",
    options: {
      A: "two positions",
      B: "no position",
      C: "only the meter",
      D: "only the earth rod"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Two-way switching allows one lighting point to be controlled from two separate positions.",
      examTrapAlert: "Two-way = two control positions.",
      whyOtherOptionsAreWrong: {
        B: "A switch must have a control position.",
        C: "The meter measures energy and does not control the lamp.",
        D: "The earth rod does not control lamps."
      }
    }
  },
  {
    id: 22,
    topic: "Plug Pin",
    diagram: "assets/solarpv/obj/test4/Plug-Pin.PNG",
    question: "The conducting part of a plug that enters a socket outlet is the:",
    options: {
      A: "plug pin",
      B: "conduit box",
      C: "lamp shade",
      D: "meter disc"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Plug pins make electrical contact with the socket outlet terminals to supply the connected appliance.",
      examTrapAlert: "Plug pins conduct current to the appliance.",
      whyOtherOptionsAreWrong: {
        B: "A conduit box houses wiring connections.",
        C: "A lamp shade is not a plug part.",
        D: "A meter disc is part of some energy meters."
      }
    }
  },
  {
    id: 23,
    topic: "Conduit Wiring",
    question: "Which tool is most suitable for bending PVC conduit without flattening it?",
    options: {
      A: "Bending spring",
      B: "Hydrometer",
      C: "Photometer",
      D: "Bell set"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A bending spring supports PVC conduit internally during bending so the pipe does not collapse or flatten.",
      examTrapAlert: "Conduit bending requires bending spring or bending machine.",
      whyOtherOptionsAreWrong: {
        B: "Hydrometer measures specific gravity.",
        C: "Photometer measures illumination.",
        D: "Bell set checks continuity."
      }
    }
  },
  {
    id: 24,
    topic: "Conduit Wiring",
    question: "After cutting metallic conduit, burrs should be removed to prevent:",
    options: {
      A: "damage to cable insulation",
      B: "increase in lamp brightness",
      C: "battery polarization",
      D: "higher room temperature"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sharp burrs inside conduit can scrape and damage cable insulation when conductors are drawn in.",
      examTrapAlert: "Burrs cause abrasion of insulation.",
      whyOtherOptionsAreWrong: {
        B: "Burrs do not increase brightness.",
        C: "Polarization is a cell defect.",
        D: "Room temperature is unrelated."
      }
    }
  },
  {
    id: 25,
    topic: "Conduit Wiring",
    question: "In conduit installation, a coupler is used to:",
    options: {
      A: "join two lengths of conduit",
      B: "measure current",
      C: "hold a lamp",
      D: "store charge"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A coupler connects two conduit lengths together in a conduit run.",
      examTrapAlert: "Coupler means joining pipes or conduit lengths.",
      whyOtherOptionsAreWrong: {
        B: "An ammeter measures current.",
        C: "A lamp holder holds a lamp.",
        D: "Cells or capacitors store energy or charge."
      }
    }
  },
  {
    id: 26,
    topic: "Illumination Calculation",
    question: "Calculate the illumination on a surface 4 m below a point source of 128 cd. Use E = I/d².",
    options: {
      A: "8 lux",
      B: "16 lux",
      C: "32 lux",
      D: "512 lux"
    },
    correctAnswer: "A",
    solution: {
      classNote: "E = I/d² = 128/(4²) = 128/16 = 8 lux. Illumination is measured in lux.",
      examTrapAlert: "Always square the distance in inverse-square illumination questions.",
      whyOtherOptionsAreWrong: {
        B: "This would result from using an incorrect denominator.",
        C: "This comes from dividing by 4 instead of 16.",
        D: "This incorrectly multiplies the values."
      }
    }
  },
  {
    id: 27,
    topic: "Illumination Calculation",
    question: "A lamp gives luminous intensity of 200 cd at a distance of 5 m. The illumination is:",
    options: {
      A: "8 lux",
      B: "40 lux",
      C: "1000 lux",
      D: "25 lux"
    },
    correctAnswer: "A",
    solution: {
      classNote: "E = I/d² = 200/5² = 200/25 = 8 lux.",
      examTrapAlert: "Do not divide by distance alone; divide by distance squared.",
      whyOtherOptionsAreWrong: {
        B: "This divides by 5 only.",
        C: "This multiplies 200 by 5.",
        D: "This is only d², not illumination."
      }
    }
  },
  {
    id: 28,
    topic: "Illumination",
    question: "The instrument used to measure illumination is the:",
    options: {
      A: "photometer",
      B: "megger",
      C: "tachometer",
      D: "hydrometer"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A photometer measures illumination or light intensity on a surface.",
      examTrapAlert: "Photo relates to light.",
      whyOtherOptionsAreWrong: {
        B: "Megger measures insulation resistance.",
        C: "Tachometer measures speed.",
        D: "Hydrometer measures specific gravity."
      }
    }
  },
  {
    id: 29,
    topic: "Cable Calculation",
    question: "A circuit carries 10 A at 230 V. The power consumed is:",
    options: {
      A: "2300 W",
      B: "23 W",
      C: "240 W",
      D: "0.043 W"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Power P = VI = 230 × 10 = 2300 W.",
      examTrapAlert: "For simple power calculation, multiply voltage by current.",
      whyOtherOptionsAreWrong: {
        B: "This wrongly divides by 10.",
        C: "This uses an incorrect current value.",
        D: "This is not the product of V and I."
      }
    }
  },
  {
    id: 30,
    topic: "Resistance Calculation",
    question: "If a conductor has 12 V across it and carries 3 A, its resistance is:",
    options: {
      A: "4 Ω",
      B: "9 Ω",
      C: "15 Ω",
      D: "36 Ω"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Using Ohm’s law, R = V/I = 12/3 = 4 Ω.",
      examTrapAlert: "Resistance equals voltage divided by current.",
      whyOtherOptionsAreWrong: {
        B: "This subtracts current from voltage.",
        C: "This adds voltage and current.",
        D: "This multiplies voltage by current."
      }
    }
  },
  {
    id: 31,
    topic: "Business Costing",
    question: "If 8 switches cost ₦250 each, the total cost is:",
    options: {
      A: "₦2,000",
      B: "₦1,000",
      C: "₦250",
      D: "₦8,250"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Total cost = quantity × unit price = 8 × ₦250 = ₦2,000.",
      examTrapAlert: "Multiply the quantity by the unit price.",
      whyOtherOptionsAreWrong: {
        B: "This is too low.",
        C: "This is the unit price only.",
        D: "This wrongly combines the values."
      }
    }
  },
  {
    id: 32,
    topic: "Business Costing",
    question: "An installer needs materials worth ₦85,000 and has ₦60,000. The amount to borrow is:",
    options: {
      A: "₦25,000",
      B: "₦145,000",
      C: "₦60,000",
      D: "₦85,000"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Amount to borrow = total material cost − available capital = ₦85,000 − ₦60,000 = ₦25,000.",
      examTrapAlert: "Borrow only the shortfall.",
      whyOtherOptionsAreWrong: {
        B: "This adds both values.",
        C: "This is the available capital.",
        D: "This is the total cost."
      }
    }
  },
  {
    id: 33,
    topic: "Installation Testing",
    question: "Which test confirms that switches are connected in the live conductor?",
    options: {
      A: "Polarity test",
      B: "Illumination test",
      C: "Hydrometer test",
      D: "Speed test"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Polarity test confirms correct live and neutral connection, ensuring switches and fuses are connected in the live conductor.",
      examTrapAlert: "Polarity relates to correct live/neutral arrangement.",
      whyOtherOptionsAreWrong: {
        B: "Illumination test concerns lighting level.",
        C: "Hydrometer measures specific gravity.",
        D: "Speed test is for rotating machines."
      }
    }
  },
  {
    id: 34,
    topic: "Installation Testing",
    question: "A megger is used to measure:",
    options: {
      A: "insulation resistance",
      B: "lamp colour",
      C: "motor speed",
      D: "battery volume"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A megger measures insulation resistance between conductors and between conductors and earth.",
      examTrapAlert: "Megger = insulation resistance tester.",
      whyOtherOptionsAreWrong: {
        B: "Lamp colour is not measured by a megger.",
        C: "Tachometer measures speed.",
        D: "Battery volume is not measured by a megger."
      }
    }
  },
  {
    id: 35,
    topic: "Installation Testing",
    question: "The purpose of continuity testing is to confirm that:",
    options: {
      A: "the conductor path is complete",
      B: "the wall is painted",
      C: "the lamp is old",
      D: "the switch is decorative"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Continuity testing checks that a conductor or circuit path is unbroken from one point to another.",
      examTrapAlert: "Continuity means complete path.",
      whyOtherOptionsAreWrong: {
        B: "Painting is not continuity.",
        C: "Lamp age is unrelated.",
        D: "Decoration is irrelevant."
      }
    }
  },
  {
    id: 36,
    topic: "Protective Devices",
    question: "A fuse protects a circuit by:",
    options: {
      A: "melting when excessive current flows",
      B: "storing electrical energy",
      C: "increasing fault current",
      D: "removing earthing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A fuse element melts under excessive current, opening the circuit and preventing damage or fire.",
      examTrapAlert: "Fuse action depends on melting under overcurrent.",
      whyOtherOptionsAreWrong: {
        B: "A fuse does not store energy.",
        C: "It limits fault damage.",
        D: "Earthing remains necessary."
      }
    }
  },
  {
    id: 37,
    topic: "Earthing",
    question: "A good earthing system should provide:",
    options: {
      A: "a low resistance path to earth",
      B: "an open circuit to all metal parts",
      C: "a high resistance fault path",
      D: "no connection to protective devices"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Earthing provides a low-resistance path for fault current so that protective devices can operate quickly.",
      examTrapAlert: "Low earth resistance improves safety.",
      whyOtherOptionsAreWrong: {
        B: "Metal parts requiring earthing must not be left open.",
        C: "High resistance prevents effective fault current flow.",
        D: "Protective devices work with the earthing system."
      }
    }
  },
  {
    id: 38,
    topic: "Motor Control",
    question: "Which requirement is important in electric motor control?",
    options: {
      A: "Means of isolating the motor from supply",
      B: "Automatic restarting after supply failure",
      C: "Removal of overload protection",
      D: "Undersized supply cable"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Motor control must include safe isolation, overload protection, excess-current protection, and safe starting and stopping.",
      examTrapAlert: "Automatic restart after failure of supply is dangerous.",
      whyOtherOptionsAreWrong: {
        B: "Automatic restarting should be prevented.",
        C: "Overload protection is required.",
        D: "The cable must carry starting and full-load current safely."
      }
    }
  },
  {
    id: 39,
    topic: "Motor Selection",
    question: "Which factor should be considered when choosing an electric motor?",
    options: {
      A: "Type of supply available",
      B: "Colour of the floor",
      C: "Brand of chalk",
      D: "Number of windows only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Motor selection depends on supply type, load, power rating, enclosure, mounting, environment, speed control requirement, and cost.",
      examTrapAlert: "Choose electrical/mechanical requirements, not decoration.",
      whyOtherOptionsAreWrong: {
        B: "Floor colour is irrelevant.",
        C: "Chalk brand is irrelevant.",
        D: "Window number does not determine motor selection."
      }
    }
  },
  {
    id: 40,
    topic: "Machine Enclosure",
    question: "A totally enclosed motor is preferred in a dusty workshop because it:",
    options: {
      A: "reduces entry of dust into the motor",
      B: "allows dust into the winding",
      C: "removes the need for all maintenance",
      D: "works without any heat"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A totally enclosed enclosure protects internal parts against dust and dirt in harsh environments.",
      examTrapAlert: "Match enclosure type with environment.",
      whyOtherOptionsAreWrong: {
        B: "Dust entry is harmful.",
        C: "Maintenance is still needed.",
        D: "Motors still produce heat."
      }
    }
  },
  {
    id: 41,
    topic: "D.C. Machine",
    question: "Which part of a D.C. machine collects current from the commutator?",
    options: {
      A: "Brush",
      B: "Ceiling rose",
      C: "Conduit saddle",
      D: "Socket plate"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Brushes make contact with the commutator and collect or supply current in a DC machine.",
      examTrapAlert: "Brush and commutator work together in DC machines.",
      whyOtherOptionsAreWrong: {
        B: "Ceiling rose is a lighting accessory.",
        C: "Conduit saddle supports conduit.",
        D: "Socket plate is a wiring accessory."
      }
    }
  },
  {
    id: 42,
    topic: "D.C. Machine",
    question: "Commutator undercutting means:",
    options: {
      A: "removing mica insulation between commutator bars",
      B: "cutting conduit pipes shorter",
      C: "removing all brushes permanently",
      D: "painting the motor frame"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Undercutting lowers or removes mica insulation between commutator bars so that brushes contact the copper segments properly.",
      examTrapAlert: "Undercutting is a commutator maintenance term.",
      whyOtherOptionsAreWrong: {
        B: "This is conduit cutting, not undercutting.",
        C: "Brushes are required for operation.",
        D: "Painting is not undercutting."
      }
    }
  },
  {
    id: 43,
    topic: "Maintenance",
    question: "Preventive maintenance is carried out mainly to:",
    options: {
      A: "avoid sudden breakdown",
      B: "increase machine failure",
      C: "remove all lubrication",
      D: "damage insulation"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Preventive maintenance is routine servicing carried out to keep equipment in good condition and prevent sudden failure.",
      examTrapAlert: "Preventive means before breakdown.",
      whyOtherOptionsAreWrong: {
        B: "Maintenance reduces failure.",
        C: "Lubrication is part of maintenance.",
        D: "Insulation should be protected."
      }
    }
  },
  {
    id: 44,
    topic: "Corrective Maintenance",
    question: "Corrective maintenance is done:",
    options: {
      A: "after a fault or breakdown has occurred",
      B: "only before a machine is installed",
      C: "to avoid repair work",
      D: "to remove testing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Corrective maintenance restores faulty equipment or installation to working condition after breakdown.",
      examTrapAlert: "Corrective = corrects an existing fault.",
      whyOtherOptionsAreWrong: {
        B: "That does not define corrective maintenance.",
        C: "Corrective maintenance is repair work.",
        D: "Testing is still needed."
      }
    }
  },
  {
    id: 45,
    topic: "Fault Diagnosis",
    question: "A motor that hums but fails to start may have:",
    options: {
      A: "faulty starting winding or capacitor",
      B: "perfect starting circuit",
      C: "correct bearing only",
      D: "good supply and no fault"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A single-phase motor that hums but fails to start may have a faulty capacitor, starting winding problem, overload, or mechanical stiffness.",
      examTrapAlert: "Humming without rotation suggests starting fault.",
      whyOtherOptionsAreWrong: {
        B: "A perfect starting circuit should help it start.",
        C: "Correct bearing alone would not cause failure to start.",
        D: "If there is no fault, it should start."
      }
    }
  },
  {
    id: 46,
    topic: "Entrepreneurship",
    question: "Which of the following is a possible source of funds for an electrical installation business?",
    options: {
      A: "Cooperative loan",
      B: "Broken fuse",
      C: "Loose joint",
      D: "Burnt lamp"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sources of funds include personal savings, family support, cooperative loans, bank loans, grants and trade credit.",
      examTrapAlert: "Funding sources are financial sources.",
      whyOtherOptionsAreWrong: {
        B: "A broken fuse is not finance.",
        C: "A loose joint is a fault.",
        D: "A burnt lamp is not capital."
      }
    }
  },
  {
    id: 47,
    topic: "Business Records",
    question: "Which book records money received and paid out in a small business?",
    options: {
      A: "Cash book",
      B: "Conduit book",
      C: "Lamp shade book",
      D: "Brush holder book"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A cash book records cash receipts and cash payments. It helps the business owner monitor cash flow.",
      examTrapAlert: "Cash book = cash movement record.",
      whyOtherOptionsAreWrong: {
        B: "This is not a standard cash record.",
        C: "This is not a business accounting book.",
        D: "This is not a cash record."
      }
    }
  },
  {
    id: 48,
    topic: "Solar PV Application",
    question: "In a Solar PV installation, an isolator is used to:",
    options: {
      A: "disconnect a section of the circuit safely",
      B: "increase sunlight",
      C: "store energy permanently",
      D: "replace all cables"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An isolator provides safe disconnection for maintenance, inspection or emergency control in AC or DC sections of a PV installation.",
      examTrapAlert: "Isolator = safe disconnection.",
      whyOtherOptionsAreWrong: {
        B: "It cannot increase sunlight.",
        C: "Batteries store energy.",
        D: "Cables are still needed."
      }
    }
  },
  {
    id: 49,
    topic: "Solar PV Maintenance",
    question: "Loose terminals in a PV or electrical installation may cause:",
    options: {
      A: "heating and arcing",
      B: "better current flow always",
      C: "automatic cleaning",
      D: "lower resistance always"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Loose terminals increase resistance and may cause heating, arcing, voltage drop and fire risk.",
      examTrapAlert: "Loose connection = heat and fault risk.",
      whyOtherOptionsAreWrong: {
        B: "Loose terminals reduce reliability.",
        C: "They do not clean the system.",
        D: "They usually increase contact resistance."
      }
    }
  },
  {
    id: 50,
    topic: "General WAEC Objective Revision",
    question: "Which option best represents standard electrical installation practice?",
    options: {
      A: "Correct drawing interpretation, proper materials, protection and testing",
      B: "Exposed live joints, no testing and damaged tools",
      C: "Wrong cable size and no earthing",
      D: "Wet hands, live repair and removed fuses"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Standard practice requires correct drawings, suitable materials, safe workmanship, protective devices, earthing, inspection and testing.",
      examTrapAlert: "WAEC objective answers usually favour safety, standards and correct procedure.",
      whyOtherOptionsAreWrong: {
        B: "These are unsafe practices.",
        C: "Wrong cable size and no earthing are dangerous.",
        D: "Wet hands and live repair create shock hazards."
      }
    }
  }
],
  test5: [
  {
    id: 1,
    topic: "D.C. Generator",
    diagram: "assets/solarpv/obj/test5/Sectionofadcgenerator.PNG",
    question: "In the d.c. generator diagram, the part labelled W is most likely the:",
    options: { A: "yoke or frame", B: "lamp holder", C: "fuse link", D: "socket outlet" },
    correctAnswer: "A",
    solution: {
      classNote: "The yoke or frame is the outer body of a d.c. machine. It gives mechanical support and provides a magnetic path.",
      examTrapAlert: "The outer circular body of a d.c. machine is usually the yoke/frame.",
      whyOtherOptionsAreWrong: {
        B: "A lamp holder is a lighting accessory.",
        C: "A fuse link is a protective element.",
        D: "A socket outlet is a wiring accessory."
      }
    }
  },
  {
    id: 2,
    topic: "D.C. Generator",
    diagram: "assets/solarpv/obj/test5/Sectionofadcgenerator.PNG",
    question: "In the d.c. generator diagram, the part labelled X is most likely the:",
    options: { A: "armature core", B: "ceiling rose", C: "conduit saddle", D: "bell push" },
    correctAnswer: "A",
    solution: {
      classNote: "The armature core is the rotating magnetic core that carries the armature conductors.",
      examTrapAlert: "The central rotating part of a d.c. generator is the armature.",
      whyOtherOptionsAreWrong: {
        B: "A ceiling rose is used in lighting circuits.",
        C: "A conduit saddle supports conduit.",
        D: "A bell push is a control accessory."
      }
    }
  },
  {
    id: 3,
    topic: "D.C. Generator",
    diagram: "assets/solarpv/obj/test5/Sectionofadcgenerator.PNG",
    question: "In the d.c. generator diagram, the part labelled Y is most likely the:",
    options: { A: "field winding", B: "plug pin", C: "photometer", D: "cable clip" },
    correctAnswer: "A",
    solution: {
      classNote: "The field winding is wound on the pole core and produces the magnetic field required for generator action.",
      examTrapAlert: "Coils around the pole area of a d.c. machine are field windings.",
      whyOtherOptionsAreWrong: {
        B: "A plug pin is part of a plug.",
        C: "A photometer measures illumination.",
        D: "A cable clip supports surface wiring."
      }
    }
  },
  {
    id: 4,
    topic: "D.C. Generator",
    diagram: "assets/solarpv/obj/test5/Sectionofadcgenerator.PNG",
    question: "The function of the armature in a d.c. generator is to:",
    options: {
      A: "carry conductors in which e.m.f. is induced",
      B: "hold a lamp on the ceiling",
      C: "protect a plug from shock only",
      D: "join two conduit pipes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "In a generator, the armature rotates in the magnetic field and e.m.f. is induced in its conductors.",
      examTrapAlert: "Generator armature is where generated e.m.f. is produced.",
      whyOtherOptionsAreWrong: {
        B: "That is the role of a lamp holder/ceiling rose.",
        C: "That is not the function of the armature.",
        D: "A coupler joins conduit pipes."
      }
    }
  },
  {
    id: 5,
    topic: "D.C. Generator Maintenance",
    diagram: "assets/solarpv/obj/test5/Sectionofadcgenerator.PNG",
    question: "Which tool may be needed when dismantling a generator?",
    options: { A: "spanner", B: "photometer", C: "hydrometer only", D: "ceiling rose" },
    correctAnswer: "A",
    solution: {
      classNote: "Tools for dismantling machines include spanners, screwdrivers, hammers, pullers/extractors and pliers.",
      examTrapAlert: "Dismantling requires mechanical hand tools.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures light.",
        C: "Hydrometer measures specific gravity.",
        D: "Ceiling rose is a lighting accessory."
      }
    }
  },
  {
    id: 6,
    topic: "Leclanche Cell",
    diagram: "assets/solarpv/obj/test5/Simpleleclanchecell.PNG",
    question: "In the Leclanché cell diagram, the e.m.f. of the cell is approximately:",
    options: { A: "1.5 V", B: "12 V", C: "230 V", D: "415 V" },
    correctAnswer: "A",
    solution: {
      classNote: "A simple Leclanché cell has an e.m.f. of about 1.5 V.",
      examTrapAlert: "Leclanché cell = 1.5 V.",
      whyOtherOptionsAreWrong: {
        B: "12 V is common for some batteries, not one Leclanché cell.",
        C: "230 V is mains voltage.",
        D: "415 V is three-phase line voltage."
      }
    }
  },
  {
    id: 7,
    topic: "Leclanche Cell",
    diagram: "assets/solarpv/obj/test5/Simpleleclanchecell.PNG",
    question: "The positive electrode of a Leclanché cell is usually made of:",
    options: { A: "carbon", B: "zinc", C: "rubber", D: "mica" },
    correctAnswer: "A",
    solution: {
      classNote: "In a Leclanché cell, carbon is the positive electrode while zinc is the negative electrode.",
      examTrapAlert: "Carbon is positive; zinc is negative.",
      whyOtherOptionsAreWrong: {
        B: "Zinc is the negative electrode.",
        C: "Rubber is an insulating material.",
        D: "Mica is an insulating material."
      }
    }
  },
  {
    id: 8,
    topic: "Leclanche Cell",
    diagram: "assets/solarpv/obj/test5/Simpleleclanchecell.PNG",
    question: "The two main defects of a simple Leclanché cell are:",
    options: {
      A: "polarization and local action",
      B: "earthing and bonding",
      C: "overload and short circuit only",
      D: "illumination and flux"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The main defects are polarization and local action. Polarization reduces output due to hydrogen collection, while local action wastes zinc.",
      examTrapAlert: "Cell defects: polarization and local action.",
      whyOtherOptionsAreWrong: {
        B: "These are installation safety terms.",
        C: "These are circuit faults, not cell defects.",
        D: "These belong to lighting/soldering topics."
      }
    }
  },
  {
    id: 9,
    topic: "Leclanche Cell",
    diagram: "assets/solarpv/obj/test5/Simpleleclanchecell.PNG",
    question: "The instrument used to measure the specific gravity of the cell electrolyte is a:",
    options: { A: "hydrometer", B: "megger", C: "tachometer", D: "photometer" },
    correctAnswer: "A",
    solution: {
      classNote: "A hydrometer measures the specific gravity of an electrolyte.",
      examTrapAlert: "Hydrometer = specific gravity.",
      whyOtherOptionsAreWrong: {
        B: "Megger measures insulation resistance.",
        C: "Tachometer measures speed.",
        D: "Photometer measures illumination."
      }
    }
  },
  {
    id: 10,
    topic: "Leclanche Cell",
    diagram: "assets/solarpv/obj/test5/Simpleleclanchecell.PNG",
    question: "One disadvantage of the Leclanché cell is that it:",
    options: {
      A: "cannot supply large current continuously",
      B: "is a three-phase generator",
      C: "has no chemical action",
      D: "is used as a conduit box"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The Leclanché cell has high internal resistance and is not suitable for supplying large current continuously.",
      examTrapAlert: "It is suitable for low-current uses.",
      whyOtherOptionsAreWrong: {
        B: "It is a cell, not a generator.",
        C: "It operates by chemical action.",
        D: "It is not a wiring accessory."
      }
    }
  },
  {
    id: 11,
    topic: "D.C. Machine Faults",
    question: "A d.c. generator may produce no voltage if there is:",
    options: {
      A: "loss of residual magnetism",
      B: "proper brush contact",
      C: "rated speed",
      D: "clean commutator"
    },
    correctAnswer: "A",
    solution: {
      classNote: "No voltage may result from loss of residual magnetism, open field circuit, poor brush contact or open armature circuit.",
      examTrapAlert: "No voltage points to failure of excitation or circuit continuity.",
      whyOtherOptionsAreWrong: {
        B: "Proper brush contact supports generation.",
        C: "Rated speed supports voltage generation.",
        D: "Clean commutator improves operation."
      }
    }
  },
  {
    id: 12,
    topic: "D.C. Machine Faults",
    question: "Sparking at the brushes of a d.c. generator may be caused by:",
    options: {
      A: "worn brushes or dirty commutator",
      B: "perfect commutation",
      C: "correct brush pressure",
      D: "clean smooth commutator only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Sparking may occur due to worn brushes, dirty commutator, high mica, loose brush spring or overload.",
      examTrapAlert: "Brush/commutator faults commonly cause sparking.",
      whyOtherOptionsAreWrong: {
        B: "Perfect commutation reduces sparking.",
        C: "Correct brush pressure helps operation.",
        D: "A clean commutator reduces sparking."
      }
    }
  },
  {
    id: 13,
    topic: "Rewinding",
    question: "The first step before rewinding a motor is usually to:",
    options: {
      A: "record the winding data",
      B: "throw away the nameplate",
      C: "remove all insulation blindly",
      D: "connect it directly to supply"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Before rewinding, the technician records winding data such as number of turns, coil pitch, wire size and connection pattern.",
      examTrapAlert: "Never dismantle winding before recording data.",
      whyOtherOptionsAreWrong: {
        B: "The nameplate gives useful information.",
        C: "Blind removal loses winding data.",
        D: "Direct connection before inspection is unsafe."
      }
    }
  },
  {
    id: 14,
    topic: "A.C. and D.C. Motors",
    question: "One difference between an a.c. motor and a d.c. motor is that:",
    options: {
      A: "an a.c. motor uses alternating current while a d.c. motor uses direct current",
      B: "both always use dry cells only",
      C: "d.c. motors cannot rotate",
      D: "a.c. motors are always lamp holders"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A.C. motors operate from alternating current supply, while D.C. motors operate from direct current supply.",
      examTrapAlert: "The supply type is the simplest difference.",
      whyOtherOptionsAreWrong: {
        B: "Motors do not always use dry cells.",
        C: "D.C. motors rotate.",
        D: "A.C. motors are machines, not lamp holders."
      }
    }
  },
  {
    id: 15,
    topic: "Junction Box",
    diagram: "assets/solarpv/obj/test5/Junctionbox.PNG",
    question: "The diagram shows a junction box feeding three lamps. The junction box is used mainly to:",
    options: {
      A: "house and protect cable connections",
      B: "measure lamp brightness",
      C: "increase supply frequency",
      D: "store electrical energy"
    },
    correctAnswer: "A",
    solution: {
      classNote: "A junction box houses conductor connections and gives access for inspection and maintenance.",
      examTrapAlert: "Junction box = safe connection enclosure.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures brightness/illumination.",
        C: "Frequency is not changed by a junction box.",
        D: "Cells and batteries store energy."
      }
    }
  },
  {
    id: 16,
    topic: "Junction Box",
    diagram: "assets/solarpv/obj/test5/Junctionbox.PNG",
    question: "In the diagram, the lamps L1, L2 and L3 are best described as:",
    options: {
      A: "lighting loads",
      B: "protective devices",
      C: "measuring instruments",
      D: "earthing electrodes"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Lamps are loads because they consume electrical energy and convert it mainly to light and heat.",
      examTrapAlert: "A load consumes electrical energy.",
      whyOtherOptionsAreWrong: {
        B: "Protective devices include fuses and breakers.",
        C: "Measuring instruments include voltmeters and ammeters.",
        D: "Earth electrodes are part of earthing systems."
      }
    }
  },
  {
    id: 17,
    topic: "Lighting Circuit",
    question: "In a lighting circuit, the switch should preferably be connected in the:",
    options: { A: "live conductor", B: "earth conductor only", C: "neutral conductor only", D: "protective bonding only" },
    correctAnswer: "A",
    solution: {
      classNote: "Switches should be connected in the live conductor so that the load is isolated from live supply when switched off.",
      examTrapAlert: "Switch the live, not the neutral.",
      whyOtherOptionsAreWrong: {
        B: "Earth conductor must not be used as a switch conductor.",
        C: "Switching neutral alone can leave the load live.",
        D: "Bonding is for safety, not switching."
      }
    }
  },
  {
    id: 18,
    topic: "Lighting Circuit",
    question: "If three lamps are connected in parallel, failure of one lamp will:",
    options: {
      A: "not necessarily put off the others",
      B: "always destroy the switch",
      C: "always increase supply voltage",
      D: "remove the earth connection"
    },
    correctAnswer: "A",
    solution: {
      classNote: "In a parallel circuit, each lamp has its own current path, so one failed lamp does not normally stop the others.",
      examTrapAlert: "Parallel loads operate independently.",
      whyOtherOptionsAreWrong: {
        B: "Lamp failure does not always destroy the switch.",
        C: "Supply voltage does not increase automatically.",
        D: "Earth connection is unrelated."
      }
    }
  },
  {
    id: 19,
    topic: "Lighting Circuit",
    question: "A common fault in a lighting circuit that causes a lamp not to light is:",
    options: {
      A: "open circuit",
      B: "proper connection",
      C: "good continuity",
      D: "correct polarity"
    },
    correctAnswer: "A",
    solution: {
      classNote: "An open circuit interrupts the current path, preventing the lamp from operating.",
      examTrapAlert: "No light often suggests open circuit, faulty lamp or no supply.",
      whyOtherOptionsAreWrong: {
        B: "Proper connection supports operation.",
        C: "Good continuity allows current flow.",
        D: "Correct polarity is desirable."
      }
    }
  },
  {
    id: 20,
    topic: "B.S. Symbols",
    diagram: "assets/solarpv/obj/test5/BSsymbols.PNG",
    question: "In the diagram, symbol I represents a:",
    options: { A: "2-way switch", B: "ceiling fan", C: "earth electrode", D: "meter" },
    correctAnswer: "A",
    solution: {
      classNote: "Symbol I represents a 2-way switch used in lighting circuits controlled from two positions.",
      examTrapAlert: "Study the shape and match it with standard installation symbols.",
      whyOtherOptionsAreWrong: {
        B: "A fan symbol is different.",
        C: "Earth symbol uses grounding lines.",
        D: "Meter symbols are different."
      }
    }
  },
  {
    id: 21,
    topic: "B.S. Symbols",
    diagram: "assets/solarpv/obj/test5/BSsymbols.PNG",
    question: "In the diagram, symbol II represents an:",
    options: { A: "intermediate switch", B: "lamp holder", C: "battery cell", D: "fuse link" },
    correctAnswer: "A",
    solution: {
      classNote: "An intermediate switch is used between two 2-way switches when a lamp must be controlled from three or more positions.",
      examTrapAlert: "Three-point lighting control uses two 2-way switches plus intermediate switch.",
      whyOtherOptionsAreWrong: {
        B: "A lamp holder symbol is different.",
        C: "A cell symbol is different.",
        D: "A fuse link symbol is different."
      }
    }
  },
  {
    id: 22,
    topic: "B.S. Symbols",
    diagram: "assets/solarpv/obj/test5/BSsymbols.PNG",
    question: "In the diagram, symbol III represents a:",
    options: { A: "13 A socket outlet", B: "push button", C: "distribution board", D: "slip ring" },
    correctAnswer: "A",
    solution: {
      classNote: "Symbol III is used for a 13 A socket outlet in electrical layout drawings.",
      examTrapAlert: "Socket outlet symbols are common WAEC practical-objective items.",
      whyOtherOptionsAreWrong: {
        B: "A push button has a different symbol.",
        C: "Distribution board has a different representation.",
        D: "Slip ring is a machine component."
      }
    }
  },
  {
    id: 23,
    topic: "B.S. Symbols",
    diagram: "assets/solarpv/obj/test5/BSsymbols.PNG",
    question: "B.S. symbols are used in electrical drawings mainly to:",
    options: {
      A: "represent accessories clearly and uniformly",
      B: "increase circuit current",
      C: "replace protective devices",
      D: "remove the need for testing"
    },
    correctAnswer: "A",
    solution: {
      classNote: "British Standard symbols provide a common technical language for electrical drawings.",
      examTrapAlert: "Symbols support interpretation; they do not replace testing.",
      whyOtherOptionsAreWrong: {
        B: "Symbols do not change current.",
        C: "Protective devices are still needed.",
        D: "Testing is still essential."
      }
    }
  },
  {
    id: 24,
    topic: "Switching",
    question: "A lamp controlled from three independent positions requires:",
    options: {
      A: "two 2-way switches and one intermediate switch",
      B: "three one-way switches only",
      C: "three socket outlets",
      D: "one fuse only"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Three-position control uses two 2-way switches at the ends and one intermediate switch between them.",
      examTrapAlert: "For three switching positions: 2-way + intermediate + 2-way.",
      whyOtherOptionsAreWrong: {
        B: "Three one-way switches cannot perform proper three-position control.",
        C: "Sockets do not control lamps.",
        D: "A fuse protects; it does not provide control positions."
      }
    }
  },
  {
    id: 25,
    topic: "Three-Switch Lighting Control",
    diagram: "assets/solarpv/obj/test5/3lampscontrolledby3switches.PNG",
    question: "The circuit shown uses SW2 mainly as:",
    options: { A: "an intermediate switch", B: "a fuse", C: "a socket outlet", D: "an earth rod" },
    correctAnswer: "A",
    solution: {
      classNote: "In a three-position lighting circuit, the middle switch is the intermediate switch.",
      examTrapAlert: "Middle switch in three-point control is usually intermediate.",
      whyOtherOptionsAreWrong: {
        B: "A fuse is a protective device.",
        C: "A socket outlet supplies portable appliances.",
        D: "An earth rod is for earthing."
      }
    }
  },
  {
    id: 26,
    topic: "Three-Switch Lighting Control",
    diagram: "assets/solarpv/obj/test5/3lampscontrolledby3switches.PNG",
    question: "The circuit shown is used to control a lamp from:",
    options: { A: "three positions", B: "one position only", C: "no position", D: "the distribution transformer only" },
    correctAnswer: "A",
    solution: {
      classNote: "The combination of two 2-way switches and one intermediate switch allows one lamp to be controlled from three positions.",
      examTrapAlert: "Count the control switches.",
      whyOtherOptionsAreWrong: {
        B: "There are three switches.",
        C: "The lamp has switching control.",
        D: "A transformer does not serve as a room switch."
      }
    }
  },
  {
    id: 27,
    topic: "Three-Switch Lighting Control",
    diagram: "assets/solarpv/obj/test5/3lampscontrolledby3switches.PNG",
    question: "One safety precaution while installing the circuit shown is to:",
    options: {
      A: "isolate the supply before connection",
      B: "work with wet hands",
      C: "remove all insulation",
      D: "connect live wire to earth deliberately"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The supply must be isolated before wiring to prevent electric shock and short circuit.",
      examTrapAlert: "Safe isolation comes before installation work.",
      whyOtherOptionsAreWrong: {
        B: "Wet hands increase shock risk.",
        C: "Insulation must be preserved.",
        D: "Connecting live to earth is dangerous."
      }
    }
  },
  {
    id: 28,
    topic: "Lighting Control",
    question: "If all switches in a correctly wired three-position lighting circuit are operated properly, the lamp condition depends on:",
    options: {
      A: "whether the circuit path is completed",
      B: "the colour of the wall",
      C: "the number of windows only",
      D: "the weight of the switch plate"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The lamp lights when the switching arrangement completes the live path to the lamp.",
      examTrapAlert: "Lamp ON means closed circuit; lamp OFF means open circuit.",
      whyOtherOptionsAreWrong: {
        B: "Wall colour does not determine switching condition.",
        C: "Window number is irrelevant.",
        D: "Switch plate weight is irrelevant."
      }
    }
  },
  {
    id: 29,
    topic: "Lighting Control",
    question: "The live conductor in a lighting circuit should pass through the:",
    options: { A: "switch", B: "earth electrode only", C: "neutral link only", D: "wall paint" },
    correctAnswer: "A",
    solution: {
      classNote: "The switch should control the live conductor so the lamp holder is not left live when switched off.",
      examTrapAlert: "Switch the live conductor.",
      whyOtherOptionsAreWrong: {
        B: "Earth electrode is not used for switching.",
        C: "Neutral should not be the only conductor switched.",
        D: "Wall paint is irrelevant."
      }
    }
  },
  {
    id: 30,
    topic: "Drilling Machine",
    diagram: "assets/solarpv/obj/test5/drillingmachine.PNG",
    question: "The equipment shown is a:",
    options: { A: "portable electric drilling machine", B: "photometer", C: "megger", D: "hydrometer" },
    correctAnswer: "A",
    solution: {
      classNote: "The diagram shows a portable electric drilling machine used for drilling holes during installation work.",
      examTrapAlert: "A drill has a bit, chuck, trigger and motor housing.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures illumination.",
        C: "Megger tests insulation resistance.",
        D: "Hydrometer measures specific gravity."
      }
    }
  },
  {
    id: 31,
    topic: "Drilling Machine",
    diagram: "assets/solarpv/obj/test5/drillingmachine.PNG",
    question: "In the drilling machine diagram, part I is most likely the:",
    options: { A: "drill bit", B: "handle", C: "switch", D: "supply cable" },
    correctAnswer: "A",
    solution: {
      classNote: "The drill bit is the cutting tool fixed at the front of the machine.",
      examTrapAlert: "The pointed front cutting part is the drill bit.",
      whyOtherOptionsAreWrong: {
        B: "The handle is at the rear/body side.",
        C: "The switch is near the handle.",
        D: "Supply cable enters at the rear."
      }
    }
  },
  {
    id: 32,
    topic: "Drilling Machine",
    diagram: "assets/solarpv/obj/test5/drillingmachine.PNG",
    question: "In the drilling machine diagram, part II is most likely the:",
    options: { A: "chuck", B: "earth rod", C: "lamp holder", D: "fuse link" },
    correctAnswer: "A",
    solution: {
      classNote: "The chuck grips and holds the drill bit firmly during operation.",
      examTrapAlert: "Chuck holds the bit.",
      whyOtherOptionsAreWrong: {
        B: "Earth rod is part of earthing system.",
        C: "Lamp holder carries a lamp.",
        D: "Fuse link protects circuits."
      }
    }
  },
  {
    id: 33,
    topic: "Drilling Machine",
    diagram: "assets/solarpv/obj/test5/drillingmachine.PNG",
    question: "One function of the part labelled III is most likely to:",
    options: {
      A: "control the operation of the drill",
      B: "measure illumination",
      C: "store electricity",
      D: "serve as a commutator"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The trigger switch controls the operation of the drilling machine by making or breaking the supply to the motor.",
      examTrapAlert: "Trigger area controls the drill.",
      whyOtherOptionsAreWrong: {
        B: "Illumination is measured with a photometer.",
        C: "The drill switch does not store electricity.",
        D: "A commutator is inside some motors, not the trigger."
      }
    }
  },
  {
    id: 34,
    topic: "Drilling Machine Safety",
    diagram: "assets/solarpv/obj/test5/drillingmachine.PNG",
    question: "Before using the drilling machine, the operator should:",
    options: {
      A: "ensure the bit is tight in the chuck",
      B: "hold the bit with bare hand while running",
      C: "use it with damaged cable",
      D: "pour water into the motor"
    },
    correctAnswer: "A",
    solution: {
      classNote: "The drill bit must be properly tightened in the chuck to prevent slipping or injury.",
      examTrapAlert: "Check tool condition before use.",
      whyOtherOptionsAreWrong: {
        B: "Holding a rotating bit is dangerous.",
        C: "Damaged cables can cause shock.",
        D: "Water damages electrical tools and increases shock risk."
      }
    }
  },
  {
    id: 35,
    topic: "Drilling Machine Safety",
    diagram: "assets/solarpv/obj/test5/drillingmachine.PNG",
    question: "One precaution when using a drilling machine during installation is to:",
    options: {
      A: "wear eye protection",
      B: "remove the handle",
      C: "drill into live cables knowingly",
      D: "use a loose bit"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Eye protection prevents injury from flying particles during drilling.",
      examTrapAlert: "Tool safety questions favour personal protection and proper condition.",
      whyOtherOptionsAreWrong: {
        B: "The handle supports control.",
        C: "Drilling into live cables is dangerous.",
        D: "A loose bit can fly out or damage work."
      }
    }
  },
  {
    id: 36,
    topic: "Illumination Calculation",
    question: "A lamp has luminous intensity of 128 cd and is 4 m above a table. Calculate illumination. Use E = I/d².",
    options: { A: "8 lux", B: "32 lux", C: "512 lux", D: "16 lux" },
    correctAnswer: "A",
    solution: {
      classNote: "E = I/d² = 128/4² = 128/16 = 8 lux.",
      examTrapAlert: "Square the distance before division.",
      whyOtherOptionsAreWrong: {
        B: "This divides by 4 instead of 16.",
        C: "This wrongly multiplies.",
        D: "This uses the wrong denominator."
      }
    }
  },
  {
    id: 37,
    topic: "Ohm's Law",
    question: "A 240 V heater takes 10 A. Its resistance is:",
    options: { A: "24 Ω", B: "2400 Ω", C: "250 Ω", D: "0.04 Ω" },
    correctAnswer: "A",
    solution: {
      classNote: "R = V/I = 240/10 = 24 Ω.",
      examTrapAlert: "Resistance equals voltage divided by current.",
      whyOtherOptionsAreWrong: {
        B: "This multiplies voltage and current.",
        C: "Incorrect division.",
        D: "This is too small for the given values."
      }
    }
  },
  {
    id: 38,
    topic: "Power Calculation",
    question: "A load connected to 230 V draws 5 A. The power is:",
    options: { A: "1150 W", B: "46 W", C: "235 W", D: "225 W" },
    correctAnswer: "A",
    solution: {
      classNote: "P = VI = 230 × 5 = 1150 W.",
      examTrapAlert: "For simple single-phase power questions, multiply V by I.",
      whyOtherOptionsAreWrong: {
        B: "This divides voltage by current.",
        C: "This adds values wrongly.",
        D: "This subtracts values wrongly."
      }
    }
  },
  {
    id: 39,
    topic: "Conduit Work",
    question: "Which tool is used for bending PVC conduit without flattening it?",
    options: { A: "bending spring", B: "hydrometer", C: "photometer", D: "tachometer" },
    correctAnswer: "A",
    solution: {
      classNote: "A bending spring supports PVC conduit internally during bending.",
      examTrapAlert: "PVC conduit bending = bending spring.",
      whyOtherOptionsAreWrong: {
        B: "Hydrometer measures specific gravity.",
        C: "Photometer measures illumination.",
        D: "Tachometer measures speed."
      }
    }
  },
  {
    id: 40,
    topic: "Conduit Work",
    question: "A conduit coupler is used to:",
    options: { A: "join two conduit lengths", B: "measure voltage", C: "hold a lamp", D: "test battery acid" },
    correctAnswer: "A",
    solution: {
      classNote: "A coupler connects two conduit pipes together.",
      examTrapAlert: "Coupler means joining.",
      whyOtherOptionsAreWrong: {
        B: "A voltmeter measures voltage.",
        C: "A lamp holder holds a lamp.",
        D: "A hydrometer tests electrolyte specific gravity."
      }
    }
  },
  {
    id: 41,
    topic: "Testing",
    question: "Which instrument is used for insulation resistance testing?",
    options: { A: "megger", B: "photometer", C: "tachometer", D: "spirit level" },
    correctAnswer: "A",
    solution: {
      classNote: "A megger measures insulation resistance between conductors and between conductor and earth.",
      examTrapAlert: "Megger = insulation resistance tester.",
      whyOtherOptionsAreWrong: {
        B: "Photometer measures illumination.",
        C: "Tachometer measures speed.",
        D: "Spirit level checks alignment."
      }
    }
  },
  {
    id: 42,
    topic: "Testing",
    question: "A polarity test is carried out to confirm that:",
    options: {
      A: "switches and fuses are in the live conductor",
      B: "the wall colour is correct",
      C: "the lamp shade is clean",
      D: "the conduit is painted"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Polarity testing ensures live and neutral are correctly connected and that control/protection is on the live conductor.",
      examTrapAlert: "Polarity = correct live/neutral connection.",
      whyOtherOptionsAreWrong: {
        B: "Wall colour is irrelevant.",
        C: "Lamp shade cleanliness is not polarity.",
        D: "Painting conduit is not polarity testing."
      }
    }
  },
  {
    id: 43,
    topic: "Protective Devices",
    question: "A miniature circuit breaker protects a circuit mainly against:",
    options: { A: "overload and short circuit", B: "low room brightness", C: "dust on wall", D: "paint failure" },
    correctAnswer: "A",
    solution: {
      classNote: "An MCB disconnects the circuit during overload or short circuit conditions.",
      examTrapAlert: "MCB = automatic overcurrent protection.",
      whyOtherOptionsAreWrong: {
        B: "Brightness is a lighting issue.",
        C: "Dust is not the direct operating condition.",
        D: "Paint failure is unrelated."
      }
    }
  },
  {
    id: 44,
    topic: "Earthing",
    question: "A good earthing system should have:",
    options: { A: "low resistance to earth", B: "broken earth conductor", C: "no bonding", D: "loose terminal only" },
    correctAnswer: "A",
    solution: {
      classNote: "A good earthing system provides a low-resistance path for fault current.",
      examTrapAlert: "Low earth resistance is desirable.",
      whyOtherOptionsAreWrong: {
        B: "A broken earth conductor is dangerous.",
        C: "Bonding improves safety.",
        D: "Loose terminals are unsafe."
      }
    }
  },
  {
    id: 45,
    topic: "Maintenance",
    question: "Preventive maintenance is carried out:",
    options: { A: "before breakdown occurs", B: "only after total failure", C: "to damage equipment", D: "to remove all protection" },
    correctAnswer: "A",
    solution: {
      classNote: "Preventive maintenance keeps equipment serviceable and reduces sudden failure.",
      examTrapAlert: "Preventive = before failure.",
      whyOtherOptionsAreWrong: {
        B: "That describes corrective maintenance.",
        C: "Maintenance prevents damage.",
        D: "Protection must remain."
      }
    }
  },
  {
    id: 46,
    topic: "Business Costing",
    question: "If 6 socket outlets cost ₦1,200 each, the total cost is:",
    options: { A: "₦7,200", B: "₦1,206", C: "₦6,000", D: "₦12,000" },
    correctAnswer: "A",
    solution: {
      classNote: "Total cost = quantity × unit price = 6 × ₦1,200 = ₦7,200.",
      examTrapAlert: "Multiply quantity by unit price.",
      whyOtherOptionsAreWrong: {
        B: "This wrongly adds.",
        C: "This uses wrong multiplication.",
        D: "This assumes ten units."
      }
    }
  },
  {
    id: 47,
    topic: "Entrepreneurship",
    question: "Which is a source of funds for starting an electrical installation business?",
    options: { A: "bank loan", B: "burnt fuse", C: "loose terminal", D: "broken lamp" },
    correctAnswer: "A",
    solution: {
      classNote: "Sources of funds include personal savings, bank loans, cooperative loans, grants and family support.",
      examTrapAlert: "Funding sources are financial.",
      whyOtherOptionsAreWrong: {
        B: "A burnt fuse is not a source of finance.",
        C: "A loose terminal is a fault.",
        D: "A broken lamp is not capital."
      }
    }
  },
  {
    id: 48,
    topic: "Solar PV Safety",
    question: "Before working on a PV inverter circuit, the technician should first:",
    options: { A: "isolate AC and DC supplies", B: "short the battery", C: "wet the terminals", D: "remove warning labels" },
    correctAnswer: "A",
    solution: {
      classNote: "PV systems may have live DC from panels and AC from inverter/grid. Both sides must be isolated safely.",
      examTrapAlert: "PV systems can remain live even when one side is off.",
      whyOtherOptionsAreWrong: {
        B: "Shorting a battery is dangerous.",
        C: "Water increases shock risk.",
        D: "Warning labels improve safety."
      }
    }
  },
  {
    id: 49,
    topic: "Solar PV Maintenance",
    question: "Dust on a solar panel should be removed because it:",
    options: {
      A: "reduces light reaching the cells",
      B: "increases output always",
      C: "replaces the battery",
      D: "acts as a charge controller"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Dust shades the panel surface and reduces solar energy conversion.",
      examTrapAlert: "Clean panels receive more sunlight.",
      whyOtherOptionsAreWrong: {
        B: "Dust usually reduces output.",
        C: "Dust cannot replace a battery.",
        D: "A charge controller is an electrical device."
      }
    }
  },
  {
    id: 50,
    topic: "General WAEC Revision",
    question: "Which option best represents standard electrical installation practice?",
    options: {
      A: "correct materials, safe isolation, proper testing and protection",
      B: "wet hands, damaged tools and exposed live joints",
      C: "no earthing, no testing and undersized cables",
      D: "loose terminals and overloaded circuits"
    },
    correctAnswer: "A",
    solution: {
      classNote: "Good installation practice requires correct tools and materials, safe isolation, proper wiring, earthing, protection, inspection and testing.",
      examTrapAlert: "WAEC objective answers usually favour safety, standards and correct procedure.",
      whyOtherOptionsAreWrong: {
        B: "These are unsafe practices.",
        C: "Earthing, testing and correct cable sizing are necessary.",
        D: "Loose terminals and overloads cause faults."
      }
    }
  }
],
},

essayAndPractical: {
    test1: [
         {
      id: 1,
      section: "Essay and Practical",
      title: "Maintenance, Conduit Boxes and Two-Way Switching",
      instructions: "Answer all parts. Draw neatly and label correctly where required.",
      question: {
        sequence: [
          { type: "text", label: "a", content: "Explain preventive maintenance and corrective maintenance." },
          { type: "text", label: "b", content: "List four procedures for preventive maintenance of electrical machines and equipment." },
          { type: "text", label: "c", content: "State the use of each of the following conduit boxes: End box, 4-way box, 3-way box, 2-way box, and back-entry box." },
          { type: "text", label: "d", content: "With the aid of a well labelled diagram, illustrate the wiring diagram of a point of lamp controlled independently by two 2-way switches." },
          { type: "text", label: "e(i)", content: "What is single phasing with reference to a three-phase motor?" },
          { type: "text", label: "e(ii)", content: "List two types of earth leakage circuit breaker." },
          { type: "text", label: "e(iii)", content: "Give four reasons for installing protective devices." }
        ]
      },
      diagrams: {
        questionSequence: [],
        solutionSequence: [
          { after: "d", path: "assets/solarpv/essay/test1/solution1d.png", caption: "Two-way switching control diagram." }
        ]
      },
      answerGuide: {
        sequence: [
          {
            type: "text",
            label: "a",
            content: {
              preventiveMaintenance: "Preventive maintenance is the regular maintenance carried out on a working machine or equipment in order to keep it serviceable and prevent complete breakdown.",
              correctiveMaintenance: "Corrective maintenance is the maintenance carried out on a faulty or broken-down machine, device, or equipment in order to restore it to proper working condition."
            }
          },
          {
            type: "text",
            label: "b",
            content: [
              "Planning",
              "Inspection",
              "Cleaning",
              "Tightening",
              "Lubricating / oiling / greasing",
              "Troubleshooting",
              "Covering"
            ]
          },
          {
            type: "text",
            label: "c",
            content: {
              endBox: "Used at the end of a conduit run or at a lamp holder base.",
              fourWayBox: "Used to branch or link conduits in four different directions.",
              threeWayBox: "Used to branch or link conduits in three different directions.",
              twoWayBox: "Used to branch or link conduits in two different directions.",
              backEntryBox: "Used for lighting or ceiling-fan final sub-circuit connection."
            }
          },
          {
            type: "diagram",
            label: "d",
            path: "assets/solarpv/essay/test1/solution1d.png",
            caption: "Correct arrangement showing lamp controlled independently by two 2-way switches."
          },
          {
            type: "text",
            label: "e(i)",
            content: "Single phasing is the effect produced when an open circuit occurs in one of the lines or phase conductors supplying a three-phase motor."
          },
          {
            type: "text",
            label: "e(ii)",
            content: [
              "Voltage-operated earth leakage circuit breaker",
              "Current-operated earth leakage circuit breaker"
            ]
          },
          {
            type: "text",
            label: "e(iii)",
            content: [
              "To prevent earth leakage",
              "To prevent electric shock",
              "To prevent excess current",
              "To prevent low voltage damage",
              "To prevent damage by fire",
              "To maintain continuity of supply"
            ]
          }
        ]
      }
    },

    {
      id: 2,
      section: "Essay and Practical",
      title: "D.C. Machines and Induction Motors",
      instructions: "Answer all parts using standard electrical machine terminology.",
      question: {
        sequence: [
          { type: "text", label: "a(i)", content: "Mention two parts of a d.c. machine." },
          { type: "text", label: "a(ii)", content: "What name is given to the rotating part of a d.c. machine?" },
          { type: "text", label: "a(iii)", content: "Explain briefly why series d.c. generator is used as a booster." },
          { type: "text", label: "b(i)", content: "List three types of d.c. generators." },
          { type: "text", label: "b(ii)", content: "Explain briefly the meaning of back e.m.f. in d.c. motors." },
          { type: "text", label: "b(iii)", content: "State two methods of controlling the speed of d.c. motors." },
          { type: "text", label: "b(iv)", content: "Why is the starting current of d.c. motors dangerous to motors?" },
          { type: "text", label: "b(v)", content: "State one method of reducing starting current in d.c. motors." },
          { type: "text", label: "c(i)", content: "List the two types of induction motors." },
          { type: "text", label: "c(ii)", content: "Mention any two types of starter used for starting induction motors." },
          { type: "text", label: "c(iii)", content: "State the best method of reversing a three-phase induction motor." },
          { type: "text", label: "d(i)", content: "What type of machine enclosure is required to be installed in a sawmill? Give a reason for your answer." },
          { type: "text", label: "d(ii)", content: "State two advantages of using flexible conduit for motor connections." },
          { type: "text", label: "d(iii)", content: "Give the test that can be used to detect earth fault on a neutral conductor." }
        ]
      },
      diagrams: {
        questionSequence: [],
        solutionSequence: []
      },
      answerGuide: {
        sequence: [
          {
            type: "text",
            label: "a(i)",
            content: [
              "Field winding",
              "Armature winding",
              "Interpole",
              "Commutator",
              "Brushes",
              "Pole shoe",
              "Shaft",
              "Brush holder",
              "Main frame"
            ]
          },
          { type: "text", label: "a(ii)", content: "Armature." },
          {
            type: "text",
            label: "a(iii)",
            content: "A series d.c. generator is used as a booster because its terminal voltage increases with increase in load current. Its output voltage depends on the load applied."
          },
          {
            type: "text",
            label: "b(i)",
            content: [
              "Series-wound generator",
              "Shunt-wound generator",
              "Compound generator",
              "Self-excited generator",
              "Separately excited generator"
            ]
          },
          {
            type: "text",
            label: "b(ii)",
            content: "Back e.m.f. is the e.m.f. generated in the armature conductors as they cut the magnetic flux of the main field while the motor is running."
          },
          {
            type: "text",
            label: "b(iii)",
            content: [
              "By varying the armature voltage",
              "By varying the strength of the magnetic field"
            ]
          },
          {
            type: "text",
            label: "b(iv)",
            content: "The starting current of a d.c. motor is dangerous because, if not limited, it becomes very large and can damage or destroy the motor."
          },
          {
            type: "text",
            label: "b(v)",
            content: [
              "By connecting a rheostat or variable resistor in series with the armature",
              "By using a face-plate starter"
            ]
          },
          {
            type: "text",
            label: "c(i)",
            content: [
              "Squirrel-cage induction motor",
              "Wound-rotor induction motor"
            ]
          },
          {
            type: "text",
            label: "c(ii)",
            content: [
              "Direct-on-line starter",
              "Star-delta starter",
              "Rotor-resistance starter",
              "Auto-transformer starter",
              "Primary-resistance starter"
            ]
          },
          {
            type: "text",
            label: "c(iii)",
            content: "By interchanging any two of the supply lines."
          },
          {
            type: "text",
            label: "d(i)",
            content: {
              enclosure: "Totally enclosed machine enclosure.",
              reason: "It protects the rotating parts of the motor against dust and particles commonly found in a sawmill."
            }
          },
          {
            type: "text",
            label: "d(ii)",
            content: [
              "It prevents transmission of vibration to the shaft",
              "It absorbs impact of loads on the shaft",
              "It makes motor alignment easier"
            ]
          },
          {
            type: "text",
            label: "d(iii)",
            content: "Earth insulation resistance test."
          }
        ]
      }
    },

    {
      id: 3,
      section: "Essay and Practical",
      title: "Electrical Cells, Supply Sequence and Business Funding",
      instructions: "Draw neatly and label correctly where required.",
      question: {
        sequence: [
          { type: "text", label: "a(i)", content: "Define electrical cell." },
          { type: "text", label: "a(ii)", content: "State the two types of electrical cells." },
          { type: "text", label: "a(iii)", content: "Draw and label a typical simple cell." },
          { type: "diagram", label: "a(iii)", path: "assets/solarpv/essay/test1/solution3ai.png", caption: "Reference drawing position for simple cell." },
          { type: "text", label: "b", content: "Sketch a line diagram showing the sequence of supply from the service cable of supply authority to a consumer’s final sub-circuit." },
          { type: "diagram", label: "b", path: "assets/solarpv/essay/test1/solution3b.png", caption: "Reference position for sequence of supply diagram." },
          { type: "text", label: "c(i)", content: "List five possible sources of fund for small business take-off." },
          { type: "text", label: "c(ii)", content: "Explain briefly any two sources of fund listed." }
        ]
      },
      diagrams: {
        questionSequence: [],
        solutionSequence: [
          { after: "a(iii)", path: "assets/solarpv/essay/test1/solution3ai.png", caption: "Simple cell with labels." },
          { after: "b", path: "assets/solarpv/essay/test1/solution3b.png", caption: "Sequence of supply from service cable to final sub-circuit." }
        ]
      },
      answerGuide: {
        sequence: [
          {
            type: "text",
            label: "a(i)",
            content: "An electrical cell is a device that converts chemical energy into electrical energy."
          },
          {
            type: "text",
            label: "a(ii)",
            content: [
              "Primary cell",
              "Secondary cell"
            ]
          },
          {
            type: "diagram",
            label: "a(iii)",
            path: "assets/solarpv/essay/test1/solution3ai.png",
            caption: "Typical simple cell showing carbon plate, zinc plate, electrolyte, and container."
          },
          {
            type: "diagram",
            label: "b",
            path: "assets/solarpv/essay/test1/solution3b.png",
            caption: "Sequence: service cable → service fuse → meter → consumer’s main switch → main distribution fuse board → final sub-circuit."
          },
          {
            type: "text",
            label: "c(i)",
            content: [
              "Personal savings",
              "Loans from friends, family, or relatives",
              "Trade credit",
              "Loans from banks",
              "Loans from cooperative societies",
              "Bank overdraft",
              "Government grants",
              "Government loans",
              "NGO grants"
            ]
          },
          {
            type: "text",
            label: "c(ii)",
            content: [
              "Personal savings: The entrepreneur can use personal income or previous savings as initial capital.",
              "Loans from friends, family, or relatives: Money or valuables may be borrowed and repaid later, with or without interest.",
              "Trade credit: Goods may be obtained from suppliers on credit and payment made later.",
              "Loans from banks: Capital is borrowed from a bank or financial institution and repaid later.",
              "Loans from cooperative societies: Funds are borrowed from a cooperative and repaid later.",
              "Bank overdraft: The bank permits withdrawal above account balance for later repayment.",
              "Government grant: Financial support given by government without repayment.",
              "Government loan: Capital supplied by government for later repayment.",
              "NGO grant: Support received from NGOs without repayment."
            ]
          }
        ]
      }
    },

    {
      id: 4,
      section: "Essay and Practical",
      title: "Living Room Surface Wiring Layout",
      instructions: "Study the electrical layout carefully before answering.",
      question: {
        sequence: [
          { type: "text", label: "stem", content: "A surface wiring system is to be used for the installation shown below." },
          { type: "diagram", label: "layout", path: "assets/solarpv/essay/test1/question4.png", caption: "Electrical layout of the living room." },
          { type: "text", label: "a", content: "Prepare a key for the layout." },
          { type: "text", label: "b", content: "List the quantities of each of the fittings on the layout." },
          { type: "text", label: "c", content: "Sketch a labelled circuit diagram showing how the lamps in the layout can be controlled independently in parallel." },
          { type: "text", label: "d(i)", content: "Mention the instrument required for carrying out insulation resistance test for the installation." },
          { type: "text", label: "d(ii)", content: "State the minimum acceptable value for insulation resistance." },
          { type: "text", label: "e", content: "State the maximum height specified by IEE regulations from finished floor level for switches, 13A sockets, and 15A sockets." },
          { type: "text", label: "f", content: "State two precautions needed for proper electrical installation in the room." }
        ]
      },
      diagrams: {
        questionSequence: [
          { at: "layout", path: "assets/solarpv/essay/test1/question4.png", caption: "Question diagram." }
        ],
        solutionSequence: [
          { after: "a", path: "assets/solarpv/essay/test1/solution4a.png", caption: "Key to symbols used in the layout." },
          { after: "c", path: "assets/solarpv/essay/test1/solution4b.png", caption: "Parallel lamp-control circuit using two-way switches." }
        ]
      },
      answerGuide: {
        sequence: [
          {
            type: "diagram",
            label: "layout",
            path: "assets/solarpv/essay/test1/question4.png",
            caption: "Living room layout to be interpreted."
          },
          {
            type: "diagram",
            label: "a",
            path: "assets/solarpv/essay/test1/solution4a.png",
            caption: "Key showing 15A socket, 13A socket, wall bracket, ceiling fan, ceiling fan regulator, and two-way switch."
          },
          {
            type: "text",
            label: "b",
            content: [
              "15A socket - 1",
              "13A socket - 2",
              "Wall bracket - 2",
              "Ceiling fan - 1",
              "Ceiling fan regulator - 1",
              "Two-way switches - 2"
            ]
          },
          {
            type: "diagram",
            label: "c",
            path: "assets/solarpv/essay/test1/solution4b.png",
            caption: "Correct parallel control arrangement for the lamps."
          },
          {
            type: "text",
            label: "d(i)",
            content: "Megger tester / insulation resistance tester."
          },
          {
            type: "text",
            label: "d(ii)",
            content: "0.5 megohm minimum acceptable insulation resistance."
          },
          {
            type: "text",
            label: "e",
            content: {
              switches: "1200 mm - 1500 mm from finished floor level",
              socket13A: "450 mm - 500 mm from finished floor level",
              socket15A: "450 mm - 500 mm from finished floor level"
            }
          },
          {
            type: "text",
            label: "f",
            content: [
              "Tighten all connector terminals and avoid partial contact",
              "Ensure proper seating of fittings",
              "Ensure fittings are connected to the correct polarity",
              "Ensure fittings are properly aligned",
              "Ensure neatness of finished work",
              "Confirm conductors are not live before testing",
              "Use the correct tools for each task",
              "Avoid naked conductors",
              "Ensure good insulation resistance",
              "Ensure effective earthing"
            ]
          }
        ]
      }
    },

    {
      id: 5,
      section: "Essay and Practical",
      title: "Domestic Ring Circuit and Fluorescent Lamp Faults",
      instructions: "Answer all parts clearly and use correct circuit terminology.",
      question: {
        sequence: [
          { type: "text", label: "a(i)", content: "With the aid of a well labelled diagram, sketch a domestic ring circuit with 9 No. 13A socket outlets showing the recommended number of spurs." },
          { type: "text", label: "a(ii)", content: "What is the fuse rating for the circuit?" },
          { type: "text", label: "a(iii)", content: "Give the standard cable size required for this installation." },
          { type: "text", label: "a(iv)", content: "What is the procedure for determining the number of spurs?" },
          { type: "text", label: "b(i)", content: "Define domestic ring circuit as specified in the IEE regulations." },
          { type: "text", label: "b(ii)", content: "State three requirements of the IEE regulations on domestic ring circuits." },
          { type: "text", label: "c", content: "Copy and complete the table of faults in fluorescent lamp circuits." },
          { type: "diagram", label: "c", path: "assets/solarpv/essay/test1/question5c.png", caption: "Question table for fluorescent lamp faults." },
          { type: "text", label: "d(i)", content: "Give one reason why a capacitor is connected between fluorescent lamp terminals." },
          { type: "text", label: "d(ii)", content: "State two reasons why sodium lamps are used for street lighting." }
        ]
      },
      diagrams: {
        questionSequence: [
          { at: "c", path: "assets/solarpv/essay/test1/question5c.png", caption: "Incomplete fluorescent lamp fault table." }
        ],
        solutionSequence: [
          { after: "a(i)", path: "assets/solarpv/essay/test1/solution5ai.png", caption: "Domestic ring circuit with socket outlets and spurs." },
          { after: "c", path: "assets/solarpv/essay/test1/solution5c.png", caption: "Completed table of fluorescent lamp faults and causes." }
        ]
      },
      answerGuide: {
        sequence: [
          {
            type: "diagram",
            label: "a(i)",
            path: "assets/solarpv/essay/test1/solution5ai.png",
            caption: "Ring circuit showing 9 socket outlets and recommended spurs."
          },
          { type: "text", label: "a(ii)", content: "30A." },
          { type: "text", label: "a(iii)", content: "3 × 2.5 mm² cable (2.5 mm² acceptable)." },
          { type: "text", label: "a(iv)", content: "Determine the number of spurs by dividing the total number of socket outlets by three." },
          {
            type: "text",
            label: "b(i)",
            content: "A domestic ring circuit is a final sub-circuit in which the current-carrying and earth-continuity conductors are connected in the form of a loop, both ends of which are connected to a single way in a distribution fuse board or its equivalent."
          },
          {
            type: "text",
            label: "b(ii)",
            content: [
              "Minimum cross-sectional area of 2.5 mm² for PVC or TRS cable",
              "Unlimited number of socket outlets allowed for floor area under 100 m²",
              "Spurs should not be more than half the number of socket outlets on the ring circuit",
              "Fixed appliances must be protected by a local fuse",
              "A fused 13A plug should be used at socket outlets supplying portable appliances",
              "A 30A fuse should be used to protect the ring circuit"
            ]
          },
          {
            type: "diagram",
            label: "c(question)",
            path: "assets/solarpv/essay/test1/question5c.png",
            caption: "Original fault table position."
          },
          {
            type: "diagram",
            label: "c(answer)",
            path: "assets/solarpv/essay/test1/solution5c.png",
            caption: "Completed fluorescent lamp faults table."
          },
          {
            type: "text",
            label: "c",
            content: [
              "Fuse blows when lamp is switched on → Short circuit in the wiring",
              "Lamp appears dead when switched on → No power supply / broken tube electrode / faulty starter / dead tube / dead choke",
              "Lamp makes repeated effort to start → Aging lamp / low voltage / faulty starter",
              "Lamp does not light but electrodes glow continuously → Faulty starter / faulty capacitor / aging tube / low voltage"
            ]
          },
          {
            type: "text",
            label: "d(i)",
            content: [
              "To improve the power factor of the lamp",
              "To suppress radio-frequency interference"
            ]
          },
          {
            type: "text",
            label: "d(ii)",
            content: [
              "It strikes immediately when switched on",
              "It has warning effect",
              "It is very bright"
            ]
          }
        ]
      }
    }
  ],

  test2: [
  {
    id: 1,
    section: "Essay and Practical",
    title: "Workshop Safety, Two Lamps in Parallel, Surface Wiring and Earthing",
    instructions: "Answer all parts. Draw neatly and label correctly where required.",
    question: {
      sequence: [
        { type: "text", label: "a(i)", content: "List four sources of danger to an electrician in an electrical workshop." },
        { type: "text", label: "a(ii)", content: "State two causes of electric shock." },
        { type: "text", label: "a(iii)", content: "State three procedures for rescuing a victim of electric shock." },
        { type: "text", label: "b", content: "Draw a well-labelled diagram to illustrate the wiring of two points of light in parallel, controlled by a one-way switch." },
        { type: "text", label: "c", content: "List five tools used for surface wiring in electrical installation work." },
        { type: "text", label: "d(i)", content: "Define earthing." },
        { type: "text", label: "d(ii)", content: "Define earth electrode." },
        { type: "text", label: "d(iii)", content: "Calculate the current flowing through a circuit of voltage 12 V and resistance 3 Ω." }
      ]
    },
    diagrams: {
      questionSequence: [],
      solutionSequence: [
        { after: "b", path: "assets/solarpv/essay/test2/solution1b.png", caption: "Two points of light connected in parallel and controlled by one one-way switch." }
      ]
    },
    answerGuide: {
      sequence: [
        {
          type: "text",
          label: "a(i)",
          content: [
            "Working on live conductors",
            "Damaged insulation or bare conductors",
            "Poor or broken earth connection",
            "Use of wrong or non-insulated tools",
            "Water, chemicals, or wet working area",
            "Overloading of circuits",
            "Moving machinery",
            "Poor ventilation or poor illumination",
            "Slippery floor",
            "Horseplay in the workshop"
          ]
        },
        {
          type: "text",
          label: "a(ii)",
          content: [
            "Wet hands while touching electrical equipment",
            "Walking barefooted on a conductive floor",
            "Frayed cables or badly made cable joints",
            "Uninsulated or exposed live connections",
            "Poor or broken earth connection",
            "Unearthed socket outlets or plugs"
          ]
        },
        {
          type: "text",
          label: "a(iii)",
          content: [
            "Switch off or isolate the supply before touching the victim.",
            "If the supply cannot be switched off immediately, pull the victim away using dry insulating material or by the clothing.",
            "Remove any obstruction to breathing.",
            "Administer artificial respiration where necessary.",
            "Send for medical help immediately."
          ]
        },
        {
          type: "diagram",
          label: "b",
          path: "assets/solarpv/essay/test2/solution1b.png",
          caption: "Correct parallel connection of two lamps controlled by a one-way switch."
        },
        {
          type: "text",
          label: "b(note)",
          content: "In the diagram, the lamps L1 and L2 are connected in parallel so that each lamp receives the supply voltage independently. The switch is connected in the live conductor to control both lamps safely."
        },
        {
          type: "text",
          label: "c",
          content: [
            "Hammer",
            "Knife",
            "Pliers",
            "Screwdriver",
            "Measuring tape",
            "Neon tester or test lamp",
            "Cable stripper",
            "Chisel",
            "Saw",
            "Raw plug",
            "Gimlet",
            "Plumb line"
          ]
        },
        {
          type: "text",
          label: "d(i)",
          content: "Earthing is the connection of an electrical installation or exposed metallic parts of equipment to the general mass of the earth for safety."
        },
        {
          type: "text",
          label: "d(ii)",
          content: "An earth electrode is a metal rod, plate, or conductor buried in the ground and connected to the earthing lead to provide effective connection with the general mass of the earth."
        },
        {
          type: "text",
          label: "d(iii)",
          content: "Using Ohm’s law, I = V/R = 12/3 = 4 A. Therefore, the current flowing in the circuit is 4 amperes."
        }
      ]
    }
  },

  {
    id: 2,
    section: "Essay and Practical",
    title: "Illumination, Metal Conduit Threading and Entrepreneurship",
    instructions: "Show all calculations clearly and use correct units.",
    question: {
      sequence: [
        { type: "text", label: "a(i)", content: "Define illumination." },
        { type: "text", label: "a(ii)", content: "List three factors that affect the illumination of a room." },
        { type: "text", label: "a(iii)", content: "Calculate the illumination falling on a plane 4 m vertically below a point light source of 128 cd." },
        { type: "text", label: "b(i)", content: "State two types of conduit gauge." },
        { type: "text", label: "b(ii)", content: "Outline five steps in the procedure for threading metal conduit." },
        { type: "text", label: "b(iii)", content: "List four types of saddles used in metal conduit work." },
        { type: "text", label: "c(i)", content: "Define entrepreneurship." },
        { type: "text", label: "c(ii)", content: "State four ways of sourcing funds to establish an electrical workshop." }
      ]
    },
    diagrams: {
      questionSequence: [],
      solutionSequence: []
    },
    answerGuide: {
      sequence: [
        {
          type: "text",
          label: "a(i)",
          content: "Illumination is the density of luminous flux falling on a working plane or surface. It is measured in lux."
        },
        {
          type: "text",
          label: "a(ii)",
          content: [
            "Light output from the lamp",
            "Type of lamp used",
            "Height of the lamp or fitting",
            "Spacing of the fittings",
            "Floor area or working-plane area of the room",
            "Colour of the wall and ceiling",
            "Cleanliness of fittings and room surfaces"
          ]
        },
        {
          type: "text",
          label: "a(iii)",
          content: "Using E = I/d², where I = 128 cd and d = 4 m: E = 128/4² = 128/16 = 8 lux. Therefore, the illumination is 8 lux."
        },
        {
          type: "text",
          label: "b(i)",
          content: [
            "Light gauge conduit",
            "Heavy gauge conduit"
          ]
        },
        {
          type: "text",
          label: "b(ii)",
          content: [
            "Measure the length of conduit to be threaded.",
            "Cut the metal conduit to the required length.",
            "File or ream the end of the conduit to remove burrs.",
            "Lubricate the part to be threaded.",
            "Fit the stock and dies onto the conduit.",
            "Start threading carefully.",
            "Reverse the threading tool halfway to clear chips.",
            "Clean the thread after completion."
          ]
        },
        {
          type: "text",
          label: "b(iii)",
          content: [
            "Spacer bar saddle",
            "Distance bar saddle",
            "Multiple saddle",
            "Girder clip",
            "Hospital saddle",
            "Crampet"
          ]
        },
        {
          type: "text",
          label: "c(i)",
          content: "Entrepreneurship is the ability and willingness to develop, organize, and manage a business venture, together with its risks, in order to make profit."
        },
        {
          type: "text",
          label: "c(ii)",
          content: [
            "Personal savings",
            "Loans from friends or relatives",
            "Bank loans",
            "Cooperative loans",
            "Government grants",
            "NGO grants",
            "Trade credit",
            "Bank overdraft",
            "Thrift contributions"
          ]
        }
      ]
    }
  },

  {
    id: 3,
    section: "Essay and Practical",
    title: "Battery Charging, Cells, Measuring Instruments and BS Symbols",
    instructions: "Answer all parts. Use the diagrams provided where indicated.",
    question: {
      sequence: [
        { type: "text", label: "a(i)", content: "State four precautions to be taken when charging a battery." },
        { type: "text", label: "a(ii)", content: "Give two differences between primary and secondary cells." },
        { type: "diagram", label: "a(ii)", path: "assets/solarpv/essay/test2/question3.png", caption: "Primary and secondary cell comparison table." },
        { type: "text", label: "a(iii)", content: "Explain briefly how a damaged socket can be replaced." },
        { type: "text", label: "b(i)", content: "List four measuring instruments used in an electrical workshop." },
        { type: "text", label: "b(ii)", content: "State one use of any one of the measuring instruments listed." },
        { type: "text", label: "b(iii)", content: "Explain briefly how electric current can be measured in a circuit." },
        { type: "text", label: "c", content: "Sketch the British Standard graphical symbols for: fixed resistor, a.c. motor, fuse, variable inductor, and electric bell." }
      ]
    },
    diagrams: {
      questionSequence: [
        { at: "a(ii)", path: "assets/solarpv/essay/test2/question3.png", caption: "Question table comparing primary and secondary cells." }
      ],
      solutionSequence: [
        { after: "a(ii)", path: "assets/solarpv/essay/test2/tablesolution2a.png", caption: "Completed comparison of primary and secondary cells." },
        { after: "c", path: "assets/solarpv/essay/test2/solution3c.png", caption: "BS graphical symbols for fixed resistor, a.c. motor, fuse, variable inductor, and electric bell." },
        { after: "c", path: "assets/solarpv/essay/test2/solution3ci.png", caption: "Fixed resistor and variable resistor symbols." },
        { after: "c", path: "assets/solarpv/essay/test2/solution3cii.png", caption: "D.C. motor and A.C. motor symbols." },
        { after: "c", path: "assets/solarpv/essay/test2/solution3ciii.png", caption: "Additional BS symbols used in electrical drawings." },
        { after: "c", path: "assets/solarpv/essay/test2/solution3civ.png", caption: "Fixed and variable inductor symbols." },
        { after: "c", path: "assets/solarpv/essay/test2/solution3cv.png", caption: "Electric bell symbol." }
      ]
    },
    answerGuide: {
      sequence: [
        {
          type: "text",
          label: "a(i)",
          content: [
            "Ensure the battery charging room is well ventilated.",
            "Ensure correct polarity before connecting the charger.",
            "Always add acid to water, not water to acid.",
            "Use protective clothing and hand gloves.",
            "Remove vent plugs before charging.",
            "Do not allow naked light in the charging room.",
            "Switch off the charger before connecting or disconnecting the battery.",
            "Do not use ordinary tap water for topping up the battery."
          ]
        },
        {
          type: "diagram",
          label: "a(ii)",
          path: "assets/solarpv/essay/test2/tablesolution2a.png",
          caption: "Differences between primary and secondary cells."
        },
        {
          type: "text",
          label: "a(ii-note)",
          content: {
            primaryCell: [
              "It is not rechargeable.",
              "It is cheap.",
              "It has short life span.",
              "It has lower voltage.",
              "It has local action and polarization.",
              "It is mostly used for portable appliances."
            ],
            secondaryCell: [
              "It is rechargeable.",
              "It is expensive.",
              "It has longer life span.",
              "It has higher voltage.",
              "It has no local action and no polarization in the same sense.",
              "It is used for less portable or heavier-duty applications."
            ]
          }
        },
        {
          type: "text",
          label: "a(iii)",
          content: [
            "Switch off or isolate the supply.",
            "Unscrew and remove the damaged socket.",
            "Connect the new socket correctly: live to live, neutral to neutral, and earth to earth.",
            "Screw the new socket firmly into position.",
            "Restore the supply and test the socket for correct operation."
          ]
        },
        {
          type: "text",
          label: "b(i)",
          content: [
            "Ammeter",
            "Voltmeter",
            "Ohmmeter",
            "Multimeter",
            "Megger",
            "Tachometer",
            "Photometer",
            "Hydrometer",
            "Wattmeter",
            "Micrometer screw gauge",
            "Standard wire gauge",
            "Measuring tape"
          ]
        },
        {
          type: "text",
          label: "b(ii)",
          content: [
            "Ammeter: used for measuring current.",
            "Voltmeter: used for measuring voltage.",
            "Ohmmeter: used for measuring resistance.",
            "Multimeter: used for measuring voltage, current, and resistance.",
            "Megger: used for measuring insulation resistance.",
            "Photometer: used for measuring illumination.",
            "Hydrometer: used for measuring specific gravity of electrolyte.",
            "Tachometer: used for measuring speed of rotation."
          ]
        },
        {
          type: "text",
          label: "b(iii)",
          content: "To measure electric current, open the circuit at the point where current is to be measured, connect an ammeter in series with the load, select the correct range, energize the circuit, and read the current value from the meter."
        },
        {
          type: "diagram",
          label: "c",
          path: "assets/solarpv/essay/test2/solution3c.png",
          caption: "BS symbols for the listed devices."
        },
        {
          type: "text",
          label: "c-note",
          content: "The fixed resistor is represented by a resistor symbol, the a.c. motor by a motor symbol with a.c. indication, the fuse by a fuse symbol, the variable inductor by an inductor with an arrow, and the electric bell by a bell symbol."
        }
      ]
    }
  },

  {
    id: 4,
    section: "Essay and Practical",
    title: "Threaded Conduit Coupling, Workshop Tools and A.C. Motor Faults",
    instructions: "Study the diagrams carefully and answer all parts.",
    question: {
      sequence: [
        { type: "text", label: "a", content: "The diagram below illustrates two pieces of threaded conduits A and B, a locknut and a socket. Study it and answer the questions that follow." },
        { type: "diagram", label: "a", path: "assets/solarpv/essay/test2/question4a.png", caption: "Threaded conduits, locknut and socket." },
        { type: "text", label: "a(i)", content: "Reproduce the diagram showing the parts coupled together." },
        { type: "text", label: "a(ii)", content: "Where is this type of coupling used?" },
        { type: "text", label: "a(iii)", content: "Why is it important to ensure that the socket is tightened firmly to part B?" },
        { type: "text", label: "b", content: "Study the illustrated electrical workshop tools X, Y and Z." },
        { type: "diagram", label: "b", path: "assets/solarpv/essay/test2/question4b.png", caption: "Electrical workshop tools labelled X, Y and Z." },
        { type: "text", label: "b(i)", content: "Identify X, Y and Z." },
        { type: "text", label: "b(ii)", content: "State one use each of X, Y and Z." },
        { type: "text", label: "b(iii)", content: "Suggest five ways of maintaining electrical tools." },
        { type: "text", label: "c(i)", content: "Identify three possible causes of the fault: a.c. motor fails to start." },
        { type: "text", label: "c(ii)", content: "Identify three possible causes of the fault: a.c. motor overheats while running." }
      ]
    },
    diagrams: {
      questionSequence: [
        { at: "a", path: "assets/solarpv/essay/test2/question4a.png", caption: "Question diagram for conduit coupling." },
        { at: "b", path: "assets/solarpv/essay/test2/question4b.png", caption: "Question diagram for workshop tools." }
      ],
      solutionSequence: [
        { after: "a(i)", path: "assets/solarpv/essay/test2/solutiona1.png", caption: "Correct coupled arrangement of threaded conduits, locknut and socket." }
      ]
    },
    answerGuide: {
      sequence: [
        {
          type: "diagram",
          label: "a(i)",
          path: "assets/solarpv/essay/test2/solutiona1.png",
          caption: "Threaded conduit parts coupled correctly."
        },
        {
          type: "text",
          label: "a(ii)",
          content: "This coupling is used in steel or metal conduit wiring systems."
        },
        {
          type: "text",
          label: "a(iii)",
          content: [
            "To prevent mechanical damage to the conduit.",
            "To prevent the locknut or socket from becoming loose.",
            "To maintain a firm and safe mechanical connection."
          ]
        },
        {
          type: "text",
          label: "b(i)",
          content: {
            X: "Pair of pliers",
            Y: "Screwdriver",
            Z: "Hammer"
          }
        },
        {
          type: "text",
          label: "b(ii)",
          content: {
            X: "Pliers are used for holding, gripping, twisting, cutting, or bending conductors.",
            Y: "A screwdriver is used for driving screws in and out.",
            Z: "A hammer is used for driving nails and striking where required."
          }
        },
        {
          type: "text",
          label: "b(iii)",
          content: [
            "Keep tools in a dry place.",
            "Clean tools after use.",
            "Keep tools in proper boxes, racks, or tool bags.",
            "Use each tool only for the job it is meant for.",
            "Oil, grease, or lubricate moving metal parts.",
            "Sharpen or grind cutting tools when blunt.",
            "Avoid using damaged or non-insulated tools for electrical work."
          ]
        },
        {
          type: "text",
          label: "c(i)",
          content: [
            "Failure of supply or no supply",
            "Short circuit",
            "Open circuit in the control gear",
            "Incorrect setting of over-current release",
            "Faulty centrifugal switch",
            "Open-circuited fuse"
          ]
        },
        {
          type: "text",
          label: "c(ii)",
          content: [
            "Overloading",
            "Single phasing",
            "Short circuit",
            "Worn bearing",
            "Earth fault",
            "Poor ventilation",
            "Incorrect supply voltage"
          ]
        }
      ]
    }
  },

  {
    id: 5,
    section: "Essay and Practical",
    title: "Longitudinal Section of an A.C. Motor, Dismantling and Rewinding",
    instructions: "Study the motor diagram carefully and answer all parts.",
    question: {
      sequence: [
        { type: "text", label: "stem", content: "The diagram below represents the longitudinal section of an a.c. motor. Study it and answer the questions that follow." },
        { type: "diagram", label: "stem", path: "assets/solarpv/essay/test2/question5.png", caption: "Longitudinal section of an a.c. motor." },
        { type: "text", label: "a", content: "Name the parts labelled I, II, III and IV." },
        { type: "text", label: "b", content: "State one function of each of the parts labelled I, II, III and IV." },
        { type: "text", label: "c(i)", content: "Outline three steps to be taken in dismantling the motor." },
        { type: "text", label: "c(ii)", content: "List four tools needed to dismantle the motor." },
        { type: "text", label: "d(i)", content: "What would happen if the part labelled II got burnt?" },
        { type: "text", label: "d(ii)", content: "Outline five steps in the procedure for rewinding a motor." },
        { type: "text", label: "e(i)", content: "Give two differences between an a.c. and a d.c. motor." },
        { type: "text", label: "e(ii)", content: "State two applications of a.c. motors." }
      ]
    },
    diagrams: {
      questionSequence: [
        { at: "stem", path: "assets/solarpv/essay/test2/question5.png", caption: "Question diagram: longitudinal section of an a.c. motor." }
      ],
      solutionSequence: [
        { after: "e(i)", path: "assets/solarpv/essay/test2/solution3cii.png", caption: "Symbolic distinction between d.c. and a.c. motors." }
      ]
    },
    answerGuide: {
      sequence: [
        {
          type: "diagram",
          label: "stem",
          path: "assets/solarpv/essay/test2/question5.png",
          caption: "Longitudinal section of an a.c. motor."
        },
        {
          type: "text",
          label: "a",
          content: {
            I: "Squirrel-cage rotor",
            II: "Stator coil / stator winding",
            III: "Shaft",
            IV: "Feet / bed / base plate"
          }
        },
        {
          type: "text",
          label: "b",
          content: {
            I: "The rotor transmits or develops the rotating force that is delivered to the output shaft.",
            II: "The stator winding receives current and produces the magnetic field or flux.",
            III: "The shaft drives the external load and may also carry bearings or fan parts.",
            IV: "The base or feet support the motor and give it balance during operation."
          }
        },
        {
          type: "text",
          label: "c(i)",
          content: [
            "Mark the two end shields for easy identification during reassembly.",
            "Loosen the bolts or nuts.",
            "Gently tap the shaft from one end using a wooden mallet.",
            "Remove the two end plates carefully.",
            "Arrange the dismantled parts neatly to avoid loss or damage."
          ]
        },
        {
          type: "text",
          label: "c(ii)",
          content: [
            "Centre punch",
            "Spanner",
            "Allen key",
            "Wooden hammer or mallet",
            "Screwdriver",
            "Pliers"
          ]
        },
        {
          type: "text",
          label: "d(i)",
          content: "If the stator winding labelled II gets burnt, the motor will not start, run, or work properly because the magnetic field required for operation will not be produced correctly."
        },
        {
          type: "text",
          label: "d(ii)",
          content: [
            "Take winding data, including connection, span and number of turns.",
            "Measure the cross-sectional area or size of the winding conductor.",
            "Remove the burnt winding.",
            "Wash and clean the stator slots.",
            "Insulate the stator slots.",
            "Wind new coils using a former or winding machine.",
            "Insert the coils into the stator slots.",
            "Connect the coils correctly.",
            "Bind the windings together.",
            "Apply varnish.",
            "Bake or dry the winding.",
            "Test the motor and reassemble it."
          ]
        },
        {
          type: "diagram",
          label: "e(i)",
          path: "assets/solarpv/essay/test2/solution3cii.png",
          caption: "D.C. motor and A.C. motor symbols."
        },
        {
          type: "text",
          label: "e(i-note)",
          content: {
            acMotor: [
              "Uses a.c. current.",
              "Speed can be controlled by varying frequency.",
              "Usually has simpler starting method.",
              "Can start on no load.",
              "Does not normally use brushes and commutator in induction-motor form.",
              "Generally more rugged."
            ],
            dcMotor: [
              "Uses d.c. current.",
              "Speed can be controlled by varying armature current or field current.",
              "Usually has more complicated starting method.",
              "Can start on load.",
              "Has brushes and commutator.",
              "Used where stable or precise operation is required."
            ]
          }
        },
        {
          type: "text",
          label: "e(ii)",
          content: [
            "Saw milling machines",
            "Electric fans",
            "Refrigerator compressors",
            "Air-conditioner compressors",
            "Washing machines",
            "Drilling machines",
            "Grinders"
          ]
        }
      ]
    }
  }
],

test3: [

/* =========================
   QUESTION 1
========================= */
{
  id: 1,
  section: "Essay and Practical",
  title: "Three-Phase Motor Connections",
  instructions: "Study the diagram carefully and answer the questions.",
  question: {
    sequence: [

      {
        type: "diagram",
        label: "Q1 Diagram",
        path: "assets/solarpv/essay/test3/questions4b.png",
        caption: "Three-phase stator winding arrangement."
      },

      {
        type: "text",
        label: "a(i)",
        content: [
          "Identify the device illustrated in the diagram."
        ]
      },
      {
        type: "text",
        label: "a(ii)",
        content: [
          "Name the terminals labelled A1, B1, C1, A2, B2 and C2."
        ]
      },
      {
        type: "text",
        label: "b(i)",
        content: [
          "Redraw the diagram to show STAR connection."
        ]
      },
      {
        type: "text",
        label: "b(ii)",
        content: [
          "Redraw the diagram to show DELTA connection."
        ]
      },
      {
        type: "text",
        label: "c",
        content: [
          "State three methods of starting a three-phase induction motor."
        ]
      }
    ]
  },

  solution: [

    {
      type: "text",
      label: "a(i)",
      content: [
        "A three-phase induction motor stator winding."
      ]
    },

    {
      type: "text",
      label: "a(ii)",
      content: [
        "A1, B1, C1 → start terminals of windings",
        "A2, B2, C2 → end terminals of windings"
      ]
    },

    {
      type: "diagram",
      label: "b(i)",
      path: "assets/solarpv/essay/test3/solution2bi.png",
      caption: "Star connection (all ends joined together)."
    },

    {
      type: "diagram",
      label: "b(ii)",
      path: "assets/solarpv/essay/test3/solution2bii.png",
      caption: "Delta connection (end connected to next start)."
    },

    {
      type: "text",
      label: "c",
      content: [
        "Direct-on-line (DOL) starter",
        "Star-delta starter",
        "Auto-transformer starter"
      ]
    },

    {
      type: "text",
      label: "NOTE",
      content: [
        "KEY CONCEPT: Star connection reduces starting current.",
        "Delta connection provides full power operation."
      ]
    }

  ]
},

/* =========================
   QUESTION 2
========================= */
{
  id: 2,
  section: "Essay and Practical",
  title: "Electrical Symbols and Measurement",
  instructions: "Answer all parts clearly.",
  question: {
    sequence: [

      {
        type: "diagram",
        label: "Q2 Diagram",
        path: "assets/solarpv/essay/test3/solution2di.png",
        caption: "Electrical measuring instrument."
      },

      {
        type: "text",
        label: "a(i)",
        content: [
          "Identify the instrument shown."
        ]
      },
      {
        type: "text",
        label: "a(ii)",
        content: [
          "State two uses of the instrument."
        ]
      },

      {
        type: "diagram",
        label: "b Diagram",
        path: "assets/solarpv/essay/test3/solution2dii.png",
        caption: "Transformer symbol."
      },

      {
        type: "text",
        label: "b",
        content: [
          "Explain the function of the device shown."
        ]
      },

      {
        type: "diagram",
        label: "c Diagram",
        path: "assets/solarpv/essay/test3/solution2diii.png",
        caption: "Fuse and conductor symbol."
      },

      {
        type: "text",
        label: "c",
        content: [
          "State two functions of a fuse in electrical installation."
        ]
      }

    ]
  },

  solution: [

    {
      type: "text",
      label: "a(i)",
      content: [
        "Energy meter (kWh meter)."
      ]
    },

    {
      type: "text",
      label: "a(ii)",
      content: [
        "Measures electrical energy consumption",
        "Used for billing purposes"
      ]
    },

    {
      type: "text",
      label: "b",
      content: [
        "A transformer changes voltage levels (step-up or step-down).",
        "It operates based on electromagnetic induction."
      ]
    },

    {
      type: "text",
      label: "c",
      content: [
        "Protects circuit from overcurrent",
        "Prevents fire and equipment damage"
      ]
    },

    {
      type: "text",
      label: "NOTE",
      content: [
        "KEY RULE: Fuse must be connected in the live wire.",
        "REMEMBER: Transformer does not change frequency."
      ]
    }

  ]
}
,

/* =========================
   QUESTION 3
========================= */
{
  id: 3,
  section: "Essay and Practical",
  title: "Electrical Joints, Cleated Wiring Tools, Insulators and BS Symbols",
  instructions: "Answer all parts. Draw symbols neatly where required.",
  question: {
    sequence: [
      { type: "text", label: "a(i)", content: "List four types of electrical joints." },
      { type: "text", label: "a(ii)", content: "Describe how a tee joint is prepared." },
      { type: "text", label: "b", content: "On the table below, list three electrical hand tools used in cleated wiring and state one use of each." },
      { type: "diagram", label: "b", path: "assets/solarpv/essay/test3/tablequestion2b.png", caption: "Table for tools used in cleated wiring." },
      { type: "text", label: "c", content: "State three characteristics of an insulator." },
      { type: "text", label: "d", content: "Draw the British Standard symbols for: energy meter, transformer, fuse, choice/change-over point, discharge lamp, and wires not connected." }
    ]
  },
  diagrams: {
    questionSequence: [
      { at: "b", path: "assets/solarpv/essay/test3/tablequestion2b.png", caption: "Question table for cleated wiring tools." }
    ],
    solutionSequence: [
      { after: "b", path: "assets/solarpv/essay/test3/tablesolution2b.png", caption: "Completed table of cleated wiring tools and uses." },
      { after: "d", path: "assets/solarpv/essay/test3/solution2di.png", caption: "Energy meter symbol." },
      { after: "d", path: "assets/solarpv/essay/test3/solution2dii.png", caption: "Transformer symbol." },
      { after: "d", path: "assets/solarpv/essay/test3/solution2diii.png", caption: "Fuse symbol." },
      { after: "d", path: "assets/solarpv/essay/test3/solution2dv.png", caption: "Discharge lamp symbol." },
      { after: "d", path: "assets/solarpv/essay/test3/solution2dvi.png", caption: "Connected and not-connected wire symbols." }
    ]
  },
  answerGuide: {
    sequence: [
      {
        type: "text",
        label: "a(i)",
        content: [
          "Tee joint",
          "Married joint",
          "Scarf joint",
          "Britannia joint",
          "Straight-through joint",
          "Telescope joint",
          "Twist joint"
        ]
      },
      {
        type: "text",
        label: "a(ii)",
        content: [
          "Strip the straight conductor to about 70 mm.",
          "Strip the teeing conductor to about 75 mm.",
          "Clean the bare conductors properly.",
          "Unstrand the teeing conductor.",
          "Place the teeing conductor across the straight conductor.",
          "Wind some strands firmly to the right and the remaining strands to the left.",
          "Make the joint tight, neat and mechanically strong.",
          "Solder and insulate the joint where required."
        ]
      },
      {
        type: "diagram",
        label: "b",
        path: "assets/solarpv/essay/test3/tablesolution2b.png",
        caption: "Hand tools used in cleated wiring and their uses."
      },
      {
        type: "text",
        label: "b-note",
        content: [
          "Hammer - used for driving nails.",
          "Screwdriver - used for driving screws.",
          "Combination plier - used for gripping, twisting and joining conductors.",
          "Knife - used for stripping insulation.",
          "Rawl plug tool - used for making holes in walls.",
          "Neon tester - used for detecting presence of voltage.",
          "Spirit level or plumb line - used for levelling.",
          "Measuring tape - used for measuring cable lengths."
        ]
      },
      {
        type: "text",
        label: "c",
        content: [
          "High resistance to current.",
          "Low conductivity.",
          "Cannot easily be soldered.",
          "Not ductile.",
          "High resistance to heat, moisture and chemicals.",
          "Low mechanical strength compared with conductors."
        ]
      },
      {
        type: "diagram",
        label: "d(i)",
        path: "assets/solarpv/essay/test3/solution2di.png",
        caption: "Energy meter symbol."
      },
      {
        type: "diagram",
        label: "d(ii)",
        path: "assets/solarpv/essay/test3/solution2dii.png",
        caption: "Transformer symbol."
      },
      {
        type: "diagram",
        label: "d(iii)",
        path: "assets/solarpv/essay/test3/solution2diii.png",
        caption: "Fuse symbol."
      },
      {
        type: "diagram",
        label: "d(iv)",
        path: "assets/solarpv/essay/test3/solution2dv.png",
        caption: "Discharge lamp symbol."
      },
      {
        type: "diagram",
        label: "d(v)",
        path: "assets/solarpv/essay/test3/solution2dvi.png",
        caption: "Connected and not-connected conductors."
      }
    ]
  }
},

/* =========================
   QUESTION 4
========================= */
{
  id: 4,
  section: "Essay and Practical",
  title: "Preventive Maintenance, Wiring Systems and Business Costing",
  instructions: "Complete the table accurately and show all calculations.",
  question: {
    sequence: [
      { type: "text", label: "a", content: "State five tasks required in carrying out preventive maintenance." },
      { type: "text", label: "b(i)", content: "List three types of wiring systems." },
      { type: "text", label: "b(ii)", content: "State five factors that must be considered in choosing a wiring system." },
      { type: "text", label: "c", content: "The table below shows estimates given to an individual for starting an electrical business. Study it and answer the questions that follow." },
      { type: "diagram", label: "c", path: "assets/solarpv/essay/test3/tablequestion3c.png", caption: "Incomplete estimate table." },
      { type: "text", label: "c(i)", content: "Complete the table." },
      { type: "text", label: "c(ii)", content: "If the individual has ₦50,000 as start-up capital, calculate the amount to be borrowed." },
      { type: "text", label: "c(iii)", content: "State three other sources of funds available to the individual." },
      { type: "text", label: "c(iv)", content: "Name three books the individual would need for the business." }
    ]
  },
  diagrams: {
    questionSequence: [
      { at: "c", path: "assets/solarpv/essay/test3/tablequestion3c.png", caption: "Question table for business costing." }
    ],
    solutionSequence: [
      { after: "c(i)", path: "assets/solarpv/essay/test3/tablesolution3c.png", caption: "Completed business estimate table." }
    ]
  },
  answerGuide: {
    sequence: [
      {
        type: "text",
        label: "a",
        content: [
          "Check and maintain oil level where applicable.",
          "Check and maintain radiator water where applicable.",
          "Check electrolyte level in the battery.",
          "Check and correct partial contacts on battery terminals.",
          "Clean battery terminals.",
          "Check fuel level where applicable.",
          "Apply grease or lubrication.",
          "Inspect terminals and tighten loose connections.",
          "Check for overheating, abnormal noise and vibration."
        ]
      },
      {
        type: "text",
        label: "b(i)",
        content: [
          "Cleated wiring",
          "Conduit wiring",
          "Trunking",
          "Ducting",
          "Surface wiring"
        ]
      },
      {
        type: "text",
        label: "b(ii)",
        content: [
          "Safety",
          "Durability",
          "Appearance or aesthetics",
          "Mechanical protection",
          "Cost",
          "Accessibility",
          "Future extension",
          "Type of supply",
          "Type of building",
          "Expected life span",
          "Type of load"
        ]
      },
      {
        type: "diagram",
        label: "c(i)",
        path: "assets/solarpv/essay/test3/tablesolution3c.png",
        caption: "Completed estimate table with grand total."
      },
      {
        type: "text",
        label: "c(i-note)",
        content: [
          "5 coils of 2.5 mm² cable at ₦3,500 = ₦17,500",
          "5 coils of 1.5 mm² cable at ₦2,000 = ₦10,000",
          "20 pieces of 26 W bulb at ₦800 = ₦16,000",
          "5 pieces of 13 A socket outlet at ₦1,200 = ₦6,000",
          "5 pieces of 15 A socket outlet at ₦1,500 = ₦7,500",
          "10 pieces of 1 gang 1-way switch at ₦250 = ₦2,500",
          "5 pieces of 2 gang 2-way switch at ₦300 = ₦1,500",
          "100 packets of clip at ₦50 = ₦5,000",
          "Grand total = ₦66,000"
        ]
      },
      {
        type: "text",
        label: "c(ii)",
        content: "Amount to be borrowed = ₦66,000 - ₦50,000 = ₦16,000."
      },
      {
        type: "text",
        label: "c(iii)",
        content: [
          "Loan from friends or family",
          "Grant, gift or donation",
          "Personal saving or thrift contribution",
          "Bank loan",
          "Cooperative loan"
        ]
      },
      {
        type: "text",
        label: "c(iv)",
        content: [
          "Sales record book",
          "Stock inventory book",
          "Purchase book",
          "Cash book",
          "Invoice book",
          "Receipt book",
          "Delivery note"
        ]
      }
    ]
  }
},

/* =========================
   QUESTION 5
========================= */
{
  id: 5,
  section: "Essay and Practical",
  title: "Single Bedroom Electrical Layout and Legend",
  instructions: "Study the floor plan and use standard electrical symbols.",
  question: {
    sequence: [
      { type: "text", label: "stem", content: "The diagram below illustrates the floor plan of a single bedroom self-contained apartment." },
      { type: "diagram", label: "stem", path: "assets/solarpv/essay/test3/questions5.png", caption: "Floor plan of a single bedroom self-contained apartment." },
      { type: "text", label: "a", content: "Prepare a legend for the following items: six lamps, three 1-way switches, four 2-way switches, five 13 A sockets, one ceiling fan, one fan regulator, one distribution board and one cooker control unit." },
      { type: "text", label: "b", content: "On the floor plan, indicate the correct positions of the items listed in part (a) where X marks are shown." }
    ]
  },
  diagrams: {
    questionSequence: [
      { at: "stem", path: "assets/solarpv/essay/test3/questions5.png", caption: "Question floor plan." }
    ],
    solutionSequence: [
      { after: "a", path: "assets/solarpv/essay/test3/solution5a.png", caption: "Legend for electrical symbols." },
      { after: "b", path: "assets/solarpv/essay/test3/solution5b.png", caption: "Correct positioning of fittings on the apartment floor plan." }
    ]
  },
  answerGuide: {
    sequence: [
      {
        type: "diagram",
        label: "stem",
        path: "assets/solarpv/essay/test3/questions5.png",
        caption: "Floor plan to be completed."
      },
      {
        type: "diagram",
        label: "a",
        path: "assets/solarpv/essay/test3/solution5a.png",
        caption: "Legend showing lamps, 1-way switches, 2-way switches, 13 A socket outlet, ceiling fan, fan regulator, distribution board and cooker control unit."
      },
      {
        type: "text",
        label: "a-note",
        content: [
          "Lamps: six lighting points are required.",
          "1-way switches: three are required for single-position lamp control.",
          "2-way switches: four are required where lights are controlled from two positions.",
          "13 A sockets: five socket outlets are required.",
          "Ceiling fan: one fan point is required in the bedroom.",
          "Fan regulator: one regulator is required for the ceiling fan.",
          "Distribution board: one distribution board is required at a suitable accessible position.",
          "Cooker control unit: one cooker control unit is required in the kitchen."
        ]
      },
      {
        type: "diagram",
        label: "b",
        path: "assets/solarpv/essay/test3/solution5b.png",
        caption: "Correctly positioned electrical fittings on the apartment layout."
      },
      {
        type: "text",
        label: "b-note",
        content: [
          "Lamps should be positioned at suitable lighting points in the bedroom, kitchen, toilet/bath, porch and store.",
          "Switches should be placed near doors or entrance points for easy control.",
          "Two-way switches should be used where control is needed from two different positions.",
          "13 A sockets should be placed at convenient wall positions for portable appliances.",
          "The ceiling fan should be placed centrally in the bedroom.",
          "The fan regulator should be close to the bedroom switch position.",
          "The distribution board should be accessible and safely located.",
          "The cooker control unit should be positioned in the kitchen near the cooking area."
        ]
      }
    ]
  }
}
],

 test4: [
  {
    id: 1,
    section: "Essay and Practical",
    title: "Conductors, Insulators, Soldering and B.S. Symbols",
    instructions: "Answer all parts. Draw symbols neatly where required.",
    question: {
      sequence: [
        { type: "text", label: "a(i)", content: "Define conductor." },
        { type: "text", label: "a(ii)", content: "Define insulator." },
        { type: "text", label: "b(i)", content: "List five insulating materials." },
        { type: "text", label: "b(ii)", content: "List five conducting materials." },
        { type: "text", label: "c(i)", content: "Define soldering." },
        { type: "text", label: "c(ii)", content: "State four functions of flux in soldering." },
        { type: "text", label: "d", content: "Draw the B.S. graphical symbols for: core inductor, resistor, capacitor, circuit breaker and earth electrode." },
        { type: "diagram", label: "d", path: "assets/solarpv/essay/test4/solution1di_v.png", caption: "B.S. symbols for core inductor, resistor, capacitor, circuit breaker and earth electrode." }
      ]
    },
    diagrams: {
      questionSequence: [],
      solutionSequence: [
        { after: "d", path: "assets/solarpv/essay/test4/solution1di_v.png", caption: "Correct B.S. graphical symbols." }
      ]
    },
    answerGuide: {
      sequence: [
        { type: "text", label: "a(i)", content: "A conductor is a material that offers very low resistance to the flow of electric current." },
        { type: "text", label: "a(ii)", content: "An insulator is a material that offers very high resistance to the flow of electric current." },
        { type: "text", label: "b(i)", content: ["Rubber", "PVC", "Porcelain", "Mica", "Glass", "Dry wood", "Paper", "Ceramics", "Ebonite", "Plastic"] },
        { type: "text", label: "b(ii)", content: ["Copper", "Aluminium", "Silver", "Gold", "Brass", "Iron", "Zinc", "Lead", "Tin"] },
        { type: "text", label: "c(i)", content: "Soldering is the process of joining two or more metals or conductors together using heat and solder." },
        { type: "text", label: "c(ii)", content: ["It removes oxide film from metal surfaces.", "It cleans the joint surface.", "It helps solder to flow easily.", "It prevents oxide from reforming.", "It removes grease or oil from the joint."] },
        { type: "diagram", label: "d", path: "assets/solarpv/essay/test4/solution1di_v.png", caption: "B.S. graphical symbols." }
      ]
    }
  },

  {
    id: 2,
    section: "Essay and Practical",
    title: "Workshop Safety, Rewireable Fuse, Photometer and Business Registration",
    instructions: "Answer all parts and label diagrams correctly.",
    question: {
      sequence: [
        { type: "text", label: "a", content: "State three precautions that should be taken to prevent accidents in an electrical workshop." },
        { type: "text", label: "b(i)", content: "Explain the purpose of a fuse." },
        { type: "text", label: "b(ii)", content: "Explain how a fuse operates." },
        { type: "text", label: "b(iii)", content: "Explain why the fuse element must be of correct rating." },
        { type: "text", label: "b(iv)", content: "Draw a labelled diagram of a rewireable fuse with holder." },
        { type: "diagram", label: "b(iv)", path: "assets/solarpv/essay/test4/solution2biv.png", caption: "Labelled diagram of a rewireable fuse with holder." },
        { type: "text", label: "c(i)", content: "List three parts of a photometer." },
        { type: "text", label: "c(ii)", content: "State the function of each part listed in c(i)." },
        { type: "text", label: "d(i)", content: "State two conditions required for registering a small-scale electrical installation business." },
        { type: "text", label: "d(ii)", content: "State four factors to be considered in starting a small-scale electrical installation business." }
      ]
    },
    diagrams: {
      questionSequence: [],
      solutionSequence: [
        { after: "b(iv)", path: "assets/solarpv/essay/test4/solution2biv.png", caption: "Rewireable fuse: holder/base, fuse carrier, contact points and fuse element." }
      ]
    },
    answerGuide: {
      sequence: [
        { type: "text", label: "a", content: ["Never assume any conductor is dead.", "Test equipment before energizing.", "Wear protective clothing, gloves and boots.", "Avoid wet floors.", "Avoid horseplay.", "Avoid faulty tools.", "Keep the workshop free from obstructions."] },
        { type: "text", label: "b(i)", content: "A fuse protects circuits, appliances and equipment against overload, short circuit and excess current." },
        { type: "text", label: "b(ii)", content: "A fuse operates by melting its fuse element when excessive current flows, thereby opening the circuit." },
        { type: "text", label: "b(iii)", content: "The fuse element must have the correct rating so that it operates safely during fault current without causing fire or equipment damage." },
        { type: "diagram", label: "b(iv)", path: "assets/solarpv/essay/test4/solution2biv.png", caption: "Labelled rewireable fuse with holder." },
        { type: "text", label: "c(i)", content: ["Connecting ring", "Transparent film", "Selenium", "Steel base plate"] },
        { type: "text", label: "c(ii)", content: ["Connecting ring: allows connection to the instrument terminals.", "Transparent film: allows light rays to reach selenium.", "Selenium: releases electrons when light falls on it.", "Steel base plate: acts as base or support for the cell."] },
        { type: "text", label: "d(i)", content: ["Certificate of competence or licence", "Business name", "Business location/address", "Tax clearance", "Referee"] },
        { type: "text", label: "d(ii)", content: ["Capital or fund", "Shop or location", "Labour/personnel", "Tools and equipment", "Materials", "Client/market", "Business skill or idea"] }
      ]
    }
  },

  {
    id: 3,
    section: "Essay and Practical",
    title: "Conduit Installation, Sodium Lamp, Conduit Boxes and Accessories",
    instructions: "Study the diagrams and answer all parts.",
    question: {
      sequence: [
        { type: "text", label: "a", content: "State four conditions to be considered when installing conduits." },
        { type: "text", label: "b(i)", content: "List three parts of a sodium discharge lamp." },
        { type: "text", label: "b(ii)", content: "State one application of sodium lamp." },
        { type: "text", label: "c", content: "Identify or sketch the conduit boxes shown in the diagram." },
        { type: "diagram", label: "c", path: "assets/solarpv/essay/test4/solution3c.png", caption: "Conduit fittings: solid elbow, tee box and inspection tee." },
        { type: "text", label: "d(i)", content: "List four electrical accessories." },
        { type: "text", label: "d(ii)", content: "State one use of each accessory listed." },
        { type: "text", label: "e", content: "Outline six contents of a typical budget." }
      ]
    },
    diagrams: {
      questionSequence: [
        { at: "c", path: "assets/solarpv/essay/test4/solution3c.png", caption: "Conduit box types." }
      ],
      solutionSequence: [
        { after: "c", path: "assets/solarpv/essay/test4/solution3c.png", caption: "Conduit boxes: solid elbow, tee box and inspection tee." }
      ]
    },
    answerGuide: {
      sequence: [
        { type: "text", label: "a", content: ["Study pipe runs of other services such as water and gas.", "Follow the client’s drawing and requirements.", "Make allowance for future extension.", "Mark out the conduit run before installation.", "Consider environmental condition and location.", "Prepare conduit correctly before fixing."] },
        { type: "text", label: "b(i)", content: ["Vacuum jacket", "Lamp base", "Electrodes", "Quartz tube", "Capacitor", "Auto-transformer"] },
        { type: "text", label: "b(ii)", content: "Sodium lamps are used for street lighting, highway lighting, road lighting and stadium lighting." },
        { type: "diagram", label: "c", path: "assets/solarpv/essay/test4/solution3c.png", caption: "Conduit box sketches." },
        { type: "text", label: "d(i)", content: ["Switches", "Sockets", "Lamp holders", "Ceiling roses", "Joint boxes", "Plugs", "Junction boxes"] },
        { type: "text", label: "d(ii)", content: ["Switch: controls a circuit or lamp.", "Socket: provides outlet for portable appliances.", "Lamp holder: holds and connects a lamp.", "Ceiling rose: connects supply to a pendant lamp.", "Joint box: houses conductor joints.", "Plug: connects an appliance to a socket outlet."] },
        { type: "text", label: "e", content: ["Title of budget", "Duration of budget", "Sources of income", "Estimated revenue", "Proposed expenditure items", "Total proposed expenditure", "Effective implementation date", "Cash flow", "Proposed estimate or plan"] }
      ]
    }
  },

  {
    id: 4,
    section: "Essay and Practical",
    title: "Incandescent Lamp and Independent Lamp Control",
    instructions: "Study the lamp and wiring diagrams carefully.",
    question: {
      sequence: [
        { type: "diagram", label: "a", path: "assets/solarpv/essay/test4/question4a.png", caption: "Electric lamp labelled V, W, X, Y and Z." },
        { type: "text", label: "a(i)", content: "Name the parts labelled V, W, X, Y and Z." },
        { type: "text", label: "a(ii)", content: "What type of lamp does the diagram illustrate?" },
        { type: "text", label: "a(iii)", content: "State one function each of the parts labelled V and Z." },
        { type: "text", label: "a(iv)", content: "Name the gas used in filling the lamp." },
        { type: "text", label: "a(v)", content: "State three faults that could make the lamp not light when switched on." },
        { type: "diagram", label: "b", path: "assets/solarpv/essay/test4/question4b.png", caption: "Three lamps, three one-way switches and a joint box." },
        { type: "text", label: "b(i)", content: "Using Fig. 1.1, Fig. 1.2 and Fig. 1.3, draw the wiring diagram showing each lamp controlled independently by a corresponding switch." },
        { type: "text", label: "b(ii)", content: "State three precautions when carrying out the wiring on a wiring board." },
        { type: "text", label: "b(iii)", content: "List five materials needed for wiring on a wiring board." },
        { type: "text", label: "b(iv)", content: "State the standard cable size used for the wiring board." }
      ]
    },
    diagrams: {
      questionSequence: [
        { at: "a", path: "assets/solarpv/essay/test4/question4a.png", caption: "Incandescent lamp diagram." },
        { at: "b", path: "assets/solarpv/essay/test4/question4b.png", caption: "Symbols for lamps, switches and joint box." }
      ],
      solutionSequence: [
        { after: "b(i)", path: "assets/solarpv/essay/test4/solutionbi.png", caption: "Each lamp controlled independently by its corresponding switch." }
      ]
    },
    answerGuide: {
      sequence: [
        { type: "text", label: "a(i)", content: { V: "Coiled-coil filament", W: "Bulb/glass envelope", X: "Gas-filled interior/inert gas", Y: "Insulator/cap/base", Z: "Contacts" } },
        { type: "text", label: "a(ii)", content: "The diagram illustrates an incandescent lamp or filament lamp." },
        { type: "text", label: "a(iii)", content: ["V: converts electrical energy to light energy and glows to produce light.", "Z: connects the lamp to the supply source."] },
        { type: "text", label: "a(iv)", content: "The gas is inert gas, usually argon." },
        { type: "text", label: "a(v)", content: ["Open circuit", "Broken filament", "Poor terminal contact", "Faulty lamp holder", "Broken or cracked bulb", "Short-circuited terminals", "Gas may have leaked or been used up"] },
        { type: "diagram", label: "b(i)", path: "assets/solarpv/essay/test4/solutionbi.png", caption: "Correct wiring diagram." },
        { type: "text", label: "b(ii)", content: ["Use correct tools.", "Ensure tight connections.", "Take live supply to the switches and neutral to the lamps.", "Use correct cable size.", "Isolate supply before wiring.", "Avoid short circuit.", "Avoid uninsulated tools."] },
        { type: "text", label: "b(iii)", content: ["PVC cable", "Clips or saddles", "Brass nails", "Screws", "Insulation tape", "Conduit pipe", "Pattress"] },
        { type: "text", label: "b(iv)", content: "The standard cable size is 1.5 mm²." }
      ]
    }
  },

  {
    id: 5,
    section: "Essay and Practical",
    title: "PVC Armoured Cable, Living-Room Electrical Design and Meter Connection Errors",
    instructions: "Study all diagrams carefully and answer all parts.",
    question: {
      sequence: [
        { type: "diagram", label: "a", path: "assets/solarpv/essay/test4/question5a.png", caption: "PVC armoured cable labelled I, II, III and IV." },
        { type: "text", label: "a(i)", content: "Name the parts labelled I, II, III and IV." },
        { type: "text", label: "a(ii)", content: "State three precautions taken while installing a PVC armoured cable." },
        { type: "diagram", label: "b", path: "assets/solarpv/essay/test4/question5b.png", caption: "Electrical design of a living room." },
        { type: "text", label: "b(i)", content: "Identify the electrical symbols labelled I, II, III, IV, V, VII and VIII." },
        { type: "text", label: "b(ii)", content: "State one reason for the location of VII." },
        { type: "diagram", label: "c", path: "assets/solarpv/essay/test4/question5c.png", caption: "Incorrect ammeter and voltmeter connection." },
        { type: "text", label: "c(i)", content: "Identify the two errors in the diagram." },
        { type: "text", label: "c(ii)", content: "State two implications of the errors identified." },
        { type: "text", label: "c(iii)", content: "Reproduce the diagram correctly." },
        { type: "text", label: "c(iv)", content: "List three types of motor enclosure." }
      ]
    },
    diagrams: {
      questionSequence: [
        { at: "a", path: "assets/solarpv/essay/test4/question5a.png", caption: "PVC armoured cable." },
        { at: "b", path: "assets/solarpv/essay/test4/question5b.png", caption: "Living-room electrical design." },
        { at: "c", path: "assets/solarpv/essay/test4/question5c.png", caption: "Wrong meter connection." }
      ],
      solutionSequence: [
        { after: "c(iii)", path: "assets/solarpv/essay/test4/solution5ciii.png", caption: "Correct ammeter and voltmeter connection." }
      ]
    },
    answerGuide: {
      sequence: [
        { type: "text", label: "a(i)", content: { I: "Tough PVC outer sheath", II: "Steel wire armouring", III: "PVC insulation", IV: "Copper conductor" } },
        { type: "text", label: "a(ii)", content: ["Protect PVC insulation from heat.", "Use PVC tape for insulating conductors.", "Clean and clamp the steel wire armouring properly because it may serve as earth continuity conductor.", "Control hot pouring compound temperature to avoid melting PVC insulation.", "Switch off or isolate supply before installation."] },
        { type: "text", label: "b(i)", content: { I: "Ceiling fan", II: "13 A socket outlet", III: "Wall bracket", IV: "Point of light/lamp", V: "15 A socket outlet", VII: "Distribution fuse board/consumer unit", VIII: "2-way switch" } },
        { type: "text", label: "b(ii)", content: "VII, the distribution fuse board or consumer unit, is located there for easy access and safe control of the installation." },
        { type: "text", label: "c(i)", content: ["Ammeter is wrongly connected in parallel instead of series.", "Voltmeter is wrongly connected in series instead of parallel."] },
        { type: "text", label: "c(ii)", content: ["The instruments may not read correctly or may not work.", "The instruments may be damaged."] },
        { type: "diagram", label: "c(iii)", path: "assets/solarpv/essay/test4/solution5ciii.png", caption: "Correct connection: ammeter in series, voltmeter in parallel with the load." },
        { type: "text", label: "c(iv)", content: ["Totally enclosed", "Pipe ventilated", "Screen protected", "Drip proof", "Open type", "Dust proof", "Flame proof"] }
      ]
    }
  }
],

    test5: [
    {
      id: 1,
      section: "Essay and Practical",
      title: "Corrective Maintenance, Conduit Fittings, Machine Nameplate and Motor Starting",
      instructions: "Answer all parts clearly. Use standard technical terms.",
      question: {
        sequence: [
          { type: "text", label: "a(i)", content: "What is corrective maintenance?" },
          { type: "text", label: "a(ii)", content: "State one disadvantage of corrective maintenance." },
          { type: "text", label: "a(iii)", content: "List three types of electrical machine enclosures." },
          { type: "text", label: "b", content: "State the use of each of the following conduit fittings: elbow joint, male and female bushing, locknut and coupler." },
          { type: "text", label: "c", content: "State three IEE regulation requirements on conduit installations." },
          { type: "text", label: "d(i)", content: "List three pieces of information contained on the nameplate of a three-phase machine." },
          { type: "text", label: "d(ii)", content: "List three constructional features of a d.c. machine." },
          { type: "text", label: "d(iii)", content: "State two possible causes of low voltage output of an a.c. generator." },
          { type: "text", label: "e", content: "State four methods of starting a three-phase induction motor." }
        ]
      },
      diagrams: { questionSequence: [], solutionSequence: [] },
      answerGuide: {
        sequence: [
          { type: "text", label: "a(i)", content: "Corrective maintenance is maintenance or repair carried out after a machine, device, equipment or installation has broken down, in order to restore it to working condition." },
          { type: "text", label: "a(ii)", content: ["It causes stoppage or delay of work.", "It is expensive.", "It wastes time."] },
          { type: "text", label: "a(iii)", content: ["Totally enclosed", "Drip-proof", "Screen protected", "Pipe ventilated", "Flame proof", "Open type"] },
          {
            type: "text",
            label: "b",
            content: [
              "Elbow joint: used to connect conduit pipes at an angle.",
              "Male and female bushing: used to connect conduit to back-entry boxes, looping boxes or joint boxes.",
              "Locknut: used to hold conduit firmly in place.",
              "Coupler: used to join two lengths of conduit pipe."
            ]
          },
          {
            type: "text",
            label: "c",
            content: [
              "Conduit must be erected before cables are drawn into it.",
              "Space factor must not exceed 40%.",
              "Extra-low voltage and low-voltage cables must not be installed in the same conduit.",
              "All joints must be mechanically sound and electrically continuous.",
              "The conduit system must be efficiently earthed.",
              "All burrs must be removed to prevent cable abrasion.",
              "Proper precautions must be taken against corrosion."
            ]
          },
          { type: "text", label: "d(i)", content: ["Rated voltage", "Frequency", "Horsepower or power rating", "Speed", "Winding connection", "Current rating", "Manufacturer’s name"] },
          { type: "text", label: "d(ii)", content: ["Yoke", "Pole shoe", "Main pole", "Field winding", "Interpole", "Commutator", "Armature winding"] },
          { type: "text", label: "d(iii)", content: ["Low speed", "Faulty A.V.R.", "Loss of residual magnetism"] },
          { type: "text", label: "e", content: ["Direct-on-line starter", "Star-delta starter", "Auto-transformer starter", "Primary resistance starter", "Rotor resistance starter", "Stator resistance starter"] }
        ]
      }
    },

    {
      id: 2,
      section: "Essay and Practical",
      title: "Domestic Installation Tests, A.C. Motors, Protective Devices and Business Proposal",
      instructions: "Answer all parts. Draw symbols neatly where required.",
      question: {
        sequence: [
          { type: "text", label: "a(i)", content: "List three types of electrical tests for domestic installations." },
          { type: "text", label: "a(ii)", content: "Why is it important to conduct electrical tests in domestic installations?" },
          { type: "text", label: "a(iii)", content: "Name three instruments used for conducting tests in electrical installations." },
          { type: "text", label: "b(i)", content: "Define a.c. motor." },
          { type: "text", label: "b(ii)", content: "Give two applications of an a.c. motor." },
          { type: "text", label: "b(iii)", content: "State two differences between d.c. and a.c. motors." },
          { type: "diagram", label: "b(iii)", path: "assets/solarpv/essay/test5/tablesolution2bii.png", caption: "Difference between alternating-current and direct-current motors." },
          { type: "text", label: "c(i)", content: "Draw the B.S. graphical symbols for fuse, circuit breaker, switchgear and contactor." },
          { type: "diagram", label: "c(i)", path: "assets/solarpv/essay/test5/solution2ci.png", caption: "Fuse and related protection/control symbols." },
          { type: "diagram", label: "c(i)", path: "assets/solarpv/essay/test5/solution2cii.png", caption: "Circuit breaker symbol." },
          { type: "diagram", label: "c(i)", path: "assets/solarpv/essay/test5/solution2ciii.png", caption: "Switchgear symbol." },
          { type: "diagram", label: "c(i)", path: "assets/solarpv/essay/test5/solution2civ.png", caption: "Contactor symbol." },
          { type: "text", label: "c(ii)", content: "State three reasons for installing protective devices." },
          { type: "text", label: "d", content: "List five basic components in writing a proposal for starting an electrical installation business." }
        ]
      },
      diagrams: {
        questionSequence: [],
        solutionSequence: [
          { after: "b(iii)", path: "assets/solarpv/essay/test5/tablesolution2bii.png", caption: "A.C. and D.C. motor comparison." },
          { after: "c(i)", path: "assets/solarpv/essay/test5/solution2ci.png", caption: "Fuse symbol." },
          { after: "c(i)", path: "assets/solarpv/essay/test5/solution2cii.png", caption: "Circuit breaker symbol." },
          { after: "c(i)", path: "assets/solarpv/essay/test5/solution2ciii.png", caption: "Switchgear symbol." },
          { after: "c(i)", path: "assets/solarpv/essay/test5/solution2civ.png", caption: "Contactor symbol." }
        ]
      },
      answerGuide: {
        sequence: [
          { type: "text", label: "a(i)", content: ["Polarity test", "Insulation resistance test", "Earthing test", "Continuity test", "Ring-circuit continuity test"] },
          { type: "text", label: "a(ii)", content: ["To ensure the installation is properly done.", "To detect faults.", "To correct faults.", "To certify that the installation is fit and safe for use.", "To prevent hazard, malfunction and breakdown."] },
          { type: "text", label: "a(iii)", content: ["Megger or insulation resistance tester", "Bell set tester", "Ohmmeter", "Multimeter", "Voltmeter", "Ammeter", "Testing lamp", "Phase tester"] },
          { type: "text", label: "b(i)", content: "An a.c. motor is a device or machine that converts electrical energy from an alternating-current supply into mechanical energy." },
          { type: "text", label: "b(ii)", content: ["Water pumps", "Blenders", "Ceiling fans", "Grinders", "Air-conditioner fans", "Compressors", "Drilling machines", "Milling machines"] },
          {
            type: "diagram",
            label: "b(iii)",
            path: "assets/solarpv/essay/test5/tablesolution2bii.png",
            caption: "Differences between alternating-current and direct-current motors."
          },
          {
            type: "text",
            label: "b(iii-note)",
            content: [
              "A.C. motor is powered by a.c. source; d.c. motor is powered by d.c. source.",
              "A.C. motor commonly uses slip rings in some types; d.c. motor uses commutator.",
              "A.C. motor speed is controlled by frequency variation; d.c. motor speed is controlled by armature-current or field-current variation.",
              "A.C. motor converts electrical energy to mechanical energy; d.c. motor also converts electrical energy to mechanical energy but uses d.c. supply."
            ]
          },
          { type: "diagram", label: "c(i)-1", path: "assets/solarpv/essay/test5/solution2ci.png", caption: "Fuse symbol." },
          { type: "diagram", label: "c(i)-2", path: "assets/solarpv/essay/test5/solution2cii.png", caption: "Circuit breaker symbol." },
          { type: "diagram", label: "c(i)-3", path: "assets/solarpv/essay/test5/solution2ciii.png", caption: "Switchgear symbol." },
          { type: "diagram", label: "c(i)-4", path: "assets/solarpv/essay/test5/solution2civ.png", caption: "Contactor symbol." },
          { type: "text", label: "c(ii)", content: ["To prevent earth leakage.", "To prevent electric shock.", "To prevent excess current.", "To prevent damage by fire.", "To isolate the consumer installation from the main supply.", "To maintain continuity of supply where appropriate."] },
          { type: "text", label: "d", content: ["Title page or cover page", "Executive summary", "Introduction of the project", "Objectives or purpose of the project", "Scope or project description", "Qualification or experience", "Budget or cost", "Conclusion", "Appendices"] }
        ]
      }
    },

    {
      id: 3,
      section: "Essay and Practical",
      title: "First-Aid, Artificial Respiration, Illumination, Cables and Joining Conductors",
      instructions: "Answer all parts with clear technical explanations.",
      question: {
        sequence: [
          { type: "text", label: "a(i)", content: "Define first-aid." },
          { type: "text", label: "a(ii)", content: "Outline four steps in administering artificial respiration." },
          { type: "text", label: "b(i)", content: "Define maintenance factor in relation to illumination." },
          { type: "text", label: "b(ii)", content: "List three types of lamps used for street lighting." },
          { type: "text", label: "c(i)", content: "Define cable." },
          { type: "text", label: "c(ii)", content: "List four types of cables based on constructional features." },
          { type: "text", label: "c(iii)", content: "Explain briefly how the current rating of a cable is affected by ambient temperature." },
          { type: "text", label: "d(i)", content: "State two methods of joining electrical conductors." },
          { type: "text", label: "d(ii)", content: "Explain briefly any one method stated in d(i)." }
        ]
      },
      diagrams: { questionSequence: [], solutionSequence: [] },
      answerGuide: {
        sequence: [
          { type: "text", label: "a(i)", content: "First-aid is the temporary treatment given to an accident victim before professional medical help arrives or before the victim is taken to hospital." },
          { type: "text", label: "a(ii)", content: ["Clean the victim’s mouth to remove foreign material.", "Place the victim on the floor with the head tilted backward.", "Take a deep breath.", "Place your mouth on the victim’s mouth or nostrils.", "Blow air into the victim’s lungs until the chest expands.", "Repeat until the victim starts breathing or professional help arrives."] },
          { type: "text", label: "b(i)", content: "Maintenance factor is the loss in light output due to lamp ageing and dirt on lamps or fittings." },
          { type: "text", label: "b(ii)", content: ["High-pressure mercury vapour lamp", "Sodium discharge lamp", "LED lamp", "High-intensity discharge lamp"] },
          { type: "text", label: "c(i)", content: "A cable is a length of insulated conductor, or two or more conductors each provided with its own insulation." },
          { type: "text", label: "c(ii)", content: ["PVC cable", "Lead-sheathed cable", "Vulcanized India-rubber insulated cable", "Tough-rubber-sheathed cable", "MICC/Mineral insulated cable", "Armoured cable", "Paper-insulated lead-covered cable", "HOFR cable"] },
          { type: "text", label: "c(iii)", content: "As ambient temperature increases, the resistance and heating effect of the cable increase. Therefore, the safe current-carrying capacity or current rating of the cable decreases. When ambient temperature is lower, the current rating may improve." },
          { type: "text", label: "d(i)", content: ["Mechanical method", "Soldering method", "Welding method"] },
          { type: "text", label: "d(ii)", content: ["Mechanical method: conductors are joined manually using connector blocks, bolts and nuts or suitable terminals.", "Soldering method: conductors are joined using heat, solder and flux to form a firm electrical joint.", "Welding method: conductors are joined using heat/flame from gas or welding equipment."] }
        ]
      }
    },

    {
      id: 4,
      section: "Essay and Practical",
      title: "Simple Leclanché Cell and D.C. Generator Faults",
      instructions: "Study the diagram and table carefully. Answer all parts.",
      question: {
        sequence: [
          { type: "diagram", label: "a", path: "assets/solarpv/essay/test5/question4ai.png", caption: "Simple Leclanché cell labelled I, II, III and IV." },
          { type: "text", label: "a(i)", content: "Name the parts labelled I, II, III and IV." },
          { type: "text", label: "a(ii)", content: "What is the e.m.f. of this cell?" },
          { type: "text", label: "a(iii-I)", content: "List the two main defects associated with this type of cell." },
          { type: "text", label: "a(iii-II)", content: "Explain briefly how each defect can be minimized." },
          { type: "text", label: "a(iii-III)", content: "Give three disadvantages of this type of cell." },
          { type: "text", label: "a(iii-IV)", content: "Give four applications of this type of cell." },
          { type: "text", label: "a(iii-V)", content: "Name the instrument used to measure the specific gravity of this cell." },
          { type: "diagram", label: "b", path: "assets/solarpv/essay/test5/question4b.png", caption: "Faults in d.c. generator table." },
          { type: "text", label: "b", content: "Copy and complete the table of faults in a d.c. generator and their causes." }
        ]
      },
      diagrams: {
        questionSequence: [
          { at: "a", path: "assets/solarpv/essay/test5/question4ai.png", caption: "Simple Leclanché cell." },
          { at: "b", path: "assets/solarpv/essay/test5/question4b.png", caption: "D.C. generator faults table." }
        ],
        solutionSequence: []
      },
      answerGuide: {
        sequence: [
          { type: "text", label: "a(i)", content: { I: "Electrolyte / sal ammoniac solution", II: "Zinc plate / negative electrode", III: "Carbon plate / positive electrode", IV: "Container" } },
          { type: "text", label: "a(ii)", content: "The e.m.f. of a Leclanché cell is about 1.5 V." },
          { type: "text", label: "a(iii-I)", content: ["Polarization", "Local action"] },
          { type: "text", label: "a(iii-II)", content: ["Local action is minimized by coating the zinc electrode with mercury.", "Polarization is minimized by surrounding the carbon plate with a depolarizing agent."] },
          { type: "text", label: "a(iii-III)", content: ["It has low voltage and cannot supply large current.", "It cannot be used continuously due to polarization.", "It cannot be recharged.", "It has high internal resistance.", "It has short life span and deteriorates faster."] },
          { type: "text", label: "a(iii-IV)", content: ["Bell circuits", "Calculators", "Railway signals", "Telegraphy or telephone circuits", "Radio set", "Torch", "Remote control", "Microphone"] },
          { type: "text", label: "a(iii-V)", content: "The instrument is a hydrometer." },
          {
            type: "text",
            label: "b",
            content: [
              "No voltage at terminals: failure of residual magnetism; speed too low; open circuit in armature or field circuit; dirty commutator; short circuit in armature or field circuit.",
              "Sparking at brushes: worn brushes; dirty commutator; wrong brush position; weak brush spring; high mica; overload.",
              "Fails to excite: loss of residual magnetism; wrong rotation of dynamo; open or short circuit; reverse field connection; wrong or poor connections."
            ]
          }
        ]
      }
    },

    {
      id: 5,
      section: "Essay and Practical",
      title: "Megger Insulation Tester and Measuring Instruments",
      instructions: "Study the circuit diagram carefully and answer all parts.",
      question: {
        sequence: [
          { type: "diagram", label: "a", path: "assets/solarpv/essay/test5/question5ai.png", caption: "Circuit diagram of a megger insulation tester labelled I, II, III and IV." },
          { type: "text", label: "a(i)", content: "Name the parts labelled I, II, III and IV." },
          { type: "text", label: "a(ii)", content: "State one function of each of the parts named in a(i)." },
          { type: "text", label: "b(i)", content: "What is the minimum reading for this instrument when used in measuring insulation resistance?" },
          { type: "text", label: "b(ii)", content: "Give two applications of this instrument." },
          { type: "text", label: "b(iii)", content: "State two precautions to be taken when using this testing instrument." },
          { type: "text", label: "c", content: "Outline four steps in operating this testing instrument." },
          { type: "text", label: "d(i)", content: "List five types of measuring instruments used in an electrical workshop." },
          { type: "text", label: "d(ii)", content: "State one function each for any three of the measuring instruments listed." }
        ]
      },
      diagrams: {
        questionSequence: [
          { at: "a", path: "assets/solarpv/essay/test5/question5ai.png", caption: "Megger insulation tester circuit." }
        ],
        solutionSequence: []
      },
      answerGuide: {
        sequence: [
          { type: "text", label: "a(i)", content: { I: "Generator", II: "Scale", III: "Ohmmeter", IV: "Pointer" } },
          { type: "text", label: "a(ii)", content: ["Generator: generates current/voltage for the ohmmeter circuit.", "Scale: provides the graduated reading surface.", "Ohmmeter: measures the value of insulation resistance.", "Pointer: indicates the measured value on the scale."] },
          { type: "text", label: "b(i)", content: "Minimum acceptable reading: 1 MΩ between conductors, or 0.5 MΩ between conductor and the general mass of earth." },
          { type: "text", label: "b(ii)", content: ["It measures insulation resistance between poles or conductors.", "It measures insulation resistance between live conductors and metalwork/earth of an installation."] },
          { type: "text", label: "b(iii)", content: ["Ensure that all loads are removed before testing.", "Do not touch the test leads while generating voltage.", "Do not short-circuit the megger leads unnecessarily.", "Turn the handle carefully so the generated voltage rises gradually."] },
          { type: "text", label: "c", content: ["Remove all loads before testing.", "Connect the test leads to the points to be tested.", "Wind or operate the generator to generate test voltage.", "Take the reading from the scale.", "Interpret the reading correctly."] },
          { type: "text", label: "d(i)", content: ["Voltmeter", "Ammeter", "Tachometer", "Ohmmeter", "Photometer", "Micrometer screw gauge", "Standard wire gauge", "Wattmeter", "Megger/insulation resistance tester", "Multimeter"] },
          { type: "text", label: "d(ii)", content: ["Voltmeter: measures voltage.", "Ammeter: measures current.", "Tachometer: measures speed.", "Ohmmeter: measures resistance.", "Photometer: measures light intensity.", "Micrometer screw gauge: measures wire diameter.", "Standard wire gauge: measures wire size.", "Wattmeter: measures power.", "Megger: measures insulation resistance."] }
        ]
      }
    }
  ]

} // end essayAndPractical
}; // end window.WAEC_SUBJECTS["solarpv"]

window.WAEC_SUBJECTS["solarpv"].obj = Object.entries(
  window.WAEC_SUBJECTS["solarpv"].objectiveTests || {}
).map(([testId, questions]) => ({
  testId,
  title: `Solar PV Objective ${testId.toUpperCase()}`,
  questions
}));

window.WAEC_SUBJECTS["solarpv"].essay = Object.entries(
  window.WAEC_SUBJECTS["solarpv"].essayAndPractical || {}
).map(([testId, questions]) => ({
  testId,
  title: `Solar PV Essay and Practical ${testId.toUpperCase()}`,
  questions
}));

window.WAEC_SUBJECTS["solarpv"].practical =
  window.WAEC_SUBJECTS["solarpv"].essay;
