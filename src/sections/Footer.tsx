import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/site';
import { LogoBadge } from '../components/LogoBadge';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#0F172A] text-white rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px] pt-12 pb-20 sm:pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 relative mt-12 overflow-hidden"
    >
      <div className="max-w-[1220px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <LogoBadge size={46} className="transition-transform group-hover:scale-105" />
              <div>
                <span className="font-extrabold text-lg sm:text-xl font-heading text-white tracking-tight leading-none block">
                  {siteData.name}
                </span>
                <span className="text-[9px] font-mono tracking-[0.24em] text-red-400 uppercase font-bold mt-1 block">
                  CIVIL INFRASTRUCTURE
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-4">
              Three generations of heavy civil engineering expertise delivering highways, irrigation canals, water reservoirs, check dams, and reinforced concrete structures across Southern India and nationwide.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              <span>Special Class Contractor · Anantapur, AP</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.22em] text-red-400 uppercase mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteData.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-slate-300 hover:text-white transition-colors font-medium flex items-center justify-between group py-0.5"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C8102E]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.22em] text-red-400 uppercase mb-4">
              Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteData.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors font-medium block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.22em] text-red-400 uppercase mb-4">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                <a href={siteData.phone.tel} className="hover:text-white transition-colors font-medium">
                  {siteData.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                <a href={`mailto:${siteData.email}`} className="hover:text-white transition-colors break-all font-medium">
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  1-410, 1st Road Ext., Dwaraka Nagar, Anantapur - 515004
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium">
          <p>© {CURRENT_YEAR} {siteData.name}. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <span className="text-slate-400">Special Class Contractor</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors focus-visible:outline-none"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
