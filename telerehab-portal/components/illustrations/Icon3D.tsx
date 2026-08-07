// A small library of "3D-style" icon tiles — a rounded gradient cube with a
// soft top-highlight and drop shadow, topped with a simple glyph. Used across
// Services, How-it-Works, and Contact so the whole site shares one visual
// language without needing external image assets.
type IconName =
  | "spine"
  | "knee"
  | "shoulder"
  | "neuro"
  | "posture"
  | "mobility"
  | "calendar"
  | "form"
  | "video"
  | "plan"
  | "checkin"
  | "email"
  | "phone"
  | "whatsapp"
  | "instagram"
  | "location";

const glyphs: Record<IconName, JSX.Element> = {
  spine: (
    <path
      d="M32 10 v6 M32 20 v6 M32 30 v6 M32 40 v6 M32 50 v4"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  ),
  knee: (
    <path
      d="M22 44 L30 22 L42 24 L38 44"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shoulder: (
    <path
      d="M18 34 q14 -20 28 0"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  ),
  neuro: (
    <>
      <circle cx="32" cy="24" r="8" fill="none" stroke="white" strokeWidth="4" />
      <path d="M24 34 q8 10 16 0" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  posture: (
    <path
      d="M32 14 v10 M32 24 l-8 22 M32 24 l8 22"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  ),
  mobility: (
    <path
      d="M18 40 l10 -18 l8 8 l10 -14"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  calendar: (
    <>
      <rect x="16" y="18" width="32" height="26" rx="4" fill="none" stroke="white" strokeWidth="4" />
      <path d="M16 26 h32" stroke="white" strokeWidth="4" />
      <path d="M23 14 v8 M41 14 v8" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  form: (
    <>
      <rect x="18" y="14" width="28" height="34" rx="3" fill="none" stroke="white" strokeWidth="4" />
      <path d="M24 24 h16 M24 32 h16 M24 40 h10" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  video: (
    <>
      <rect x="14" y="20" width="26" height="20" rx="4" fill="none" stroke="white" strokeWidth="4" />
      <path d="M40 26 l10 -6 v20 l-10 -6 z" fill="white" />
    </>
  ),
  plan: (
    <>
      <path d="M18 44 V18 h20 l8 8 v18 z" fill="none" stroke="white" strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 28 h14 M24 35 h10" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  checkin: (
    <path
      d="M18 32 l10 10 l18 -22"
      fill="none"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  email: (
    <>
      <rect x="14" y="18" width="36" height="26" rx="4" fill="none" stroke="white" strokeWidth="4" />
      <path d="M16 20 l16 14 l16 -14" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  phone: (
    <path
      d="M22 16c2 6 4 10 8 14s8 6 14 8l3 -3c2 -2 5 -2 7 0l4 4c2 2 2 5 0 7l-3 3c-2 2 -5 3 -8 2c-12 -3 -22 -13 -25 -25c-1 -3 0 -6 2 -8l3 -3c2 -2 5 -2 7 0z"
      fill="white"
    />
  ),
  whatsapp: (
    <path
      d="M20 44l3 -8c-6 -8 -4 -19 4 -24c8 -6 19 -4 24 4c6 8 4 19 -4 24c-6 4 -14 4 -19 1z"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect x="16" y="16" width="32" height="32" rx="9" fill="none" stroke="white" strokeWidth="4" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="white" strokeWidth="4" />
      <circle cx="41" cy="23" r="2.2" fill="white" />
    </>
  ),
  location: (
    <path
      d="M32 14c8 0 14 6 14 14c0 10 -14 22 -14 22s-14 -12 -14 -22c0 -8 6 -14 14 -14z"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinejoin="round"
    >
      <animate attributeName="opacity" values="1" dur="1s" />
    </path>
  ),
};

export default function Icon3D({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <div className={`relative h-16 w-16 shrink-0 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full drop-shadow-[0_8px_14px_rgba(56,151,214,0.35)]">
        <defs>
          <linearGradient id={`tile-${name}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5fb2e5" />
            <stop offset="100%" stopColor="#1f5f8f" />
          </linearGradient>
          <linearGradient id={`tileTop-${name}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="4" y="6" width="56" height="56" rx="16" fill={`url(#tile-${name})`} />
        <rect x="4" y="6" width="56" height="24" rx="16" fill={`url(#tileTop-${name})`} />
        <rect x="4" y="6" width="56" height="56" rx="16" fill="none" stroke="#ffffff" strokeOpacity="0.25" />
        {glyphs[name]}
      </svg>
    </div>
  );
}
