"use client";

import { COMPANY_INFO } from "@/data/company";

export default function ClientsSection() {
  const clients = COMPANY_INFO.clients;
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-[#F7F8FA] border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
            PROVEN INDUSTRIAL TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2341]">
            TRUSTED BY INDUSTRY
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Supplying mission-critical pumps to India's foremost industrial conglomerates and engineering leaders.
          </p>
        </div>

        {/* Smooth Marquee Strip (Prompt Section 14 Requirement!) */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Edge Gradient Mask */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#F7F8FA] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#F7F8FA] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="w-48 h-24 bg-white rounded-xl border border-[#E5E7EB] p-4 flex items-center justify-center shrink-0 shadow-2xs hover:shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small Trust Footnote */}
        <div className="text-center pt-2">
          <p className="text-xs text-[#667085]">
            Approved OEM supplier for continuous thermal boilers, oil refineries, and dairy plants across India.
          </p>
        </div>

      </div>
    </section>
  );
}
