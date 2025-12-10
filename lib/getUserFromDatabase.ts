"use server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export const getUserFromDatabase = async () => {
  const session = await getServerSession();
  const prisma = new PrismaClient();

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
