import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { 
  useCurrency, 
  SUPPORTED_CURRENCIES, 
  type CurrencyCode 
} from '../context/CurrencyContext';

interface CurrencySelectorProps {
  variant?: 'navbar' | 'mobile';
}

export default function CurrencySelector({ variant = 'navbar' }: CurrencySelectorProps) {
  const { currency, setCurrency, currencyConfig } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currencies = Object.values(SUPPORTED_CURRENCIES);

  if (variant === 'mobile') {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
          <Globe className="w-3.5 h-3.5" />
          <span>Select Currency</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {currencies.map((c) => {
            const isSelected = c.code === currency;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => setCurrency(c.code)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#C5A869] text-[#0E1B2E] border-[#C5A869] shadow-md'
                    : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-base mb-0.5">{c.flag}</span>
                <span className="font-bold">{c.code}</span>
                <span className="text-[10px] opacity-80">{c.symbol}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#C5A869]/80 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-sm leading-none">{currencyConfig.flag}</span>
        <span className="text-white font-medium">{currencyConfig.code}</span>
        <span className="text-[#C5A869] text-[11px] font-bold">({currencyConfig.symbol})</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#C5A869] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0E1B2E] border border-white/15 shadow-2xl py-2 z-50 animate-fade-in-up backdrop-blur-xl">
          <div className="px-3.5 py-1.5 border-b border-white/10 mb-1">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A869] font-semibold block">
              Choose Currency
            </span>
          </div>

          <div className="space-y-0.5 px-1.5">
            {currencies.map((c) => {
              const isSelected = c.code === currency;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCurrency(c.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#C5A869]/20 text-[#C5A869] font-bold'
                      : 'text-white/85 hover:bg-white/10 hover:text-white font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{c.flag}</span>
                    <span>{c.code}</span>
                    <span className="text-white/50 text-[11px]">({c.symbol})</span>
                  </div>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

