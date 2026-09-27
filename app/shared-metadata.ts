import type { Metadata } from "next";
import { site } from "@/content/site";

export const defaultTitle = `${site.name} — ${site.tagline}`;

/**
 * Open Graph fields shared by every page. Next.js replaces `openGraph` wholesale
 * per page, so each page spreads this and adds its own `url` to match its canonical.
 */
export const openGraph = {
  type: "website",
  siteName: site.name,
  title: defaultTitle,
  description: site.description,
  locale: site.locale,
} satisfies Metadata["openGraph"];
