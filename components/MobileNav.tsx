"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icons";
import { buttonClasses } from "./Button";
import type { NavLink } from "@/content/site";

type MobileNavProps = {
  links: readonly NavLink[];
  cta: NavLink;
};

export function MobileNav({ links, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = "mobile-nav-panel";

  return (
    <div
      className="md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
      >
        <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-border bg-white shadow-lg"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className={buttonClasses("primary", "mt-3 w-full")}
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
