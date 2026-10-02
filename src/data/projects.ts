export type ProjectStatus = 'Active' | 'Completed';

export type ProjectCategory =
  | 'Rock Excavation'
  | 'Highway Earthworks'
  | 'Water Resources'
  | 'Canals & Drains';

export interface Project {
  id: string;
  title: string;
  client?: string;
  location: string;
  state: 'Andhra Pradesh' | 'Telangana' | 'Karnataka';
  category: ProjectCategory;
  status: ProjectStatus;
  value: string;
  valueLabel: string;
  scope: string;
  quantities?: string[];
}

/**
 * Verified project records. Values are as certified/ordered by the client;
 * internal debit breakdowns, diesel recovery and margin schedules are
 * deliberately excluded from this public dataset.
 */
export const projects: Project[] = [
  {
    id: 'chitravathi-psp',
    title: '500 MW Chitravathi Pumped Storage Project',
    client: 'Adani PSP / APS Mining',
    location: 'Chitravathi, Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Rock Excavation',
    status: 'Active',
    value: '₹16.99 Cr',
    valueLabel: 'Contract Value',
    scope: 'Opencast drilling, blasting, breaking and haulage over a 4 km lead.',
    quantities: ['3,00,000 CUM opencast rock works', '4 km haulage'],
  },
  {
    id: 'bvec-pkg4',
    title: 'Bengaluru–Vijayawada Greenfield Economic Corridor, Package-4',
    client: 'Dilip Buildcon / NHAI',
    location: 'Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Rock Excavation',
    status: 'Active',
    value: '₹3.40+ Cr',
    valueLabel: 'Gross Progress Billed',
    scope: 'Hard rock excavation, benching and profile dressing.',
    quantities: ['1,28,065+ Bank CUM hard rock excavation'],
  },
  {
    id: 'nh544d-muchukota-bugga',
    title: 'NH-544D Muchukota–Bugga Section',
    client: 'MEIL',
    location: 'Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Highway Earthworks',
    status: 'Active',
    value: '₹4.36 Cr',
    valueLabel: 'Total Order Value',
    scope: 'Subgrade and embankment construction with borrow soils from Aluru.',
    quantities: ['84,000+ CUM subgrade & embankment'],
  },
  {
    id: 'chennarayaswamy-tanakal',
    title: 'Chennarayaswamy Irrigation Regulation System, Tanakal',
    client: 'Penukonda Division',
    location: 'Tanakal, Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Water Resources',
    status: 'Active',
    value: '₹33.24 L',
    valueLabel: 'Work Value',
    scope: 'Comprehensive surplus weir and earthen regulation restoration.',
  },
  {
    id: 'gunipalli-mi-tank',
    title: 'Gunipalli MI Tank Rehabilitation',
    client: 'APIIATP (World Bank-assisted)',
    location: 'Ananthapuramu, Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Water Resources',
    status: 'Completed',
    value: '₹58.94 L',
    valueLabel: 'Certified Completion',
    scope: 'Minor irrigation tank rehabilitation with homogeneous embankment compaction.',
    quantities: ['18,240 CUM homogeneous compaction'],
  },
  {
    id: 'palamadugu-vagu',
    title: 'Palamadugu Vagu New Reservoir Formation',
    location: 'Adilabad, Telangana',
    state: 'Telangana',
    category: 'Water Resources',
    status: 'Completed',
    value: '₹2.35 Cr',
    valueLabel: 'Certified Value',
    scope: 'New reservoir formation including excavation and concrete works.',
    quantities: ['47,833 CUM excavation', '3,569 CUM concrete'],
  },
  {
    id: 'sarala-sagar',
    title: 'Sarala Sagar Modernization Project',
    location: 'Mahabubnagar, Telangana',
    state: 'Telangana',
    category: 'Water Resources',
    status: 'Completed',
    value: '₹3.42 Cr',
    valueLabel: 'Certified Value',
    scope: 'Restoration of the historic siphon and earthen dam.',
  },
  {
    id: 'utnoor-pendalguda',
    title: 'Utnoor Pendalguda Reservoir',
    location: 'Adilabad, Telangana',
    state: 'Telangana',
    category: 'Water Resources',
    status: 'Completed',
    value: '₹2.64 Cr',
    valueLabel: 'Certified Value',
    scope: 'Tank formation with earthen embankment.',
    quantities: ['1,14,246 CUM embankment'],
  },
  {
    id: 'apiic-ida-mallapur',
    title: 'APIIC Industrial Storm Water Drains, IDA Mallapur',
    client: 'APIIC',
    location: 'IDA Mallapur, Hyderabad',
    state: 'Telangana',
    category: 'Canals & Drains',
    status: 'Completed',
    value: '₹2.28 Cr',
    valueLabel: 'Certified Value',
    scope: 'Rock excavation and VRCC masonry storm water drainage.',
  },
  {
    id: 'koundinya-weir',
    title: 'Koundinya River Diversion Weir',
    location: 'Chittoor, Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Water Resources',
    status: 'Completed',
    value: '₹1.81 Cr',
    valueLabel: 'Certified Value',
    scope: 'Drinking water augmentation anicut across the Koundinya river.',
  },
];
