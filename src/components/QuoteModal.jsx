"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, ShieldCheck, FileText, AlertCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function QuoteModal({ isOpen, onClose, initialProduct = null }) {
  const getCleanFormData = () => ({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: initialProduct?.name || "GP Series — External Rotary Twin Gear Pump",
    quantity: "1 Unit",
    application: "",
    message: ""
  });

  const [formData, setFormData] = useState(getCleanFormData);
  const [status, setStatus] = useState("idle");

  // Every time the modal opens or the product changes, reset to a clean form and idle status
  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        product: initialProduct?.name || "GP Series — External Rotary Twin Gear Pump",
        quantity: "1 Unit",
        application: "",
        message: ""
      });
    }
  }, [isOpen, initialProduct]);

  if (!isOpen) return null;

  const handleClose = () => {
    setStatus("idle");
    setFormData(getCleanFormData());
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData(getCleanFormData());
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between bg-[#F7F8FA]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#155A9C]">
              OFFICIAL OEM QUOTATION
            </span>
            <h3 className="text-lg font-bold text-[#0B2341]">
              Request Technical Quotation
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0B2341]">
                Quotation Request Submitted!
              </h4>
              <p className="text-xs text-[#667085] max-w-sm mx-auto leading-relaxed">
                Thank you. Your pump inquiry has been registered with our technical sales division. You will receive an official technical datasheet and commercial quotation shortly.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0B2341] hover:bg-[#155A9C] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0B2341]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mukesh Shah"
                    className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0B2341]">Company / Plant *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Reliance Ahmedabad Refinery"
                    className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0B2341]">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98250 XXXXX"
                    className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0B2341]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@company.com"
                    className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-[#0B2341]">Pump Series Required *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Technical Sizing">Other / Need Sizing Assistance</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0B2341]">Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 2 Units"
                    className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#0B2341]">
                  Fluid & Operating Parameters (Flow Rate, Pressure, Temp, Viscosity)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify operating fluid (Furnace oil, LDO, Bitumen, Edible oil), flow rate (LPM), and discharge pressure (Bar)."
                  className="w-full px-3.5 py-2 text-xs bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg focus:outline-hidden focus:border-[#155A9C] focus:bg-white text-[#111827]"
                />
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>Unable to submit your request. Please try again or contact us directly at +91 99248 42266.</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#D71920] hover:bg-[#ba141a] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Submitting Request..." : "Request Official Quotation"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
