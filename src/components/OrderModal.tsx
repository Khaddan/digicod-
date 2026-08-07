import React, { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackTitle?: string;
  selectedPackPrice?: number;
  currentLang: Language;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPackTitle = 'PACK SCALE (2000 DH)',
  selectedPackPrice,
  currentLang
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const priceText = selectedPackPrice ? `${selectedPackPrice} DH` : '';
    const message = encodeURIComponent(
      `⚡ *NOUVELLE COMMANDE DIGICOD ADS*\n\n` +
      `📦 *Baqaa / Pack:* ${selectedPackTitle} ${priceText}\n` +
      `👤 *Nom:* ${clientName || 'Client'}\n` +
      `📞 *Téléphone:* ${clientPhone || 'Non spécifié'}\n` +
      `🏢 *Activité:* ${businessType || 'Non spécifié'}\n` +
      `📝 *Notes:* ${notes || 'Souhaite débuter rapidement'}\n\n` +
      `Merci d'effectuer la validation.`
    );

    window.open(`${AGENCY_INFO.whatsappUrl}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-card border border-white/20 p-6 sm:p-8 box-glow-green-lg space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-pill text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-left rtl:text-right">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[#74f922] text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMANDE DIRECTE WHATSAPP</span>
          </div>

          <h3 className="font-display font-extrabold text-2xl text-white">
            Commander {selectedPackTitle}
          </h3>

          <p className="text-xs text-slate-300">
            Validez vos coordonnées ci-dessous pour être mis en relation avec notre expert Media Buyer.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendOrder} className="space-y-4">
          
          <div>
            <label className="block text-xs font-mono text-slate-200 mb-1">
              Votre Nom / Marque *
            </label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Ex: Amine / Brand Store"
              className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#74f922]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-200 mb-1">
              Numéro Téléphone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="Ex: 06 31 76 98 51"
              className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#74f922]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-200 mb-1">
              Secteur / Domaine d'activité
            </label>
            <input
              type="text"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="Ex: E-commerce, Cosmétique, Service, Immobilier"
              className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#74f922]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-200 mb-1">
              Remarques spécifiques ou questions
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Lancement souhaité dès demain..."
              className="w-full bg-slate-950/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#74f922]"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#74f922] hover:bg-[#62db19] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-lime-500/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>CONFIRMER SUR WHATSAPP ({AGENCY_INFO.phone})</span>
            </button>
          </div>

          <div className="text-[10px] text-center text-slate-400 font-mono flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
            <span>Paiement sécurisé local en DH par virement après confirmation</span>
          </div>

        </form>

      </div>
    </div>
  );
};
