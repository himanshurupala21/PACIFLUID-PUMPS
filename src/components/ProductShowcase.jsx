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
    <section id="products-section" className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
              MANUFACTURING PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
              OUR PUMPING SOLUTIONS
            </h2>
            <p className="text-base text-[#667085] max-w-2xl">
              Engineered for reliable industrial performance. Precision positive displacement gear pumps built for heavy viscosity, aggressive chemical transfer, and high-pressure fuel injection.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B2341] bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-white hover:border-[#0B2341] rounded-lg transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#155A9C]" />
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
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all shrink-0 border ${
                selectedCategory === cat.id
                  ? "bg-[#0B2341] text-white border-[#0B2341] shadow-sm"
                  : "bg-[#F7F8FA] text-[#667085] border-[#E5E7EB] hover:bg-white hover:text-[#0B2341]"
              }`}
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
              className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#155A9C]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative w-full aspect-[4/3] bg-[#F7F8FA] rounded-xl p-6 flex items-center justify-center border border-[#E5E7EB] mb-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain product-shadow transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase bg-white/95 text-[#155A9C] border border-[#E5E7EB] rounded-md shadow-2xs">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Meta & Heading */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#155A9C] tracking-wider uppercase">
                    {product.category.replace("-", " ")}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2341] group-hover:text-[#155A9C] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Key Technical Specs Pill Box */}
                <div className="mt-5 p-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-[#667085] block text-[10px]">Flow Rate</span>
                    <span className="font-semibold text-[#0B2341]">{product.specs.capacity.split("(")[0]}</span>
                  </div>
                  <div>
                    <span className="text-[#667085] block text-[10px]">Max Pressure</span>
                    <span className="font-semibold text-[#0B2341]">{product.specs.pressure.split("(")[0]}</span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-[#E5E7EB]/70">
                    <span className="text-[#667085] text-[10px]">MOC: </span>
                    <span className="font-medium text-[#0B2341]">{product.specs.moc.split(",")[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenSpecs && onOpenSpecs(product)}
                  className="text-xs font-semibold text-[#155A9C] hover:text-[#0B2341] flex items-center gap-1.5 transition-colors group/btn"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenQuote && onOpenQuote(product)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0B2341] hover:bg-[#D71920] rounded-lg transition-colors shadow-2xs active:scale-95"
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
