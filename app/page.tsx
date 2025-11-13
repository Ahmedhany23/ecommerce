import FlashSales from "@/features/home/components/FlashSales";
import Hero from "@/features/home/components/Hero";

import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20">
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <FlashSales />
      </Suspense>
    </main>
  );
}
