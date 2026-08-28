import type { Metadata } from "next";
import { revlinkPrivacy } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: revlinkPrivacy.title,
  description: revlinkPrivacy.description,
  alternates: { canonical: "/revlink/privacy" },
};

export default function RevLinkPrivacyPage() {
  return <LegalPage doc={revlinkPrivacy} />;
}
