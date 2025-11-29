"use client";
import { useState, useRef, useEffect } from "react";
import { Banner } from "./Banner";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import { SearchBar } from "../ui/SearchBar";
import { Col, Menu, Row } from "antd";

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

  return (
    <header className="border-opacity-30 border-b-[0.5px] border-b-[#000000] pb-4">
      <Banner />
      <div className="mx-auto max-w-none lg:container">
        <div className="flex items-center justify-between px-3 pt-10 md:px-0">
          <Row
            gutter={[16, 16]}
            justify="space-between"
            align="middle"
            className="w-full gap-4 md:gap-0"
          >
            {/* Logo */}
            <Col xs={8} md={12} lg={2}>
              <h1 className="font-poppins text-3xl font-bold">
                <Link href="/" className="text-black!">
                  Exclusive
                </Link>
              </h1>
            </Col>

            {/* Hamburger (mobile only) */}
            <Col xs={8} lg={0} className="flex justify-end text-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer p-2 text-xl"
                aria-label="Toggle Menu"
              >
                {isOpen ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </Col>

            {/* SearchBar on mobile/tablet: full width and on top */}
            <Col xs={24} lg={0}>
              <SearchBar />
            </Col>

            {/* Desktop Nav */}
            <Col xs={0} lg={12} className="flex justify-center">
              <nav className="flex flex-row justify-center gap-12">
                {navlinks.map((navlink, i) => (
                  <Link
                    key={i}
                    href={navlink.path}
                    className={`font-poppins! h-fit text-lg font-normal text-black! transition duration-200 hover:border-b ${
                      pathname === navlink.path
                        ? "border-opacity-30 border-b border-black"
                        : ""
                    }`}
                  >
                    {navlink.link}
                  </Link>
                ))}
              </nav>
            </Col>

            {/* SearchBar on desktop */}
            <Col xs={0} lg={4} className="flex justify-end">
              <SearchBar />
            </Col>
            <Col xs={24} lg={0}>
              {/* Mobile nav */}
              <div
                ref={menuRef}
                className={`mt-6 px-3 lg:hidden ${isOpen ? "block" : "hidden"}`}
              >
                <Menu
                  mode="inline"
                  selectedKeys={[pathname]}
                  onClick={({ key }) => {
                    setIsOpen(false);
                  }}
                  items={navlinks.map((item) => ({
                    key: item.path,
                    label: (
                      <Link
                        href={item.path}
                        className={`font-poppins mobile-link text-lg ${
                          pathname === item.path ? "text-accent" : "text-black"
                        }`}
                      >
                        {item.link}
                      </Link>
                    ),
                  }))}
                  style={{
                    border: "none",
                    background: "transparent",
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
