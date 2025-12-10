import { getUserFromDatabase } from "@/lib/getUserFromDatabase";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const user = await getUserFromDatabase();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const cart = await prisma.cart.findUnique({
    where: { userId: user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, cart });
}

export async function POST(req: Request) {
  const user = await getUserFromDatabase();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { productId } = await req.json();

  if (!productId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const cart = await prisma.cart
    .update({
      where: { userId: user.id },
      data: {
        items: {
          create: { productId, quantity: 1 },
        },
      },
    })
    .catch(async () => {
      // If user has no cart → create new one
      return await prisma.cart.create({
        data: {
          userId: user.id,
          items: {
            create: { productId, quantity: 1 },
          },
        },
      });
    });

  return NextResponse.json({ success: true, cart });
}

export async function DELETE(req: Request) {
  const user = await getUserFromDatabase();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { productId } = await req.json();

  if (!productId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  try {
    // Find the cart item directly
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cart: {
          userId: user.id,
        },
        productId: productId,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 },
      );
    }

    // Delete the cart item
    await prisma.cartItem.delete({
      where: { id: cartItem.id },
    });

    // Return updated cart
    const updatedCart = await prisma.cart.findFirst({
      where: { userId: user.id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Item removed from cart",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
