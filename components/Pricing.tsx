import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { Icon } from "./Icons";

export function Pricing() {
  const { pricing } = site;
  const { plan } = pricing;

  return (
    <Section id="pricing" tone="surface">
      <SectionHeading
        eyebrow={pricing.eyebrow}
        heading={pricing.heading}
        lede={pricing.lede}
        align="center"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Plan card */}
        <div className="rounded-2xl border-2 border-accent bg-white p-8 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">{plan.name}</p>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-semibold tracking-tight text-foreground">{plan.price}</span>
          </p>
          <p className="mt-1 text-sm text-muted">{plan.unit}</p>

          <ul className="mt-8 space-y-3 border-t border-border pt-6">
            {plan.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Button href={plan.cta.href} className="mt-8 w-full">
            {plan.cta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>

          <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm leading-relaxed text-muted">
            {plan.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <div className="space-y-8 lg:col-span-3 lg:pt-2">
          {pricing.details.map((detail) => (
            <div key={detail.title}>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{detail.title}</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                {detail.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {detail.items ? (
                  <ul className="list-disc space-y-1.5 pl-5">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {detail.outro?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
