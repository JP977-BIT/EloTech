import type { Metadata } from "next";
import { site } from "@/content/site";
import { RevLinkHero } from "@/components/RevLinkHero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

const product = site.products.items.find((item) => item.name === "RevLink");

export const metadata: Metadata = {
  title: "RevLink — Mobile quotes and orders for Revelation Accounting",
  description: product?.paragraphs[0],
  alternates: { canonical: "/revlink" },
};

export default function RevLinkPage() {
  return (
    <>
      <RevLinkHero />
      <Features />
      <Pricing />
      <Contact />
    </>
  );
}
