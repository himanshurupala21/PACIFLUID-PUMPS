"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ProductShowcase from "@/components/ProductShowcase";
import SpecsModal from "@/components/SpecsModal";
import QuoteModal from "@/components/QuoteModal";
import { Download, Phone, ShieldCheck } from "lucide-react";

export default function ProductsPage() {
  const [activeSpecsProduct, setActiveSpecsProduct] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="grow">
        {/* Page Hero */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
              OFFICIAL PRODUCT CATALOG
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2341] tracking-tight">
              Industrial Pumping Solutions
            </h1>
            <p className="text-base text-[#667085] max-w-2xl leading-relaxed">
              Explore our complete range of precision positive displacement rotary twin gear pumps, sanitary stainless steel pumps, and high-pressure fuel injection gear pumps.
            </p>
          </div>
        </section>

        {/* Product Catalog Showcase */}
        <ProductShowcase
          onOpenSpecs={(product) => setActiveSpecsProduct(product)}
          onOpenQuote={handleOpenQuote}
        />
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <FloatingActions onOpenQuote={() => handleOpenQuote()} />

      <SpecsModal
        product={activeSpecsProduct}
        onClose={() => setActiveSpecsProduct(null)}
        onOpenQuote={handleOpenQuote}
      />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => {
          setQuoteOpen(false);
          setQuoteProduct(null);
        }}
        initialProduct={quoteProduct}
      />
    </div>
  );
}
