"use client";

import { Award, ShieldCheck, Globe, Factory, Gauge } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function StatsSection() {
  const stats = [
    {
      value: "38+",
      unit: "Years",
      label: "Manufacturing Legacy",
      description: "Precision fluid engineering since 1988."
    },
    {
      value: "50k+",
      unit: "Units",
      label: "Pumps Operating",
      description: "Deployed across heavy process industries."
    },
    {
      value: "500+",
      unit: "Partners",
      label: "Industrial Clients",
      description: "Refineries, power plants & OEMs."
    },
    {
      value: "20+",
      unit: "Sectors",
      label: "Process Industries",
      description: "Bitumen, chemicals, food & power."
    },
    {
      value: "1,000",
      unit: "LPM",
      label: "Max Flow Capacity",
      description: "Continuous positive displacement."
    }
  ];

  const standards = [
    "100% Hydrostatically Tested",
    "Zero-Leakage Seal Validation",
    "EN-GJL-250 / SS-316 / Alloy 20 MOC",
    "24/7 OEM Spares & Support Desk"
  ];

  return (
    <section className="bg-[#fafaf9] py-12 lg:py-16 border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* 5-Column Cobwala Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 pb-10 border-b border-[#e5e5e2]">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`space-y-1.5 ${i !== 0 ? "md:border-l md:border-[#e5e5e2] md:pl-6" : ""}`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18]">
                  {stat.value}
                </span>
                <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                  {stat.unit}
                </span>
              </div>
              <h3 className="font-display text-xs font-semibold text-[#1a1a18]">
                {stat.label}
              </h3>
              <p className="font-sans text-[11px] text-[#666663] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Standards Pill Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#1a1a18]">
            <span className="text-[#e31e24]">✴</span>
            <span>MANUFACTURING ASSURANCE</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {standards.map((item, idx) => (
              <span
                key={idx}
                className="chip text-[11px] text-[#1a1a18] bg-white border-[#e5e5e2]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24]" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
