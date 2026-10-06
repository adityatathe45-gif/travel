import React from 'react';
import { Compass, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      label: 'Instagram',
      svg: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      label: 'Twitter / X',
      svg: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      label: 'Facebook',
      svg: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      label: 'YouTube',
      svg: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean-500 to-emerald-400 flex items-center justify-center text-white shadow-md">
                <Compass className="w-6 h-6 animate-[spin_16s_linear_infinite]" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Wander<span className="text-ocean-400">ly</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Wanderly is your premier modern travel companion. We craft bespoke international itineraries, negotiate exclusive luxury rates, and guarantee seamless journeys worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-ocean-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links: Top Destinations */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Bali, Indonesia', 'Paris, France', 'Dubai, UAE', 'Swiss Alps', 'Maldives Atolls', 'Kyoto & Tokyo'].map((dest, i) => (
                <li key={i}>
                  <a href="#destinations" className="text-slate-400 hover:text-ocean-400 transition-colors">
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: Travel Packages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Featured Trips
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Tropical Bali Escape', 'Grand Swiss Alps', 'Parisian Romance', 'Maldives Overwater Bliss', 'Golden Japan Route', 'Dubai Desert & Skyline'].map((pkg, i) => (
                <li key={i}>
                  <a href="#packages" className="text-slate-400 hover:text-ocean-400 transition-colors">
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              24/7 Concierge
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">+1 (800) 482-9263</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">concierge@wanderly.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">742 Market St, Suite 400, San Francisco, CA</span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span className="font-semibold text-emerald-400 block mb-1">● Live Support Online</span>
              <span className="text-slate-400">Average response time: &lt; 2 minutes</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Wanderly Travel Inc. All rights reserved. Crafted with care for curious travelers.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Settings</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-ocean-600 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
