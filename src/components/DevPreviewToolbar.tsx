import { useState, type ReactNode } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  RotateCw,
  ChevronDown,
  X,
  ExternalLink,
  Minimize2,
  Maximize2,
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

const PRESETS: DevicePreset[] = [
  // Mobile presets
  { id: 'mobile-sm', name: 'Small Mobile', category: 'mobile', width: 320, height: 568, label: '320 × 568 (iPhone SE 1st)' },
  { id: 'mobile-std', name: 'Standard Mobile', category: 'mobile', width: 375, height: 667, label: '375 × 667 (iPhone 8 / SE)' },
  { id: 'mobile-modern', name: 'Modern Mobile', category: 'mobile', width: 390, height: 844, label: '390 × 844 (iPhone 14/15)' },
  { id: 'mobile-lg', name: 'Large Mobile', category: 'mobile', width: 430, height: 932, label: '430 × 932 (iPhone 15 Pro Max)' },
  // Tablet presets
  { id: 'tablet-std', name: 'Standard Tablet', category: 'tablet', width: 768, height: 1024, label: '768 × 1024 (iPad Air / Mini)' },
  { id: 'tablet-lg', name: 'Large Tablet', category: 'tablet', width: 1024, height: 1366, label: '1024 × 1366 (iPad Pro 12.9")' },
  // Desktop presets
  { id: 'desktop-full', name: 'Full Fluid Desktop', category: 'desktop', width: 0, height: 0, label: '100% Fluid Window Width' },
];

