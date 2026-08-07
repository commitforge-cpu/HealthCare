// ────────────────────────────────────────────────────────────────
// SITE CONFIG — edit everything here first.
// This is the single place that holds your name, tagline, contact
// details, services, and appointment link. Update the placeholder
// (PLACEHOLDER) values below with your real information and the
// whole site updates automatically.
// ────────────────────────────────────────────────────────────────

export const siteConfig = {
  // STEP 1 — Website Identity
  name: "TeleRehab", // PLACEHOLDER — replace with your clinic / practitioner name
  tagline: "Recovery, Wherever You Are", // PLACEHOLDER — replace with your tagline
  shortDescription:
    "Certified physiotherapy consultations delivered online — personalised care, no travel required.",

  // Practitioner details (About page)
  practitioner: {
    fullName: "Dr. Jane Doe", // PLACEHOLDER
    credentials: "BPT, MPT (Orthopaedics)", // PLACEHOLDER
    yearsExperience: "8+ years", // PLACEHOLDER
    bio:
      "I'm a licensed physiotherapist specialising in orthopaedic and sports rehabilitation. Over the last 8+ years I've helped patients recover from post-surgical conditions, sports injuries, and chronic pain — and I now offer that same personalised care through secure video consultations, so you can rehab from the comfort of your home.",
    approach:
      "Every plan starts with a detailed assessment, followed by a customised exercise programme, regular progress check-ins, and clear home-care guidance — the same rigour as an in-clinic session, adapted for tele-rehab.",
  },

  // STEP 2 — Website Pages / Services
  services: [
    {
      title: "Post-Surgery Rehabilitation",
      description:
        "Guided recovery programmes after orthopaedic surgery, joint replacement, or ligament repair.",
      icon: "spine",
    },
    {
      title: "Sports Injury Recovery",
      description:
        "Targeted rehab for sprains, strains, and overuse injuries to get you back to your sport safely.",
      icon: "knee",
    },
    {
      title: "Neck & Back Pain",
      description:
        "Postural correction and pain-relief programmes for chronic neck, shoulder, and lower-back pain.",
      icon: "shoulder",
    },
    {
      title: "Post-Stroke / Neuro Rehab",
      description:
        "Movement and strength-building exercises to support neurological recovery, guided remotely.",
      icon: "neuro",
    },
    {
      title: "Posture & Ergonomics Coaching",
      description:
        "Workstation and movement assessments for people who work long hours at a desk.",
      icon: "posture",
    },
    {
      title: "General Mobility & Strength",
      description:
        "Personalised mobility and strengthening plans for everyday aches, stiffness, and fitness goals.",
      icon: "mobility",
    },
  ],

  howItWorks: [
    {
      step: "1",
      title: "Book your slot",
      description: "Choose a convenient time using the online appointment form.",
    },
    {
      step: "2",
      title: "Share your history",
      description: "Fill a short intake form so your session can be tailored to you.",
    },
    {
      step: "3",
      title: "Join the video call",
      description: "Connect over a secure video call from any phone, tablet, or laptop.",
    },
    {
      step: "4",
      title: "Get your care plan",
      description: "Receive a personalised exercise plan and home-care instructions.",
    },
    {
      step: "5",
      title: "Track & follow up",
      description: "Regular check-ins keep your recovery on schedule until you're better.",
    },
  ],

  // STEP 2.5 — Booking
  // PLACEHOLDER — replace with your real Google Form link
  bookingFormUrl: "https://forms.gle/your-google-form-link",

  // STEP 2.6 — Contact
  contact: {
    email: "hello@telerehab.example", // PLACEHOLDER
    phone: "+91 90000 00000", // PLACEHOLDER
    whatsapp: "https://wa.me/919000000000", // PLACEHOLDER
    instagram: "https://instagram.com/telerehab", // PLACEHOLDER
    location: "Online consultations — available across India", // PLACEHOLDER
  },
};

export type SiteConfig = typeof siteConfig;
