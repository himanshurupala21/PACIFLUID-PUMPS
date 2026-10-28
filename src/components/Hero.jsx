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
      name: "GP Series — External Rotary Gear Pump",
      subtitle: "Flagship Heavy Duty Positive Displacement",
      image: "/assets/img/product/gp.png",
      pressure: "Up to 10 Bar (142 PSI)",
      flow: "5 to 500 LPM",
      badge: "Flagship Model",
      moc: "Cast Iron / WCB",
      pdf: "/pdf/pacifluid-gp-gear-pump.pdf"
    },
    {
      name: "GPSS Series — Stainless Steel Rotary Gear Pump",
      subtitle: "Sanitary Pharma & Corrosive Chemical Grade",
      image: "/assets/img/product/gpss.png",
      pressure: "Up to 10 Bar",
      flow: "5 to 300 LPM",
      badge: "Sanitary & Pharma",
      moc: "AISI SS-316 / SS-304",
      pdf: "/pdf/pacifluid-gpss-ss-gear-pump.pdf"
    },
    {
      name: "PIGB Series — Fuel Injection Gear Pump (internal pump)",
      subtitle: "High-Pressure Oil Injection for Boilers & Burners",
      image: "/assets/img/product/pigb.png",
      pressure: "Up to 35 Bar (500 PSI)",
      flow: "10 to 200 LPM",
      badge: "High Pressure Fuel",
      moc: "High-tensile Alloy Steel",
      pdf: "/pdf/pacifluid-pigb-internal-gear-pump.pdf"
    },
    {
      name: "PGP Series — Precision External Gear",
      subtitle: "High-Precision Forced Lubrication & Machine Tools",
      image: "/assets/img/product/pgp.png",
      pressure: "Up to 25 Bar (355 PSI)",
      flow: "1.5 to 125 LPM",
      badge: "High Precision",
      moc: "High-grade CI FG-260",
      pdf: "/pdf/pacifluid-pgp-rotary-gear-pump.pdf"
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
            <div className="eyebrow">
              <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24] animate-pulse" />
              <span>INDUSTRIAL PUMP MANUFACTURER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1a1a18] leading-[1.08]">
                Precision Pumping Solutions <br className="hidden sm:inline" />
                <span className="text-[#e31e24]">Built for Industry.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#666663] leading-relaxed max-w-xl">
              Pacifluid Pumps manufactures heavy-duty positive displacement pumping solutions engineered for reliable, zero-pulsation performance across demanding industrial environments with 100% factory hydrostatic testing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/products"
                className="btn btn-red group shadow-md"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn border border-[#1a1a18] text-[#1a1a18] hover:bg-[#1a1a18] hover:text-white"
              >
                <span>Request a Quote</span>
              </button>

              {/* Manufacturing Video Lightbox Trigger */}
              <button
                onClick={() => onOpenVideo && onOpenVideo()}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] transition-colors py-2 px-3 rounded-full hover:bg-[#f7f7f6]"
              >
                <div className="w-7 h-7 rounded-full bg-[#e31e24]/10 flex items-center justify-center text-[#e31e24]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Machining Video</span>
              </button>
            </div>
          </div>

          {/* RIGHT 55% (Cols 7-12) — Precision Product Presentation */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Interactive Pump Model Selector Tabs */}
            <div className="w-full flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-1">
              {heroPumps.map((pump, idx) => (
                <button
                  key={pump.name}
                  onClick={() => setSelectedPumpIndex(idx)}
                  className={`chip ${selectedPumpIndex === idx ? "chip-active" : ""}`}
                >
                  {pump.badge}
                </button>
              ))}
            </div>

            {/* Product Image Stage */}
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center bg-[#fafaf9] rounded-3xl border border-[#e5e5e2] p-6 lg:p-10 shadow-sm group overflow-hidden">
              
              {/* Cobwala Ambient Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Technical Blueprint Accent Lines in Background */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-[#1a1a18]/10 pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1a1a18]/5 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1a1a18]/5 pointer-events-none" />

              {/* Large Pump Photo */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  key={currentPump.image}
                  src={currentPump.image}
                  alt={currentPump.name}
                  className="max-h-[85%] max-w-[85%] object-contain product-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Technical Card 1 (Top-Left) */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-[#e5e5e2] shadow-lg rounded-2xl p-3 text-left animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#e31e24]" />
                  <p className="text-[11px] font-display font-bold text-[#1a1a18] uppercase tracking-wide">
                    Industrial Solutions
                  </p>
                </div>
                <p className="text-[11px] text-[#666663] mt-1 font-sans">
                  Pressure: <span className="font-semibold text-[#1a1a18]">{currentPump.pressure}</span>
                </p>
                <p className="text-[11px] text-[#666663] font-sans">
                  Discharge: <span className="font-semibold text-[#1a1a18]">{currentPump.flow}</span>
                </p>
              </div>

              {/* Floating Technical Card 2 (Bottom-Right) */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-[#e5e5e2] shadow-lg rounded-2xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-display font-bold text-[#1a1a18]">Precision Machined</span>
                </div>
                <p className="text-[11px] text-[#666663] mt-1 font-sans">
                  MOC: <span className="font-medium text-[#1a1a18]">{currentPump.moc}</span>
                </p>
                <p className="text-[10px] text-[#e31e24] font-display font-medium mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Factory Hydro-Tested
                </p>
              </div>
            </div>

            {/* Model Details Under Stage */}
            <div className="w-full mt-4 flex items-center justify-between px-2 text-xs">
              <div>
                <p className="font-display font-bold text-[#1a1a18] text-sm">{currentPump.name}</p>
                <p className="text-[#666663] font-sans text-xs">{currentPump.subtitle}</p>
              </div>
              <a
                href={currentPump.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="chip text-xs hover:border-[#e31e24] hover:text-[#e31e24]"
              >
                <Download className="w-3.5 h-3.5 text-[#e31e24]" />
                <span>PDF Specs</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
