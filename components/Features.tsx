import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icons";

type FeatureItem = { label: string; detail?: string };

export function Features() {
  const { features } = site;

  return (
    <Section id="features">
      <SectionHeading
        eyebrow={features.eyebrow}
        heading={features.heading}
        lede={features.lede}
        align="center"
      />

      <ul className="mt-16 grid gap-6 md:grid-cols-2">
        {features.groups.map((group) => (
          <li
            key={group.title}
            className={`rounded-2xl border border-border bg-white p-7 ${
              group.wide ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={group.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{group.title}</h3>
            </div>

            {group.intro ? (
              <p className="mt-4 text-sm leading-relaxed text-muted">{group.intro}</p>
            ) : null}

            <ul
              className={
                group.wide ? "mt-6 grid gap-6 sm:grid-cols-3" : "mt-5 space-y-3"
              }
            >
              {(group.items as readonly FeatureItem[]).map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  <div className="text-sm leading-relaxed">
                    <p className="font-medium text-foreground">{item.label}</p>
                    {item.detail ? <p className="mt-1 text-muted">{item.detail}</p> : null}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
