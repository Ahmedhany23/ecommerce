"use client";
import { useState, useRef, useEffect } from "react";
import { Banner } from "./Banner";
import Link from "next/link";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { SearchBar } from "../ui/SearchBar";

const navlinks = [
  { link: "Home", path: "/" },
  { link: "Contact", path: "/contact" },
  { link: "About", path: "/about" },
  { link: "Sign Up", path: "/signup" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: gsap.core.Tween | gsap.core.Tween[] | null = null;

    if (isOpen && menuRef.current) {
      // Animate container
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      // Animate links with stagger
      ctx = gsap.fromTo(
        menuRef.current.querySelectorAll(".mobile-link"),
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.1, // each link delayed by 0.1s
        }
      );
    } else if (!isOpen && menuRef.current) {
      // Animate out
      ctx = gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }

    return () => {
      if (ctx) {
        if (Array.isArray(ctx)) ctx.forEach((t) => t.kill());
        else ctx.kill();
      }
    };
  }, [isOpen]);

  return (
    <header className="border-b-[0.5px] border-b-[#000000] border-opacity-30 pb-4">
      <Banner />
      <div className="container mx-auto">
        <div className="flex justify-between pt-10 items-center px-3 md:px-0">
          <h1 className="font-inter font-bold text-2xl">
            <Link href="/">Exclusive</Link>
          </h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-row justify-center gap-12">
            {navlinks.map((navlink, i) => (
              <Link
                key={i}
                href={navlink.path}
                className={`text-black text-md h-fit font-poppins font-normal hover:border-b hover:border-background-2 transition duration-200 ${
                  pathname === navlink.path
                    ? "border-b border-black border-opacity-30"
                    : ""
                }`}
              >
                {navlink.link}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-2 items-center">
            <SearchBar />
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
              aria-label="Toggle Menu"
            >
              {/* your hamburger animation code stays the same */}
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transition-all duration-200">
                <div className="flex flex-col gap-1 w-5 h-5 transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={`bg-black h-0.5 w-7 transition-all duration-300 origin-left ${
                      isOpen ? "translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-black h-0.5 w-7 rounded transition-all duration-300 ${
                      isOpen ? "translate-x-10 delay-75" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-black h-0.5 w-7 transition-all duration-300 origin-left ${
                      isOpen ? "translate-x-10 delay-150" : ""
                    }`}
                  ></div>

                  <div
                    className={`absolute flex items-center justify-between transition-all duration-500 top-1/2 ${
                      isOpen ? "translate-x-0 w-12" : "-translate-x-10 w-0"
                    }`}
                  >
                    <div
                      className={`absolute bg-black h-0.5 w-5 transition-all duration-500 delay-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute bg-black h-0.5 w-5 transition-all duration-500 delay-300 ${
                        isOpen ? "-rotate-45" : "rotate-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          ref={menuRef}
          className={`flex flex-col gap-6 mt-6 px-3 md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navlinks.map((navlink, i) => (
            <Link
              key={i}
              href={navlink.path}
              className={`text-black mobile-link text-lg font-poppins font-medium hover:text-accent transition duration-200 ${
                pathname === navlink.path ? "text-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {navlink.link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
