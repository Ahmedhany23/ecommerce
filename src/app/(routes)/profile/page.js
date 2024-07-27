"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Loading from "@/app/Loading";
import { useRouter } from "next/navigation";
import { deleteUser, signOut } from "firebase/auth";
import { useEffect } from "react";

export default function Profilepage() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleDelete = () => {
    if (user) {
      deleteUser(user)
        .then(() => {
          console.log("User deleted.");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const handleSignout = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {});
    }
  };
  if (loading) return <Loading />;
  if (!user) {
    router.push("/Auth/login");
    return null;
  }

  if (user) {
    if (!user.emailVerified) {
      return (
        <div className="flex items-center justify-center  h-screen">
          <div className="flex flex-col items-center gap-5">
            <p className="text-ltext text-4xl"> U need to verify your email First </p>
            <button
              onClick={handleSignout}
              className="rounded-md bg-lsecondary px-5 py-2.5 text-sm font-medium text-white transition  hover:bg-laccent mx-3"
            >
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <main className="py-60 flex justify-center items-center flex-col gap-20">
          <h1 className="text-laccent text-4xl font-semibold">
            Hi, {user.displayName}
          </h1>
          <div className="text-center">
            <p className="text-ltext text-2xl font-medium">
              Email: {user.email}
            </p>
            <p className="text-ltext text-2xl font-medium">
              Created At: {user.metadata.creationTime}
            </p>
          </div>
          <div>
            <button
              onClick={handleSignout}
              className="rounded-md bg-lsecondary px-5 py-2.5 text-sm font-medium text-white transition  hover:bg-laccent mx-3"
            >
              Logout
            </button>
            <button
              onClick={handleDelete}
              className="text-white py-2 px-3 bg-red-500 hover:bg-red-700"
            >
              Delete account
            </button>
          </div>
        </main>
      );
    }
  }
}
