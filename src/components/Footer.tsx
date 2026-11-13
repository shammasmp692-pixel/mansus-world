import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Compass,
  Clock,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { COMPANY_INFO, TOUR_PACKAGES } from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { useCurrency } from '../context/CurrencyContext';

export default function Footer() {
  const { formatPrice } = useCurrency();
  return (
    <footer className="bg-[#0E1B2E] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A869]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Trust Commitments Banner */}
      <div className="border-b border-white/10 bg-[#09121F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A869]/15 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#C5A869]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white font-semibold">Premium Travel</p>
                <p className="text-[11px] text-white/60">Curated Dubai Experiences</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A869]/15 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-[#C5A869]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white font-semibold">Customer Focused</p>
                <p className="text-[11px] text-white/60">Attentive Travel Planners</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A869]/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#C5A869]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white font-semibold">Prompt Communication</p>
                <p className="text-[11px] text-white/60">Fast WhatsApp Assistance</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A869]/15 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#C5A869]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white font-semibold">Bespoke Itineraries</p>
                <p className="text-[11px] text-white/60">Tailored to Your Schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A869] flex items-center justify-center bg-[#0E1B2E]">
                <Compass className="w-5 h-5 text-[#C5A869]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white block">
                  MANSU'S WORLD
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C5A869] font-medium uppercase block -mt-0.5">
                  TRAVEL & TOURISM
                </span>
              </div>
            </Link>

            <p className="text-sm italic text-[#C5A869] font-serif">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-sm text-white/70 leading-relaxed font-light">
              Mansu's World is a customer-focused travel and tourism brand dedicated to crafting memorable Dubai holiday experiences. From private sightseeing to desert safaris and multi-day vacations, we put your comfort first.
            </p>

            <div>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Mansu's World</span>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-white/75 hover:text-[#C5A869] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/75 hover:text-[#C5A869] transition-colors">
                  Dubai Packages
                </Link>
              </li>
              <li>
                <Link to="/#destinations" className="text-white/75 hover:text-[#C5A869] transition-colors">
                  Popular Attractions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/75 hover:text-[#C5A869] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/75 hover:text-[#C5A869] transition-colors">
                  Contact & Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Dubai Packages (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
              Featured Packages
            </h3>
            <ul className="space-y-3 text-sm">
              {TOUR_PACKAGES.slice(0, 4).map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to={`/package/${pkg.slug}`}
                    className="text-white/75 hover:text-[#C5A869] transition-colors block group"
                  >
                    <span className="block font-medium group-hover:text-white transition-colors truncate">
                      {pkg.title}
                    </span>
                    <span className="text-[11px] text-[#C5A869]">
                      {pkg.duration} • From <strong className="font-sans font-bold">{formatPrice(pkg.price)}</strong>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
              Connect With Us
            </h3>
            <div className="space-y-3.5 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <span className="font-light">{COMPANY_INFO.officeAddressPlaceholder}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A869] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailPlaceholder}`} className="hover:text-[#C5A869] transition-colors">
                  {COMPANY_INFO.emailPlaceholder}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A869] shrink-0" />
                <span className="font-light">{COMPANY_INFO.phonePlaceholder}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium text-white"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#070E18] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Mansu's World. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Booking
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Enquiry Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
