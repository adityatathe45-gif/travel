import React from 'react';
import { ShieldCheck, Award, Headphones, CalendarCheck, Sparkles, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/travelData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  Headphones: Headphones,
  CalendarCheck: CalendarCheck,
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-700 border border-ocean-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ocean-600" />
            <span>The Wanderly Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-emerald-600">Wanderly</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We simplify global travel with unmatched transparency, vetted hospitality partners, and around-the-clock peace of mind.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:border-ocean-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 relative"
              >
                <div>
                  {/* Icon Container with Gradient Fill */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-ocean-500/10 to-emerald-500/10 text-ocean-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-ocean-600 group-hover:to-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 mb-3 group-hover:bg-ocean-50 group-hover:text-ocean-700 transition-colors">
                    {item.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ocean-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Checkmark indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Guaranteed by Wanderly</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Banner Callout */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-ocean-600/30 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to turn your dream vacation into reality?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
                Join over 50,000 travelers who booked unforgettable memories with Wanderly this year.
              </p>
            </div>
            <a
              href="#packages"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-400 text-slate-950 font-extrabold text-sm hover:from-ocean-400 hover:to-emerald-300 transition-all shadow-lg shadow-ocean-500/20 hover:scale-105 shrink-0"
            >
              Explore All Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
