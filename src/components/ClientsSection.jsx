"use client";

import { COMPANY_INFO } from "@/data/company";

export default function ClientsSection() {
  const clients = COMPANY_INFO.clients;
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-[#fafaf9] border-b border-[#e5e5e2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="eyebrow justify-center">
            <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
            <span>PROVEN INDUSTRIAL TRACK RECORD</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1a18]">
            TRUSTED BY INDUSTRY
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#666663]">
            Supplying mission-critical pumps to India's foremost industrial conglomerates and engineering leaders.
          </p>
        </div>

        {/* Smooth Marquee Strip */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Edge Gradient Mask */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafaf9] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafaf9] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="w-48 h-24 bg-white rounded-2xl border border-[#e5e5e2] p-4 flex items-center justify-center shrink-0 shadow-sm hover:border-[#e31e24]/40 hover:shadow-md transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Footnote */}
        <div className="text-center pt-2">
          <p className="text-xs text-[#666663] font-sans">
            Approved OEM supplier for continuous thermal boilers, oil refineries, and process plants across India.
          </p>
        </div>

      </div>
    </section>
  );
}
