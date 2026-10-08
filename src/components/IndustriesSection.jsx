"use client";

import Link from "next/link";
import { 
  FlaskConical, 
  Utensils, 
  Flame, 
  Truck, 
  Wheat, 
  Cog, 
  Factory, 
  Palette, 
  ArrowRight 
} from "lucide-react";
import { INDUSTRIES } from "@/data/industries";

export default function IndustriesSection() {
  const iconMap = {
    FlaskConical: <FlaskConical className="w-5 h-5 text-[#155A9C]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#155A9C]" />,
    Flame: <Flame className="w-5 h-5 text-[#D71920]" />,
    Truck: <Truck className="w-5 h-5 text-[#155A9C]" />,
    Wheat: <Wheat className="w-5 h-5 text-[#155A9C]" />,
    Cog: <Cog className="w-5 h-5 text-[#155A9C]" />,
    Factory: <Factory className="w-5 h-5 text-[#155A9C]" />,
    Palette: <Palette className="w-5 h-5 text-[#155A9C]" />
  };

  return (
    <section className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
            TARGET PROCESS SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
            Industries We Serve
          </h2>
          <p className="text-base text-[#667085]">
            Supplying heavy duty B2B fluid solutions across India and international markets for continuous plant operations.
          </p>
        </div>

        {/* Minimal White Cards Grid (Prompt Section 13 Requirement!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#155A9C]/50 p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F4F7] flex items-center justify-center border border-[#E5E7EB] group-hover:scale-110 transition-transform">
                  {iconMap[ind.icon] || <Cog className="w-5 h-5 text-[#155A9C]" />}
                </div>

                <h3 className="text-base font-bold text-[#0B2341] group-hover:text-[#155A9C] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-[#667085] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E7EB]">
                <span className="text-[10px] text-[#667085] block mb-0.5">Recommended:</span>
                <span className="text-[11px] font-semibold text-[#0B2341]">
                  {ind.pumps}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
