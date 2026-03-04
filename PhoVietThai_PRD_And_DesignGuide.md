# Project: Pho Viet Thai

**Document:** Web PRD & Design Guide

**Date:** March 2026

---

## 1. Product Requirements Document (PRD)

### Objective

To build a bold, vibrant, and fully functional **multi-page template website** for **Pho Viet Thai**, a Vietnamese and Thai restaurant in Lakewood, WA. The site must drive online orders, communicate the full menu clearly, establish local identity, and make it effortless for new and returning customers to find hours, location, and ordering options -- on mobile, in 30 seconds or less. All images are placeholders with clearly labeled dimensions and content descriptions for easy real-photo replacement.

### Target Audience

* Local Lakewood, WA residents looking for a reliable, affordable Vietnamese or Thai meal for dine-in, pickup, or delivery.
* New visitors to the area searching for pho or Thai food -- the site must rank and read well for "pho Lakewood WA" and "Thai food Lakewood WA."
* DoorDash and Uber Eats users who want to see the full menu and restaurant story before ordering.
* Catering and group dining inquiries for larger parties.

### Core Features and Functionality

1. **Multi-Page Architecture:** Five distinct pages -- Home, Menu, About, Contact, Order Online -- each with its own purpose, content structure, and layout expression, unified by a consistent Southeast Asian-inspired design system.
2. **Full Digital Menu:** The complete verified client menu organized by category with sticky category navigation, spice level indicators (0--5 chili icons on Thai dishes and fried rice), "House Special" and "House Signature" badges (P21 House Special Pho, PT Thai Tom Yum Pho), "Promo Deal" star badges on select drinks, and a "Contains Raw Meat" warning label on applicable pho items. Categories: Appetizers, Pho, Vietnamese, Thai Noodles, Thai Curry, Thai Stir-Fry, Kids, Extras, Refreshers, Soft Drinks, Boba/Milk Tea/Coffee. Menu data is fully provided -- no placeholders for menu content.
3. **Online Order Integration:** Dedicated Order page with links to DoorDash, Uber Eats, and ordervietthai.com. Order CTA persistent in navigation and home page.
4. **Contact Form:** React Hook Form with validation. Fields: Name, Email, Phone, Subject dropdown, Message. Subject options include Reservation Inquiry, Catering, General Question, Feedback.
5. **Location and Hours:** Prominently displayed on Home, Contact, and About pages. Custom-styled Google Maps embed on Contact and About pages.
6. **Mobile-First and Fast:** The most common use case is a mobile user deciding where to eat or placing an order. Two taps to ordering. One tap to call. Zero friction.
7. **Placeholder Image System:** Every image element has a code comment with dimensions and content description. Placeholder services used: `picsum.photos` for lifestyle shots, `placehold.co` for labeled food slots.

---

## 2. Design and Brand Guide

### The Brand: Pho Viet Thai

A neighborhood restaurant that has earned its regulars through consistent, honest food. The brand is not trying to be upscale -- it is trying to be the best version of what it already is: a warm, generous, unpretentious Vietnamese and Thai kitchen in Lakewood, WA. The website should feel like an extension of the physical space: dark wood, globe pendant lights, tropical plants, warm ambient light, and the smell of pho broth on the air.

### Visual Reference -- Actual Restaurant Interior

From the Yelp interior photos:
- Dark wood tables and black chairs throughout a spacious dining room
- Round globe pendant lights hanging from exposed black ceiling beams -- warm, ambient, restaurant-defining
- Abundant tropical indoor plants: large leafy pothos, money trees, dracaena -- green, lush, alive
- Warm ambient lighting giving the space a golden, inviting quality even in a large room
- Clean and organized -- a large-format restaurant that feels personal

These interior elements directly inform the design system: the globe lights become a recurring decorative motif, the tropical plants become botanical corner accents, the dark wood and warm lighting map directly to the color palette.

### Color Palette

