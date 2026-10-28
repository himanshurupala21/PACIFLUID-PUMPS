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
        <section className="bg-[#fafaf9] py-16 border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
            <div className="eyebrow">
              <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
              <span>OFFICIAL PRODUCT CATALOG</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] tracking-tight">
              Industrial Pumping Solutions
            </h1>
            <p className="font-sans text-base text-[#666663] max-w-2xl leading-relaxed">
              Explore our complete range of precision positive displacement rotary gear pumps, sanitary stainless steel pumps, and high-pressure fuel injection gear pumps.
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
