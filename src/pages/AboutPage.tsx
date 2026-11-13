import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[48vh] min-h-[380px] bg-[#0E1B2E] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="About Mansu's World"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-[#0E1B2E]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A869] font-semibold mb-3">
            <span>About Mansu's World</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Travel Philosophy & Commitment
          </h1>
          <p className="mt-2 text-lg text-white/85 italic font-serif">
            "{COMPANY_INFO.tagline}"
          </p>
        </div>
      </section>

      {/* Introduction to Mansu's World */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-semibold block">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B2E] leading-tight">
              A Modern Travel Brand Dedicated to Dubai Explorations
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed font-light text-base sm:text-lg">
              <p>
                <strong>Mansu’s World</strong> is a premium travel and tourism company established to offer thoughtful, well-paced, and truly welcoming holiday experiences in Dubai and the wider UAE.
              </p>
              <p>
                We recognize that visiting a world-renowned destination like Dubai should be an inspiring, relaxing journey—not an exhausting rush between crowded buses and rigid itineraries. That is why our focus is firmly centered on personal attention, private transportation, and customized day-wise itineraries that respect each traveler’s individuality.
              </p>
              <p>
                Whether you are planning your first vacation to marvel at the Burj Khalifa and Palm Jumeirah, embarking on a desert safari, or organizing a multi-day family retreat, we take pride in coordinating every detail with clarity and care.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&q=80"
                alt="Dubai Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <p className="font-serif text-xl font-bold">Uncompromising Care</p>
                  <p className="text-xs text-white/80 font-light mt-1">
                    Every guest is welcomed with attentive support and private comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Travel Philosophy */}
      <section className="py-20 lg:py-28 bg-[#EFE9DF]/50 border-y border-[#DDD4C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B4C] font-semibold block mb-2">
              Our Perspective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B2E] tracking-tight">
              Our Travel Philosophy
            </h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base font-light">
              We craft travel experiences based on four foundational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.philosophy.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A869]/15 flex items-center justify-center text-[#A88B4C] font-serif font-bold text-lg">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0E1B2E]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Customer Satisfaction */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E1B2E] text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-semibold block mb-3">
              Our Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Commitment to Customer Satisfaction
            </h2>
            <div className="space-y-4 text-white/80 font-light leading-relaxed text-base sm:text-lg mb-8">
              <p>
                At Mansu’s World, we measure success not by volume, but by the genuine smiles, ease, and comfort of the guests we host.
              </p>
              <p>
                We do not believe in hidden costs, rigid schedules, or leaving travelers stranded with unanswered questions. When you enquire about a package, our team takes the time to understand your flight timings, dietary requirements, and specific preferences to make sure everything runs seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">Punctual private airport & tour pickups</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">Clear, transparent quotations prior to booking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">Direct WhatsApp access throughout your stay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E1B2E] mb-4">
            Plan Your Vacation with Mansu's World
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 font-light text-sm sm:text-base">
            Let us know what you envision for your Dubai trip, and our team will craft a personalized quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0E1B2E] text-[#C5A869] font-semibold text-xs uppercase tracking-wider hover:bg-[#16263D] transition-all"
            >
              Explore Packages
            </Link>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
