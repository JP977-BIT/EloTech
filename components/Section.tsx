import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  /** `surface` gives the section an off-white background for visual rhythm. */
  tone?: "default" | "surface";
  className?: string;
};

export function Section({ id, children, tone = "default", className = "" }: SectionProps) {
  const bg = tone === "surface" ? "bg-surface border-y border-border" : "";
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${bg} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
