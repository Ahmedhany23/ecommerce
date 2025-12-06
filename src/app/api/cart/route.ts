import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/src/lib/prisma";
import { getUserFromDatabase } from "@/src/lib/getUserFromDatabase";

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
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId } = await req.json();

  if (!productId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const userId = session.user.id;

  try {
    const cart = await prisma.cart.delete({
      where: { userId, items: { some: { productId } } },
    });
    return NextResponse.json({ success: true, cart });
  } catch (error) {
    return NextResponse.json(
      { error: error || "Server error" },
      { status: 500 },
    );
  }
}
