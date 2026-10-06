import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Heart, User, Globe, PhoneCall } from 'lucide-react';

export const Navbar = ({ onOpenAuth, wishlistCount, onOpenWishlist, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Inspiration', href: '#inspiration' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm border-b border-slate-200/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-ocean-500/25 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white drop-shadow-sm'
              }`}>
                Wander<span className="text-ocean-500">ly</span>
              </span>
              <span className={`text-[10px] tracking-widest font-semibold uppercase -mt-1 ${
                isScrolled ? 'text-slate-500' : 'text-slate-600 md:text-slate-200'
              }`}>
                Travel & Tourism
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? 'text-slate-700 hover:text-ocean-600 hover:bg-ocean-50'
                    : 'text-slate-800 md:text-white/90 hover:text-white md:hover:bg-white/15'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="relative">
              <button
                onClick={() => setCurrency(currency === 'USD' ? 'EUR' : currency === 'EUR' ? 'GBP' : 'USD')}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-colors ${
                  isScrolled
                    ? 'border-slate-200 text-slate-700 hover:bg-slate-100'
                    : 'border-white/30 text-slate-800 md:text-white hover:bg-white/10'
                }`}
                title="Change Currency"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currency}</span>
              </button>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className={`relative p-2 rounded-xl transition-all ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-slate-800 md:text-white hover:bg-white/15'
              }`}
              title="Saved Destinations"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white rounded-full text-[11px] font-bold flex items-center justify-center shadow">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Login Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md bg-gradient-to-r from-ocean-600 to-ocean-500 hover:from-ocean-500 hover:to-ocean-600 text-white shadow-ocean-600/20 hover:shadow-ocean-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenWishlist}
              className={`p-2 rounded-lg relative ${
                isScrolled ? 'text-slate-800' : 'text-slate-900 md:text-white'
              }`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute 0 top-0 right-0 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-900 md:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-slate-800 font-semibold text-base py-2.5 px-3 rounded-lg hover:bg-ocean-50 hover:text-ocean-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <hr className="border-slate-100 my-2" />
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => {
                  setCurrency(currency === 'USD' ? 'EUR' : currency === 'EUR' ? 'GBP' : 'USD');
                }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-2 rounded-lg"
              >
                <Globe className="w-4 h-4" />
                <span>Currency: {currency}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-ocean-600 text-white shadow-md"
              >
                <User className="w-4 h-4" />
                <span>Login / Register</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
