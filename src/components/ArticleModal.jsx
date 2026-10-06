import React from 'react';
import { X, Clock, Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

export const ArticleModal = ({ article, onClose, onNotify }) => {
  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onNotify('Article link copied to clipboard!', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Article Banner Header */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/30"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-ocean-500 text-white uppercase tracking-wider inline-block mb-2">
                {article.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                {article.title}
              </h1>
            </div>
          </div>

          {/* Author & Meta bar */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.authorAvatar}
                alt={article.author}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <div className="text-sm font-bold text-slate-900">{article.author}</div>
                <div className="text-xs text-slate-500">{article.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-ocean-600" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                {article.readTime}
              </span>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-ocean-600 transition-colors"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-10 space-y-6">
            <p className="text-lg text-slate-700 font-medium leading-relaxed border-l-4 border-ocean-500 pl-4 italic bg-ocean-50/40 py-2 rounded-r-xl">
              {article.excerpt}
            </p>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 whitespace-pre-line text-sm sm:text-base">
              {article.content}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>

          <button
            onClick={() => {
              onClose();
              const target = document.querySelector('#packages');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
          >
            Find Trips Mentioned
          </button>
        </div>
      </div>
    </div>
  );
};
