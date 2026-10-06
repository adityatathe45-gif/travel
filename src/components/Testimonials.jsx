import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-700 border border-ocean-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ocean-600" />
            <span>Real Traveler Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-emerald-600">Travelers</span> Worldwide
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Read authentic reviews from explorers, honeymooners, and families who discovered the world with Wanderly.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-ocean-200" />
                </div>

                {/* Review Quote */}
                <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Traveler Identity */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900 truncate">{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" title="Verified Traveler" />
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">{item.role}</div>
                  <div className="text-[10px] font-semibold text-ocean-600 truncate mt-0.5">
                    {item.destination}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 bg-ocean-50/60 border border-ocean-100 rounded-3xl p-6 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl font-extrabold text-slate-900">4.95 / 5.0</div>
            <div className="text-xs font-semibold text-slate-500">Overall Traveler Rating</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-ocean-200/60"></div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">99.4%</div>
            <div className="text-xs font-semibold text-slate-500">Recommended by Customers</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-ocean-200/60"></div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">50,000+</div>
            <div className="text-xs font-semibold text-slate-500">Successful Global Trips</div>
          </div>
        </div>
      </div>
    </section>
  );
};
