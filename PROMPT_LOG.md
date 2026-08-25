# Prompt Log

## Prompt 1
ROLE
You are an expert full-stack engineer building a pixel-perfect, behavior-
perfect clone of a single Airbnb listing page and its two overlay views.
Visual and interaction fidelity is the top priority — this will be graded
against the live reference by side-by-side comparison.

REFERENCE
https://airbnb-clone-umber-two.vercel.app
Treat this URL as the single source of truth for layout, spacing, typography,
colors, icons, assets, hover/scroll animations, and transitions.
Do NOT scrape or copy the reference's source code/bundles directly — rebuild
it from visual and behavioral observation only (screenshots, DevTools
inspection of computed styles/spacing, manual interaction testing).

SCOPE — desktop only (≥1280px viewport), no mobile/responsive work needed
Build exactly three views:
1. Listing Page — the full property page (hero image grid, title, host info,
   amenities, description, calendar/booking widget, reviews, map, etc. —
   whatever the reference actually shows).
2. Photo Tour — full-screen photo gallery overlay, opened via "Show all
   photos" or by clicking any hero image.
3. Lightbox — single-photo viewer overlay opened by clicking a photo inside
   the Photo Tour, with prev/next arrow buttons AND keyboard ←/→ navigation,
   plus Esc to close and focus trapping while open.

TECH STACK (all free-tier, no paid services)
- Next.js 14+ (App Router) with TypeScript
- Tailwind CSS for styling
- Framer Motion for transitions/animations (page transitions, overlay
  open/close, gallery scroll effects, hover states)
- lucide-react or @heroicons/react for icons
- No paid APIs. If a map is shown on the reference, use a static map image
  or an open-source library (e.g., Leaflet + free OpenStreetMap tiles)
  instead of a paid Maps API key.
- Deployment target: Vercel (free Hobby tier)

BACKEND
- Framework: Next.js API routes / Route Handlers (app/api/...) — keeps
  frontend and backend in one deployable Next.js app on Vercel free tier.
- Database: a free-tier hosted Postgres (e.g., Neon or Supabase free tier)
  via Prisma ORM — no paid plan required.
- Purpose: serve the listing data (title, photos, price, host, amenities,
  reviews, availability) from the database instead of a static local file,
  through a simple REST endpoint like GET /api/listing/[id].
- No auth/booking/payment logic needed — this is read-only data serving to
  support the listing page and overlays, matching the reference's scope.
- Store the DB connection string in a Vercel environment variable
  (DATABASE_URL) via the Vercel dashboard free tier — never commit it.
- Seed the database with mock listing data via a Prisma seed script.
- Keep this layer thin: the goal is still pixel/behavior fidelity on the
  frontend — don't let backend work eat into that time budget.

PROCESS — work in this order
1. Inspect the reference page carefully: capture full-page and per-section
   screenshots at 1280px+ width, and record exact colors, font stacks, font
   sizes/weights, spacing (margins/paddings in px or rem), border-radius,
   shadows, and breakpoints using browser DevTools computed styles.
2. Interact with every element and document: hover states, click states,
   transition durations/easing, scroll-triggered animations, the Photo Tour
   open animation, and the Lightbox open/close/prev/next animation and
   keyboard behavior.
3. Set up the Next.js + TypeScript + Tailwind project skeleton. Run
   `npx prisma init`, define the schema for the listing data, and write a
   seed script to populate the free-tier Postgres DB.
4. Build the component tree bottom-up: design tokens (colors, spacing, type
   scale) in tailwind.config first, then atomic components (Button, Badge,
   Avatar, Rating, IconButton), then section components (Header, PhotoGrid,
   Title block, Host card, Amenities list, Description with "show more",
   Calendar/Booking widget, Reviews, Map, Footer), then the two overlays
   (PhotoTour, Lightbox) as portals/modals. Wire the listing page to fetch
   data from GET /api/listing/[id] instead of hardcoded values.
5. Wire up Framer Motion for every animation/transition you documented in
   step 2 — match easing curves and durations as closely as possible.
