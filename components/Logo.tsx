import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import logoCompact from "@/public/logo-compact.png";
import logoFull from "@/public/logo-full.png";

type LogoProps = {
  /**
   * `compact` — icon + ELOTECH wordmark, sized for the header.
   * `full` — the complete lockup including company name and registration number.
   */
  variant?: "compact" | "full";
  className?: string;
};

export function Logo({ variant = "compact", className = "" }: LogoProps) {
  const src = variant === "full" ? logoFull : logoCompact;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={`${site.name} home`}>
      <Image
        src={src}
        alt={variant === "full" ? site.legalName : site.name}
        priority={variant === "compact"}
        sizes={variant === "full" ? "208px" : "140px"}
        className={variant === "full" ? "h-auto w-full" : "h-9 w-auto sm:h-10"}
      />
    </Link>
  );
}
