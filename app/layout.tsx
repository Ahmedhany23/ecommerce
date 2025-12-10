import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Providers from "../providers/providers";
import "./globals.css";
import MainLayout from "../components/layout/MainLayout";
import ScrollContext from "../context/ScrollContext";
import { getServerSession } from "next-auth";

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
    template: "%s | Excluvio",
  },
  description: "Excluvio is an Ecommerce App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <Providers>
          <MainLayout user={session?.user}>
            <ScrollContext>{children}</ScrollContext>
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
