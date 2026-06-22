import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-[32px]",
        "border border-white/10",
        "bg-white/10",
        "backdrop-blur-2xl",
        "shadow-[0_20px_80px_rgba(0,0,0,.35)]",
        "transition-all duration-500",
        "hover:border-[#D4AF37]/30",
        className
      )}
    >
      {children}
    </div>
  );
}