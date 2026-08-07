# TeleRehab Portal

A 6-page Next.js website for an online physiotherapy / tele-rehab practice, built from the
website plan in the notes: **Website Identity → Pages → Home Page**. Light-blue theme,
custom "3D-style" SVG illustrations (no external images or 3D engine needed), fully responsive.

Pages included:

1. **Home** — header (name + tagline), subheading, highlights, services preview, call-to-action
2. **About Me** — qualifications, experience & approach
3. **Services** — conditions / services treated online
4. **How Tele-Rehab Works** — the online consultation process, step by step
5. **Book Appointment** — embeds your Google Form
6. **Contact** — email, phone, WhatsApp, Instagram, location

## 1. Install prerequisites

You need **Node.js 18.18 or newer** installed on your computer.

- Check your version: `node -v`
- If you don't have Node.js, download it from https://nodejs.org (choose the LTS version).

## 2. Install project dependencies

Open a terminal, move into the project folder, and run:

```bash
cd telerehab-portal
npm install
```

This downloads Next.js, React, and Tailwind CSS into a `node_modules` folder (only needs to be
done once, or again after you pull new changes).

## 3. Run it locally

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. The site auto-reloads whenever you save a
file.

## 4. Build for production (optional, before deploying)

```bash
npm run build
npm run start
```

`next build` compiles an optimized production version; `next start` serves it (default port
3000).

## 5. Edit your content

Everything specific to your practice — name, tagline, bio, services, contact details, and the
Google Form link — lives in **one file**:

```
lib/site-config.ts
```

Open it and replace every value marked `PLACEHOLDER` with your real details:

- `name` / `tagline` — shown in the header, browser tab, and footer (Step 1 from your notes)
- `practitioner` — your name, qualifications, bio, and approach (About Me page)
- `services` — the 6 service cards (Services page)
- `howItWorks` — the 5-step process (How Tele-Rehab Works page)
- `bookingFormUrl` — see step 6 below
- `contact` — email, phone, WhatsApp link, Instagram link, location text

The rest of the site updates automatically — you don't need to touch any page file for text
changes.

## 6. Connect your Google Form (Book Appointment page)

1. Create your appointment-booking form at https://forms.google.com
2. Click **Send** (top right) → the **`<>`** embed tab → copy the `src="..."` URL from the
   `<iframe>` code it gives you.
3. Paste that URL into `bookingFormUrl` in `lib/site-config.ts`.

If you'd rather link out instead of embedding, the "Open it in a new tab" link on that page
already points to the same URL.

## 7. Where the "3D" illustrations live

All illustrations are hand-built SVG components (gradients + soft shadows + a gentle floating
animation) — no external image files, so nothing to re-upload if you tweak colors:

- `components/illustrations/HeroIllustration.tsx` — homepage hero (video-call scene)
- `components/illustrations/AboutIllustration.tsx` — About Me page
- `components/illustrations/BookingIllustration.tsx` — Book Appointment page
- `components/illustrations/Icon3D.tsx` — the small 3D icon tiles used on Services, How-it-Works,
  and Contact

Want photo-realistic 3D renders instead? Generate images in your preferred tool and drop them
into the `public/` folder, then swap the corresponding illustration component for an `<img>` /
`next/image` tag pointing at the new file.

## 8. Theme colors

The light-blue palette is defined in `tailwind.config.ts` under `theme.extend.colors.brand`
(50 = lightest, 900 = darkest) and the `hero-gradient` / `brand-gradient` background gradients.
Change those hex values to adjust the whole site's color scheme at once.

## 9. Deploying

This is a standard Next.js app, so it deploys to any Next.js-compatible host:

- **Vercel** (easiest): push this folder to a GitHub repo, then import it at
  https://vercel.com/new
- **Netlify / Render / your own server**: run `npm run build` then `npm run start`, or follow
  their Next.js deployment guides.

## Project structure

```
telerehab-portal/
├─ app/
│  ├─ page.tsx                 # Home
│  ├─ about/page.tsx            # About Me
│  ├─ services/page.tsx         # Services
│  ├─ how-it-works/page.tsx     # How Tele-Rehab Works
│  ├─ book-appointment/page.tsx # Book Appointment (Google Form)
│  ├─ contact/page.tsx          # Contact
│  ├─ layout.tsx                # Shared layout (Navbar + Footer)
│  └─ globals.css
├─ components/
│  ├─ Navbar.tsx, Footer.tsx, Container.tsx, PageHeader.tsx
│  └─ illustrations/            # all "3D-style" SVG graphics
├─ lib/site-config.ts           # <- edit your content here
├─ tailwind.config.ts           # <- edit your theme colors here
└─ package.json
```
