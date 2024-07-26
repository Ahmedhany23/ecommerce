"use client";

import NavBarAdmin from "./NavBarAdmin";
import NavBarLogin from "./NavBarLogin";
import NavBarUser from "./NavBarUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Loading from "@/app/Loading";
export default function NavBarComponent() {
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    if (user.email === process.env.admin_email) {
      return <NavBarAdmin username={"admin"} isLoading={loading} />;
    }
    return (
      <NavBarUser
        isLoading={loading}
      />
    );
  } else {
    return <NavBarLogin />;
  }
}
