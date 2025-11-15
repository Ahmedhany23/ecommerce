"use client";

import { useMemo } from "react";
import { useCountdown } from "@/hooks/useCountdown";

export const CountdownSalesTimer = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 15);
    return date;
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col-reverse items-start">
        <span className="text-4xl font-bold">{days}</span>
        <span className="text-xs font-medium">Days</span>
      </div>
      <div className="text-accent-danger flex h-1 w-1 items-center text-4xl">
        :
      </div>
      <div className="flex flex-col-reverse items-start">
        <span className="text-4xl font-bold">{hours}</span>
        <span className="text-xs font-medium">Hours</span>
      </div>
      <div className="text-accent-danger flex h-1 w-1 items-center text-4xl">
        :
      </div>
      <div className="flex flex-col-reverse items-start">
        <span className="text-4xl font-bold">{minutes}</span>
        <span className="text-xs font-medium">Minutes</span>
      </div>
      <div className="text-accent-danger flex h-1 w-1 items-center text-4xl">
        :
      </div>
      <div className="flex flex-col-reverse items-start">
        <span className="text-4xl font-bold">{seconds}</span>
        <span className="text-xs font-medium">Seconds</span>
      </div>
    </div>
  );
};
