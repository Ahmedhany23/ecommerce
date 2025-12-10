import { getUserFromDatabase } from "@/lib/getUserFromDatabase";
import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";



export async function POST(req: Request) {
  const user = await getUserFromDatabase();

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { productId } = await req.json();

  if (!productId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const userId = user.id;

  try {
    // 1. Get cart with items
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: true,
      },
    });

    if (!cart)
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });

    // 2. Find the specific cart item
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: productId,
      },
    });

    if (!cartItem)
      return NextResponse.json({ error: "Item not in cart" }, { status: 404 });

    // 3. Decrement quantity or remove item
    if (cartItem.quantity <= 1) {
      // Remove item if quantity is 1 or less
      await prisma.cartItem.delete({
        where: { id: cartItem.id },
      });
    } else {
      // Decrement quantity
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity - 1 },
      });
    }

    // 4. Fetch updated cart
    const updatedCart = await prisma.cart.findUnique({
      where: { userId },
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
    console.error("Error decrementing cart item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
