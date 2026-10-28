"use client";

export default function OutlineMarquee() {
  const marqueeItems = [
    "ROTARY GEAR",
    "FUEL INJECTION",
    "STAINLESS STEEL SS-316",
    "POSITIVE DISPLACEMENT",
    "HOT BITUMEN",
    "HIGH VISCOSITY",
    "CHEMICAL TRANSFER",
    "HEAVY DUTY",
    "PRECISION MACHINED"
  ];

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8 bg-[#fafaf9] border-y border-[#e5e5e2] select-none">
      {/* Edge Soft Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafaf9] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafaf9] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center whitespace-nowrap">
        {/* Loop 1 */}
        <div className="flex items-center shrink-0">
          {marqueeItems.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center mx-4 sm:mx-6">
              <span className="stroke-text text-3xl sm:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 hover:text-[#1a1a18]">
                {item}
              </span>
              <span className="text-[#e31e24] text-xl sm:text-2xl ml-8 sm:ml-12">✦</span>
            </div>
          ))}
        </div>

        {/* Loop 2 (Seamless infinite repeat) */}
        <div className="flex items-center shrink-0">
          {marqueeItems.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center mx-4 sm:mx-6">
              <span className="stroke-text text-3xl sm:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 hover:text-[#1a1a18]">
                {item}
              </span>
              <span className="text-[#e31e24] text-xl sm:text-2xl ml-8 sm:ml-12">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
