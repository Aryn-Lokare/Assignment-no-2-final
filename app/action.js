"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function Product(data) {
  // Accepts a data object and saves it as a new product
  return await prisma.product.create({
    data: {
      productName: data.productName,
      productPrice: data.productPrice,
      productDescription: data.productDescription,
      productImage: data.productImage,
      productCategory: data.productCategory,
      productStock: data.productStock,
      productRating: data.productRating,
      productReview: data.productReview,
    },
  });
}

export async function getProducts() {
  return await prisma.product.findMany();
}
