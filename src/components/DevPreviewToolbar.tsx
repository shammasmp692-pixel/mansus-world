import { useState, useRef, type ReactNode } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  RotateCw,
  RefreshCw,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface DevicePreset {
  id: string;
  name: string;
  category: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
  label: string;
}

const PRESETS: Record<'desktop' | 'mobile' | 'tablet', DevicePreset> = {
  desktop: { id: 'desktop', name: 'Desktop', category: 'desktop', width: 0, height: 0, label: '100% Fluid Width' },
  mobile: { id: 'mobile', name: 'Mobile', category: 'mobile', width: 390, height: 844, label: '390 × 844 (iPhone 14/15)' },
  tablet: { id: 'tablet', name: 'Tablet', category: 'tablet', width: 768, height: 1024, label: '768 × 1024 (iPad Air)' },
};

const MOBILE_SIZES = [
  { id: '320', name: 'Small', width: 320, height: 568 },
  { id: '375', name: 'Standard', width: 375, height: 667 },
  { id: '390', name: 'Modern', width: 390, height: 844 },
  { id: '430', name: 'Large', width: 430, height: 932 },
];

export default function DevPreviewToolbar({ children }: { children: ReactNode }) {
  // Prevent recursive toolbar rendering inside preview iframes
  const isInsideIframe =
    typeof window !== 'undefined' &&
    (window.self !== window.top ||
      new URLSearchParams(window.location.search).get('preview_frame') === 'true');

  if (isInsideIframe) {
    return <>{children}</>;
  }

  // Active view: 'desktop' | 'mobile' | 'tablet'
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');
  // Sub-preset for mobile width testing
  const [mobileWidth, setMobileWidth] = useState(390);
  const [mobileHeight, setMobileHeight] = useState(844);
  // Orientation toggle (Portrait / Landscape)
  const [isLandscape, setIsLandscape] = useState(false);
  // Toolbar collapse state
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Iframe reload key
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Compute active dimensions
  let currentWidth = 0;
  let currentHeight = 0;

  if (activeDevice === 'mobile') {
    currentWidth = isLandscape ? mobileHeight : mobileWidth;
    currentHeight = isLandscape ? mobileWidth : mobileHeight;
  } else if (activeDevice === 'tablet') {
    currentWidth = isLandscape ? PRESETS.tablet.height : PRESETS.tablet.width;
    currentHeight = isLandscape ? PRESETS.tablet.width : PRESETS.tablet.height;
  }

  // Generate iframe source with recursion safeguard
  const getIframeSrc = () => {
    if (typeof window === 'undefined') return '/?preview_frame=true';
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('preview_frame', 'true');
      return url.pathname + url.search;
    } catch {
      return '/?preview_frame=true';
    }
  };

  const handleDeviceSwitch = (device: 'desktop' | 'mobile' | 'tablet') => {
    setActiveDevice(device);
    setIsLandscape(false);
  };

  const handleMobileSizeChange = (width: number, height: number) => {
    setMobileWidth(width);
    setMobileHeight(height);
  };

  return (
    <div className="relative min-h-screen bg-[#070F1B]">
      {/* ======================================================== */}
      {/* 1. COMPACT PREMIUM SEGMENTED PILL SWITCHER (TOP)         */}
      {/* ======================================================== */}
      <aside
        aria-label="Device View Switcher"
        className={`fixed top-3 inset-x-0 z-[9999] flex justify-center px-4 transition-all duration-300 pointer-events-none ${
          isCollapsed ? 'translate-y-[-120%] opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="pointer-events-auto bg-[#09121E]/95 backdrop-blur-2xl border border-[#C5A869]/40 rounded-full px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex items-center gap-2 text-xs font-sans text-white">
          {/* Brand Mark */}
          <div className="hidden sm:flex items-center gap-2 pl-2 pr-1 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-serif font-bold text-xs tracking-wider text-[#E5C378]">
              MANSU'S WORLD
            </span>
          </div>

          <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />

          {/* Segmented Pill Control: [ Desktop ] [ Mobile ] [ Tablet ] */}
          <div className="flex items-center bg-[#060D17] p-1 rounded-full border border-white/10 shadow-inner">
            {/* Desktop Option */}
            <button
              onClick={() => handleDeviceSwitch('desktop')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeDevice === 'desktop'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md shadow-[#C5A869]/40 scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Full Desktop Experience"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            {/* Mobile Option */}
            <button
              onClick={() => handleDeviceSwitch('mobile')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeDevice === 'mobile'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md shadow-[#C5A869]/40 scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Dedicated Mobile Experience"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>

            {/* Tablet Option */}
            <button
              onClick={() => handleDeviceSwitch('tablet')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeDevice === 'tablet'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md shadow-[#C5A869]/40 scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Balanced Tablet Experience"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
          </div>

          {/* Mobile Width Quick Picker */}
          {activeDevice === 'mobile' && (
            <div className="flex items-center gap-1 pl-1">
              {MOBILE_SIZES.map((sz) => (
                <button
                  key={sz.id}
                  onClick={() => handleMobileSizeChange(sz.width, sz.height)}
                  className={`px-2 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                    mobileWidth === sz.width
                      ? 'bg-white/20 text-[#E5C378] font-bold border border-[#C5A869]/60'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title={`${sz.name} (${sz.width}px)`}
                >
                  {sz.width}
                </button>
              ))}
            </div>
          )}

          {/* Dimension Tag */}
          <div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-gray-300">
            {activeDevice === 'desktop' ? (
              <span className="text-[#C5A869]">100% Fluid Desktop</span>
            ) : (
              <>
                <span className="text-[#C5A869]">{currentWidth}</span>
                <span className="text-gray-500">×</span>
                <span className="text-[#C5A869]">{currentHeight}</span>
                <span className="text-[10px] text-gray-400">px</span>
              </>
            )}
          </div>

          {/* Device Action Buttons */}
          {activeDevice !== 'desktop' && (
            <div className="flex items-center gap-1">
              {/* Rotate Orientation Button */}
              <button
                onClick={() => setIsLandscape(!isLandscape)}
                className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                  isLandscape
                    ? 'bg-[#C5A869] text-[#070F1B] border-[#C5A869]'
                    : 'bg-white/5 text-gray-300 hover:text-white border-white/10 hover:bg-white/10'
                }`}
                title={isLandscape ? 'Switch to Portrait' : 'Switch to Landscape'}
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>

              {/* Reload Frame Button */}
              <button
                onClick={() => setIframeKey((k) => k + 1)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                title="Reload Viewport"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Minimize Button */}
          <button
            onClick={() => setIsCollapsed(true)}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Minimize Switcher"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Floating Re-Open Button when Collapsed */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed top-3 right-4 z-[9999] bg-[#09121E]/95 text-[#C5A869] border border-[#C5A869]/40 hover:border-[#C5A869] px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold cursor-pointer animate-fade-in"
          title="Open Device View Switcher"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Device Switcher</span>
        </button>
      )}

      {/* ======================================================== */}
      {/* 2. RESPONSIVE VIEWPORT CONTAINER                         */}
      {/* ======================================================== */}
      <div className={`transition-all duration-300 ${!isCollapsed ? 'pt-14' : 'pt-0'}`}>
        {activeDevice === 'desktop' ? (
          /* Desktop Mode: Native 100% fluid full-width rendering */
          <div className="w-full min-h-screen bg-[#FAF9F6]">
            {children}
          </div>
        ) : (
          /* Mobile or Tablet Mode: Realistic hardware chassis simulator */
          <div className="min-h-screen bg-[#070F1B] py-6 px-4 flex flex-col items-center justify-start overflow-x-auto">
            {/* Realistic Hardware Frame */}
            <div
              style={{
                width: `${currentWidth}px`,
                maxWidth: '100%',
                height: `${currentHeight}px`,
                maxHeight: '88vh',
              }}
              className={`relative bg-black shadow-[0_30px_90px_rgba(0,0,0,0.95)] border-[#1C2636] flex flex-col overflow-hidden transition-all duration-300 ring-1 ring-white/10 ${
                activeDevice === 'mobile'
                  ? 'rounded-[46px] border-[12px]'
                  : 'rounded-[32px] border-[10px]'
              }`}
            >
              {/* Top Dynamic Island / Speaker Notch Indicator */}
              <div className="h-6 bg-[#1C2636] shrink-0 flex items-center justify-center relative z-20">
                <div className="w-24 h-3.5 bg-black rounded-full flex items-center justify-center gap-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-blue-950/80 border border-blue-900/60" />
                  <div className="w-8 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Viewport Iframe: Emulates true mobile window.innerWidth & CSS media queries */}
              <div className="flex-1 w-full bg-white overflow-hidden relative">
                <iframe
                  key={`${activeDevice}-${iframeKey}-${currentWidth}-${currentHeight}`}
                  ref={iframeRef}
                  src={getIframeSrc()}
                  title={`${activeDevice} Viewport Preview`}
                  className="w-full h-full border-none"
                />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="h-4 bg-[#1C2636] shrink-0 flex items-center justify-center relative z-20">
                <div className="w-28 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
