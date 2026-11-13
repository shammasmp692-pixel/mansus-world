// ============================================================
// MANSU'S WORLD — TRAVEL & TOURISM DATA
// All package details, pricing placeholders, and company information
// ============================================================

export interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  type: 'private' | 'luxury' | 'adventure' | 'holiday';
  price: number;
  priceNote: string;
  currency: string;
  duration: string;
  hotelAccommodation: string;
  maxGuests: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  dayItinerary: DayItinerary[];
  included: string[];
  excluded: string[];
  importantInfo: string[];
  faqs: { question: string; answer: string }[];
  featured: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'dubai-signature-city-tour',
    slug: 'dubai-signature-half-day-tour',
    title: 'Dubai Signature City Discovery',
    category: 'Dubai City Tours',
    categorySlug: 'dubai-packages',
    type: 'private',
    price: 10500, // Base price in INR
    priceNote: 'Starting price placeholder (subject to group size & season)',
    currency: 'INR',
    duration: '5 - 6 Hours',
    hotelAccommodation: 'Day excursion — hotel pickup and drop-off included',
    maxGuests: '1 to 6 Guests',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80',
      'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=1200&q=80',
    ],
    shortDescription: 'An elegant private introduction to Dubai’s iconic skyline, scenic waterfronts, and timeless heritage districts.',
    overview: 'Experience the contrasts of modern architectural wonders and historic Emirati charm. Crafted for visitors who desire a comfortable, privately paced exploration of Dubai’s defining landmarks with dedicated chauffeur guidance.',
    highlights: [
      'Dubai Marina promenade with scenic yacht harbor vistas',
      'Drive along Palm Jumeirah with photo stop at Atlantis, The Palm',
      'View of the sail-shaped Burj Al Arab from Jumeirah Beach',
      'Visit to Downtown Dubai and the foot of Burj Khalifa',
      'Cultural walk through Old Dubai and the Gold & Spice Souks',
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Full Excursion Schedule',
        activities: [
          '09:00 AM — Private pickup from your Dubai hotel or residence',
          '09:30 AM — Dubai Marina Walk: Stroll alongside the skyscraper canal',
          '10:30 AM — Palm Jumeirah: Scenic island drive and Atlantis coastal stop',
          '11:30 AM — Souk Madinat Jumeirah & Burj Al Arab photo opportunity',
          '12:30 PM — Downtown Dubai: Burj Khalifa view and Dubai Mall surroundings',
          '01:30 PM — Traditional Abra ride across Dubai Creek and souk exploration',
          '02:30 PM — Comfortable return transfer to your hotel',
        ],
      },
    ],
    included: [
      'Private air-conditioned vehicle throughout the tour',
      'Hotel pickup and drop-off within Dubai city limits',
      'Professional chauffeur / host',
      'Complimentary chilled bottled water',
      'Flexible departure time upon request',
    ],
    excluded: [
      'Attraction entry tickets (available upon request)',
      'Meals and personal purchases',
      'Gratuities (optional)',
    ],
    importantInfo: [
      'Modest dress is suggested when visiting traditional souk markets.',
      'Child safety seats can be arranged on request.',
      'Timing can be customized to suit your personal schedule.',
    ],
    faqs: [
      {
        question: 'Can we adjust the pickup time?',
        answer: 'Yes, as a private experience, pickup times can be adjusted according to your preference.',
      },
      {
        question: 'Can we add Burj Khalifa observation deck tickets?',
        answer: 'Yes, entry tickets can be added to your booking enquiry and arranged prior to your arrival.',
      },
    ],
    featured: true,
  },
  {
    id: 'dubai-full-day-luxury-experience',
    slug: 'dubai-full-day-luxury-experience',
    title: 'Dubai Full-Day Luxury Modern Tour',
    category: 'Dubai City Tours',
    categorySlug: 'dubai-packages',
    type: 'luxury',
    price: 26000, // Base price in INR
    priceNote: 'Starting price placeholder (customizable itinerary)',
    currency: 'INR',
    duration: '8 - 10 Hours',
    hotelAccommodation: 'Day excursion — hotel pickup and drop-off included',
    maxGuests: '1 to 4 Guests',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1200&q=80',
      'https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=1200&q=80',
    ],
    shortDescription: 'The comprehensive modern Dubai journey exploring the Museum of the Future, Dubai Frame, Palm Jumeirah, and Downtown.',
    overview: 'An extensive, beautifully paced day tour that celebrates Dubai’s futuristic vision. Take in the city’s newest architectural feats, premier lifestyle destinations, and world-class waterfronts with dedicated VIP transportation.',
    highlights: [
      'Exterior marveling and photo stop at Museum of the Future',
      'Panoramic sightseeing at the architectural Dubai Frame',
      'Palm Jumeirah scenic drive and The Pointe promenade',
      'Downtown Dubai, Dubai Opera district, and Burj Khalifa',
      'Relaxed afternoon dining stop at a recommended venue of your choice',
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Complete Modern Dubai Itinerary',
        activities: [
          '09:30 AM — Hotel departure in a premium vehicle',
          '10:15 AM — Dubai Frame: Panoramic perspectives connecting old and new Dubai',
          '11:45 AM — Museum of the Future: Photo stop at the world’s most beautiful building',
          '01:00 PM — Leisure lunch break at Dubai Marina or Jumeirah',
          '02:30 PM — Palm Jumeirah & Atlantis scenic drive',
          '04:00 PM — Souk Madinat Jumeirah Arabian bazaar atmosphere',
          '05:30 PM — Downtown Dubai: Burj Khalifa and Dubai Fountain evening atmosphere',
          '07:00 PM — Return transfer to your residence',
        ],
      },
    ],
    included: [
      'Full-day private luxury vehicle service with driver',
      'Door-to-door hotel transfers',
      'Chilled refreshments on board',
      'Dedicated travel coordinator assistance',
    ],
    excluded: [
      'Attraction entry admissions unless selected as add-ons',
      'Meals, beverages, and personal expenses',
    ],
    importantInfo: [
      'Comfortable walking shoes are recommended.',
      'Itinerary sequence can be adjusted based on traffic or your interests.',
    ],
    faqs: [
      {
        question: 'Are attraction tickets included in the base price?',
        answer: 'Base pricing covers private vehicle, chauffeur, and logistics. Entry tickets can be bundled according to your preferred schedule.',
      },
    ],
    featured: true,
  },
  {
    id: 'dubai-arabian-desert-safari',
    slug: 'dubai-evening-desert-safari',
    title: 'Arabian Desert Safari with Sunset Dinner',
    category: 'Desert Safari',
    categorySlug: 'dubai-packages',
    type: 'adventure',
    price: 5500, // Base price in INR
    priceNote: 'Starting price placeholder per person',
    currency: 'INR',
    duration: '6 Hours (Afternoon to Evening)',
    hotelAccommodation: 'Evening excursion — pickup & drop-off included',
    maxGuests: 'Individual & Private Group Bookings',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&q=80',
      'https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1200&q=80',
    ],
    shortDescription: 'Golden dune bashing, gentle camel treks, breathtaking Arabian sunset views, and a traditional starlit camp dinner.',
    overview: 'Leave the towering skyscrapers behind and venture into the golden sands of the Arabian desert. Enjoy an exhilarating 4x4 dune journey, capture sunset memories across the dunes, and unwind at a traditional desert camp with hospitality and evening dining.',
    highlights: [
      'Exhilarating 4x4 desert dune driving with licensed desert pilots',
      'Golden sunset photography stop on pristine dunes',
      'Short camel ride experience',
      'Sandboarding down desert slopes',
      'Open-air barbecue buffet with vegetarian and grilled specialties',
      'Traditional cultural performances under desert stars',
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Desert Afternoon to Evening Program',
        activities: [
          '03:00 PM — 4x4 pickup from your hotel',
          '04:00 PM — Arrival at desert staging point for tire deflation',
          '04:30 PM — Guided dune bashing through the red dunes',
          '05:30 PM — Sunset photo stop & sandboarding',
          '06:15 PM — Arrival at the desert camp with traditional welcome',
          '07:00 PM — Cultural dance shows & BBQ dinner buffet',
          '09:00 PM — Scenic return drive to Dubai',
        ],
      },
    ],
    included: [
      '4x4 vehicle pickup and drop-off',
      'Dune bashing and sandboarding',
      'Sunset photography opportunity',
      'Barbecue buffet dinner with soft drinks, tea, and coffee',
      'Camp entertainment and cultural performances',
    ],
    excluded: [
      'Quad biking or dune buggy rental (available as on-site add-ons)',
      'Souvenir photos and personal purchases',
    ],
    importantInfo: [
      'Not recommended for expectant mothers or guests with spinal conditions.',
      'Casual, comfortable clothing and sandals/sneakers are recommended.',
    ],
    faqs: [
      {
        question: 'Is dune bashing mandatory?',
        answer: 'No, guests preferring a gentler pace may request direct transit to the camp.',
      },
    ],
    featured: true,
  },
  {
    id: 'dubai-4day-holiday-package',
    slug: 'dubai-classic-4day-holiday-package',
    title: '4-Day Classic Dubai Holiday Package',
    category: 'Holiday Packages',
    categorySlug: 'dubai-packages',
    type: 'holiday',
    price: 45000, // Base price in INR
    priceNote: 'Starting price placeholder per person (double occupancy basis)',
    currency: 'INR',
    duration: '4 Days / 3 Nights',
    hotelAccommodation: '4-Star or 5-Star City Hotel (Selected on Enquiry with Daily Breakfast)',
    maxGuests: 'Couples, Families & Private Groups',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1200&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
    ],
    shortDescription: 'A complete 4-day curated holiday combining private airport transfers, modern city highlights, and an evening desert safari.',
    overview: 'Our signature multi-day itinerary designed for first-time visitors to Dubai. We handle every detail from your arrival at Dubai International Airport to guided city explorations, desert adventures, and leisure time for world-class shopping.',
    highlights: [
      'Private airport meet, greet, and transfers on arrival and departure',
      '3 nights accommodation at selected 4-star or 5-star partner hotel',
      'Daily breakfast buffet included',
      'Half-day private Dubai city exploration tour',
      'Evening desert safari with dune bashing & barbecue dinner',
      'Dedicated Mansu’s World itinerary support',
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Hotel Check-in',
        activities: [
          'Arrival at Dubai International Airport (DXB)',
          'Private transfer to your chosen hotel accommodation',
          'Hotel check-in and leisure time to relax or explore nearby surroundings',
          'Evening stroll around Dubai Marina or Downtown at your own pace',
        ],
      },
      {
        day: 2,
        title: 'Dubai City Sightseeing Tour',
        activities: [
          'Breakfast at the hotel',
          '09:00 AM — Private city discovery: Marina, Palm Jumeirah, Burj Al Arab view',
          '01:00 PM — Visit to Dubai Mall and views of Burj Khalifa',
          'Evening at leisure to witness the famous Dubai Fountain show',
        ],
      },
      {
        day: 3,
        title: 'Morning Leisure & Evening Desert Safari',
        activities: [
          'Breakfast at hotel & relaxed morning for shopping or beach visit',
          '03:00 PM — 4x4 desert safari pickup',
          'Dune bashing, camel ride, sunset photography, and BBQ dinner under the stars',
          '09:30 PM — Return to hotel',
        ],
      },
      {
        day: 4,
        title: 'Souvenir Exploration & Airport Departure',
        activities: [
          'Breakfast at the hotel followed by check-out',
          'Time for last-minute shopping at Dubai’s traditional souks or malls',
          'Private transfer to Dubai International Airport for departure flight',
        ],
      },
    ],
    included: [
      '3 Nights hotel stay with breakfast (customizable property category)',
      'Round-trip airport transfers (DXB Airport)',
      'Half-day private Dubai city tour',
      'Evening desert safari with BBQ dinner and transfers',
      'All tourism taxes & VAT on included services',
    ],
    excluded: [
      'International airfare',
      'UAE tourist visa (can be arranged on request)',
      'Personal expenses, room service, and optional tips',
    ],
    importantInfo: [
      'Hotel options and room tiers will be confirmed upon quotation based on your travel dates.',
      'Extra nights or attraction add-ons can be incorporated seamlessly.',
    ],
    faqs: [
      {
        question: 'Can we change the hotel or upgrade to a 5-star resort?',
        answer: 'Yes! We customize hotel selections from premier city hotels to beachfront luxury resorts according to your budget.',
      },
      {
        question: 'Can this package be extended to 5 or 7 days?',
        answer: 'Absolutely. We will tailor the day-wise itinerary to match your exact flight schedule.',
      },
    ],
    featured: true,
  },
  {
    id: 'dubai-family-adventure-package',
    slug: 'dubai-family-adventure-5days',
    title: '5-Day Dubai Family & Theme Park Getaway',
    category: 'Holiday Packages',
    categorySlug: 'dubai-packages',
    type: 'holiday',
    price: 60000, // Base price in INR
    priceNote: 'Starting price placeholder per adult (family rooming options available)',
    currency: 'INR',
    duration: '5 Days / 4 Nights',
    hotelAccommodation: 'Family-friendly 4-Star or 5-Star Hotel with Breakfast',
    maxGuests: 'Families & Multi-generation Travelers',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80',
    ],
    shortDescription: 'Tailored for families: city highlights, desert safari, and theme park excitement planned for travelers of all ages.',
    overview: 'A relaxed, family-centric itinerary balancing Dubai’s spectacular attractions with child-friendly pacing and spacious transfers.',
    highlights: [
      '4 nights family accommodation with breakfast',
      'Airport pickups and drop-offs',
      'Private family city highlights tour',
      'Family-safe desert safari with camp dinner',
      'Flexible theme park / waterpark day excursion options',
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome to Dubai',
        activities: ['Airport pickup, hotel check-in, and relaxed evening'],
      },
      {
        day: 2,
        title: 'Family City Tour & Aquarium Exploration',
        activities: ['Morning city highlights followed by Dubai Aquarium & Underwater Zoo visit'],
      },
      {
        day: 3,
        title: 'Desert Dunes & Arabian Evening',
        activities: ['Afternoon family desert adventure with gentle dune drive, camel ride, and BBQ dinner'],
      },
      {
        day: 4,
        title: 'Theme Park or Waterpark Day',
        activities: ['Dedicated day at your choice of Aquaventure, Wild Wadi, or Dubai Parks & Resorts'],
      },
      {
        day: 5,
        title: 'Farewell Dubai Departure',
        activities: ['Hotel check-out and private airport transfer'],
      },
    ],
    included: [
      '4 Nights hotel stay with breakfast',
      'Airport transfers',
      'Family city tour',
      'Desert safari with dinner',
    ],
    excluded: [
      'Theme park entry tickets (bundled upon selection)',
      'Flights and visa',
    ],
    importantInfo: [
      'Child booster seats and stroller-friendly logistics accommodated upon request.',
    ],
    faqs: [
      {
        question: 'Are theme park tickets included?',
        answer: 'We customize ticket inclusion based on which theme park your family prefers to visit.',
      },
    ],
    featured: false,
  },
  {
    id: 'dubai-private-airport-transfers',
    slug: 'dubai-private-airport-transfer-service',
    title: 'Dubai Private Airport Chauffeur Transfer',
    category: 'Transfers',
    categorySlug: 'dubai-packages',
    type: 'private',
    price: 4500, // Base price in INR
    priceNote: 'Starting price placeholder per vehicle (DXB to Dubai Hotels)',
    currency: 'INR',
    duration: 'Direct Point-to-Point',
    hotelAccommodation: 'Direct private transit between airport & hotel',
    maxGuests: '1 to 6 Passengers with Luggage',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
      'https://images.unsplash.com/photo-1690313758173-729edb720708?w=1200&q=80',
      'https://images.unsplash.com/photo-1552561018-5fea54c08479?w=1200&q=80',
      'https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?w=1200&q=80',
    ],
    shortDescription: 'Punctual, private airport transfers in modern, air-conditioned vehicles with flight tracking and meet-and-greet service.',
    overview: 'Arrive in Dubai with complete peace of mind. Your dedicated chauffeur tracks your flight status and welcomes you at the arrival terminal with luggage assistance.',
    highlights: [
      'Meet and greet service at airport terminal with personalized name sign',
      'Active flight tracking to adjust for delays at no extra fee',
      'Clean, comfortable air-conditioned vehicles',
      'Luggage assistance and direct transit to your hotel lobby',
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Chauffeur Service',
        activities: [
          'Flight monitored in real-time',
          'Chauffeur ready in arrival terminal with guest name placard',
          'Luggage assistance and direct private transfer to destination',
        ],
      },
    ],
    included: [
      'Private vehicle transfer',
      'Up to 60 minutes complimentary waiting time after landing',
      'Flight tracking',
      'Tolls and parking fees',
    ],
    excluded: [
      'Excess waiting time beyond flight landing window',
      'Gratuities',
    ],
    importantInfo: [
      'Please provide your arrival flight number and carrier at the time of booking.',
    ],
    faqs: [
      {
        question: 'What happens if our flight is delayed?',
        answer: 'Our operations team tracks your flight in real time and automatically reschedules your driver without penalty.',
      },
    ],
    featured: false,
  },
];

