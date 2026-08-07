export default function AboutIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md select-none">
      <div className="absolute -top-6 -right-8 h-36 w-36 rounded-full bg-brand-200/60 blur-2xl animate-blob" />
      <svg viewBox="0 0 420 420" className="relative z-10 h-auto w-full drop-shadow-soft" role="img" aria-label="3D illustration of a physiotherapist">
        <defs>
          <linearGradient id="coatGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e3f1fb" />
          </linearGradient>
          <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5fb2e5" />
            <stop offset="100%" stopColor="#1f5f8f" />
          </linearGradient>
        </defs>

        <ellipse cx="210" cy="370" rx="140" ry="24" fill="#1a4262" opacity="0.08" />

        {/* platform */}
        <polygon points="90,300 210,250 330,300 210,350" fill="#cdeafd" />
        <polygon points="90,300 90,318 210,368 210,350" fill="#93cdef" />
        <polygon points="330,300 330,318 210,368 210,350" fill="#7fbfe8" />

        {/* figure */}
        <g className="animate-float-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx="210" cy="150" r="34" fill="#ffd7ae" />
          <path d="M176 150 a34 34 0 0 1 68 0" fill="#2b2b2b" />
          <path d="M158 290 q6 -100 52 -104 q46 4 52 104 z" fill="url(#coatGrad)" stroke="#c1e2f6" strokeWidth="2" />
          <rect x="196" y="180" width="28" height="10" rx="4" fill="#3897d6" />
          <circle cx="210" cy="205" r="9" fill="url(#badgeGrad)" />
        </g>

        {/* floating certificate */}
        <g className="animate-float" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <rect x="60" y="120" width="86" height="64" rx="8" fill="#ffffff" stroke="#c1e2f6" strokeWidth="2" />
          <circle cx="80" cy="145" r="10" fill="#bfe3fb" />
          <rect x="98" y="138" width="36" height="6" rx="3" fill="#e3f1fb" />
          <rect x="98" y="150" width="28" height="6" rx="3" fill="#e3f1fb" />
        </g>

        {/* floating stethoscope-ish icon */}
        <g className="animate-float-delayed" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx="330" cy="170" r="34" fill="#ffffff" stroke="#c1e2f6" strokeWidth="2" />
          <path d="M318 160 v10 a10 10 0 0 0 20 0 v-10" stroke="#3897d6" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="338" cy="182" r="4" fill="#3897d6" />
        </g>
      </svg>
    </div>
  );
}
