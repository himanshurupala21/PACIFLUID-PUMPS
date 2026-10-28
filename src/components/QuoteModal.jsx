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
    product: initialProduct?.name || "GP Series — External Rotary Gear Pump",
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
        product: initialProduct?.name || "GP Series — External Rotary Gear Pump",
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#e5e5e2] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#e5e5e2] flex items-center justify-between bg-[#fafaf9]">
          <div>
            <div className="eyebrow text-[10px]">
              <span className="w-2 h-1 rounded-full bg-[#e31e24]" />
              <span>OFFICIAL OEM QUOTATION</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[#1a1a18] mt-0.5">
              Request Technical Quotation
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full text-stone-400 hover:text-[#1a1a18] hover:bg-stone-100 transition-colors cursor-pointer"
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
              <h4 className="font-display text-xl font-bold text-[#1a1a18]">
                Quotation Request Submitted!
              </h4>
              <p className="font-sans text-xs text-[#666663] max-w-sm mx-auto leading-relaxed">
                Thank you. Your pump inquiry has been registered with our technical sales division. You will receive an official technical datasheet and commercial quotation shortly.
              </p>
              <button
                onClick={handleClose}
                className="btn btn-sm btn-red cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-display font-medium text-[#1a1a18]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mukesh Shah"
                    className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-display font-medium text-[#1a1a18]">Company / Plant *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Reliance Ahmedabad Refinery"
                    className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-display font-medium text-[#1a1a18]">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98250 XXXXX"
                    className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-display font-medium text-[#1a1a18]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@company.com"
                    className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-display font-medium text-[#1a1a18]">Pump Series Required *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
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
                  <label className="text-xs font-display font-medium text-[#1a1a18]">Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 2 Units"
                    className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-display font-medium text-[#1a1a18]">
                  Fluid & Operating Parameters (Flow Rate, Pressure, Temp, Viscosity)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify operating fluid (Furnace oil, LDO, Bitumen, Edible oil), flow rate (LPM), and discharge pressure (Bar)."
                  className="w-full px-3.5 py-2 text-xs bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white text-[#1a1a18]"
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
                  className="btn btn-red w-full py-3 text-xs sm:text-sm font-semibold shadow-md cursor-pointer disabled:opacity-50"
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
