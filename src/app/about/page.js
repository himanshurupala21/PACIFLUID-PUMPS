"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="grow">
        {/* Page Header */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#155A9C]">
              <span>COMPANY PROFILE & INFRASTRUCTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              About Pacifluid Pumps & Shakti Engineers
            </h1>
            <p className="text-base text-[#667085] max-w-2xl leading-relaxed">
              Engineering high-reliability positive displacement gear pumps in Gujarat, India since 1990.
            </p>
          </div>
        </section>

        {/* Narrative & History */}
        <section className="py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                  ESTABLISHED 1990
                </span>
                <h2 className="text-3xl font-extrabold text-[#0B2341]">
                  Pioneering Fluid Precision Engineering
                </h2>
                <p className="text-sm text-[#667085] leading-relaxed">
                  Founded by <strong>Shakti Engineers</strong>, Pacifluid Pumps has grown from a specialized tooling workshop into one of India’s most respected manufacturers of industrial positive displacement rotary twin gear pumps, sanitary stainless steel gear pumps, and internal fuel injection gear pumps.
                </p>
                <p className="text-sm text-[#667085] leading-relaxed">
                  Headquartered in Ahmedabad with an advanced manufacturing works facility in Ahmedabad, Gujarat, we supply continuous process plants, public sector undertakings, boiler OEMs, and international export partners across 28+ countries.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                  <div>
                    <p className="text-2xl font-extrabold text-[#0B2341]">34+ Years</p>
                    <p className="text-xs text-[#667085]">Engineering Heritage</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-[#0B2341]">65,000+</p>
                    <p className="text-xs text-[#667085]">Installations Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md bg-slate-100">
                  <img 
                    src="/img/about-overview.jpg" 
                    alt="Pacifluid Pumps Manufacturing & Engineering Overview" 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <FloatingActions onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
