import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Icon3D from "@/components/illustrations/Icon3D";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
};

export default function ContactPage() {
  const { contact } = siteConfig;

  const cards = [
    { name: "email" as const, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { name: "phone" as const, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { name: "whatsapp" as const, label: "WhatsApp", value: "Chat with me", href: contact.whatsapp },
    { name: "instagram" as const, label: "Instagram", value: "Follow along", href: contact.instagram },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Questions before you book? Reach out through any of the channels below."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1"
              >
                <Icon3D name={c.name} />
                <h3 className="font-semibold text-brand-800">{c.label}</h3>
                <p className="text-sm text-brand-700/80 break-all">{c.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center">
            <Icon3D name="location" className="h-12 w-12" />
            <p className="text-brand-800/90">{contact.location}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
