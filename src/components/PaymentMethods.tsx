import { ShieldCheck, Lock, CreditCard, Sparkles } from 'lucide-react';

export default function PaymentMethods() {
  const cardPayments = [
    {
      name: 'Visa',
      category: 'Credit & Debit',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 48 16" fill="none">
          <path
            d="M19.16 0.5L12.56 15.5H8.22L5.02 3.32C4.83 2.58 4.65 2.3 4.05 1.98C3.07 1.46 1.45 0.98 0 0.66L0.1 0.5H6.96C7.84 0.5 8.63 1.08 8.82 2.08L10.51 11.08L14.73 0.5H19.16ZM36.03 10.54C36.05 6.52 30.43 6.3 30.47 4.54C30.48 4 30.98 3.42 32.07 3.28C32.61 3.2 34.09 3.14 35.73 3.9L36.38 0.88C35.5 0.56 34.34 0.26 32.86 0.26C28.85 0.26 26.02 2.38 26 5.42C25.96 7.68 27.99 8.94 29.54 9.68C31.13 10.46 31.67 10.96 31.66 11.66C31.65 12.72 30.38 13.2 29.21 13.22C27.17 13.24 26 12.68 25.04 12.24L24.36 15.42C25.34 15.86 27.15 16.24 29.01 16.26C33.26 16.26 36.01 14.16 36.03 10.54ZM46.54 15.5H50.41L47.01 0.5H43.43C42.64 0.5 41.97 0.96 41.68 1.66L35.6 15.5H39.91L40.77 13.12H46.03L46.54 15.5ZM41.97 9.82L44.15 3.86L45.4 9.82H41.97ZM25.07 0.5L21.68 15.5H17.56L20.95 0.5H25.07Z"
            fill="#1A1F71"
          />
        </svg>
      ),
    },
    {
      name: 'Mastercard',
      category: 'Credit & Debit',
      svg: (
        <svg className="h-7 w-auto" viewBox="0 0 36 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="#EB001B" />
          <circle cx="25" cy="11" r="11" fill="#F79E1B" />
          <path
            d="M18 3.56A10.97 10.97 0 0 0 13.8 11c0 2.98 1.18 5.68 3.1 7.65 1.92-1.97 3.1-4.67 3.1-7.65 0-2.98-1.18-5.68-3.1-7.65Z"
            fill="#FF5F00"
          />
        </svg>
      ),
    },
    {
      name: 'American Express',
      category: 'Charge & Credit',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 54 20" fill="none">
          <rect width="54" height="20" rx="3" fill="#006FCF" />
          <text
            x="27"
            y="14"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            AMEX
          </text>
        </svg>
      ),
    },
    {
      name: 'RuPay',
      category: 'Indian Debit/Credit',
      svg: (
        <svg className="h-5 w-auto" viewBox="0 0 70 20" fill="none">
          <path d="M0 16L6 2H16C21 2 23 5 21 9C19.5 12 16.5 13 13 13H8L6.5 16H0ZM8.5 9.5H12C14 9.5 15 8.5 15.5 7C16 5.5 15 4.5 13.5 4.5H9.5L8.5 9.5Z" fill="#097939" />
          <path d="M21 16L27 2H33L27 16H21Z" fill="#F37023" />
          <path d="M42 2C46 2 48 4 47 7L43 16H37L40.5 8C41 6.5 40 5 38.5 5H36L31.5 16H25.5L31.5 2H42Z" fill="#097939" />
          <polygon points="52,2 48,16 54,16 58,2" fill="#F37023" />
          <polygon points="61,2 57,16 63,16 67,2" fill="#097939" />
        </svg>
      ),
    },
  ];

  const digitalPayments = [
    {
      name: 'UPI',
      subtitle: 'Instant Transfer',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 50 20" fill="none">
          <path d="M12 2L4 18H10L14 10L18 18H24L16 2H12Z" fill="#097939" />
          <path d="M22 2L30 18H26L24 14H18L22 2Z" fill="#F37023" />
          <text x="32" y="15" fill="#1B2A4A" fontSize="12" fontWeight="800" fontFamily="sans-serif">
            UPI
          </text>
        </svg>
      ),
    },
    {
      name: 'Google Pay',
      subtitle: 'Fast Checkout',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 56 22" fill="none">
          <path
            d="M8.5 11.2c0-.7-.1-1.3-.2-1.9H0v3.7h4.8c-.2 1.1-.9 2.1-1.8 2.7v2.2h2.9c1.7-1.6 2.6-3.9 2.6-6.7z"
            fill="#4285F4"
          />
          <path
            d="M0 17.5c2.3 0 4.2-.8 5.6-2.1l-2.9-2.2c-.8.5-1.7.8-2.7.8-2.1 0-3.9-1.4-4.5-3.3H-7.5v2.3C-6.1 15.8-3.2 17.5 0 17.5z"
            fill="#34A853"
          />
          <path
            d="M-4.5 10.7c-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6V5.2H-7.5C-8.1 6.4-8.5 7.7-8.5 9.1s.4 2.7 1 3.9l3-2.3z"
            fill="#FBBC05"
          />
          <path
            d="M0 4.3c1.2 0 2.3.4 3.2 1.3l2.4-2.4C4.2 1.9 2.3 1.1 0 1.1 -3.2 1.1 -6.1 2.8 -7.5 5.2l3 2.3C-3.9 5.7 -2.1 4.3 0 4.3z"
            fill="#EA4335"
          />
          <text x="14" y="15" fill="#222222" fontSize="12" fontWeight="700" fontFamily="sans-serif">
            Pay
          </text>
        </svg>
      ),
    },
    {
      name: 'Apple Pay',
      subtitle: 'One-Touch Pay',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 52 22" fill="none">
          <path
            d="M6.8 5.7c-.5.6-1.3 1-2 1-.1-.7.2-1.5.7-2.1.5-.6 1.3-1 2-.9.1.7-.2 1.4-.7 2m.7 1.1c-1.1 0-2.1.7-2.6.7-.6 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.2-.3 5.4.9 7.1.6.9 1.3 1.8 2.2 1.8.9 0 1.2-.6 2.3-.6 1.1 0 1.4.6 2.3.6 1 0 1.6-.9 2.2-1.7.7-1 1-2 1-2-.1 0-1.9-.7-1.9-2.9 0-1.8 1.4-2.7 1.5-2.8-.8-1.2-2.1-1.4-2.7-1.4"
            fill="#111111"
          />
          <text x="15" y="16" fill="#111111" fontSize="12" fontWeight="700" fontFamily="sans-serif">
            Pay
          </text>
        </svg>
      ),
    },
    {
      name: 'PhonePe',
      subtitle: 'UPI & Wallet',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 54 22" fill="none">
          <circle cx="11" cy="11" r="10" fill="#5F259F" />
          <path
            d="M10 6v10m0-6h3.5a2 2 0 0 1 0 4H10m3 0l3 4"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="24" y="15" fill="#5F259F" fontSize="10.5" fontWeight="800" fontFamily="sans-serif">
            PhonePe
          </text>
        </svg>
      ),
    },
  ];

  const uaeOptions = [
    {
      name: 'Tabby',
      badge: 'Split in 4',
      description: 'Buy Now, Pay Later',
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 68 22" fill="none">
          <rect width="68" height="22" rx="4" fill="#3EEDAB" />
          <text
            x="34"
            y="15"
            fill="#052B1E"
            fontSize="12"
            fontWeight="900"
            letterSpacing="0.5"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            tabby
          </text>
        </svg>
      ),
    },
    {
      name: 'UAE Cards & Bank Transfer',
      badge: 'Local UAE',
      description: 'Debit & Credit Cards',
      svg: (
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E1B2E]">
          <span className="text-sm">🇦🇪</span>
          <span>UAE Cards</span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#F6F3ED] border-t border-[#E8DEC8]/80 py-16 lg:py-20 text-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A869]/15 border border-[#C5A869]/30 text-[#A88B4C] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <Lock className="w-3 h-3" />
            <span>Trusted & Verified Billing</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E1B2E] tracking-tight mb-3">
            We Accept Multiple Payment Methods
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-[#A88B4C] font-normal mb-2">
            "Secure, Convenient & Flexible Payments for Your Journey."
          </p>

          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-xl mx-auto">
            Whether booking from India, the UAE, or internationally, we provide reliable and flexible payment options for confirmed holiday itineraries.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. Credit & Debit Cards */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A88B4C]">
                Credit & Debit Cards
              </span>
              <CreditCard className="w-4 h-4 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {cardPayments.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF9F6] border border-gray-100 hover:border-[#C5A869]/50 transition-colors h-16"
                  title={item.name}
                >
                  {item.svg}
                  <span className="text-[10px] text-gray-500 font-medium mt-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 mt-4 text-center font-light">
              Supported in INR, AED & USD via secure encrypted gateway invoices.
            </p>
          </div>

          {/* 2. Digital & UPI Payments */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A88B4C]">
                Digital & UPI Payments
              </span>
              <Sparkles className="w-4 h-4 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {digitalPayments.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF9F6] border border-gray-100 hover:border-[#C5A869]/50 transition-colors h-16"
                  title={item.name}
                >
                  {item.svg}
                  <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 mt-4 text-center font-light">
              Instant zero-fee domestic transfers across India via verified payment links.
            </p>
          </div>

          {/* 3. UAE & Flexible Options */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A88B4C]">
                UAE & Flexible Payments
              </span>
              <ShieldCheck className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-3">
              {uaeOptions.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF9F6] border border-gray-100 hover:border-[#C5A869]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">{item.svg}</div>
                    <div>
                      <p className="text-xs font-bold text-[#0E1B2E]">{item.name}</p>
                      <p className="text-[10px] text-gray-500 font-light">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold bg-[#C5A869]/15 text-[#A88B4C] px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-500 mt-4 text-center font-light">
              UAE resident split installment options (Tabby) and local card processing.
            </p>
          </div>
        </div>

        {/* Security & Verification Disclaimer */}
        <div className="mt-10 pt-6 border-t border-[#DDD4C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span>256-Bit SSL Encrypted Transactions • Official Travel Agency Invoicing</span>
          </div>

          <p className="text-[11px] text-gray-500 italic text-center sm:text-right">
            *Payment options are activated upon itinerary confirmation and customized invoice generation.
          </p>
        </div>
      </div>
    </section>
  );
}

