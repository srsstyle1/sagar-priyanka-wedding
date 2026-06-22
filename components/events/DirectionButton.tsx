import { Navigation } from "lucide-react";

interface Props {
  url: string;
}

export default function DirectionButton({ url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-[#D4AF37]
      px-7
      py-3
      text-sm
      uppercase
      tracking-[3px]
      text-[#D4AF37]
      transition-all
      duration-300
      hover:bg-[#D4AF37]
      hover:text-[#14050B]
      "
    >
      <Navigation
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />

      Directions
    </a>
  );
}