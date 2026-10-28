"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle2, Factory, Sparkles, Filter } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export default function ApplicationsSection({ onSelectApp, onOpenQuote, limit = null }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Applications", count: 18 },
    { id: "oil-gas", label: "Refineries & Oil / Gas", count: 2 },
    { id: "chemical", label: "Chemicals & Petrochemicals", count: 3 },
    { id: "sanitary", label: "Food & Pharma", count: 2 },
    { id: "power-energy", label: "Boilers & Power Plants", count: 2 },
    { id: "heavy-industry", label: "Heavy Machinery & Steel", count: 9 }
  ];

  const filteredApps = APPLICATIONS.filter((app) => {
    const matchesCategory = activeCategory === "all" || app.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      app.title.toLowerCase().includes(query) ||
      app.subtitle.toLowerCase().includes(query) ||
      app.description.toLowerCase().includes(query) ||
      app.fluids.some((f) => f.toLowerCase().includes(query)) ||
      app.pumps.some((p) => p.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const displayedApps = limit ? filteredApps.slice(0, limit) : filteredApps;

  return (
    <section id="applications-section" className="py-20 bg-[#fafaf9] border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="eyebrow justify-center">
            <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
            <span>PROCESS & FLUID HANDLING CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18]">
            {limit ? "Critical Industrial Applications" : "18 Critical Industrial Applications"}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#666663] leading-relaxed">
            From high-pressure furnace oil injection to sanitary SS-316 food syrups, our positive displacement gear pumps are configured for viscosity, high temperature, abrasive wear, and corrosive fluid chemistry.
          </p>
        </div>

        {/* Filter Tabs & Search Bar (Only shown on full applications page) */}
        {!limit && (
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-[#e5e5e2] shadow-sm">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`chip ${activeCategory === cat.id ? "chip-active" : ""}`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id ? "bg-white/20 text-white" : "bg-[#fafaf9] text-[#666663] border border-[#e5e5e2]"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search fluids, pumps, industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-full text-[#1a1a18] placeholder:text-stone-400 focus:outline-none focus:border-[#e31e24] focus:bg-white transition-colors"
              />
            </div>
          </div>
        )}

        {/* Results Counter if searching */}
        {!limit && searchQuery && (
          <div className="text-xs text-[#666663] font-sans">
            Showing {filteredApps.length} application{filteredApps.length === 1 ? "" : "s"} matching &quot;{searchQuery}&quot;
          </div>
        )}

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedApps.map((app) => (
            <div
              key={app.id}
              className="card-modern p-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Photo Thumbnail */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#fafaf9] border border-[#e5e5e2]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-display font-medium text-white/95 line-clamp-1">
                      {app.subtitle}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-bold text-[#1a1a18] group-hover:text-[#e31e24] transition-colors leading-snug">
                    {app.title}
                  </h3>
                  <p className="font-sans text-xs text-[#666663] leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                </div>

                {/* Key Fluids Tags */}
                <div className="pt-3 border-t border-[#e5e5e2] space-y-1.5">
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#666663] block">
                    Handling Fluids:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {app.fluids.map((fl) => (
                      <span
                        key={fl}
                        className="px-2.5 py-0.5 text-[10px] bg-[#fafaf9] border border-[#e5e5e2] text-[#1a1a18] rounded-full font-medium"
                      >
                        {fl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action & Compatible Pumps Footer */}
              <div className="mt-5 pt-3 border-t border-[#e5e5e2] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block font-sans">Recommended</span>
                  <span className="text-xs font-display font-semibold text-[#e31e24]">
                    {app.pumps.join(" • ")}
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenQuote) onOpenQuote(app.title);
                  }}
                  className="btn btn-sm border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] py-1 px-3 text-xs flex items-center gap-1 cursor-pointer group/inq"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/inq:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Applications Button when limited */}
        {limit && (
          <div className="pt-4 flex justify-center">
            <Link
              href="/applications"
              className="btn btn-red px-8 py-3.5 text-sm font-semibold shadow-md group"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Empty Search State */}
        {!limit && filteredApps.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5E7EB] p-8 space-y-3">
            <p className="text-base font-bold text-[#0B2341]">No applications found</p>
            <p className="text-xs text-[#667085]">
              No results matched your search &quot;{searchQuery}&quot;. Try clearing filters or searching another fluid.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold bg-[#0B2341] text-white rounded-xl hover:bg-[#155A9C] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
