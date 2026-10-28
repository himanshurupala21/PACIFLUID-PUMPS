"use client";

import { X, Download, MessageCircle, Send, CheckCircle2, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export default function SpecsModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  const whatsappUrl = `https://wa.me/919924842266?text=${encodeURIComponent(`Hello Pacifluid Pumps, I am inquiring about the ${product.name}. Please share technical catalog and price quotation.`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#e5e5e2] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-[#e5e5e2] flex items-center justify-between bg-[#fafaf9] shrink-0">
          <div>
            <div className="eyebrow text-[10px]">
              <span className="w-2 h-1 rounded-full bg-[#e31e24]" />
              <span>TECHNICAL ENGINEERING SPECIFICATION</span>
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#1a1a18] mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-[#1a1a18] hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8">

          {/* Top Hero Composition */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#fafaf9] rounded-2xl p-6 border border-[#e5e5e2]">
            <div className="md:col-span-5 flex items-center justify-center bg-white rounded-2xl p-6 border border-[#e5e5e2] aspect-[4/3] shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain product-shadow"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="text-[11px] font-display font-semibold text-[#e31e24] tracking-wider uppercase">
                {product.category.replace("-", " ")}
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1a1a18]">
                {product.name}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#666663] leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenQuote) onOpenQuote(product);
                  }}
                  className="btn btn-sm btn-red shadow-sm cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm border border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {product.pdf && (
                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] bg-white"
                  >
                    <Download className="w-3.5 h-3.5 text-[#e31e24]" />
                    <span>PDF Datasheet</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Technical Specifications Clean Table (Prompt Section 16 Requirement!) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B2341]">
              Technical Specifications
            </h4>
            <div className="rounded-xl border border-[#E5E7EB] overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <tbody>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA] w-1/3">
                      Discharge Capacity (Flow)
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.capacity}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Max Working Pressure
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.pressure}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Operating Speed
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.speed}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Viscosity Range
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.viscosity}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Max Liquid Temperature
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.temperature}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Port Sizes Available
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.portSize}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Material of Construction (MOC)
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.moc}
                    </td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Shaft Sealing Options
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.sealing}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-4 font-semibold text-[#0B2341] bg-[#F7F8FA]">
                      Shaft & Rotor Metallurgy
                    </td>
                    <td className="py-2.5 px-4 text-[#111827]">
                      {product.specs.shaft}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Design Features & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fafaf9] rounded-2xl p-5 border border-[#e5e5e2] space-y-3">
              <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                Engineering Features
              </h4>
              <ul className="space-y-2 text-xs text-[#1a1a18] font-sans">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e31e24] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fafaf9] rounded-2xl p-5 border border-[#e5e5e2] space-y-3">
              <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                Typical Process Applications
              </h4>
              <ul className="space-y-2 text-xs text-[#1a1a18] font-sans">
                {product.applications?.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky Footer */}
        <div className="px-6 py-4 border-t border-[#e5e5e2] bg-[#fafaf9] flex items-center justify-between shrink-0">
          <div className="text-xs text-[#666663] font-sans">
            100% Tested at Shakti Engineers Works (Ahmedabad, Gujarat)
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="btn btn-sm border border-[#e5e5e2] text-[#1a1a18] hover:border-[#1a1a18] bg-white cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote(product);
              }}
              className="btn btn-sm btn-red cursor-pointer shadow-sm"
            >
              Get Price Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
