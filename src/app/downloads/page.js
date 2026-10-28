"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import { Download, FileText, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function DownloadsPage() {
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
              <span>TECHNICAL DOCUMENTATION & LITERATURE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] tracking-tight">
              Product Catalogs & Engineering Datasheets
            </h1>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Download complete PDF engineering brochures including dimensional drawings, performance curves, flow rates, and mounting specifications.
            </p>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="py-20 bg-white border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_INFO.downloads.map((doc) => (
                <div
                  key={doc.id}
                  className="card-modern bg-[#fafaf9] p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#e5e5e2] flex items-center justify-center text-[#e31e24] shadow-xs group-hover:scale-105 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                        {doc.type} • {doc.size}
                      </span>
                      <h3 className="font-display text-base font-bold text-[#1a1a18] leading-snug">
                        {doc.title}
                      </h3>
                      <p className="font-sans text-xs text-[#666663] mt-1 leading-relaxed">
                        Detailed pump dimensions, motor selection chart, flow vs head curves, and spare part cross-section drawings.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#e5e5e2] flex items-center justify-between">
                    <span className="text-xs text-[#666663] font-sans">
                      PDF Format
                    </span>
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="btn btn-sm btn-red py-1.5 px-3.5 text-xs shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
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
