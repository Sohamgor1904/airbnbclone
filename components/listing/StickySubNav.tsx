'use client';

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StickySubNavProps {
  priceText: string;
  rating: number;
  reviewCount: number;
}

export const StickySubNav: React.FC<StickySubNavProps> = ({
  priceText,
  rating,
  reviewCount,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'photos' | 'amenities' | 'reviews' | 'map'>('photos');

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero-photos');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Visible when user scrolls past bottom of hero photo grid
        setIsVisible(rect.bottom <= 0);
      } else {
        setIsVisible(window.scrollY > 550);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, tabName: 'photos' | 'amenities' | 'reviews' | 'map') => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 w-full border-b border-airbnb-border bg-white shadow-sm transition-all duration-200">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-10 py-3">
        {/* Left Tabs */}
        <nav className="flex items-center gap-8 text-sm font-semibold text-airbnb-charcoal">
          <button
            onClick={() => scrollToSection('hero-photos', 'photos')}
            className={`py-2 transition relative ${
              activeTab === 'photos' ? 'text-black' : 'text-airbnb-charcoal hover:text-black'
            }`}
          >
            Photos
            {activeTab === 'photos' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('amenities', 'amenities')}
            className={`py-2 transition relative ${
              activeTab === 'amenities' ? 'text-black' : 'text-airbnb-charcoal hover:text-black'
            }`}
          >
            Amenities
            {activeTab === 'amenities' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('reviews', 'reviews')}
            className={`py-2 transition relative ${
              activeTab === 'reviews' ? 'text-black' : 'text-airbnb-charcoal hover:text-black'
            }`}
          >
            Reviews
            {activeTab === 'reviews' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('map', 'map')}
            className={`py-2 transition relative ${
              activeTab === 'map' ? 'text-black' : 'text-airbnb-charcoal hover:text-black'
            }`}
          >
            Location
            {activeTab === 'map' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </button>
        </nav>

        {/* Right Info & CTA */}
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-sm font-bold text-airbnb-charcoal">
              {priceText}
            </div>
            <div className="flex items-center justify-end gap-1 text-xs font-medium text-airbnb-charcoal">
              <Star className="h-3 w-3 fill-current text-airbnb-charcoal" />
              <span>{rating.toFixed(2)}</span>
              <span>·</span>
              <span className="underline">{reviewCount} reviews</span>
            </div>
          </div>

          <button className="rounded-xl bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 transition">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
