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
        <div className="p-5 bg-white text-black ">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li key={product.id} className="mb-4 p-4 border-3 rounded">
                  <div className="font-bold">{product.productName}</div>
                  <div>Price: {product.productPrice}</div>
                  <div>Description: {product.productDescription}</div>
                  <div>Category: {product.productCategory}</div>
                  <div>Stock: {product.productStock}</div>
                  <div>Rating: {product.productRating}</div>
                  <div>Review: {product.productReview}</div>
                  <div>
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      className="w-32 h-32 object-cover mt-2"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
