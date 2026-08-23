import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clean existing data
  await prisma.review.deleteMany();
  await prisma.amenity.deleteMany();
  await prisma.photo.deleteMany();
  await prisma.listing.deleteMany();

  const listing = await prisma.listing.create({
    data: {
      id: 'listing-1',
      title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
      description:
        'Experience pure luxury in Candolim, Goa! This stunning 1BHK apartment features a private outdoor Jacuzzi on the balcony, warm ambient lighting, elegant living spaces, and top-tier amenities. Located just minutes away from Candolim beach, vibrant cafes, and nightlife, Mirashya UG10 offers an unmatched romantic getaway for couples or small families.',
      propertyType: 'Entire serviced apartment in Candolim, India',
      location: 'Candolim, Goa, India',
      rating: 4.92,
      reviewCount: 24,
      pricePerNight: 4500,
      cleaningFee: 800,
      serviceFee: 600,
      maxGuests: 3,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1.0,
      isSuperhost: true,
      hostName: 'Mirashya',
      hostAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      hostBio: 'Superhost · Hosted by Mirashya · 3 years hosting on Airbnb. We strive to provide unforgettable, luxury stays in prime Goa locations.',
      hostJoined: 'March 2021',
      hostResponseRate: '100%',
      hostResponseTime: 'within an hour',
      lat: 15.5177,
      lng: 73.7626,
      photos: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Warm modern living room with plush yellow seating and artwork',
            category: 'Living room 1',
            caption: 'Sofa · Air conditioning · Ceiling fan · TV',
            order: 1,
          },
          {
            url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
            alt: 'Secondary seating area with ambient lighting',
            category: 'Living room 2',
            caption: 'Cozy seating nook · Smart TV · Soft ambient lighting',
            order: 2,
          },
          {
            url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            alt: 'Private Jacuzzi tub on outdoor balcony area',
            category: 'Additional photos',
            caption: 'Private heated Jacuzzi · Balcony view',
            order: 3,
          },
          {
            url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
            alt: 'Master bedroom with king bed and air conditioning',
            category: 'Bedroom',
            caption: 'King size bed · Premium linens · Air conditioning',
            order: 4,
          },
          {
            url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            alt: 'Modern exterior of Mirashya UG10 property complex',
            category: 'Exterior',
            caption: 'Mirashya UG10 luxury apartment building',
            order: 5,
          },
          {
            url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
            alt: 'Full kitchen equipped with modern appliances',
            category: 'Full kitchen',
            caption: 'Refrigerator · Microwave · Induction cooktop · Cookware',
            order: 6,
          },
          {
            url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            alt: 'En-suite full bathroom with rain shower',
            category: 'Full bathroom',
            caption: 'Hot water shower · Premium toiletries · Towels included',
            order: 7,
          },
          {
            url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
            alt: 'Fully equipped resident fitness gym',
            category: 'Gym',
            caption: 'Treadmill · Dumbbells · Cardio equipment',
            order: 8,
          },
          {
            url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
            alt: 'Outdoor swimming pool surrounded by palm trees',
            category: 'Pool',
            caption: 'Crystal blue swimming pool · Sun loungers',
            order: 9,
          },
          {
            url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            alt: 'Balcony lounge seating overlooking greenery',
            category: 'Additional photos',
            caption: 'Private balcony garden view',
            order: 10,
          },
        ],
      },
      amenities: {
        create: [
          { name: 'Fast wifi', iconName: 'Wifi', category: 'Basics', isTop: true },
          { name: 'Dedicated workspace', iconName: 'Laptop', category: 'Basics', isTop: true },
          { name: 'Private Jacuzzi', iconName: 'Bath', category: 'Features', isTop: true },
          { name: 'Free parking on premises', iconName: 'Car', category: 'Basics', isTop: true },
          { name: 'Air conditioning', iconName: 'Wind', category: 'Basics', isTop: true },
          { name: '55" HDTV with Netflix', iconName: 'Tv', category: 'Entertainment', isTop: true },
          { name: 'Fully equipped kitchen', iconName: 'Utensils', category: 'Kitchen', isTop: true },
          { name: 'Shared outdoor pool', iconName: 'Waves', category: 'Facilities', isTop: true },
          { name: 'Washer in unit', iconName: 'Shirt', category: 'Basics', isTop: true },
          { name: 'Patio or balcony', iconName: 'Sun', category: 'Outdoor', isTop: true },
        ],
      },
      reviews: {
        create: [
          {
            authorName: 'Rohan Sharma',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
            date: 'January 2024',
            rating: 5,
            comment: 'Amazing stay! The Jacuzzi on the balcony was the highlight of our trip to Goa. Mirashya was super responsive and helpful throughout our stay.',
            cleanlinessScore: 5.0,
            accuracyScore: 5.0,
            communicationScore: 5.0,
            locationScore: 5.0,
            checkinScore: 5.0,
            valueScore: 5.0,
          },
          {
            authorName: 'Priya Mehta',
            authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            date: 'December 2023',
            rating: 5,
            comment: 'Beautiful property, exact match with the photos! Very clean, excellent wifi for work, and close to all popular spots in Candolim.',
            cleanlinessScore: 5.0,
            accuracyScore: 5.0,
            communicationScore: 5.0,
            locationScore: 4.8,
            checkinScore: 5.0,
            valueScore: 4.9,
          },
          {
            authorName: 'Alex Turner',
            authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
            date: 'November 2023',
            rating: 5,
            comment: 'One of the best Airbnb experiences in Goa. High speed internet, super cozy bed, and peaceful surroundings. Highly recommended!',
            cleanlinessScore: 5.0,
            accuracyScore: 5.0,
            communicationScore: 5.0,
            locationScore: 5.0,
            checkinScore: 5.0,
            valueScore: 5.0,
          },
        ],
      },
    },
  });

  console.log('Seed completed successfully for listing:', listing.id);
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
