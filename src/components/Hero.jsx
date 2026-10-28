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

  const currentPump = heroPumps[selectedPumpIndex] || heroPumps[0];
  const [anatomyView, setAnatomyView] = useState("assembled"); // 'assembled' or 'exploded'
  const [showLabels, setShowLabels] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section className="relative bg-white pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-24 border-b border-[#E5E7EB] overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/img/video.mp4" type="video/mp4" />
        </video>
        {/* Cobwala Ambient Radial Warm/Red Glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#e31e24]/[0.08] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
      </div>

      {/* Background Blueprint Grid Layer */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40 z-[1]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT 50% (Cols 1-6) — Cobwala Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
            
            {/* Eyebrow Label with Star */}
            <div className="eyebrow">
              <span className="text-[#e31e24] text-sm">✴</span>
              <span>OEM EXPERT • ROTARY GEAR • FUEL INJECTION • SS-316</span>
            </div>

            {/* Cobwala Signature Multi-Line Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-[#1a1a18] leading-[1.04]">
                We build the pump. <br />
                You power the <br />
                <span className="text-[#e31e24]">industry.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#666663] leading-relaxed max-w-xl">
              Precision positive displacement gear pumps manufactured to your duty cycle, viscosity, and spec — from high-pressure fuel injection to viscous bitumen & chemical transfer.
            </p>

            {/* Cobwala Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn btn-red group shadow-md"
              >
                <span>Start Your OEM RFQ</span>
                <span className="text-white text-sm">✴</span>
              </button>

              <Link
                href="/products"
                className="btn border border-[#1a1a18] text-[#1a1a18] hover:bg-[#1a1a18] hover:text-white"
              >
                <span>Explore Pump Range</span>
              </Link>

              {/* Manufacturing Video Lightbox Trigger */}
              <button
                onClick={() => onOpenVideo && onOpenVideo()}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] transition-colors py-2 px-3 rounded-full hover:bg-[#f7f7f6]"
              >
                <div className="w-7 h-7 rounded-full bg-[#e31e24]/10 flex items-center justify-center text-[#e31e24]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Machining</span>
              </button>
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-6 border-t border-[#e5e5e2] grid grid-cols-3 gap-4">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a18]">38+ Years</p>
                <p className="text-xs text-[#666663] font-sans">Established 1988</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a18]">100%</p>
                <p className="text-xs text-[#666663] font-sans">Hydrostatic Tested</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#e31e24]">50,000+</p>
                <p className="text-xs text-[#666663] font-sans">Pumps Deployed</p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs font-display tracking-widest uppercase text-[#666663]">
              <span>SCROLL</span>
              <span className="text-[#e31e24]">✴</span>
            </div>
          </div>

          {/* RIGHT 50% (Cols 7-12) — Cobwala Precision Engineering Stage */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Model Selector Tabs */}
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

            {/* Cobwala Rounded-3xl Stage with Radial Glow */}
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center bg-[#fafaf9] rounded-3xl border border-[#e5e5e2] p-6 lg:p-10 shadow-sm group overflow-hidden">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Blueprint Reference Matrix */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-[#1a1a18]/10 pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1a1a18]/5 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1a1a18]/5 pointer-events-none" />

              {/* Product Photo on Stage */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  key={currentPump.image}
                  src={currentPump.image}
                  alt={currentPump.name}
                  className={`max-h-[85%] max-w-[85%] object-contain product-shadow-lg transition-all duration-700 ${
                    autoRotate ? "animate-pulse" : ""
                  } ${anatomyView === "exploded" ? "scale-110" : "scale-100"}`}
                />
              </div>

              {/* Floating Technical Tag 1 (Top-Left) */}
              {showLabels && (
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-[#e5e5e2] shadow-lg rounded-2xl p-2.5 sm:p-3 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#e31e24]" />
                    <p className="text-[10px] sm:text-[11px] font-display font-bold text-[#1a1a18] uppercase tracking-wide">
                      Industrial Solutions
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#666663] mt-0.5 font-sans">
                    Pressure: <span className="font-semibold text-[#1a1a18]">{currentPump.pressure}</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#666663] font-sans">
                    Discharge: <span className="font-semibold text-[#1a1a18]">{currentPump.flow}</span>
                  </p>
                </div>
              )}

              {/* Floating Technical Tag 2 (Bottom-Right) */}
              {showLabels && (
                <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-[#e5e5e2] shadow-lg rounded-2xl p-2.5 sm:p-3 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] sm:text-[11px] font-display font-bold text-[#1a1a18]">Zero Leakage</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#666663] mt-0.5 font-sans">
                    MOC: <span className="font-medium text-[#1a1a18]">{currentPump.moc}</span>
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#e31e24] font-display font-medium mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> 100% Hydro-Tested
                  </p>
                </div>
              )}
            </div>

            {/* Cobwala Stage Control Bar (Pill Bar) */}
            <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
              <div className="flex items-center gap-1.5 bg-[#141416] text-white rounded-full p-1 border border-black/10">
                <button
                  onClick={() => setAnatomyView(anatomyView === "assembled" ? "exploded" : "assembled")}
                  className={`px-3 py-1 rounded-full text-[11px] font-display transition-colors ${
                    anatomyView === "assembled" ? "bg-[#e31e24] text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {anatomyView === "assembled" ? "Assembled" : "Exploded Anatomy"}
                </button>
                <button
                  onClick={() => setShowLabels(!showLabels)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-display transition-colors ${
                    showLabels ? "bg-white/20 text-white" : "text-white/50"
                  }`}
                >
                  Labels
                </button>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-display transition-colors ${
                    autoRotate ? "bg-[#e31e24] text-white" : "text-white/50"
                  }`}
                >
                  Auto-Rotate
                </button>
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
