import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
import interior1 from "@/assets/interior-1.png";
import interior2 from "@/assets/interior-2.png";
import interior3 from "@/assets/interior-3.png";
import interior4 from "@/assets/interior-4.png";
import extHeadlight from "@/assets/exterior-headlight.png";
import extWheel from "@/assets/exterior-wheel.png";
import extTaillight from "@/assets/exterior-taillight.png";

export interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  trans: string;
  price: string;
  tag: string;
  img: string;
  images: string[];
  interiorImages: string[];
  kmDriven: string;
  mileage: string;
  ownerDetails: string;
  regNo: string;
  description: string;
  location: string;
  contactInfo: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}

export const cars: Car[] = [
  {
    id: 1,
    name: "BMW 5 Series 530d M Sport",
    brand: "BMW",
    model: "5 Series",
    year: 2021,
    fuel: "Petrol",
    trans: "Automatic",
    price: "₹ 38.5 L",
    tag: "Sedan",
    img: car1,
    images: [car1, extWheel, extHeadlight, extTaillight],
    interiorImages: [interior1, interior2, interior3, interior4],
    kmDriven: "42,000 KM",
    mileage: "14.8 kmpl",
    ownerDetails: "First Owner",
    regNo: "KL-08-CC-5000",
    description:
      "Experience the perfect blend of sportiness and luxury. This pristine BMW 5 Series M Sport package features carbon black exterior, ambient lighting, gesture control, adaptive suspension, and a powerful twin-power turbo engine. Meticulously maintained and fully serviced at authorized BMW service centers.",
    location: "Kochi, Kerala",
    contactInfo: {
      phone: "+91 98765 43210",
      email: "sales@rpmotors.in",
      whatsapp: "https://wa.me/919876543210?text=I%27m%20interested%20in%20the%20BMW%205%20Series",
    },
  },
  {
    id: 2,
    name: "Mercedes-Benz GLS 400d 4MATIC",
    brand: "Benz",
    model: "GLS Class",
    year: 2022,
    fuel: "Diesel",
    trans: "Automatic",
    price: "₹ 72.0 L",
    tag: "SUV",
    img: car2,
    images: [car2, extWheel, extHeadlight, extTaillight],
    interiorImages: [interior2, interior3, interior4, interior1],
    kmDriven: "18,500 KM",
    mileage: "11.2 kmpl",
    ownerDetails: "First Owner",
    regNo: "MH-12-RS-9999",
    description:
      "The S-Class of SUVs. This Mercedes-Benz GLS offers 7-seater luxury, panoramic sunroof, Burmester surround sound system, active air suspension, and dual-zone climate control for all three rows. Exceptional highway stability and imposing road presence.",
    location: "Pune, Maharashtra",
    contactInfo: {
      phone: "+91 98765 43211",
      email: "sales@rpmotors.in",
      whatsapp: "https://wa.me/919876543211?text=I%27m%20interested%20in%20the%20Mercedes%20GLS",
    },
  },
  {
    id: 3,
    name: "Audi A4 Premium 35 TFSI",
    brand: "Audi",
    model: "A4",
    year: 2020,
    fuel: "Petrol",
    trans: "Automatic",
    price: "₹ 32.0 L",
    tag: "Sedan",
    img: car3,
    images: [car3, extWheel, extHeadlight, extTaillight],
    interiorImages: [interior3, interior4, interior1, interior2],
    kmDriven: "55,000 KM",
    mileage: "17.4 kmpl",
    ownerDetails: "Second Owner",
    regNo: "DL-3C-AS-1111",
    description:
      "Understated elegance. The Audi A4 features Virtual Cockpit, leather upholstery, three-zone climate control, and smooth power delivery. Exceptionally quiet cabin and comfortable ride quality, perfect for daily commutes and weekend escapes.",
    location: "South Delhi, Delhi",
    contactInfo: {
      phone: "+91 98765 43212",
      email: "sales@rpmotors.in",
      whatsapp: "https://wa.me/919876543212?text=I%27m%20interested%20in%20the%20Audi%20A4",
    },
  },
  {
    id: 4,
    name: "Toyota Fortuner 2.8L Sigma 4 4x4",
    brand: "Toyota",
    model: "Fortuner",
    year: 2022,
    fuel: "Diesel",
    trans: "Automatic",
    price: "₹ 36.5 L",
    tag: "SUV",
    img: car4,
    images: [car4, extWheel, extHeadlight, extTaillight],
    interiorImages: [interior4, interior1, interior2, interior3],
    kmDriven: "62,000 KM",
    mileage: "12.0 kmpl",
    ownerDetails: "First Owner",
    regNo: "HR-26-DM-4444",
    description:
      "The ultimate go-anywhere SUV. Legendary reliability, 4-wheel drive system, ventilated front seats, premium audio, and bulletproof build. Highly sought-after combination of rugged off-road capability and everyday convenience.",
    location: "Gurugram, Haryana",
    contactInfo: {
      phone: "+91 98765 43213",
      email: "sales@rpmotors.in",
      whatsapp: "https://wa.me/919876543213?text=I%27m%20interested%20in%20the%20Toyota%20Fortuner",
    },
  },
  {
    id: 5,
    name: "Hyundai Tucson 2.0L Signature AWD",
    brand: "Hyundai",
    model: "Tucson",
    year: 2023,
    fuel: "Petrol",
    trans: "Automatic",
    price: "₹ 24.0 L",
    tag: "SUV",
    img: car5,
    images: [car5, extWheel, extHeadlight, extTaillight],
    interiorImages: [interior1, interior3, interior2, interior4],
    kmDriven: "12,000 KM",
    mileage: "13.5 kmpl",
    ownerDetails: "First Owner",
    regNo: "KA-51-MB-2222",
    description:
      "Futuristic design and cutting-edge tech. Features Hyundai SmartSense ADAS Level 2, dual 10.25-inch screens, heated and ventilated seats, premium Bose audio, and a premium AWD setup. Near-new condition with minimal running.",
    location: "Bengaluru, Karnataka",
    contactInfo: {
      phone: "+91 98765 43214",
      email: "sales@rpmotors.in",
      whatsapp: "https://wa.me/919876543214?text=I%27m%20interested%20in%20the%20Hyundai%20Tucson",
    },
  },
  {
    id: 6,
    name: "Kia Seltos GTX+ 1.5 T-GDI",
    brand: "Kia",
    model: "Seltos",
    year: 2023,
    fuel: "Petrol",
    trans: "Manual",
    price: "₹ 16.5 L",
    tag: "SUV",
    img: car6,
    images: [car6, extWheel, extHeadlight, extTaillight],
    interiorImages: [interior2, interior4, interior1, interior3],
    kmDriven: "24,000 KM",
    mileage: "16.1 kmpl",
    ownerDetails: "First Owner",
    regNo: "TS-09-EX-7777",
    description:
      "Sporty, feature-rich compact SUV. Equipped with a turbo petrol engine, GT Line styling accents, HUD (Head Up Display), 360-degree camera, wireless charging, and dynamic red interior stitching. Perfect for urban driving enthusiasts.",
    location: "Hyderabad, Telangana",
    contactInfo: {
      phone: "+91 98765 43215",
      email: "sales@rpmotors.in",
      whatsapp: "https://wa.me/919876543215?text=I%27m%20interested%20in%20the%20Kia%20Seltos",
    },
  },
];

