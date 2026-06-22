import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RoyalButton({ children }: Props) {
  return (
    <button
      className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-[#D4AF37]
      bg-[#D4AF37]/10
      px-8
      py-4
      uppercase
      tracking-[4px]
      text-white
      backdrop-blur-xl
      transition-all
      duration-500
      hover:bg-[#D4AF37]
      hover:text-[#2B0D17]
      hover:shadow-[0_0_40px_rgba(212,175,55,.5)]
      "
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}