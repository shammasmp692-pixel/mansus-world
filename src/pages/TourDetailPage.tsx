import { useState, useRef, type FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Users,
  MapPin,
  Calendar,
  Check,
  X,
  AlertCircle,
  ChevronDown,
  MessageCircle,
  ArrowLeft,
  Building,
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { useCurrency } from '../context/CurrencyContext';

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug) || TOUR_PACKAGES[0];
  const { formatPrice, currency } = useCurrency();

  const formRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isItineraryExpanded, setIsItineraryExpanded] = useState(false);
  const [isInclusionsExpanded, setIsInclusionsExpanded] = useState(false);

  // Booking Enquiry form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [requirements, setRequirements] = useState('');
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(pkg.title, {
      'Guest Name': fullName,
      'Email': email,
      'WhatsApp Number': whatsapp,
      'Travel Date': travelDate || 'Flexible',
      'Adults (12+)': adults,
      'Children (<12)': children,
      'Additional Requirements': requirements || 'None specified',
      'Package Duration': pkg.duration,
      'Estimated Price': `${formatPrice(pkg.price)} (${currency})`,
    });

    setEnquirySuccess(true);
    window.open(link, '_blank');
  };

  const scrollToBooking = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20 lg:pb-0">
      {/* Hero Header */}
      <section className="relative h-[52vh] min-h-[400px] bg-[#0E1B2E] flex items-end overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-[#0E1B2E]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-[#C5A869]">Home</Link>
            <span>/</span>
            <Link to="/packages" className="hover:text-[#C5A869]">
              Dubai Packages
            </Link>
            <span>/</span>
            <span className="text-[#C5A869] font-medium truncate max-w-[200px] sm:max-w-none">
              {pkg.title}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#C5A869] text-[#0E1B2E] font-semibold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
              {pkg.category}
            </span>
            <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{pkg.duration}</span>
            </span>
            <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{pkg.maxGuests}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl">
            {pkg.title}
          </h1>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Package Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Image Gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 shadow-lg mb-4">
                <img
                  src={pkg.gallery[activeImage] || pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Thumbnails Strip */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {pkg.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all cursor-pointer ${activeImage === idx
                        ? 'border-[#C5A869] shadow-md scale-[1.02]'
                        : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Package Overview */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E] mb-4">
                Package Overview
              </h2>
              <p className="text-gray-700 leading-relaxed font-light sm:text-lg">
                {pkg.overview}
              </p>
            </div>

            {/* Highlights Section */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#0E1B2E] mb-6 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-[#C5A869] rounded-full" />
                <span>Experience Highlights</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#A88B4C]" />
                    </div>
                    <span className="text-sm text-gray-700 leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-Wise Itinerary */}
            {pkg.dayItinerary.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E]">
                    Day-Wise Itinerary
                  </h2>
                  <span className="text-xs text-[#A88B4C] font-semibold bg-[#C5A869]/10 px-3 py-1 rounded-full">
                    {pkg.dayItinerary.length} {pkg.dayItinerary.length === 1 ? 'Day Schedule' : 'Days'}
                  </span>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {pkg.dayItinerary.map((dayItem, idx) => {
                    const isVisibleOnMobile = idx === 0 || isItineraryExpanded;
                    return (
                      <div
                        key={dayItem.day}
                        className={`bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-7 shadow-sm transition-all ${
                          !isVisibleOnMobile ? 'hidden lg:block' : 'block'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0E1B2E] text-[#C5A869] font-serif font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                            D{dayItem.day}
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0E1B2E]">
                            Day {dayItem.day}: {dayItem.title}
                          </h3>
                        </div>

                        <ul className="space-y-2.5 sm:space-y-3 pl-3 sm:pl-4 border-l-2 border-[#C5A869]/30 ml-3 sm:ml-4">
                          {dayItem.activities.map((act, aIdx) => (
                            <li key={aIdx} className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Expand / Collapse Toggle */}
                {pkg.dayItinerary.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setIsItineraryExpanded(!isItineraryExpanded)}
                    className="lg:hidden w-full mt-3 py-3 px-4 rounded-xl border border-[#C5A869]/40 bg-[#FAF9F6] text-[#0E1B2E] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>
                      {isItineraryExpanded
                        ? 'Collapse Itinerary'
                        : `View Full ${pkg.dayItinerary.length}-Day Schedule`}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#A88B4C] transition-transform duration-200 ${
                        isItineraryExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
            )}

            {/* Hotel Accommodation Details */}
            <div className="bg-[#EFE9DF]/50 border border-[#DDD4C3] rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0E1B2E] text-[#C5A869] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0E1B2E] mb-2">
                    Hotel Accommodation Details
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                    {pkg.hotelAccommodation}
                  </p>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    *Hotel tiers and specific properties are tailored on enquiry to match your budget and room preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Inclusions */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-sm">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Inclusions</span>
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {pkg.included.map((inc, i) => {
                      const isVisible = i < 3 || isInclusionsExpanded;
                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 ${
                            !isVisible ? 'hidden lg:flex' : 'flex'
                          }`}
                        >
                          <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-sm">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span>Exclusions</span>
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {pkg.excluded.map((exc, i) => {
                      const isVisible = i < 3 || isInclusionsExpanded;
                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 ${
                            !isVisible ? 'hidden lg:flex' : 'flex'
                          }`}
                        >
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Mobile Inclusions Toggle */}
              {(pkg.included.length > 3 || pkg.excluded.length > 3) && (
                <button
                  type="button"
                  onClick={() => setIsInclusionsExpanded(!isInclusionsExpanded)}
                  className="lg:hidden w-full mt-3 py-3 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{isInclusionsExpanded ? 'Show Fewer Inclusions' : 'View All Inclusions & Exclusions'}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      isInclusionsExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Important Travel Information */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0E1B2E] mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#C5A869]" />
                <span>Important Travel Information</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {pkg.importantInfo.map((info, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-2" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frequently Asked Questions */}
            {pkg.faqs.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {pkg.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full text-left p-5 flex items-center justify-between font-serif font-bold text-[#0E1B2E] hover:bg-gray-50 transition cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C5A869] transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Booking Enquiry Form (4 cols) */}
          <div className="lg:col-span-4">
            <div
              ref={formRef}
              className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8"
            >
              {/* Pricing Header */}
              <div className="pb-6 border-b border-gray-100">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-1">
                  Starting Price Placeholder
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0E1B2E] tracking-tight">
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    / person basis
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  *{pkg.priceNote}
                </p>
              </div>

              {/* Success Confirmation Modal/Notice */}
              {enquirySuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0E1B2E]">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Thank you, {fullName}! Your enquiry for <strong>{pkg.title}</strong> has been prepared and opened in WhatsApp for instant consultation.
                  </p>
                  <button
                    onClick={() => setEnquirySuccess(false)}
                    className="text-xs text-[#0E1B2E] underline uppercase tracking-wider font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Enquiry Form */
                <form onSubmit={handleEnquirySubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971..."
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Selected Package
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={pkg.title}
                      className="w-full bg-gray-100 border border-gray-200 text-xs text-gray-600 rounded-xl px-4 py-3 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Adults (12+)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Children (&lt;12)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="15"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Hotel preference, flight details, or specific tour requests..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                    />
                  </div>

                  {/* Submission CTA */}
                  <button
                    type="submit"
                    className="w-full bg-[#0E1B2E] hover:bg-[#16263D] text-[#C5A869] font-semibold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C5A869] group-hover:translate-x-0.5 transition-transform" />
                    <span>Submit Booking Enquiry</span>
                  </button>

                  <a
                    href={generateWhatsAppLink(pkg.title, {
                      Inquiry: 'Direct WhatsApp booking inquiry',
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enquire Directly on WhatsApp</span>
                  </a>

                  <div className="pt-2 text-[11px] text-gray-500 text-center leading-relaxed font-light">
                    Submitting this form creates an enquiry consultation. No payment is charged online until your package and travel dates are finalized.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Enquiry Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 z-40 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-medium">
            Starting from
          </span>
          <span className="font-sans text-xl font-extrabold text-[#0E1B2E] tracking-tight block">
            {formatPrice(pkg.price)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={generateWhatsAppLink(pkg.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#25D366] text-white rounded-xl shadow-md"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </a>
          <button
            onClick={scrollToBooking}
            className="bg-[#0E1B2E] text-[#C5A869] font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md cursor-pointer"
          >
            Book Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
