import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

interface FooterProps {
  name: string;
  whatsappLink: string;
}

export const Footer: React.FC<FooterProps> = ({ name, whatsappLink }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1C1C1C] bg-[#080808] py-12 text-[#8E8E8E] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white tracking-tight">
              {name}
            </span>
            <span className="text-[#333333]">|</span>
            <span>Video Editor & Ad Posting Specialist</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#A8A8A8]">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#D4AF37] transition-colors">Skills</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#experience" className="hover:text-[#D4AF37] transition-colors">Experience</a>
            <a href="#work" className="hover:text-[#D4AF37] transition-colors">My Work</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          {/* Action */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2B2B2B] hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-[#2B2B2B] hover:border-[#D4AF37] text-[#B8B8B8] hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666666]">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p>Personal Portfolio · Simple, Clean & Professional</p>
        </div>
      </div>
    </footer>
  );
};
