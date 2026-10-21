/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { AddSampleModal } from './components/AddSampleModal';
import { EditContentModal } from './components/EditContentModal';
import {
  INITIAL_PROFILE,
  INITIAL_SKILLS,
  INITIAL_SERVICES,
  INITIAL_EXPERIENCE,
  INITIAL_PORTFOLIO,
} from './data/initialData';
import { SiteProfile, PortfolioItem, ExperienceHighlight } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Load stored state if available, or fall back to pristine initial data
  const [profile, setProfile] = useState<SiteProfile>(() => {
    try {
      const saved = localStorage.getItem('fatima_portfolio_profile');
      return saved ? JSON.parse(saved) : INITIAL_PROFILE;
    } catch {
      return INITIAL_PROFILE;
    }
  });

  const [experienceList, setExperienceList] = useState<ExperienceHighlight[]>(() => {
    try {
      const saved = localStorage.getItem('fatima_portfolio_experience');
      return saved ? JSON.parse(saved) : INITIAL_EXPERIENCE;
    } catch {
      return INITIAL_EXPERIENCE;
    }
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem('fatima_portfolio_items');
      return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
    } catch {
      return INITIAL_PORTFOLIO;
    }
  });

  // Modal states
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<PortfolioItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  // Persist edits
  useEffect(() => {
    try {
      localStorage.setItem('fatima_portfolio_profile', JSON.stringify(profile));
    } catch {
      // Ignore quota errors
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('fatima_portfolio_items', JSON.stringify(portfolioItems));
    } catch {
      // Ignore quota errors
    }
  }, [portfolioItems]);

  useEffect(() => {
    try {
      localStorage.setItem('fatima_portfolio_experience', JSON.stringify(experienceList));
    } catch {
      // Ignore quota errors
    }
  }, [experienceList]);

  const handleSaveProfile = (updated: SiteProfile) => {
    setProfile(updated);
  };

  const handleAddPortfolioItem = (newItem: PortfolioItem) => {
    setPortfolioItems((prev) => [newItem, ...prev]);
  };

  const handleDeletePortfolioItem = (id: string) => {
    if (window.confirm('Delete this work sample from your portfolio?')) {
      setPortfolioItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleResetPortfolio = () => {
    if (window.confirm('Reset portfolio samples to initial defaults?')) {
      setPortfolioItems(INITIAL_PORTFOLIO);
      localStorage.removeItem('fatima_portfolio_items');
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Navigation */}
      <Navbar name={profile.name} whatsappLink={profile.whatsappLink} />

      {/* Main Content Sections (In exact requested order: Home, About Me, Skills, Services, Experience, My Work, Contact) */}
      <main className="flex-1">
        {/* 1. Home */}
        <Hero
          headline={profile.headline}
          intro={profile.intro}
          whatsappLink={profile.whatsappLink}
        />

        {/* 2. About Me */}
        <About profile={profile} />

        {/* 3. Skills */}
        <Skills skills={INITIAL_SKILLS} />

        {/* 4. Services */}
        <Services
          services={INITIAL_SERVICES}
          whatsappNumber={profile.whatsappNumber}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* 5. Experience */}
        <Experience
          experienceList={experienceList}
          onOpenEdit={() => setIsEditModalOpen(true)}
        />

        {/* 6. Portfolio / My Work */}
        <Portfolio
          items={portfolioItems}
          onSelectItem={(item) => setSelectedLightboxItem(item)}
          onDeleteItem={handleDeletePortfolioItem}
        />

        {/* 7. Contact */}
        <Contact
          whatsappNumber={profile.whatsappNumber}
          whatsappLink={profile.whatsappLink}
          email={profile.email}
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer name={profile.name} whatsappLink={profile.whatsappLink} />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={profile.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#D4AF37] hover:bg-[#E5C158] active:bg-[#B89626] text-black rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Direct WhatsApp Chat"
        title="Chat on WhatsApp (+92 324 4740709)"
      >
        <MessageCircle className="w-6 h-6 fill-current text-black" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:ml-2 text-xs font-bold text-black">
          Chat on WhatsApp
        </span>
      </a>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
        whatsappLink={profile.whatsappLink}
      />

      {/* Add Sample Work Modal */}
      <AddSampleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPortfolioItem}
      />

      {/* Edit Content Modal */}
      <EditContentModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
