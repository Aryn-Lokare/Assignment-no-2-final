import { generateProductDescription } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { productName, productCategory, productPrice } = await request.json();

    if (!productName) {
      return NextResponse.json(
        { error: "Product name is required" },
        { status: 400 }
      );
    }

    const description = await generateProductDescription(
      productName,
      productCategory,
      productPrice
    );
    return NextResponse.json({ description });
  } catch (error) {
    console.error("Error in generate-description route:", error);
    return NextResponse.json(
      { error: "Failed to generate description" },
      { status: 500 }
    );
  }
}
