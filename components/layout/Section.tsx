import { ReactNode } from "react";
import Container from "./Container";

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
      className={`
      relative
      py-32
      overflow-hidden
      ${className}
      `}
    >
      <Container>{children}</Container>
    </section>
  );
}