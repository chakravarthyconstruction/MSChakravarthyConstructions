import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { siteData } from '../data/site';
import { LogoBadge } from '../components/LogoBadge';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-6'
        }`}
      >
        <div className="max-w-[1320px] mx-auto flex items-center justify-between pointer-events-auto">
          {/* Main Glass Pill */}
          <nav
            aria-label="Main Navigation"
            className={`w-full flex items-center justify-between rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 ${
              isScrolled
                ? 'bg-[#F8FAFC]/90 backdrop-blur-xl border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                : 'bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            }`}
          >
            {/* Logo Badge + Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-full pr-2"
              aria-label="Chakravarthy Constructions Homepage"
            >
              <LogoBadge size={isScrolled ? 38 : 42} className="transition-transform group-hover:scale-105 shrink-0" />
              <div className="flex flex-col">
                <span className="font-black text-sm sm:text-base tracking-tight font-heading leading-tight text-[#0F172A]">
                  Chakravarthy
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.24em] text-neutral-600 uppercase leading-none mt-0.5">
                  Constructions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/5">
              {siteData.navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 xl:px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
                      isActive
                        ? 'bg-[#C8102E] text-white shadow-sm'
                        : 'text-[#0F172A]/80 hover:text-[#C8102E] hover:bg-black/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right Side: Black Call Pill Button + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={siteData.phone.tel}
                className="hidden sm:inline-flex items-center gap-2.5 bg-[#0F172A] hover:bg-black text-white pl-4 pr-1.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                aria-label={`Call ${siteData.phone.display}`}
              >
                <span>Call Now</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105 shadow-sm">
                  <Phone className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#F8FAFC] flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Navigation</span>
              <div className="flex flex-col gap-2">
                {siteData.navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={handleLinkClick}
                      className={({ isActive }) =>
                        `text-2xl font-bold font-heading py-2 border-b border-black/5 flex items-center justify-between transition-colors ${
                          isActive ? 'text-[#C8102E] font-extrabold' : 'text-[#0F172A] hover:text-[#C8102E]'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Actions and Quick Info */}
            <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-black/10">
              <a
                href={siteData.phone.tel}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#0F172A] text-white font-bold text-base shadow"
              >
                <Phone className="w-4 h-4 text-[#C8102E]" />
                <span>Call {siteData.phone.display}</span>
              </a>

              <a
                href={siteData.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#C8102E] text-white font-bold text-base shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center mt-2">
                {siteData.offices.map((office) => (
                  <p key={office.type} className="text-xs text-neutral-500 font-medium">
                    {office.type}: {office.city}, {office.state}
                  </p>
                ))}
                <p className="text-xs text-neutral-600 font-semibold mt-1">
                  {siteData.hours.days}: {siteData.hours.timing}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
