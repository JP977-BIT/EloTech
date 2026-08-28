import { site } from "@/content/site";
import { Container } from "./Container";
import { Button } from "./Button";
import { Icon } from "./Icons";

export function Hero() {
  const { hero } = site;

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Subtle CSS-only background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--color-accent-soft),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-ring bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-10 text-sm text-subtle">{hero.trustNote}</p>
        </div>
      </Container>
    </section>
  );
}
