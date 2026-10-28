"use client";

import { Cog, Gauge, ShieldCheck, Wrench, Layers, CheckCircle2 } from "lucide-react";

export default function ManufacturingSection() {
  const capabilities = [
    {
      title: "CNC & Precision Turning Bays",
      desc: "Micro-tolerance boring and CNC machining ensuring concentricity of rotor bores and bearing journals.",
      image: "/img/capabilities/cnc-turning-bays.jpg"
    },
    {
      title: "Gear Hobbing & Tooth Shaving",
      desc: "Specialized gear generation cutting single-helical and herringbone profiles for noiseless hydraulic flow.",
      image: "/img/capabilities/gear-hobbing-shaving.jpg"
    },
    {
      title: "Dynamic Balancing & Hardening",
      desc: "Shafts case-hardened to 58 HRC, ground between centers, and dynamically balanced to eliminate vibration.",
      image: "/img/capabilities/dynamic-balancing-hardening.jpg"
    },
    {
      title: "Hydrostatic & Performance Test Bay",
      desc: "Every single pump is tested for volumetric flow rate, suction lift, and pressure holding up to 35-50 Bar.",
      image: "/img/capabilities/hydrostatic-test-bay.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e5e5e2]">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="text-[#e31e24] text-sm">✴</span>
              <span>MANUFACTURING & QUALITY CONTROL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a18]">
              Lines open to inspection. <br className="hidden sm:inline" />
              Quality measured in decimals.
            </h2>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Every single pump that leaves Shakti Engineers passes five automated testing gates before it is sealed in your export crate.
            </p>
          </div>
        </div>

        {/* 4 Capabilities Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="card-modern overflow-hidden group flex flex-col"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#fafaf9]">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 space-y-2 flex-1">
                <h3 className="font-display text-sm font-semibold text-[#1a1a18] group-hover:text-[#e31e24] transition-colors">
                  {cap.title}
                </h3>
                <p className="font-sans text-xs text-[#666663] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cobwala Signature Night Engineering Panel */}
        <div className="card-night p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Ambient Radial Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#e31e24]/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-display font-medium text-white/90 border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e31e24]" />
                  <span>5-STAGE QUALITY GATES</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
                  100% Pre-Dispatch Hydrostatic & Volumetric Validation
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[10px] font-display uppercase tracking-wider text-white/50 block">Pass Rate</span>
                  <span className="font-display text-xl font-bold text-white">99.8%</span>
                </div>
              </div>
            </div>

            {/* 5 Testing Gates Horizontal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { gate: "Gate 01", title: "Hydrostatic Pressure", detail: "1.5x working pressure for 30 min" },
                { gate: "Gate 02", title: "Tooth Mesh Backlash", detail: "< 0.01mm optical coordinate check" },
                { gate: "Gate 03", title: "Volumetric Flow Rate", detail: "Zero pulsation verification" },
                { gate: "Gate 04", title: "Mechanical Seal Check", detail: "100% zero drop seal guarantee" },
                { gate: "Gate 05", title: "Dynamic Balancing", detail: "< 0.02mm shaft runout test" }
              ].map((item) => (
                <div key={item.gate} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <span className="text-[10px] font-display uppercase tracking-widest text-[#e31e24] font-semibold">
                    {item.gate}
                  </span>
                  <p className="font-display text-xs font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-[11px] font-sans text-white/60">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
