import React, { useState } from 'react';
import { Phone, Globe, MessageCircle, Menu, X, Rocket, Sparkles } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-10.425a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
);
import { Language } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenOrderModal: (packName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langLabels: Record<Language, string> = {
    fr: 'FR',
    en: 'EN',
    ar: 'عربي'
  };

  const navLinks = [
    { href: '#services', label: { fr: 'Services', en: 'Services', ar: 'الخدمات' } },
    { href: '#process', label: { fr: 'Méthode', en: 'Process', ar: 'منهجيتنا' } },
    { href: '#results', label: { fr: 'Résultats', en: 'Results', ar: 'النتائج' } },
    { href: '#pricing', label: { fr: 'Packs Publicité', en: 'Packs Ads', ar: 'باقات الإعلانات' } },
    { href: '#meta-profiles', label: { fr: 'Comptes Meta', en: 'Meta Profiles', ar: 'حسابات ميتا' } },
    { href: '#calculator', label: { fr: 'Calculateur ROI', en: 'ROI Calculator', ar: 'حاسبة العائد' } },
    { href: '#faq', label: { fr: 'FAQ', en: 'FAQ', ar: 'الأسئلة الشائعة' } },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 backdrop-blur-xl">
      {/* Top Banner Contact Line */}
      <div className="bg-slate-950/60 border-b border-white/10 py-1.5 px-4 text-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-slate-300 gap-2">
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href={`tel:${AGENCY_INFO.phoneClean}`} className="flex items-center gap-1.5 hover:text-[#74f922] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#74f922]" />
              <span>{AGENCY_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a href={`https://${AGENCY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 hover:text-[#74f922] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#74f922]" />
              <span>{AGENCY_INFO.website}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href={AGENCY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1.5 hover:text-[#74f922] transition-colors">
              <InstagramIcon className="w-3.5 h-3.5 text-[#74f922]" />
              <span>{AGENCY_INFO.instagram}</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-pill text-[#74f922] text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#74f922] animate-pulse"></span>
              Agences & Media Buying
            </span>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/80 rounded-lg p-0.5 border border-white/10">
              {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-0.5 text-xs rounded-md transition-all font-medium ${
                    currentLang === lang
                      ? 'bg-[#74f922] text-black shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {langLabels[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-lime-400 to-emerald-600 p-0.5 flex items-center justify-center shadow-lg shadow-lime-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#08080a] rounded-[7px] flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#74f922] transform -rotate-45 -translate-x-0.5"></div>
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-xl tracking-wider text-white flex items-center gap-1">
              DIGICOD <span className="text-[#74f922] font-black">ADS</span>
            </div>
            <div className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-1">
              MEDIA BUYING AGENCY
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#74f922] transition-colors py-1 relative group"
            >
              {link.label[currentLang]}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74f922] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenOrderModal()}
            className="flex items-center gap-2 bg-[#74f922] hover:bg-[#62db19] text-black font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Rocket className="w-4 h-4 fill-black" />
            <span>
              {currentLang === 'fr' ? 'Lancer une campagne' : currentLang === 'ar' ? 'إطلاق حملة' : 'Launch Campaign'}
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-[#74f922]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0e] border-b border-zinc-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#74f922] py-2 border-b border-zinc-800/50 flex justify-between items-center"
              >
                <span>{link.label[currentLang]}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#74f922] text-black font-bold py-3 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-lime-500/20"
            >
              <Rocket className="w-4 h-4" />
              <span>
                {currentLang === 'fr' ? 'Lancer une campagne' : currentLang === 'ar' ? 'إطلاق حملة' : 'Launch Campaign'}
              </span>
            </button>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold py-2.5 rounded-xl text-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct: {AGENCY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