export interface RtoDetails {
  state: string;
  rtoCode: string;
  office: string;
  district: string;
  vehicleClass: string;
  authority: string;
}

export function getRtoDetails(regNo: string): RtoDetails {
  const parts = regNo.split("-");
  const stateCode = parts[0] || "KL";
  const rtoNum = parts[1] || "08";
  const rtoCode = `${stateCode}-${rtoNum}`;

  // Default values
  let state = "Unknown State";
  let office = "Regional Transport Office";
  let district = "Unknown District";
  const vehicleClass = "Private Passenger Vehicle (LMV)";
  let authority = "Regional Transport Authority";

  if (stateCode === "KL") {
    state = "Kerala";
    if (rtoNum === "08") {
      office = "Thrissur RTO";
      district = "Thrissur";
      authority = "Joint Regional Transport Officer, Thrissur";
    } else {
      office = "Ernakulam RTO";
      district = "Ernakulam";
      authority = "Regional Transport Officer, Ernakulam";
    }
  } else if (stateCode === "MH") {
    state = "Maharashtra";
    if (rtoNum === "12") {
      office = "Pune RTO";
      district = "Pune";
      authority = "Regional Transport Officer, Pune";
    } else {
      office = "Mumbai Central RTO";
      district = "Mumbai";
      authority = "Regional Transport Officer, Mumbai Central";
    }
  } else if (stateCode === "DL") {
    state = "Delhi";
    if (rtoNum === "03" || rtoNum === "3C") {
      office = "Sheikh Sarai RTO";
      district = "South Delhi";
      authority = "Transport Department, Sheikh Sarai, Delhi";
    } else {
      office = "Mall Road RTO";
      district = "North Delhi";
      authority = "Transport Department, Mall Road, Delhi";
    }
  } else if (stateCode === "HR") {
    state = "Haryana";
    if (rtoNum === "26") {
      office = "Gurgaon RTO";
      district = "Gurugram";
      authority = "Registering & Licensing Authority, Gurugram";
    }
  } else if (stateCode === "KA") {
    state = "Karnataka";
    if (rtoNum === "51") {
      office = "Bangalore South RTO (Electronics City)";
      district = "Bengaluru Urban";
      authority = "Regional Transport Officer, Electronics City, Bengaluru";
    }
  } else if (stateCode === "TS") {
    state = "Telangana";
    if (rtoNum === "09") {
      office = "Khairatabad RTO";
      district = "Hyderabad";
      authority = "Regional Transport Officer, Hyderabad Central";
    }
  }

  return {
    state,
    rtoCode,
    office,
    district,
    vehicleClass,
    authority,
  };
}
