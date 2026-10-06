import React from 'react';
import { Clock, Star, CheckCircle, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { TRAVEL_PACKAGES } from '../data/travelData';

export const Packages = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>All-Inclusive Curated Itineraries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-ocean-600">Travel Packages</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Handcrafted luxury and adventure vacation packages with top-rated accommodation, guided excursions, and transparent pricing.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-slate-50/60 rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:border-ocean-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-ocean-400" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-300">({pkg.reviewCount})</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Destination */}
                  <div className="text-xs font-bold uppercase tracking-wider text-ocean-600 mb-1">
                    {pkg.destination}
                  </div>

                  {/* Package Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>

                  {/* Included Activities */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.activities.map((act, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200"
                        >
                          <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{act}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Action Button Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-slate-900">${pkg.price}</span>
                      <span className="text-xs text-slate-500 font-medium">/ person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-ocean-600 to-emerald-600 hover:from-ocean-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-ocean-600/20 hover:shadow-ocean-600/30 flex items-center gap-1.5 transition-all group/btn"
                  >
                    <span>View Package</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
