import { SiteProfile, SkillItem, ServiceItem, ExperienceHighlight, PortfolioItem } from '../types';
import heroStudioImg from '../assets/images/hero_editing_studio_1792599172999.jpg';
import sampleVideoImg from '../assets/images/sample_video_editing_1792599173948.jpg';
import sampleAdImg from '../assets/images/sample_ad_posting_1792599173806.jpg';
import sampleGraphicImg from '../assets/images/sample_graphic_design_1792599174639.jpg';

export const HERO_STUDIO_IMG = heroStudioImg;

export const INITIAL_PROFILE: SiteProfile = {
  name: "Fatima",
  headline: "Video Editor & Ad Posting Specialist",
  intro: "Creating attractive video content and posting advertisements professionally to help businesses connect with their target audience.",
  aboutDetails: "My name is Fatima. I am a Video Editor and Ad Poster with good experience in my field. I focus on creating attractive video content and posting advertisements professionally. I want to present my skills and services to potential clients through a clean and professional portfolio website.",
  whatsappNumber: "+92 324 4740709",
  whatsappLink: "https://wa.me/923244740709",
  email: "fatimabatool0945@gmail.com"
};

export const INITIAL_SKILLS: SkillItem[] = [
  {
    id: "skill-1",
    title: "Video Editing",
    description: "Creating engaging cuts, smooth sequencing, subtitle integration, sound balancing, and visual pacing for modern digital platforms.",
    iconName: "Video",
    keyPoints: [
      "Engaging pacing & clean cuts",
      "Dynamic subtitles & captions",
      "Audio sync & background mixing",
      "Color grading & visual polish"
    ]
  },
  {
    id: "skill-2",
    title: "Ad Posting",
    description: "Publishing and presenting advertisements with clear formatting, compelling copy placement, and professional distribution across channels.",
    iconName: "Megaphone",
    keyPoints: [
      "Platform-optimized ad presentation",
      "Accurate captioning & call-to-actions",
      "Consistent scheduling & posting",
      "Targeted audience format compliance"
    ]
  },
  {
    id: "skill-3",
    title: "Graphic Designing",
    description: "Designing clean promotional graphics, social media posts, advertising banners, and branded visual materials for business marketing.",
    iconName: "Palette",
    keyPoints: [
      "Promotional flyers & social banners",
      "Visual hierarchy & typographic balance",
      "Brand-aligned color palettes",
      "High-resolution digital formats"
    ]
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    title: "Video Editing",
    shortDescription: "Editing videos with a clean, engaging, and professional presentation.",
    deliverables: [
      "Short-form reels & TikTok edits",
      "Commercial & product video editing",
      "Seamless cuts, pacing & transitions",
      "Text overlays, captions & audio balancing"
    ],
    iconName: "Video"
  },
  {
    id: "service-2",
    title: "Ad Posting",
    shortDescription: "Helping businesses present and post their advertisements professionally.",
    deliverables: [
      "Digital advertisement publishing",
      "Post formatting with compelling titles & tags",
      "Listing optimization for maximum visibility",
      "Organized ad scheduling and follow-ups"
    ],
    iconName: "Megaphone"
  },
  {
    id: "service-3",
    title: "Graphic Designing",
    shortDescription: "Creating visually appealing graphic content for business and promotional purposes.",
    deliverables: [
      "Social media post designs",
      "Ad creative banners & thumbnails",
      "Marketing promotional materials",
      "Clean, modern brand-aligned graphics"
    ],
    iconName: "Palette"
  }
];

export const INITIAL_EXPERIENCE: ExperienceHighlight[] = [
  {
    id: "exp-1",
    title: "Video Editing Practice",
    category: "Video Editing",
    summary: "Hands-on experience editing digital video content tailored for social media, business promotions, and creator channels.",
    coreCapabilities: [
      "Cutting and assembling raw footage into cohesive, engaging stories",
      "Adding clean motion titles, automated or custom styled subtitles",
      "Enhancing visual rhythm to retain viewers from start to finish",
      "Exporting in optimal resolutions for Instagram, TikTok, and YouTube"
    ]
  },
  {
    id: "exp-2",
    title: "Ad Posting & Promotion",
    category: "Ad Posting",
    summary: "Active experience handling advertisement layouts, copy organization, and posting across digital classifieds and social platforms.",
    coreCapabilities: [
      "Preparing advertisement headlines, descriptions, and contact info cleanly",
      "Ensuring ad compliance with platform guidelines and formatting rules",
      "Managing structured posting schedules to maintain consistent visibility",
      "Reviewing ad presentation to ensure maximum clarity for potential buyers"
    ]
  },
  {
    id: "exp-3",
    title: "Graphic Designing for Promotion",
    category: "Graphic Designing",
    summary: "Experience creating eye-catching static promotional assets and ad creative designs for digital marketing campaigns.",
    coreCapabilities: [
      "Designing clean promotional banners that communicate value quickly",
      "Balancing typography, imagery, and brand colors effectively",
      "Producing multi-aspect ratio assets for feeds, stories, and headers",
      "Focusing on clean, high-conversion visual design without visual clutter"
    ]
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: "work-1",
    title: "Cinematic Video Editing & Color Showcase",
    category: "Video Editing",
    description: "Sample project illustrating professional video pacing, multicam timeline arrangement, color grading, and subtitle integration.",
    mediaType: "image",
    mediaUrl: sampleVideoImg,
    tags: ["Video Editing", "Timeline Workflow", "Color Grading"],
    aspectRatio: "landscape",
    isSample: true
  },
  {
    id: "work-2",
    title: "Luxury Digital Ad Campaign Layout",
    category: "Ad Posting",
    description: "Sample promotional advertisement layout crafted for professional multi-channel posting, featuring clear call-to-actions and clean visual structure.",
    mediaType: "image",
    mediaUrl: sampleAdImg,
    tags: ["Ad Posting", "Campaign Design", "Promotional Ad"],
    aspectRatio: "landscape",
    isSample: true
  },
  {
    id: "work-3",
    title: "Minimalist Brand Visual Identity & Stationery",
    category: "Graphic Designing",
    description: "Sample corporate graphic design demonstrating premium black and gold aesthetics, balanced typography, and marketing collateral design.",
    mediaType: "image",
    mediaUrl: sampleGraphicImg,
    tags: ["Graphic Designing", "Brand Identity", "Print & Digital"],
    aspectRatio: "landscape",
    isSample: true
  }
];
