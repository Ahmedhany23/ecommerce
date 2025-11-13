import { Star } from "lucide-react";

interface GenerateStarsProps {
  count?: number; // how many stars to render
  size?: number;  // icon size
}

export const Stars = ({ count = 5, size = 20 }: GenerateStarsProps) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} color="#FFAD33" fill="#FFAD33" />
      ))}
    </div>
  );
};
