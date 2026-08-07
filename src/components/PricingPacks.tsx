import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { Language, PricingPack } from '../types';
import { CAMPAIGN_PACKS } from '../data/agencyData';

interface PricingPacksProps {
  currentLang: Language;
  onSelectPack: (packTitle: string, price: number) => void;
}

export const PricingPacks: React.FC<PricingPacksProps> = ({ currentLang, onSelectPack }) => {
  return (
    <section id="pricing" className="py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            SERVICE MEDIA BUYING (ADS)
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            CHOOSE YOUR <span className="text-[#74f922] text-glow-green">PACK</span>
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full glass-pill text-[#74f922] text-sm font-arabic font-bold">
            + اختر الباقة المناسبة لك +
          </div>
        </div>

        {/* Campaign Packs Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {CAMPAIGN_PACKS.map((pack) => {
            const isPopular = pack.popular;

            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isPopular
                    ? 'glass-card border-2 border-[#74f922] box-glow-green-lg scale-105 z-10 bg-white/15'
                    : 'glass-card hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {/* Popular Badge Header */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#74f922] text-black text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-lime-500/30">
                    <Sparkles className="w-3.5 h-3.5 fill-black" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Pack Name & Price */}
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

                    <div className="text-xs text-slate-300 font-mono">
                      {pack.duration}
                    </div>

                    <div className="text-xs text-lime-300 font-arabic font-bold">
                      {pack.durationAr}
                    </div>
                  </div>

                  {/* Feature Checklist */}
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
                    onClick={() => onSelectPack(pack.title, pack.price)}
                    className={`w-full py-4 px-6 rounded-2xl font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
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

      </div>
    </section>
  );
};
