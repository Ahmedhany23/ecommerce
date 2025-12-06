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

    // 2. find item
    const itemIndex = cart.items.findIndex(
      (i) => i.productId.toString() === productId.toString(),
    );

    if (itemIndex === -1)
      return NextResponse.json({ error: "Item not in cart" }, { status: 404 });

    // 3. decrement
    const updatedItems = [...cart.items];
    const item = updatedItems[itemIndex];

    if (item.quantity <= 1) {
      // remove item if quantity becomes 0
      updatedItems.splice(itemIndex, 1);
    } else {
      updatedItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };
    }

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
