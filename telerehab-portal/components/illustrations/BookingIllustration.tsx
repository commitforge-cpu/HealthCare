export default function BookingIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md select-none">
      <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-brand-300/50 blur-2xl animate-blob" />
      <svg viewBox="0 0 420 380" className="relative z-10 h-auto w-full drop-shadow-soft" role="img" aria-label="3D illustration of an online booking calendar">
        <defs>
          <linearGradient id="calFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e3f1fb" />
          </linearGradient>
          <linearGradient id="calTop" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3897d6" />
            <stop offset="100%" stopColor="#1f5f8f" />
          </linearGradient>
        </defs>

        <ellipse cx="210" cy="330" rx="140" ry="22" fill="#1a4262" opacity="0.08" />

        <g className="animate-float-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <rect x="110" y="90" width="200" height="180" rx="18" fill="url(#calFace)" stroke="#c1e2f6" strokeWidth="2" />
          <path d="M110 108a18 18 0 0 1 18-18h164a18 18 0 0 1 18 18v34H110z" fill="url(#calTop)" />
          <rect x="140" y="80" width="10" height="24" rx="4" fill="#1a4262" />
          <rect x="270" y="80" width="10" height="24" rx="4" fill="#1a4262" />
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={140 + col * 30}
                y={165 + row * 30}
                width="20"
                height="20"
                rx="5"
                fill={row === 1 && col === 2 ? "#3897d6" : "#e3f1fb"}
              />
            ))
          )}
        </g>

        {/* floating clock */}
        <g className="animate-float" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx="330" cy="260" r="38" fill="#ffffff" stroke="#c1e2f6" strokeWidth="2" />
          <circle cx="330" cy="260" r="27" fill="#eaf6ff" />
          <path d="M330 246v16l12 8" stroke="#3897d6" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>

        {/* floating checkmark badge */}
        <g className="animate-float-delayed" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx="90" cy="150" r="30" fill="#ffffff" stroke="#c1e2f6" strokeWidth="2" />
          <path d="M78 150l8 8l16 -18" stroke="#3897d6" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
