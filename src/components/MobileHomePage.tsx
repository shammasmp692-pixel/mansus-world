import { useState, useRef, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Compass,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Quote,
  Star,
  ShieldCheck,
  Award,
  Users,
  Car,
  Ticket,
  Calendar,
  HelpCircle
} from 'lucide-react';
import {
  TOUR_PACKAGES,
  POPULAR_DESTINATIONS,
  TESTIMONIALS,
  COMPANY_INFO
} from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { useCurrency } from '../context/CurrencyContext';

export default function MobileHomePage() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  // Active category filter for package list
  const [activeCategory, setActiveCategory] = useState<'all' | 'city' | 'safari' | 'holiday' | 'transfers'>('all');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredPackages = TOUR_PACKAGES.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'city') return p.category.toLowerCase().includes('city');
    if (activeCategory === 'safari') return p.category.toLowerCase().includes('safari') || p.type === 'adventure';
    if (activeCategory === 'holiday') return p.type === 'holiday' || p.category.toLowerCase().includes('holiday');
    if (activeCategory === 'transfers') return p.category.toLowerCase().includes('transfer');
    return true;
  });

  const faqs = [
    {
      q: 'How do I book a tour package with Mansu\'s World?',
      a: 'Booking is completely effortless. Browse our packages and tap "WhatsApp Enquiry". Our concierge team will immediately review your travel dates, customize your day-wise plan, and share an official invoice.',
    },
    {
      q: 'Are private hotel and airport transfers included?',
      a: 'Yes, all our multi-day packages and private day tours include dedicated private air-conditioned vehicles and professional chauffeurs.',
    },
    {
      q: 'Can packages be customized for couples or families?',
      a: 'Absolutely. Every itinerary can be adjusted to match your preferred pace, child-friendly activities, or special celebration requests.',
    },
    {
      q: 'What payment currencies and methods do you accept?',
      a: 'We accept payments in INR (₹), AED (د.إ), and USD ($) via Visa, Mastercard, AMEX, RuPay, UPI, Google Pay, Apple Pay, PhonePe, and Tabby.',
    },
  ];

  return (
    <div className="md:hidden bg-[#FAF9F6] text-[#222222] pb-16">
      {/* ======================================================== */}
      {/* 1. MOBILE HERO SECTION — PUNCHY, HIGH-IMPACT OPENING    */}
      {/* ======================================================== */}
      <section className="relative min-h-[82vh] flex items-center justify-center bg-[#070F1B] px-5 pt-24 pb-14 overflow-hidden text-center">
        {/* Background Video / 4K Image Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dubai-skyline-at-sunset-41553-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layered dark gradient for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F1B]/95 via-[#070F1B]/60 to-[#070F1B]/95 pointer-events-none" />

        <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A869]/40 mb-5">
            <Compass className="w-3.5 h-3.5 text-[#C5A869]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#E5C378] font-bold">
              Mansu's World • Dubai
            </span>
          </div>

          {/* Short Mobile Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-3 drop-shadow-xl">
            Discover Dubai.
            <br />
            <span className="text-gold-gradient italic font-normal">
              Beyond Ordinary.
            </span>
          </h1>

          <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-xs">
            Curated private tours, desert safaris, and bespoke holiday packages tailored to your schedule.
          </p>

          {/* Primary Mobile Action Buttons */}
          <div className="w-full space-y-2.5">
            <a
              href={generateWhatsAppLink(undefined, {
                Inquiry: 'Mobile Quick Enquiry',
                Note: 'Hello Mansu\'s World, I am planning a holiday to Dubai and would like assistance.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl shadow-lg transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Enquiry</span>
            </a>

            <a
              href="#mobile-packages"
              className="w-full flex items-center justify-center gap-2 gold-gradient-bg text-[#070F1B] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl shadow-md transition-transform active:scale-[0.98]"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Trust Highlights */}
          <div className="mt-8 pt-5 border-t border-white/15 w-full grid grid-cols-3 gap-2 text-center text-white">
            <div>
              <p className="font-serif text-base font-bold text-[#E5C378]">100%</p>
              <p className="text-[9px] uppercase tracking-wider text-white/70">Private</p>
            </div>
            <div>
              <p className="font-serif text-base font-bold text-[#E5C378]">24/7</p>
              <p className="text-[9px] uppercase tracking-wider text-white/70">Concierge</p>
            </div>
            <div>
              <p className="font-serif text-base font-bold text-[#E5C378]">3 Currencies</p>
              <p className="text-[9px] uppercase tracking-wider text-white/70">INR•AED•USD</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. COMPACT SEARCH & QUICK FILTER CHIPS                  */}
      {/* ======================================================== */}
      <section className="px-4 -mt-5 relative z-20">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>Explore Categories</span>
            </span>
            <Link to="/packages" className="text-[11px] font-semibold text-[#A88B4C] hover:underline">
              View All ({TOUR_PACKAGES.length})
            </Link>
          </div>

          {/* Touch-Friendly Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All' },
              { id: 'city', label: '🏙️ City Tours' },
              { id: 'safari', label: '🏜️ Desert Safari' },
              { id: 'holiday', label: '✈️ Multi-Day' },
              { id: 'transfers', label: '🚗 Transfers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#0E1B2E] text-[#C5A869] shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. POPULAR DESTINATIONS — HORIZONTAL SWIPE CAROUSEL      */}
      {/* ======================================================== */}
      <section className="pt-8 pb-4">
        <div className="px-4 mb-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#A88B4C] font-bold block">
              Top Sights
            </span>
            <h2 className="font-serif text-xl font-bold text-[#0E1B2E]">
              Popular Destinations
            </h2>
          </div>
          <span className="text-[10px] text-gray-400 font-medium">Swipe →</span>
        </div>

        {/* Swipeable Destination Cards */}
        <div className="flex items-center gap-3.5 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-none">
          {POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.name}
              className="relative rounded-2xl overflow-hidden shrink-0 w-[240px] h-[190px] snap-start shadow-md"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-3 inset-x-3 text-white">
                <span className="text-[9px] uppercase tracking-wider text-[#E5C378] font-semibold block">
                  {dest.tagline}
                </span>
                <h3 className="font-serif text-base font-bold leading-tight">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FEATURED DUBAI PACKAGES — DEDICATED MOBILE CARDS      */}
      {/* ======================================================== */}
      <section id="mobile-packages" className="px-4 py-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#A88B4C] font-bold block">
              Handcrafted Tours
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1B2E]">
              Featured Holiday Packages
            </h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {filteredPackages.length} tours
          </span>
        </div>

        {/* 1-Column Mobile Travel Package Cards */}
        <div className="space-y-5">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md flex flex-col"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Destination / Category Pill */}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg bg-[#0E1B2E]/90 text-[#E5C378] border border-[#C5A869]/40 backdrop-blur-md">
                  {pkg.category}
                </span>

                {/* Duration & Nights Pill */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0E1B2E] leading-snug mb-2">
                    <Link to={`/package/${pkg.slug}`}>
                      {pkg.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-light mb-3">
                    {pkg.shortDescription}
                  </p>

                  {/* Mobile Inclusions Badges with Icons */}
                  <div className="grid grid-cols-2 gap-1.5 mb-4 text-[11px] text-gray-600 bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-1.5 truncate">
                      <Car className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                      <span className="truncate">Private A/C Transit</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Compass className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                      <span className="truncate">Dedicated Guide</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Ticket className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                      <span className="truncate">Entry Option</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                      <span className="truncate">Chilled Drinks</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action Touch Buttons */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-medium">
                      From
                    </span>
                    {/* Bold Prominent Price */}
                    <span className="font-sans font-extrabold text-xl text-[#0E1B2E] tracking-tight block">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/package/${pkg.slug}`}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0E1B2E] bg-gray-100 hover:bg-gray-200"
                    >
                      View
                    </Link>
                    <a
                      href={generateWhatsAppLink(pkg.title, {
                        Duration: pkg.duration,
                        Price: formatPrice(pkg.price),
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white flex items-center gap-1 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHY CHOOSE MANSU'S WORLD — SHORT TRUST POINTS        */}
      {/* ======================================================== */}
      <section className="px-4 py-8 bg-[#0E1B2E] text-white my-4">
        <div className="text-center max-w-sm mx-auto mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A869] font-bold block mb-1">
            The Mansu's World Standard
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold">
            Why Travel With Us?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-[#C5A869] mb-1.5" />
            <h3 className="font-serif text-sm font-bold mb-1">Private Fleet</h3>
            <p className="text-[10px] text-white/70 font-light leading-tight">
              Spotless air-conditioned vehicles and verified chauffeurs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
            <MessageCircle className="w-5 h-5 text-[#C5A869] mb-1.5" />
            <h3 className="font-serif text-sm font-bold mb-1">24/7 WhatsApp</h3>
            <p className="text-[10px] text-white/70 font-light leading-tight">
              Instant responses from your dedicated travel coordinator.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
            <Compass className="w-5 h-5 text-[#C5A869] mb-1.5" />
            <h3 className="font-serif text-sm font-bold mb-1">Custom Pacing</h3>
            <p className="text-[10px] text-white/70 font-light leading-tight">
              No rushed tour buses. Enjoy Dubai at your personal rhythm.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
            <Award className="w-5 h-5 text-[#C5A869] mb-1.5" />
            <h3 className="font-serif text-sm font-bold mb-1">Clear Pricing</h3>
            <p className="text-[10px] text-white/70 font-light leading-tight">
              Transparent quotes in INR, AED & USD with zero hidden extras.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SIMPLE BOOKING PROCESS IN 3 VISUAL STEPS              */}
      {/* ======================================================== */}
      <section className="px-4 py-8">
        <div className="text-center max-w-sm mx-auto mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#A88B4C] font-bold block mb-1">
            Easy 3 Steps
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1B2E]">
            How Booking Works
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#0E1B2E] text-[#C5A869] font-serif font-bold text-sm flex items-center justify-center shrink-0">
              01
            </span>
            <div>
              <h3 className="font-serif text-sm font-bold text-[#0E1B2E]">
                Select Your Holiday Package
              </h3>
              <p className="text-[11px] text-gray-500 font-light">
                Browse our curated Dubai city tours, desert safaris, or multi-day holidays.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#C5A869] text-[#0E1B2E] font-serif font-bold text-sm flex items-center justify-center shrink-0">
              02
            </span>
            <div>
              <h3 className="font-serif text-sm font-bold text-[#0E1B2E]">
                Instant WhatsApp Customization
              </h3>
              <p className="text-[11px] text-gray-500 font-light">
                Share your dates and guest count. We customize your itinerary and send official quotation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#0E1B2E] text-[#C5A869] font-serif font-bold text-sm flex items-center justify-center shrink-0">
              03
            </span>
            <div>
              <h3 className="font-serif text-sm font-bold text-[#0E1B2E]">
                Arrive & Experience Dubai
              </h3>
              <p className="text-[11px] text-gray-500 font-light">
                Meet your private chauffeur at the terminal and embark on a seamless holiday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. CUSTOMER REVIEWS (COMPACT CARDS)                      */}
      {/* ======================================================== */}
      <section className="px-4 py-8 bg-[#EFE9DF]/40 border-y border-[#DDD4C3]/60">
        <div className="text-center mb-5">
          <span className="text-[10px] uppercase tracking-widest text-[#A88B4C] font-bold block mb-1">
            Guest Feedback
          </span>
          <h2 className="font-serif text-xl font-bold text-[#0E1B2E]">
            Traveler Reflections
          </h2>
        </div>

        <div className="space-y-3">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-1 text-[#C5A869] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A869]" />
                ))}
              </div>
              <p className="text-xs text-gray-700 italic font-light mb-3 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-gray-100">
                <span className="font-bold text-[#0E1B2E]">{t.name}</span>
                <span className="text-gray-400">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. EXPANDABLE FREQUENTLY ASKED QUESTIONS ACCORDION       */}
      {/* ======================================================== */}
      <section className="px-4 py-8">
        <div className="text-center mb-5">
          <span className="text-[10px] uppercase tracking-widest text-[#A88B4C] font-bold block mb-1">
            Have Questions?
          </span>
          <h2 className="font-serif text-xl font-bold text-[#0E1B2E]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 flex items-center justify-between text-left text-xs font-bold text-[#0E1B2E] gap-3 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A869] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-gray-600 font-light leading-relaxed border-t border-gray-50 pt-2.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. CONTACT & WHATSAPP ENQUIRY CTA                       */}
      {/* ======================================================== */}
      <section className="px-4 py-8 bg-[#070F1B] text-white text-center rounded-3xl mx-3 shadow-xl">
        <span className="text-[10px] uppercase tracking-widest text-[#E5C378] font-bold block mb-2">
          Personalized Travel Desk
        </span>
        <h2 className="font-serif text-2xl font-bold mb-3">
          Plan Your Dubai Holiday
        </h2>
        <p className="text-xs text-white/75 font-light mb-5 max-w-xs mx-auto">
          Speak with our Dubai travel advisors on WhatsApp to craft your custom vacation itinerary.
        </p>

        <div className="space-y-2.5">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phonePlaceholder.replace(/\s+/g, '')}`}
            className="w-full flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl hover:bg-white/10"
          >
            <Phone className="w-4 h-4 text-[#C5A869]" />
            <span>Call Travel Desk ({COMPANY_INFO.phonePlaceholder})</span>
          </a>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. FLOATING WHATSAPP ACTION BUTTON (FAB)                */}
      {/* ======================================================== */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 border-2 border-white/40"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}