* **Lacquer Red (`#B5231A` / `#C4291F`):** Primary brand accent. Rich warm red -- Vietnamese lacquerware, Thai temple doors. All primary CTAs, navigation highlights, menu category headers, active states, and key section accents.
* **Turmeric Gold (`#D4921A` / `#E8A520`):** Secondary accent. Deep golden yellow -- curry paste, star anise, lantern light. Decorative borders, hover states, price text, icon accents, rule lines, and the restaurant tagline.
* **Deep Jade (`#1A4A3A` / `#1E5542`):** Grounding dark green -- fresh herbs, pandan, lemongrass. Directly referencing the abundant indoor plant life in the restaurant photos. Footer, dark section backgrounds, mobile nav overlay, drinks section.
* **Warm Ivory (`#FAF5E8` / `#F5EFD8`):** Primary light canvas. Warm white with golden tint -- steamed rice, fresh rice paper. Light section backgrounds and primary body text surfaces.
* **Rich Charcoal (`#1C1C1C` / `#242424`):** Primary dark text. Not pure black -- warm and grounded. Matches the dark interior wood aesthetic.
* **Soft Cream (`#EDE5CC`):** Secondary surface. Card backgrounds, alternating section fills, subtle pattern base.

### Visual Styling and UI Elements

* **Shadows:** Warm and golden-tinted -- `rgba(180, 90, 20, 0.12)` soft drop shadows on cards and image frames. Nothing cold or blue-gray.
* **Cards:** Soft cream or warm ivory background, turmeric gold top-edge rule, `border-radius: 12px`. Menu item cards use a tighter radius (`8px`). On hover: scale `1.0` to `1.02`, gold border intensifies, shadow lifts slightly.
* **Buttons:** Primary -- lacquer red fill, warm ivory text, `border-radius: 8px`, fills from bottom on hover. Secondary -- turmeric gold outline, lacquer red text, fills on hover.
* **Form fields:** Turmeric gold bottom-border only at rest. Full turmeric gold outline on focus. Lacquer red border on error. Clean sans-serif placeholder text.
* **Menu item rows:** Display serif name left, body text description below, turmeric gold price right-aligned. Thin warm cream divider between items within a category.
* **Image overlays:** Warm lacquer red radial gradient (`rgba(180, 35, 26, 0.18)` to transparent) applied over all placeholder and real food/interior images for palette cohesion.

### Pattern Language

All patterns are used consistently across all pages at the same opacity and scale.

* **Geometric border strips:** 12--16px tall repeating diamond lattice or chevron strips in lacquer red at 30% opacity. Used at section tops and bottoms as visual transitions.
* **Diagonal woven texture:** CSS diagonal line pattern, 3--5% opacity, on deep jade and charcoal sections -- evoking woven bamboo and rattan, referencing the restaurant's woven chair backs.
* **Circular medallion watermarks:** SVG ornamental circles at 5--8% opacity as section background accents -- inspired by Vietnamese dong ho woodblock circular motifs.
* **Globe light motif:** Circular glowing orb graphics (soft warm amber radial gradient, `rgba(212, 146, 26, 0.10)`) used as decorative section elements -- directly referencing the round pendant lights visible throughout the restaurant interior.
* **Tropical leaf corner bleeds:** Stroke-based tropical leaf SVG silhouettes bleeding in from section corners at 15--25% opacity. Referencing the abundant indoor plants in the actual restaurant.
* **Food silhouette line-art icons:** Pho bowl with chopsticks, spring roll, chili pepper, bubble tea cup, lemongrass stalk. Used as menu category icons, feature callouts, and footer accents. Lacquer red or turmeric gold stroke, never filled.

### Typography Direction

* **Display / Headings (Warm Editorial Serif):** *Playfair Display* or *Cormorant Garamond*. Restaurant name, page titles, section headings, featured dish names. Conveys tradition, culinary warmth, and craft without being stuffy.
* **Body / UI (Clean Friendly Sans-Serif):** *Plus Jakarta Sans* or *DM Sans*. All menu descriptions, navigation, form fields, hours, supporting copy. Friendly, readable at all sizes, fast to scan.
* **Accent (Italic Serif):** Display font in italic for the tagline, pull quotes, and "House Special" dish callouts.

**Typography Rules:**
* Restaurant name: display serif, title case, lacquer red -- always
* Menu item names: display serif, title case, rich charcoal
* Prices: body sans-serif, turmeric gold, right-aligned
* Section headings: display serif, left-aligned, thin turmeric gold rule beneath
* Body copy: line-height `1.75`
* Spice level labels: body sans-serif, small, italic, warm gray

