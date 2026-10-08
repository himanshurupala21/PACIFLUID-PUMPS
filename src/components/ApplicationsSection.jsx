"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle2, Factory, Sparkles, Filter } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export default function ApplicationsSection({ onSelectApp, onOpenQuote }) {
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

  return (
    <section id="applications-section" className="py-20 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#155A9C] shadow-sm">
            <Factory className="w-3.5 h-3.5 text-[#D71920]" />
            <span>PROCESS & FLUID HANDLING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
            18 Critical Industrial Applications
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            From high-pressure furnace oil injection to sanitary SS-316 food syrups, our positive displacement gear pumps are configured for viscosity, high temperature, abrasive wear, and corrosive fluid chemistry.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-[#E5E7EB] shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#0B2341] text-white shadow-sm"
                    : "bg-[#F7F8FA] text-[#667085] hover:text-[#0B2341] hover:bg-slate-200"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search fluids, pumps, industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl text-[#0B2341] placeholder:text-slate-400 focus:outline-none focus:border-[#155A9C] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="text-xs text-[#667085]">
            Showing {filteredApps.length} application{filteredApps.length === 1 ? "" : "s"} matching &quot;{searchQuery}&quot;
          </div>
        )}

        {/* 18 Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#155A9C]/50 p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Photo Thumbnail */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-[#E5E7EB]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-medium text-white/95 line-clamp-1">
                      {app.subtitle}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0B2341] group-hover:text-[#155A9C] transition-colors leading-snug">
                    {app.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                </div>

                {/* Key Fluids Tags */}
                <div className="pt-3 border-t border-[#E5E7EB] space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Handling Fluids:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {app.fluids.map((fl) => (
                      <span
                        key={fl}
                        className="px-2 py-0.5 text-[10px] bg-[#F1F4F7] text-[#0B2341] rounded-md font-medium"
                      >
                        {fl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action & Compatible Pumps Footer */}
              <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Recommended</span>
                  <span className="text-xs font-bold text-[#155A9C]">
                    {app.pumps.join(" • ")}
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenQuote) onOpenQuote(app.title);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold bg-[#F7F8FA] hover:bg-[#D71920] text-[#0B2341] hover:text-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredApps.length === 0 && (
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
