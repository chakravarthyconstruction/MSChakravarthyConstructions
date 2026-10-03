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
  auditor?: string;
  financials?: FinancialFigure[];
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
  name: 'Chakravarthy Constructions',
  shortName: 'Chakravarthy',
  tagline: 'Special Class Contractor & Civil Infrastructure Partner.',
  subTagline:
    '40+ year trajectory in heavy earthworks, reservoirs, roads & highways — specialized in Irrigation Department works across Andhra Pradesh, Telangana, and Karnataka.',
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
    legalName: 'Chakravarthy Constructions',
    constitution: 'Registered Partnership Firm',
    firmRegistration: 'Special Class Contractor',
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
        classification: 'Special Class Contractor',
        number: 'COT/AP/FC/807/2020',
        note: 'Qualified for major highway, earthwork, and water resource infrastructure',
      },
      {
        authority: 'Government of Karnataka',
        department: 'Public Works Department',
        classification: 'Special Class Contractor',
        number: 'CBS/C1/CIVIL/11740/2019',
      },
    ],
  },
  stats: [
    { value: 50, suffix: '+ Cr', prefix: '₹', label: 'Ongoing Projects' },
    { value: 40, suffix: '+ Yrs', label: 'Engineering Trajectory' },
    { value: 10, suffix: '+', label: 'Key Projects' },
  ],
  about: {
    headline: 'A 40+ year trajectory in heavy earthworks, reservoirs, roads & highways.',
    statement:
      'Chakravarthy Constructions is a Special Class Contractor registered with the Water Resources Department, Government of Andhra Pradesh, and the Public Works Department, Government of Karnataka, carrying forward a 40+ year multi-generational engineering trajectory.',
    summary:
      'Led by Chairman & Founder Sri D. Nagaraju and Managing Director Sri D. Chakravarthy, the firm specializes extensively in Irrigation Department works — delivering major reservoirs, earthen bund formations, check dams, canal networks, and bulk earthworks, alongside national highway corridors across Andhra Pradesh, Telangana, and Karnataka.',
    experienceBadge: 'Special Class Contractor · 40+ Year Legacy',
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
        { label: 'Registration', value: 'Special Class Contractor' },
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
      name: 'Turnkey Infrastructure Execution & Fleet Mobilization',
      shortName: 'Infrastructure Execution',
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
        'Branch office at Anantapur; Special Class Contractor registration; pumped storage, highways and road projects, earth works and irrigation.',
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
      subtext: 'Special Class Contractor registration with the Public Works Department, Government of Karnataka.',
    },
  ],
  leadership: [
    {
      name: 'DHARMAVARAM NAGARAJU',
      role: 'Chairman & Founder',
      title: 'Founder & Chairman',
      initials: 'DN',
      photo: '/images/leadership/nagaraju-chairman.webp',
      bio: 'Founded the firm and steers strategic governance, institutional client relationships, and a 40+ year multi-generational engineering trajectory across Andhra Pradesh, Telangana, and Karnataka.',
    },
    {
      name: 'DHARMAVARAM CHAKRAVARTHY',
      role: 'Managing Director',
      title: 'Managing Director',
      initials: 'DC',
      photo: '/images/leadership/chakravarthy-md.webp',
      bio: 'Directs turnkey project delivery, heavy machinery fleet mobilization, highway economic corridors, water reservoirs, and specialized Irrigation Department works.',
    },
    {
      name: 'BOMMIREDDY SREEMANTH REDDY',
      role: 'Project Director',
      title: 'Executive Director — Projects',
      initials: 'BSR',
      photo: '/images/leadership/sreemanth-reddy.webp',
      bio: 'Supervises on-site engineering execution, surveying, quality assurance, and subgrade compaction across multi-lane highways and dams.',
    },
    {
      name: 'M CHANDRA BABU',
      role: 'Project Director',
      title: 'Executive Director — Projects & Operations',
      initials: 'MCB',
      photo: '/images/leadership/chandra-babu.webp',
      bio: 'Directs heavy machinery mobilization, quarrying logistics, crushing operations, and inter-state corridor plant deployment.',
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
        'We are registered as a Special Class Contractor with the Water Resources Department, Government of Andhra Pradesh (Reg. No. COT/AP/FC/807/2020), qualified to tender for major civil infrastructure works, and with the Public Works Department, Government of Karnataka (Licence No. CBS/C1/CIVIL/11740/2019).',
    },
    {
      question: 'Do you take up subcontract packages from EPC companies?',
      answer:
        'Yes. We operate as an execution partner for contractors on highways and road projects, bulk earth works, pumped storage, and industrial projects — including works for Dilip Buildcon (NHAI), MEIL and APS Mining (Adani PSP) — with turnkey fleet mobilization and billing under Joint Measurement Certification.',
    },
    {
      question: 'Which regions do you work in?',
      answer:
        'We operate across Andhra Pradesh, Telangana and Karnataka, with a head office in Kukatpally, Hyderabad and a branch office in Dwaraka Nagar, Anantapur. We hold GST registrations in both Andhra Pradesh and Telangana.',
    },
    {
      question: 'What is your current infrastructure delivery capacity?',
      answer:
        'With over ₹50+ Crores in ongoing infrastructure projects and a 40+ year multi-generational engineering trajectory, we maintain deep operational capacity across heavy earthworks, reservoirs, canals, and multi-lane national highways.',
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
