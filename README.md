# M/s Chakravarthy Constructions — Corporate Web Platform

Production website and content repository for **M/s Chakravarthy Constructions**, a Class-1 civil contractor and tier-1 infrastructure subcontracting partner operating across Andhra Pradesh, Telangana, and Karnataka.

---

## 1. Verified Corporate Profile

- **Legal Entity:** M/s Chakravarthy Constructions
- **Constitution:** Registered Partnership Firm — Firm No. 1520 of 2009, registered under Section 58(1) of the Indian Partnership Act, 1932 by the Registrar of Firms, Ranga Reddy District
- **Registration Date:** 22nd August 2009
- **PAN:** AAGFC3799N
- **GST:**
  - Andhra Pradesh: `37AAGFC3799N1Z0` (Principal Place: Dwaraka Nagar, Anantapur)
  - Telangana: `36AAGFC3799N1ZQ` (Principal Place: Balaji Nagar, Kukatpally, Hyderabad)
- **MSME:** UDYAM-AP-01-0004590 — Small Enterprise; NIC 42204 (Construction & maintenance of water reservoirs, mains, and irrigation systems)
- **Contractor Registrations:**
  - Govt. of Andhra Pradesh (Water Resources Department): Class-1 Contractor (Civil), Reg. No. COT/AP/FC/807/2020 — qualified for single works up to ₹10 Crores
  - Govt. of Karnataka (Public Works Department): Class-1 Civil Contractor, Licence No. CBS/C1/CIVIL/11740/2019
- **Audited Financial Baseline** (M/s Lokireddy & Co., Chartered Accountants):
  - Net Worth: ₹3,10,79,450/- as of 29-04-2025 (UDIN: 25230189BMJOWK6170)
  - 10-Year Contract Receipts: ₹26.50+ Crores cumulative, ₹6.55 Crores in FY 2024-25 (UDIN: 25209099BMNYXU9552)
- **Leadership:** Sri D. Nagaraju — Chairman & Founder (Managing Partner); Sri D. Chakravarthy — Managing Director (Managing Partner)
- **Offices:**
  - Head Office (Telangana): Flat No. 201, SVR Harsha Homes, D.No. 35/122, Balaji Nagar, Kukatpally, Hyderabad – 500072
  - Branch Office (Andhra Pradesh): D.No. 1-410, 1st Road Extension, Dwaraka Nagar, Anantapur – 515001
- **Contact:** Primary Corporate Line +91 81257 25425 · Project Operations Desk +91 63051 67125 · srichakravarthyconstructions@gmail.com

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

## 📁 Information Architecture

Visual components consume strongly-typed data objects in `src/data/`:

```
src/
├── data/
│   ├── site.ts           # Company metadata, dual offices, contact lines, licences, financials, services, FAQs
│   ├── projects.ts       # Verified active and completed project records
│   ├── credentials.ts    # Public-safe statutory & departmental credential register (derived from site.ts)
│   └── images.ts         # Image metadata registry
├── sections/
│   ├── Navbar.tsx        # Glass-pill header with route links
│   ├── Hero.tsx          # Bento hero with verified badges and metrics
│   ├── About.tsx         # Firm statement
│   ├── Services.tsx      # 5 core engineering disciplines (3D / photo viewer)
│   ├── Projects.tsx      # Filterable project gallery (status & discipline chips)
│   ├── Credentials.tsx   # Government registrations, statutory IDs, audited financials
│   ├── Machinery.tsx     # Plant mobilization & heavy machinery deployment note
│   ├── Leadership.tsx    # Managing partners
│   ├── FAQ.tsx           # Tendering, subcontract, region and financial FAQs
│   ├── Contact.tsx       # Dual-office cards + map switcher, direct dialers, inquiry form
│   └── Footer.tsx        # Statutory identifiers, quick links, disclosures
├── pages/                # Home, About, Services, Projects, Credentials, Reach, Contact
└── components/           # Shared UI (PageHeader, PillButton, CountUpStat, 3D scenes, ...)
```

---

## 🏗️ Core Service Disciplines

1. **Hard Rock Excavation, Drilling & Controlled Blasting** — deep-cut opencast excavation, 2.5m × 2.0m DTH wagon drilling, DGMS-licensed blasting, hydraulic rock breaking (<500mm).
2. **Highway Earthworks, Embankment & Subgrade Formation** — bulk borrow excavation, long-lead hauling (>10 km), MoRTH Clause 305/407 subgrade at >10% soaked CBR.
3. **Water Resources, Reservoirs & Check Dams** — earthen bunds, COT stabilization, sand blankets, rock-toe filters, 225–300mm dry rubble revetment, desilting.
4. **Canal Networks, Off-Take Sluices & Industrial Drains** — SRSP high-level O.T. sluices, distributary lining, NP2/NP3 pipe crossings, industrial storm drains.
5. **Tier-1 EPC Subcontract Execution & Fleet Mobilization** — 20T/30T excavators, breakers, tippers, dewatering, mining engineers and safety personnel under JMC.

## 📋 Key Projects

| Project | Client | Status | Value |
|---|---|---|---|
| 500 MW Chitravathi Pumped Storage Project | Adani PSP / APS Mining | Active | ₹16.99 Cr |
| Bengaluru–Vijayawada Economic Corridor Pkg-4 | Dilip Buildcon / NHAI | Active | ₹3.40+ Cr billed |
| NH-544D Muchukota–Bugga Section | MEIL | Active | ₹4.36 Cr |
| Chennarayaswamy Irrigation Regulation System, Tanakal | Penukonda Division | Active | ₹33.24 L |
| Gunipalli MI Tank Rehabilitation | APIIATP (World Bank) | Completed | ₹58.94 L |
| Palamadugu Vagu New Reservoir, Adilabad | — | Completed | ₹2.35 Cr |
| Sarala Sagar Modernization, Mahabubnagar | — | Completed | ₹3.42 Cr |
| Utnoor Pendalguda Reservoir, Adilabad | — | Completed | ₹2.64 Cr |
| APIIC Storm Water Drains, IDA Mallapur | APIIC | Completed | ₹2.28 Cr |
| Koundinya River Diversion Weir, Chittoor | — | Completed | ₹1.81 Cr |

Add further verified records to `src/data/projects.ts`; the gallery and filters pick them up automatically.

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
Company metadata, offices, licences, financials and services live in `src/data/site.ts`; projects in `src/data/projects.ts`; the public credential register in `src/data/credentials.ts`. Update the data files rather than hard-coding text in components.

---

## 🔒 Statutory Privacy & Security Guidelines

- **Zero-disclosure identifiers:** Partners' personal Aadhaar numbers are never committed to source, data files or image assets.
- **Banking identifiers:** Bank account numbers, IFSC codes and cancelled cheque images are withheld from public bundles.
- **Commercial redaction:** Subcontractor debit breakdowns, internal diesel recovery formulas and net margin schedules are excluded from public pages.
- Only firm-level identifiers (Firm No., PAN, GSTINs, Udyam, contractor registration numbers, CA UDINs) are published.
