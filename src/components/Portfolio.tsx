import React, { useState } from 'react';
import { Eye, Trash2, Video, Megaphone, Palette, Play } from 'lucide-react';
import { PortfolioItem, Category } from '../types';

interface PortfolioProps {
  items: PortfolioItem[];
  onSelectItem: (item: PortfolioItem) => void;
  onOpenAddModal?: () => void;
  onDeleteItem?: (id: string) => void;
  onResetDefault?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  items,
  onSelectItem,
  onDeleteItem,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Video Editing', 'Ad Posting', 'Graphic Designing'];

  const filteredItems = items.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Video Editing':
        return <Video className="w-3.5 h-3.5" />;
      case 'Ad Posting':
        return <Megaphone className="w-3.5 h-3.5" />;
      case 'Graphic Designing':
        return <Palette className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 md:py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              Portfolio Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              My Work
            </h2>
            <p className="text-sm text-[#B8B8B8] mt-2 max-w-xl">
              Authentic samples and showcase designs in video editing, advertising, and promotional graphic design.
            </p>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Bar) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141414] border border-[#222222] rounded-xl max-w-fit mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-sm'
                  : 'text-[#B8B8B8] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#141414] rounded-2xl border border-[#222222] p-8">
            <p className="text-sm text-[#A8A8A8]">No samples currently in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                {/* Media Image / Thumbnail */}
                <div
                  className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play icon overlay if video */}
                  {item.mediaType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-black/70 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Top Overlay Badge & Action */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-white bg-black/75 backdrop-blur-md rounded-md border border-[#333333]">
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(item);
                      }}
                      className="p-1.5 text-white bg-black/75 backdrop-blur-md hover:bg-[#D4AF37] hover:text-black rounded-md border border-[#333333] transition-colors"
                      title="Enlarge preview"
                      aria-label="Enlarge preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3
                      className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer line-clamp-1"
                      onClick={() => onSelectItem(item)}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A8A8A8] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metadata & Controls */}
                  <div className="pt-3 border-t border-[#202020] flex items-center justify-between text-xs text-[#777777]">
                    <div className="flex items-center gap-2">
                      {item.tags.slice(0, 2).map((t, idx) => (
                        <span key={t} className="text-[#999999] text-[11px]">
                          {t}
                          {idx === 0 && item.tags.length > 1 && ' · '}
                        </span>
                      ))}
                    </div>

                    {!item.isSample && onDeleteItem && (
                      <button
                        type="button"
                        onClick={() => onDeleteItem(item.id)}
                        className="p-1 text-[#666666] hover:text-red-400 transition-colors"
                        title="Delete custom sample"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer info & inquiries note */}
        <div className="mt-10 p-4 rounded-xl bg-[#141414] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8E8E8E]">
          <p>
            Looking for customized samples or high-converting video and ad assets for your brand?
          </p>
          <a
            href="#contact"
            className="text-[11px] text-[#D4AF37] hover:underline font-semibold shrink-0"
          >
            Start a project &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
