import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(request) {
  try {
    const { id, ...data } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required for update" },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: data,
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required for deletion" },
        { status: 400 }
      );
    }

    await prisma.product.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
