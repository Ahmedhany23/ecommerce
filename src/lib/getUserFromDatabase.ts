"use server";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";

export const getUserFromDatabase = async () => {
  const session = await getServerSession();

  if (!session) {
    console.log("No session found");
    return;
  }

  if (!session?.user.email) {
    console.log("No email found");
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    console.log("No user found");
    return null;
  }

  return user;
};
