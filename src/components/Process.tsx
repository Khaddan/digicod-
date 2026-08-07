import React from 'react';
import { Target, BarChart, TrendingUp, Users, Wrench } from 'lucide-react';
import { Language } from '../types';
import { STRATEGY_PROCESS } from '../data/agencyData';

interface ProcessProps {
  currentLang: Language;
}

export const Process: React.FC<ProcessProps> = ({ currentLang }) => {
  const stepIcons = [Target, BarChart, TrendingUp, Users, Wrench];

  return (
    <section id="process" className="py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            PROFESSIONAL AD CAMPAIGNS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            SCALING YOUR BUSINESS <span className="text-[#74f922] text-glow-green">WITH DATA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Smart strategies, effective creative, and continuous optimization — engineered for sustainable growth and real profit.
          </p>
        </div>

        {/* Process Steps Cards List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {STRATEGY_PROCESS.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={idx}
                className="p-6 glass-card-hover flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-[#74f922] font-mono font-bold shrink-0 group-hover:bg-[#74f922] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#74f922] font-bold">[{step.num}]</span>
                      <h3 className="font-display font-bold text-lg text-white">
                        {step.title[currentLang]}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1">
                      {step.desc[currentLang]}
                    </p>
                  </div>
                </div>

                {/* Arabic Label Badge */}
                <div className="px-3 py-1.5 rounded-lg glass-pill text-lime-300 text-xs font-arabic font-bold whitespace-nowrap self-end sm:self-center">
                  {step.title.ar}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