6. Accessibility pass: keyboard navigation through all interactive elements,
   visible focus states, ARIA roles/labels on the overlays (role="dialog",
   aria-modal, labelled close buttons), focus trap + focus return when
   overlays close, ←/→ arrow key nav in the Lightbox, Esc to close.
7. Do a side-by-side visual diff pass against the reference (compare
   screenshots section by section) and fix spacing/color/typography
   discrepancies.
8. Write a short README documenting: tech stack, folder structure, how to
   run locally (including DB setup/seed command), and any deliberate
   deviations from the reference (if any) and why.

FOLDER STRUCTURE (suggested)
/app
  /listing/[id]/page.tsx        -- main listing page
  /api/listing/[id]/route.ts    -- GET handler, reads from DB via Prisma
/components
  /ui/                          -- atomic components
  /listing/                     -- section components
  /overlays/PhotoTour.tsx
  /overlays/Lightbox.tsx
/prisma/schema.prisma
/prisma/seed.ts
/lib/db.ts                      -- Prisma client singleton
/public/images                  -- listing photos/assets

DELIVERABLES TO KEEP TRACK OF (for my submission, not part of the app code)
- Log every prompt you and I exchange during this build — I need the full
  prompt sequence for submission.
- If you use any sub-agent or custom skill configs while building this,
  save those config files in the repo (e.g., /.claude/ or /agents/) so I
  can include them in my submission.

DEPLOYMENT (Vercel free tier)
1. Initialize git, commit the project.
2. Push to a PRIVATE GitHub repo (the assignment explicitly says do not
   push to a public repo).
3. Set DATABASE_URL as an environment variable in the Vercel dashboard
   (free tier) pointing to the Neon/Supabase free-tier database.
4. Run `npx vercel` (or connect the repo in the Vercel dashboard) and deploy
   using the Hobby (free) plan.
5. Confirm the production URL loads correctly, data is served from the DB,
   and the page matches the reference.

QUALITY BAR
Prioritize a clean, complete implementation of these three views over adding
extra unrequested features. Do not build booking flows, search, or other
pages beyond the listing page and its two overlays unless the reference
page itself links to something in-scope.
for reference all the instruction are mentioned in a document in the folder named "Playpower Labs Assignment_ Airbnb-Clone App"

---

## Prompt 2
A few things worth fixing before you run with it:

1. Architecture diagram format — fix this one
The assignment explicitly asks for an image/pdf file for the architecture diagram. The plan currently outputs architecture_diagram.md (with .png only mentioned once, inconsistently). A markdown write-up of the architecture isn't what's being asked for — make sure the agent actually produces an exported .png or .pdf (e.g., build it in Excalidraw/draw.io and export), not just a text description.

2. Pick and name the DB provider explicitly
The plan says "PostgreSQL" but doesn't commit to Neon vs Supabase. Tell the agent which one to use so it sets up the account/connection string correctly, and make sure .env/DATABASE_URL is gitignored, not committed.

