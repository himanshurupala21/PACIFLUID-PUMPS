"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import IndustriesSection from "@/components/IndustriesSection";

export default function IndustriesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="grow">
        {/* Page Hero */}
        <section className="bg-[#fafaf9] py-16 border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <div className="eyebrow">
              <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
              <span>B2B MANUFACTURING SECTORS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] tracking-tight">
              Process Industries Served
            </h1>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Supplying positive displacement pumping systems designed to withstand demanding industrial regimes across power generation, chemical processing, food manufacturing, and heavy metallurgy.
            </p>
          </div>
        </section>

        {/* Industries Section */}
        <IndustriesSection />
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <FloatingActions onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
