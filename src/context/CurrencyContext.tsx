import React, { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyCode = 'INR' | 'AED' | 'USD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  altSymbol?: string;
  label: string;
  flag: string;
  name: string;
}

export const SUPPORTED_CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    label: 'INR (₹)',
    flag: '🇮🇳',
    name: 'Indian Rupee',
  },
  AED: {
    code: 'AED',
    symbol: 'AED',
    altSymbol: 'د.إ',
    label: 'AED (د.إ)',
    flag: '🇦🇪',
    name: 'UAE Dirham',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'USD ($)',
    flag: '🇺🇸',
    name: 'US Dollar',
  },
};

// Fallback rates (Base: 1 INR) in case external network fails
const FALLBACK_EXCHANGE_RATES: Record<CurrencyCode, number> = {
  INR: 1.0,
  AED: 0.040, // ~1 AED ≈ 25 INR
  USD: 0.011, // ~1 USD ≈ 91 INR
};

const CACHE_STORAGE_KEY = 'mansus_exchange_rates_v1';
const SELECTED_CURRENCY_KEY = 'mansus_selected_currency_v1';
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 Hours cache

interface CurrencyContextType {
  currency: CurrencyCode;
  currencyConfig: CurrencyConfig;
  setCurrency: (code: CurrencyCode) => void;
  rates: Record<CurrencyCode, number>;
  isLoadingRates: boolean;
  convertPrice: (priceInINR: number) => number;
  formatPrice: (priceInINR: number, options?: { showCode?: boolean; showSymbol?: boolean }) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // 1. Initialize currency from localStorage or default to INR
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    try {
      const saved = localStorage.getItem(SELECTED_CURRENCY_KEY) as CurrencyCode;
      if (saved && SUPPORTED_CURRENCIES[saved]) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'INR';
  });

  // 2. Initialize exchange rates from cache or fallback
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(() => {
    try {
      const cached = localStorage.getItem(CACHE_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.rates && Date.now() - parsed.timestamp < CACHE_DURATION_MS) {
          return parsed.rates;
        }
      }
    } catch {
      // ignore
    }
    return FALLBACK_EXCHANGE_RATES;
  });

  const [isLoadingRates, setIsLoadingRates] = useState(false);

  // 3. Fetch live exchange rates on mount and update cache
  useEffect(() => {
    let isMounted = true;

    async function fetchLiveRates() {
      // Check if current cache is still fresh
      try {
        const cached = localStorage.getItem(CACHE_STORAGE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed?.rates && Date.now() - parsed.timestamp < CACHE_DURATION_MS) {
            setRates(parsed.rates);
            return;
          }
        }
      } catch {
        // ignore
      }

      setIsLoadingRates(true);
      try {
        // Fetch from reliable, public, CORS-enabled exchange rate API with INR as base
        const response = await fetch('https://open.er-api.com/v6/latest/INR');
        if (!response.ok) throw new Error('Failed to fetch exchange rates');

        const data = await response.json();
        if (data && data.result === 'success' && data.rates) {
          const freshRates: Record<CurrencyCode, number> = {
            INR: 1.0,
            AED: Number(data.rates.AED) || FALLBACK_EXCHANGE_RATES.AED,
            USD: Number(data.rates.USD) || FALLBACK_EXCHANGE_RATES.USD,
          };

          if (isMounted) {
            setRates(freshRates);
            localStorage.setItem(
              CACHE_STORAGE_KEY,
              JSON.stringify({
                rates: freshRates,
                timestamp: Date.now(),
              })
            );
          }
        }
      } catch (err) {
        console.warn('Currency API unavailable, using cached/fallback rates:', err);
      } finally {
        if (isMounted) {
          setIsLoadingRates(false);
        }
      }
    }

    fetchLiveRates();

    return () => {
      isMounted = false;
    };
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    if (SUPPORTED_CURRENCIES[code]) {
      setCurrencyState(code);
      try {
        localStorage.setItem(SELECTED_CURRENCY_KEY, code);
      } catch {
        // ignore
      }
    }
  };

  /**
   * Converts a base price in INR to the active currency.
   */
  const convertPrice = (priceInINR: number): number => {
    if (!priceInINR || isNaN(priceInINR)) return 0;
    if (currency === 'INR') return Math.round(priceInINR);

    const rate = rates[currency] || FALLBACK_EXCHANGE_RATES[currency] || 1;
    const converted = priceInINR * rate;

    // For AED and USD, round to whole integer if >= 50, otherwise 1 decimal for precision
    return Math.round(converted);
  };

  /**
   * Formats a base price in INR to the active currency with appropriate symbols.
   * e.g. "₹10,500", "AED 410", "$112"
   */
  const formatPrice = (
    priceInINR: number,
    options?: { showCode?: boolean; showSymbol?: boolean }
  ): string => {
    const config = SUPPORTED_CURRENCIES[currency];
    const amount = convertPrice(priceInINR);
    const formattedNum = amount.toLocaleString('en-US');

    const showCode = options?.showCode ?? false;
    const showSymbol = options?.showSymbol ?? true;

    if (currency === 'INR') {
      return showSymbol ? `₹${formattedNum}` : `${formattedNum} INR`;
    }

    if (currency === 'AED') {
      return `AED ${formattedNum}`;
    }

    if (currency === 'USD') {
      return `$${formattedNum}`;
    }

    return `${config.symbol}${formattedNum}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencyConfig: SUPPORTED_CURRENCIES[currency],
        setCurrency,
        rates,
        isLoadingRates,
        convertPrice,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

