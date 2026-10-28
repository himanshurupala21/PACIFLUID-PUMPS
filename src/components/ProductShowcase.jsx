"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Gauge, 
  Activity, 
  Check, 
  Layers,
  Sparkles
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function ProductShowcase({ onOpenSpecs, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products-section" className="py-24 bg-white border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e5e5e2]">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="text-[#e31e24] text-sm">✴</span>
              <span>OEM CATALOGUE • SHAKTI ENGINEERS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a18]">
              Industrial Pump Range
            </h2>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Every pump precision machined to your spec and duty cycle — from high-pressure fuel injection to viscous bitumen, chemical, and sanitary food transfer.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/downloads"
              className="btn btn-sm border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] bg-white transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-[#e31e24]" />
              <span>Download Catalogs</span>
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`chip ${selectedCategory === cat.id ? "chip-active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card-modern group p-6 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative w-full aspect-[4/3] bg-[#fafaf9] rounded-2xl p-6 flex items-center justify-center border border-[#e5e5e2] mb-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain product-shadow transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-display font-semibold tracking-wider uppercase bg-[#e31e24]/10 text-[#e31e24] border border-[#e31e24]/20 rounded-full backdrop-blur-sm">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Meta & Heading */}
                <div className="space-y-2">
                  <span className="text-[11px] font-display font-semibold text-[#e31e24] tracking-wider uppercase">
                    {product.category.replace("-", " ")}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#1a1a18] group-hover:text-[#e31e24] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-[#666663] leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Key Technical Specs Box */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#fafaf9] border border-[#e5e5e2] grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-[#666663] block text-[10px] font-sans">Flow Rate</span>
                    <span className="font-display font-semibold text-[#1a1a18]">{product.specs.capacity.split("(")[0]}</span>
                  </div>
                  <div>
                    <span className="text-[#666663] block text-[10px] font-sans">Max Pressure</span>
                    <span className="font-display font-semibold text-[#1a1a18]">{product.specs.pressure.split("(")[0]}</span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-[#e5e5e2]/80">
                    <span className="text-[#666663] text-[10px] font-sans">MOC: </span>
                    <span className="font-medium text-[#1a1a18]">{product.specs.moc.split(",")[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#e5e5e2] flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenSpecs && onOpenSpecs(product)}
                  className="font-display text-xs font-semibold text-[#1a1a18] group-hover:text-[#e31e24] flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenQuote && onOpenQuote(product)}
                  className="btn btn-sm btn-red py-1 px-3.5 text-xs shadow-sm cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
