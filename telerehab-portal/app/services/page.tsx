import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Icon3D from "@/components/illustrations/Icon3D";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.name}`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Conditions & Services I Treat Online"
        description="Every service below is delivered entirely through secure video consultations."
      />

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-start gap-4 rounded-2xl border border-brand-100 bg-white p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <Icon3D name={service.icon as any} />
              <h3 className="text-lg font-semibold text-brand-800">{service.title}</h3>
              <p className="text-sm text-brand-700/80">{service.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-hero-gradient p-10 text-center shadow-soft md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">Not sure which service fits your needs?</h2>
              <p className="mt-2 max-w-md text-white/90">
                Book a consultation and we&apos;ll assess your condition together before building your plan.
              </p>
            </div>
            <Link
              href="/book-appointment"
              className="whitespace-nowrap rounded-full bg-white px-7 py-3 font-semibold text-brand-700 shadow-lg transition-transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
