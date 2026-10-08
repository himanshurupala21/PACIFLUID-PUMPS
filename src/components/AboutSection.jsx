"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Factory, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Manufacturing Photography Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md bg-[#F7F8FA] group">
              <img
                src="/img/about-overview.jpg"
                alt="Pacifluid Pumps Manufacturing Facility & Global Distribution"
                className="w-full h-auto aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700 block"
              />
            </div>

            {/* Small Inset Photo & Certification Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xl max-w-xs items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#F1F4F7] p-1 shrink-0 flex items-center justify-center border border-[#E5E7EB]">
                <img src="/img/iso-new.jpg" alt="ISO 9001:2015" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#0B2341]">ISO 9001:2015</p>
                <p className="text-[10px] text-[#667085]">TUV Rheinland Audited QMS</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                ABOUT PACIFLUID
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341] leading-tight">
                Engineering Reliable Pumping Solutions.
              </h2>
            </div>

            <p className="text-base text-[#667085] leading-relaxed">
              Established in 1990 under <strong>Shakti Engineers</strong>, Pacifluid Pumps has emerged as one of India's foremost manufacturers and exporters of positive displacement rotary gear pumps, internal fuel injection pumps, and sanitary stainless steel transfer systems.
            </p>

            <p className="text-sm text-[#667085] leading-relaxed">
              Every pump is precision engineered using graded cast metallurgy, ground hardened shafts, and computer-verified tooth profiles. Designed to deliver quiet operation, zero cavitation, and dependable performance even in extreme temperatures and heavy duty viscous cycles.
            </p>

            {/* Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#111827] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#155A9C] shrink-0" />
                <span>34+ Years Engineering Heritage</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#111827] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#155A9C] shrink-0" />
                <span>100% Tested Hydrostatic Test Bay</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#111827] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#155A9C] shrink-0" />
                <span>NSIC Registered Govt. Supplier</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#111827] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#155A9C] shrink-0" />
                <span>Custom Metallurgy & Sealing Options</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#155A9C] hover:text-[#0B2341] transition-colors"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
