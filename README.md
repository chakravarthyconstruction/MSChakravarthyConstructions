# M/S Chakravarthy Constructions — Marketing Website

A high-performance, responsive frontend marketing website for **M/S Chakravarthy Constructions**, an established infrastructure and civil engineering firm based in Anantapur, Andhra Pradesh.

Designed to mirror the layout language, bold editorial typography, and bento styling of modern architectural benchmarks (Arkonex reference) while adhering strictly to verified client business data.

---

## 🏗️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (pure CSS-first `@theme` design tokens; zero legacy config)
- **Motion**: [Motion for React](https://motion.dev/) (`motion/react`) for smooth scroll triggers, hover reveals, and mobile navigation
- **Icons**: [lucide-react](https://lucide.dev/)
- **Typography**: Self-hosted variable fonts via `@fontsource-variable/outfit` (editorial headings) & `@fontsource-variable/inter` (body copy)
- **Quality & Linting**: Built-in `oxlint` + TypeScript Compiler (`tsc -b`), 100% clean with zero warnings or errors

---

## 🎨 Design System

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--color-yellow` | `#F2C230` | Hero panel, leadership cards, accents | WCAG AA on `#0E0E0E` |
| `--color-bright-yellow`| `#FFF200` | Exact logo yellow, glowing accents on dark surfaces | WCAG AAA on black |
| `--color-ink` | `#0E0E0E` | Primary headings, dark buttons, What We Do section | High contrast |
| `--color-cream` | `#F8F5E8` | Page background | Warm editorial feel |
| `--color-navy` | `#0B3A5E` | Logo aura glow, accessible focus rings | WCAG compliant focus state |

- **Corner Radii**: Bento cards `28px` to `48px`, buttons fully pill (`rounded-full`).
- **Layout**: 12-column fluid grid, `max-width: 1320px`, no horizontal overflow at any viewport (360px, 768px, 1280px, 1920px).

---

## 📁 Project Structure

```
MSChakravarthyConstructions/
├── public/
│   ├── favicon.png             # Circular emblem favicon
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # XML sitemap for SEO indexing
├── src/
│   ├── assets/
│   │   ├── logo.png            # Client lion emblem
│   │   └── images/             # Optimized WebP site imagery (150-300KB each)
│   │       ├── hero-main.webp
│   │       ├── hero-team.webp
│   │       ├── about-site.webp
│   │       ├── service-constructions.webp
│   │       ├── service-roads.webp
│   │       ├── service-canals.webp
│   │       ├── service-reservoirs.webp
│   │       ├── service-checkdams.webp
│   │       └── cta-banner.webp
│   ├── pages/
│   │   ├── HomePage.tsx         # Comprehensive landing page with all section highlights
│   │   ├── AboutPage.tsx        # Dedicated page: 3-generation heritage & leadership
│   │   ├── ServicesPage.tsx     # Dedicated page: in-depth 5 civil engineering disciplines
│   │   ├── ReachPage.tsx        # Dedicated page: AP, Karnataka, Telangana & Pan-India
│   │   └── ContactPage.tsx      # Dedicated page: WhatsApp form, IST hours & Google Maps
│   ├── components/
│   │   ├── LogoBadge.tsx        # Reusable circular badge enclosing logo
│   │   ├── PillButton.tsx       # Pill button with sliding circular arrow (Link & Button)
│   │   ├── RotatingTextBadge.tsx# Continuously rotating SVG badge in hero notch
│   │   ├── SectionEyebrow.tsx   # "— SECTION LABEL —" editorial typography
│   │   ├── CountUpStat.tsx      # Viewport-triggered animated statistics
│   │   ├── ScrollToTop.tsx      # Smooth scroll-to-top on route navigation
│   │   └── MobileStickyBar.tsx  # Sticky bottom Call + WhatsApp bar for phones
│   ├── data/
│   │   ├── images.ts            # Central image metadata registry
│   │   └── site.ts              # Single source of truth for business data
│   ├── hooks/
│   │   └── useISTStatus.ts      # Computes live Open/Closed badge in IST
│   ├── sections/
│   │   ├── Navbar.tsx           # Floating glass pill navbar + mobile menu
│   │   ├── Hero.tsx             # Bento hero with headline, stats, rotating badge
│   │   ├── About.tsx            # Editorial statement & infrastructure site image
│   │   ├── Services.tsx         # Black bento container with desktop image reveal
│   │   ├── Reach.tsx            # 3 Outline numeral cards + Expanding India card
│   │   ├── Leadership.tsx       # Yellow cards with executive monograms (no AI faces)
│   │   ├── Approach.tsx         # 4-step phased project methodology
│   │   ├── CTABanner.tsx        # Panoramic corridor banner with dual CTAs
│   │   ├── FAQ.tsx              # Keyboard-accessible accordion from factual data
│   │   ├── Contact.tsx          # Form (WhatsApp + mailto fallback), IST hours & Map
│   │   └── Footer.tsx           # Dark rounded footer with quick links & legal
│   ├── App.tsx                  # Root layout assembling sections in order
│   ├── index.css                # Tailwind v4 `@theme` configuration
│   └── main.tsx                 # Entry point with variable font imports
├── index.html                   # Semantic markup with JSON-LD schema
├── vite.config.ts               # Vite configuration with Tailwind v4 plugin
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (tested on v24)
- **npm**: v9.0.0 or later

### 2. Installation
```bash
# Clone or navigate to the project directory
cd MSChakravarthyConstructions

# Install dependencies
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
The development server will spin up at `http://localhost:5173/`. Open it in any browser to preview with hot module replacement (HMR).

### 4. Code Quality & Linting
```bash
npm run lint
```
Runs `oxlint` across all files to ensure 0 errors and 0 warnings.

### 5. Production Build
```bash
npm run build
```
Compiles TypeScript, processes Tailwind CSS v4, bundles assets with Vite, and exports an optimized distribution to the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deploying to Vercel

### Option A: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts:
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Option B: Via Vercel Web Dashboard (Git Integration)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**.

---

## 🔄 How to Swap the Logo and Images

### Swapping the Logo
1. Place the new logo image file at `src/assets/logo.png`.
2. Also replace `public/favicon.png` if you want the favicon updated.
3. Because the `<LogoBadge />` component wraps `logo.png` inside a `rounded-full overflow-hidden bg-black` container with `object-cover`, any square or circular logo will automatically render cleanly as a badge without background leaks.

### Swapping Project Photos
All site images are centrally defined in `src/data/images.ts`. To replace AI-generated placeholders with real on-site photography:
1. Copy your real project photos into `src/assets/images/` (prefer `.webp` or `.jpg` formatted around 1200×900 for services, 1200×1500 for hero).
2. Open `src/data/images.ts` and update the imports and metadata:
   ```typescript
   import heroMain from '../assets/images/your-real-hero-photo.webp';
   // ...
   ```
3. Run `npm run build` to verify that dimensions and types match.

### Updating Business Information
All text, phone numbers, email addresses, and services are defined in `src/data/site.ts`. Never modify components directly—simply update `src/data/site.ts` to keep the single source of truth updated across the entire site.

---

## 🛡️ Honesty & Credibility Rules Upheld
- **No Invented Statistics**: Only uses the verified 3 generations, 3 operational states (Karnataka, Andhra Pradesh, Telangana), and 5 services (Constructions, Roads, Canals, Reservoirs, Check Dams).
- **No Fake People or Testimonials**: Leadership cards showcase executive monograms for Mr. D. Chakravarthy (Managing Director) and Mr. D. Nagaraju (Chairman), with zero synthetic faces.
- **Genuine Southern India Visual Context**: All generated imagery captures realistic Deccan semi-arid terrain, red-brown soil, neem trees, and authentic civil construction machinery.
- **Live Business Hours**: The contact section calculates real-time office availability in Indian Standard Time (IST, UTC+5:30).
