import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Phone, Mail, Clock } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { Contact } from '../sections/Contact';
import { FAQ } from '../sections/FAQ';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden">
      {/* Page Header / Bento Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto pb-4 sm:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0E0E0E] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-white/10 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#0B3A5E]/30 rounded-full blur-[90px] pointer-events-none" />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="relative z-10 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FFF200]">Contact</span>
          </nav>

          <SectionEyebrow label="DIRECT INQUIRIES" dark className="mb-3 relative z-10" />

          <h1 className="relative z-10 text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white font-heading tracking-tight leading-[1.14] max-w-3xl">
            Connect With Our Project Engineering Desk
          </h1>

          <p className="relative z-10 mt-4 text-xs sm:text-sm text-neutral-300 font-medium max-w-2xl leading-relaxed">
            Reach out for tenders, commercial proposals, site surveys, or partnerships across Andhra Pradesh, Karnataka, Telangana, and nationwide.
          </p>

          <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2.5 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full">
              <Phone className="w-3.5 h-3.5 text-[#FFF200]" />
              <span>{siteData.phone.display}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full">
              <Mail className="w-3.5 h-3.5 text-[#FFF200]" />
              <span>{siteData.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#FFF200]" />
              <span>Mon–Sat 9 AM – 6 PM IST</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Primary Contact Section with Form, IST Hours, and Maps */}
      <Contact />

      {/* Accessible FAQ Accordion */}
      <FAQ />
    </div>
  );
};
