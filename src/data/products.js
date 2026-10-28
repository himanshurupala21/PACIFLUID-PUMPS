export const PRODUCTS = [
  {
    id: "gp-series",
    name: "GP Series — External Rotary Gear Pump",
    category: "rotary-gear",
    shortDesc: "Heavy-duty positive displacement gear pump engineered for lubricating oils, fuels, viscous liquids, and hydraulics.",
    image: "/assets/img/product/gp.png",
    realImage: "/img/ft.jpg",
    pdf: "/pdf/pacifluid-gp-gear-pump.pdf",
    tag: "Flagship Series",
    featured: true,
    specs: {
      capacity: "5 LPM to 500 LPM (0.3 to 30 m³/hr)",
      pressure: "Up to 10 kg/cm² (10 Bar / 142 PSI)",
      speed: "1440 RPM (Direct Coupled / V-Belt)",
      viscosity: "10 to 10,000 cSt",
      temperature: "Up to 200°C (392°F)",
      portSize: '1/2" to 3" BSP / Flanged',
      moc: "Graded Cast Iron FG-260, Cast Steel WCB",
      sealing: "Gland Packing / Carbon-Ceramic Mechanical Seal",
      shaft: "EN-8 / EN-24 / SS-316 Ground & Hardened"
    },
    features: [
      "Specially designed single helical herringbone / spur gears for noiseless operation",
      "Built-in adjustable pressure relief valve prevents system overloading",
      "Self-priming positive displacement with high volumetric efficiency",
      "Heavy duty self-lubricating bronze bush bearings / needle roller bearings"
    ],
    applications: [
      "Furnace oil and LDO transfer in industrial boilers",
      "Lubricating oil circulation in turbines & gearboxes",
      "Diesel fuel unloading and bulk tank farm pumping",
      "Bitumen, asphalt, and paint batch mixing"
    ]
  },
  {
    id: "gpss-series",
    name: "GPSS Series — Stainless Steel Rotary Gear Pump",
    category: "stainless-steel",
    shortDesc: "100% Food, Pharma, and Chemical grade sanitary SS-316 / SS-304 rotary gear pump for corrosive and high-purity liquids.",
    image: "/assets/img/product/gpss.png",
    realImage: "/img/ftss.jpg",
    pdf: "/pdf/pacifluid-gpss-ss-gear-pump.pdf",
    tag: "Sanitary & Chemical",
    featured: true,
    specs: {
      capacity: "5 LPM to 300 LPM (0.3 to 18 m³/hr)",
      pressure: "Up to 10 kg/cm² (10 Bar)",
      speed: "960 to 1440 RPM",
      viscosity: "Up to 25,000 cSt",
      temperature: "Up to 220°C (428°F)",
      portSize: '1/2" to 2.5" BSP / Flanged / TC Clamp',
      moc: "AISI SS-316 / SS-304 / SS-316L (Investment Casting)",
      sealing: "PTFE Gland Packing / Silicon Carbide vs TC Mechanical Seal",
      shaft: "AISI SS-316 / SS-316L Precision Ground"
    },
    features: [
      "Full investment cast SS-316 construction eliminating fluid contamination",
      "Corrosion-proof Teflon (PTFE) or Carbon bushes for non-lubricating corrosive fluids",
      "Hygienic sanitary design compliant with dairy, beverage & pharma standards",
      "Handles acidic liquids, chemical solvents, vinegar, sauces, and edible syrups"
    ],
    applications: [
      "Food processing: Glucose, syrup, juices, edible oils, ghee, chocolate",
      "Pharmaceuticals: Active chemical dosing, glycerin, liquid ointment",
      "Chemical industries: Mild acids, alkalis, resins, caustic liquids",
      "Cosmetics: Shampoo, lotions, liquid detergent slurries"
    ]
  },
  {
    id: "pgp-series",
    name: "PGP Series — Precision Rotary External Gear Pump",
    category: "rotary-gear",
    shortDesc: "High-precision micro-metering external gear pump engineered for machine tools, forced lubrication, and burner firing.",
    image: "/assets/img/product/pgp.png",
    realImage: "/img/FTMB.jpg",
    pdf: "/pdf/pacifluid-pgp-rotary-gear-pump.pdf",
    tag: "High Precision",
    featured: true,
    specs: {
      capacity: "1.5 LPM to 125 LPM",
      pressure: "Up to 25 kg/cm² (25 Bar / 355 PSI)",
      speed: "1440 RPM / 2880 RPM",
      viscosity: "5 to 5,000 cSt",
      temperature: "Up to 120°C (248°F)",
      portSize: '1/4" to 1.5" BSP Female',
      moc: "High-grade CI FG-260 / Spheroidal Graphite Ductile Iron",
      sealing: "High-pressure Viton Oil Seal / Mechanical Seal",
      shaft: "EN-31 Case Hardened & Mirror Ground"
    },
    features: [
      "Ultra-quiet hydraulic operation with micro-tolerance gear tooth profiles",
      "Continuous duty rating for machine tool forced lubrication",
      "Compact footprint suited for OEM integration and power packs",
      "Zero pulsation flow for precise oil burner fuel firing"
    ],
    applications: [
      "CNC Machine Tools, lathes, and milling forced oil lubrication",
      "Industrial oil burner and burner nozzle fuel booster systems",
      "Hydraulic power packs and low-pressure fluid drive units",
      "Automobile test rigs and component lubrication benches"
    ]
  },
  {
    id: "pigb-series",
    name: "PIGB Series — Fuel Injection Gear Pump (internal pump)",
    category: "internal-gear",
    shortDesc: "High-pressure positive displacement internal gear pump engineered for heavy fuel oil injection & burner firing.",
    image: "/assets/img/product/pigb.png",
    realImage: "/img/ftmp_monoblock.jpg",
    pdf: "/pdf/pacifluid-pigb-internal-gear-pump.pdf",
    tag: "High Pressure Fuel",
    featured: true,
    specs: {
      capacity: "10 LPM to 200 LPM",
      pressure: "Up to 35 kg/cm² (35 Bar / 500 PSI)",
      speed: "1440 RPM Direct Flange Motor Mount",
      viscosity: "2 to 2,000 cSt",
      temperature: "Up to 180°C",
      portSize: '3/4" to 2" BSP / Flanged',
      moc: "High-tensile Alloy Cast Iron / Nitrided Alloy Steel Rotors",
      sealing: "High-temperature Viton Mechanical Seal",
      shaft: "Alloy Steel Hardened to 58 HRC"
    },
    features: [
      "Handles heavy fuel oil (HFO), low sulphur heavy stock (LSHS), furnace oil and diesel",
      "Designed for continuous high-pressure injection into combustion chambers",
      "Direct flange mounting eliminates alignment issues and footprint constraints",
      "Internal bypass valve with external pressure regulation screw"
    ],
    applications: [
      "Steam boilers, thermic fluid heaters, and rotary asphalt dryers",
      "Rotary kilns in cement and lime plants",
      "Foundry furnaces, re-heating furnaces, and glass melting units",
      "Diesel generator fuel booster and day tank transfer stations"
    ]
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Pumps" },
  { id: "rotary-gear", label: "External Rotary Gear" },
  { id: "stainless-steel", label: "Sanitary Stainless Steel" },
  { id: "internal-gear", label: "Fuel Injection Gear Pump" }
];