---

## 3. Motion and Animation

No parallax. Component-level only.

* **Section entrances:** `opacity: 0` to `1` + `translateY: 20px` to `0`, 600ms ease-out, IntersectionObserver.
* **Menu cards:** Staggered entrance, 80ms delay per card, scale `0.97` to `1.0`.
* **CTA hover:** Background fills lacquer red bottom-up, text shifts to warm ivory, 200ms.
* **Nav hover:** Turmeric gold underline draws left to right, 250ms.
* **Page transitions:** Warm ivory curtain with thin lacquer red top edge, 300ms wipe out/in.
* **Spice indicators:** Chili icons animate fill from left on dish card hover.
* **Globe light pulses:** Soft ambient glow elements pulse slowly (scale `1.0` to `1.08`, opacity shift, 3s loop) in the drinks and hero sections -- like actual pendant lights.

---

## 4. Placeholder Image System

Every image in the codebase must have a descriptive comment directly above it:

```jsx
{/* PLACEHOLDER: Hero banner -- 1440x720px -- wide-angle interior dining room shot */}
{/* PLACEHOLDER: Featured dish -- 600x600px -- Thai Tom Yum Pho, overhead */}
{/* PLACEHOLDER: Drinks section -- 800x500px -- Vietnamese iced coffee with salted creme */}
{/* PLACEHOLDER: About interior -- 600x800px -- portrait of dining room, globe lights visible */}
{/* PLACEHOLDER: Menu category header -- 400x200px -- [Category name] */}
```

Placeholder sources:
* Lifestyle/interior and food images: all sourced from `public/images/` folder using `next/image` with `src="/images/[filename]"`. No external placeholder services.
* Every image element has a descriptive comment above it with the recommended filename, dimensions, and what real photo should replace it.
* Suggested naming convention documented in the website prompt (hero-banner.jpg, featured-pho.jpg, interior-dining.jpg, etc.).

All placeholder images use the warm image overlay CSS filter: `sepia(10%) saturate(110%) brightness(0.95)` for palette cohesion.

---

## 5. Site Map

| Route | Page | Primary Purpose |
|-------|------|-----------------|
| `/` | Home | First impression, signature dishes, about teaser, reviews, order CTA |
| `/menu` | Menu | Full menu organized by category, sticky nav, spice indicators |
| `/about` | About | Restaurant story, interior gallery, hours, map |
| `/contact` | Contact | Contact form, phone, map, order links |
| `/order` | Order Online | DoorDash, Uber Eats, direct order links, featured delivery dishes |

---

## 6. SEO Notes

* Page title tags: `Pho Viet Thai | [Page Name] | Vietnamese & Thai Restaurant in Lakewood, WA`
* Meta descriptions target: "pho Lakewood WA", "Thai food Lakewood WA", "Vietnamese restaurant Lakewood", "pho near me Lakewood"
* `LocalBusiness` schema JSON-LD on the Home page with name, address, phone, hours, cuisine, price range
* All images have descriptive `alt` text -- even placeholders (`alt="Placeholder: Thai Tom Yum Pho bowl"`)
* Menu items marked up with descriptive headings for search discoverability

---

## 7. Key Business Info

| Field | Details |
|-------|---------|
| **Business Name** | Pho Viet Thai |
| **Tagline** | *"Two Cuisines. One Bowl."* |
| **Address** | 3615 Steilacoom Blvd SW, Suite 102, Lakewood, WA 98499 |
| **Phone** | (253) 267-1637 |
| **Hours** | Open Daily, 11:00 AM -- 11:00 PM |
| **Cuisine** | Vietnamese and Thai |
| **Price Level** | $ (Budget-friendly) |
| **Online Order** | ordervietthai.com, DoorDash, Uber Eats |
| **Google Rating** | 3.9 / 5 (349 reviews) |
| **Palette** | Lacquer red, turmeric gold, deep jade, warm ivory, rich charcoal |
| **Template Status** | Placeholder images throughout -- all labeled in code |

---
