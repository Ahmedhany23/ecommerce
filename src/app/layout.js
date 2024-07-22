import { Rajdhani } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/utilities/Navbar/NavBarComponent";
import Footer from "@/components/utilities/Footer";
import StoreProvider from "./redux/components/StoreProvider";
const roboto = Rajdhani({
  weight: ["400"],

  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce",
  description: "Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-lbackground`}>
        <StoreProvider>
          <NavBarComponent />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
