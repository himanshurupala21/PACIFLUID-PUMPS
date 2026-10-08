"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Gauge, 
  Play, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Download
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function Hero({ onOpenQuote, onOpenVideo }) {
  const [selectedPumpIndex, setSelectedPumpIndex] = useState(0);

  const heroPumps = [
    {
      name: "GP Series — Rotary Twin Gear Pump",
      subtitle: "Flagship Heavy Duty Positive Displacement",
      image: "/assets/img/product/gp.png",
      pressure: "Up to 10 Bar (142 PSI)",
      flow: "5 to 500 LPM",
      badge: "Flagship Model",
      moc: "Cast Iron / WCB / SS-316",
      pdf: "/pdf/pacifluid-gp-gear-pump.pdf"
    },
    {
      name: "GPSS Series — All Stainless Steel (SS-316)",
      subtitle: "Sanitary Pharma & Corrosive Chemical Grade",
      image: "/assets/img/product/gpss.png",
      pressure: "Up to 10 Bar",
      flow: "5 to 300 LPM",
      badge: "Sanitary & Pharma",
      moc: "AISI SS-316 / SS-304",
      pdf: "/pdf/pacifluid-gpss-ss-gear-pump.pdf"
    },
    {
      name: "PIGB Series — Fuel Injection Internal Gear",
      subtitle: "High-Pressure Oil Injection for Boilers & Burners",
      image: "/assets/img/product/pigb.png",
      pressure: "Up to 35 Bar (500 PSI)",
      flow: "10 to 200 LPM",
      badge: "High Pressure Fuel",
      moc: "High-tensile Alloy Steel",
      pdf: "/pdf/pacifluid-pigb-internal-gear-pump.pdf"
    },
    {
      name: "PIGA Series — Internal Eccentric Gear Pump",
      subtitle: "High-Viscosity Transfer (Bitumen, Resins, Inks)",
      image: "/assets/img/product/piga.png",
      pressure: "Up to 10 Bar",
      flow: "10 to 450 LPM",
      badge: "High Viscosity",
      moc: "CI / Steel / Jacketed",
      pdf: "/pdf/pacifluid-piga-internal-gear-pump.pdf"
    }
  ];

  const currentPump = heroPumps[selectedPumpIndex];

  return (
    <section className="relative bg-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E7EB] overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-35"
        >
          <source src="/img/video.mp4" type="video/mp4" />
        </video>
        {/* Soft text protection gradient on left and bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />
      </div>

      {/* Background Blueprint Grid Layer */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-50 z-[1]" />

      {/* Decorative Technical Vector Lines */}
      <svg 
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.035] pointer-events-none z-[1]" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 800 800"
      >
        <circle cx="400" cy="400" r="350" fill="none" stroke="#0B2341" strokeWidth="2" strokeDasharray="8 8" />
        <circle cx="400" cy="400" r="280" fill="none" stroke="#0B2341" strokeWidth="1.5" />
        <circle cx="400" cy="400" r="160" fill="none" stroke="#155A9C" strokeWidth="2" />
        <line x1="50" y1="400" x2="750" y2="400" stroke="#0B2341" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="400" y1="50" x2="400" y2="750" stroke="#0B2341" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT 45% (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F4F7] border border-[#E5E7EB] text-xs font-semibold tracking-wider text-[#155A9C] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
              <span>INDUSTRIAL PUMP MANUFACTURER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0B2341] leading-[1.12]">
                Precision Pumping Solutions <br className="hidden sm:inline" />
                <span className="text-[#155A9C]">Built for Industry.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl">
              Pacifluid Pumps manufactures industrial pumping solutions designed for reliable performance across demanding industrial applications. Engineered with precision gear geometry, zero pulsation, and 100% hydrostatic testing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#D71920] hover:bg-[#ba141a] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0B2341] bg-white border border-[#E5E7EB] hover:border-[#0B2341] hover:bg-[#F7F8FA] rounded-xl shadow-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Request a Quote</span>
              </button>

              {/* Manufacturing Video Lightbox Trigger */}
              <button
                onClick={() => onOpenVideo && onOpenVideo()}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#155A9C] hover:text-[#0B2341] transition-colors py-2 px-3 rounded-lg hover:bg-[#F1F4F7]"
              >
                <div className="w-7 h-7 rounded-full bg-[#155A9C]/10 flex items-center justify-center text-[#155A9C]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Machining Video</span>
              </button>
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#0B2341]">34+ Years</p>
                <p className="text-xs text-[#667085]">Established 1990</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#0B2341]">100%</p>
                <p className="text-xs text-[#667085]">Hydrostatic Tested</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#155A9C]">ISO 9001</p>
                <p className="text-xs text-[#667085]">TUV Rheinland Certified</p>
              </div>
            </div>
          </div>

          {/* RIGHT 55% (Cols 7-12) — Precision Product Presentation */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Interactive Pump Model Selector Tabs */}
            <div className="w-full flex items-center justify-center gap-1 sm:gap-2 mb-4 overflow-x-auto pb-2">
              {heroPumps.map((pump, idx) => (
                <button
                  key={pump.name}
                  onClick={() => setSelectedPumpIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 border ${
                    selectedPumpIndex === idx
                      ? "bg-[#0B2341] text-white border-[#0B2341] shadow-sm"
                      : "bg-[#F7F8FA] text-[#667085] border-[#E5E7EB] hover:bg-white hover:text-[#0B2341]"
                  }`}
                >
                  {pump.badge}
                </button>
              ))}
            </div>

            {/* Product Image Stage */}
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center bg-radial from-[#F1F4F7] to-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-10 shadow-sm group">
              
              {/* Technical Blueprint Accent Lines in Background */}
              <div className="absolute inset-4 rounded-xl border border-dashed border-[#155A9C]/20 pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#155A9C]/10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#155A9C]/10 pointer-events-none" />

              {/* Large Pump Photo */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  key={currentPump.image}
                  src={currentPump.image}
                  alt={currentPump.name}
                  className="max-h-[85%] max-w-[85%] object-contain product-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Subtle Floating Technical Card 1 (Top-Left) */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm border border-[#E5E7EB] shadow-md rounded-xl p-3 text-left animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#155A9C]" />
                  <p className="text-[11px] font-bold text-[#0B2341] uppercase tracking-wide">
                    Industrial Pump Solutions
                  </p>
                </div>
                <p className="text-[10px] text-[#667085] mt-0.5">
                  Pressure: <span className="font-semibold text-[#0B2341]">{currentPump.pressure}</span>
                </p>
                <p className="text-[10px] text-[#667085]">
                  Discharge: <span className="font-semibold text-[#0B2341]">{currentPump.flow}</span>
                </p>
              </div>

              {/* Subtle Floating Technical Card 2 (Bottom-Right) */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-sm border border-[#E5E7EB] shadow-md rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold text-[#0B2341]">Precision Engineering</span>
                </div>
                <p className="text-[10px] text-[#667085] mt-0.5">
                  MOC: <span className="font-medium text-[#0B2341]">{currentPump.moc}</span>
                </p>
                <p className="text-[10px] text-[#155A9C] font-medium mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Factory Hydro-Tested
                </p>
              </div>
            </div>

            {/* Model Details Under Stage */}
            <div className="w-full mt-4 flex items-center justify-between px-2 text-xs">
              <div>
                <p className="font-bold text-[#0B2341]">{currentPump.name}</p>
                <p className="text-[#667085]">{currentPump.subtitle}</p>
              </div>
              <a
                href={currentPump.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#155A9C] hover:text-[#0B2341] font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Specs</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
