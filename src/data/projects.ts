export type ProjectStatus = 'Active' | 'Completed';

export type ProjectCategory =
  | 'Highways & Road Projects'
  | 'Water Resources'
  | 'Earth Works & Grading'
  | 'Rock Excavation';

export interface Project {
  id: string;
  projectNumber: number;
  title: string;
  client?: string;
  location: string;
  district?: string;
  state: 'Andhra Pradesh' | 'Telangana' | 'Karnataka';
  category: ProjectCategory;
  status: ProjectStatus;
  scope: string;
  highlight?: string;
  heroImage: string;
  gallery: string[];
  pressImage?: string;
  pressTitle?: string;
  value?: string;
  valueLabel?: string;
  quantities?: string[];
}

/**
 * 10 Key Infrastructure & Civil Engineering Projects of Chakravarthy Constructions.
 * Includes official site photography, chainages, and government / EPC execution scopes.
 */
export const projects: Project[] = [
  {
    id: 'project-1-jukkal-highway',
    projectNumber: 1,
    title: 'Highway Four-Lane Road Project — Jukkal',
    client: 'R&B / Highway Infrastructure Division',
    location: 'Jukkal, Kamareddy, Nizamabad District',
    district: 'Kamareddy / Nizamabad District',
    state: 'Telangana',
    category: 'Highways & Road Projects',
    status: 'Completed',
    scope: 'Four-lane highway construction, heavy roadbed earthworks, subgrade grading, embankment stabilization, and bituminous surfacing across the Jukkal corridor.',
    heroImage: '/projects/project-1/hero.webp',
    gallery: [
      '/projects/project-1/img-1.webp',
      '/projects/project-1/img-2.webp',
      '/projects/project-1/img-3.webp',
      '/projects/project-1/img-4.webp',
    ],
  },
  {
    id: 'project-2-adani-psp-chitravathi',
    projectNumber: 2,
    title: 'Adani PSP Project — Chitravathi Balancing Reservoir',
    client: 'Adani PSP / APS Mining',
    location: 'Parnapally, Anantapur District',
    district: 'Anantapur District',
    state: 'Andhra Pradesh',
    category: 'Water Resources',
    status: 'Active',
    highlight: '₹50+ Cr Ongoing Segment',
    scope: '500 MW Chitravathi pumped storage project works — heavy opencast rock drilling, controlled blasting, reservoir bund compaction, and haulage.',
    heroImage: '/projects/project-2/hero.webp',
    gallery: [
      '/projects/project-2/img-1.webp',
      '/projects/project-2/img-2.webp',
      '/projects/project-2/img-3.webp',
      '/projects/project-2/img-4.webp',
    ],
  },
  {
    id: 'project-3-bangalore-chennai-montecarlo',
    projectNumber: 3,
    title: 'Bangalore–Chennai Expressway (Montecarlo Subcontract)',
    client: 'Montecarlo Limited / NHAI',
    location: 'Ch. 71+400 to Km 96+300 Corridor',
    district: 'Inter-State Economic Corridor',
    state: 'Andhra Pradesh',
    category: 'Highways & Road Projects',
    status: 'Completed',
    highlight: '24.9 km Subcontract Corridor',
    scope: 'Subcontract execution from Km 71+400 to Km 96+300; high-speed expressway embankment, subgrade preparation, deep rock cutting, and major earthwork grading.',
    heroImage: '/projects/project-3/hero.webp',
    gallery: [
      '/projects/project-3/img-1.webp',
      '/projects/project-3/img-2.webp',
      '/projects/project-3/img-3.webp',
      '/projects/project-3/img-4.webp',
    ],
  },
  {
    id: 'project-4-bangalore-chennai-6lane',
    projectNumber: 4,
    title: 'Bangalore to Chennai Express Highway 6-Lane Project',
    client: 'NHAI / EPC Partner',
    location: 'Southern Expressway Economic Corridor',
    district: 'High-Speed Expressway Section',
    state: 'Andhra Pradesh',
    category: 'Highways & Road Projects',
    status: 'Active',
    scope: 'Heavy 6-lane access-controlled expressway construction, structural grading, cross-drainage structures, and massive subgrade compaction.',
    heroImage: '/projects/project-4/hero.webp',
    gallery: [
      '/projects/project-4/img-1.webp',
      '/projects/project-4/img-2.webp',
      '/projects/project-4/img-3.webp',
    ],
  },
  {
    id: 'project-5-pulivendula-vijayawada-6lane',
    projectNumber: 5,
    title: 'Pulivendula to Vijayawada Greenfield Express Highway 6-Lane Project',
    client: 'Dilip Buildcon / NHAI',
    location: 'Pulivendula – Vijayawada Greenfield Corridor',
    district: 'Andhra Pradesh Economic Corridor',
    state: 'Andhra Pradesh',
    category: 'Highways & Road Projects',
    status: 'Active',
    highlight: 'Greenfield 6-Lane Corridor',
    scope: 'Greenfield 6-lane economic corridor excavation, major rock cut-and-fill operations, benching, embankment slope protection, and formation works.',
    heroImage: '/projects/project-5/hero.webp',
    gallery: [
      '/projects/project-5/img-1.webp',
      '/projects/project-5/img-2.webp',
      '/projects/project-5/img-3.webp',
    ],
  },
  {
    id: 'project-6-kia-motors-penukonda',
    projectNumber: 6,
    title: 'Kia Motors Penukonda Manufacturing Plant Construction Levelling (2018)',
    client: 'KIA Motors India / EPC Main Contractor',
    location: 'Penukonda, Sri Sathya Sai District',
    district: 'Sri Sathya Sai (Anantapur) District',
    state: 'Andhra Pradesh',
    category: 'Earth Works & Grading',
    status: 'Completed',
    highlight: 'Featured in Regional Press / Newspaper',
    scope: 'Turnkey industrial site levelling, hard rock excavation, controlled blasting, and formation works for the 500+ acre Kia Motors automobile manufacturing plant.',
    pressImage: '/images/kia-motors-press-clipping.webp',
    pressTitle: 'Regional Press Coverage: "చక్రవర్తి" (Chakravarthy) credited among prime contractors executing heavy machinery operations for Kia Motors Penukonda plant.',
    heroImage: '/projects/project-6/hero.webp',
    gallery: [
      '/projects/project-6/img-1.webp',
      '/projects/project-6/img-2.webp',
      '/projects/project-6/img-3.webp',
      '/projects/project-6/img-4.webp',
      '/projects/project-6/img-5.webp',
      '/projects/project-6/img-6.webp',
      '/projects/project-6/img-7.webp',
      '/projects/project-6/img-8.webp',
      '/projects/project-6/img-9.webp',
      '/projects/project-6/img-10.webp',
      '/projects/project-6/img-11.webp',
      '/projects/project-6/img-12.webp',
      '/projects/project-6/img-13.webp',
    ],
  },
  {
    id: 'project-7-sarala-sagar-reservoir',
    projectNumber: 7,
    title: 'Sarala Sagar Modernization & Reservoir Restoration Project',
    client: 'Irrigation & CAD Department',
    location: 'Mahabubnagar',
    district: 'Mahabubnagar District',
    state: 'Telangana',
    category: 'Water Resources',
    status: 'Completed',
    highlight: 'Irrigation Dept. Landmark',
    scope: 'Comprehensive modernization of the historic Sarala Sagar reservoir, automatic siphon spillway system rehabilitation, earthen dam reinforcement, and sluice structures.',
    heroImage: '/projects/project-7/hero.webp',
    gallery: [
      '/projects/project-7/img-1.webp',
      '/projects/project-7/img-2.webp',
    ],
  },
  {
    id: 'project-8-cg-project-dam-kadiri',
    projectNumber: 8,
    title: 'CG Project Dam Reservoir — Near Kokkanti Cross, Kadiri',
    client: 'Water Resources / Irrigation Department',
    location: 'Near Kokkanti Cross, Kadiri, Anantapur District',
    district: 'Anantapur District',
    state: 'Andhra Pradesh',
    category: 'Water Resources',
    status: 'Active',
    scope: 'Water retention dam reservoir formation, check dam structures, deep foundation excavation, earthen bund consolidation, and surplus weir works near Kokkanti Cross.',
    heroImage: '/projects/project-8/hero.webp',
    gallery: [
      '/projects/project-8/img-1.webp',
      '/projects/project-8/img-2.webp',
    ],
  },
  {
    id: 'project-9-kurnool-gadwal-orr',
    projectNumber: 9,
    title: 'Kurnool to Gadwal Outer Ring Road (ORR) 6-Lane Project',
    client: 'National & State Highway Authorities',
    location: 'Kurnool – Gadwal Inter-State Corridor',
    district: 'Kurnool & Jogulamba Gadwal Districts',
    state: 'Telangana',
    category: 'Highways & Road Projects',
    status: 'Active',
    highlight: '6-Lane Ring Road Corridor',
    scope: '6-lane Outer Ring Road construction, heavy corridor earthworks, multi-layer soil compaction, subgrade stabilization, and culvert cross-drainage structures.',
    heroImage: '/projects/project-9/hero.webp',
    gallery: [
      '/projects/project-9/img-1.webp',
      '/projects/project-9/img-2.webp',
      '/projects/project-9/img-3.webp',
      '/projects/project-9/img-4.webp',
      '/projects/project-9/img-5.webp',
    ],
  },
  {
    id: 'project-10-gunipalli-tank-bukkapatnam',
    projectNumber: 10,
    title: 'Gunipalli Tank Irrigation Project — Bukkapatnam, Puttaparthy',
    client: 'Water Resources Department / APIIATP',
    location: 'Bukkapatnam, Puttaparthy (Sri Sathya Sai District)',
    district: 'Sri Sathya Sai District',
    state: 'Andhra Pradesh',
    category: 'Water Resources',
    status: 'Completed',
    highlight: 'Irrigation Tank & Feeder Canal',
    scope: 'Major irrigation tank rehabilitation, feeder canal restoration, homogeneous earthen embankment compaction, stone rip-rap pitching, and regulatory sluice construction.',
    heroImage: '/projects/project-10/hero.webp',
    gallery: [
      '/projects/project-10/img-1.webp',
      '/projects/project-10/img-2.webp',
      '/projects/project-10/img-3.webp',
      '/projects/project-10/img-4.webp',
      '/projects/project-10/img-5.webp',
      '/projects/project-10/img-6.webp',
      '/projects/project-10/img-7.webp',
      '/projects/project-10/img-8.webp',
      '/projects/project-10/img-9.webp',
      '/projects/project-10/img-10.webp',
      '/projects/project-10/img-11.webp',
      '/projects/project-10/img-12.webp',
      '/projects/project-10/img-13.webp',
      '/projects/project-10/img-14.webp',
      '/projects/project-10/img-15.webp',
      '/projects/project-10/img-16.webp',
    ],
  },
];
