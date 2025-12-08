import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-poppins relative clear-both bg-black text-white">
      <section className="section-container px-2">
        <Row gutter={[16, 40]} justify="space-between">
          {/* Subscription Section */}
          <Col xs={24} lg={4}>
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-2xl font-bold">Exclusive</h3>
              <p className="text-xl font-medium">Subscribe</p>
              <p className="text-[1rem] font-normal">
                Get 10% off your first order
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background-2 border-text-1 focus:ring-secondary-2 w-full rounded border-[1.5px] py-3 pl-4 focus:ring-2 focus:outline-none"
                />
                <button className="absolute top-0 right-0 h-full rounded-r-lg pr-4 pl-10 transition duration-300">
                  <Image
                    width={20}
                    height={20}
                    src="/icons/send.png"
                    alt="send"
                  />
                </button>
              </div>
            </div>
          </Col>

          {/* Support Section */}
          <Col xs={24} lg={4}>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium">Support</h3>

              <div className="flex flex-col gap-4">
                <p className="text-[1rem] font-normal">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
                <p className="text-[1rem] font-normal">exclusive@gmail.com</p>
                <p className="text-[1rem] font-normal">+88015-88888-9999</p>
              </div>
            </div>
          </Col>

          {/* Account Section */}
          <Col xs={24} lg={4}>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium">Account</h3>

              <ul className="flex flex-col gap-4">
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    My Account
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Login / Register
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Cart
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Wishlist
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col xs={24} lg={4}>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium">Quick Link</h3>

              <ul className="flex flex-col gap-4">
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Terms Of Use
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    FAQ
                  </Link>
                </li>
                <li className="text-[1rem] font-normal">
                  <Link href="#" className="text-white! hover:underline!">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Download App Section */}
          <Col xs={24} lg={4}>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium">Download App</h3>

              <div>
                <p className="mb-1 text-[0.75rem] font-medium opacity-70">
                  Save $3 with App New User Only
                </p>

                <div className="mb-2 flex gap-2">
                  <Image
                    width={100}
                    height={100}
                    src="/icons/qrcode.png"
                    alt="Qr Code"
                  />

                  <div className="space-y-3">
                    <Image
                      width={100}
                      height={100}
                      src="/images/googleplay.png"
                      alt="Google Play"
                      className="cursor-pointer hover:opacity-75"
                    />
                    <Image
                      width={100}
                      height={100}
                      src="/images/appstore.png"
                      alt="App Store"
                      className="cursor-pointer hover:opacity-75"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link href="#">
                  <FacebookOutlined className="hover:text-accent-danger! text-xl text-white! transition duration-200" />
                </Link>
                <Link href="#">
                  <TwitterOutlined className="hover:text-accent-danger! text-xl text-white! transition duration-200" />
                </Link>
                <Link href="#">
                  <InstagramOutlined className="hover:text-accent-danger! text-xl text-white! transition duration-200" />
                </Link>
                <Link href="#">
                  <LinkedinOutlined className="hover:text-accent-danger! text-xl text-white! transition duration-200" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <div className="absolute bottom-2 left-0 w-full border-t pt-3 text-center">
        <p className="text-sm md:text-base">
          © Copyright{" "}
          <Link
            href="https://ahmedhanyportfolio.netlify.app/"
            className="underline"
          >
            Ahmed Hany
          </Link>{" "}
          {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </footer>
  );
};
