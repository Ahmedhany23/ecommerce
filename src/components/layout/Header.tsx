"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { Banner } from "./Banner";
import {
  CloseOutlined,
  MenuOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  ProfileOutlined,
  MailOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Col,
  Menu,
  Row,
  Dropdown,
  Avatar,
  Skeleton,
  Button,
  Divider,
  MenuProps,
} from "antd";
import { signOut, useSession } from "next-auth/react";
import { SearchBar } from "../ui/SearchBar";
import { cn } from "@/src/lib/utils";
import {
  useCart,
  useWishlist,
} from "@/src/features/products/store/useProductsStore";
import { type Session } from "next-auth";

export const Header = ({ user }: { user?: Session["user"] }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navlinks = useMemo(() => {
    let links = [
      { link: "Home", path: "/" },
      { link: "Contact", path: "/contact" },
      { link: "About", path: "/about" },
    ];

    if (!user) {
      links.push({ link: "Sign Up", path: "/signup" });
    }

    return links;
  }, [user]);

  const userMenuItems: MenuProps["items"] = [
    {
      type: "group",
      key: "user-info",
      label: (
        <div className="px-3 py-2">
          <div className="flex items-center gap-3">
            <Avatar size={48} icon={<UserOutlined />} className="bg-blue-500" />
            <div className="min-w-0 flex-1">
              <div className="truncate font-semibold text-gray-900">
                {user?.name}
              </div>
              <div className="flex items-center gap-1 truncate text-xs text-gray-600">
                <MailOutlined className="text-gray-400" />
                {user?.email}
              </div>
            </div>
          </div>
        </div>
      ),
    },

    { type: "divider" },

    {
      key: "profile",
      label: <Link href="/profile">My Profile</Link>,
      icon: <ProfileOutlined />,
    },

    { type: "divider" },

    {
      key: "logout",
      label: (
        <button
          onClick={() => signOut()}
          className="w-full cursor-pointer text-left"
        >
          Logout
        </button>
      ),
      icon: <LogoutOutlined className="text-red-500" />,
      danger: true,
    },
  ];

  const isWishlistPage = pathname === "/wishlist";
  const isCartPage = pathname === "/cart";

  const cart = useCart();
  const whistlist = useWishlist();

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
            <Col xs={8} md={12} lg={6}>
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
            <Col xs={0} lg={8} className="flex justify-center">
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

            {/* User Avatar & Dropdown (Desktop & Mobile) */}
            <Col
              xs={24}
              lg={4}
              className="flex! items-center! justify-start gap-5"
            >
              <div className="relative">
                <Link href="/wishlist">
                  <Button
                    className={cn(
                      "hover:bg-accent-danger! h-10! w-10! rounded-full! border-none! text-lg! text-black! hover:text-white!",
                      isWishlistPage
                        ? "bg-accent-danger! text-white!"
                        : "bg-white!",
                    )}
                  >
                    <HeartOutlined className="text-2xl" />
                    <div className="bg-accent-danger absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full text-sm text-white">
                      {whistlist.length}
                    </div>
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <Link href="/cart">
                  <Button
                    className={cn(
                      "hover:bg-accent-danger! h-10! w-10! rounded-full! border-none! text-lg! text-black! hover:text-white!",
                      isCartPage
                        ? "bg-accent-danger! text-white!"
                        : "bg-white!",
                    )}
                  >
                    <ShoppingCartOutlined className="text-2xl" />
                    <div className="bg-accent-danger absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full text-sm text-white">
                      {cart.length}
                    </div>
                  </Button>
                </Link>
              </div>
              { user ? (
                <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
                  <Button
                    className={cn(
                      "hover:bg-accent-danger! h-10! w-10! rounded-full! border-none! bg-white! text-lg! text-black! hover:text-white!",
                    )}
                  >
                    <UserOutlined className="text-2xl" />
                  </Button>
                </Dropdown>
              ) : null}
            </Col>

            {/* Mobile nav */}
            <Col xs={24} lg={0}>
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
