"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Layers, Wrench, Shield, CheckCircle2 } from "lucide-react";

export default function OEMServicesSection({ onOpenQuote }) {
  const oemCapabilities = [
    {
      step: "01",
      title: "Custom Porting & Flange Architecture",
      desc: "Flanged connections engineered to your existing pipeline geometry — ANSI 150#, DIN PN16, JIS, or threaded BSP/NPT ports without re-piping your skids.",
      specs: ["ANSI 150# / DIN PN16 / BSP / NPT", "Custom center-line heights", "Inline or 90° orientation"]
    },
    {
      step: "02",
      title: "High-Temperature Jacketed Housings",
      desc: "Integral steam or thermal-oil jackets designed for molten bitumen, asphalt, waxes, and glues. Prevents cold-start solidification up to 300°C.",
      specs: ["Steam / Thermic Fluid Jackets", "Zero cold-seizure design", "Cast Steel & Ductile Iron MOC"]
    },
    {
      step: "03",
      title: "Bespoke Metallurgy & Sealing Protocols",
      desc: "Tailored metallurgy (Cast Iron FG-260, Cast Steel WCB, AISI SS-316, Alloy 20) combined with cartridge mechanical seals or high-temp graphited packing.",
      specs: ["SS-316 / Cast Steel / Bronze", "Single / Double Mechanical Seals", "FDA compliant food elastomers"]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#fafaf9] border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="text-[#e31e24] text-sm">✴</span>
              <span>OEM & BESPOKE ENGINEERING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a18]">
              Your application. Your duty cycle. <br className="hidden sm:inline" />
              Our precision facility.
            </h2>
          </div>
          <p className="font-sans text-base text-[#666663] max-w-md leading-relaxed">
            Private label OEM manufacturing, custom porting, bespoke shaft metallurgy, and high-temp jackets — from single unit prototypes to fleet industrial consignments.
          </p>
        </div>

        {/* 3-Column Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {oemCapabilities.map((item) => (
            <div 
              key={item.step}
              className="card-modern p-8 flex flex-col justify-between group hover:border-[#e31e24]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-2xl font-bold text-[#e31e24]">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#1a1a18] group-hover:bg-[#e31e24] group-hover:text-white transition-colors duration-300">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-[#1a1a18] mb-3 group-hover:text-[#e31e24] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-sans text-[#666663] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#e5e5e2] space-y-2">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs font-display text-[#1a1a18]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e31e24] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* OEM Consultation Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-[#e5e5e2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-[#1a1a18]">
              Need a custom pump skid or OEM mounting adaptation?
            </h4>
            <p className="text-xs text-[#666663] font-sans">
              Our engineering department provides 2D/3D CAD integration files within 48 hours.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote && onOpenQuote({ notes: "Inquiry for OEM Custom Engineering" })}
            className="btn btn-red btn-sm shrink-0 shadow-sm"
          >
            <span>Discuss OEM Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
