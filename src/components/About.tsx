import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { SiteProfile } from '../types';

interface AboutProps {
  profile: SiteProfile;
  onOpenEdit?: () => void;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              Introduction
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#242424] rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-semibold text-white">
              Hello, I am {profile.name}
            </h3>
            
            <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
              {profile.aboutDetails}
            </p>

            <p className="text-sm text-[#B8B8B8] leading-relaxed">
              Whether you need compelling video clips edited for social engagement, advertisements posted accurately across platforms, or clean promotional graphic designs, I work with care to ensure your business stands out.
            </p>

            {/* Commitments */}
            <div className="pt-3 border-t border-[#202020] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#CCCCCC]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Attention to visual detail & pacing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Honest, reliable communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Fast response on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Tailored for your business goals</span>
              </div>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            <div className="bg-[#141414] border border-[#242424] p-5 rounded-xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Quality Focused</h4>
                <p className="text-xs text-[#B8B8B8] leading-relaxed">
                  Every edit and design is checked thoroughly for visual clarity, audio sharpness, and layout alignment.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#242424] p-5 rounded-xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Punctual Delivery</h4>
                <p className="text-xs text-[#B8B8B8] leading-relaxed">
                  Respect for project deadlines so your content schedule and marketing campaigns run without delays.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#242424] p-5 rounded-xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Simple Collaboration</h4>
                <p className="text-xs text-[#B8B8B8] leading-relaxed">
                  Direct WhatsApp messaging allows quick revisions, straightforward feedback, and instant updates.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
