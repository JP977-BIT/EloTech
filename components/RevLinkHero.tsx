import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";
import { Button } from "./Button";
import { Icon } from "./Icons";

function getRevLink() {
  const product = site.products.items.find((item) => item.name === "RevLink");
  if (!product) throw new Error("RevLink product entry is missing from site.products.items");
  return product;
}

export function RevLinkHero() {
  const { revlink } = site;
  const product = getRevLink();
  const [lead, ...rest] = product.paragraphs;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--color-accent-soft),transparent)]"
      />

      <Container className="py-16 sm:py-24">
        <Link
          href="/#products"
          className="text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          ← Back to products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-ring bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Icon name={product.icon} className="h-3.5 w-3.5" />
              {product.name} — {product.platform}
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {revlink.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={revlink.primaryCta.href} className="w-full sm:w-auto">
                {revlink.primaryCta.label}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href={revlink.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
                {revlink.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8 lg:mt-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">About {product.name}</p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
