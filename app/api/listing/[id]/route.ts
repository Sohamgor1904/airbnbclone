import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const listingId = params?.id || 'listing-1';
    
    // Attempt database query
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: {
        photos: {
          orderBy: { order: 'asc' },
        },
        rooms: true,
        amenities: true,
        reviews: true,
        coHosts: true,
        nearbyListings: true,
      },
    });

    if (listing) {
      return NextResponse.json(listing);
    }
  } catch (error) {
    console.warn('Database query failed or DATABASE_URL not set, returning static payload:', error);
  }

  // Fallback payload matching database seed
  return NextResponse.json({
    id: 'listing-1',
    title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
    description:
      '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples, small families, or friends.',
    propertyType: 'Entire serviced apartment in Candolim, India',
    location: 'Candolim, Goa, India',
    rating: 4.95,
    reviewCount: 19,
    pricePerNight: 5699,
    totalStayPrice: 28499,
    stayNights: 5,
    cleaningFee: 800,
    serviceFee: 600,
    maxGuests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1.0,
    isSuperhost: true,
    isGuestFavourite: true,
    hostName: 'Mirashya Homes',
    hostAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    hostBio: 'Superhost · Hosted by Mirashya Homes · 2 years hosting on Airbnb.',
    hostJoined: '2 years hosting',
    hostReviewsCount: 1463,
    hostRating: 4.68,
    hostYears: 2,
    hostBorn: 'Born in the 80s',
    hostSchool: 'NICMAR GOA',
    hostResponseRate: '100%',
    hostResponseTime: 'within an hour',
    lat: 15.5177,
    lng: 73.7626,
    photos: [
      {
        id: 'p1',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Warm modern living room with plush yellow seating and artwork',
        category: 'Living room 1',
        caption: 'Sofa · Air conditioning · Ceiling fan · TV',
        order: 1,
      },
      {
        id: 'p2',
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
        alt: 'Secondary seating area with ambient lighting',
        category: 'Living room 2',
        caption: 'Cozy seating nook · Smart TV · Soft ambient lighting',
        order: 2,
      },
      {
        id: 'p3',
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        alt: 'Private Jacuzzi tub on outdoor balcony area',
        category: 'Additional photos',
        caption: 'Private heated Jacuzzi · Balcony view',
        order: 3,
      },
      {
        id: 'p4',
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
        alt: 'Master bedroom with king bed and air conditioning',
        category: 'Bedroom',
        caption: 'King size bed · Premium linens · Air conditioning',
        order: 4,
      },
      {
        id: 'p5',
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        alt: 'Modern exterior of Mirashya UG10 property complex',
        category: 'Exterior',
        caption: 'Mirashya UG10 luxury apartment building',
        order: 5,
      },
      {
        id: 'p6',
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
        alt: 'Full kitchen equipped with modern appliances',
        category: 'Full kitchen',
        caption: 'Refrigerator · Microwave · Induction cooktop · Cookware',
        order: 6,
      },
      {
        id: 'p7',
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        alt: 'En-suite full bathroom with rain shower',
        category: 'Full bathroom',
        caption: 'Hot water shower · Premium toiletries · Towels included',
        order: 7,
      },
      {
        id: 'p8',
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
        alt: 'Fully equipped resident fitness gym',
        category: 'Gym',
        caption: 'Treadmill · Dumbbells · Cardio equipment',
        order: 8,
      },
      {
        id: 'p9',
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
        alt: 'Outdoor swimming pool surrounded by palm trees',
        category: 'Pool',
        caption: 'Crystal blue swimming pool · Sun loungers',
        order: 9,
      },
      {
        id: 'p10',
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        alt: 'Balcony lounge seating overlooking greenery',
        category: 'Additional photos',
        caption: 'Private balcony garden view',
        order: 10,
      },
    ],
    rooms: [
      {
        id: 'rm1',
        name: 'Bedroom',
        detail: '1 double bed',
        photoUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'rm2',
        name: 'Living room',
        detail: '1 sofa',
        photoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
    ],
    amenities: [
      { id: 'a1', name: 'Fast wifi', iconName: 'Wifi', category: 'Basics', isTop: true },
      { id: 'a2', name: 'Dedicated workspace', iconName: 'Laptop', category: 'Basics', isTop: true },
      { id: 'a3', name: 'Private Jacuzzi', iconName: 'Bath', category: 'Features', isTop: true },
      { id: 'a4', name: 'Free parking on premises', iconName: 'Car', category: 'Basics', isTop: true },
      { id: 'a5', name: 'Air conditioning', iconName: 'Wind', category: 'Basics', isTop: true },
      { id: 'a6', name: '55" HDTV with Netflix', iconName: 'Tv', category: 'Entertainment', isTop: true },
      { id: 'a7', name: 'Fully equipped kitchen', iconName: 'Utensils', category: 'Kitchen', isTop: true },
      { id: 'a8', name: 'Shared outdoor pool', iconName: 'Waves', category: 'Facilities', isTop: true },
      { id: 'a9', name: 'Washer in unit', iconName: 'Shirt', category: 'Basics', isTop: true },
      { id: 'a10', name: 'Patio or balcony', iconName: 'Sun', category: 'Outdoor', isTop: true },
    ],
    reviews: [
      {
        id: 'r1',
        authorName: 'Amit',
        authorInitial: 'A',
        authorTenure: '2 months on Airbnb',
        date: '1 week ago',
        rating: 5,
        comment: 'Very helpful and responsive team. Safe and peaceful stay. Loved everything about the property.',
      },
      {
        id: 'r2',
        authorName: 'Aheesh',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        authorTenure: '3 years on Airbnb',
        date: '2 weeks ago',
        rating: 5,
        comment: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
      },
      {
        id: 'r3',
        authorName: 'Samiksha',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        authorTenure: '8 months on Airbnb',
        date: 'May 2026',
        rating: 5,
        comment: 'the host nitish was really great help',
      },
      {
        id: 'r4',
        authorName: 'Vedant',
        authorInitial: 'V',
        authorTenure: '4 years on Airbnb',
        date: 'May 2026',
        rating: 5,
        comment: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
      },
      {
        id: 'r5',
        authorName: 'Vaibhav S',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        authorTenure: '3 years on Airbnb',
        date: 'May 2026',
        rating: 5,
        comment: 'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.',
      },
      {
        id: 'r6',
        authorName: 'Mohd',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        authorTenure: '5 years on Airbnb',
        date: 'May 2026',
        rating: 5,
        comment: 'Great place. Exactly as described in the listing.',
      },
    ],
    coHosts: [
      { id: 'ch1', name: 'Sharath', avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80' },
      { id: 'ch2', name: 'Aman Dev Pahwa', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
      { id: 'ch3', name: 'Maria Karen Priyanka', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
      { id: 'ch4', name: 'Simran', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
      { id: 'ch5', name: 'Pallavi', avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80' },
      { id: 'ch6', name: 'Sanyukta', avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80' },
      { id: 'ch7', name: 'Shruti', initial: 'S' },
      { id: 'ch8', name: 'Amisha', initial: 'A' },
    ],
    nearbyListings: [
      {
        id: 'nb1',
        title: 'The Tropical Studio | 5 mins to Beach',
        photoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 22824,
        rating: 4.96,
      },
      {
        id: 'nb2',
        title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
        photoUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 39942,
        rating: 4.95,
      },
      {
        id: 'nb3',
        title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
        photoUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 45648,
        rating: 5.0,
      },
      {
        id: 'nb4',
        title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
        photoUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 48786,
        rating: 4.93,
      },
      {
        id: 'nb5',
        title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
        photoUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
        pricePerNight: 22824,
        rating: 4.92,
      },
    ],
  });
}
