import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { type Session } from "next-auth";

const MainLayout = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: Session["user"] ; 
}) => {
  return (
    <>
      <Header user={user}/>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
