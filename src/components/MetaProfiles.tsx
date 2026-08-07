import React from 'react';
import { ShieldCheck, Lock, Headphones, Users, Check, ArrowRight, Sparkles, Building2, Megaphone, FileText, Key, Gift } from 'lucide-react';
import { Language } from '../types';
import { META_PROFILES_PACKS } from '../data/agencyData';

interface MetaProfilesProps {
  currentLang: Language;
  onSelectPack: (packTitle: string, price: number) => void;
}

export const MetaProfiles: React.FC<MetaProfilesProps> = ({ currentLang, onSelectPack }) => {
  return (
    <section id="meta-profiles" className="py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            META ADS PROFILES PACKS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            READY-TO-RUN <span className="text-[#74f922] text-glow-green">META PROFILES</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Safe, secure, and set up to launch — dedicated support included.
          </p>

          {/* Top 3 Trust Badges */}
          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-full glass-pill text-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#74f922]" />
              <span>Safe & Secure ACCOUNTS</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full glass-pill text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#74f922]" />
              <span>Ready to Run HIGH QUALITY</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full glass-pill text-slate-200 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#74f922]" />
              <span>24/7 Support DEDICATED</span>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {META_PROFILES_PACKS.map((pack) => {
            const isRec = pack.recommended;

            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isRec
                    ? 'glass-card border-2 border-blue-500 box-glow-green-lg scale-105 z-10 bg-white/15'
                    : 'glass-card hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {/* Recommended Tag */}
                {isRec && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-blue-500/30">
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    <span>RECOMMENDED PACK</span>
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Name & Price */}
                  <div className="border-b border-white/10 pb-6 space-y-3">
                    <div className="text-xs font-mono tracking-widest text-[#74f922] uppercase font-bold">
                      {pack.title}
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-5xl text-white tracking-tight">
                        {pack.price}
                      </span>
                      <span className="font-display font-bold text-xl text-[#74f922]">
                        {pack.currency}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                    {pack.features[currentLang].map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span className="w-4 h-4 rounded-full bg-lime-500/10 border border-lime-500/30 text-[#74f922] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPack(`META PROFILE: ${pack.title}`, pack.price)}
                    className={`w-full py-4 px-6 rounded-2xl font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isRec
                        ? 'bg-[#74f922] hover:bg-[#62db19] text-black shadow-lg shadow-lime-500/30 hover:scale-[1.02]'
                        : 'glass-pill hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{pack.ctaText[currentLang]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom 4 Feature Trust Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-center font-mono text-xs">
          <div className="p-4 glass-card-hover space-y-1">
            <ShieldCheck className="w-5 h-5 mx-auto text-[#74f922]" />
            <div className="text-white font-bold">HIGH QUALITY ACCOUNTS</div>
          </div>
          <div className="p-4 glass-card-hover space-y-1">
            <Lock className="w-5 h-5 mx-auto text-[#74f922]" />
            <div className="text-white font-bold">SECURE & SAFE</div>
          </div>
          <div className="p-4 glass-card-hover space-y-1">
            <Sparkles className="w-5 h-5 mx-auto text-[#74f922]" />
            <div className="text-white font-bold">GUARANTEED DURATION</div>
          </div>
          <div className="p-4 glass-card-hover space-y-1">
            <Headphones className="w-5 h-5 mx-auto text-[#74f922]" />
            <div className="text-white font-bold">FAST SUPPORT 24/7</div>
          </div>
        </div>

      </div>
    </section>
  );
};
