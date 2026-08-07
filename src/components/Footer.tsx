import React from 'react';
import { Phone, Globe, ArrowUp, Rocket, ShieldCheck, Heart } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-10.425a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
);
import { Language } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface FooterProps {
  currentLang: Language;
  onOpenOrderModal: (packName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenOrderModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 relative pt-20 pb-12 overflow-hidden text-slate-300">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Call to Action Box (Matching Frosted Glass Banner) */}
        <div className="p-8 sm:p-14 glass-card border border-white/20 text-center space-y-8 box-glow-green-lg relative overflow-hidden">
          
          <div className="inline-block px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            LET'S GROW TOGETHER
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
            SMART ADS. <span className="text-[#74f922] text-glow-green">REAL RESULTS.</span> SCALE FASTER. <span className="text-[#74f922] text-glow-green">GROW SMARTER.</span>
          </h2>

          <div className="text-lg sm:text-2xl font-arabic font-extrabold text-lime-300">
            إعلانات ذكية، نتائج حقيقية، نمو أسرع.
          </div>

          {/* Contact Direct Badges */}
          <div className="pt-4 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <a
              href={`tel:${AGENCY_INFO.phoneClean}`}
              className="px-6 py-4 rounded-2xl glass-pill hover:bg-white/20 text-white hover:text-[#74f922] font-mono font-bold text-sm sm:text-base flex items-center gap-3 transition-all hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-[#74f922] text-black flex items-center justify-center shadow-md">
                <Phone className="w-4 h-4" />
              </div>
              <span>{AGENCY_INFO.phone}</span>
            </a>

            <a
              href={`https://${AGENCY_INFO.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl glass-pill hover:bg-white/20 text-white hover:text-[#74f922] font-mono font-bold text-sm sm:text-base flex items-center gap-3 transition-all hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-lime-500/20 text-[#74f922] flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <span>{AGENCY_INFO.website}</span>
            </a>

            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl glass-pill hover:bg-white/20 text-white hover:text-[#74f922] font-mono font-bold text-sm sm:text-base flex items-center gap-3 transition-all hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <span>{AGENCY_INFO.instagram}</span>
            </a>
          </div>

        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#74f922] text-black font-black flex items-center justify-center text-xs shadow-md">
              DA
            </div>
            <div>
              <div className="text-white font-bold tracking-wider">DIGICOD ADS</div>
              <div className="text-[10px] text-slate-400">DIGICOD ADS AGENCY © {AGENCY_INFO.year}</div>
            </div>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <span>{AGENCY_INFO.phone}</span>
            <span>•</span>
            <a href={`https://${AGENCY_INFO.website}`} className="hover:text-white">{AGENCY_INFO.website}</a>
            <span>•</span>
            <a href={AGENCY_INFO.instagramUrl} className="hover:text-white">{AGENCY_INFO.instagram}</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-pill hover:bg-white/20 text-slate-300 hover:text-[#74f922] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4 text-[#74f922]" />
          </button>

        </div>

      </div>
    </footer>
  );
};
