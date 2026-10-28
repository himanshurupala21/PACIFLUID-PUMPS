"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import ClientsSection from "@/components/ClientsSection";
import { COMPANY_INFO } from "@/data/company";
import { CheckCircle2, ShieldCheck, Award } from "lucide-react";

export default function ClientsPage() {
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
              <span>PROVEN REPUTATION</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] tracking-tight">
              Our Valued Industrial Clients
            </h1>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Approved vendor and trusted positive displacement pump manufacturer for leading private and public sector enterprises in India and abroad.
            </p>
          </div>
        </section>

        {/* Marquee & Grid */}
        <ClientsSection />

        {/* Detailed Client Grid */}
        <section className="py-20 bg-white border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a18]">
                Key Plant Installations
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#666663]">
                Continuous 24/7 pumping service validated across oil refineries, power stations, and cement plants.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPANY_INFO.clients.map((client) => (
                <div
                  key={client.name}
                  className="card-modern bg-[#fafaf9] p-8 flex flex-col items-center justify-center text-center space-y-4 group"
                >
                  <div className="h-20 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-[#1a1a18]">
                    {client.name}
                  </h3>
                </div>
              ))}
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
