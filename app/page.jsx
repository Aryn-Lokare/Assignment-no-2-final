"use client";
import { useEffect, useState } from "react";
import { getProducts } from "./create/action";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
      <div className="bg-white min-h-screen grid-rows-4">
        <div className="text-4xl text-black p-10">
          <h1>Product Page</h1>
        </div>
        <div className="p-5 bg-white text-black">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
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
