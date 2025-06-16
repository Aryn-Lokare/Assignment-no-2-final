"use client";
import { useEffect, useState } from "react";
import { getProducts } from "./create/action";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
