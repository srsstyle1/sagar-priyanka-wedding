interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-20 text-center">

      <p className="uppercase tracking-[6px] text-[#D4AF37]">
        {subtitle}
      </p>

      <h2 className="mt-5 text-6xl font-[family-name:var(--font-cormorant)] text-[#D4AF37]">
        {title}
      </h2>

    </div>
  );
}