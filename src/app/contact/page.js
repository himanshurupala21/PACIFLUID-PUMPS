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
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              Contact Sales & Manufacturing Works
            </h1>
            <p className="text-base text-[#667085] max-w-2xl leading-relaxed">
              Connect with our application engineering specialists for technical sizing, custom metallurgy quotes, or factory dispatches.
            </p>
          </div>
        </section>

        {/* Works & Office Two-Column Grid */}
        <section className="py-12 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Ahmedabad Head Office */}
              <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB] space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#155A9C]">
                  HEAD OFFICE & WORKS
                </span>
                <h3 className="text-lg font-bold text-[#0B2341]">
                  Shakti Engineers / Pacifluid Pumps (Ahmedabad)
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  C-2, Anup Estate, Nr. Bharat Party Plot, Amraiwadi, N.H. No. 8, Ahmedabad – 380 026, Gujarat, India.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs">
                  <a href="tel:+919924842266" className="font-semibold text-[#155A9C]">
                    Phone / WhatsApp: +91 99248 42266
                  </a>
                  <a href="mailto:pacifluid@rediffmail.com" className="text-[#667085]">
                    Email: pacifluid@rediffmail.com
                  </a>
                </div>
              </div>

              {/* Ahmedabad Works Plant */}
              <div className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB] space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#155A9C]">
                  MANUFACTURING PLANT
                </span>
                <h3 className="text-lg font-bold text-[#0B2341]">
                  Machining & Testing Works (Ahmedabad)
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  C-2, Anup Estate, Nr. Bharat Party Plot, Amraiwadi, N.H. No. 8, Ahmedabad – 380 026, Gujarat, India.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs">
                  <span className="text-[#667085]">
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
