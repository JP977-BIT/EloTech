import type { Metadata } from "next";
import { openGraph } from "@/app/shared-metadata";
import { terms } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
  alternates: { canonical: "/terms" },
  openGraph: { ...openGraph, url: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
