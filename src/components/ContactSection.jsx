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
    <section id="contact-section" className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
            COMMUNICATIONS & WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
            Contact Our Engineering Office
          </h2>
          <p className="text-base text-[#667085]">
            Have an inquiry or require sizing assistance? Connect directly with our sales and technical support engineers.
          </p>
        </div>

        {/* Content Grid: Left Contact Info, Right Premium Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Information (Prompt Section 20 Requirement!) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F7F8FA] rounded-3xl border border-[#E5E7EB] p-8 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
                  HEAD OFFICE & WORKS
                </span>
                <h3 className="text-xl font-bold text-[#0B2341]">
                  Shakti Engineers / Pacifluid Pumps
                </h3>
              </div>

              {/* Exact Address from Prompt Section 20 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#155A9C] shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm text-[#111827]">
                  <p className="font-semibold text-[#0B2341]">Ahmedabad Works:</p>
                  <p className="text-[#667085] leading-relaxed">
                    C-2, Anup Estate, Nr. Bharat Party Plot,<br />
                    Amraiwadi, N.H. No. 8,<br />
                    Ahmedabad – 380 026, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Phone from Prompt Section 20 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#155A9C] shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#0B2341]">Telephone & WhatsApp:</p>
                  <a href="tel:+919924842266" className="text-[#155A9C] hover:underline font-medium block">
                    +91 99248 42266
                  </a>
                  <a href="tel:+919825214512" className="text-[#667085] hover:text-[#0B2341] text-xs block">
                    +91 98252 14512 / +91 94282 14512
                  </a>
                </div>
              </div>

              {/* Email from Prompt Section 20 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#155A9C] shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#0B2341]">Official Email:</p>
                  <a href="mailto:pacifluid@rediffmail.com" className="text-[#155A9C] hover:underline font-medium block">
                    pacifluid@rediffmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3 text-xs text-[#667085]">
                <Clock className="w-4 h-4 text-[#155A9C]" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST (Works & Dispatch)</span>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] h-56 shadow-xs">
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
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-10 shadow-sm">
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-bold text-[#0B2341]">
                  Send a Direct Works Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#667085]">
                  Fill out your application parameters and fluid specifications. An engineering quotation will be dispatched promptly.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    Enquiry Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you. Your inquiry has been routed to our technical sales team at Ahmedabad. We will get back to you with specs and pricing shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        product: "General Technical Inquiry",
                        message: ""
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg shadow-2xs hover:bg-emerald-50"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0B2341]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:border-[#155A9C] focus:bg-white transition-all text-[#111827]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0B2341]">
                        Company / Plant Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Torrent Chemicals Ltd."
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:border-[#155A9C] focus:bg-white transition-all text-[#111827]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0B2341]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98250 XXXXX"
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:border-[#155A9C] focus:bg-white transition-all text-[#111827]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#0B2341]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="purchase@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:border-[#155A9C] focus:bg-white transition-all text-[#111827]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0B2341]">
                      Product Line of Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:border-[#155A9C] focus:bg-white transition-all text-[#111827]"
                    >
                      <option value="GP Series — External Rotary Twin Gear">GP Series — External Rotary Twin Gear Pump</option>
                      <option value="GPSS Series — All Stainless Steel (SS-316)">GPSS Series — All Stainless Steel (SS-316) Sanitary</option>
                      <option value="PIGB Series — Fuel Injection Internal Gear">PIGB Series — Fuel Injection Internal Gear Pump (Up to 35 Bar)</option>
                      <option value="PIGA Series — Internal Eccentric Gear">PIGA Series — Internal Eccentric High-Viscosity Pump</option>
                      <option value="PGP Series — Precision External Gear">PGP Series — Machine Tool Lubrication Gear Pump</option>
                      <option value="FT Series — Heavy Duty Process">FT Series — Heavy Duty Industrial Process Pump</option>
                      <option value="General Technical Sizing">Other / Need Technical Sizing Help</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0B2341]">
                      Fluid Properties & Operational Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention fluid name (e.g. Furnace Oil, Edible Oil, Bitumen), flow rate required (LPM / m3/hr), discharge pressure (Bar), and operating temperature."
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:border-[#155A9C] focus:bg-white transition-all text-[#111827]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 text-sm font-semibold text-white bg-[#D71920] hover:bg-[#ba141a] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
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
