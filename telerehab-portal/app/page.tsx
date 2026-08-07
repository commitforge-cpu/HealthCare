import Link from "next/link";
import Container from "@/components/Container";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import Icon3D from "@/components/illustrations/Icon3D";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Step 3 — Home Page: Header (Name & Tagline) + Subheading */}
      <section className="relative overflow-hidden bg-brand-gradient">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col items-start justify-center text-left">
            <span className="rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm">
              Online Physiotherapy Consultations
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-brand-700">{siteConfig.tagline}</p>
            <p className="mt-5 max-w-md text-brand-800/80">{siteConfig.shortDescription}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="rounded-full bg-hero-gradient px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-105"
              >
                Book an Appointment
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-brand-300 bg-white/70 px-6 py-3 font-semibold text-brand-800 transition-colors hover:bg-white"
              >
                How Tele-Rehab Works
              </Link>
            </div>
          </div>

          <HeroIllustration />
        </Container>
      </section>

      {/* Quick highlights */}
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "100% Online", desc: "Consult securely from any device, anywhere." },
            { title: "Personalised Plans", desc: "Programmes tailored to your condition & goals." },
            { title: "Ongoing Support", desc: "Regular follow-ups until you're fully recovered." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold text-brand-800">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-700/80">{item.desc}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Services preview */}
      <section className="bg-brand-50/60 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">What I Help With</h2>
            <p className="mx-auto mt-2 max-w-xl text-brand-700/80">
              A few of the conditions and goals patients commonly bring to tele-rehab sessions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-start gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
              >
                <Icon3D name={service.icon as any} />
                <h3 className="text-lg font-semibold text-brand-800">{service.title}</h3>
                <p className="text-sm text-brand-700/80">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="font-semibold text-brand-600 hover:text-brand-800">
              View all services →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-hero-gradient p-10 text-center shadow-soft md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">Ready to start your recovery?</h2>
              <p className="mt-2 max-w-md text-white/90">
                Book your first tele-rehab session today and take the first step toward feeling better.
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
