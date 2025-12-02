import { StarFilled as Star } from "@ant-design/icons";

interface GenerateStarsProps {
  count?: number; // how many stars to render
  size?: number; // icon size
}

export const Stars = ({ count = 5, size = 20 }: GenerateStarsProps) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} color="#FFAD33" />
      ))}
    </div>
  );
};
