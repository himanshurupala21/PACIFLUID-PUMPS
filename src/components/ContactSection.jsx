"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Building } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "General Technical Inquiry",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      product: "General Technical Inquiry",
      message: ""
    });
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
        resetForm();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-white border-b border-[#e5e5e2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="eyebrow justify-center">
            <span className="w-2.5 h-1.5 rounded-full bg-[#e31e24]" />
            <span>COMMUNICATIONS & WORKS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a18]">
            Contact Our Engineering Office
          </h2>
          <p className="font-sans text-base text-[#666663] leading-relaxed">
            Have an inquiry or require sizing assistance? Connect directly with our sales and technical support engineers.
          </p>
        </div>

        {/* Content Grid: Left Contact Info, Right Premium Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="card-modern bg-[#fafaf9] p-8 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#e31e24]">
                  HEAD OFFICE & WORKS
                </span>
                <h3 className="font-display text-xl font-bold text-[#1a1a18]">
                  Shakti Engineers / Pacifluid Pumps
                </h3>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#e5e5e2] flex items-center justify-center shrink-0 text-[#e31e24] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm text-[#1a1a18] font-sans">
                  <p className="font-semibold text-[#1a1a18]">Ahmedabad Works:</p>
                  <p className="text-[#666663] leading-relaxed">
                    C-2, Anup Estate, Nr. Bharat Party Plot,<br />
                    Amraiwadi, N.H. No. 8,<br />
                    Ahmedabad – 380 026, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#e5e5e2] flex items-center justify-center shrink-0 text-[#e31e24] shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm font-sans">
                  <p className="font-semibold text-[#1a1a18]">Telephone & WhatsApp:</p>
                  <a href="tel:+919924842266" className="text-[#1a1a18] hover:text-[#e31e24] font-medium block transition-colors">
                    +91 99248 42266
                  </a>
                  <a href="tel:+919825214512" className="text-[#666663] hover:text-[#1a1a18] text-xs block transition-colors">
                    +91 98252 14512 / +91 94282 14512
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#e5e5e2] flex items-center justify-center shrink-0 text-[#e31e24] shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm font-sans">
                  <p className="font-semibold text-[#1a1a18]">Official Email:</p>
                  <a href="mailto:pacifluidpumps@gmail.com" className="text-[#1a1a18] hover:text-[#e31e24] font-medium block transition-colors">
                    pacifluidpumps@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-[#e5e5e2] flex items-center gap-3 text-xs text-[#666663] font-sans">
                <Clock className="w-4 h-4 text-[#e31e24]" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST (Works & Dispatch)</span>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#e5e5e2] h-56 shadow-sm">
              <iframe
                title="Pacifluid Pumps Ahmedabad Works Location"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: Premium Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-modern bg-white p-8 sm:p-10 shadow-sm">
              <div className="space-y-2 mb-8">
                <h3 className="font-display text-2xl font-bold text-[#1a1a18]">
                  Send a Direct Works Enquiry
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#666663]">
                  Fill out your application parameters and fluid specifications. An engineering quotation will be dispatched promptly.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-emerald-900">
                    Enquiry Dispatched Successfully!
                  </h4>
                  <p className="font-sans text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you. Your inquiry has been routed to our technical sales team at Ahmedabad. We will get back to you with specs and pricing shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      resetForm();
                    }}
                    className="btn btn-sm border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-display font-medium text-[#1a1a18]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-2.5 text-sm bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white transition-all text-[#1a1a18]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-display font-medium text-[#1a1a18]">
                        Company / Plant Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Torrent Chemicals Ltd."
                        className="w-full px-4 py-2.5 text-sm bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white transition-all text-[#1a1a18]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-display font-medium text-[#1a1a18]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98250 XXXXX"
                        className="w-full px-4 py-2.5 text-sm bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white transition-all text-[#1a1a18]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-display font-medium text-[#1a1a18]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="purchase@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white transition-all text-[#1a1a18]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-display font-medium text-[#1a1a18]">
                      Product Line of Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white transition-all text-[#1a1a18]"
                    >
                      <option value="GP Series — External Rotary Gear">GP Series — External Rotary Gear Pump</option>
                      <option value="GPSS Series — Stainless Steel Rotary Gear">GPSS Series — Stainless Steel Rotary Gear Pump</option>
                      <option value="PIGB Series — Fuel Injection Gear Pump (internal pump)">PIGB Series — Fuel Injection Gear Pump (internal pump) (Up to 35 Bar)</option>
                      <option value="PGP Series — Precision External Gear">PGP Series — Machine Tool Lubrication Gear Pump</option>
                      <option value="General Technical Sizing">Other / Need Technical Sizing Help</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-display font-medium text-[#1a1a18]">
                      Fluid Properties & Operational Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention fluid name (e.g. Furnace Oil, Edible Oil, Bitumen), flow rate required (LPM / m3/hr), discharge pressure (Bar), and operating temperature."
                      className="w-full px-4 py-2.5 text-sm bg-[#fafaf9] border border-[#e5e5e2] rounded-xl focus:outline-none focus:border-[#e31e24] focus:bg-white transition-all text-[#1a1a18]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-red w-full py-3.5 text-sm font-semibold shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "submitting" ? "Submitting Inquiry..." : "Submit Technical Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
