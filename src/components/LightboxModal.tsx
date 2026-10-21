import React, { useEffect } from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  whatsappLink: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, whatsappLink }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const isVideo = item.mediaType === 'video' || item.mediaUrl.endsWith('.mp4') || item.mediaUrl.includes('youtube.com') || item.mediaUrl.includes('youtu.be');

  const getYoutubeEmbed = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.includes('watch?v=')) {
        const id = url.split('watch?v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
    } catch {
      return null;
    }
    return null;
  };

  const youtubeEmbedUrl = getYoutubeEmbed(item.mediaUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl bg-[#121212] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              {item.category}
            </span>
            {item.isSample && (
              <span className="text-[11px] text-[#8E8E8E] border-l border-[#2E2E2E] pl-3">
                Sample Work Preview
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#B8B8B8] hover:text-white hover:bg-[#222222] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview Box */}
        <div className="bg-[#080808] flex items-center justify-center overflow-hidden max-h-[55vh] border-b border-[#222222]">
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={item.title}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isVideo && item.mediaUrl.endsWith('.mp4') ? (
            <video
              src={item.mediaUrl}
              controls
              autoPlay
              className="w-full max-h-[55vh] object-contain"
            />
          ) : (
            <img
              src={item.mediaUrl}
              alt={item.title}
              className="w-full max-h-[55vh] object-contain"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Details & Actions */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#CCCCCC] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#8E8E8E]">
              {item.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {i < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-[#222222] flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#8E8E8E]">
              Interested in similar work for your brand?
            </p>

            <a
              href={`${whatsappLink}?text=${encodeURIComponent(`Hello Fatima, I saw your sample work "${item.title}" on your portfolio and would like to discuss a project!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
