"use client";

import { X, Play } from "lucide-react";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between bg-[#F7F8FA]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#155A9C]">
              MANUFACTURING & MACHINING WORKS
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0B2341]">
              In-House CNC Machining & Assembly Footage
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player (Clean presentation without heavy overlay, Section 24) */}
        <div className="p-4 bg-slate-950 flex items-center justify-center">
          <video
            src="/img/video.mp4"
            controls
            autoPlay
            playsInline
            className="w-full max-h-[70vh] rounded-xl shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Caption */}
        <div className="px-6 py-3 bg-white text-xs text-[#667085] flex items-center justify-between">
          <span>Factory floor operations at Ahmedabad works, Gujarat.</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#0B2341] hover:text-[#D71920]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
