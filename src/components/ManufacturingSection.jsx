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
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="eyebrow justify-center">
            <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
            <span>IN-HOUSE PRODUCTION CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18]">
            Built Around Precision Engineering
          </h2>
          <p className="font-sans text-base text-[#666663] leading-relaxed">
            Our Ahmedabad works facility operates dedicated machining bays, tooling setups, and computerized testing infrastructure to deliver zero-defect positive displacement pumps.
          </p>
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

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-display font-medium text-white/90 border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e31e24]" />
                <span>100% QUALITY INSPECTION & TEST CERTIFICATE</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Hydrostatic Pressure Testing on 100% of Pumps
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
                Unlike mass-market assemblers, every Pacifluid pump undergoes mandatory hydrostatic pressure holding, volumetric efficiency verification, and seal integrity testing before dispatch. We supply official Test Certificates with each consignment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <p className="font-display text-2xl font-bold text-white">Up to 50 Bar</p>
                <p className="font-sans text-xs text-white/60">Hydro Test Bay</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <p className="font-display text-2xl font-bold text-[#e31e24]">Zero Leakage</p>
                <p className="font-sans text-xs text-white/60">Mechanical Seal Validation</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
