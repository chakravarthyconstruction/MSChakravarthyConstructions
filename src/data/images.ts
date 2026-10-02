import heroMain from '../assets/images/hero-main.webp';
import heroTeam from '../assets/images/hero-team.webp';
import aboutSite from '../assets/images/about-site.webp';
import serviceConstructions from '../assets/images/service-constructions.webp';
import serviceRoads from '../assets/images/service-roads.webp';
import serviceCanals from '../assets/images/service-canals.webp';
import serviceReservoirs from '../assets/images/service-reservoirs.webp';
import serviceCheckdams from '../assets/images/service-checkdams.webp';
import ctaBanner from '../assets/images/cta-banner.webp';
import logo from '../assets/logo.png';

export interface ImageMeta {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const siteImages: Record<string, ImageMeta> = {
  logo: {
    src: logo,
    width: 512,
    height: 512,
    alt: 'M/s Chakravarthy Constructions Emblem Logo',
  },
  heroMain: {
    src: heroMain,
    width: 1200,
    height: 1500,
    alt: 'Highway construction site with asphalt paver and road roller in Deccan terrain',
  },
  heroTeam: {
    src: heroTeam,
    width: 1200,
    height: 900,
    alt: 'Civil engineers in safety gear reviewing infrastructure engineering blueprints on site',
  },
  aboutSite: {
    src: aboutSite,
    width: 1200,
    height: 900,
    alt: 'Aerial perspective of a large-scale infrastructure earthworks and road project',
  },
  serviceConstructions: {
    src: serviceConstructions,
    width: 1200,
    height: 900,
    alt: 'Reinforced concrete multi-storey building frame with tower crane and scaffolding',
  },
  serviceRoads: {
    src: serviceRoads,
    width: 1200,
    height: 900,
    alt: 'Freshly paved asphalt highway stretching across regional terrain with compaction roller',
  },
  serviceCanals: {
    src: serviceCanals,
    width: 1200,
    height: 900,
    alt: 'Concrete-lined irrigation canal channeling fresh water through agricultural lands',
  },
  serviceReservoirs: {
    src: serviceReservoirs,
    width: 1200,
    height: 900,
    alt: 'Large water reservoir with stone-pitched slope embankment and civil works',
  },
  serviceCheckdams: {
    src: serviceCheckdams,
    width: 1200,
    height: 900,
    alt: 'Engineered stone masonry check dam with flowing water stream management',
  },
  ctaBanner: {
    src: ctaBanner,
    width: 1600,
    height: 900,
    alt: 'Canal and highway infrastructure corridor at golden sunset across southern India landscape',
  },
};
