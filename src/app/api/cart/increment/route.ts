import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId } = await req.json();
  if (!productId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const userId = session.user.id;

  try {
    // 1. get cart
    const cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart)
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });

    // 2. find the item in cart
    const itemIndex = cart.items.findIndex(
      (i) => i.productId.toString() === productId.toString(),
    );

    if (itemIndex === -1) {
      // item not exists → add it with quantity 1
      const updatedItems = [...cart.items, { productId, quantity: 1 }];

      await prisma.cart.update({
        where: { userId },
        data: { items: updatedItems },
      });

      return NextResponse.json({ success: true, created: true });
    }

    // 3. increment quantity
    const updatedItems = [...cart.items];
    const item = updatedItems[itemIndex];

    updatedItems[itemIndex] = {
      ...item,
      quantity: item.quantity + 1,
    };

    // 4. update cart
    await prisma.cart.update({
      where: { userId },
      data: { items: updatedItems },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error || "Server error" },
      { status: 500 },
    );
  }
}
