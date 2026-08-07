import React from 'react';
import { Rocket, TrendingUp, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Language } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  currentLang: Language;
  onOpenOrderModal: (packName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenOrderModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/10">
      {/* Background Frosted Radial Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left rtl:text-right">
            
            {/* Top Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[#74f922] text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#74f922] animate-ping"></span>
              <Zap className="w-3.5 h-3.5 text-[#74f922]" />
              <span>DIGICOD ADS AGENCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              WE <span className="text-[#74f922] text-glow-green uppercase">BUY ADS</span>,<br />
              YOU GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74f922] via-emerald-300 to-cyan-300 uppercase">RESULTS</span>
            </h1>

            {/* Subtitle EN / FR */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              {currentLang === 'fr' ? (
                <>
                  <strong className="text-white">Smart Ads. Real Results. Scalable Growth.</strong> Nous gérons des campagnes de Media Buying à haute performance sur toutes les plateformes majeures — conçues pour réduire votre coût par prospect et multiplier vos revenus.
                </>
              ) : currentLang === 'ar' ? (
                <>
                  <strong className="text-white">إعلانات ذكية. نتائج حقيقية. نمو قابل للتوسع.</strong> ندير حملات الشراء الإعلاني عالية الأداء عبر جميع المنصات الرئيسية — مصممة لخفض تكلفة العميل وزيادة أرباحك بشكل مضاعف.
                </>
              ) : (
                <>
                  <strong className="text-white">Smart Ads. Real Results. Scalable Growth.</strong> We run high-performance media buying campaigns across every major platform — engineered to lower your cost per lead and multiply revenue.
                </>
              )}
            </p>

            {/* Arabic Highlight Banner Badge (Frosted Glass style) */}
            <div className="p-4 rounded-2xl glass-panel border border-white/15 flex items-center justify-between gap-4 font-arabic text-right">
              <div className="text-lime-300 text-sm sm:text-base font-bold">
                نشتري الإعلانات الذكية لنحقق لك أفضل النتائج
              </div>
              <div className="px-3 py-1 rounded-lg bg-[#74f922] text-black font-black text-xs shadow-md">
                2026
              </div>
            </div>

            {/* CTAs Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenOrderModal()}
                className="flex items-center gap-2.5 bg-[#74f922] hover:bg-[#64dc19] text-black font-black px-8 py-4 rounded-2xl text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Rocket className="w-5 h-5 fill-black" />
                <span>LAUNCH A CAMPAIGN</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#results"
                className="flex items-center gap-2 glass-pill hover:bg-white/15 text-slate-200 hover:text-white font-bold px-6 py-4 rounded-2xl text-sm sm:text-base transition-all"
              >
                <BarChart3 className="w-5 h-5 text-[#74f922]" />
                <span>SEE THE NUMBERS</span>
              </a>
            </div>

            {/* Top 3 Quick Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="font-display font-black text-2xl sm:text-4xl text-[#74f922] tracking-tight">
                  +320%
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                  LEADS GENERATED
                </div>
                <div className="text-[10px] text-slate-400 font-arabic">زيادة في العملاء</div>
              </div>

              <div className="space-y-1">
                <div className="font-display font-black text-2xl sm:text-4xl text-[#74f922] tracking-tight">
                  -45%
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                  COST PER LEAD
                </div>
                <div className="text-[10px] text-slate-400 font-arabic">تخفيض في التكلفة</div>
              </div>

              <div className="space-y-1">
                <div className="font-display font-black text-2xl sm:text-4xl text-[#74f922] tracking-tight">
                  +250K
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                  REVENUE DRIVEN
                </div>
                <div className="text-[10px] text-slate-400 font-arabic">إيرادات محققة</div>
              </div>
            </div>

          </div>

          {/* Right Column High Tech Rocket / Launch Visual with Frosted Glass Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container with Frosted Glass & Neon Accent */}
              <div className="glass-card p-6 box-glow-green overflow-hidden">
                
                {/* Decorative header element */}
                <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="text-[11px] font-mono text-lime-300 glass-pill px-3 py-1 rounded-full">
                    DIGICOD_SYSTEM_v2.0
                  </div>
                </div>

                {/* Cyber Space Rocket Graphic */}
                <div className="relative aspect-[4/5] rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

                  {/* Animated Rocket Image / Custom Vector Asset */}
                  <div className="relative z-10 space-y-6 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-lime-500/20 p-4 border border-white/20 flex items-center justify-center relative box-glow-green-lg backdrop-blur-md">
                      {/* Rocket Icon with Flare */}
                      <Rocket className="w-20 h-20 text-[#74f922] -rotate-45 animate-bounce duration-1000 filter drop-shadow-[0_0_15px_rgba(116,249,34,0.8)]" />
                      
                      {/* Flame Particles */}
                      <div className="absolute -bottom-2 w-12 h-12 bg-gradient-to-t from-lime-400 to-cyan-400 rounded-full blur-md opacity-80 animate-pulse"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xl font-display font-black text-white tracking-wide">
                        SCALE YOUR CAMPAIGN
                      </div>
                      <p className="text-xs text-slate-300 font-mono">
                        Real-time tracking • High conversion ROI • Premium Ad Inventory
                      </p>
                    </div>

                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-pill text-[#74f922] text-xs font-bold font-mono">
                      <TrendingUp className="w-4 h-4" />
                      <span>CAMPAIGN STATUS: ACTIVE & OPTIMIZED</span>
                    </div>
                  </div>

                  {/* Floating Metric Badges with Glass Backdrop */}
                  <div className="absolute top-4 left-4 glass-panel px-3.5 py-2 rounded-xl text-left backdrop-blur-lg">
                    <div className="text-[10px] text-slate-300 font-mono">ROAS Target</div>
                    <div className="text-xs font-bold text-[#74f922]">4.8x Return</div>
                  </div>

                  <div className="absolute bottom-4 right-4 glass-panel px-3.5 py-2 rounded-xl text-right backdrop-blur-lg">
                    <div className="text-[10px] text-slate-300 font-mono">Cost Per Lead</div>
                    <div className="text-xs font-bold text-white">-45% Reduced</div>
                  </div>

                </div>

                {/* Bottom Trust Tag */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1.5 text-lime-400">
                    <ShieldCheck className="w-4 h-4" /> Verified Media Buying Agency
                  </span>
                  <span>MAROC / MENA</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
