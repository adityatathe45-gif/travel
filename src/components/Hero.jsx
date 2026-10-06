import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/travelData';

export const Hero = ({ onSearch, popularDestinations, onQuickSelect }) => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({ destination, travelDate, travelers });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Image with Layered Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
          alt="Breathtaking tropical beach with crystal turquoise water"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in transition-transform duration-1000"
        />
        {/* Subtle Nature-Inspired Gradients: Deep Ocean Blue to Tropical Emerald & Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/45 to-slate-950/85"></div>
        <div className="absolute inset-0 bg-radial-gradient from-ocean-500/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold mb-6 shadow-lg animate-float">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Curated Journeys • Unforgettable Memories</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="hidden sm:inline-block text-emerald-300 font-bold">2026 Travel Collections</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-md">
          Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 via-emerald-300 to-teal-200">Adventure</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 font-normal max-w-2xl leading-relaxed drop-shadow">
          Explore breathtaking destinations and create unforgettable memories with custom-tailored travel experiences.
        </p>

        {/* Interactive Search Box */}
        <div className="w-full max-w-5xl mt-10">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-950/40 border border-white/40 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
          >
            {/* Where to */}
            <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-ocean-300 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left w-full">
                <label htmlFor="destination-input" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Where do you want to go?
                </label>
                <input
                  id="destination-input"
                  type="text"
                  placeholder="e.g. Bali, Paris, Swiss Alps..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-slate-800 text-sm font-semibold placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Travel Date */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-3 bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-ocean-300 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left w-full">
                <label htmlFor="date-input" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Travel Date
                </label>
                <input
                  id="date-input"
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-transparent text-slate-800 text-sm font-semibold focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Number of Travelers */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-3 bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-ocean-300 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left w-full">
                <label htmlFor="travelers-select" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Travelers
                </label>
                <select
                  id="travelers-select"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-transparent text-slate-800 text-sm font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="1 Solo Traveler">1 Solo Traveler</option>
                  <option value="2 Travelers">2 Travelers (Couple)</option>
                  <option value="3-4 Travelers">3 - 4 Travelers (Family / Small Group)</option>
                  <option value="5+ Travelers">5+ Travelers (Large Group)</option>
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-ocean-600 via-ocean-500 to-teal-500 hover:from-ocean-500 hover:to-teal-600 text-white font-bold text-base rounded-xl sm:rounded-2xl shadow-lg shadow-ocean-600/30 flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-xl hover:shadow-ocean-600/40 hover:-translate-y-0.5"
              >
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Trending Destinations Quick Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/90">
            <span className="font-semibold text-white/70">Popular Searches:</span>
            {['Bali', 'Paris', 'Dubai', 'Switzerland', 'Maldives', 'Japan'].map((place) => (
              <button
                key={place}
                onClick={() => {
                  setDestination(place);
                  onQuickSelect(place);
                }}
                className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-sm transition-all hover:scale-105 cursor-pointer font-medium text-white"
              >
                {place}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="mt-14 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center hover:bg-white/15 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-200 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
