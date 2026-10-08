"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function Footer({ onOpenQuote }) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B2341] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Credentials (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <div className="inline-block bg-white p-2.5 rounded-xl border border-white/20">
                <img 
                  src="/assets/img/logo.png" 
                  alt="Pacifluid Pumps Logo" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-100 tracking-wide uppercase mt-3">
                  SHAKTI ENGINEERS
                </p>
                <p className="text-xs text-slate-400">
                  Industrial Positive Displacement Gear Pump Manufacturer
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Products Catalog (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              PUMPING SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.id}`}
                    className="hover:text-white hover:underline transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name.split("—")[0]}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-slate-300">
                      {prod.specs.pressure.split("(")[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Applications & Quick Links (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors">Applications</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors">Valued Clients</Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-white transition-colors">PDF Catalogs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Office</Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuote && onOpenQuote()}
                  className="text-[#D71920] hover:text-red-400 font-semibold"
                >
                  Request Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              AHMEDABAD WORKS
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  C-2, Anup Estate, Nr. Bharat Party Plot, Amraiwadi, N.H. No. 8, Ahmedabad – 380 026, Gujarat, India
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#155A9C] shrink-0" />
                <a href="tel:+919924842266" className="hover:text-white font-medium">
                  +91 99248 42266
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:pacifluid@rediffmail.com" className="hover:text-white font-medium">
                  pacifluid@rediffmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#D71920] hover:bg-[#ba141a] rounded-lg shadow-sm transition-all text-center block"
              >
                Get Instant Technical Quotation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Prompt Section 21 Requirement!) */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Pacifluid Pumps / Shakti Engineers. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
