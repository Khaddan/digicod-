import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface RoiCalculatorProps {
  currentLang: Language;
  onOpenOrderModal: (packName?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ currentLang, onOpenOrderModal }) => {
  const [budget, setBudget] = useState<number>(3000);
  const [platform, setPlatform] = useState<string>('meta');
  const [objective, setObjective] = useState<string>('leads');

  // Calculation parameters based on market benchmarks in Morocco / MENA
  const getCalculatedMetrics = () => {
    let cplAvg = 22; // DH
    let ctrAvg = 0.028;
    let avgOrderValue = 350; // DH

    if (platform === 'tiktok') cplAvg = 18;
    if (platform === 'google') cplAvg = 32;
    if (platform === 'snapchat') cplAvg = 20;

    if (objective === 'sales') {
      cplAvg = 38;
      avgOrderValue = 450;
    } else if (objective === 'realestate') {
      cplAvg = 65;
      avgOrderValue = 5000;
    }

    const estimatedLeads = Math.round(budget / cplAvg);
    const estimatedImpressions = Math.round((budget / 12) * 1000);
    const estimatedClicks = Math.round(estimatedImpressions * ctrAvg);
    const estimatedRevenue = Math.round(estimatedLeads * (avgOrderValue * 0.28));
    const estimatedRoi = ((estimatedRevenue / budget) * 100).toFixed(0);

    return {
      leads: estimatedLeads,
      impressions: estimatedImpressions.toLocaleString(),
      clicks: estimatedClicks.toLocaleString(),
      cpl: cplAvg,
      revenue: estimatedRevenue.toLocaleString(),
      roi: estimatedRoi
    };
  };

  const metrics = getCalculatedMetrics();

  const handleShareCalculation = () => {
    const text = encodeURIComponent(
      `Bonjour DIGICOD ADS! J'ai simulé une campagne avec un budget de ${budget} DH sur ${platform.toUpperCase()} (${objective}). Estimation: ${metrics.leads} leads/commandes. Pouvons-nous lancer?`
    );
    window.open(`${AGENCY_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono tracking-widest uppercase font-bold">
            <Calculator className="w-4 h-4 text-[#74f922]" />
            <span>ESTIMATE YOUR CAMPAIGN PERFORMANCE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            SIMULATEUR DE <span className="text-[#74f922] text-glow-green">RÉSULTATS & ROI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Estimez instantanément le nombre de prospects, le coût par lead et le chiffre d'affaires potentiel avec nos algorithmes de Media Buying.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start glass-card p-6 sm:p-10 box-glow-green">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Budget Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white font-display">
                  Miroir / Budget Publicitaire Estimé (DH):
                </label>
                <div className="text-2xl font-black text-[#74f922] font-display">
                  {budget.toLocaleString()} DH
                </div>
              </div>

              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#74f922]"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1,000 DH</span>
                <span>25,000 DH</span>
                <span>50,000 DH</span>
              </div>
            </div>

            {/* Platform Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white font-display">
                Plateforme Principale:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'meta', name: 'Meta Ads' },
                  { id: 'tiktok', name: 'TikTok Ads' },
                  { id: 'google', name: 'Google Ads' },
                  { id: 'snapchat', name: 'Snapchat' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      platform === p.id
                        ? 'bg-[#74f922] text-black shadow-md font-extrabold'
                        : 'glass-pill text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Campaign Objective */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white font-display">
                Objectif Commercial:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'leads', name: 'Leads WhatsApp / Form' },
                  { id: 'sales', name: 'Ventes E-Commerce' },
                  { id: 'realestate', name: 'Immobilier & Services' },
                ].map((obj) => (
                  <button
                    key={obj.id}
                    onClick={() => setObjective(obj.id)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      objective === obj.id
                        ? 'glass-card text-[#74f922] border-[#74f922] bg-white/20'
                        : 'glass-pill text-slate-300 hover:bg-white/15'
                    }`}
                  >
                    {obj.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>PRÉVISIONS D'ACQUISITION</span>
              <span className="text-[#74f922] font-bold">LIVE SIMULATION</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                <div className="text-[11px] text-slate-300 font-mono">Prospects / Leads Estimés</div>
                <div className="text-2xl sm:text-3xl font-black text-[#74f922] font-display pt-1">
                  +{metrics.leads}
                </div>
                <div className="text-[10px] text-lime-300 font-arabic pt-1">عملاء محتملون</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                <div className="text-[11px] text-slate-300 font-mono">Coût par Lead Moyen</div>
                <div className="text-2xl sm:text-3xl font-black text-white font-display pt-1">
                  ~{metrics.cpl} DH
                </div>
                <div className="text-[10px] text-slate-400 font-arabic pt-1">تكلفة العميل</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                <div className="text-[11px] text-slate-300 font-mono">Impressions Prévues</div>
                <div className="text-xl sm:text-2xl font-bold text-slate-200 font-display pt-1">
                  {metrics.impressions}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                <div className="text-[11px] text-slate-300 font-mono">ROI / Multiplicateur Est.</div>
                <div className="text-xl sm:text-2xl font-bold text-[#74f922] font-display pt-1">
                  +{metrics.roi}%
                </div>
              </div>

            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleShareCalculation}
                className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Envoyer ma simulation WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenOrderModal(`Campagne ${budget} DH - ${platform.toUpperCase()}`)}
                className="py-3.5 px-4 rounded-xl bg-[#74f922] hover:bg-[#62db19] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lancer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
