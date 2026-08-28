import type { Metadata } from "next";
import { refund } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: refund.title,
  description: refund.description,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return <LegalPage doc={refund} />;
}
