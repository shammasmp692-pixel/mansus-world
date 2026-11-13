import { useState, type FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/tours';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Dubai Holiday Package Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(undefined, {
      'Sender Name': name,
      'Email Address': email,
      'Phone / WhatsApp': phone,
      'Subject': subject,
      'Message Notes': message,
    });
    setSubmitted(true);
    window.open(link, '_blank');
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[44vh] min-h-[350px] bg-[#0E1B2E] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1920&q=80"
          alt="Contact Mansu's World"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-[#0E1B2E]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-center sm:text-left">
          <span className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold block mb-2">
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Contact Mansu's World Travel Desk
          </h1>
          <p className="mt-2 text-white/80 text-sm sm:text-base font-light max-w-xl">
            Our team is available to answer questions, customize day-wise holiday plans, and provide transparent package quotations.
          </p>
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between group hover:border-[#25D366]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] mb-5">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Direct WhatsApp
              </p>
              <h3 className="font-serif text-xl font-bold text-[#0E1B2E] mb-2">
                WhatsApp Consultation
              </h3>
              <p className="text-xs text-gray-600 font-light">
                The fastest way to reach us. Share travel dates, guest count, and flight timings.
              </p>
            </div>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#25D366] hover:text-[#20ba59] transition-colors"
            >
              Start WhatsApp Chat →
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between group hover:border-[#C5A869]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#C5A869]/15 flex items-center justify-center text-[#A88B4C] mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Telephone (Placeholder)
              </p>
              <h3 className="font-serif text-xl font-bold text-[#0E1B2E] mb-2">
                {COMPANY_INFO.phonePlaceholder}
              </h3>
              <p className="text-xs text-gray-600 font-light">
                Customer support for booking inquiries and travel planning consultations.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#0E1B2E]">
              Available Daily
            </span>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between group hover:border-[#C5A869]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#0E1B2E]/10 flex items-center justify-center text-[#0E1B2E] mb-5">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Email Address (Placeholder)
              </p>
              <h3 className="font-serif text-xl font-bold text-[#0E1B2E] mb-2 break-all">
                {COMPANY_INFO.emailPlaceholder}
              </h3>
              <p className="text-xs text-gray-600 font-light">
                Send formal group quotation requests or flight itineraries.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
              className="mt-6 inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#0E1B2E] hover:text-[#C5A869] transition-colors"
            >
              Send Email Message →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Office / Map Integration */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md">
            <span className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold block mb-2">
              Send an Enquiry
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E] mb-6">
              How May We Assist You?
            </h2>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0E1B2E]">
                  Message Prepared
                </h3>
                <p className="text-sm text-gray-600 font-light max-w-md mx-auto">
                  Your enquiry has been prepared and opened in WhatsApp. Our travel coordinator will assist you right away.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#0E1B2E] underline uppercase tracking-wider font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                    />
                  </div>
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
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition cursor-pointer"
                    >
                      <option value="Dubai Holiday Package Inquiry">Dubai Holiday Package Inquiry</option>
                      <option value="Dubai Signature City Tour">Dubai City Discovery Tour</option>
                      <option value="Arabian Desert Safari">Arabian Desert Safari</option>
                      <option value="Airport Transfer Booking">Airport Transfer Service</option>
                      <option value="Custom Multi-Day Vacation">Custom Vacation Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Your Message / Travel Notes
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details such as intended travel dates, number of guests, or special requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-gray-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A869]/50 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0E1B2E] hover:bg-[#16263D] text-[#C5A869] font-semibold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C5A869]" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-center text-xs text-gray-400 font-light pt-1">
                  We look forward to helping you experience the best of Dubai.
                </p>
              </form>
            )}
          </div>

          {/* Right: Office Address & Google Maps Placeholder (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0E1B2E] mb-4">
                Office & Hours (Placeholders)
              </h3>
              <div className="space-y-4 text-sm text-gray-600 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-medium">Location:</strong>
                    {COMPANY_INFO.officeAddressPlaceholder}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block font-medium">Customer Consultation Hours:</strong>
                    Monday – Sunday: 09:00 AM – 09:00 PM (Gulf Standard Time)
                    <br />
                    <span className="text-xs text-[#25D366] font-semibold">
                      *WhatsApp enquiries active throughout the week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Dubai Downtown Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-80 bg-gray-100 relative">
              <iframe
                title="Dubai Location Placeholder"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.42847621455!2d55.2652887!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
