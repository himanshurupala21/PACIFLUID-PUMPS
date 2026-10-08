"use client";

import { MessageCircle, Phone, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingActions({ onOpenQuote }) {
  const whatsappUrl = `https://wa.me/919924842266?text=${encodeURIComponent("Hello Pacifluid Pumps, I am interested in your industrial gear pumps and would like to request technical specifications and pricing.")}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Prompt Section 19 Requirement!) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-500/30"
          aria-label="Chat with Pacifluid on WhatsApp"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {/* SVG WhatsApp icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Prompt Section 19 Requirement!) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] p-2.5 grid grid-cols-3 gap-2 shadow-2xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold"
        >
          <span className="text-emerald-600">WhatsApp</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#F7F8FA] text-[#0B2341] border border-[#E5E7EB] text-[11px] font-semibold"
        >
          <span className="text-[#155A9C]">Call Now</span>
        </a>

        <button
          onClick={() => onOpenQuote && onOpenQuote()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#D71920] text-white text-[11px] font-semibold shadow-2xs"
        >
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
}
