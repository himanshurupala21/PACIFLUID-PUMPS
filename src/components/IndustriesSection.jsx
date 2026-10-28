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
    <section className="py-24 bg-white border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="eyebrow justify-center">
            <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
            <span>TARGET PROCESS SECTORS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18]">
            Industries We Serve
          </h2>
          <p className="font-sans text-base text-[#666663] leading-relaxed">
            Supplying heavy duty B2B fluid solutions across India and international markets for continuous plant operations.
          </p>
        </div>

        {/* Minimal White Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="card-modern p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#fafaf9] flex items-center justify-center border border-[#e5e5e2] group-hover:scale-105 group-hover:border-[#e31e24]/30 transition-all">
                  {iconMap[ind.icon] || <Cog className="w-5 h-5 text-[#e31e24]" />}
                </div>

                <h3 className="font-display text-base font-bold text-[#1a1a18] group-hover:text-[#e31e24] transition-colors">
                  {ind.name}
                </h3>

                <p className="font-sans text-xs text-[#666663] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#e5e5e2]">
                <span className="text-[10px] text-[#666663] block mb-0.5 font-sans">Recommended:</span>
                <span className="text-[11px] font-display font-semibold text-[#e31e24]">
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
