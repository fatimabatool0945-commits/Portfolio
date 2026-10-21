export type Category = 'All' | 'Video Editing' | 'Ad Posting' | 'Graphic Designing';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Video Editing' | 'Ad Posting' | 'Graphic Designing';
  description: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  tags: string[];
  aspectRatio?: 'landscape' | 'square' | 'portrait';
  isSample?: boolean;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyPoints: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  iconName: string;
}

export interface ExperienceHighlight {
  id: string;
  title: string;
  category: 'Video Editing' | 'Ad Posting' | 'Graphic Designing';
  summary: string;
  coreCapabilities: string[];
}

export interface SiteProfile {
  name: string;
  headline: string;
  intro: string;
  aboutDetails: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
}
