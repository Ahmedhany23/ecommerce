import { NextResponse } from "next/server";

import { getUserFromDatabase } from "@/lib/getUserFromDatabase";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const user = await getUserFromDatabase();



  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { productId } = await req.json();

  if (!productId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  try {
    // 1. Find or create cart
    const cart = await prisma.cart.upsert({
      where: { userId: user.id },
      update: {},
      create: { userId: user.id },
    });

    // 2. First try to find existing item
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: productId,
      },
    });

    if (existingItem) {
      // Update quantity if exists
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + 1,
        },
      });
    } else {
      // Create if doesn't exist
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: productId,
          quantity: 1,
        },
      });
    }

    // 3. Fetch updated cart
    const updatedCart = await prisma.cart.findUnique({
      where: { userId: user.id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, cart: updatedCart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
