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
        <section className="bg-[#fafaf9] py-16 border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <div className="eyebrow">
              <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
              <span>COMPANY PROFILE & INFRASTRUCTURE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] tracking-tight">
              About Pacifluid Pumps & Shakti Engineers
            </h1>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Engineering high-reliability positive displacement gear pumps in Gujarat, India since 1990.
            </p>
          </div>
        </section>

        {/* Narrative & History */}
        <section className="py-20 bg-white border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                  SHAKTI ENGINEERS
                </span>
                <h2 className="font-display text-3xl font-bold text-[#1a1a18]">
                  Pioneering Fluid Precision Engineering
                </h2>
                <p className="font-sans text-sm text-[#666663] leading-relaxed">
                  Founded by <strong>Shakti Engineers</strong>, Pacifluid Pumps has grown from a specialized tooling workshop into one of India’s most respected manufacturers of industrial positive displacement rotary gear pumps, sanitary stainless steel gear pumps, and internal fuel injection gear pumps.
                </p>
                <p className="font-sans text-sm text-[#666663] leading-relaxed">
                  Headquartered in Ahmedabad with an advanced manufacturing works facility in Ahmedabad, Gujarat, we supply continuous process plants, public sector undertakings, boiler OEMs, and international export partners.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-[#e5e5e2] shadow-sm bg-[#fafaf9]">
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