// ==================== POPULAR DESTINATIONS ====================
export interface Destination {
  name: string;
  tagline: string;
  image: string;
  description: string;
}

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    name: 'Burj Khalifa & Downtown',
    tagline: 'The Pinnacle of Modern Dubai',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
    description: 'Home to the world’s tallest tower, the Dubai Fountain spectacle, and the world’s most visited shopping destination.',
  },
  {
    name: 'Dubai Marina & JBR',
    tagline: 'Waterfront Luxury Living',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description: 'A dazzling waterfront skyline with luxury yacht marinas, seaside promenade dining, and golden beaches.',
  },
  {
    name: 'Palm Jumeirah Island',
    tagline: 'The World-Famous Palm Archipelago',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80',
    description: 'An iconic man-made palm archipelago offering world-renowned luxury resorts, fine dining, and coastal views.',
  },
  {
    name: 'Museum of the Future',
    tagline: 'An Architectural Masterpiece',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800&q=80',
    description: 'A visionary architectural wonder adorned with Arabic calligraphy, exploring the horizons of tomorrow.',
  },
  {
    name: 'Dubai Frame & Zabeel Park',
    tagline: 'Connecting Heritage with the Future',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80',
    description: 'A 150-meter-tall golden observatory framing vistas of historic Old Dubai on one side and the futuristic skyline on the other.',
  },
  {
    name: 'The Arabian Desert Dunes',
    tagline: 'Golden Sands & Starlit Nights',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80',
    description: 'Endless rolling red dunes offering serene sunsets, thrilling 4x4 dune journeys, and starlit desert camps.',
  },
];

