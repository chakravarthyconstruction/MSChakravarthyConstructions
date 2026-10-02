import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { siteData } from '../data/site';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-center gap-3">
        {/* Call Button */}
        <a
          href={siteData.phone.tel}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white text-[#0F172A] font-bold text-sm shadow-md active:scale-95 transition-transform"
          aria-label={`Call ${siteData.phone.display}`}
        >
          <Phone className="w-4 h-4 text-[#0F172A]" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={siteData.phone.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C8102E] text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
