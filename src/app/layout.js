import { Roboto } from "next/font/google";
import "./globals.css";
import NavBarLogin from "../components/utilities/NavBarLogin";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
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
