"use client";

import { Award, ShieldCheck, Globe, Factory, Gauge } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function StatsSection() {
  const stats = [
    {
      value: "34+",
      unit: "Years",
      label: "Manufacturing Legacy",
      description: "Pioneering precision fluid engineering since 1990 in Gujarat, India."
    },
    {
      value: "65,000+",
      unit: "Units",
      label: "Pumps Operating Globally",
      description: "Installed across continuous process plants, refineries & boiler houses."
    },
    {
      value: "28+",
      unit: "Countries",
      label: "International Footprint",
      description: "Reliable B2B export supply across Asia, Middle East, Africa & Americas."
    },
    {
      value: "100%",
      unit: "Hydro-Tested",
      label: "Zero Defect Assurance",
      description: "Every pump hydrostatically pressure tested to 1.5x design pressure."
    }
  ];

  return (
    <section className="bg-[#F7F8FA] py-14 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`space-y-2 ${i !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#155A9C]">
                  {stat.unit}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#111827]">
                {stat.label}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
