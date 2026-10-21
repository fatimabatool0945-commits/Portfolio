import React from 'react';
import { Edit3, CheckCircle, Video, Megaphone, Palette } from 'lucide-react';
import { ExperienceHighlight } from '../types';

interface ExperienceProps {
  experienceList: ExperienceHighlight[];
  onOpenEdit: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ experienceList, onOpenEdit }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Video Editing':
        return <Video className="w-5 h-5 text-[#D4AF37]" />;
      case 'Ad Posting':
        return <Megaphone className="w-5 h-5 text-[#D4AF37]" />;
      case 'Graphic Designing':
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Video className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              Background & Hands-on Practice
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience
            </h2>
            <p className="text-sm text-[#B8B8B8] mt-2 max-w-xl">
              Honest and focused background in video editing, advertisement posting, and promotional graphic design.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEdit}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#B8B8B8] hover:text-[#D4AF37] border border-[#262626] hover:border-[#D4AF37]/40 rounded-lg transition-colors bg-[#141414]"
            title="Update or expand your experience"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Experience Details</span>
          </button>
        </div>

        {/* Experience List Cards */}
        <div className="space-y-6">
          {experienceList.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0B0B] border border-[#262626] flex items-center justify-center shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs text-[#D4AF37] mt-0.5">
                      Focus Area: {item.category}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#777777] md:text-right">
                  0{idx + 1}
                </div>
              </div>

              <p className="text-sm text-[#D1D1D1] leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Core Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#202020]">
                {item.coreCapabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5 text-xs text-[#A8A8A8]">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on honesty */}
        <div className="mt-8 p-4 rounded-xl bg-[#0F0F0F] border border-[#202020] flex items-center justify-between text-xs text-[#8E8E8E]">
          <span>
            Looking for a custom project or have specific workflow requirements? Feel free to discuss directly on WhatsApp.
          </span>
          <a
            href="#contact"
            className="text-[#D4AF37] hover:underline font-medium shrink-0 ml-4"
          >
            Get in touch &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
