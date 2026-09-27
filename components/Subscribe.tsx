import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { Icon } from "./Icons";
import { RichText } from "./RichText";

/**
 * Explains that RevLink is bought per device inside the app.
 * Intentionally has no checkout — the only action is downloading the app.
 */
export function Subscribe() {
  const { subscribe } = site;

  return (
    <Section id="subscribe">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading heading={subscribe.heading} lede={subscribe.lede} />
        </div>

        <div className="rounded-2xl border border-border bg-white p-8">
          <p className="text-sm font-semibold text-foreground">{subscribe.needsIntro}</p>
          <ul className="mt-6 space-y-5">
            {subscribe.needs.map((need) => (
              <li key={need} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  <RichText text={need} />
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm leading-relaxed text-muted">
              <RichText text={subscribe.outro} />
            </p>
            <Button href={subscribe.cta.href} newTab className="mt-6 w-full">
              {subscribe.cta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
