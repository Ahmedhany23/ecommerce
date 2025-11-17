"use client";

import { useMemo } from "react";
import { useCountdown } from "@/hooks/useCountdown";

export const CountdownAdvertisementTimer = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex gap-2 sm:gap-6">
      <div className="bg-white flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full">
        <span className="font-semibold">{days}</span>
        <span className="text-[11px]">Days</span>
      </div>
      <div className="bg-white flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full">
        <span className="font-semibold">{hours}</span>
        <span className="text-[11px]">Hours</span>
      </div>

      <div className="bg-white flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full">
        <span className="font-semibold">{minutes}</span>
        <span className="text-[11px]">Minutes</span>
      </div>

      <div className="bg-white flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full">
        <span className="font-semibold">{seconds}</span>
        <span className="text-[11px]">Seconds</span>
      </div>
    </div>
  );
};
