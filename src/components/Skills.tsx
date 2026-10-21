import React from 'react';
import { Video, Megaphone, Palette, Check } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsProps {
  skills: SkillItem[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="w-5 h-5 text-[#D4AF37]" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-[#D4AF37]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Video className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Skills
          </h2>
          <p className="text-sm text-[#B8B8B8] leading-relaxed">
            Focused, practical expertise dedicated to creating high-impact visual media and running clean advertising distribution.
          </p>
        </div>

        {/* 3 Skills Grid (Only the 3 requested skills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/50 transition-all duration-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#292929] flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#777777] tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Key Competency Points */}
              <div className="pt-4 border-t border-[#222222] space-y-2.5">
                {skill.keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-[#D1D1D1]">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
