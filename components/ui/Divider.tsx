import { cn } from "@/lib/utils";

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(`border-surface-alt w-full border-[0.5px]`, className)}
    />
  );
};
