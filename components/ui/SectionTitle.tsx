interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-[#D4AF37]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-white/80">
          {subtitle}
        </p>
      )}
    </div>
  );
}