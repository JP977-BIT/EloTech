import Link from "next/link";
import { site } from "@/content/site";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icons";

type Product = {
  icon: Parameters<typeof Icon>[0]["name"];
  name: string;
  platform: string;
  href?: string;
  paragraphs: readonly string[];
};

function ProductCardBody({ product }: { product: Product }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon name={product.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
          {product.platform}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{product.name}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {product.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {product.href ? (
        <p className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more about {product.name}
          <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </p>
      ) : null}
    </>
  );
}

export function Products() {
  const { products } = site;
  const card =
    "flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-shadow hover:shadow-sm";

  return (
    <Section id="products" tone="surface">
      <SectionHeading
        eyebrow={products.eyebrow}
        heading={products.heading}
        lede={products.lede}
        align="center"
      />

      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {(products.items as readonly Product[]).map((product) => (
          <li key={product.name}>
            {product.href ? (
              <Link
                href={product.href}
                className={`group ${card} hover:border-accent-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2`}
              >
                <ProductCardBody product={product} />
              </Link>
            ) : (
              <div className={card}>
                <ProductCardBody product={product} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
