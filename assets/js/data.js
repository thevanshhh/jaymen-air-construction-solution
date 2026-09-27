/**
 * JAYMEN AIR & CONSTRUCTION SOLUTION — Master Data Model
 * Rajkot, Gujarat, India
 */

export const COMPANY = {
  name: "JAYMEN AIR & CONSTRUCTION SOLUTION",
  tagline: "Air compressor supplier & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 81402 30152",
  phoneRaw: "+918140230152",
  waNumber: "918140230152",
  email: "contact@jaymenairconstruct.in",
  address: "Vrundavan Estate, 17, Amar Nagar Main Rd, Amar Nagar, Chandreshnagar, Rajkot, Gujarat 360004, India",
  addressShort: "Rajkot, Gujarat",
  coordinates: "22.3039\u00b0 N, 70.8022\u00b0 E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "jaymen-air-construction-solution-screw-compressor",
    "code": "AC-01",
    "name": "Heavy Duty Industrial Rotary Screw Air Compressor",
    "category": "Screw Compressors",
    "spec": "Continuous industrial duty with direct-coupled airend, microprocessor PLC controller, and sound-attenuated acoustic enclosure.",
    "specsList": [
      {
        "label": "Power Range",
        "val": "10 HP to 125 HP (7.5 kW \u2013 90 kW)"
      },
      {
        "label": "Working Pressure",
        "val": "7.5 to 13.0 Bar (108 \u2013 188 PSI)"
      },
      {
        "label": "Free Air Delivery (FAD)",
        "val": "45 to 580 CFM"
      },
      {
        "label": "Motor Class",
        "val": "IE3 Premium Efficiency High Duty"
      }
    ],
    "price": "\u20b92,15,000",
    "priceUnit": "/ unit"
  },
  {
    "id": "jaymen-air-construction-solution-piston-compressor",
    "code": "AC-02",
    "name": "High Pressure Reciprocating Piston Air Compressor",
    "category": "Piston Compressors",
    "spec": "Multi-stage deep finned cast iron reciprocating air compressor with high-capacity air receiver tank for workshop pneumatic lines.",
    "specsList": [
      {
        "label": "Tank Capacity",
        "val": "250 \u2013 500 Liters Tested Air Receiver"
      },
      {
        "label": "Pressure Rating",
        "val": "Up to 14 Bar (200 PSI)"
      },
      {
        "label": "Drive Type",
        "val": "Heavy Duty V-Belt with Safety Guard"
      },
      {
        "label": "Displacement",
        "val": "15 to 45 CFM"
      }
    ],
    "price": "\u20b968,000",
    "priceUnit": "/ unit"
  },
  {
    "id": "jaymen-air-construction-solution-air-dryer",
    "code": "AC-03",
    "name": "Refrigerated Compressed Air Dryer & Micro Filters",
    "category": "Air Treatment",
    "spec": "Dew point +3\u00b0C with stainless steel heat exchanger preventing pneumatic tooling rust, cylinder failure, and moisture contamination.",
    "specsList": [
      {
        "label": "Air Flow Capacity",
        "val": "30 to 450 CFM"
      },
      {
        "label": "Pressure Dew Point",
        "val": "+3\u00b0C (+37\u00b0F)"
      },
      {
        "label": "Refrigerant",
        "val": "Eco-friendly R134a / R410A"
      },
      {
        "label": "Drain Type",
        "val": "Zero Air Loss Electronic Auto Drain"
      }
    ],
    "price": "\u20b944,000",
    "priceUnit": "/ unit"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
