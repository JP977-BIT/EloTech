import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { Icon } from "./Icons";

export function Contact() {
  const { contact } = site;

  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} lede={contact.blurb} />
        </div>

        <div className="rounded-2xl border border-border bg-white p-8">
          <p className="text-sm font-semibold text-foreground">Reach us directly</p>
          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="mail" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-subtle">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="phone" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-subtle">Phone</p>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-accent"
                >
                  {contact.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="map-pin" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-subtle">Location</p>
                <p className="mt-1 text-base font-medium text-foreground">{contact.location}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 border-t border-border pt-6">
            <Button href={`mailto:${contact.email}`} className="w-full">
              Send us an email
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-subtle">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {contact.responseTime}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
