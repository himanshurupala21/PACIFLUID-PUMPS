"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function Footer({ onOpenQuote }) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#141416] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Credentials (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <div className="inline-block bg-white p-2.5 rounded-2xl border border-white/20">
                <img 
                  src="/assets/img/logo.png" 
                  alt="Pacifluid Pumps Logo" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white tracking-wide uppercase mt-3">
                  SHAKTI ENGINEERS
                </p>
                <p className="font-sans text-xs text-white/60">
                  Industrial Positive Displacement Gear Pump Manufacturer
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Products Catalog (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#e31e24]">
              PUMPING SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-sans">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name.split("—")[0]}</span>
                    <span className="text-[10px] text-white/40 group-hover:text-white/70">
                      {prod.specs.pressure.split("(")[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Applications & Quick Links (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#e31e24]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-sans">
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
                  className="text-[#e31e24] hover:text-red-400 font-semibold cursor-pointer"
                >
                  Request Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#e31e24]">
              AHMEDABAD WORKS
            </h4>
            <div className="space-y-3 text-xs text-white/70 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e31e24] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  C-2, Anup Estate, Nr. Bharat Party Plot, Amraiwadi, N.H. No. 8, Ahmedabad – 380 026, Gujarat, India
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e31e24] shrink-0" />
                <a href="tel:+919924842266" className="hover:text-white font-medium transition-colors">
                  +91 99248 42266
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/50 shrink-0" />
                <a href="mailto:pacifluidpumps@gmail.com" className="hover:text-white font-medium transition-colors">
                  pacifluidpumps@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn btn-red w-full py-2.5 px-4 text-xs font-semibold shadow-md cursor-pointer block"
              >
                Get Instant Technical Quotation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
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
