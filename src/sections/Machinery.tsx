import React from 'react';
import { motion } from 'motion/react';
import { Truck } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';

export const Machinery: React.FC = () => {
  const { machinery } = siteData;

  return (
    <section
      id="machinery"
      aria-label="Plant and Machinery"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionEyebrow label="PLANT & MACHINERY" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight mb-4">
            {machinery.headline}
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{machinery.note}</p>
        </div>

        <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {machinery.fleet.map((item, idx) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-[20px] border border-black/5 shadow-sm p-4 flex items-start gap-3"
            >
              <span className="w-9 h-9 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </span>
              <div>
                <div className="text-sm font-bold font-heading text-[#0F172A]">{item.name}</div>
                <div className="text-xs text-neutral-600 mt-0.5">{item.detail}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
