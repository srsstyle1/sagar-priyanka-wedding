interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-24 max-w-3xl text-center">
      <p className="font-heading uppercase tracking-[8px] text-[#D4AF37]">
        {eyebrow}
      </p>

      <h2 className="mt-5 font-script text-6xl text-white md:text-7xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-8 leading-8 text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}