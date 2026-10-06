import React, { useState } from 'react';
import { X, MapPin, Star, Thermometer, Calendar, Check, ArrowRight, Heart } from 'lucide-react';

export const DestinationModal = ({ destination, onClose, onBookPackage, isWishlisted, onToggleWishlist }) => {
  if (!destination) return null;

  const [activeImg, setActiveImg] = useState(destination.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Main Hero Gallery */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
            <img
              src={activeImg}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

            {/* Bottom Title on Image */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-semibold mb-1">
                  <MapPin className="w-4 h-4 text-ocean-400" />
                  <span>{destination.country}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                  <span className="text-emerald-300 font-bold">{destination.category}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {destination.name}
                </h2>
                <p className="text-slate-200 text-sm mt-1 max-w-xl hidden sm:block">
                  {destination.tagline}
                </p>
              </div>

              <button
                onClick={() => onToggleWishlist(destination.id)}
                className={`p-3 rounded-full backdrop-blur-md transition-all ${
                  isWishlisted ? 'bg-rose-500 text-white shadow-lg' : 'bg-white/80 text-slate-800 hover:bg-white'
                }`}
                title={isWishlisted ? 'Remove from Saved' : 'Save to Favorites'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {destination.gallery && destination.gallery.length > 1 && (
            <div className="px-6 py-3 bg-slate-100 flex items-center gap-3 overflow-x-auto border-b border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">Photos:</span>
              {[destination.image, ...destination.gallery].slice(0, 4).map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(thumb)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImg === thumb ? 'border-ocean-600 scale-105 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt={`thumbnail-${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Rating</div>
                  <div className="text-sm font-bold text-slate-900">{destination.rating} / 5.0</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Avg Temp</div>
                  <div className="text-sm font-bold text-slate-900">{destination.avgTemp}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Best Season</div>
                  <div className="text-sm font-bold text-slate-900">{destination.bestSeason}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                  <span className="text-base font-extrabold">$</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Estimated From</div>
                  <div className="text-sm font-bold text-slate-900">${destination.price} / person</div>
                </div>
              </div>
            </div>

            {/* Overview & Long Description */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">About this Destination</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {destination.longDescription || destination.description}
              </p>
            </div>

            {/* Top Highlights */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Top Highlights & Experiences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 block font-medium">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">${destination.price}</span>
              <span className="text-xs text-slate-500">/ person (7 days)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookPackage(destination.name);
              }}
              className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-gradient-to-r from-ocean-600 to-emerald-600 hover:from-ocean-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-ocean-600/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
