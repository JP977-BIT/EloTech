import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icons";

export function About() {
  const { about } = site;

  return (
    <Section id="about" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:pt-12">
          <ul className="divide-y divide-border rounded-2xl border border-border bg-white">
            {about.highlights.map((item) => (
              <li key={item.value} className="flex items-start gap-4 p-6">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-foreground">{item.value}</p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
