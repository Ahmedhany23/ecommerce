import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const categoriesParam = searchParams.get("categories");
    const minParam = searchParams.get("min");
    const maxParam = searchParams.get("max");
    const searchParam = searchParams.get("search");

    // Convert numbers
    const min = minParam ? Number(minParam) : undefined;
    const max = maxParam ? Number(maxParam) : undefined;

    // Convert categories to array
    const categories = categoriesParam ? categoriesParam.split(",") : undefined;

    // Build where filter
    const where: Record<string, any> = {};

    if (categories && categories.length > 0) {
      where.category = { in: categories };
    }

    if (min || max) {
      where.price = {};
      if (min) where.price.gte = min;
      if (max) where.price.lte = max;
    }

    if (searchParam) {
      where.name = {
        contains: searchParam,
        mode: "insensitive",
      };
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("GET /api/products error", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
