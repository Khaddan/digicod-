import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Language, LeadFormData } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface AuditFormProps {
  currentLang: Language;
}

export const AuditForm: React.FC<AuditFormProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    websiteOrPage: '',
    budget: '2000-5000 DH',
    platform: 'Meta Ads (FB/IG)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Direct WhatsApp dispatch with structured message
    const msg = encodeURIComponent(
      `🎯 *DEMANDE D'AUDIT / CAMPAGNE DIGICOD ADS*\n` +
      `👤 Nom: ${formData.name}\n` +
      `📞 Téléphone: ${formData.phone}\n` +
      `🌐 Page/Site: ${formData.websiteOrPage}\n` +
      `💰 Budget prévu: ${formData.budget}\n` +
      `📌 Plateforme: ${formData.platform}\n` +
      `💬 Message: ${formData.message || 'Souhaite lancer une campagne publicitaire'}`
    );

    setTimeout(() => {
      window.open(`${AGENCY_INFO.whatsappUrl}?text=${msg}`, '_blank');
    }, 400);
  };

  return (
    <section id="audit" className="py-20 border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 box-glow-green">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREE CAMPAIGN & AUDIT CONSULTATION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              DEMANDEZ VOTRE <span className="text-[#74f922]">STRATÉGIE SUR-MESURE</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Remplissez ce formulaire rapide pour recevoir une analyse gratuite de votre marché et de votre potentiel publicitaire.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl glass-panel border border-lime-500/50 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#74f922] text-black flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Demande envoyée avec succès!
              </h3>
              <p className="text-slate-300 text-sm">
                Redirection vers WhatsApp en cours pour échanger directement avec notre Media Buyer dédié...
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#74f922] underline cursor-pointer"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-200 uppercase mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Youssef Benani"
                    className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#74f922]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-200 uppercase mb-2">
                    Numéro Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ex: +212 600 000 000"
                    className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#74f922]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-200 uppercase mb-2">
                    Lien Page Facebook / Instagram / Site Web
                  </label>
                  <input
                    type="text"
                    value={formData.websiteOrPage}
                    onChange={(e) => setFormData({ ...formData, websiteOrPage: e.target.value })}
                    placeholder="Ex: instagram.com/mon_shop"
                    className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#74f922]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-200 uppercase mb-2">
                    Budget Publicitaire Prévu
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#74f922]"
                  >
                    <option value="700 DH (Basic Test)" className="bg-slate-900 text-white">700 DH (Basic Test)</option>
                    <option value="1200 DH (Pack Growth)" className="bg-slate-900 text-white">1200 DH (Pack Growth)</option>
                    <option value="2000 DH (Pack Scale)" className="bg-slate-900 text-white">2000 DH (Pack Scale)</option>
                    <option value="5000+ DH (Sur-mesure)" className="bg-slate-900 text-white">5000+ DH (Sur-mesure)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-200 uppercase mb-2">
                  Message / Détails sur votre produit ou service
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ex: Je vend des vêtements pour femmes et je cherche à augmenter mes ventes en ligne..."
                  className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#74f922]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 rounded-2xl bg-[#74f922] hover:bg-[#62db19] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-lime-500/25 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-black" />
                <span>RECEVOIR MON AUDIT ET ÉCHANGER SUR WHATSAPP</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
