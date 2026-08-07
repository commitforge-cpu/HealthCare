import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-50">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-hero-gradient text-white shadow-soft">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M12 2c4 0 7 3 7 7c0 5 -7 13 -7 13s-7 -8 -7 -13c0 -4 3 -7 7 -7z" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="9" r="2.4" fill="white" />
              </svg>
            </span>
            <span className="text-lg font-bold text-brand-800">{siteConfig.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-brand-700/80">{siteConfig.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-800">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-700/80">
            <li><Link href="/about" className="hover:text-brand-600">About Me</Link></li>
            <li><Link href="/services" className="hover:text-brand-600">Services</Link></li>
            <li><Link href="/how-it-works" className="hover:text-brand-600">How Tele-Rehab Works</Link></li>
            <li><Link href="/book-appointment" className="hover:text-brand-600">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-800">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-700/80">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.location}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-brand-100 py-5 text-center text-xs text-brand-700/70">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
