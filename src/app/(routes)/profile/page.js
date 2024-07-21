"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Loading from "@/app/Loading";
import { useRouter } from "next/navigation";
import { deleteUser } from "firebase/auth";
import { useEffect } from "react";

export default function Profilepage() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }

    if (user && !user.emailVerified) {
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

  if (loading) return <Loading />;
  if (!user) {
    router.push("/Auth/login");
    return null; // Avoid rendering anything until redirection
  }

  return (
    <main className="py-60 flex justify-center items-center flex-col gap-20">
      <h1 className="text-laccent text-4xl font-semibold">
        Hi, {user.displayName}
      </h1>
      <div className="text-center">
        <p className="text-ltext text-2xl font-medium">Email: {user.email}</p>
        <p className="text-ltext text-2xl font-medium">
          Created At: {user.metadata.creationTime}
        </p>
      </div>
      <button
        onClick={handleDelete}
        className="text-white py-2 px-3 bg-red-500 hover:bg-red-700"
      >
        Delete account
      </button>
    </main>
  );
}
