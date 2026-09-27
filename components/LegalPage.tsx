import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@/content/legal";
import { Container } from "./Container";
import { RichText } from "./RichText";

type LegalPageProps = {
  doc: LegalDoc;
};

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h3":
      return <h3 className="pt-2 text-base font-semibold text-foreground">{block.text}</h3>;
    case "list":
      return (
        <ul className="list-disc space-y-1.5 pl-6">
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "p":
    default:
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
  }
}

export function LegalPage({ doc }: LegalPageProps) {
  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          ← Back to home
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-sm font-medium text-muted">{doc.entity}</p>
          <p className="mt-1 text-sm text-subtle">Last updated: {doc.lastUpdated}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {doc.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="mt-10 space-y-10">
          {doc.sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </Container>
  );
}
