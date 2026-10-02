import type { ImageMeta } from './images';
import { siteImages } from './images';

export interface NavItem {
  label: string;
  href: string;
}

export type ServiceScene = 'constructions' | 'roads' | 'canals' | 'reservoirs' | 'checkdams';

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  scopes: string[];
  specs: ServiceSpec[];
  scene: ServiceScene;
  image: ImageMeta;
}

export interface Office {
  type: 'Head Office' | 'Branch Office';
  state: string;
  line1: string;
  line2: string;
  city: string;
  pincode: string;
  full: string;
  mapQuery: string;
}

export interface ContactLine {
  label: string;
  display: string;
  tel: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  initials: string;
  photo?: string;
  bio: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GSTRegistration {
  state: string;
  gstin: string;
  principalPlace: string;
}

export interface ContractorRegistration {
  authority: string;
  department: string;
  classification: string;
  number: string;
  note?: string;
}

export interface FinancialFigure {
  label: string;
  value: string;
  detail: string;
  udin: string;
}

export interface CorporateProfile {
  legalName: string;
  constitution: string;
  firmRegistration: string;
  registrationAct: string;
  registrar: string;
  registrationDate: string;
  establishedYear: number;
  pan: string;
  gst: GSTRegistration[];
  msme: {
    udyam: string;
    category: string;
    nicCode: string;
    nicDescription: string;
  };
  contractorRegistrations: ContractorRegistration[];
  auditor: string;
  financials: FinancialFigure[];
}

export interface BusinessData {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: {
    display: string;
    tel: string;
    whatsapp: string;
    whatsappFormatted: string;
  };
  contactLines: ContactLine[];
  email: string;
  offices: Office[];
  hours: {
    days: string;
    timing: string;
    openHour: number; // 9 AM
    closeHour: number; // 6 PM (18)
    timezone: string; // Asia/Kolkata
    sunday: string;
  };
  corporate: CorporateProfile;
  stats: Array<{
    value: number;
    suffix: string;
    prefix?: string;
    decimals?: number;
    label: string;
  }>;
  about: {
    headline: string;
    statement: string;
    summary: string;
    experienceBadge: string;
  };
  navLinks: NavItem[];
  services: ServiceItem[];
  states: Array<{
    number: string;
    name: string;
    subtext: string;
  }>;
  leadership: LeadershipMember[];
  approach: ApproachStep[];
  machinery: {
    headline: string;
    note: string;
    fleet: Array<{ name: string; detail: string }>;
  };
  faqs: FAQItem[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const siteData: BusinessData = {
  name: 'M/s Chakravarthy Constructions',
  shortName: 'M/s Chakravarthy',
  tagline: 'Class-1 Civil Contractor & Tier-1 Infrastructure Partner.',
  subTagline:
    'Hard rock excavation, controlled blasting, highway earthworks, reservoirs, check dams and canal networks across Andhra Pradesh, Telangana and Karnataka.',
  phone: {
    display: '+91 81257 25425',
    tel: 'tel:+918125725425',
    whatsapp: 'https://wa.me/918125725425',
    whatsappFormatted: '918125725425',
  },
  contactLines: [
    { label: 'Primary Corporate Line', display: '+91 81257 25425', tel: 'tel:+918125725425' },
    { label: 'Project Operations Desk', display: '+91 63051 67125', tel: 'tel:+916305167125' },
  ],
  email: 'srichakravarthyconstructions@gmail.com',
  offices: [
    {
      type: 'Head Office',
      state: 'Telangana',
      line1: 'Flat No. 201, SVR Harsha Homes, D.No. 35/122',
      line2: 'Balaji Nagar, Kukatpally',
      city: 'Hyderabad',
      pincode: '500072',
      full: 'Flat No. 201, SVR Harsha Homes, D.No. 35/122, Balaji Nagar, Kukatpally, Hyderabad – 500072, Telangana',
      mapQuery: 'Balaji Nagar, Kukatpally, Hyderabad, Telangana 500072',
    },
    {
      type: 'Branch Office',
      state: 'Andhra Pradesh',
      line1: 'D.No. 1-410, 1st Road Extension',
      line2: 'Dwaraka Nagar',
      city: 'Anantapur',
      pincode: '515001',
      full: 'D.No. 1-410, 1st Road Extension, Dwaraka Nagar, Anantapur – 515001, Andhra Pradesh',
      mapQuery: 'Dwaraka Nagar, Anantapur, Andhra Pradesh 515001',
    },
  ],
  hours: {
    days: 'Monday – Saturday',
    timing: '9:00 AM – 6:00 PM',
    openHour: 9,
    closeHour: 18,
    timezone: 'Asia/Kolkata',
    sunday: 'Sunday Holiday',
  },
  corporate: {
    legalName: 'M/s Chakravarthy Constructions',
    constitution: 'Registered Partnership Firm',
    firmRegistration: 'Firm No. 1520 of 2009',
    registrationAct: 'Section 58(1), Indian Partnership Act, 1932',
    registrar: 'Registrar of Firms, Ranga Reddy District',
    registrationDate: '22nd August 2009',
    establishedYear: 2009,
    pan: 'AAGFC3799N',
    gst: [
      {
        state: 'Andhra Pradesh',
        gstin: '37AAGFC3799N1Z0',
        principalPlace: 'Dwaraka Nagar, Anantapur',
      },
      {
        state: 'Telangana',
        gstin: '36AAGFC3799N1ZQ',
        principalPlace: 'Balaji Nagar, Kukatpally, Hyderabad',
      },
    ],
    msme: {
      udyam: 'UDYAM-AP-01-0004590',
      category: 'Small Enterprise',
      nicCode: '42204',
      nicDescription: 'Construction & maintenance of water reservoirs, mains, and irrigation systems',
    },
    contractorRegistrations: [
      {
        authority: 'Government of Andhra Pradesh',
        department: 'Water Resources Department',
        classification: 'Class-1 Contractor (Civil)',
        number: 'COT/AP/FC/807/2020',
        note: 'Qualified to tender for single works up to ₹10 Crores',
      },
      {
        authority: 'Government of Karnataka',
        department: 'Public Works Department',
        classification: 'Class-1 Civil Contractor',
        number: 'CBS/C1/CIVIL/11740/2019',
      },
    ],
    auditor: 'M/s Lokireddy & Co., Chartered Accountants',
    financials: [
      {
        label: 'Audited Net Worth',
        value: '₹3,10,79,450/-',
        detail: 'As of 29-04-2025',
        udin: '25230189BMJOWK6170',
      },
      {
        label: '10-Year Contract Receipts',
        value: '₹26.50+ Crores',
        detail: 'Cumulative turnover; ₹6.55 Crores in FY 2024-25',
        udin: '25209099BMNYXU9552',
      },
    ],
  },
  stats: [
    { value: 26.5, suffix: '+ Cr', prefix: '₹', decimals: 2, label: '10-year contract receipts' },
    { value: 10, suffix: ' Cr', prefix: '₹', label: 'AP WRD single-work tender limit' },
    { value: 3, suffix: '', label: 'States of operation' },
  ],
  about: {
    headline: 'A 20+ year trajectory in heavy earthworks, rock and water.',
    statement:
      'M/s Chakravarthy Constructions is a registered partnership firm (Firm No. 1520 of 2009) and a Class-1 civil contractor with the Water Resources Department, Government of Andhra Pradesh, and the Public Works Department, Government of Karnataka.',
    summary:
      'Led by Chairman & Founder Sri D. Nagaraju and Managing Director Sri D. Chakravarthy, the firm executes reservoirs, check dams, canal networks, highway earthworks and hard rock excavation across Andhra Pradesh, Telangana and Karnataka — both as a direct government contractor and as a tier-1 subcontracting partner to leading EPC companies.',
    experienceBadge: 'Class-1 Civil Contractor · Est. 2009',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Credentials', href: '/credentials' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    {
      id: 'rock-excavation',
      number: '01',
      name: 'Hard Rock Excavation, Drilling & Controlled Blasting',
      shortName: 'Rock Excavation & Blasting',
      tagline: 'Opencast Rock Works',
      description:
        'Deep-cut opencast excavation, DTH wagon drilling on a 2.5m × 2.0m pattern, DGMS-licensed controlled blasting, and hydraulic rock breaking to sub-500mm fragmentation.',
      scopes: [
        'Deep-cut opencast hard rock excavation',
        'DTH wagon drilling on 2.5m × 2.0m pattern',
        'DGMS-licensed controlled blasting operations',
        'Hydraulic rock breaking (<500mm fragmentation)',
      ],
      specs: [
        { label: 'Drill Pattern', value: '2.5m × 2.0m DTH Wagon' },
        { label: 'Blasting', value: 'DGMS-Licensed Controlled' },
        { label: 'Fragmentation', value: '< 500mm Hydraulic Breaking' },
        { label: 'Measurement', value: 'Bank CUM under JMC' },
      ],
      scene: 'constructions',
      image: siteImages.serviceConstructions,
    },
    {
      id: 'highway-earthworks',
      number: '02',
      name: 'Highway Earthworks, Embankment & Subgrade Formation',
      shortName: 'Highway Earthworks',
      tagline: 'Embankment & Subgrade',
      description:
        'Bulk borrow excavation, long-lead hauling beyond 10 km, and MoRTH Clause 305/407 embankment and subgrade construction meeting >10% soaked CBR standards.',
      scopes: [
        'Bulk borrow-area excavation',
        'Long-lead hauling (>10 km)',
        'MoRTH Clause 305 embankment construction',
        'MoRTH Clause 407 subgrade formation',
      ],
      specs: [
        { label: 'Specification', value: 'MoRTH Clause 305 / 407' },
        { label: 'Subgrade Strength', value: '> 10% Soaked CBR' },
        { label: 'Haul Lead', value: 'Long-Lead > 10 km' },
        { label: 'Clients', value: 'NHAI Corridors via EPC' },
      ],
      scene: 'roads',
      image: siteImages.serviceRoads,
    },
    {
      id: 'water-resources',
      number: '03',
      name: 'Water Resources, Reservoirs & Check Dams',
      shortName: 'Reservoirs & Check Dams',
      tagline: 'Bunds, Tanks & Weirs',
      description:
        'Earthen bund construction, cut-off trench (COT) stabilization, sand blankets, rock-toe filters, 225mm–300mm dry rubble revetment, and desilting.',
      scopes: [
        'Earthen bund and embankment construction',
        'Cut-off trench (COT) stabilization',
        'Sand blankets and rock-toe filters',
        '225mm–300mm dry rubble revetment',
        'Tank and reservoir desilting',
      ],
      specs: [
        { label: 'Embankment', value: 'Homogeneous Earthen Bund' },
        { label: 'Seepage Control', value: 'COT, Sand Blanket, Rock Toe' },
        { label: 'Slope Protection', value: '225–300mm Dry Rubble Revetment' },
        { label: 'Registration', value: 'AP WRD Class-1 (Civil)' },
      ],
      scene: 'reservoirs',
      image: siteImages.serviceReservoirs,
    },
    {
      id: 'canal-networks',
      number: '04',
      name: 'Canal Networks, Off-Take Sluices & Industrial Drains',
      shortName: 'Canals & Drains',
      tagline: 'Conveyance & Drainage',
      description:
        'SRSP high-level off-take (O.T.) sluice structures, distributary canal lining, NP2/NP3 pipe crossings, and heavy industrial storm drainage systems.',
      scopes: [
        'SRSP high-level off-take (O.T.) sluices',
        'Distributary canal lining',
        'NP2 / NP3 pipe crossings',
        'Heavy industrial storm water drains',
      ],
      specs: [
        { label: 'Structures', value: 'High-Level O.T. Sluices' },
        { label: 'Lining', value: 'Distributary Canal Lining' },
        { label: 'Crossings', value: 'NP2 / NP3 Pipe Culverts' },
        { label: 'Industrial', value: 'VRCC Storm Water Drains' },
      ],
      scene: 'canals',
      image: siteImages.serviceCanals,
    },
    {
      id: 'epc-subcontract',
      number: '05',
      name: 'Tier-1 EPC Subcontract Execution & Fleet Mobilization',
      shortName: 'EPC Subcontracting',
      tagline: 'Turnkey Execution',
      description:
        'Turnkey execution deploying 20T/30T excavators, breakers, tipper fleets, dewatering units, mining engineers and safety personnel under Joint Measurement Certification (JMC).',
      scopes: [
        '20T / 30T excavators and hydraulic breakers',
        'Tipper fleets and dewatering units',
        'Mining engineers and safety personnel',
        'Billing under Joint Measurement Certification (JMC)',
      ],
      specs: [
        { label: 'Excavators', value: '20T / 30T Class' },
        { label: 'Fleet', value: 'Breakers, Tippers, Dewatering' },
        { label: 'Personnel', value: 'Mining Engineers & Safety' },
        { label: 'Billing', value: 'Joint Measurement (JMC)' },
      ],
      scene: 'checkdams',
      image: siteImages.serviceCheckdams,
    },
  ],
  states: [
    {
      number: '01',
      name: 'Andhra Pradesh',
      subtext:
        'Branch office at Anantapur; Class-1 WRD registration; pumped storage, highway and minor irrigation works.',
    },
    {
      number: '02',
      name: 'Telangana',
      subtext:
        'Head office at Kukatpally, Hyderabad; reservoirs, SRSP canal structures and APIIC industrial drains.',
    },
    {
      number: '03',
      name: 'Karnataka',
      subtext: 'Class-1 Civil Contractor licence with the Public Works Department, Government of Karnataka.',
    },
  ],
  leadership: [
    {
      name: 'Sri D. Nagaraju',
      role: 'Chairman & Founder',
      title: 'Managing Partner',
      initials: 'DN',
      bio: 'Founded the firm and guides its governance, departmental relationships and long-standing client partnerships.',
    },
    {
      name: 'Sri D. Chakravarthy',
      role: 'Managing Director',
      title: 'Managing Partner',
      initials: 'DC',
      bio: 'Leads project execution, EPC subcontract delivery and fleet mobilization across Andhra Pradesh, Telangana and Karnataka.',
    },
  ],
  approach: [
    {
      number: '01',
      title: 'Tender & Mobilize',
      description: 'Scope evaluation, tender qualification, site survey and mobilization of plant, fleet and personnel.',
    },
    {
      number: '02',
      title: 'Survey & Set-Out',
      description: 'Levels, cross-sections and drill patterns established and agreed jointly with the client.',
    },
    {
      number: '03',
      title: 'Execute',
      description: 'Excavation, blasting, compaction and structural works to departmental and MoRTH specifications.',
    },
    {
      number: '04',
      title: 'Measure & Hand Over',
      description: 'Joint Measurement Certification, quality records and completion certificates from the client.',
    },
  ],
  machinery: {
    headline: 'Plant Mobilization & Heavy Machinery Deployment',
    note: 'Fleet strength is mobilized per contract scope and measured output. Deployment schedules for a specific work are shared during tender and subcontract discussions.',
    fleet: [
      { name: '20T / 30T Hydraulic Excavators', detail: 'Bulk excavation, benching and loading' },
      { name: 'Hydraulic Rock Breakers', detail: 'Secondary breaking to <500mm' },
      { name: 'DTH Wagon Drills', detail: '2.5m × 2.0m blast-hole patterns' },
      { name: 'Tipper Fleets', detail: 'Haulage including long-lead >10 km' },
      { name: 'Dewatering Units', detail: 'Foundation and COT dewatering' },
      { name: 'Mining Engineers & Safety Staff', detail: 'DGMS-compliant blasting supervision' },
    ],
  },
  faqs: [
    {
      question: 'What is your contractor registration and tender capacity?',
      answer:
        'We are registered as a Class-1 Contractor (Civil) with the Water Resources Department, Government of Andhra Pradesh (Reg. No. COT/AP/FC/807/2020), qualified to tender for single works up to ₹10 Crores, and as a Class-1 Civil Contractor with the Public Works Department, Government of Karnataka (Licence No. CBS/C1/CIVIL/11740/2019).',
    },
    {
      question: 'Do you take up subcontract packages from EPC companies?',
      answer:
        'Yes. We operate as a tier-1 subcontracting partner for EPC contractors on highway, pumped storage and industrial projects — including works for Dilip Buildcon (NHAI), MEIL and APS Mining (Adani PSP) — with turnkey fleet mobilization and billing under Joint Measurement Certification.',
    },
    {
      question: 'Which regions do you work in?',
      answer:
        'We operate across Andhra Pradesh, Telangana and Karnataka, with a head office in Kukatpally, Hyderabad and a branch office in Dwaraka Nagar, Anantapur. We hold GST registrations in both Andhra Pradesh and Telangana.',
    },
    {
      question: 'What is your audited financial standing?',
      answer:
        'As certified by M/s Lokireddy & Co., Chartered Accountants, our net worth is ₹3,10,79,450/- as of 29-04-2025, and our 10-year cumulative contract receipts exceed ₹26.50 Crores, reaching ₹6.55 Crores in FY 2024-25.',
    },
    {
      question: 'Is the firm MSME registered?',
      answer:
        'Yes. The firm is registered as a Small Enterprise under Udyam (UDYAM-AP-01-0004590), NIC Code 42204 — construction and maintenance of water reservoirs, mains and irrigation systems.',
    },
    {
      question: 'How can we request a quotation or share tender documents?',
      answer:
        'Use the project inquiry form on this website, call the Primary Corporate Line at +91 81257 25425 or the Project Operations Desk at +91 63051 67125, or email srichakravarthyconstructions@gmail.com.',
    },
  ],
  // Optional social links supported - none provided per brief
  socialLinks: {},
};
