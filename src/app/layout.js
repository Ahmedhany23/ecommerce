import { Rajdhani } from "next/font/google";
import "./globals.css";
import NavBarLogin from "../components/utilities/NavBarLogin";

const roboto = Rajdhani({
  weight: ['400'],

  subsets: ['latin'],
 
})

export const metadata = {
  title: "Ecommerce",
  description: "Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <NavBarLogin/>
      {children}
      </body>
    </html>
  );
}