export default function DevPreviewToolbar({ children }: { children: ReactNode }) {
  // Only render toolbar in development environment; never on live customer-facing production build
  if (!import.meta.env.DEV) {
    return <>{children}</>;
  }

  // Active viewing mode: 'desktop' or 'mobile-tablet'
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile-tablet'>('desktop');
  // Selected device preset when in mobile-tablet mode (default to modern 390px)
  const [selectedPreset, setSelectedPreset] = useState<DevicePreset>(PRESETS[2]);
  // Orientation: portrait or landscape
  const [isLandscape, setIsLandscape] = useState(false);
  // Toolbar collapse state
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Calculate active frame dimensions
  const activeWidth = isLandscape && selectedPreset.height > 0 ? selectedPreset.height : selectedPreset.width;
  const activeHeight = isLandscape && selectedPreset.height > 0 ? selectedPreset.width : selectedPreset.height;

  const handleModeSwitch = (mode: 'desktop' | 'mobile-tablet') => {
    setViewMode(mode);
    if (mode === 'desktop') {
      setSelectedPreset(PRESETS[6]); // Full fluid desktop
    } else {
      setSelectedPreset(PRESETS[2]); // Modern Mobile (390px)
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070F1B]">
      {/* ======================================================== */}
      {/* DEV PREVIEW TOOLBAR (FIXED TOP)                          */}
      {/* ======================================================== */}
      <aside
        aria-label="Development Responsive Toolbar"
        className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 font-sans shadow-2xl ${
          isCollapsed ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
      >
        <div className="bg-[#0A131F]/98 backdrop-blur-xl border-b border-[#C5A869]/30 text-white px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs">
          {/* Left: Toolbar Brand & Dev Indicator */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-serif font-bold text-sm tracking-wide text-[#E5C378] hidden sm:inline">
              MANSU'S WORLD
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] uppercase tracking-wider font-semibold text-gray-300 border border-white/10">
              Dev Responsive Toolbar
            </span>
          </div>

          {/* Center: Two Main Viewing Options */}
          <div className="flex items-center gap-1.5 bg-[#070F1B] p-1 rounded-xl border border-white/10">
            {/* 1. Desktop Preview Option */}
            <button
              onClick={() => handleModeSwitch('desktop')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                viewMode === 'desktop'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Switch to 100% Fluid Desktop View"
            >
              <Monitor className="w-4 h-4" />
              <span className="text-xs">🖥️ Desktop Preview</span>
            </button>

            {/* 2. Mobile / Tablet Preview Option */}
            <button
              onClick={() => handleModeSwitch('mobile-tablet')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                viewMode === 'mobile-tablet'
                  ? 'bg-[#C5A869] text-[#070F1B] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              title="Switch to Mobile / Tablet Device Viewport"
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-xs">📱 Mobile / Tablet Preview</span>
            </button>
          </div>

          {/* Right: Screen Size Presets & Orientation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {viewMode === 'mobile-tablet' && (
              <div className="flex items-center gap-2">
                {/* Device Preset Selector Dropdown */}
                <select
                  value={selectedPreset.id}
                  onChange={(e) => {
                    const preset = PRESETS.find((p) => p.id === e.target.value);
                    if (preset) setSelectedPreset(preset);
                  }}
                  className="bg-[#070F1B] border border-white/20 text-[#E5C378] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C5A869] cursor-pointer"
                >
                  <optgroup label="Mobile Devices">
                    {PRESETS.filter((p) => p.category === 'mobile').map((p) => (
                      <option key={p.id} value={p.id}>
                        📱 {p.name} ({p.width}px)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Tablet Devices">
                    {PRESETS.filter((p) => p.category === 'tablet').map((p) => (
                      <option key={p.id} value={p.id}>
                        📟 {p.name} ({p.width}px)
                      </option>
                    ))}
                  </optgroup>
                </select>

                {/* Dimension Badge */}
                <span className="hidden md:inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-gray-300">
                  {activeWidth} × {activeHeight} px
                </span>

                {/* Rotate Orientation Button */}
                <button
                  onClick={() => setIsLandscape(!isLandscape)}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    isLandscape
                      ? 'bg-[#C5A869] text-[#070F1B] border-[#C5A869]'
                      : 'bg-white/5 text-gray-300 hover:text-white border-white/10 hover:bg-white/10'
                  }`}
                  title={isLandscape ? 'Switch to Portrait' : 'Switch to Landscape'}
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {viewMode === 'desktop' && (
              <span className="hidden md:inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-[#C5A869]">
                Fluid Full-Width Desktop (100%)
              </span>
            )}

            {/* Collapse / Hide Toggle */}
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
      {/* PREVIEW CONTAINER                                        */}
      {/* ======================================================== */}
      <div className={`transition-all duration-300 ${!isCollapsed ? 'pt-[49px]' : 'pt-0'}`}>
        {viewMode === 'desktop' ? (
          /* Desktop Mode: Standard full-width website rendering */
          <div className="w-full min-h-screen bg-[#FAF9F6]">
            {children}
          </div>
        ) : (
          /* Mobile / Tablet Mode: Realistic responsive device frame */
          <div className="min-h-screen bg-[#070F1B] py-8 px-4 flex flex-col items-center justify-start overflow-x-auto">
            {/* Device Info Header Badge */}
            <div className="mb-4 flex items-center gap-3 text-xs text-gray-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <span className="text-[#C5A869] font-semibold">
                {selectedPreset.name}
              </span>
              <span>•</span>
              <span className="font-mono text-gray-300">
                {activeWidth} × {activeHeight} px ({isLandscape ? 'Landscape' : 'Portrait'})
              </span>
            </div>

            {/* Device Frame Simulator */}
            <div
              style={{
                width: `${activeWidth}px`,
                maxWidth: '100%',
                height: `${activeHeight}px`,
                maxHeight: '90vh',
              }}
              className="relative bg-white rounded-[36px] shadow-[0_0_60px_rgba(0,0,0,0.85)] border-[10px] border-[#1C2636] flex flex-col overflow-hidden transition-all duration-300 ring-1 ring-white/10"
            >
              {/* Speaker / Notch simulator */}
              <div className="absolute top-0 inset-x-0 h-5 bg-[#1C2636] z-50 flex items-center justify-center">
                <div className="w-16 h-3 bg-[#0E1B2E] rounded-b-lg flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2" />
                  <div className="w-6 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Scrollable Viewport Area */}
              <div className="flex-1 w-full overflow-y-auto overflow-x-hidden pt-5 bg-[#FAF9F6] scroll-smooth">
                {children}
              </div>

              {/* Bottom Home Indicator Bar (Mobile look) */}
              <div className="h-4 bg-[#1C2636] flex items-center justify-center shrink-0">
                <div className="w-28 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
