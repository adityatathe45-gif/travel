import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { Packages } from './components/Packages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TravelInspiration } from './components/TravelInspiration';
import { Testimonials } from './components/Testimonials';
import { TripPlannerCTA } from './components/TripPlannerCTA';
import { Footer } from './components/Footer';

// Modals & Overlays
import { DestinationModal } from './components/DestinationModal';
import { BookingModal } from './components/BookingModal';
import { ArticleModal } from './components/ArticleModal';
import { AuthModal } from './components/AuthModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { Toast } from './components/Toast';

import { DESTINATIONS, TRAVEL_PACKAGES } from './data/travelData';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState(['bali', 'switzerland']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleSearch = ({ destination, travelDate, travelers }) => {
    setSearchQuery(destination);
    const target = document.querySelector('#destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (destination) {
      showToast(`Showing results for "${destination}" (${travelers || '2 Travelers'})`, 'info');
    } else {
      showToast(`Showing all popular global destinations`, 'info');
    }
  };

  const handleQuickSelect = (place) => {
    setSearchQuery(place);
    const target = document.querySelector('#destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Filtered destinations for "${place}"`, 'info');
  };

  const handleToggleWishlist = (destId) => {
    setWishlist((prev) => {
      const exists = prev.includes(destId);
      const dest = DESTINATIONS.find((d) => d.id === destId);
      const name = dest ? dest.name : 'Destination';

      if (exists) {
        showToast(`Removed ${name} from your saved destinations`, 'info');
        return prev.filter((id) => id !== destId);
      } else {
        showToast(`Added ${name} to your saved destinations!`, 'success');
        return [...prev, destId];
      }
    });
  };

  const handleRemoveFromWishlist = (destId) => {
    setWishlist((prev) => prev.filter((id) => id !== destId));
    showToast('Removed from saved list', 'info');
  };

  const handleBookFromDestination = (destName) => {
    // Find matching package
    const matched = TRAVEL_PACKAGES.find(
      (p) => p.destination.toLowerCase().includes(destName.toLowerCase()) ||
             p.title.toLowerCase().includes(destName.toLowerCase())
    );
    if (matched) {
      setSelectedPackage(matched);
    } else {
      setSelectedPackage(TRAVEL_PACKAGES[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-ocean-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSearch={handleSearch}
          popularDestinations={DESTINATIONS}
          onQuickSelect={handleQuickSelect}
        />

        {/* Popular Destinations */}
        <Destinations
          onSelectDestination={(dest) => {
            if (!dest) {
              setSearchQuery('');
            } else {
              setSelectedDestination(dest);
            }
          }}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          searchQuery={searchQuery}
        />

        {/* Travel Packages */}
        <Packages
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Travel Inspiration */}
        <TravelInspiration
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Interactive Trip Planner CTA & Promo code voucher */}
        <TripPlannerCTA
          onNotify={showToast}
          onSelectCategory={(cat) => {
            const target = document.querySelector('#destinations');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onBookPackage={handleBookFromDestination}
          isWishlisted={wishlist.includes(selectedDestination.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {selectedPackage && (
        <BookingModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onBookingSuccess={(msg) => {
            showToast(msg, 'success');
          }}
        />
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onNotify={showToast}
        />
      )}

      {isAuthOpen && (
        <AuthModal
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={(msg) => showToast(msg, 'success')}
        />
      )}

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onSelectDestination={(dest) => {
          setSelectedDestination(dest);
        }}
      />

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

export default App;
