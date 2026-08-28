import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { Icon } from "./Icons";

/**
 * Contact-driven enquiry block for bespoke work.
 * Intentionally has no pricing or checkout — enquiries go straight to the team.
 */
export function CustomDevelopment() {
  const { custom } = site;

  return (
    <Section id="custom-development">
      <div className="grid gap-10 rounded-2xl border border-border bg-white p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading eyebrow={custom.eyebrow} heading={custom.heading} />
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {custom.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href={custom.cta.href} variant="secondary">
              {custom.cta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
