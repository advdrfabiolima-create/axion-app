interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl space-y-5 ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm text-[#00C853] uppercase tracking-widest font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-[#7A7A8A]">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/70 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
