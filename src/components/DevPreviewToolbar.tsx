import { useState, useRef, useEffect, type ReactNode } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  RotateCw,
  ChevronDown,
  RefreshCw,
  ExternalLink,
  Minimize2,
  Maximize2,
  Sliders,
  Check
} from 'lucide-react';

interface DevicePreset {
  id: string;
  name: string;
  category: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
  label: string;
}

const ALL_PRESETS: DevicePreset[] = [
  // Mobile Presets
  { id: 'mobile-sm', name: 'Small Mobile', category: 'mobile', width: 320, height: 568, label: '320 × 568 (iPhone SE)' },
  { id: 'mobile-std', name: 'Standard Mobile', category: 'mobile', width: 375, height: 667, label: '375 × 667 (iPhone 8/SE2)' },
  { id: 'mobile-modern', name: 'Modern Mobile', category: 'mobile', width: 390, height: 844, label: '390 × 844 (iPhone 14/15)' },
  { id: 'mobile-lg', name: 'Large Mobile', category: 'mobile', width: 430, height: 932, label: '430 × 932 (iPhone Pro Max)' },
  // Tablet Presets
  { id: 'tablet-std', name: 'Tablet', category: 'tablet', width: 768, height: 1024, label: '768 × 1024 (iPad Air/Mini)' },
  { id: 'tablet-lg', name: 'Large Tablet', category: 'tablet', width: 1024, height: 1366, label: '1024 × 1366 (iPad Pro)' },
  // Laptop & Desktop Presets
  { id: 'laptop-1366', name: 'Laptop', category: 'desktop', width: 1366, height: 768, label: '1366 × 768 (Laptop)' },
  { id: 'desktop-1440', name: 'Desktop', category: 'desktop', width: 1440, height: 900, label: '1440 × 900 (Desktop)' },
  { id: 'desktop-1920', name: 'Large Desktop', category: 'desktop', width: 1920, height: 1080, label: '1920 × 1080 (Full HD)' },
  { id: 'desktop-fluid', name: 'Fluid Window', category: 'desktop', width: 0, height: 0, label: '100% Fluid Width' },
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

  // Active viewing mode: 'desktop' or 'mobile-tablet'
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile-tablet'>('desktop');
  // Selected preset for mobile/tablet mode (defaults to Modern Mobile 390px)
  const [mobilePreset, setMobilePreset] = useState<DevicePreset>(ALL_PRESETS[2]);
  // Selected preset for desktop mode (defaults to 100% Fluid)
  const [desktopPreset, setDesktopPreset] = useState<DevicePreset>(ALL_PRESETS[9]);
  // Orientation: portrait or landscape (for mobile/tablet)
  const [isLandscape, setIsLandscape] = useState(false);
  // Toolbar collapse state
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Iframe reload key
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Active dimensions based on mode and orientation
  const currentPreset = viewMode === 'desktop' ? desktopPreset : mobilePreset;
  const activeWidth = isLandscape && currentPreset.height > 0 ? currentPreset.height : currentPreset.width;
  const activeHeight = isLandscape && currentPreset.height > 0 ? currentPreset.width : currentPreset.height;

  // Helper to generate iframe source with recursion safeguard
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

  const handleModeSwitch = (mode: 'desktop' | 'mobile-tablet') => {
    setViewMode(mode);
    if (mode === 'desktop') {
      setDesktopPreset(ALL_PRESETS[9]); // Fluid full width
    } else {
      setMobilePreset(ALL_PRESETS[2]); // Modern Mobile 390px
    }
  };

  const handleReloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-[#070F1B]">
      {/* ======================================================== */}
      {/* 1. PROFESSIONAL RESPONSIVE DEV TOOLBAR (FIXED TOP)       */}
      {/* ======================================================== */}
      <aside
        aria-label="Responsive Device Preview Toolbar"
        className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 font-sans shadow-2xl ${
          isCollapsed ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
      >
        <div className="bg-[#09121E]/98 backdrop-blur-2xl border-b border-[#C5A869]/30 text-white px-3 sm:px-6 py-2 flex items-center justify-between gap-3 text-xs">
          {/* Left: Branding & Status */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-serif font-bold text-sm tracking-wider text-[#E5C378] hidden sm:inline">
              MANSU'S WORLD
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] uppercase tracking-wider font-semibold text-gray-300 border border-white/10">
              Device Preview Toolbar
            </span>
          </div>

          {/* Center: Two Required Viewing Options */}
          <div className="flex items-center gap-1 bg-[#060D17] p-1 rounded-xl border border-white/10 shadow-inner">
            {/* Option 1: 🖥️ Desktop Preview */}
            <button
              onClick={() => handleModeSwitch('desktop')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                viewMode === 'desktop'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md shadow-[#C5A869]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Switch to Desktop Preview"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>🖥️ Desktop Preview</span>
            </button>

            {/* Option 2: 📱 Mobile / Tablet Preview */}
            <button
              onClick={() => handleModeSwitch('mobile-tablet')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                viewMode === 'mobile-tablet'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md shadow-[#C5A869]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Switch to Mobile / Tablet Viewport Simulator"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>📱 Mobile / Tablet Preview</span>
            </button>
          </div>

          {/* Right: Device Selector, Dimensions, Orientation, & Collapse */}
          <div className="flex items-center gap-2 shrink-0">
            {viewMode === 'mobile-tablet' && (
              <div className="flex items-center gap-2">
                {/* Mobile / Tablet Screen Size Presets Dropdown */}
                <select
                  value={mobilePreset.id}
                  onChange={(e) => {
                    const preset = ALL_PRESETS.find((p) => p.id === e.target.value);
                    if (preset) setMobilePreset(preset);
                  }}
                  className="bg-[#060D17] border border-white/20 text-[#E5C378] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C5A869] cursor-pointer"
                >
                  <optgroup label="Mobile Phones">
                    {ALL_PRESETS.filter((p) => p.category === 'mobile').map((p) => (
                      <option key={p.id} value={p.id}>
                        📱 {p.name} ({p.width}px)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Tablets">
                    {ALL_PRESETS.filter((p) => p.category === 'tablet').map((p) => (
                      <option key={p.id} value={p.id}>
                        📟 {p.name} ({p.width}px)
                      </option>
                    ))}
                  </optgroup>
                </select>

                {/* Accurate Screen Dimensions Pill */}
                <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-gray-200">
                  <span className="text-[#C5A869]">{activeWidth}</span>
                  <span className="text-gray-500">×</span>
                  <span className="text-[#C5A869]">{activeHeight}</span>
                  <span className="text-[9px] text-gray-400">px</span>
                </span>

                {/* Rotate Orientation Button */}
                <button
                  onClick={() => setIsLandscape(!isLandscape)}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                    isLandscape
                      ? 'bg-[#C5A869] text-[#070F1B] border-[#C5A869]'
                      : 'bg-white/5 text-gray-300 hover:text-white border-white/10 hover:bg-white/10'
                  }`}
                  title={isLandscape ? 'Switch to Portrait' : 'Switch to Landscape'}
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>

                {/* Reload Viewport */}
                <button
                  onClick={handleReloadIframe}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Reload Preview Frame"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {viewMode === 'desktop' && (
              <div className="flex items-center gap-2">
                {/* Desktop Size Presets */}
                <select
                  value={desktopPreset.id}
                  onChange={(e) => {
                    const preset = ALL_PRESETS.find((p) => p.id === e.target.value);
                    if (preset) setDesktopPreset(preset);
                  }}
                  className="bg-[#060D17] border border-white/20 text-[#E5C378] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C5A869] cursor-pointer"
                >
                  {ALL_PRESETS.filter((p) => p.category === 'desktop').map((p) => (
                    <option key={p.id} value={p.id}>
                      🖥️ {p.name} {p.width > 0 ? `(${p.width}px)` : '(Full)'}
                    </option>
                  ))}
                </select>

                <span className="hidden md:inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-[#C5A869]">
                  {desktopPreset.width === 0 ? '100% Fluid Width' : `${desktopPreset.width} × ${desktopPreset.height} px`}
                </span>
              </div>
            )}

            {/* Minimize / Collapse Button */}
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Minimize Toolbar"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Floating Re-Open Button when Collapsed */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed top-3 right-4 z-[9999] bg-[#070F1B]/95 text-[#C5A869] border border-[#C5A869]/40 hover:border-[#C5A869] px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold cursor-pointer animate-fade-in"
          title="Expand Development Toolbar"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Device Preview Toolbar</span>
        </button>
      )}

      {/* ======================================================== */}
      {/* 2. RESPONSIVE VIEWPORT STAGE                             */}
      {/* ======================================================== */}
      <div className={`transition-all duration-300 ${!isCollapsed ? 'pt-[47px]' : 'pt-0'}`}>
        {viewMode === 'desktop' && desktopPreset.width === 0 ? (
          /* Fluid Desktop Mode: Full-screen native rendering */
          <div className="w-full min-h-screen bg-[#FAF9F6]">
            {children}
          </div>
        ) : viewMode === 'desktop' && desktopPreset.width > 0 ? (
          /* Fixed Desktop Width Mode (1366px, 1440px, 1920px) */
          <div className="min-h-screen bg-[#070F1B] py-8 px-4 flex flex-col items-center justify-start overflow-x-auto">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-4 py-1 rounded-full border border-white/10">
              <span className="text-[#C5A869] font-bold">{desktopPreset.name}</span>
              <span>•</span>
              <span className="font-mono text-gray-200">{desktopPreset.width} × {desktopPreset.height} px</span>
            </div>

            <div
              style={{
                width: `${desktopPreset.width}px`,
                maxWidth: '100%',
                height: `${desktopPreset.height}px`,
                maxHeight: '88vh',
              }}
              className="bg-white rounded-2xl shadow-2xl border-4 border-[#1F2937] overflow-hidden flex flex-col"
            >
              <iframe
                key={`desktop-${iframeKey}-${desktopPreset.id}`}
                ref={iframeRef}
                src={getIframeSrc()}
                title="Desktop Viewport Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        ) : (
          /* Mobile / Tablet Mode: Realistic Device Bezel & Frame with True Viewport Emulation */
          <div className="min-h-screen bg-[#070F1B] py-6 px-4 flex flex-col items-center justify-start overflow-x-auto">
            {/* Device Info Tag */}
            <div className="mb-3 flex items-center gap-2.5 text-xs text-gray-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
              <span className="text-[#C5A869] font-bold">{mobilePreset.name}</span>
              <span className="text-gray-500">•</span>
              <span className="font-mono text-white font-semibold">
                {activeWidth} × {activeHeight} px
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400">
                {isLandscape ? 'Landscape' : 'Portrait'}
              </span>
            </div>

            {/* Realistic Hardware Frame Simulator */}
            <div
              style={{
                width: `${activeWidth}px`,
                maxWidth: '100%',
                height: `${activeHeight}px`,
                maxHeight: '88vh',
              }}
              className="relative bg-black rounded-[42px] shadow-[0_25px_70px_rgba(0,0,0,0.9)] border-[12px] border-[#1F2937] flex flex-col overflow-hidden transition-all duration-300 ring-1 ring-white/10"
            >
              {/* Dynamic Island / Speaker Notch Indicator */}
              <div className="h-6 bg-[#1F2937] shrink-0 flex items-center justify-center relative z-20">
                <div className="w-24 h-3.5 bg-black rounded-full flex items-center justify-center gap-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-blue-950/80 border border-blue-900/60" />
                  <div className="w-8 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Viewport Iframe Container: Provides true window.innerWidth & CSS @media query evaluation */}
              <div className="flex-1 w-full bg-white overflow-hidden relative">
                <iframe
                  key={`mobile-${iframeKey}-${activeWidth}-${activeHeight}`}
                  ref={iframeRef}
                  src={getIframeSrc()}
                  title="Mobile Viewport Preview"
                  className="w-full h-full border-none"
                />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="h-4 bg-[#1F2937] shrink-0 flex items-center justify-center relative z-20">
                <div className="w-32 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
