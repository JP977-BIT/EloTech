import Link from "next/link";
import type { ReactNode } from "react";

/** Matches `**bold**` or `[label](href)`. */
const INLINE_MARKUP = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

const linkClass =
  "font-medium text-accent underline underline-offset-2 transition-colors hover:text-accent-hover";

/**
 * Renders a copy string with two bits of inline markup: `**bold**` and `[label](href)`.
 * Internal hrefs use `next/link`; anything else is a plain anchor.
 */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(INLINE_MARKUP)) {
    const [whole, bold, label, href] = match;
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));

    if (bold) {
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {bold}
        </strong>,
      );
    } else if (href.startsWith("/")) {
      parts.push(
        <Link key={match.index} href={href} className={linkClass}>
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a key={match.index} href={href} className={linkClass}>
          {label}
        </a>,
      );
    }

    cursor = match.index + whole.length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}
