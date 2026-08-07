import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { FAQS } from '../data/agencyData';

interface FaqProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqProps> = ({ currentLang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            <HelpCircle className="w-4 h-4 text-[#74f922]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            QUESTIONS <span className="text-[#74f922] text-glow-green">FRÉQUENTES</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tout ce que vous devez savoir sur nos services de Media Buying et nos comptes Meta Ads.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white hover:text-[#74f922] transition-colors cursor-pointer"
                >
                  <span>{faq.q[currentLang]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#74f922] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a[currentLang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
