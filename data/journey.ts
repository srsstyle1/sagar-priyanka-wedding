export interface JourneyItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const journey: JourneyItem[] = [
  {
    id: 1,
    title: "Where Forever Began",
    subtitle: "Chapter One",
    description:
      "Every beautiful story begins with a single smile. Ours began with a moment that changed everything.",
    image: "/images/couple.webp",
  },

  {
    id: 2,
    title: "Her Grace",
    subtitle: "Chapter Two",
    description:
      "Priyanka — graceful, kind and beautiful in every moment.",
    image: "/images/bride1.webp",
  },

  {
    id: 3,
    title: "His Promise",
    subtitle: "Chapter Three",
    description:
      "Sagar — ready to begin the greatest journey of his life.",
    image: "/images/groom.webp",
  },

  {
    id: 4,
    title: "Together Forever",
    subtitle: "Chapter Four",
    description:
      "Two hearts. One promise. One beautiful beginning.",
    image: "/images/bride2.webp",
  },
];