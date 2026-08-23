'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/listing/Header';
import { TitleSection } from '@/components/listing/TitleSection';
import { HeroPhotoGrid } from '@/components/listing/HeroPhotoGrid';
import { HostSection } from '@/components/listing/HostSection';
import { Highlights } from '@/components/listing/Highlights';
import { DescriptionSection } from '@/components/listing/DescriptionSection';
import { AmenitiesSection } from '@/components/listing/AmenitiesSection';
import { BookingWidget } from '@/components/listing/BookingWidget';
import { ReviewsSection } from '@/components/listing/ReviewsSection';
import { MapSection } from '@/components/listing/MapSection';
import { Footer } from '@/components/listing/Footer';
import { PhotoTour } from '@/components/overlays/PhotoTour';
import { Lightbox } from '@/components/overlays/Lightbox';

interface ListingData {
  id: string;
  title: string;
  description: string;
  propertyType: string;
  location: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  isSuperhost: boolean;
  hostName: string;
  hostAvatar: string;
  lat: number;
  lng: number;
  photos: Array<{
    id: string;
    url: string;
    alt: string;
    category: string;
    caption?: string | null;
  }>;
  amenities: Array<{
    id: string;
    name: string;
    iconName: string;
    category?: string;
  }>;
  reviews: Array<{
    id: string;
    authorName: string;
    authorAvatar: string;
    date: string;
    rating: number;
    comment: string;
  }>;
}

export default function ListingPage({ params }: { params: { id: string } }) {
  const [listing, setListing] = useState<ListingData | null>(null);
  const [loading, setLoading] = useState(true);

  // Overlay States
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function fetchListing() {
      try {
        const id = params?.id || 'listing-1';
        const res = await fetch(`/api/listing/${id}`);
        if (res.ok) {
          const data = await res.json();
          setListing(data);
        }
      } catch (err) {
        console.error('Error fetching listing:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchListing();
  }, [params]);

  if (loading || !listing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-airbnb-charcoal font-medium">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-airbnb-rausch border-t-transparent" />
          <p className="text-sm">Loading listing...</p>
        </div>
      </div>
    );
  }

  const handleOpenPhotoTour = (startIndex: number = 0) => {
    setIsPhotoTourOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <Header />

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1280px] px-10 py-6 flex-1 space-y-6">
        {/* Title Section */}
        <TitleSection
          title={listing.title}
          rating={listing.rating}
          reviewCount={listing.reviewCount}
          location={listing.location}
          isSuperhost={listing.isSuperhost}
        />

        {/* Hero 5-Photo Grid */}
        <HeroPhotoGrid
          photos={listing.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
        />

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-12 gap-16 pt-4">
          {/* Left Column (Main Property Info) */}
          <div className="col-span-7 space-y-6">
            <HostSection
              propertyType={listing.propertyType}
              maxGuests={listing.maxGuests}
              bedrooms={listing.bedrooms}
              beds={listing.beds}
              bathrooms={listing.bathrooms}
              hostName={listing.hostName}
              hostAvatar={listing.hostAvatar}
              isSuperhost={listing.isSuperhost}
            />

            <Highlights />

            <DescriptionSection description={listing.description} />

            <AmenitiesSection amenities={listing.amenities} />
          </div>

          {/* Right Column (Sticky Booking Widget) */}
          <div className="col-span-5 relative">
            <BookingWidget
              pricePerNight={listing.pricePerNight}
              cleaningFee={listing.cleaningFee}
              serviceFee={listing.serviceFee}
              rating={listing.rating}
              reviewCount={listing.reviewCount}
              maxGuests={listing.maxGuests}
            />
          </div>
        </div>

        {/* Full-width Sections */}
        <ReviewsSection
          rating={listing.rating}
          reviewCount={listing.reviewCount}
          reviews={listing.reviews}
        />

        <MapSection
          location={listing.location}
          lat={listing.lat}
          lng={listing.lng}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlays */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        photos={listing.photos}
        onSelectPhoto={handleOpenLightbox}
      />

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        photos={listing.photos}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}
