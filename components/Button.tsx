import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-border bg-white text-foreground hover:border-subtle hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
};

export function buttonClasses(variant: ButtonVariant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/** Renders a styled link. Uses `next/link` for internal routes and a plain anchor for mailto/tel/external. */
export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const classes = buttonClasses(variant, className);
  if (isExternal(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
