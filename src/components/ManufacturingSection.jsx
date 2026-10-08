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
    <section className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
            IN-HOUSE PRODUCTION CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
            Built Around Precision Engineering
          </h2>
          <p className="text-base text-[#667085]">
            Our Ahmedabad works facility operates dedicated machining bays, tooling setups, and computerized testing infrastructure to deliver zero-defect positive displacement pumps.
          </p>
        </div>

        {/* 4 Capabilities Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] overflow-hidden group hover:border-[#155A9C]/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 space-y-2 flex-1">
                <h3 className="text-sm font-bold text-[#0B2341] group-hover:text-[#155A9C] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* One Deep Navy Technical Block (Prompt Section 15 Requirement!) */}
        <div className="bg-[#0B2341] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-xl">
          {/* Blueprint Grid Lines */}
          <div className="absolute inset-0 opacity-10 blueprint-grid-dense pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#155A9C]/30 text-xs font-semibold text-sky-300 border border-[#155A9C]/40">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
                <span>100% QUALITY INSPECTION & TEST CERTIFICATE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Hydrostatic Pressure Testing on 100% of Pumps
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Unlike mass-market assemblers, every Pacifluid pump undergoes mandatory hydrostatic pressure holding, volumetric efficiency verification, and seal integrity testing before dispatch. We supply official Test Certificates with each consignment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <p className="text-2xl font-extrabold text-white">Up to 50 Bar</p>
                <p className="text-xs text-slate-300">Hydro Test Facility</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <p className="text-2xl font-extrabold text-sky-400">Zero Leakage</p>
                <p className="text-xs text-slate-300">Mechanical Seal Validation</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
