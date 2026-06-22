interface Props {
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Spacer({
  size = "lg",
}: Props) {

  const map = {
    sm: "h-12",
    md: "h-20",
    lg: "h-32",
    xl: "h-48",
  };

  return <div className={map[size]} />;
}