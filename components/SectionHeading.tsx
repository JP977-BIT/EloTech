type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  lede,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {heading}
      </h2>
      {lede ? <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p> : null}
    </div>
  );
}
