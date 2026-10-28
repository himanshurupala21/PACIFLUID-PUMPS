"use client";

import { MessageCircle, Phone, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingActions({ onOpenQuote }) {
  const whatsappUrl = `https://wa.me/919924842266?text=${encodeURIComponent("Hello Pacifluid Pumps, I am interested in your industrial gear pumps and would like to request technical specifications and pricing.")}`;

  return (
    <>
      {/* Desktop Floating Cobwala Action Stack */}
      <div className="hidden sm:flex items-center gap-2.5 fixed bottom-6 right-6 z-40">
        {/* Cobwala Signature Assistant Pill */}
        <button
          onClick={() => onOpenQuote && onOpenQuote({ notes: "PaciAssist Technical Consultation" })}
          className="flex items-center gap-2 bg-[#141416] hover:bg-[#202024] text-white px-4 py-2.5 rounded-full shadow-lg border border-white/10 transition-all hover:scale-105 active:scale-95 font-display cursor-pointer"
        >
          <span className="text-[#e31e24] text-xs">✴</span>
          <span className="text-xs font-semibold">PaciAssist</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
        </button>

        {/* WhatsApp Round Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat with Pacifluid on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5e5e2] p-2.5 grid grid-cols-3 gap-2 shadow-2xl font-display">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold"
        >
          <span className="text-emerald-600">WhatsApp</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full bg-[#fafaf9] text-[#1a1a18] border border-[#e5e5e2] text-[11px] font-semibold"
        >
          <span className="text-[#1a1a18]">Call Now</span>
        </a>

        <button
          onClick={() => onOpenQuote && onOpenQuote()}
          className="btn btn-sm btn-red py-2 px-1 text-[11px] font-semibold shadow-sm justify-center"
        >
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
}
