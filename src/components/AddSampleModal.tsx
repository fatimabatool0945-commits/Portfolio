import React, { useState } from 'react';
import { X, Upload, Link, AlertCircle } from 'lucide-react';
import { PortfolioItem } from '../types';

interface AddSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newItem: PortfolioItem) => void;
}

export const AddSampleModal: React.FC<AddSampleModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Video Editing' | 'Ad Posting' | 'Graphic Designing'>('Video Editing');
  const [description, setDescription] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [mediaUrl, setMediaUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [uploadMode, setUploadMode] = useState<'file' | 'url'>('file');
  const [previewError, setPreviewError] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      setPreviewError('File is large (>25MB). Consider using an external link or smaller compressed file.');
      return;
    }
    setPreviewError('');

    const isVideoFile = file.type.startsWith('video/');
    setMediaType(isVideoFile ? 'video' : 'image');

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setMediaUrl(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please provide a title for your work sample.');
      return;
    }
    if (!mediaUrl.trim()) {
      alert('Please upload an image/video file or paste a media URL.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const newItem: PortfolioItem = {
      id: `work-custom-${Date.now()}`,
      title: title.trim(),
      category,
      description: description.trim() || 'Work sample added by Fatima.',
      mediaType,
      mediaUrl,
      tags: tags.length > 0 ? tags : [category],
      aspectRatio: 'landscape',
      isSample: false
    };

    onAdd(newItem);
    onClose();
    // Reset state
    setTitle('');
    setDescription('');
    setMediaUrl('');
    setTagsInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-xl bg-[#121212] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#141414]">
          <div>
            <h3 className="text-base font-bold text-white">Add / Upload Work Sample</h3>
            <p className="text-xs text-[#8E8E8E]">Showcase your real video editing, ad posting, or graphic work</p>
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
          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1.5">
              Work Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Video Editing', 'Ad Posting', 'Graphic Designing'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all text-center ${
                    category === cat
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]'
                      : 'bg-[#181818] border-[#2A2A2A] text-[#B8B8B8] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Sample Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Social Media Reel Edit, Luxury Fashion Ad Banner..."
              className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Brief Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain the project, techniques used, or purpose..."
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666] resize-none"
            />
          </div>

          {/* Media Input Toggle */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-white">Media Source *</label>
              <div className="flex items-center gap-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setUploadMode('file')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    uploadMode === 'file'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'text-[#8E8E8E] hover:text-white'
                  }`}
                >
                  File Upload
                </button>
                <button
                  type="button"
                  onClick={() => setUploadMode('url')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    uploadMode === 'url'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'text-[#8E8E8E] hover:text-white'
                  }`}
                >
                  Link URL
                </button>
              </div>
            </div>

            {uploadMode === 'file' ? (
              <div className="border-2 border-dashed border-[#2E2E2E] hover:border-[#D4AF37]/50 rounded-xl p-4 text-center cursor-pointer relative bg-[#161616]">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-6 h-6 text-[#D4AF37] mx-auto mb-1.5" />
                <p className="text-xs text-white font-medium">Click to upload your image or video</p>
                <p className="text-[11px] text-[#777777] mt-0.5">Supports JPG, PNG, WebP, MP4, WebM</p>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="url"
                  value={mediaUrl}
                  onChange={(e) => {
                    setMediaUrl(e.target.value);
                    if (e.target.value.includes('youtube.com') || e.target.value.includes('youtu.be') || e.target.value.endsWith('.mp4')) {
                      setMediaType('video');
                    } else {
                      setMediaType('image');
                    }
                  }}
                  placeholder="https://example.com/video.mp4 or YouTube link or image URL"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666]"
                />
              </div>
            )}

            {previewError && (
              <div className="flex items-center gap-1.5 text-xs text-amber-400 mt-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{previewError}</span>
              </div>
            )}

            {/* Media Preview */}
            {mediaUrl && (
              <div className="mt-3 p-2 bg-[#0C0C0C] rounded-lg border border-[#222222]">
                <p className="text-[10px] text-[#8E8E8E] mb-1">Preview:</p>
                {mediaType === 'video' ? (
                  <video src={mediaUrl} className="w-full max-h-32 object-contain rounded" controls />
                ) : (
                  <img src={mediaUrl} alt="Preview" className="w-full max-h-32 object-contain rounded" />
                )}
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-medium text-white mb-1">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. Color Grading, Reels, Ad Banner"
              className="w-full px-3.5 py-2 text-xs bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666]"
            />
          </div>

          {/* Submit */}
          <div className="pt-3 border-t border-[#222222] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#B8B8B8] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors"
            >
              Add Sample to Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
