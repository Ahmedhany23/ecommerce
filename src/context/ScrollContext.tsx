"use client";

import Lenis from "lenis";

import React, { useEffect } from "react";

const SoomthScrollerContext = React.createContext<Lenis | null>(null);

export const useSmoothScroller = () => React.useContext(SoomthScrollerContext);

const ScrollContext = ({ children }: { children: React.ReactNode }) => {
  const [lenisRef, setLenis] = React.useState<Lenis | null>(null);
  const [rafState, setRaf] = React.useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    let rf;

    function raf(time: DOMHighResTimeStamp) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);

    setLenis(scroller);
    setRaf(rf);

    return () => {
      if (lenisRef) {
        lenisRef.destroy();
        if (rafState) {
          cancelAnimationFrame(rafState);
        }
      }
    };
  }, []);

  return (
    <SoomthScrollerContext.Provider value={lenisRef}>
      {children}
    </SoomthScrollerContext.Provider>
  );
};

export default ScrollContext;
