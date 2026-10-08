"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import ApplicationsSection from "@/components/ApplicationsSection";

export default function ApplicationsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="grow">
        {/* Page Hero */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
              FLUID & PROCESS ENGINEERING
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              Industrial Applications & Fluid Handling
            </h1>
            <p className="text-base text-[#667085] max-w-2xl leading-relaxed">
              Positive displacement solutions configured for extreme fluid viscosity, high temperature, abrasive slurries, and aggressive chemical corrosion.
            </p>
          </div>
        </section>

        {/* Applications Section Grid */}
        <ApplicationsSection onSelectApp={() => {}} onOpenQuote={() => setQuoteOpen(true)} />
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <FloatingActions onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
