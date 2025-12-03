"use client";

import { Button } from "antd";
import Link from "next/link";

export const metadata = {
  title: "Error",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="section-container">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="font-poppins text-4xl font-medium text-black md:text-6xl lg:text-9xl">
          Something went wrong.
        </h1>

        <p className="text-xs font-normal text-black sm:text-base">
          {error.message}
        </p>

        <Link href="/">
          <Button onClick={() => reset()} type="primary" size="large">
            Try again
          </Button>
        </Link>

        <Link href="/">
          <Button size="large" variant="outlined" className="bg-white!">
            Back to home page
          </Button>
        </Link>
      </div>
    </section>
  );
}
