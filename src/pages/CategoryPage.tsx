import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Clock,
  Users,
  ArrowUpDown,
  MessageCircle,
  Compass,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { useCurrency } from '../context/CurrencyContext';

export default function CategoryPage() {
  const [searchParams] = useSearchParams();
  const { formatPrice } = useCurrency();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredPackages = useMemo(() => {
    let list = TOUR_PACKAGES;

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    if (sortBy === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Page Hero Banner */}
      <section className="relative h-[44vh] min-h-[350px] bg-[#0E1B2E] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80"
          alt="Dubai Holiday Packages"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-[#0E1B2E]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-widest mb-3">
            <Link to="/" className="hover:text-[#C5A869]">Home</Link>
            <span>/</span>
            <span className="text-[#C5A869] font-medium">Dubai Tour Packages</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2">
            Dubai Tour Packages
          </h1>

          <p className="max-w-2xl text-white/80 text-sm sm:text-base font-light">
            Carefully curated single-day excursions, desert safaris, and multi-day holiday packages designed for comfort and authentic discovery.
          </p>
        </div>
      </section>

      {/* Control Bar: Categories & Sorting */}
      <div className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'city', label: 'City Discovery' },
              { id: 'safari', label: 'Desert Safari' },
              { id: 'holiday', label: 'Multi-Day Holidays' },
              { id: 'transfers', label: 'Transfers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all shrink-0 cursor-pointer ${selectedCategory === tab.id
                    ? 'bg-[#0E1B2E] text-[#C5A869] shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Result Count & Sorter */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-xs text-gray-500 font-medium">
              Showing <strong className="text-gray-900">{filteredPackages.length}</strong> packages
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C5A869]"
              >
                <option value="default">Default Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <Compass className="w-12 h-12 text-[#C5A869] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#0E1B2E] mb-2">
              No Packages Match Selected Category
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              Our travel specialists create custom itineraries on request. Contact our desk for a personalized quotation.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-2.5 rounded-full bg-[#0E1B2E] text-[#C5A869] text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

                  {/* Badge */}
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

                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/95 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>{pkg.duration}</span>
                    <span className="text-white/40">•</span>
                    <Users className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>{pkg.maxGuests}</span>
                  </div>
                </div>

                {/* Body Content */}
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

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Package Highlights
                      </p>
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-medium mb-0.5">
                        Starting From
                      </span>
                      <span className="font-sans font-extrabold text-2xl text-[#0E1B2E] tracking-tight block">
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
                          Price: formatPrice(pkg.price),
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
        )}
      </div>
    </div>
  );
}
