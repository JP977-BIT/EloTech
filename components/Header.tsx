import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

const cta = { label: "Get in touch", href: "/#contact" };

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={cta.href}>{cta.label}</Button>
        </div>

        <MobileNav links={site.nav} cta={cta} />
      </Container>
    </header>
  );
}
