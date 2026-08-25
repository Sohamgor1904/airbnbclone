# 🏡 Airbnb Listing Clone — Full-Stack Web Application

A pixel-perfect, behavior-perfect full-stack clone of a single Airbnb listing page and its interactive overlays, built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Prisma ORM**, and a serverless **Neon PostgreSQL** database.

---

## 🌐 Live Production & Repository Links

- **Live Production URL**: [https://airbnbclone-lime.vercel.app](https://airbnbclone-lime.vercel.app)
- **GitHub Repository**: [https://github.com/Sohamgor1904/airbnbclone](https://github.com/Sohamgor1904/airbnbclone)
- **System Architecture Diagram**: [`docs/architecture_diagram.png`](docs/architecture_diagram.png)

---

## 🎯 Overview & Key Objectives

The goal of this project was to construct an exact, production-grade clone of an Airbnb property listing page for desktop viewports (`≥1280px`). Visual fidelity, micro-interactions, layout precision, color tokens (`#FF385C`, `#222222`, `#717171`), typography, accessibility, and backend database connectivity were prioritized to match real-world production standards.

### Core Features & Views Built
1. **Listing Page**: Comprehensive property page with full section layout (Header, Hero Grid, Sticky Sub-Nav, Host Card, Highlights, Description, Where You'll Sleep, Amenities, Availability Calendar, Booking Widget, Reviews, Map, Meet Your Host, Things to Know, More Stays Nearby, and Footer).
2. **Photo Tour Overlay**: Full-screen modal gallery organizing property photos into category groups (e.g., Living room, Bedroom, Bathroom, Outdoor) with sticky tab navigation.
3. **Lightbox Overlay**: Single-photo viewer overlay with smooth transitions, image index counters, prev/next navigation controls, keyboard arrow key navigation (`←` / `→`), `Esc` key close handling, and focus trapping.

---

## 🛠️ Tech Stack & Technical Rationale

| Layer | Technology | Rationale & Usage |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Provides React 18 server components, client components, and serverless API route handlers in a unified deployment. |
| **Language** | **TypeScript** | Enforces strict static type safety across database models, API responses, and UI props. |
| **Styling** | **Tailwind CSS** | Used for utility-first styling matching Airbnb's exact typography, spacing scale, colors, and borders. |
| **Animations** | **Framer Motion** | Powers smooth modal overlay enter/exit transitions, image carousel navigation, and tab underlines. |
| **Icons** | **Lucide React** | Provides crisp, accessible vector icons matching Airbnb's design system. |
| **Maps** | **React Leaflet + OpenStreetMap** | Open-source, free interactive tile map rendering without external paid Google Maps API keys. |
| **ORM** | **Prisma ORM (v5)** | Strongly typed database client managing relational models, eager loading, and seed scripts. |
| **Database** | **Neon PostgreSQL** | Serverless cloud PostgreSQL database hosting real listing data with connection pooling and SSL encryption. |
| **Deployment** | **Vercel Production (Hobby Tier)** | Continuous deployment target auto-building Prisma client binaries during `postinstall`. |

---

## 🏗️ Detailed Breakdown: What We Built & Why

### 1. Header & Search Pill (`Header.tsx`)
- **Implementation**: Features the official Airbnb logo asset (`/public/logo.png`), search pill bar (`Anywhere | Any week | Add guests` with pink magnifier icon), and right user menu buttons (`Airbnb your home`, globe icon, and avatar user pill).
- **Design Decision**: Positioned with normal document flow so it scrolls away naturally as the user moves down the page, avoiding awkward header overlaps.

### 2. Sticky Sub-Navigation Bar (`StickySubNav.tsx`)
- **Implementation**: Positioned `sticky top-0 z-50`. Uses a passive scroll observer checking the bounding rectangle of the hero photo grid (`#hero-photos`).
- **Behavior**: Activates automatically as soon as the user scrolls past the main 5-photo grid. Displays smooth-scroll tab links (`Photos`, `Amenities`, `Reviews`, `Location`) with active tab underline indicators on the left, and pricing summary (`₹28,499 for 5 nights`, `★ 4.95 · 19 reviews`) with a pink `Reserve` CTA button on the right.

### 3. Hero 5-Photo Grid (`HeroPhotoGrid.tsx`)
- **Implementation**: Desktop 5-photo asymmetric mosaic grid featuring a large lead photo on the left and a 2x2 grid on the right.
- **Interactivity**: Includes a bottom-right "Show all photos" button with grid icon that triggers the `PhotoTour` modal overlay. Clicking any photo directly opens the `PhotoTour`.

### 4. Property Specifications & Host Card (`HostSection.tsx` & `TitleSection.tsx`)
- **Implementation**: Title block displaying property title (`Candolim Villa`), star rating (`4.95`), review count (`19 reviews`), Superhost status, and location (`Candolim, Goa, India`).
- **Specs**: Host avatar, host name (`Hosted by Mirashya Homes`), Superhost badge, and guest capacity line (`8 guests · 3 bedrooms · 4 beds · 3 baths`).

### 5. "Where You'll Sleep" Room Cards (`WhereYouSleep.tsx`)
- **Implementation**: 2-column card layout displaying room photos, room names (`Bedroom`, `Living room`), and bed arrangements (`1 double bed`, `1 sofa`).

### 6. Amenities Section & Modal (`AmenitiesSection.tsx`)
- **Implementation**: Displays the top-10 default amenities in a 2-column icon grid (Wi-Fi, Free parking, Private pool, Air conditioning, Kitchen, etc.). Includes an outlined "Show all 32 amenities" button launching a full-category amenities modal.

### 7. Availability Calendar (`AvailabilityCalendar.tsx`)
- **Implementation**: Renders a dedicated availability calendar section displaying the 2-month check-in and checkout date range (`18 Oct 2026 - 23 Oct 2026` in `Candolim`), matching the reference visual asset layout.

### 8. Sticky Booking Widget (`BookingWidget.tsx`)
- **Implementation**: Positioned `sticky top-28` in the right column. Includes price per night (`₹5,699 / night`), star rating header, date range input box, guest selector dropdown, pink `Reserve` button, and explicit cost breakdown calculation:
  - Base price: `₹5,699 × 5 nights = ₹28,495`
  - Cleaning fee: `₹1,200`
  - Airbnb service fee: `₹2,450`
  - **Total before taxes**: `₹32,145`

### 9. Reviews Section Overhaul (`ReviewsSection.tsx`)
- **Implementation**: Rebuilt to match reference specifications:
  - **Top Block**: Large `4.95` numeral flanked by leaf wreath icons, "Guest favourite" badge, and "How reviews work" modal trigger.
  - **6-Metric Breakdown Grid**: Bar charts and scores for Overall rating (5.0), Cleanliness (5.0), Accuracy (5.0), Check-in (5.0), Communication (5.0), Location (4.8), and Value (4.8).
  - **Category Pills**: Horizontally scrollable tag pills (`🛋️ Comfort 6`, `✅ Accuracy 5`, `♨️ Hot tub 5`, `🍰 Condition 4`, `🎁 Hospitality 8`, `🛍️ Cleanliness 4`, `🎂 Amenities 2`).
  - **Review Cards**: 2-column grid of reviewer cards with photo/initial avatars, tenure, review dates, and truncated text with "Show more".

### 10. Map Section & Neighbourhood Highlights (`MapSection.tsx`)
- **Implementation**: Interactive OpenStreetMap map centered on Candolim, Goa (`lat: 15.5177, lng: 73.7626`).
- **Features**: Top-left search magnifier button, top-right zoom `+`/`-` controls, central black circular pin with house icon, caption line (`Exact location will be provided after booking`), and a separate "Neighbourhood highlights" block below the map.

### 11. Meet Your Host (`MeetYourHost.tsx`)
- **Implementation**: Host profile box with verified check badge, stats (1,463 Reviews, 4.68★ Rating, 2 Years hosting), "Born in the 80s", and "Where I went to school: NICMAR GOA".
- **Co-Hosts Grid**: 8 co-hosts with photo avatars or initial circles (`S`, `A`), host details (100% response rate, responds within an hour), "Message host" button, and payment safety note.

### 12. Things to Know (`ThingsToKnow.tsx`)
- **Implementation**: 3-column policy section covering Cancellation policy (calendar-x icon), House rules (key icon), and Safety & property disclosures (shield icon) with interactive "Learn more" modals.

### 13. More Stays Nearby (`MoreStaysNearby.tsx`)
- **Implementation**: 5-card horizontal carousel row displaying nearby property photos, titles, prices, and star ratings with page counter (`2 / 2`) and navigation chevron buttons.

### 14. Full-Screen Overlays (`PhotoTour.tsx` & `Lightbox.tsx`)
- **Photo Tour**: Portal modal covering 100% of the viewport. Features sticky tab category pills (`All photos`, `Living room`, `Bedroom`, `Bathroom`, `Exterior`) and 2-column photo layout.
- **Lightbox**: Single-photo viewer modal triggered by clicking any photo in the Photo Tour. Includes photo index counter (`X of Y`), image caption, left/right chevron buttons, keyboard arrow navigation (`←`/`→`), `Esc` key exit, and focus trapping.

---

## 🗄️ Database Schema & Prisma Architecture

The application connects to a hosted **Neon PostgreSQL** serverless instance. Relational schemas are defined in [`prisma/schema.prisma`](prisma/schema.prisma):

```prisma
model Listing {
  id               String   @id @default(cuid())
  title            String
  description      String
  propertyType     String
  location         String
  rating           Float
  reviewCount      Int
  pricePerNight    Float
  totalStayPrice   Float
  stayNights       Int
  cleaningFee      Float
  serviceFee       Float
  maxGuests        Int
  bedrooms         Int
  beds             Int
  bathrooms        Int
  isSuperhost      Boolean
  isGuestFavourite Boolean

  // Host Details
  hostName         String
  hostAvatar       String
  hostJoined       String
  hostReviewsCount Int
  hostRating       Float
  hostYears        Int
  hostBorn         String
  hostSchool       String
  hostResponseRate String
  hostResponseTime String

  // Coordinates
  lat Float
  lng Float

  // Relations
  photos         Photo[]
  rooms          Room[]
  amenities      Amenity[]
  reviews        Review[]
  coHosts        CoHost[]
  nearbyListings NearbyListing[]
}
```

### Serverless Build Optimization
To ensure deployment on Vercel runs without database connection lockup during static compilation:
1. `package.json` includes `"postinstall": "prisma generate"` and `"build": "prisma generate && next build"`.
2. `app/api/listing/[id]/route.ts` exports `export const dynamic = 'force-dynamic'` and implements try-catch fallback data so builds compile smoothly while production endpoints serve live data from Neon PostgreSQL.

---

## 📁 Repository Folder Structure

```
airbnbclone/
├── app/
│   ├── api/listing/[id]/route.ts    # REST endpoint serving listing data from Neon DB
│   ├── listing/[id]/page.tsx        # Main Airbnb listing page orchestrating components
│   ├── layout.tsx                   # Global layout & metadata
│   ├── page.tsx                     # Root redirect to /listing/listing-1
│   └── globals.css                  # Global Tailwind CSS imports & custom styles
├── components/
│   ├── listing/                     # Section components
│   │   ├── Header.tsx               # Top logo header with search pill
│   │   ├── StickySubNav.tsx         # Sticky navigation bar (Photos, Amenities, Reviews, Location)
│   │   ├── TitleSection.tsx         # Property title, rating, specs
│   │   ├── HeroPhotoGrid.tsx        # 5-photo grid layout
│   │   ├── HostSection.tsx          # Host avatar & property specifications
│   │   ├── Highlights.tsx           # Special property highlights
│   │   ├── DescriptionSection.tsx   # Truncated description with modal
│   │   ├── WhereYouSleep.tsx        # Room & bed cards
│   │   ├── AmenitiesSection.tsx     # Top-10 grid & full amenities modal
│   │   ├── AvailabilityCalendar.tsx # 2-month availability calendar image section
│   │   ├── BookingWidget.tsx        # Sticky price & reservation card
│   │   ├── ReviewsSection.tsx       # 6-metric rating breakdown & review cards
│   │   ├── MapSection.tsx           # Leaflet OpenStreetMap view & neighbourhood highlights
│   │   ├── MeetYourHost.tsx         # Host card, co-hosts grid & response details
│   │   ├── ThingsToKnow.tsx         # 3-column policy section with modals
│   │   ├── MoreStaysNearby.tsx      # Nearby listings carousel
│   │   └── Footer.tsx               # Footer link groups & copyright
│   └── overlays/
│       ├── PhotoTour.tsx            # Full-screen photo gallery portal modal
│       └── Lightbox.tsx             # Single-photo viewer with keyboard arrow navigation
├── docs/
│   ├── architecture_diagram.png     # System architecture diagram (draw.io format)
│   └── TECH_STACK.md                # Technical stack summary
├── lib/
│   └── prisma.ts                    # Singleton Prisma client instance
├── prisma/
│   ├── schema.prisma                # Relational PostgreSQL models
│   └── seed.ts                      # Seed script for Neon DB
├── public/                          # Image assets (logo.png, calendar_section.png, photos)
├── .env.example                     # Environment variable template
├── .gitignore                       # Git ignore file
├── PROMPT_LOG.md                    # Detailed log of prompt interactions
└── README.md                        # Master project documentation
```

---

## ⚡ How to Run Locally

### 1. Prerequisites
- Node.js `≥18.17.0`
- npm `≥9.0.0`

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/Sohamgor1904/airbnbclone.git
cd airbnbclone
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://neondb_owner:npg_sample123@ep-sample-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

### 4. Database Setup & Seeding
Generate Prisma Client binaries and seed mock data into PostgreSQL:
```bash
npx prisma generate
npx prisma db seed
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ✅ Quality & Verification Summary

- **Automated Validation**: Passed `npm run lint` (0 errors, 0 warnings) and `npm run build` (clean TypeScript compilation).
- **Visual & Interaction Parity**: Checked side-by-side against reference screenshots across desktop viewports (`≥1280px`).
- **Production Deployment**: Live and operational on Vercel at [https://airbnbclone-lime.vercel.app](https://airbnbclone-lime.vercel.app).
