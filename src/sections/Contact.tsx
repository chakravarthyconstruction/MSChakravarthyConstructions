import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { siteData } from '../data/site';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { useISTStatus } from '../hooks/useISTStatus';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const ist = useISTStatus();

  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: siteData.services[0].name,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a contact phone number.';
    } else if (!/^[0-9+() -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      errs.service = 'Please select a civil service.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief message of at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildWhatsAppText = () => {
    return `Hello M/S Chakravarthy Constructions,\n\nI would like to inquire about: *${formData.service}*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}\n\nSubmitted via website: mschakravarthyconstructions.com`;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${siteData.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    const message = buildWhatsAppText();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteData.phone.whatsappFormatted}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteData.phone.display);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact M/S Chakravarthy Constructions"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10"
      >
        <div>
          <SectionEyebrow label="CONTACT US" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E0E0E] tracking-tight font-heading max-w-xl leading-tight">
            Consult With Our Civil Engineering Desk
          </h2>
        </div>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
          Reach our registered office in Anantapur for site assessments, tender inquiries, and infrastructure partnerships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-[26px] sm:rounded-[32px] border border-black/5 shadow-md"
        >
          <div className="mb-5">
            <h3 className="text-xl font-bold font-heading text-[#0E0E0E]">
              Request a Project Proposal
            </h3>
            <p className="text-neutral-500 text-xs mt-1">
              Submit your project scope below. It will open directly in WhatsApp for immediate response, with a mailto fallback.
            </p>
          </div>

          {submitted && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">WhatsApp inquiry launched!</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  If WhatsApp did not open automatically, you can also use our direct email fallback below.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border text-xs sm:text-sm text-[#0E0E0E] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3A5E] ${
                    errors.name ? 'border-red-400 bg-red-50/30' : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border text-xs sm:text-sm text-[#0E0E0E] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3A5E] ${
                    errors.phone ? 'border-red-400 bg-red-50/30' : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border text-xs sm:text-sm text-[#0E0E0E] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3A5E] ${
                    errors.email ? 'border-red-400 bg-red-50/30' : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1"
                >
                  Project Scope / Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-[#0E0E0E] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3A5E]"
                >
                  {siteData.services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.tagline})
                    </option>
                  ))}
                  <option value="General Civil Infrastructure">General Civil Infrastructure</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1"
              >
                Project Scope &amp; Site Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={3}
                required
                placeholder="Describe your site location, project specifications, tender requirements, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border text-xs sm:text-sm text-[#0E0E0E] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B3A5E] ${
                  errors.message ? 'border-red-400 bg-red-50/30' : 'border-neutral-200 hover:border-neutral-300'
                }`}
              />
              {errors.message && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3 px-5 rounded-full bg-[#0E0E0E] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-sm hover:shadow transition-all duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3A5E]"
              >
                <span>Send via WhatsApp</span>
                <span className="w-7 h-7 rounded-full bg-[#F2C230] text-[#0E0E0E] flex items-center justify-center transition-transform group-hover:scale-105">
                  <MessageSquare className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href={buildMailtoUrl()}
                className="py-3 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#0E0E0E] font-semibold text-xs flex items-center justify-center gap-2 border border-black/5 transition-colors cursor-pointer text-center"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-600" />
                <span>Send via Email Fallback</span>
              </a>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Contact Cards, Hours & Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Contact Cards */}
          <div className="bg-white p-5 rounded-[24px] border border-black/5 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-neutral-50 border border-black/5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F2C230] text-[#0E0E0E] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    Direct Phone &amp; WhatsApp
                  </div>
                  <a
                    href={siteData.phone.tel}
                    className="text-sm sm:text-base font-bold text-[#0E0E0E] hover:text-[#0B3A5E]"
                  >
                    {siteData.phone.display}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-[#0E0E0E] hover:bg-white transition-colors"
                aria-label="Copy phone number"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 border border-black/5">
              <div className="w-8 h-8 rounded-full bg-[#0E0E0E] text-[#FFF200] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                  Official Email
                </div>
                <a
                  href={`mailto:${siteData.email}`}
                  className="text-xs sm:text-sm font-bold text-[#0E0E0E] hover:text-[#0B3A5E] truncate block"
                >
                  {siteData.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-black/5">
              <div className="w-8 h-8 rounded-full bg-[#0B3A5E] text-white flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                  Registered Headquarters
                </div>
                <p className="text-xs font-semibold text-[#0E0E0E] mt-0.5 leading-snug">
                  {siteData.address.full}
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours with Live IST Status Badge */}
          <div className="bg-white p-5 rounded-[24px] border border-black/5 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-black/5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-700" />
                <h4 className="font-bold text-sm text-[#0E0E0E] font-heading">
                  Working Hours (IST)
                </h4>
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide ${
                  ist.isOpen
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    ist.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
                  }`}
                />
                <span>{ist.statusText}</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between py-0.5">
                <span className="font-medium text-neutral-600">Monday – Saturday</span>
                <span className="font-bold text-[#0E0E0E]">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-t border-black/5">
                <span className="font-medium text-neutral-600">Sunday</span>
                <span className="font-bold text-red-600 bg-red-50 px-1.5 py-0.2 rounded">
                  Holiday
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] text-neutral-500">
              <span>{ist.nextChangeText}</span>
              <span className="font-mono">{ist.formattedCurrentTime}</span>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-[24px] overflow-hidden border border-black/10 shadow-sm bg-neutral-200 h-[190px] relative">
            <iframe
              title="M/S Chakravarthy Constructions Office Location"
              src="https://maps.google.com/maps?q=Dwaraka%20Nagar,%20Anantapur,%20Andhra%20Pradesh%20515004&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
