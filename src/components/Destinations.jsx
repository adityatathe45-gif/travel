import React, { useState } from 'react';
import { MapPin, Star, ArrowRight, Heart, Sparkles, Filter, Thermometer, Calendar } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export const Destinations = ({ onSelectDestination, wishlist, onToggleWishlist, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beach', 'Culture', 'Mountain', 'Luxury'];

  const filteredDestinations = DESTINATIONS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="destinations" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ocean-50 text-ocean-700 border border-ocean-200/60 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-ocean-600" />
              <span>World-Class Escapes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-emerald-600">Destinations</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              From the tranquil turquoise atolls of the Maldives to the snow-dusted summits of Switzerland, handpicked wonders crafted for your bucket list.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Filter Alert if Active */}
        {searchQuery && (
          <div className="mb-8 p-4 bg-ocean-50 border border-ocean-200 rounded-2xl flex items-center justify-between">
            <span className="text-sm font-medium text-ocean-800">
              Showing results matching: <strong className="font-bold">"{searchQuery}"</strong> ({filteredDestinations.length} found)
            </span>
            <button
              onClick={() => onSelectDestination(null)}
              className="text-xs font-bold text-ocean-600 hover:underline"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Destinations Grid (Bali, Paris, Dubai, Switzerland, Maldives, Japan) */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
            <p className="text-lg font-semibold text-slate-700">No destinations found matching your criteria.</p>
            <p className="text-sm text-slate-500 mt-1">Try exploring "Bali", "Paris", or reset your category filter.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-5 py-2 rounded-xl bg-ocean-600 text-white font-medium text-sm hover:bg-ocean-700"
            >
              View All Destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => {
              const isWishlisted = wishlist.includes(dest.id);
              return (
                <div
                  key={dest.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card-hover border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
                >
                  {/* Destination Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                        {dest.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/70 backdrop-blur-md text-white">
                        {dest.bestSeason}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(dest.id);
                      }}
                      aria-label="Save to Wishlist"
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                        isWishlisted
                          ? 'bg-rose-500 text-white shadow-md'
                          : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                    </button>

                    {/* Price and Rating on Image Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>{dest.rating}</span>
                        <span className="text-white/70">({dest.reviews})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-white/80 block">Starting from</span>
                        <span className="text-lg font-extrabold text-white">${dest.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-ocean-600 text-xs font-bold uppercase tracking-wider mb-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{dest.country}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors">
                        {dest.name}
                      </h3>

                      <p className="mt-2.5 text-slate-600 text-sm leading-relaxed line-clamp-2">
                        {dest.description}
                      </p>

                      {/* Micro info badges */}
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Thermometer className="w-3.5 h-3.5 text-ocean-500" />
                          {dest.avgTemp}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                          Best: {dest.bestSeason}
                        </span>
                      </div>
                    </div>

                    {/* Action Explore Button */}
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="mt-5 w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-ocean-600 text-slate-800 hover:text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn border border-slate-200/60 hover:border-transparent hover:shadow-md hover:shadow-ocean-600/20"
                    >
                      <span>Explore {dest.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
