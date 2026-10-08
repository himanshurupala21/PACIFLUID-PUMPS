"use client";

import { X, Download, MessageCircle, Send, CheckCircle2, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export default function SpecsModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  const whatsappUrl = `https://wa.me/919924842266?text=${encodeURIComponent(`Hello Pacifluid Pumps, I am inquiring about the ${product.name}. Please share technical catalog and price quotation.`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between bg-[#F7F8FA] shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#155A9C]">
              TECHNICAL ENGINEERING SPECIFICATION
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0B2341]">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8">

          {/* Top Hero Composition */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="md:col-span-5 flex items-center justify-center bg-white rounded-xl p-6 border border-[#E5E7EB] aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain product-shadow"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="text-[11px] font-bold text-[#155A9C] tracking-wide uppercase">
                {product.category.replace("-", " ")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2341]">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenQuote) onOpenQuote(product);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#D71920] hover:bg-[#ba141a] rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 rounded-xl transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {product.pdf && (
                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold text-[#0B2341] bg-white border border-[#E5E7EB] hover:bg-slate-50 rounded-xl transition-all flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-[#155A9C]" />
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
            <div className="bg-[#F7F8FA] rounded-xl p-5 border border-[#E5E7EB] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                Engineering Features
              </h4>
              <ul className="space-y-2 text-xs text-[#111827]">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#155A9C] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F7F8FA] rounded-xl p-5 border border-[#E5E7EB] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                Typical Process Applications
              </h4>
              <ul className="space-y-2 text-xs text-[#111827]">
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
        <div className="px-6 py-4 border-t border-[#E5E7EB] bg-[#F7F8FA] flex items-center justify-between shrink-0">
          <div className="text-xs text-[#667085]">
            100% Tested at Shakti Engineers Works (Ahmedabad, Gujarat)
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#667085] hover:text-[#0B2341]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote(product);
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0B2341] hover:bg-[#D71920] rounded-xl transition-all shadow-xs"
            >
              Get Price Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
