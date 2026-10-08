"use client";

import { ArrowRight, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function QuoteCTA({ onOpenQuote }) {
  return (
    <section className="py-20 bg-[#F7F8FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 lg:p-14 shadow-sm blueprint-grid">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F4F7] border border-[#E5E7EB] text-xs font-semibold text-[#155A9C] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D71920]" />
              <span>CUSTOM INDUSTRIAL HYDRAULIC SIZING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
              Need a Tailored Pump Specification or Bulk Quotation?
            </h2>

            <p className="text-base text-[#667085] leading-relaxed">
              Our engineering team assists process managers, boiler OEMs, and procurement engineers in sizing the ideal pump model, motor kilowatt rating, metallurgy, and mechanical sealing for any fluid viscosity.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#D71920] hover:bg-[#ba141a] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0B2341] bg-white border border-[#E5E7EB] hover:border-[#0B2341] hover:bg-[#F7F8FA] rounded-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#155A9C]" />
                <span>Call +91 99248 42266</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center justify-center gap-6 text-xs text-[#667085]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Response within 2 business hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Comprehensive technical datasheet provided
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Direct OEM factory pricing
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
