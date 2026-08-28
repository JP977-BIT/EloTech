import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icons";

export function Services() {
  const { services } = site;

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={services.eyebrow}
        heading={services.heading}
        lede={services.lede}
        align="center"
      />

      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => (
          <li
            key={service.title}
            className="group rounded-2xl border border-border bg-white p-7 transition-shadow hover:shadow-sm"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={service.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
