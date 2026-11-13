import { useState, useRef, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  MapPin,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Compass,
  ChevronRight,
  CheckCircle2,
  Quote,
  Calendar,
  Users,
  Star,
  ShieldCheck,
  Award,
  ArrowDown,
  Play,
  Pause,
  SlidersHorizontal
} from 'lucide-react';
import {
  TOUR_PACKAGES,
  POPULAR_DESTINATIONS,
  LUXURY_HOTELS,
  TESTIMONIALS,
  COMPANY_INFO
} from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { useCurrency } from '../context/CurrencyContext';
import { useScrollReveal, useParallax } from '../hooks/useScrollAnimation';

export default function HomePage() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const parallaxOffset = useParallax(0.15);

  // Video playback control state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Search dock state
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [travelMonth, setTravelMonth] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/packages?duration=${selectedDuration}&guests=${guests}`);
  };

  // Package filter tabs
  const [activeTab, setActiveTab] = useState<'all' | 'city' | 'safari' | 'holiday' | 'transfers'>('all');

  const filteredPackages = TOUR_PACKAGES.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'city') return p.category.toLowerCase().includes('city');
    if (activeTab === 'safari') return p.category.toLowerCase().includes('safari') || p.type === 'adventure';
    if (activeTab === 'holiday') return p.type === 'holiday' || p.category.toLowerCase().includes('holiday');
    if (activeTab === 'transfers') return p.category.toLowerCase().includes('transfer');
    return true;
  });

  // Interactive booking form state
  const [consultName, setConsultName] = useState('');
  const [consultEmail, setConsultEmail] = useState('');
  const [consultGuests, setConsultGuests] = useState('2');
  const [consultDates, setConsultDates] = useState('');
  const [consultNotes, setConsultNotes] = useState('');
  const [consultSent, setConsultSent] = useState(false);

  const handleConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink('Custom Travel Consultation', {
      'Guest Name': consultName,
      'Email': consultEmail || 'Not provided',
      'Number of Guests': consultGuests,
      'Preferred Travel Dates': consultDates || 'Flexible',
      'Notes & Preferences': consultNotes || 'Bespoke Dubai holiday itinerary planning',
    });
    setConsultSent(true);
    window.open(link, '_blank');
  };

  // Scroll reveal refs for section entrances
  const introReveal = useScrollReveal();
  const attractionsReveal = useScrollReveal();
  const packagesReveal = useScrollReveal();
  const hotelsReveal = useScrollReveal();
  const desertReveal = useScrollReveal();
  const whyReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const consultReveal = useScrollReveal();

  return (
    <div className="bg-[#FAF9F6] text-[#222222] overflow-hidden">
      {/* ======================================================== */}
      {/* 1. HERO SECTION — CINEMATIC FULL-SCREEN VIDEO OPENING    */}
      {/* ======================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070F1B]">
        {/* Cinematic Travel Video with High-Res Poster Fallback */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000&auto=format&fit=crop&q=85"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom opacity-70"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dubai-skyline-at-sunset-41553-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-dubai-skyline-with-burj-khalifa-5461/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Multi-Layered Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F1B]/90 via-[#070F1B]/45 to-[#070F1B]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070F1B]/40 to-[#070F1B]/90 pointer-events-none" />

        {/* Ambient Subtle Gold Radial Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C5A869]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24 md:pt-40 md:pb-28">
          {/* Brand Identity Pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-[#C5A869]/50 mb-8 shadow-xl shadow-black/30 animate-fade-in">
            <Compass className="w-4 h-4 text-[#C5A869] animate-spin" style={{ animationDuration: '20s' }} />
            <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#E5C378] font-semibold">
              Mansu's World • Travel & Tourism
            </span>
          </div>

          {/* Master Headline Required by Specification */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-2xl">
            Discover Dubai.
            <br />
            <span className="text-gold-gradient italic font-normal">
              Experience Beyond Ordinary.
            </span>
          </h1>

          {/* Supporting Text Required by Specification */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 drop-shadow-md">
            Explore unforgettable journeys, exceptional experiences and carefully designed Dubai holiday packages.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <a
              href="#featured-packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 gold-gradient-bg hover:brightness-110 text-[#070F1B] font-bold text-xs sm:text-sm uppercase tracking-wider px-9 py-4 rounded-full shadow-xl shadow-[#C5A869]/25 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={generateWhatsAppLink(undefined, {
                Inquiry: 'Plan Your Dubai Journey',
                Note: 'Hello Mansu\'s World, I would like to plan a luxury holiday to Dubai.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/40 backdrop-blur-xl font-semibold text-xs sm:text-sm uppercase tracking-wider px-9 py-4 rounded-full transition-all duration-300 shadow-lg hover:border-[#C5A869]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Plan Your Journey</span>
            </a>
          </div>

          {/* Value Props Row */}
          <div className="pt-8 border-t border-white/15 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">100% Curated</p>
              <p className="text-[11px] text-white/70 tracking-wider uppercase mt-1">Private Pacing & Comfort</p>
            </div>
            <div className="p-3">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#C5A869]">Dubai Specialists</p>
              <p className="text-[11px] text-white/70 tracking-wider uppercase mt-1">Iconic Sights & Secret Gems</p>
            </div>
            <div className="p-3">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">24/7 Concierge</p>
              <p className="text-[11px] text-white/70 tracking-wider uppercase mt-1">Direct WhatsApp Desk</p>
            </div>
            <div className="p-3">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#C5A869]">Clear Pricing</p>
              <p className="text-[11px] text-white/70 tracking-wider uppercase mt-1">INR • AED • USD</p>
            </div>
          </div>
        </div>

        {/* Ambient Video Play/Pause Control & Scroll Down Indicator */}
        <div className="absolute bottom-6 inset-x-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto">
            <button
              onClick={toggleVideoPlayback}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white border border-white/20 text-xs backdrop-blur-md transition-all cursor-pointer"
              aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            >
              {isPlaying ? <Pause className="w-3 h-3 text-[#C5A869]" /> : <Play className="w-3 h-3 text-[#C5A869]" />}
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                {isPlaying ? 'Pause Video' : 'Play Video'}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest pointer-events-auto">
            <span>Scroll to Explore</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C5A869] animate-bounce" />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* QUICK TRIP SEARCH DOCK (FLOATING LUXURY GLASS DOCK)       */}
      {/* ======================================================== */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-dock rounded-3xl p-6 sm:p-8 border border-white/80 shadow-2xl">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            <div>
              <label className="block text-xs font-bold text-[#0E1B2E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Trip Duration</span>
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C5A869] transition cursor-pointer font-medium"
              >
                <option value="all">All Durations</option>
                <option value="day">Day Excursions (5 - 10 Hours)</option>
                <option value="safari">Evening Desert Safari (6 Hours)</option>
                <option value="multi-day">Multi-Day Packages (4 - 5 Days)</option>
                <option value="transfer">Airport Chauffeur Transfers</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0E1B2E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Approximate Travel Month</span>
              </label>
              <input
                type="month"
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C5A869] transition font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0E1B2E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Number of Travelers</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C5A869] transition cursor-pointer font-medium"
              >
                <option value="1">1 Solo Traveler</option>
                <option value="2">2 Guests (Couples)</option>
                <option value="4">3 - 4 Guests (Family / Friends)</option>
                <option value="6">5+ Guests (Small Group)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#0E1B2E] hover:bg-[#16263D] text-[#C5A869] font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#C5A869]/40 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Find Packages</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. DUBAI ARCHITECTURAL MARVELS & ATTRACTIONS             */}
      {/* ======================================================== */}
      <section
        id="destinations"
        ref={attractionsReveal.ref}
        className={`py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          attractionsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C5A869] mb-3">
              <span className="w-8 h-[1px] bg-[#C5A869]" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold">
                Iconic Landmarks
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0E1B2E] tracking-tight">
              Dubai's Architectural Wonders
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-gray-600 text-sm font-light leading-relaxed">
            Where futuristic skyline engineering embraces timeless Arabian hospitality. Every landmark is featured across our curated itineraries.
          </p>
        </div>

        {/* Attractions Responsive Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_DESTINATIONS.map((dest, idx) => (
            <div
              key={dest.name}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 h-[420px] flex flex-col justify-end p-8 transform hover:-translate-y-1.5"
            >
              {/* Destination Image with Parallax & Hover Zoom */}
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                loading="lazy"
              />
              {/* Luxury Vignette & Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1B]/95 via-[#070F1B]/40 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Destination Tagline & Details */}
              <div className="relative z-10 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold block mb-2">
                  {dest.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 group-hover:text-[#E5C378] transition-colors leading-snug">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light line-clamp-2 leading-relaxed mb-4">
                  {dest.description}
                </p>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C5A869] group-hover:text-white transition-colors"
                >
                  <span>Explore Tours Visiting Here</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FEATURED TRAVEL PACKAGES (MODERN LUXURY PRESENTATION) */}
      {/* ======================================================== */}
      <section
        id="featured-packages"
        ref={packagesReveal.ref}
        className={`py-24 lg:py-32 bg-[#FAF9F6] border-t border-gray-200 transition-all duration-1000 ${
          packagesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-[#C5A869] mb-3">
                <span className="w-8 h-[1px] bg-[#C5A869]" />
                <span className="text-xs uppercase tracking-[0.28em] font-semibold">
                  Curated Dubai Itineraries
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0E1B2E] tracking-tight">
                Featured Holiday Packages
              </h2>
            </div>
            <Link
              to="/packages"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0E1B2E] hover:text-[#C5A869] transition-colors group"
            >
              <span>View All Packages</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'city', label: 'Dubai City Tours' },
              { id: 'safari', label: 'Desert Safari & Adventures' },
              { id: 'holiday', label: 'Multi-Day Holidays' },
              { id: 'transfers', label: 'Chauffeur Transfers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0E1B2E] text-[#C5A869] shadow-lg shadow-[#0E1B2E]/20 border border-[#C5A869]/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Redesigned Luxury Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group transform hover:-translate-y-2"
              >
                {/* Large Destination Image with Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-3.5 py-1 rounded-full bg-[#0E1B2E]/90 text-[#C5A869] border border-[#C5A869]/40 shadow-md backdrop-blur-md">
                      {pkg.category}
                    </span>
                    {pkg.featured && (
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-[#C5A869] text-[#0E1B2E] shadow-sm">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Duration Pill at Bottom */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/95 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>{pkg.duration}</span>
                    <span className="text-white/40">•</span>
                    <Users className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>{pkg.maxGuests}</span>
                  </div>
                </div>

                {/* Package Card Details */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1B2E] group-hover:text-[#C5A869] transition-colors leading-snug mb-3">
                      <Link to={`/package/${pkg.slug}`}>
                        {pkg.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-5 font-light">
                      {pkg.shortDescription}
                    </p>

                    {/* Key Highlights */}
                    <ul className="space-y-2 mb-6 text-xs text-gray-600">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-medium mb-0.5">
                        Starting From
                      </span>
                      {/* Bold prominent package price with identical weight for currency symbol */}
                      <span className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0E1B2E] tracking-tight block">
                        {formatPrice(pkg.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/package/${pkg.slug}`}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#0E1B2E] hover:bg-[#FAF9F6] border border-gray-200 transition-colors"
                      >
                        Details
                      </Link>
                      <a
                        href={generateWhatsAppLink(pkg.title, {
                          Duration: pkg.duration,
                          'Starting Price': formatPrice(pkg.price),
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center gap-1.5 shadow-md transition-all duration-300 transform hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Book</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. LUXURY HOTELS & 5-STAR ACCOMMODATION SHOWCASE         */}
      {/* ======================================================== */}
      <section
        ref={hotelsReveal.ref}
        className={`py-24 lg:py-32 bg-[#0E1B2E] text-white relative overflow-hidden transition-all duration-1000 ${
          hotelsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-2 text-[#C5A869] mb-3">
                <span className="w-8 h-[1px] bg-[#C5A869]" />
                <span className="text-xs uppercase tracking-[0.28em] font-semibold">
                  World-Class Hospitality
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Luxury Hotels & Accommodation
              </h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-white/70 text-sm font-light leading-relaxed">
              We coordinate reservations with Dubai’s most celebrated resorts, offering private chauffeur transfers and bespoke VIP concierge assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LUXURY_HOTELS.map((hotel) => (
              <div
                key={hotel.name}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#C5A869]/60 transition-all duration-500 flex flex-col group transform hover:-translate-y-2 shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-wider font-semibold text-[#E5C378] bg-[#070F1B]/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-[#C5A869]/30">
                    {hotel.location}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#C5A869] uppercase tracking-wider font-semibold block mb-1">
                      {hotel.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#C5A869] transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                      {hotel.description}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs text-white/80">
                      {hotel.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                          <span className="truncate">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={generateWhatsAppLink(undefined, {
                      Inquiry: `Luxury Stay Reservation: ${hotel.name}`,
                      Location: hotel.location,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-xl border border-[#C5A869]/60 hover:border-[#C5A869] bg-[#C5A869]/10 hover:bg-[#C5A869] text-[#C5A869] hover:text-[#0E1B2E] text-xs uppercase tracking-wider font-semibold transition-all duration-300"
                  >
                    Enquire Luxury Stay
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ARABIAN DESERT SAFARI & DUNES ODYSSEY (CINEMATIC)     */}
      {/* ======================================================== */}
      <section
        ref={desertReveal.ref}
        className={`relative min-h-[580px] lg:min-h-[650px] flex items-center justify-center overflow-hidden bg-[#070F1B] transition-all duration-1000 ${
          desertReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Parallax Cinematic Desert Background */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=2000&auto=format&fit=crop&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070F1B]/95 via-[#070F1B]/70 to-[#070F1B]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070F1B]/40 to-[#070F1B]/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A869]/50 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C378] font-semibold">
              The Arabian Adventure
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Golden Sand Dunes & Starlit Nights.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/85 font-light leading-relaxed mb-10">
            Journey into the enchanting red dunes of the Arabian desert. Experience thrilling 4x4 dune bashing, camel trekking at sunset, authentic falconry, and an elegant barbecue banquet under a canopy of stars.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-lg font-bold text-[#E5C378] block">4x4 Dune Drive</span>
              <span className="text-[11px] text-white/70 uppercase">Thrilling Safari</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-lg font-bold text-[#E5C378] block">Sunset Trek</span>
              <span className="text-[11px] text-white/70 uppercase">Camel Ride</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-lg font-bold text-[#E5C378] block">Live Shows</span>
              <span className="text-[11px] text-white/70 uppercase">Tanoura & Fire</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-lg font-bold text-[#E5C378] block">VIP BBQ Dinner</span>
              <span className="text-[11px] text-white/70 uppercase">Starlit Dining</span>
            </div>
          </div>

          <Link
            to="/package/dubai-evening-desert-safari"
            className="inline-flex items-center gap-3 gold-gradient-bg text-[#070F1B] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl hover:brightness-110 transition-all transform hover:-translate-y-0.5"
          >
            <span>Book Desert Safari Experience</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. WHY TRAVEL WITH MANSU'S WORLD (THE SIGNATURE STANDARD)*/}
      {/* ======================================================== */}
      <section
        ref={whyReveal.ref}
        className={`py-24 lg:py-32 bg-[#0E1B2E] text-white relative overflow-hidden transition-all duration-1000 ${
          whyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.28em] text-[#C5A869] font-semibold block mb-3">
              The Mansu's World Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Why Travel With Mansu's World?
            </h2>
            <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed">
              We focus on what truly matters to travelers: authentic experiences, punctual private transportation, transparent pricing, and attentive personal care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {COMPANY_INFO.philosophy.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#C5A869]/70 transition-all duration-500 group transform hover:-translate-y-2 shadow-xl"
              >
                <span className="font-serif text-4xl font-bold text-[#C5A869]/40 group-hover:text-[#C5A869] transition-colors block mb-5">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#C5A869] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Metrics Bar */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <ShieldCheck className="w-6 h-6 text-[#C5A869] mx-auto mb-2" />
              <p className="font-serif text-2xl font-bold text-white">100% Verified</p>
              <p className="text-xs text-white/60 uppercase mt-0.5">Licensed Chauffeurs & Fleet</p>
            </div>
            <div>
              <Star className="w-6 h-6 text-[#C5A869] mx-auto mb-2" />
              <p className="font-serif text-2xl font-bold text-[#C5A869]">5-Star Rated</p>
              <p className="text-xs text-white/60 uppercase mt-0.5">Guest Satisfaction</p>
            </div>
            <div>
              <Compass className="w-6 h-6 text-[#C5A869] mx-auto mb-2" />
              <p className="font-serif text-2xl font-bold text-white">Bespoke Plans</p>
              <p className="text-xs text-white/60 uppercase mt-0.5">Tailored Itineraries</p>
            </div>
            <div>
              <Award className="w-6 h-6 text-[#C5A869] mx-auto mb-2" />
              <p className="font-serif text-2xl font-bold text-[#C5A869]">0 Hidden Fees</p>
              <p className="text-xs text-white/60 uppercase mt-0.5">Upfront Quotations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. CUSTOMER TESTIMONIALS (TRAVELER REFLECTIONS)          */}
      {/* ======================================================== */}
      <section
        ref={testimonialsReveal.ref}
        className={`py-24 lg:py-32 bg-[#EFE9DF]/60 border-y border-[#DDD4C3] transition-all duration-1000 ${
          testimonialsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.28em] text-[#A88B4C] font-semibold block mb-2">
              Guest Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0E1B2E] tracking-tight">
              Traveler Reflections
            </h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base font-light">
              Real stories and reflections from international guests who experienced Dubai with Mansu’s World.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C5A869] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A869]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C5A869]/30 mb-3" />
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-6 font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-5 border-t border-gray-100">
                  <p className="font-serif font-bold text-[#0E1B2E] text-base">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {t.location}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-[#A88B4C] bg-[#C5A869]/10 px-3 py-1 rounded-full">
                    {t.trip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. BESPOKE TRAVEL CONSULTATION & BOOKING DESK            */}
      {/* ======================================================== */}
      <section
        ref={consultReveal.ref}
        className={`py-24 bg-[#070F1B] text-white relative overflow-hidden transition-all duration-1000 ${
          consultReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-[#C5A869] font-semibold block mb-3">
              Personalized Itinerary Planning
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
              Plan Your Bespoke Dubai Journey
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Connect directly with our Dubai travel advisors. Share your schedule, group preferences, and desired experiences for a fast, customized plan.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            {consultSent ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Consultation Request Dispatched!
                </h3>
                <p className="text-white/70 text-sm max-w-md mx-auto">
                  Your enquiry has opened in WhatsApp with our concierge team. We look forward to designing your luxury Dubai holiday!
                </p>
                <button
                  onClick={() => setConsultSent(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#C5A869] text-[#070F1B] text-xs uppercase tracking-wider font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A869] placeholder-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alexander@example.com"
                      value={consultEmail}
                      onChange={(e) => setConsultEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A869] placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={consultGuests}
                      onChange={(e) => setConsultGuests(e.target.value)}
                      className="w-full bg-[#0E1B2E] border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A869]"
                    >
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="2 Guests (Couples)">2 Guests (Couples)</option>
                      <option value="3-4 Guests (Family)">3 - 4 Guests (Family)</option>
                      <option value="5+ Guests (Group)">5+ Guests (Small Group)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Approximate Travel Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mid November or Flexible"
                      value={consultDates}
                      onChange={(e) => setConsultDates(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A869] placeholder-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                    Special Wishes & Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you'd love to see: desert safari, Burj Khalifa observation deck, luxury yacht cruising, 5-star hotel options..."
                    value={consultNotes}
                    onChange={(e) => setConsultNotes(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A869] placeholder-white/30"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-white/50 text-center sm:text-left">
                    Your inquiry opens directly on WhatsApp with our concierge desk.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 gold-gradient-bg hover:brightness-110 text-[#070F1B] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#070F1B]" />
                    <span>Send Inquiry to WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
