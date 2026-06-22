interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}