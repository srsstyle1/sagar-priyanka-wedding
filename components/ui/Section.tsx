import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}