import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import BookingIllustration from "@/components/illustrations/BookingIllustration";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Book Appointment — ${siteConfig.name}`,
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book Appointment"
        title="Schedule Your Tele-Rehab Session"
        description="Fill out the form below and I'll confirm your slot by email or WhatsApp."
      />

      <section className="py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <BookingIllustration />

          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            {/*
              PLACEHOLDER — replace siteConfig.bookingFormUrl in
              lib/site-config.ts with your real Google Form "embed" link
              (Google Forms → Send → the "<>" embed tab → copy the src URL).
            */}
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-brand-100 bg-brand-50">
              <iframe
                src={siteConfig.bookingFormUrl}
                title="Book an appointment"
                className="h-full w-full"
                loading="lazy"
              >
                Loading appointment form…
              </iframe>
            </div>
            <p className="mt-4 text-center text-sm text-brand-700/70">
              Having trouble with the form?{" "}
              <a href={siteConfig.bookingFormUrl} target="_blank" rel="noreferrer" className="font-semibold text-brand-600 hover:underline">
                Open it in a new tab
              </a>{" "}
              or reach out via the <a href="/contact" className="font-semibold text-brand-600 hover:underline">Contact page</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
