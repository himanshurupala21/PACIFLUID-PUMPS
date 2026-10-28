"use client";

import { ArrowRight, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function QuoteCTA({ onOpenQuote }) {
  return (
    <section className="py-20 bg-[#fafaf9] border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#e5e5e2] p-8 lg:p-14 shadow-sm relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e31e24]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="eyebrow justify-center">
              <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
              <span>CUSTOM INDUSTRIAL HYDRAULIC SIZING</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18]">
              Need a Tailored Pump Specification or Bulk Quotation?
            </h2>

            <p className="font-sans text-base text-[#666663] leading-relaxed">
              Our engineering team assists process managers, boiler OEMs, and procurement engineers in sizing the ideal pump model, motor kilowatt rating, metallurgy, and mechanical sealing for any fluid viscosity.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn btn-red px-8 py-3.5 text-sm sm:text-base font-semibold shadow-md group cursor-pointer"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn border border-[#1a1a18] text-[#1a1a18] hover:bg-[#1a1a18] hover:text-white px-6 py-3.5 text-sm sm:text-base font-semibold"
              >
                <Phone className="w-4 h-4 text-[#e31e24]" />
                <span>Call +91 99248 42266</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#e5e5e2] flex flex-wrap items-center justify-center gap-6 text-xs text-[#666663] font-sans">
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
