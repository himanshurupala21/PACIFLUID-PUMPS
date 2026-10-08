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
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
              TECHNICAL DOCUMENTATION & LITERATURE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              Product Catalogs & Engineering Datasheets
            </h1>
            <p className="text-base text-[#667085] max-w-2xl leading-relaxed">
              Download complete PDF engineering brochures including dimensional drawings, performance curves, flow rates, and mounting specifications.
            </p>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_INFO.downloads.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between hover:border-[#155A9C] hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#155A9C] shadow-2xs group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#155A9C]">
                        {doc.type} • {doc.size}
                      </span>
                      <h3 className="text-base font-bold text-[#0B2341] leading-snug">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-[#667085] mt-1">
                        Detailed pump dimensions, motor selection chart, flow vs head curves, and spare part cross-section drawings.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs text-[#667085]">
                      PDF Format
                    </span>
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0B2341] hover:bg-[#D71920] rounded-lg transition-colors shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality & Registration Certificates Download Box */}
            <div className="mt-12 bg-white rounded-3xl border border-[#E5E7EB] p-8 lg:p-12 blueprint-grid">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                  CERTIFICATIONS & AUDITS
                </span>
                <h3 className="text-2xl font-bold text-[#0B2341]">
                  Quality System Credentials
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Our quality management system is audited under ISO 9001:2015 and TUV Rheinland. We are an officially registered supplier with NSIC under the Government of India single point registration scheme.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="/img/iso-new.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-[#0B2341] bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-white rounded-lg transition-all"
                  >
                    View ISO 9001:2015 Certificate
                  </a>
                  <a
                    href="/img/NSIC-Certificate3.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-[#0B2341] bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-white rounded-lg transition-all"
                  >
                    View NSIC Registration
                  </a>
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
