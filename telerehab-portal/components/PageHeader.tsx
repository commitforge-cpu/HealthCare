import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-gradient py-16">
      <Container className="text-center">
        <span className="inline-block rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-brand-900 sm:text-4xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-brand-800/80">{description}</p>
        )}
      </Container>
    </section>
  );
}
