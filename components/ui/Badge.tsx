import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <div className="inline-block rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-2 text-[#D4AF37]">
      {children}
    </div>
  );
}