3. Sanity-check "unrequested feature creep"
A few components (BookingWidget's date-range picker + cost breakdown table, the Highlights offer banner, Leaflet map) are quite elaborate. That's fine only if the actual reference page has them — since you're being graded on matching the reference exactly, not on building extra polish. Worth a quick manual check against the live site before implementation starts, so the agent isn't inventing UI the reference doesn't have.

4. Minor gaps, not blockers

No mention of enforcing the 1280px+ desktop-only constraint anywhere (e.g., not building responsive breakpoints) — add a one-liner so the agent doesn't waste time on mobile CSS.
Verification plan is solid (build, seed, lint, manual pixel check) — could optionally add a screenshot-diff step against reference sections, but manual is acceptable given the "no lift-and-shift" constraint anyway.

---

## Prompt 3
Two small things to double check as it actually gets built, not plan-level issues:

The "no feature creep" line is a promise, not a guarantee — the plan still lists a fairly rich BookingWidget (date picker + guest dropdown + price breakdown), Highlights offer banner, and full Leaflet map. That's fine if the reference page genuinely has all of these — just actually verify each one exists on the live reference before/while building, rather than trusting the plan's assumption that it does. Same goes for the exact category tab names in Photo Tour ("Living room 1", "Gym", "Pool", etc.) — those look suspiciously specific, so confirm they match the real reference categories and aren't invented placeholders.
.env.example looks slightly off: it shows a real-looking Neon hostname pattern (ep-sample-123456...) — make sure that's genuinely a placeholder and not accidentally copy-pasted from a real provisioned DB before it goes into a repo, even a private one.

---

## Prompt 4
ROLE
You've finished building the Airbnb listing page clone and its two overlays.
Before this is submitted, run a full verification and deployment pass. Do
not skip any step below — report the actual result of each, not just that
you attempted it.

1. AUTOMATED CHECKS
- Run `npm run build` — report whether it compiles cleanly with zero
  TypeScript errors. Fix any errors found and re-run until clean.
- Run `npm run lint` — report whether it passes with zero errors/warnings.
  Fix any issues found and re-run until clean.
- Run `npx prisma db seed` against the Neon database — confirm the seed
  completes without errors and the schema/relations are intact.

2. REFERENCE SIDE-BY-SIDE COMPARISON
- Open the live reference (https://airbnb-clone-umber-two.vercel.app) and
  the local build side by side at 1280px+ width.
- Go section by section (Header, TitleSection, HeroPhotoGrid, HostSection,
  Highlights, DescriptionSection, AmenitiesSection, BookingWidget,
  ReviewsSection, MapSection, Footer) and confirm exact match on: layout,
  spacing, colors, typography, and copy/data. Explicitly flag anything that
  was assumed or invented (e.g., price, offer banner text, Photo Tour
  category names) that doesn't actually match the reference, and fix it.
- Repeat this comparison for the Photo Tour overlay (category pills, grid
  layout, scroll behavior) and the Lightbox overlay (arrows, transitions,
  counter).
- Report specific discrepancies found and what was corrected. If nothing
  was found, explicitly state that a full section-by-section comparison was
  performed and passed — don't just assert parity without describing what
  was checked.

3. MANUAL KEYBOARD & ACCESSIBILITY VERIFICATION
- Tab through the entire listing page using only the keyboard — confirm all
  interactive elements (buttons, links, "Show more", amenities modal, hero
  photos) are reachable and have visible focus states.
- Open the Photo Tour using only the keyboard, confirm focus moves into the
  overlay, tab through category pills and photos.
- Open the Lightbox, confirm ← and → change photos, Esc closes it, and
  focus returns to the exact element that opened it (not just the page).
- Confirm ARIA roles (role="dialog", aria-modal="true") are present in the
  rendered DOM, not just in the source.
- Report pass/fail for each of the above, not just "accessibility done."

4. DEPLOYMENT
- Confirm the GitHub repo is set to PRIVATE (this is a hard requirement —
  verify and report the visibility setting explicitly).
- Set DATABASE_URL as an environment variable in the Vercel project
  dashboard (free Hobby tier), pointing to the Neon production database.
- Deploy to Vercel and report the resulting production URL.
- Load the production URL and confirm: the page renders correctly, data is
  served live from the database (not cached/stale), and both overlays work
  exactly as they did locally.

5. FINAL REPORT
Summarize, as a checklist with pass/fail for each item above, ready to
paste into the submission notes. Do not mark anything "done" that wasn't
actually re-verified in this pass.

---

## Prompt 5
Did the side-by-side reference comparison turn up any discrepancies (price, category names, banner text, etc.), and were they fixed? "All checks complete" without a single flagged issue is a little suspicious for a pixel-perfect clone task — worth a sanity check that this wasn't rubber-stamped.

---

## Prompt 6
ROLE
Finish the remaining verification, deployment, and packaging steps for the
Airbnb listing clone before final submission. Report actual results for
each item — do not mark anything done without showing evidence.

1. REMAINING SECTION AUDIT (side-by-side vs the reference)
The previous audit covered Title, Rating, Specs, Discount Banner, Hero
Photo Grid, Photo Tour, Lightbox, Booking Widget, and Map. Now do the same
itemized comparison for the sections NOT yet audited:
- Header: logo, search pill bar text/layout ("Anywhere | Any week | Add
  guests"), globe icon, user menu button — confirm exact copy and styling.
- HostSection: avatar image/placement, host name, Superhost badge text and
  position relative to the specs line.
- DescriptionSection: exact description text, truncation length, and the
  "Show more" modal's layout/content when opened.
- AmenitiesSection: which amenities appear in the default top-10 grid vs.
  which appear only in the "Show all amenities" modal — confirm the exact
  set and icons match the reference, not a generic amenities list.
- ReviewsSection: category score meter values (Cleanliness, Accuracy,
  Communication, Location, Check-in, Value), review card content/count,
  and 2-column layout.
- Footer: nav link groups, currency/language selector, copyright text.
For each, report: reference value, what the codebase had, and what (if
anything) was corrected — same format as the prior audit table.

2. BUILD VALIDATION
- Run `npm run build` and report whether it completes with zero errors.
  If there are errors, fix them and re-run until clean.
- Confirm `npm run lint` still passes with 0 errors/0 warnings after any
  fixes from step 1.

3. ACCESSIBILITY RE-VERIFICATION (manual, keyboard-only)
- Tab through the full listing page using only the keyboard. Confirm every
  interactive element (search bar, Share/Save, "Show more", amenities
  modal trigger, hero photos, Reserve button, footer links) is reachable
  and shows a visible focus ring.
- Using only the keyboard, open the Photo Tour, tab through category pills
  and photos, then open the Lightbox from a photo.
- In the Lightbox, confirm ← and → change photos, Esc closes it, and focus
  returns to the exact element that opened it (not just somewhere on the
  page).
- Inspect the rendered DOM (not just source) to confirm role="dialog" and
  aria-modal="true" are present on both overlays when open.
- Report pass/fail for each of the above individually.

4. ARCHITECTURE DIAGRAM CONTENT CHECK
Open architecture_diagram.png and confirm it explicitly addresses all five
required areas for a production-scale vacation-rental marketplace:
frontend scaling, backend scaling, storage, search, and deployment
strategy. If any of the five is missing or thin, regenerate the diagram to
cover it properly.

5. DEPLOYMENT
- Confirm the GitHub repo's visibility is set to PRIVATE — report this
  explicitly, don't assume it.
- In the Vercel project dashboard (free Hobby tier), set DATABASE_URL as an
  environment variable pointing to the Neon production database.
- Deploy to Vercel and report the resulting production URL.
- Load the production URL directly and confirm: the page renders
  correctly, listing data is served live from the database, and both
  overlays (Photo Tour, Lightbox) work exactly as they do locally.

6. SUBMISSION PACKAGING
- Verify PROMPT_LOG.md contains the actual full prompt sequence used
  across this entire build (including this prompt), not a placeholder.
- Verify agents/subagent_config.json reflects the real sub-agent/skill
  setup actually used, not a generic stub.
- Create a zip containing: the full codebase (excluding node_modules,
  .next, .env, .env.local) and architecture_diagram.png.
- List the exact contents of the zip in your final report so it can be
  checked against the assignment's required deliverables before sending.

7. FINAL REPORT
Provide a single pass/fail checklist covering every item in sections 1–6.
Do not mark anything as done unless it was actually re-verified in this
pass.

---

## Prompt 7
ROLE
You are continuing work on the Airbnb listing page clone. The attached
reference screenshots in the folder of screenshot (9 images) show sections and details from the live
reference site that are either missing or incorrectly implemented in the
current codebase. The attached logo image is the exact Airbnb logo asset
to use. Rebuild/add each section below to match the reference exactly.

1. LOGO FIX
- Replace the current logo implementation with the attached logo image
  asset saved to path ("C:\Users\Soham Gor\Desktop\Study\Projects\playpower\logo.png")
- Use it in the Header component at the correct size/color — do not
  recreate it with a custom icon font or approximation.

2. STICKY SCROLL NAVIGATION BAR (currently missing)
- Add a sticky sub-navigation bar that appears once the user scrolls past
  the hero photo grid (see reference image 1).
- Left side: tab links — "Photos", "Amenities", "Reviews", "Location" —
  with the active tab underlined, matching the reference styling.
- Right side: price + rating summary (e.g. "₹28,499 for 5 nights" and
  "★ 4.95 · 19 reviews") plus a "Reserve" button (rausch/pink, rounded).
- Clicking each tab should smooth-scroll to its corresponding section on
  the page.
- This bar should be position: sticky at the top and only become visible
  after scrolling past the photo grid — not visible at the top of the page.

3. "WHERE YOU'LL SLEEP" SECTION (currently missing)
- Add this section as shown in reference image 3: a 2-column card layout,
  each card showing a room photo, room name ("Bedroom", "Living room"),
  and a one-line detail ("1 double bed", "1 sofa").
- Pull this data from the same listing data source (Prisma/seed) — add a
  `rooms` field/table if needed (name, photo, detail).

4. REVIEWS SECTION OVERHAUL (currently not matching reference)
Rebuild to match reference images 4 and 5 exactly:
- Top block: large "4.95" numeral flanked by decorative leaf icons, with
  "Guest favourite" heading below it, a description line ("This home is a
  guest favourite based on ratings, reviews and reliability"), and a
  "How reviews work" underlined link.
- Below that: a 6-column ratings breakdown — Overall rating (with a 1-5
  bar chart), then Cleanliness, Accuracy, Check-in, Communication,
  Location, Value — each showing a numeric score (e.g. 5.0, 4.8) and a
  small icon.
- Below that: a horizontally scrollable row of category tag pills (e.g.
  "Comfort 6", "Accuracy 5", "Hot tub 5", "Condition 4", "Hospitality 8",
  "Cleanliness 4", "Amenities 2") each with an icon and a count.
- Below that: a 2-column grid of individual review cards — each with
  avatar (image or colored initial), reviewer name, "X years/months on
  Airbnb", star rating, relative or absolute date, review text (truncated
  with a "Show more" link if long).
- End with a "Show all X reviews" button (outlined, full-width-ish, matches
  reference).

5. "WHERE YOU'LL BE" / MAP SECTION FIX
- Currently the map is present but needs the layout matching reference
  image 6: heading "Where you'll be", location line ("Candolim, Goa,
  India"), then the map itself with zoom +/- controls (top right), a
  search/magnifier icon (top left), a black circular home-pin marker in
  the center, and a caption below the map ("Exact location will be
  provided after booking.").
- Add "Neighbourhood highlights" as its own block directly after the map
  (reference image 7): heading, one description line, and a "Show more >"
  link — keep this separate from the map's own caption.

6. "MEET YOUR HOST" SECTION (currently missing)
Add this section matching reference image 8:
- Left: a host card with host avatar/logo, verified badge, host name
  ("Mirashya Homes"), "Host" label, and three stats — Reviews count,
  Rating, Years hosting — plus below the card: "Born in the 80s" and
  "Where I went to school: X" lines, each with a small icon.
- Right: "Co-Hosts" heading with a grid of co-host avatars + names (support
  both photo avatars and initial-letter avatars for hosts without photos).
- Below that: "Host details" heading with "Response rate: X%" and
  "Responds within an hour" lines, a "Message host" button (outlined,
  dark), and a small shield-icon safety note about using Airbnb to pay/
  communicate.
- Pull host/co-host data from the seed data — extend the Prisma schema
  with a Host model that supports multiple co-hosts if not already there.

7. "THINGS TO KNOW" SECTION (currently missing)
Add a 3-column section matching reference image 9 (top half):
- Cancellation policy: calendar-x icon, heading, 1-2 line policy text
  (e.g. "Free cancellation before 17 October..."), "Learn more" link.
- House rules: key icon, heading, short bullet lines (Check-in/Checkout
  times, max guests), "Learn more" link.
- Safety & property: shield icon, heading, short bullet lines (alarm/
  camera disclosures), "Learn more" link.

8. "MORE STAYS NEARBY" SECTION (currently missing)
Add a horizontally scrollable/carousel row matching reference image 9
(bottom half):
- Section heading "More stays nearby" with a page counter (e.g. "2 / 2")
  and prev/next chevron buttons on the right.
- Each card: property photo, title, price, star rating — same card style
  as the main listing grid would use elsewhere.
- This can use placeholder/seeded nearby-listing data since it doesn't
  need to link to real other listings — just needs to visually match.

GENERAL INSTRUCTIONS
- Match spacing, font sizes, icon choices, and colors from the reference
  screenshots as closely as possible — these are not rough approximations,
  they're graded on visual fidelity.
- Extend the Prisma schema and seed script as needed to support the new
  sections (rooms, co-hosts, house rules, safety items, nearby listings)
  rather than hardcoding this content directly in components.
- After implementing, re-run `npm run build` and `npm run lint` and confirm
  both pass cleanly.
- Do this section-by-section — after each new section, compare it against
  its corresponding reference screenshot before moving to the next one.

---

## Prompt 8
ROLE
Add a calendar/availability section to the listing page, positioned
directly between the Amenities section ("Show all X amenities") and the
Reviews section. Match the attached reference screenshot exactly.

SECTION: AVAILABILITY CALENDAR
- Heading: "{X} nights in {location}" (e.g. "5 nights in Candolim"),
  dynamically built from the currently selected check-in/checkout dates
  and the listing's location — recalculate this text whenever dates change.
- Subheading directly below: the selected date range formatted as
  "18 Oct 2026 - 23 Oct 2026" (day, short month, year — en dash between).
- Below that: a two-month calendar view (current month + next month shown
  side by side, e.g. "October 2026" and "November 2026"), each with:
  - Prev (‹) arrow on the far left of the left month, Next (›) arrow on
    the far right of the right month — clicking navigates both months
    forward/back by one.
  - Day-of-week header row (S M T W T F S).
  - Date grid with the correct days per month and correct starting
    weekday offset (blank cells before day 1).
  - Past/unavailable dates rendered grayed out and struck through
    (line-through), not clickable.
  - Selected check-in and check-out dates shown as solid dark filled
    circles with white text.
  - Dates between check-in and check-out shown with a light gray
    background connecting the two selected dates (range highlight).
  - Clicking an available date sets it as check-in if no range is active,
    or check-out if a check-in is already set (standard range-picker
    behavior); clicking again resets the range.
- Bottom row: a small icon button on the left (calendar/keyboard-input
  toggle icon) and a "Clear dates" underlined text link on the right,
  which resets the selected range to the default.
- This calendar must be the SAME source of truth as the CHECK-IN/CHECKOUT
  fields in the sticky BookingWidget — selecting dates here updates the
  booking widget's fields, and vice versa (shared state, e.g. lifted to
  the listing page or a shared context/hook).

IMPLEMENTATION NOTES
- Create this as its own component, e.g.
  components/listing/AvailabilityCalendar.tsx, and place it in
  app/listing/[id]/page.tsx between <AmenitiesSection /> and
  <ReviewsSection />.
- Use plain date logic (no paid calendar library) — a lightweight free
  package like `react-day-picker` (MIT licensed, free) is acceptable if it
  helps match the two-month range-picker behavior; otherwise build the
  month grid manually with date-fns (also free/MIT) for date math.
- Style with Tailwind to match the reference: black filled circles for
  selected dates, gray text for available future dates, light gray
  strikethrough for past/blocked dates, and the exact spacing/typography
  shown in the screenshot.
- After implementing, compare directly against the attached screenshot,
  then run `npm run build` and `npm run lint` and confirm both pass.