// ==================== LUXURY HOTELS & RESORTS ====================
export interface LuxuryHotel {
  name: string;
  category: string;
  location: string;
  image: string;
  highlights: string[];
  description: string;
}

export const LUXURY_HOTELS: LuxuryHotel[] = [
  {
    name: 'Atlantis The Royal & The Palm',
    category: 'Ultra-Luxury Waterfront Resort',
    location: 'Palm Jumeirah Island',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=85',
    highlights: ['Skyblaze Fountain & Rooftop Pools', 'Celebrity Chef Dining', 'Private Beach Access'],
    description: 'An architectural marvel redefining contemporary luxury with horizon infinity pools, private cabanas, and world-class culinary experiences.',
  },
  {
    name: 'Burj Al Arab Jumeirah',
    category: '7-Star Iconic Landmark',
    location: 'Jumeirah Beach Coast',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&auto=format&fit=crop&q=85',
    highlights: ['Duplex Luxury Suites', 'Dedicated Private Butler', 'The Terrace Infinity Pool'],
    description: 'The world’s most recognizable sail-shaped hotel offering opulent gold-leaf suites, bespoke private chauffeur transfers, and legendary hospitality.',
  },
  {
    name: 'Armani Hotel Dubai',
    category: 'Haute Couture Downtown Stay',
    location: 'Burj Khalifa, Downtown Dubai',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&auto=format&fit=crop&q=85',
    highlights: ['Direct Access to Burj Khalifa', 'Giorgio Armani Design', 'Dubai Fountain Views'],
    description: 'Elegantly conceived by Giorgio Armani inside Burj Khalifa, delivering warm Italian elegance, minimalist sophistication, and direct Downtown access.',
  },
  {
    name: 'Bab Al Shams Desert Resort',
    category: 'Luxury Oasis & Heritage Retreat',
    location: 'Al Qudra Desert Dunes',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&auto=format&fit=crop&q=85',
    highlights: ['Desert Infinity Pool Overlooking Dunes', 'Falconry & Stargazing', 'Al Hadheerah Dining'],
    description: 'A tranquil desert sanctuary tucked amidst rolling golden sand dunes, offering serene luxury, authentic Arabian heritage, and unforgettable sunsets.',
  },
];

