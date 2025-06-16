"use server";

import prisma from "@/lib/prisma";

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

export async function getUser() {
  const users = await prisma.product.findMany();
  return users;
}
