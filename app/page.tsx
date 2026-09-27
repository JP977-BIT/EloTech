import type { Metadata } from "next";
import { openGraph } from "@/app/shared-metadata";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { CustomDevelopment } from "@/components/CustomDevelopment";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...openGraph, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <CustomDevelopment />
      <Contact />
    </>
  );
}
