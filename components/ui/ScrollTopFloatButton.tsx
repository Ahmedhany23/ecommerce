"use client";
import { useEffect, useState } from "react";
import { Progress } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useSmoothScroller } from "@/context/ScrollContext";

export default function ScrollTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const lenis = useSmoothScroller();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop =
            document.documentElement.scrollTop || window.scrollY;
          const docHeight = document.documentElement.scrollHeight;
          const winHeight = window.innerHeight;
          const totalScrollable = Math.max(docHeight - winHeight, 1);
          const pct = Math.min(
            Math.max((scrollTop / totalScrollable) * 100, 0),
            100,
          );

          setProgress(pct);
          setVisible(scrollTop > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 flex cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100"
      style={{ width: 56, height: 56 }}
    >
      <Progress
        type="circle"
        percent={progress}
        size={56}
        strokeWidth={6}
        strokeColor="#111827"
        trailColor="#e5e7eb"
        style={{ pointerEvents: "none" }}
        format={() => <ArrowUpOutlined className="text-lg text-black" />}
      />
    </button>
  );
}
