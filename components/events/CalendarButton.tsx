import { CalendarPlus } from "lucide-react";

interface Props {
  date: string;
}

export default function CalendarButton({ date }: Props) {
  return (
    <button
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-white/20
      px-7
      py-3
      text-sm
      uppercase
      tracking-[3px]
      text-white
      transition
      hover:border-[#D4AF37]
      "
    >
      <CalendarPlus size={16} />

      Add Calendar
    </button>
  );
}