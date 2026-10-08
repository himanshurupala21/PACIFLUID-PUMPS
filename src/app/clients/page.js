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
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
              PROVEN REPUTATION
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              Our Valued Industrial Clients
            </h1>
            <p className="text-base text-[#667085] max-w-2xl leading-relaxed">
              Approved vendor and trusted positive displacement pump manufacturer for leading private and public sector enterprises in India and abroad.
            </p>
          </div>
        </section>

        {/* Marquee & Grid */}
        <ClientsSection />

        {/* Detailed Client Grid */}
        <section className="py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2341]">
                Key Plant Installations
              </h2>
              <p className="text-xs sm:text-sm text-[#667085]">
                Continuous 24/7 pumping service validated across oil refineries, power stations, and cement plants.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {COMPANY_INFO.clients.map((client) => (
                <div
                  key={client.name}
                  className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#155A9C] hover:shadow-md transition-all group"
                >
                  <div className="h-20 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B2341]">
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
