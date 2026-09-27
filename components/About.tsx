import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { about } = site;

  return (
    <Section id="about">
      <div className="max-w-3xl">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
