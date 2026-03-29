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
    <div className={`max-w-2xl space-y-4 ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs text-[#00C853] uppercase tracking-widest font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-[#8A8A93]">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-[#8A8A93] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
