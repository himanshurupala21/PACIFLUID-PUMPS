"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import { 
  ArrowRight, 
  Download, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Phone
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function ProductDetailClient({ product }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);
  const whatsappUrl = `https://wa.me/919924842266?text=${encodeURIComponent(`Hello Pacifluid Pumps, I am interested in the ${product.name}. Please share technical catalog and commercial quotation.`)}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="grow">
        {/* Breadcrumb Strip */}
        <div className="bg-[#fafaf9] border-b border-[#e5e5e2] py-3.5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center gap-2 text-xs font-sans text-[#666663]">
            <Link href="/" className="hover:text-[#1a1a18] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link href="/products" className="hover:text-[#1a1a18] transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-semibold text-[#1a1a18] truncate">{product.name}</span>
          </div>
        </div>

        {/* Product Hero Header Section */}
        <section className="py-16 bg-white border-b border-[#e5e5e2]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Product Image Stage */}
              <div className="lg:col-span-5 flex items-center justify-center bg-[#fafaf9] rounded-3xl p-8 border border-[#e5e5e2] aspect-[4/3] relative overflow-hidden group">
                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[85%] max-w-[85%] object-contain product-shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="eyebrow">
                    <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
                    <span>{product.category.replace("-", " ")}</span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a18] tracking-tight leading-tight">
                    {product.name}
                  </h1>
                  <p className="font-sans text-base text-[#666663] leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={() => setQuoteOpen(true)}
                    className="btn btn-red shadow-md cursor-pointer group"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  {product.pdf && (
                    <a
                      href={product.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] bg-white"
                    >
                      <Download className="w-4 h-4 text-[#e31e24]" />
                      <span>PDF Catalog</span>
                    </a>
                  )}
                </div>

                <div className="pt-4 border-t border-[#e5e5e2] flex flex-wrap items-center gap-6 text-xs text-[#666663] font-sans">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#e31e24]" />
                    100% Factory Hydro-Tested
                  </span>
                  <span>•</span>
                  <span>Custom Metallurgy Available</span>
                  <span>•</span>
                  <span>Ready Dispatch Stock</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Technical Specifications Clean Table (Prompt Section 16 Requirement!) */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                ENGINEERING METRICS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2341]">
                Technical Specifications & Operating Limits
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA] w-1/3">
                      Discharge Capacity (Flow Rate)
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.capacity}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Max Working Pressure
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.pressure}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Operating Speed (RPM)
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.speed}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Viscosity Range
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.viscosity}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Max Temperature Rating
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.temperature}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Port Connections
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.portSize}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Materials of Construction (MOC)
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.moc}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Shaft Sealing Mechanism
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.sealing}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Shaft & Rotor Metallurgy
                    </td>
                    <td className="py-3.5 px-6 text-[#111827]">
                      {product.specs.shaft}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features & Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] space-y-4">
                <h3 className="text-base font-bold text-[#0B2341]">
                  Design Features
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#111827]">
                  {product.features?.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#155A9C] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] space-y-4">
                <h3 className="text-base font-bold text-[#0B2341]">
                  Verified Process Applications
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#111827]">
                  {product.applications?.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2341]">
              Related Pumping Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] p-5 hover:border-[#155A9C] hover:shadow-md transition-all group"
                >
                  <div className="h-40 bg-white rounded-xl p-4 flex items-center justify-center border border-[#E5E7EB] mb-4">
                    <img src={rel.image} alt={rel.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B2341] group-hover:text-[#155A9C] transition-colors truncate">
                    {rel.name.split("—")[0]}
                  </h4>
                  <p className="text-xs text-[#667085] mt-1 truncate">
                    {rel.specs.capacity}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <FloatingActions onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        initialProduct={product}
      />
    </div>
  );
}
