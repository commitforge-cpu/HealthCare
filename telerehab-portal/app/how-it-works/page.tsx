import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Icon3D from "@/components/illustrations/Icon3D";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `How Tele-Rehab Works — ${siteConfig.name}`,
};

const stepIcons = ["calendar", "form", "video", "plan", "checkin"] as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How Tele-Rehab Works"
        title="Your Online Consultation, Step by Step"
        description="A simple, guided process — from booking your slot to completing your recovery plan."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {siteConfig.howItWorks.map((item, i) => (
              <div key={item.step} className="relative rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-card">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-hero-gradient px-3 py-1 text-xs font-bold text-white shadow-soft">
                  Step {item.step}
                </span>
                <div className="mt-4 flex justify-center">
                  <Icon3D name={stepIcons[i]} />
                </div>
                <h3 className="mt-4 font-semibold text-brand-800">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-700/80">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-900">What You&apos;ll Need</h2>
          <p className="mt-3 text-brand-800/90">
            A smartphone, tablet, or laptop with a camera and stable internet connection, a quiet
            well-lit space with room to move, and comfortable clothing you can exercise in. That&apos;s it —
            no special equipment required for most sessions.
          </p>
          <div className="mt-8">
            <Link
              href="/book-appointment"
              className="rounded-full bg-hero-gradient px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              Book Your First Session
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
