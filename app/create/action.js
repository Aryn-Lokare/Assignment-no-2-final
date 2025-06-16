"use server";

<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
=======
import prisma from "@/lib/prisma";
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1

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
