// A hand-built, isometric "3D-style" illustration for the homepage hero.
// Pure SVG + gradients + soft shadows (no external image files / no 3D engine
// needed), so it renders instantly and is easy to re-colour or swap out.
export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg select-none">
      <div className="absolute -top-10 -left-8 h-40 w-40 rounded-full bg-brand-200/60 blur-2xl animate-blob" />
      <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-brand-300/50 blur-2xl animate-blob" />

      <svg
        viewBox="0 0 520 460"
        className="relative z-10 h-auto w-full drop-shadow-soft"
        role="img"
        aria-label="3D illustration of an online physiotherapy video consultation"
      >
        <defs>
          <linearGradient id="deskTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eaf6ff" />
            <stop offset="100%" stopColor="#c1e2f6" />
          </linearGradient>
          <linearGradient id="deskSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93cdef" />
            <stop offset="100%" stopColor="#5fb2e5" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3897d6" />
            <stop offset="100%" stopColor="#1f5f8f" />
          </linearGradient>
          <linearGradient id="laptopBase" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2679b3" />
            <stop offset="100%" stopColor="#1c4e75" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* floor / shadow ellipse */}
        <ellipse cx="260" cy="410" rx="200" ry="26" fill="#1a4262" opacity="0.08" />

        {/* desk (isometric) */}
        <g className="animate-float-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <polygon points="80,330 260,270 440,330 260,392" fill="url(#deskTop)" />
          <polygon points="80,330 80,352 260,414 260,392" fill="url(#deskSide)" />
          <polygon points="440,330 440,352 260,414 260,392" fill="#7fbfe8" />
        </g>

        {/* laptop */}
        <g>
          <polygon points="175,300 260,270 345,300 260,330" fill="url(#laptopBase)" />
          <polygon
            points="182,296 260,270 260,220 182,246"
            fill="url(#screenGrad)"
            stroke="#1a4262"
            strokeWidth="2"
          />
          {/* screen contents: video call bubbles */}
          <circle cx="205" cy="262" r="12" fill="#eaf6ff" opacity="0.9" />
          <rect x="222" y="248" width="26" height="20" rx="3" fill="#eaf6ff" opacity="0.75" />
        </g>

        {/* floating video-call card (doctor) */}
        <g className="animate-float" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <rect x="300" y="120" width="150" height="110" rx="16" fill="#ffffff" stroke="#c1e2f6" strokeWidth="2" />
          <circle cx="375" cy="160" r="22" fill="#bfe3fb" />
          <circle cx="375" cy="154" r="9" fill="#3897d6" />
          <path d="M357 178 q18 -14 36 0" stroke="#3897d6" strokeWidth="6" fill="none" strokeLinecap="round" />
          <rect x="316" y="200" width="118" height="10" rx="5" fill="#e3f1fb" />
          <circle cx="424" cy="134" r="7" fill="#5fb2e5" />
        </g>

        {/* floating exercise band icon */}
        <g className="animate-float-delayed" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <rect x="70" y="150" width="120" height="70" rx="14" fill="#ffffff" stroke="#c1e2f6" strokeWidth="2" />
          <path
            d="M92 190 q22 -30 44 0 q22 30 44 0"
            stroke="#3897d6"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* seated person (simple isometric figure) */}
        <g>
          <ellipse cx="260" cy="270" rx="4" ry="2" fill="transparent" />
          <circle cx="260" cy="212" r="24" fill="#ffd7ae" />
          <path d="M236 212 a24 24 0 0 1 48 0" fill="#1c4e75" />
          <path
            d="M222 300 q4 -60 38 -62 q34 2 38 62 z"
            fill="#3897d6"
          />
          <rect x="240" y="296" width="40" height="14" rx="6" fill="#1f5f8f" />
        </g>

        <circle cx="130" cy="90" r="46" fill="url(#glow)" />
        <circle cx="410" cy="330" r="60" fill="url(#glow)" />
      </svg>
    </div>
  );
}
