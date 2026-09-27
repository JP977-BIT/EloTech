import type { Metadata } from "next";
import { openGraph } from "@/app/shared-metadata";
import { privacy } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.description,
  alternates: { canonical: "/privacy" },
  openGraph: { ...openGraph, url: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
