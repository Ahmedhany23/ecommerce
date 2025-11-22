import MainLayout from "@/src/components/layout/MainLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import ScrollContext from "@/src/context/ScrollContext";
import { ConfigProvider } from "antd";

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

const antdStyle = {
  contentBg: "#f5f5f5", // background
  borderRadiusLG: 8, // border radius
  padding: 20, // padding
  fontSize: 16, // text size
  fontFamily: "Poppins",
  colorSuccess: "#10b981",
  colorError: "#ef4444",
  colorWarning: "#f59e0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <ConfigProvider
          theme={{
            components: {
              Message: {
                ...antdStyle,
              },
            },
          }}
        >
          <AntdRegistry>
            <MainLayout>
              <ScrollContext>{children}</ScrollContext>
            </MainLayout>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
