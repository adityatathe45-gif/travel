import React, { useState } from 'react';
import { Send, Gift, Sparkles, Compass, Check, Copy } from 'lucide-react';

export const TripPlannerCTA = ({ onNotify, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeVibe, setActiveVibe] = useState('Beach');

  const vibes = [
    { id: 'Beach', label: 'Beach & Island', emoji: '🏖️' },
    { id: 'Mountain', label: 'Alpine & Peaks', emoji: '🏔️' },
    { id: 'Culture', label: 'Art & Heritage', emoji: '🏛️' },
    { id: 'Luxury', label: 'High Luxury', emoji: '💎' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onNotify('Please enter a valid email address.', 'error');
      return;
    }
    onNotify('Welcome aboard! Check your inbox for your 20% discount coupon code: WANDER20', 'success');
    setEmail('');
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('WANDER20');
    setCopied(true);
    onNotify('Coupon code "WANDER20" copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ocean-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-800/90 via-slate-850 to-slate-900/90 border border-slate-700/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and Newsletter */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Gift className="w-3.5 h-3.5 text-emerald-400" />
                <span>Special 2026 Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-ocean-400">20% Off</span> Your Next Dream Vacation
              </h2>

              <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl">
                Subscribe to Wanderly’s weekly travel dispatch for private flash sales, hidden gem itineraries, and zero spam.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-3.5 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-ocean-500 to-emerald-400 hover:from-ocean-400 hover:to-emerald-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Get 20% Off</span>
                </button>
              </form>

              {/* Promo Code Pill */}
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                <span>Or use coupon instantly:</span>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-emerald-300 font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>WANDER20</span>
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                </button>
              </div>
            </div>

            {/* Right Column: Quick Travel Vibe Selector */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-ocean-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Instant Trip Matcher</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">What is your dream vibe?</h3>
              <p className="text-slate-300 text-xs mb-6">Select your travel mood to jump to matching handpicked getaways:</p>

              <div className="grid grid-cols-2 gap-3">
                {vibes.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      setActiveVibe(v.id);
                      const target = document.querySelector('#destinations');
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                      onNotify(`Browsing ${v.label} recommendations!`, 'info');
                    }}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      activeVibe === v.id
                        ? 'bg-gradient-to-br from-ocean-600/30 to-emerald-600/30 border-ocean-400 text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-2xl mb-1">{v.emoji}</div>
                    <div className="font-bold text-sm text-white">{v.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Explore trips &rarr;</div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
