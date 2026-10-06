import React, { useState } from 'react';
import { X, Clock, Star, Users, Calendar, CheckCircle2, ShieldCheck, Tag, Sparkles, Send } from 'lucide-react';

export const BookingModal = ({ pkg, onClose, onBookingSuccess }) => {
  if (!pkg) return null;

  const [travelersCount, setTravelersCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState('2026-05-15');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const basePrice = pkg.price;
  const subtotal = basePrice * travelersCount;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const taxesAndFees = Math.round(subtotal * 0.08); // 8% taxes & permits
  const total = subtotal - discountAmount + taxesAndFees;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'WANDER20') {
      setDiscountPercent(20);
      setPromoMessage('20% WANDER20 discount applied successfully!');
    } else {
      setDiscountPercent(0);
      setPromoMessage('Invalid promo code. Try "WANDER20" for 20% off.');
    }
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Please fill in your name and email address.');
      return;
    }
    const ref = 'WND-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
    if (onBookingSuccess) {
      onBookingSuccess(`Booking request for ${pkg.title} submitted successfully! Reference: ${ref}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center my-auto">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-md animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
              Booking Inquiry Confirmed
            </span>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              You're Going to {pkg.destination}!
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Your custom travel concierge has received your booking inquiry for <strong className="text-slate-900">{pkg.title}</strong>.
            </p>

            <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md w-full text-left space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-ocean-600">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Travel Date:</span>
                <span className="font-semibold text-slate-900">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Travelers:</span>
                <span className="font-semibold text-slate-900">{travelersCount} Guests</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-base">
                <span className="text-slate-900">Estimated Total:</span>
                <span className="text-emerald-600">${total.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              A comprehensive itinerary breakdown has been emailed to <strong>{email}</strong>. Our concierge will contact you within 2 hours to finalize details.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-sm transition-all shadow-md"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Booking / Itinerary Form */
          <div className="overflow-y-auto flex-1 p-6 sm:p-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ocean-600">
                  {pkg.destination}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {pkg.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-ocean-500" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {pkg.rating} ({pkg.reviewCount} reviews)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    Free Cancellation
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* Left Column: Itinerary breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-ocean-600" />
                    <span>Included Package Itinerary</span>
                  </h3>
                  <div className="space-y-3">
                    {pkg.itinerary && pkg.itinerary.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded-md bg-ocean-100 text-ocean-800 font-bold text-xs shrink-0 mt-0.5">
                          {item.day}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-emerald-900 text-xs flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">100% Guaranteed Trip Flexibility</span>
                    <span>No cancellation penalty up to 48 hours before departure date. Full refund or zero-fee date transfers.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Booking Form */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Configure & Book
                </h3>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  {/* Date Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      required
                    />
                  </div>

                  {/* Travelers Stepper */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Travelers
                    </label>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="text-sm font-semibold text-slate-800 pl-2">
                        {travelersCount} {travelersCount === 1 ? 'Guest' : 'Guests'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setTravelersCount(travelersCount + 1)}
                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Lead Traveler Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                    />
                  </div>

                  {/* Promo Code Box */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Try WANDER20"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm uppercase text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p className={`text-[11px] mt-1 font-medium ${discountPercent > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {promoMessage}
                      </p>
                    )}
                  </div>

                  {/* Price Calculation Summary */}
                  <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>${basePrice} &times; {travelersCount} Guests</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Discount (20% WANDER20)</span>
                        <span>-${discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Permits, Taxes & Service</span>
                      <span>${taxesAndFees.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                      <span>Total Price</span>
                      <span className="text-ocean-600">${total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-ocean-600 to-emerald-600 hover:from-ocean-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-ocean-600/25 flex items-center justify-center gap-2 transition-all hover:shadow-lg mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Inquiry</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
