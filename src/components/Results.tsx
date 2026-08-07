import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target, Award, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { RESULTS_STATS } from '../data/agencyData';

interface ResultsProps {
  currentLang: Language;
}

export const Results: React.FC<ResultsProps> = ({ currentLang }) => {
  const icons = [TrendingUp, TrendingDown, DollarSign, Target];

  return (
    <section id="results" className="py-20 border-b border-white/10 relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            RESULTS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            RESULTS <span className="text-[#74f922] text-glow-green">THAT SPEAK</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-medium">
            Smart Ads. <strong className="text-[#74f922]">Real Results.</strong> Scalable Growth.
          </p>
        </div>

        {/* Big Metrics Grid (Matching frosted glass styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-8 glass-card hover:border-[#74f922]/80 transition-all duration-300 space-y-4 box-glow-green hover:scale-[1.03] group text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-[#74f922] group-hover:bg-[#74f922] group-hover:text-black transition-colors">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="font-display font-black text-4xl sm:text-5xl text-[#74f922] tracking-tight text-glow-green">
                  {stat.value}
                </div>

                <div className="space-y-1">
                  <div className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {stat.label[currentLang]}
                  </div>
                  <div className="text-xs text-lime-300 font-arabic font-bold pt-1">
                    {stat.sublabelAr}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proven Track Record Highlight Banner */}
        <div className="mt-16 p-6 sm:p-8 glass-panel border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left rtl:text-right">
            <div className="w-12 h-12 rounded-2xl bg-[#74f922] text-black flex items-center justify-center shrink-0 shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {currentLang === 'fr' ? 'Campagnes Rentables Garanties' : currentLang === 'ar' ? 'حملات مربحة ومثبتة' : 'Proven Campaign Execution'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Plus de 150+ campagnes lancées au Maroc et en région MENA avec un ROAS moyen de 3.8x à 6.2x.
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-[#74f922] hover:bg-[#62db19] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-lime-500/20"
          >
            {currentLang === 'fr' ? 'Voir nos offres' : currentLang === 'ar' ? 'تصفح العروض' : 'Explore Packages'}
          </a>
        </div>

      </div>
    </section>
  );
};
