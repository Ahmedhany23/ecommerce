"use client";

import { useEffect, useEffectEvent, useState } from "react";

export function useCountdown(targetDate: string | number | Date) {
  const calc = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isFinished: true,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isFinished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calc);

  const eventCalc = useEffectEvent(calc);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(eventCalc);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
