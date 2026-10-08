"use client";

import { ShieldCheck, Cog, Gauge, Truck, CheckCircle2, Clock } from "lucide-react";

export default function WhyPacifluid() {
  const pillars = [
    {
      icon: <Gauge className="w-6 h-6 text-[#155A9C]" />,
      title: "100% In-House Hydrostatic Testing",
      desc: "Every single pump is pressure-tested on calibrated hydraulic benches up to 35-50 Bar before leaving our factory floor. Test certificate included."
    },
    {
      icon: <Cog className="w-6 h-6 text-[#155A9C]" />,
      title: "Custom Metallurgy & Sealing",
      desc: "We engineer pumps in Graded Cast Iron (FG-260), Cast Steel WCB, SS-304, and SS-316 with Teflon gland or mechanical seals tailored to fluid chemistry."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D71920]" />,
      title: "Zero Pulsation & Noiseless Gearing",
      desc: "Precision single-helical and herringbone gear cutting profiles eliminate hydraulic shocks and deliver steady, vibration-free volumetric displacement."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#155A9C]" />,
      title: "Prompt Dispatch & Lifetime Spares",
      desc: "Readily available stock of replacement gears, shafts, mechanical seals, and bushes ensuring near-zero downtime for your plant operations."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155A9C]">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2341]">
            Why Industrial Plants Rely on Pacifluid
          </h2>
          <p className="text-base text-[#667085]">
            Built with 34+ years of precision manufacturing heritage by Shakti Engineers to withstand punishing 24/7 operating regimes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] p-6 space-y-4 hover:border-[#155A9C]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-2xs">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-[#0B2341]">
                {p.title}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
