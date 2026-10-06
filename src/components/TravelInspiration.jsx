import React from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { TRAVEL_INSPIRATION } from '../data/travelData';

export const TravelInspiration = ({ onSelectArticle }) => {
  return (
    <section id="inspiration" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Travel Stories & Advice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-emerald-600">Inspiration</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Expert guides, destination breakdowns, and smart itineraries curated by our seasoned globetrotters.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_INSPIRATION.map((blog) => (
            <article
              key={blog.id}
              onClick={() => onSelectArticle(blog)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  {/* Meta: Read time & Date */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-ocean-500" />
                      {blog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-ocean-600 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read Action Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.authorAvatar}
                      alt={blog.author}
                      className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{blog.author}</div>
                      <div className="text-[11px] text-slate-500">{blog.authorRole}</div>
                    </div>
                  </div>

                  <span className="text-ocean-600 group-hover:text-ocean-700 text-xs font-bold flex items-center gap-1">
                    Read Story
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
