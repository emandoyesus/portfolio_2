"use client";

const surveyMarkers = [
  { left: "6%", top: "12%", delay: "0s", scale: 1 },
  { left: "91%", top: "8%", delay: "2.4s", scale: 0.8 },
  { left: "82%", top: "36%", delay: "1.1s", scale: 1 },
  { left: "14%", top: "45%", delay: "3.6s", scale: 0.75 },
  { left: "48%", top: "25%", delay: "5.2s", scale: 0.65 },
  { left: "68%", top: "68%", delay: "4.1s", scale: 0.7 },
  { left: "28%", top: "82%", delay: "2.8s", scale: 0.85 },
  { left: "88%", top: "92%", delay: "6.0s", scale: 0.75 },
];

export default function SurveyBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base Architectural Lattice Grid */}
      <div className="absolute inset-0 texture-lattice opacity-70" />

      {/* Micro Ticks Pattern */}
      <div className="absolute inset-0 texture-ticks opacity-40" />

      {/* Subtle top ambient radial glow in matching navy blue */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#181c66]/20 rounded-full blur-[120px]" />

      {/* Static Survey Markers */}
      <div className="absolute inset-0 overflow-hidden">
        {surveyMarkers.map((marker, i) => (
          <span
            key={i}
            className="absolute block text-white/20"
            style={{
              left: marker.left,
              top: marker.top,
              transform: `translate(-50%, -50%) scale(${marker.scale})`,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.5 0v4M6.5 9v4M0 6.5h4M9 6.5h4"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="6.5"
                cy="6.5"
                r="2.25"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
