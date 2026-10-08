"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Download, Gauge, Wrench } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProduct({ onOpenSpecs, onOpenQuote }) {
  const featured = PRODUCTS[0]; // GP Series Flagship

  return (
    <section className="py-24 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Large Editorial Pump Image Stage */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md bg-radial from-[#F1F4F7] to-white rounded-2xl border border-[#E5E7EB] p-8 flex items-center justify-center blueprint-grid">
                
                {/* Blueprint Dimension Markers */}
                <div className="absolute top-3 left-4 text-[10px] font-mono text-[#667085] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#155A9C]" />
                  <span>CAD / ISO 9001:2015</span>
                </div>
                
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="max-h-[85%] max-w-[85%] object-contain product-shadow-lg transition-transform duration-500 hover:scale-105"
                />

                {/* Floating Dimension Callout */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-[#E5E7EB] rounded-lg p-2.5 text-left shadow-xs">
                  <span className="text-[10px] font-bold text-[#0B2341] block">HYDROSTATIC TEST</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">100% Tested to 15 Bar</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                  PRECISION ENGINEERING
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341] leading-tight">
                  Industrial Gear Pump Solutions
                </h2>
                <p className="text-base text-[#667085] leading-relaxed">
                  Engineered with single-helical and herringbone gear tooth geometries to guarantee silent operation, pulsation-free liquid transfer, and high volumetric efficiency under heavy continuous duty cycles.
                </p>
              </div>

              {/* Feature Checklist from Prompt */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#155A9C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2341]">Reliable Construction</h4>
                    <p className="text-xs text-[#667085]">Graded Cast Iron FG-260 & Cast Steel housings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#155A9C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2341]">Industrial Applications</h4>
                    <p className="text-xs text-[#667085]">Boilers, lube circulation, fuel unloading & batching.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#155A9C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2341]">Precision-Machined</h4>
                    <p className="text-xs text-[#667085]">CNC hobbed gears and case-hardened ground shafts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#155A9C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2341]">Application-Focused</h4>
                    <p className="text-xs text-[#667085]">Custom metallurgy, mechanical seals & steam jackets.</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E5E7EB]">
                <button
                  onClick={() => onOpenSpecs && onOpenSpecs(featured)}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0B2341] hover:bg-[#155A9C] rounded-xl transition-all shadow-xs flex items-center gap-2"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={featured.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-semibold text-[#0B2341] bg-white border border-[#E5E7EB] hover:bg-[#F7F8FA] rounded-xl transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#155A9C]" />
                  <span>Download Catalog PDF</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
