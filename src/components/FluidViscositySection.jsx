"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sliders, Droplets, Gauge, Thermometer, ShieldCheck } from "lucide-react";

export default function FluidViscositySection({ onOpenQuote }) {
  const fluids = [
    {
      id: "fuel",
      name: "Fuel Oils & Lube",
      subtitle: "Furnace oil, LDO, HSD & forced lubrication systems",
      temp: "Up to 150°C",
      pressure: "Up to 35 Bar",
      viscosity: "2 to 500 cSt",
      recommended: "PIGB Series — Fuel Injection Gear Pump",
      productId: "pigb-series",
      image: "/assets/img/product/pigb.png"
    },
    {
      id: "bitumen",
      name: "Bitumen & Asphalt",
      subtitle: "Road construction hot-mix plants, tar, asphalt & molten wax",
      temp: "Up to 300°C",
      pressure: "Up to 10 Bar",
      viscosity: "500 to 100,000 cSt",
      recommended: "GP Series — External Rotary Gear Pump (Jacketed)",
      productId: "gp-series",
      image: "/assets/img/product/gp.png"
    },
    {
      id: "chemical",
      name: "Chemicals & Solvents",
      subtitle: "Acids, alkalis, corrosive solvents & petrochem additives",
      temp: "Up to 180°C",
      pressure: "Up to 10 Bar",
      viscosity: "1 to 5,000 cSt",
      recommended: "GPSS Series — Stainless Steel Rotary Gear Pump",
      productId: "gpss-series",
      image: "/assets/img/product/gpss.png"
    },
    {
      id: "food",
      name: "Food & Pharma",
      subtitle: "Glucose, syrups, molasses, dairy, edible oils & confectionery",
      temp: "Up to 120°C",
      pressure: "Up to 10 Bar",
      viscosity: "10 to 50,000 cSt",
      recommended: "GPSS Series — Sanitary SS-316 Gear Pump",
      productId: "gpss-series",
      image: "/assets/img/product/gpss.png"
    },
    {
      id: "resins",
      name: "Paints & Resins",
      subtitle: "Varnishes, printing inks, resins, polymer adhesives & glues",
      temp: "Up to 200°C",
      pressure: "Up to 15 Bar",
      viscosity: "100 to 80,000 cSt",
      recommended: "GP Series — Heavy Duty Gear Pump",
      productId: "gp-series",
      image: "/assets/img/product/gp.png"
    }
  ];

  const [activeFluidIndex, setActiveFluidIndex] = useState(1); // Default to Bitumen
  const currentFluid = fluids[activeFluidIndex];

  // Flow Slider state
  const flowPresets = [
    { lpm: 50, label: "50 LPM", duty: "Burner Boost & Light Fuel" },
    { lpm: 125, label: "125 LPM", duty: "Furnace Injection & Lube" },
    { lpm: 350, label: "350 LPM", duty: "Medium Bulk Transfer" },
    { lpm: 500, label: "500 LPM", duty: "Bitumen & Tanker Unloading" },
    { lpm: 1000, label: "1,000 LPM", duty: "Heavy Industrial Pipeline" }
  ];

  const [sliderIndex, setSliderIndex] = useState(3); // 500 LPM
  const currentPreset = flowPresets[sliderIndex];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#e5e5e2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Cobwala Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="text-[#e31e24] text-sm">✴</span>
              <span>FLUID VISCOSITY & DISPLACEMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a18]">
              Fluid viscosity — <br className="hidden sm:inline" />
              Set the pressure.
            </h2>
          </div>
          <p className="font-sans text-base text-[#666663] max-w-md leading-relaxed">
            Pumping high-viscosity media isn&apos;t just mechanical. It&apos;s precision continuous positive displacement without cavitation.
          </p>
        </div>

        {/* Cobwala Signature Dark Card (.card-night) */}
        <div className="card-night p-6 sm:p-10 lg:p-12 mb-12">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e31e24]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Fluid Selector Pill Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              {fluids.map((fluid, idx) => (
                <button
                  key={fluid.id}
                  onClick={() => setActiveFluidIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-display transition-all ${
                    activeFluidIndex === idx
                      ? "bg-white text-[#121214] font-semibold shadow-sm"
                      : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {fluid.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-display text-white/50">
              <span className="w-2 h-2 rounded-full bg-[#e31e24] animate-pulse" />
              <span>Continuous Displacement Cycle</span>
            </div>
          </div>

          {/* Dynamic Fluid Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            {/* Left Column: Fluid Profile & Parameters */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-display uppercase tracking-widest text-[#e31e24] font-semibold">
                  Duty Profile • {currentFluid.name}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {currentFluid.subtitle}
                </h3>
              </div>

              {/* Spec Triad */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-1">
                    <Thermometer className="w-3.5 h-3.5 text-[#e31e24]" />
                    <span>Max Temp</span>
                  </div>
                  <p className="font-display text-lg sm:text-xl font-bold text-white">
                    {currentFluid.temp}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-1">
                    <Gauge className="w-3.5 h-3.5 text-[#e31e24]" />
                    <span>Hydraulic Pressure</span>
                  </div>
                  <p className="font-display text-lg sm:text-xl font-bold text-white">
                    {currentFluid.pressure}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-1">
                    <Droplets className="w-3.5 h-3.5 text-[#e31e24]" />
                    <span>Viscosity Range</span>
                  </div>
                  <p className="font-display text-lg sm:text-xl font-bold text-white">
                    {currentFluid.viscosity}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck className="w-4 h-4 text-[#e31e24]" />
                  <span>Jacketed heating chambers & zero-leakage mechanical seals available</span>
                </div>
              </div>
            </div>

            {/* Right Column: Recommended Pump Callout Stage */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative group">
                <div className="relative h-44 w-full flex items-center justify-center mb-4">
                  <img
                    src={currentFluid.image}
                    alt={currentFluid.recommended}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-display uppercase tracking-widest text-white/50">
                    Engineered Solution
                  </span>
                  <p className="font-display text-sm font-semibold text-white">
                    {currentFluid.recommended}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href={`/products/${currentFluid.productId}`}
                    className="px-4 py-2 rounded-full text-xs font-display font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    View Specs
                  </Link>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote({ notes: `Application: ${currentFluid.name}` })}
                    className="px-4 py-2 rounded-full text-xs font-display font-medium bg-[#e31e24] text-white hover:bg-[#c9181e] transition-colors"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cobwala Interactive Slider & Presets Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Dynamic Slider Readout */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-[#1a1a18]">
                {currentPreset.label}
              </span>
              <span className="font-sans text-lg text-[#666663]">
                Continuous Displacement
              </span>
            </div>

            {/* Range Slider */}
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max={flowPresets.length - 1}
                value={sliderIndex}
                onChange={(e) => setSliderIndex(parseInt(e.target.value))}
                className="w-full h-2 bg-[#e5e5e2] rounded-lg appearance-none cursor-pointer accent-[#e31e24]"
              />
              <div className="flex justify-between text-xs text-[#666663] font-display">
                <span>1.5 LPM (Low Flow)</span>
                <span>1,000 LPM (Heavy Duty Pipeline)</span>
              </div>
            </div>

            {/* Quick Presets Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {flowPresets.map((preset, idx) => (
                <button
                  key={preset.lpm}
                  onClick={() => setSliderIndex(idx)}
                  className={`chip ${sliderIndex === idx ? "chip-active" : ""}`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Recommendation Card */}
          <div className="lg:col-span-5">
            <div className="card-modern p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-[11px] font-display uppercase tracking-wider text-[#666663]">
                  DUTY PROFILE AT {currentPreset.label}
                </span>
                <h4 className="font-display text-2xl font-bold text-[#1a1a18] mt-1">
                  {currentPreset.duty}
                </h4>
                <p className="text-xs text-[#666663] mt-1 font-sans">
                  Zero pulsation positive displacement with internal or external helical gear arrangement.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e5e5e2] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#e31e24] font-semibold">
                    RECOMMENDED
                  </span>
                  <p className="font-display text-xs font-semibold text-[#1a1a18]">
                    Pacifluid Heavy Duty Series
                  </p>
                </div>
                <Link
                  href="/products"
                  className="btn btn-sm border border-[#1a1a18] text-[#1a1a18] hover:bg-[#1a1a18] hover:text-white"
                >
                  <span>View</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
