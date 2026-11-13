# Mansu's World — Luxury Dubai Tourism Platform

> **"Discover Dubai. Experience Beyond Ordinary."**
> A modern, premium, visually immersive travel & tourism web application for **Mansu's World**.

---

## ✨ Features

- **Cinematic Full-Screen Hero:** Background travel video with graceful 4K poster fallback, dark gradient overlays, and ambient play/pause controls.
- **Storytelling Narrative:** 10 curated sections including Dubai Architectural Marvels, Curated Packages, 5-Star Luxury Accommodations, and an Arabian Desert Odyssey.
- **Multi-Currency System:**
  - 🇮🇳 **INR (₹)** — Base currency
  - 🇦🇪 **AED (د.إ)** — UAE Dirham
  - 🇺🇸 **USD ($)** — US Dollar
  - Live exchange rates with automatic 6-hour caching in `localStorage` and offline fallback.
- **Bold Price Typography:** Prominent `font-extrabold` sans-serif numbers and matching currency symbols across all packages.
- **Scroll-Based Interactions:** Smooth entrance animations powered by native Intersection Observer (`useScrollReveal`) and parallax offsets (`useParallax`).
- **Interactive Tour Package Detail Pages:** Day-wise itineraries, high-resolution thumbnail galleries, inclusions/exclusions, FAQs, and sticky booking inquiry cards.
- **Direct WhatsApp Concierge:** Dynamic message pre-formatting with package title, traveler count, dates, and live converted prices.
- **Pre-Footer Payment Methods:** Displaying authorized payment badges for Visa, Mastercard, American Express, RuPay, UPI, Google Pay, Apple Pay, PhonePe, Tabby, and UAE Cards.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Build Tool:** Vite 8

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git

# Navigate to project directory
cd riyago-tourism

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets and favicons
├── src/
│   ├── components/         # Navbar, Footer, PaymentMethods, CurrencySelector, ScrollToTop
│   ├── context/            # CurrencyContext (live rates & currency conversions)
│   ├── data/               # Tour packages, attractions, hotels, testimonials, company info
│   ├── hooks/              # useScrollAnimation (useScrollReveal, useParallax)
│   ├── pages/              # HomePage, CategoryPage, TourDetailPage, AboutPage, ContactPage
│   ├── utils/              # WhatsApp link generator and helpers
│   ├── App.tsx             # Root application and route definitions
│   ├── index.css           # Tailwind v4 theme, glassmorphic utilities, animations
│   └── main.tsx            # Application entrypoint
├── index.html              # SEO metadata, web fonts
└── package.json
```

---

## 📄 License

Private & Proprietary — Mansu's World Travel & Tourism LLC.
