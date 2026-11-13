import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';
import CurrencySelector from './CurrencySelector';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Dubai Packages', path: '/packages' },
    { label: 'Destinations', path: '/#destinations' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#070F1B]/95 backdrop-blur-xl border-b border-[#C5A869]/25 shadow-2xl shadow-black/40 py-3.5'
          : 'bg-gradient-to-b from-[#070F1B]/90 via-[#070F1B]/40 to-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C5A869]/70 flex items-center justify-center bg-[#0E1B2E] group-hover:border-[#C5A869] transition-colors shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A869] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-[#C5A869] transition-colors whitespace-nowrap">
                MANSU'S WORLD
              </span>
              <span className="text-[7.5px] sm:text-[9px] tracking-[0.22em] sm:tracking-[0.28em] text-[#C5A869] font-medium uppercase -mt-0.5">
                TRAVEL & TOURISM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm tracking-wide transition-colors py-1 ${isLinkActive(link.path)
                    ? 'text-[#C5A869] font-medium'
                    : 'text-white/85 hover:text-[#C5A869]'
                  }`}
              >
                {link.label}
                {isLinkActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A869] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons & Currency Selector */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Currency Selector (Desktop) */}
            <CurrencySelector variant="navbar" />

            <Link
              to="/contact"
              className="text-xs uppercase tracking-wider px-4 py-2.5 rounded-full border border-[#C5A869]/80 text-[#C5A869] hover:bg-[#C5A869] hover:text-[#0E1B2E] font-semibold transition-all duration-300"
            >
              Plan Your Trip
            </Link>

            <a
              href={generateWhatsAppLink(undefined, {
                Enquiry: "General travel inquiry from website navigation",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <CurrencySelector variant="navbar" />
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C5A869] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 bg-[#0E1B2E]/98 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fade-in-up">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
              Explore Mansu's World
            </p>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-serif tracking-wide py-2 border-b border-white/5 transition-colors ${isLinkActive(link.path)
                      ? 'text-[#C5A869] font-semibold'
                      : 'text-white/90 hover:text-[#C5A869]'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Currency Selector Grid */}
            <div className="pt-4 border-t border-white/10">
              <CurrencySelector variant="mobile" />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold shadow-lg text-sm tracking-wide"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 border border-[#C5A869] text-[#C5A869] py-3 rounded-xl font-medium text-sm tracking-wide hover:bg-[#C5A869]/10"
            >
              <span>Contact Us</span>
            </Link>
            <p className="text-center text-xs text-white/50 pt-1 italic">
              "{COMPANY_INFO.tagline}"
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
