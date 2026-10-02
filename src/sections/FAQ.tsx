import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Eyebrow, Title and Contact prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <SectionEyebrow label="QUESTIONS & ANSWERS" className="mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight mb-4">
              Got Questions? We Have You Covered.
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
              Straightforward details regarding our infrastructure services, operational regions, working hours, and quotation process.
            </p>
          </div>

          <div className="bg-white/80 p-5 sm:p-6 rounded-[24px] border border-black/5 shadow-sm">
            <div className="flex items-center gap-2.5 mb-1.5 text-[#0F172A] font-bold text-sm">
              <HelpCircle className="w-4 h-4 text-[#C8102E]" />
              <span>Need specific tender details?</span>
            </div>
            <p className="text-neutral-600 text-xs mb-3">
              Reach out to our project desk directly for tender discussions or site survey inquiries.
            </p>
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#C8102E] flex items-center gap-1.5 transition-colors"
            >
              <span>Contact Project Office</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Accessible Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/90 rounded-[20px] sm:rounded-[24px] border border-black/5 shadow-sm overflow-hidden transition-all duration-200 hover:border-black/15"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0F172A] font-heading pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-[#C8102E] text-white' : 'bg-slate-100 text-[#0F172A]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-black/5 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
