import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Send, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactProps {
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({
  whatsappNumber,
  whatsappLink,
  email,
  preselectedService = '',
}) => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'Video Editing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Update service if preselectedService changes from parent
  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Fatima,\n\nName: ${name || 'Prospective Client'}\nEmail: ${userEmail || 'Not provided'}\nService Needed: ${service}\n\nProject Details:\n${message || 'I would like to inquire about your services.'}`
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Automatically launch WhatsApp with the pre-filled message
    const formattedUrl = `https://wa.me/${cleanNumber}?text=${buildWhatsAppMessage()}`;
    window.open(formattedUrl, '_blank');
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#1C1C1C] relative">
      {/* Background glow */}
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with exact CTA */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Contact
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#E5C158]">
            "Have a project in mind? Let's work together."
          </p>
          <p className="text-sm text-[#B8B8B8] mt-2">
            Reach out directly through WhatsApp for the fastest reply, or submit a message through the inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp & Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary WhatsApp Card */}
            <div className="bg-[#141414] border border-[#2B2B2B] hover:border-[#D4AF37]/50 rounded-2xl p-6 sm:p-7 transition-all shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct WhatsApp</h3>
                  <p className="text-xs text-[#8E8E8E]">Fastest way to connect</p>
                </div>
              </div>

              <div className="p-3.5 bg-[#0C0C0C] rounded-xl border border-[#222222] mb-5 flex items-center justify-between">
                <span className="font-mono text-sm sm:text-base text-white font-semibold">
                  {whatsappNumber}
                </span>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="p-1.5 text-[#8E8E8E] hover:text-[#D4AF37] transition-colors"
                  title="Copy phone number"
                >
                  {copied ? <Check className="w-4 h-4 text-[#D4AF37]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Functional WhatsApp button with exact link */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] active:bg-[#B89626] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#141414] border border-[#242424] rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#1A1A1A] text-[#D4AF37] border border-[#282828] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Email Address</h4>
                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20for%20Fatima`}
                  className="text-xs text-[#CCCCCC] hover:text-[#D4AF37] transition-colors break-all block"
                >
                  {email}
                </a>
                <p className="text-[11px] text-[#777777]">
                  Send project briefs or file links anytime
                </p>
              </div>
            </div>

            {/* Direct Work Principles */}
            <div className="bg-[#101010] border border-[#202020] rounded-xl p-5 text-xs text-[#8E8E8E] space-y-2">
              <p className="font-semibold text-white">Why Work With Me?</p>
              <p>• Prompt response to inquiries</p>
              <p>• Clean, well-structured edits & ad presentations</p>
              <p>• Revisions to ensure you are 100% satisfied</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#242424] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">Send an Inquiry</h3>
            <p className="text-xs text-[#A8A8A8] mb-6">
              Fill in your details below to directly initiate a chat or send your requirements.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white">Message Prepared!</h4>
                <p className="text-xs text-[#B8B8B8] max-w-md mx-auto">
                  Your message has been formatted. If WhatsApp did not open automatically, click the button below to send your note directly.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${cleanNumber}?text=${buildWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-[#D4AF37] rounded-lg hover:bg-[#E5C158]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2.5 text-xs text-[#B8B8B8] hover:text-white border border-[#2A2A2A] rounded-lg"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Ahmed"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#191919] border border-[#2B2B2B] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#191919] border border-[#2B2B2B] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#191919] border border-[#2B2B2B] rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Video Editing">Video Editing</option>
                    <option value="Ad Posting">Ad Posting</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a bit about your video editing, ad posting, or graphic design needs..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#191919] border border-[#2B2B2B] rounded-lg text-white focus:outline-none focus:border-[#D4AF37] placeholder-[#666666] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] active:bg-[#B89626] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message & Connect via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#777777] text-center mt-2">
                    Submitting opens WhatsApp with your project inquiry ready to send.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
