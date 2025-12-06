import { CartItem } from "@/src/features/products/store/useProductsStore";
import { getUserFromDatabase } from "@/src/lib/getUserFromDatabase";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromDatabase();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { amount, cartItems, billingDetails, paymentIntentId } =
      await request.json();

    // Validate required fields
    if (!amount || !cartItems || !billingDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate billing details
    const requiredBillingFields = ["street_address", "apartment", "city", "phone", "email"];
    const missingFields = requiredBillingFields.filter(
      (field) => !billingDetails[field],
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing billing details: ${missingFields.join(", ")}` },
        { status: 400 },
      );
    }

    // 2. Create Order in Database (as pending)
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        items: {
          create: cartItems.map((item: CartItem) => ({
            productId: item.productId || item.id,
            quantity: item.quantity,
            price: item.product.price,
            name: item.product.name, // Add product name for reference
          })),
        },
        subtotal: cartItems.reduce(
          (sum: number, item: CartItem) =>
            sum + item.product.price * item.quantity,
          0,
        ),
        shipping: billingDetails.shipping || 0,
        total: amount / 100, // Convert from cents to dollars
        address: billingDetails.street_address,
        phone: billingDetails.phone,
        email: billingDetails.email,
        apartment: billingDetails.apartment || null,
        companyName: billingDetails.companyName || null,
        city: billingDetails.city,
        country: billingDetails.country || "US", // Default country
        zipCode: billingDetails.zipCode,
        status: "PENDING",
        stripePaymentIntentId: paymentIntentId,
      },
      include: {
        items: true,
      },
    });

    // 3. Clear Cart
    await prisma.cart.deleteMany({ where: { userId: user.id } });

    return NextResponse.json(
      {
        orderId: order.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating payment intent:", error);
    // Handle the error
    return NextResponse.json(
      { error: `Server error ${error}` },
      { status: 500 },
    );
  }
}
