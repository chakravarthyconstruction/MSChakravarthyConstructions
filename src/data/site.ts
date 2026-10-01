import type { ImageMeta } from './images';
import { siteImages } from './images';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: ImageMeta;
}

export interface LeadershipMember {
  name: string;
  role: string;
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
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
  };
  hours: {
    days: string;
    timing: string;
    openHour: number; // 9 AM
    closeHour: number; // 6 PM (18)
    timezone: string; // Asia/Kolkata
    sunday: string;
  };
  stats: Array<{
    value: number;
    suffix: string;
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
  faqs: FAQItem[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const siteData: BusinessData = {
  name: 'M/S Chakravarthy Constructions',
  shortName: 'M/S Chakravarthy',
  tagline: 'Building Infrastructure That Lasts Generations.',
  subTagline:
    'Engineering robust roads, canals, reservoirs, check dams, and civil constructions across Karnataka, Andhra Pradesh, and Telangana.',
  phone: {
    display: '+91 81257 25425',
    tel: 'tel:+918125725425',
    whatsapp: 'https://wa.me/918125725425',
    whatsappFormatted: '918125725425',
  },
  email: 'srichakravarthyconstructions@gmail.com',
  address: {
    line1: '1-410, 1st Road Extension',
    line2: 'Dwaraka Nagar',
    city: 'Anantapur',
    pincode: '515004',
    state: 'Andhra Pradesh',
    country: 'India',
    full: '1-410, 1st Road Extension, Dwaraka Nagar, Anantapur - 515004, Andhra Pradesh',
  },
  hours: {
    days: 'Monday – Saturday',
    timing: '9:00 AM – 6:00 PM',
    openHour: 9,
    closeHour: 18,
    timezone: 'Asia/Kolkata',
    sunday: 'Sunday Holiday',
  },
  stats: [
    { value: 3, suffix: '', label: 'Generations of experience' },
    { value: 3, suffix: '', label: 'States of operation' },
    { value: 5, suffix: '', label: 'Core civil services' },
  ],
  about: {
    headline: 'A legacy built on roads, canals and water, now three generations strong.',
    statement:
      'M/S Chakravarthy Constructions is an established infrastructure firm running through three generations of engineering discipline and dedicated leadership.',
    summary:
      'Now managed by Managing Director Mr. D. Chakravarthy and Chairman Mr. D. Nagaraju, our civil works have been carried out extensively across Karnataka, Andhra Pradesh, and Telangana, and the firm is actively expanding across India.',
    experienceBadge: 'Three generations of building',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reach', href: '/reach' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    {
      id: 'constructions',
      number: '01',
      name: 'Constructions',
      tagline: 'Structural Civil Engineering',
      description:
        'Reinforced concrete structures, institutional buildings, and commercial civil engineering executed with precision standards.',
      image: siteImages.serviceConstructions,
    },
    {
      id: 'roads',
      number: '02',
      name: 'Roads',
      tagline: 'Highways & Paving',
      description:
        'High-specification asphalt corridors, regional road networks, and heavy-duty arterial roadway construction.',
      image: siteImages.serviceRoads,
    },
    {
      id: 'canals',
      number: '03',
      name: 'Canals',
      tagline: 'Irrigation & Flow Channels',
      description:
        'Concrete-lined irrigation canals, water distribution systems, and earthwork channel infrastructure.',
      image: siteImages.serviceCanals,
    },
    {
      id: 'reservoirs',
      number: '04',
      name: 'Reservoirs',
      tagline: 'Water Storage & Embankments',
      description:
        'Engineered earthen embankments, stone-pitched water retaining structures, and regional water storage facilities.',
      image: siteImages.serviceReservoirs,
    },
    {
      id: 'checkdams',
      number: '05',
      name: 'Check Dams',
      tagline: 'Water Harvesting & Watersheds',
      description:
        'Masonry check dams designed to harvest regional rainwater runoff, regulate streams, and recharge local groundwater.',
      image: siteImages.serviceCheckdams,
    },
  ],
  states: [
    {
      number: '01',
      name: 'Karnataka',
      subtext: 'Extensive civil engineering footprint across key regional development zones.',
    },
    {
      number: '02',
      name: 'Andhra Pradesh',
      subtext: 'Home state operations with major roadway, canal, and civil works infrastructure.',
    },
    {
      number: '03',
      name: 'Telangana',
      subtext: 'Comprehensive infrastructure execution spanning arterial roads and water networks.',
    },
  ],
  leadership: [
    {
      name: 'Mr. D. Chakravarthy',
      role: 'Managing Director',
      initials: 'DC',
      bio: 'Leading firm operations, project execution, and pan-India expansion across civil infrastructure.',
    },
    {
      name: 'Mr. D. Nagaraju',
      role: 'Chairman',
      initials: 'DN',
      bio: 'Guiding corporate governance, client partnerships, and three generations of construction heritage.',
    },
  ],
  approach: [
    {
      number: '01',
      title: 'Plan',
      description: 'Scope evaluation, statutory feasibility, resource scheduling, and timeline design.',
    },
    {
      number: '02',
      title: 'Survey & Design',
      description: 'Topographic mapping, soil investigation, gradient alignment, and engineering drafts.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'High-precision heavy equipment deployment, material testing, and rapid site execution.',
    },
    {
      number: '04',
      title: 'Handover',
      description: 'Comprehensive structural audits, client walk-throughs, and long-term handover documentation.',
    },
  ],
  faqs: [
    {
      question: 'What types of infrastructure and civil works do you build?',
      answer:
        'We specialize across five core infrastructure sectors: Constructions (RCC structures and facilities), Roads (asphalt paving and highways), Canals (concrete-lined irrigation distribution), Reservoirs (engineered embankments and storage), and Check Dams (masonry water-harvesting structures).',
    },
    {
      question: 'In which states does M/S Chakravarthy Constructions operate?',
      answer:
        'Our works have been carried out extensively across Karnataka, Andhra Pradesh, and Telangana. As part of our forward growth, we are actively expanding our infrastructure footprint across India.',
    },
    {
      question: 'How can we request a project consultation or quote?',
      answer:
        'You can submit a project inquiry using the contact form on this website, call our team directly at +91 81257 25425, connect via WhatsApp at +91 81257 25425, or email us at srichakravarthyconstructions@gmail.com.',
    },
    {
      question: 'What are your operational working hours?',
      answer:
        'Our office and project management teams operate Monday to Saturday from 9:00 AM to 6:00 PM IST. Sundays are holidays.',
    },
    {
      question: 'Where is your corporate headquarters located?',
      answer:
        'Our registered office is located at 1-410, 1st Road Extension, Dwaraka Nagar, Anantapur - 515004, Andhra Pradesh, India.',
    },
  ],
  // Optional social links supported - none provided per brief
  socialLinks: {},
};
