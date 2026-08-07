import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Platforms } from './components/Platforms';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { PricingPacks } from './components/PricingPacks';
import { MetaProfiles } from './components/MetaProfiles';
import { RoiCalculator } from './components/RoiCalculator';
import { AuditForm } from './components/AuditForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { Language } from './types';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from './data/agencyData';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPackTitle, setSelectedPackTitle] = useState('PACK SCALE (2000 DH)');
  const [selectedPackPrice, setSelectedPackPrice] = useState<number | undefined>(2000);

  // Set document direction and lang attribute for RTL/LTR support
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenOrderModal = (title?: string, price?: number) => {
    if (title) {
      setSelectedPackTitle(title);
      setSelectedPackPrice(price);
    } else {
      setSelectedPackTitle('CAMPAGNE MEDIA BUYING');
      setSelectedPackPrice(undefined);
    }
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans selection:bg-[#74f922] selection:text-black relative overflow-x-hidden">
      
      {/* Background ambient mesh gradients */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Navbar Header */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        onOpenOrderModal={handleOpenOrderModal}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={lang}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Media Buying Platforms & 4 Agency Pillars */}
        <Platforms currentLang={lang} />

        {/* Professional Ad Campaigns / Data Process */}
        <Process currentLang={lang} />

        {/* Performance Results & Case Studies */}
        <Results currentLang={lang} />

        {/* Campaign Management Pricing Packs (Basic 700 DH, Scale 2000 DH, Growth 1200 DH) */}
        <PricingPacks
          currentLang={lang}
          onSelectPack={(title, price) => handleOpenOrderModal(title, price)}
        />

        {/* Ready-To-Run Meta Profiles Packs (150 DH, 299 DH, 499 DH) */}
        <MetaProfiles
          currentLang={lang}
          onSelectPack={(title, price) => handleOpenOrderModal(title, price)}
        />

        {/* Interactive Advertising Budget & ROI Calculator */}
        <RoiCalculator
          currentLang={lang}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Free Campaign Audit & Strategy Lead Form */}
        <AuditForm currentLang={lang} />

        {/* FAQ Accordion */}
        <FaqSection currentLang={lang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={lang}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Order / WhatsApp Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedPackTitle={selectedPackTitle}
        selectedPackPrice={selectedPackPrice}
        currentLang={lang}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`${AGENCY_INFO.whatsappUrl}?text=${encodeURIComponent('Bonjour DIGICOD ADS, je souhaite me renseigner sur vos services de publicité.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-black text-emerald-500" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-mono font-bold uppercase pl-0 group-hover:pl-2">
          WhatsApp Direct
        </span>
      </a>

    </div>
  );
}
