"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ProductShowcase from "@/components/ProductShowcase";
import AboutSection from "@/components/AboutSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ClientsSection from "@/components/ClientsSection";
import WhyPacifluid from "@/components/WhyPacifluid";
import QuoteCTA from "@/components/QuoteCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpecsModal from "@/components/SpecsModal";
import QuoteModal from "@/components/QuoteModal";
import VideoModal from "@/components/VideoModal";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenQuote = (product = null) => {
    setQuoteInitialProduct(product);
    setQuoteModalOpen(true);
  };

  const handleOpenSpecs = (product) => {
    setSelectedProductForSpecs(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. HEADER (Section 5 & 25) */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="grow">
        {/* 2. HERO SECTION (Section 6 & 7) */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 3. TRUST / HIGHLIGHTS (Section 11) */}
        <StatsSection />

        {/* 4. PRODUCT CATEGORIES & SHOWCASE (Section 8 & 17) */}
        <ProductShowcase 
          onOpenSpecs={handleOpenSpecs}
          onOpenQuote={handleOpenQuote}
        />

        {/* 6. ABOUT PACIFLUID (Section 10) */}
        <AboutSection />

        {/* 7. ENGINEERING / MANUFACTURING (Section 15) */}
        <ManufacturingSection />

        {/* 8. APPLICATIONS (Section 12) */}
        <ApplicationsSection onSelectApp={() => {}} onOpenQuote={(appTitle) => handleOpenQuote(appTitle ? { notes: `Inquiry for application: ${appTitle}` } : undefined)} />

        {/* 9. INDUSTRIES (Section 13) */}
        <IndustriesSection />

        {/* 10. VALUED CLIENTS (Section 14: "TRUSTED BY INDUSTRY") */}
        <ClientsSection />

        {/* 11. WHY PACIFLUID (Section 35) */}
        <WhyPacifluid />

        {/* 12. REQUEST A QUOTE CTA (Section 35) */}
        <QuoteCTA onOpenQuote={() => handleOpenQuote()} />

        {/* 13. CONTACT / LOCATION (Section 20) */}
        <ContactSection />
      </main>

      {/* 14. FOOTER (Section 21) */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp and Mobile Action Bar (Section 19) */}
      <FloatingActions onOpenQuote={() => handleOpenQuote()} />

      {/* Modals */}
      <SpecsModal
        product={selectedProductForSpecs}
        onClose={() => setSelectedProductForSpecs(null)}
        onOpenQuote={handleOpenQuote}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setQuoteInitialProduct(null);
        }}
        initialProduct={quoteInitialProduct}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
