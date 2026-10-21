import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { HERO_STUDIO_IMG } from '../data/initialData';

interface HeroProps {
  headline: string;
  intro: string;
  whatsappLink: string;
}

export const Hero: React.FC<HeroProps> = ({ headline, intro, whatsappLink }) => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Personal Portfolio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] max-w-xl">
              {headline}
            </h1>

            <p className="text-base sm:text-lg text-[#B8B8B8] leading-relaxed max-w-xl">
              {intro}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] active:bg-[#C09B2B] transition-colors rounded-lg shadow-md hover:shadow-[#D4AF37]/20 whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#D4AF37] bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20 transition-colors rounded-lg whitespace-nowrap"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quiet credibility markers with unboxed typographic separators */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-[#8E8E8E]">
              <span>Fast Turnaround</span>
              <span aria-hidden="true" className="text-[#D4AF37]">·</span>
              <span>Engaging Pacing</span>
              <span aria-hidden="true" className="text-[#D4AF37]">·</span>
              <span>Platform-Compliant Ads</span>
              <span aria-hidden="true" className="text-[#D4AF37]">·</span>
              <span>Direct WhatsApp Communication</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#242424] bg-[#141414] shadow-2xl group">
              <img
                src={HERO_STUDIO_IMG}
                alt="Creative video editing and ad workstation"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B0B0B]/85 backdrop-blur-md rounded-xl border border-[#262626] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Fatima's Creative Studio</p>
                  <p className="text-[11px] text-[#B8B8B8]">Video Editing · Ad Posting · Graphics</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#0B0B0B] bg-[#D4AF37] rounded-lg hover:bg-[#E5C158] transition-colors"
                  title="Direct WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
