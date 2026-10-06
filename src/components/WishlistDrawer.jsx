import React from 'react';
import { X, Heart, Trash2, ArrowRight, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export const WishlistDrawer = ({ isOpen, onClose, wishlist, onRemoveFromWishlist, onSelectDestination }) => {
  if (!isOpen) return null;

  const savedDestinations = DESTINATIONS.filter((d) => wishlist.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-fade-in border-l border-slate-200">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-rose-500" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Saved Destinations ({savedDestinations.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            {savedDestinations.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-300 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800">Your wishlist is empty</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Tap the heart icon on any destination card to save your favorite getaways here for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-ocean-600 text-white font-bold text-xs hover:bg-ocean-700 transition-colors"
                >
                  Explore Destinations
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {savedDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="p-3 rounded-2xl border border-slate-200 hover:border-ocean-300 transition-all flex items-center gap-3 bg-white shadow-sm"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-ocean-600 uppercase">
                        <MapPin className="w-3 h-3" />
                        <span>{dest.country}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {dest.name}
                      </h4>
                      <div className="text-xs font-extrabold text-slate-900 mt-0.5">
                        ${dest.price}{' '}
                        <span className="text-[10px] text-slate-500 font-normal">/ person</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectDestination(dest);
                        }}
                        className="p-2 rounded-lg bg-ocean-50 text-ocean-600 hover:bg-ocean-100 transition-colors"
                        title="View Details"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onRemoveFromWishlist(dest.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {savedDestinations.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => {
                  onClose();
                  const target = document.querySelector('#packages');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-ocean-600 to-emerald-600 text-white font-bold text-sm shadow-md hover:from-ocean-500 hover:to-emerald-500 transition-all"
              >
                Book Saved Getaway
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
