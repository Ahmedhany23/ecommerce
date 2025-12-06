import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { prisma } from "@/src/lib/prisma";
import { Product } from "@/generated/prisma/client";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { items } = await req.json();

    if (!items) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!items.length) {
      return NextResponse.json({ message: "Empty cart" }, { status: 200 });
    }

    await prisma.cart.create({
      data: {
        userId: user.id,
        items: items.map((item: Product) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error merging guest cart:", error);
    return NextResponse.json({ error: "Error merging cart" }, { status: 500 });
  }
}
