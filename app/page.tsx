import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { CustomDevelopment } from "@/components/CustomDevelopment";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <CustomDevelopment />
      <Contact />
    </>
  );
}