// ==================== TESTIMONIALS / TRAVELER REFLECTIONS ====================
export interface Testimonial {
  name: string;
  location: string;
  trip: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah & David M.',
    location: 'United Kingdom',
    trip: '4-Day Classic Dubai Holiday Package',
    quote: 'Mansu’s World made our first trip to Dubai completely seamless. The airport pickup was punctual, our city tour was relaxed and informative, and the desert safari was the highlight of our vacation.',
  },
  {
    name: 'Rajesh & Family',
    location: 'India',
    trip: '5-Day Dubai Family & Theme Park Getaway',
    quote: 'Traveling with children can be stressful, but the team took care of all the scheduling. The vehicle was spotless, our driver was courteous and patient, and every day ran on time.',
  },
  {
    name: 'Michael B.',
    location: 'Australia',
    trip: 'Dubai Signature City Discovery',
    quote: 'The private tour was thoughtfully paced and gave us brilliant photo opportunities across Palm Jumeirah and Downtown without feeling rushed. Excellent customer service from start to finish.',
  },
];

// ==================== COMPANY INFORMATION ====================
export const COMPANY_INFO = {
  name: "Mansu's World",
  tagline: 'Discover the World, Experience More.',
  businessType: 'Travel & Tourism',
  primaryDestination: 'Dubai, United Arab Emirates',
  
  // Configurable placeholders for business contact details
  phonePlaceholder: '+971 50 000 0000',
  whatsappNumber: '971500000000', // Configurable WhatsApp digits
  emailPlaceholder: 'contact@mansusworld.com',
  officeAddressPlaceholder: 'Downtown Dubai / Business Bay, Dubai, United Arab Emirates',

  philosophy: [
    {
      title: 'Curated Experiences',
      description: 'We believe travel should be deeply personal. Each itinerary is designed to balance major highlights with moments of leisure and discovery.',
    },
    {
      title: 'Customer-Focused Hospitality',
      description: 'From your first WhatsApp enquiry to your flight departure, our dedicated team is attentive to your comfort, schedule, and preferences.',
    },
    {
      title: 'Transparent & Reliable',
      description: 'We believe in clear pricing, realistic schedules, and straightforward communication with zero hidden surprises.',
    },
    {
      title: 'Comfortable Private Transportation',
      description: 'Travel in clean, modern, air-conditioned vehicles driven by professional chauffeurs who prioritize your safety and punctuality.',
    },
  ],
};
