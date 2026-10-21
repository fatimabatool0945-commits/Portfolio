import React from 'react';
import { Video, Megaphone, Palette, ArrowUpRight, Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  whatsappNumber: string;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  services,
  whatsappNumber,
  onSelectServiceForContact,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-[#D4AF37]" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#D4AF37]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Video className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const handleInquireWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Fatima, I am interested in your ${serviceTitle} service. Could you share more details on how we can work together?`
    );
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            What I Offer
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Services
          </h2>
          <p className="text-sm text-[#B8B8B8] leading-relaxed">
            Focused, client-centered solutions tailored to give your media a clean, captivating presentation and reach your prospective clients.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#141414] border border-[#242424] hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header with Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#262626] flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/50 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title & Exact User Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#D1D1D1] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Scope points */}
                <div className="space-y-2.5 pt-4 border-t border-[#222222] mb-6">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-[#A8A8A8]">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#222222] flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleInquireWhatsApp(service.title)}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] active:bg-[#B89626] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="py-2.5 px-3 text-xs font-medium text-[#B8B8B8] hover:text-white border border-[#2A2A2A] hover:border-[#444444] rounded-lg transition-colors"
                  title="Fill contact form with this service"
                >
                  Form
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
