import React, { useState } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';
import { SiteProfile } from '../types';
import { INITIAL_PROFILE } from '../data/initialData';

interface EditContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: SiteProfile;
  onSave: (updated: SiteProfile) => void;
}

export const EditContentModal: React.FC<EditContentModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<SiteProfile>(profile);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    if (window.confirm('Reset details to original default text?')) {
      setFormData(INITIAL_PROFILE);
      onSave(INITIAL_PROFILE);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-xl bg-[#121212] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#141414]">
          <div>
            <h3 className="text-base font-bold text-white">Edit Portfolio Details</h3>
            <p className="text-xs text-[#8E8E8E]">Customize your intro, headline, and contact details</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#B8B8B8] hover:text-white hover:bg-[#222222] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Headline
            </label>
            <input
              type="text"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Short Hero Intro
            </label>
            <textarea
              name="intro"
              rows={2}
              value={formData.intro}
              onChange={handleChange}
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white mb-1">
              About Me Full Text
            </label>
            <textarea
              name="aboutDetails"
              rows={4}
              value={formData.aboutDetails}
              onChange={handleChange}
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white mb-1">
                WhatsApp Link
              </label>
              <input
                type="url"
                name="whatsappLink"
                value={formData.whatsappLink}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Footer Controls */}
          <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#8E8E8E] hover:text-red-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs text-[#B8B8B8] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
