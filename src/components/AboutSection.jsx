"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Factory, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Manufacturing Photography Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#e5e5e2] shadow-sm bg-[#fafaf9] group">
              <img
                src="/img/about-overview.jpg"
                alt="Pacifluid Pumps Manufacturing Facility & Global Distribution"
                className="w-full h-auto aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700 block"
              />
            </div>

            {/* Small Inset Quality Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#e5e5e2] shadow-xl max-w-xs items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e31e24]/10 p-2 shrink-0 flex items-center justify-center border border-[#e31e24]/20 text-[#e31e24]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-display font-bold text-[#1a1a18]">Heavy Duty Quality</p>
                <p className="text-[10px] text-[#666663] font-sans">100% Hydrostatic Tested</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="eyebrow">
                <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
                <span>ABOUT PACIFLUID</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18] leading-tight">
                Engineering Reliable Pumping Solutions.
              </h2>
            </div>

            <p className="font-sans text-base text-[#666663] leading-relaxed">
              Established in 1990 under <strong>Shakti Engineers</strong>, Pacifluid Pumps has emerged as one of India's foremost manufacturers and exporters of positive displacement rotary gear pumps, internal fuel injection pumps, and sanitary stainless steel transfer systems.
            </p>

            <p className="font-sans text-sm text-[#666663] leading-relaxed">
              Every pump is precision engineered using graded cast metallurgy, ground hardened shafts, and computer-verified tooth profiles. Designed to deliver quiet operation, zero cavitation, and dependable performance even in extreme temperatures and heavy duty viscous cycles.
            </p>

            {/* Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#1a1a18] font-display font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#e31e24] shrink-0" />
                <span>34+ Years Engineering Heritage</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#1a1a18] font-display font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#e31e24] shrink-0" />
                <span>100% Tested Hydrostatic Test Bay</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#1a1a18] font-display font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#e31e24] shrink-0" />
                <span>65,000+ Industrial Installations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#1a1a18] font-display font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#e31e24] shrink-0" />
                <span>Custom Metallurgy & Sealing Options</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e5e5e2] flex items-center gap-4">
              <Link
                href="/about"
                className="btn btn-sm border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] bg-white transition-all flex items-center gap-2 group"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
