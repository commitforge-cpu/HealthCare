import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import AboutIllustration from "@/components/illustrations/AboutIllustration";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About Me — ${siteConfig.name}`,
};

export default function AboutPage() {
  const { practitioner } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Qualifications, Experience & Approach"
        description="Getting to know the person guiding your recovery."
      />

      <section className="py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <AboutIllustration />

          <div>
            <h2 className="text-2xl font-bold text-brand-900">{practitioner.fullName}</h2>
            <p className="mt-1 font-medium text-brand-600">{practitioner.credentials}</p>
            <p className="mt-1 text-sm text-brand-700/70">{practitioner.yearsExperience} of clinical experience</p>

            <p className="mt-6 text-brand-800/90">{practitioner.bio}</p>

            <h3 className="mt-8 text-lg font-semibold text-brand-800">My Approach</h3>
            <p className="mt-2 text-brand-800/90">{practitioner.approach}</p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-14">
        <Container className="grid gap-6 sm:grid-cols-3">
          {[
            { label: "Qualifications", value: practitioner.credentials },
            { label: "Experience", value: practitioner.yearsExperience },
            { label: "Consultations", value: "100% Online & Secure" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-card">
              <p className="text-sm uppercase tracking-wide text-brand-500">{stat.label}</p>
              <p className="mt-2 font-semibold text-brand-900">{stat.value}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
