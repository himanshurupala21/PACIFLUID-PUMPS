"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Layers,
  Wrench
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [appsDropdown, setAppsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Engineering Micro-Bar */}
      <div className="bg-[#141416] text-white text-xs py-2 px-4 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="hidden md:flex items-center gap-2 text-white/60 font-display text-[11px] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24] animate-pulse"></span>
            <span>Heavy-Duty Positive Displacement Gear Pumps • India & Global Export</span>
          </div>
          <div className="flex items-center gap-5 text-white/80 font-sans ml-auto">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e31e24]" />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white/50" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5e5e2] py-3" 
            : "bg-white border-b border-[#e5e5e2] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-11 w-36 sm:w-44 flex items-center">
              <img 
                src="/assets/img/logo.png" 
                alt="Pacifluid Pumps Logo" 
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link 
              href="/" 
              className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors"
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors"
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link
                href="/products"
                className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors flex items-center gap-1"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? "rotate-180 text-[#e31e24]" : "text-stone-400"}`} />
              </Link>

              {productsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#e5e5e2] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-[#e5e5e2] mb-2 flex justify-between items-center">
                    <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                      Industrial Pump Catalog
                    </span>
                    <Link href="/products" className="text-xs font-display text-[#666663] hover:text-[#1a1a18] flex items-center gap-1">
                      View All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {PRODUCTS.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.id}`}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#f7f7f6] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#f7f7f6] p-1 flex items-center justify-center shrink-0 border border-[#e5e5e2]">
                          <img src={prod.image} alt={prod.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs font-display font-semibold text-[#1a1a18] group-hover:text-[#e31e24] truncate">
                            {prod.name.split("—")[0]}
                          </p>
                          <p className="text-[11px] text-[#666663] truncate">
                            {prod.specs.capacity} • {prod.specs.pressure}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAppsDropdown(true)}
              onMouseLeave={() => setAppsDropdown(false)}
            >
              <Link
                href="/applications"
                className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors flex items-center gap-1"
              >
                <span>Applications</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${appsDropdown ? "rotate-180 text-[#e31e24]" : "text-stone-400"}`} />
              </Link>

              {appsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#e5e5e2] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-[#e5e5e2] mb-2 flex justify-between items-center">
                    <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                      Process Solutions
                    </span>
                    <Link href="/applications" className="text-xs font-display text-[#666663] hover:text-[#1a1a18] flex items-center gap-1">
                      Explore All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-1 text-xs font-display">
                    <Link href="/applications#boilers-burners" className="block px-3 py-2 rounded-xl hover:bg-[#f7f7f6] text-[#1a1a18] hover:text-[#e31e24] transition-colors">
                      Boilers, Burners & Heaters (FO / LDO)
                    </Link>
                    <Link href="/applications#food-pharma" className="block px-3 py-2 rounded-xl hover:bg-[#f7f7f6] text-[#1a1a18] hover:text-[#e31e24] transition-colors">
                      Food, Dairy & Pharmaceuticals (SS-316)
                    </Link>
                    <Link href="/applications#refineries-petrochem" className="block px-3 py-2 rounded-xl hover:bg-[#f7f7f6] text-[#1a1a18] hover:text-[#e31e24] transition-colors">
                      Refineries & Petrochemicals
                    </Link>
                    <Link href="/applications#road-construction" className="block px-3 py-2 rounded-xl hover:bg-[#f7f7f6] text-[#1a1a18] hover:text-[#e31e24] transition-colors">
                      Road Construction & Hot Bitumen
                    </Link>
                    <Link href="/applications#sugar-paper" className="block px-3 py-2 rounded-xl hover:bg-[#f7f7f6] text-[#1a1a18] hover:text-[#e31e24] transition-colors">
                      Sugar Mills & Paper Refineries
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/industries" 
              className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors"
            >
              Industries
            </Link>

            <Link 
              href="/clients" 
              className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors"
            >
              Clients
            </Link>

            <Link 
              href="/downloads" 
              className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors"
            >
              Resources
            </Link>

            <Link 
              href="/contact" 
              className="px-3 py-2 text-sm font-display font-medium text-[#1a1a18] hover:text-[#e31e24] rounded-full transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="btn btn-sm border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] bg-white transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#e31e24]" />
              <span>Call Now</span>
            </a>

            <button 
              onClick={() => onOpenQuote && onOpenQuote()}
              className="btn btn-sm btn-red shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button 
              onClick={() => onOpenQuote && onOpenQuote()}
              className="btn btn-sm btn-red py-1 px-3 text-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1a1a18] hover:bg-[#f7f7f6] rounded-full border border-[#e5e5e2]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-4 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-2 text-base font-medium text-[#111827]">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                About Company
              </Link>
              <Link 
                href="/products" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                All Products Catalog
              </Link>
              <Link 
                href="/applications" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                Applications
              </Link>
              <Link 
                href="/industries" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                Industries Served
              </Link>
              <Link 
                href="/clients" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                Valued Clients
              </Link>
              <Link 
                href="/downloads" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                PDF Downloads
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FA]"
              >
                Contact & Works
              </Link>
            </nav>

            <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-2.5">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 text-center text-sm font-medium text-[#0B2341] border border-[#E5E7EB] rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#155A9C]" />
                Call {COMPANY_INFO.phone}
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuote) onOpenQuote();
                }}
                className="w-full py-2.5 text-center text-sm font-medium text-white bg-[#D71920] rounded-lg shadow-sm"
              >
                Request Technical Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
