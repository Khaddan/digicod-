import React, { useState } from 'react';
import { Target, DollarSign, ShieldCheck, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { PLATFORMS, AGENCY_PILLARS } from '../data/agencyData';

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
                      ? 'bg-gradient-to-r from-blue-500 via-red-500 to-amber-500'
                      : 'bg-yellow-400 text-black'
                  }`}
                >
                  {platform.code}
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
