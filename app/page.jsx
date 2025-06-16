"use client";
import { useEffect, useState } from "react";
import { getProducts } from "./create/action";
import { GoogleGenerativeAI } from "@google/generative-ai";
<<<<<<< HEAD
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
=======
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
<<<<<<< HEAD
      <div className="flex justify-between items-center mx-9 py-9">
        <SignedOut>
          <SignInButton>
            <button className=" text-bold px-4 py-4 rounded-md ">
              Sign In{" "}
            </button>
          </SignInButton>
          <SignUpButton>
            <button className=" text-bold px-4 py-4 rounded-md ">
              Sign Up{" "}
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
=======
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1
      <div className="bg-white min-h-screen grid-rows-4">
        <div className="text-4xl text-black p-10">
          <h1>Product Page</h1>
        </div>
<<<<<<< HEAD
        <div className="p-5 bg-white text-black ">
=======
        <div className="p-5 bg-white text-black">
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
<<<<<<< HEAD
                  className="mb-4 p-4 border rounded-lg shadow-md bg-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="font-bold text-lg mb-2">
                      {product.productName}
                    </div>
                    <div className="text-gray-700">
                      Price: ${product.productPrice}
                    </div>
                    <div className="text-gray-700">
                      Description: {product.productDescription}
                    </div>
                    <div className="text-gray-700">
                      Category: {product.productCategory}
                    </div>
                    <div className="text-gray-700">
                      Stock: {product.productStock}
                    </div>
                    <div className="text-gray-700">
                      Rating: {product.productRating}
                    </div>
                    <div className="text-gray-700">
                      Review: {product.productReview}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      className="w-32 h-32 object-cover rounded"
                    />
=======
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-4">
                    <div className="aspect-square w-full overflow-hidden rounded-lg">
                      <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <h2 className="text-xl font-bold text-gray-900">
                        {product.productName}
                      </h2>
                      <p className="text-lg font-semibold text-blue-600">
                        ${product.productPrice}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.productDescription}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Category: {product.productCategory}</span>
                        <span>Stock: {product.productStock}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">
                          {product.productRating}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 italic line-clamp-2">
                        {product.productReview}
                      </p>
                    </div>
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
