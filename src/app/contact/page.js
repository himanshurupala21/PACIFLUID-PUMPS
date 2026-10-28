"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import ContactSection from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
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
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] tracking-tight">
              Contact Sales & Manufacturing Works
            </h1>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Connect with our application engineering specialists for technical sizing, custom metallurgy quotes, or factory dispatches.
            </p>
          </div>
        </section>

        {/* Works & Office Two-Column Grid */}
        <section className="py-12 bg-white border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Ahmedabad Head Office */}
              <div className="card-modern bg-[#fafaf9] p-6 space-y-3">
                <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                  HEAD OFFICE & WORKS
                </span>
                <h3 className="font-display text-lg font-bold text-[#1a1a18]">
                  Shakti Engineers / Pacifluid Pumps (Ahmedabad)
                </h3>
                <p className="font-sans text-xs text-[#666663] leading-relaxed">
                  C-2, Anup Estate, Nr. Bharat Party Plot, Amraiwadi, N.H. No. 8, Ahmedabad – 380 026, Gujarat, India.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs font-sans">
                  <a href="tel:+919924842266" className="font-semibold text-[#1a1a18] hover:text-[#e31e24] transition-colors">
                    Phone / WhatsApp: +91 99248 42266
                  </a>
                  <a href="mailto:pacifluidpumps@gmail.com" className="text-[#666663] hover:text-[#1a1a18] transition-colors">
                    Email: pacifluidpumps@gmail.com
                  </a>
                </div>
              </div>

              {/* Ahmedabad Works Plant */}
              <div className="card-modern bg-[#fafaf9] p-6 space-y-3">
                <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                  MANUFACTURING PLANT
                </span>
                <h3 className="font-display text-lg font-bold text-[#1a1a18]">
                  Machining & Testing Works (Ahmedabad)
                </h3>
                <p className="font-sans text-xs text-[#666663] leading-relaxed">
                  C-2, Anup Estate, Nr. Bharat Party Plot, Amraiwadi, N.H. No. 8, Ahmedabad – 380 026, Gujarat, India.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs font-sans">
                  <span className="text-[#666663]">
                    Equipped with CNC Turning, Hobbing & 50-Bar Hydrostatic Testing Bay.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Main Contact Section with Form & Google Maps */}
        <ContactSection />
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <FloatingActions onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
