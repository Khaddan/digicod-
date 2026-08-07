import React, { useState } from 'react';
import { Target, DollarSign, ShieldCheck, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { PLATFORMS, AGENCY_PILLARS } from '../data/agencyData';

const PlatformLogos: Record<string, React.ReactNode> = {
  meta: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M20.211 7.82c-.891 0-1.933.39-3.268 1.41-1.692 1.29-3.376 3.337-4.47 5.099-1.071-1.742-2.73-3.774-4.402-5.064C6.735 8.212 5.69 7.82 4.793 7.82 2.146 7.82.012 9.946.012 12.593c0 2.646 2.133 4.773 4.78 4.773 1.517 0 2.942-1 4.195-2.585 1.157-1.465 2.05-3.327 2.944-5.26 1.182 2.611 2.378 4.67 3.655 5.926.852.836 1.761 1.258 2.628 1.258 2.648 0 4.782-2.127 4.782-4.773 0-2.647-2.134-4.773-4.782-4.773h-.003ZM4.79 14.86c-1.25 0-2.268-1.018-2.268-2.268 0-1.25 1.018-2.268 2.268-2.268.643 0 1.341.278 2.143.918 1.153.917 2.348 2.384 3.315 3.864-.816 1.248-1.85 2.454-2.843 3.19-.792.587-1.636.877-2.45.877-.055 0-.11-.002-.165-.005Zm15.424-2.268c0 1.25-1.018 2.268-2.268 2.268-.901 0-1.92-.614-2.905-1.581-1.082-1.062-2.115-2.802-3.14-5.021 1.002-1.47 2.34-3.085 3.593-4.041.815-.623 1.53-.906 2.18-.906h.003c1.25 0 2.268 1.018 2.268 2.268 0 0 0 0 0 0Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-10.425a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0011.14 4.15c.65-.65.92-1.52.92-2.45V9.45a8.27 8.27 0 004.14 1.15V7.15a4.7 4.7 0 01-1.61-.46z"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  snapchat: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12.062 1.543c-.477-.023-1.405-.04-2.584.288-1.58.441-2.909 1.66-3.504 3.21-.295.772-.348 1.487-.367 1.831-.027.502-.02 1.01.127 1.472.067.214.152.427.32.748.243.468.225.99-.05 1.44-.094.15-.316.42-.767.45-1.077.068-2.631-.223-3.082-.265-.123-.012-.228.067-.257.186-.06.257-.13.785.12 1.25.132.247.382.483.71.69l.067.04c.94.57 2.02.822 3.125.867l.115.006c.078.005.158.053.19.124.037.085.016.196-.056.26-.017.014-.528.473-1.128 1.196-1.187 1.433-1.895 2.91-1.925 3.344-.016.236.104.38.273.418.665.152 2.158.337 3.92-.09.303-.073.498.05.587.142.1.107.126.23.086.353-.133.41-.09.847.11 1.194.212.368.513.684.9.897.66.362 1.432.553 2.193.633.227.024.475.034.717.034.195 0 .393-.01.586-.034.76-.08 1.53-.27 2.192-.633.388-.213.69-.53.9-.897.2-.347.243-.784.11-1.194-.04-.123-.014-.246.086-.353.09-.09.284-.215.587-.142 1.76.427 3.254.242 3.92.09.168-.04.29-.182.274-.418-.03-.435-.738-1.91-1.925-3.344-.6-.723-1.11-1.182-1.128-1.196-.07-.064-.092-.175-.055-.26.033-.07.113-.12.19-.124l.114-.006c1.105-.045 2.186-.297 3.125-.867l.067-.04c.328-.207.578-.443.71-.69.25-.465.18-.993.12-1.25-.03-.12-.134-.198-.257-.186-.45.042-2.005.333-3.082.265-.45-.03-.673-.3-.767-.45-.275-.45-.293-.972-.05-1.44.167-.32.253-.534.32-.748.146-.462.154-.97.127-1.472-.018-.344-.07-1.06-.367-1.831-.595-1.55-1.924-2.77-3.504-3.21-1.178-.328-2.106-.31-2.583-.288z" />
    </svg>
  )
};

interface PlatformsProps {
  currentLang: Language;
}

export const Platforms: React.FC<PlatformsProps> = ({ currentLang }) => {
  const [activePlatform, setActivePlatform] = useState(PLATFORMS[0].id);

  const activeItem = PLATFORMS.find((p) => p.id === activePlatform) || PLATFORMS[0];

  return (
    <section id="services" className="py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            SERVICE — MEDIA BUYING
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            ADS ON EVERY PLATFORM THAT <span className="text-[#74f922] text-glow-green">CONVERTS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We buy premium ad inventory across the platforms your customers actually use — and turn it into measurable growth.
          </p>
        </div>

        {/* Platforms Grid (6 Badges matching image styling) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {PLATFORMS.map((platform) => {
            const isActive = platform.id === activePlatform;
            return (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`p-6 rounded-2xl transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 cursor-pointer group ${
                  isActive
                    ? 'glass-card border-[#74f922] box-glow-green scale-105 bg-white/15'
                    : 'glass-card hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {/* Custom Icon Badge matching image circles (M, f, IG, TT, G, SC) */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-xl text-white shadow-lg transition-transform group-hover:scale-110 ${
                    platform.id === 'meta'
                      ? 'bg-gradient-to-tr from-blue-600 to-indigo-600'
                      : platform.id === 'facebook'
                      ? 'bg-blue-600'
                      : platform.id === 'instagram'
                      ? 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600'
                      : platform.id === 'tiktok'
                      ? 'bg-black border border-cyan-400/50 shadow-cyan-500/20'
                      : platform.id === 'google'
                      ? 'bg-white text-slate-800'
                      : 'bg-yellow-400 text-black'
                  }`}
                >
                  {PlatformLogos[platform.id] || platform.code}
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-white tracking-wider uppercase">
                  {platform.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Platform Detail Box */}
        <div className="p-6 sm:p-8 glass-card mb-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left rtl:sm:text-right">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#74f922]">
              <CheckCircle2 className="w-4 h-4" />
              <span>OPTIMISED MEDIA BUYING STRATEGY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {activeItem.name} — {currentLang === 'fr' ? 'Campagnes Publicitaires' : currentLang === 'ar' ? 'حملات موجهة' : 'Ad Campaigns'}
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              {activeItem.description[currentLang]}
            </p>
          </div>
          <a
            href="#pricing"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#74f922] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#62db19] transition-all shadow-md"
          >
            <span>
              {currentLang === 'fr' ? 'Lancer sur cette plateforme' : currentLang === 'ar' ? 'ابدأ عبر هذه المنصة' : 'Launch on Platform'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_PILLARS.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className="p-6 glass-card-hover space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-[#74f922] group-hover:bg-[#74f922] group-hover:text-black transition-colors">
                  {pillar.icon === 'Target' && <Target className="w-6 h-6" />}
                  {pillar.icon === 'DollarSign' && <DollarSign className="w-6 h-6" />}
                  {pillar.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                  {pillar.icon === 'BarChart3' && <BarChart3 className="w-6 h-6" />}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                    {pillar.title[currentLang]}
                  </h3>
                  <div className="text-xs text-[#74f922] font-arabic font-bold">
                    {pillar.title.ar}
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc[currentLang]}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
