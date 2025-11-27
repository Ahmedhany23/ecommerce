import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Providers from "../providers/providers";
import "./globals.css";

//** fonts */

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Welcome",
    template: "%s | E-commerce App",
  },
  description: "E-commerce App with Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
