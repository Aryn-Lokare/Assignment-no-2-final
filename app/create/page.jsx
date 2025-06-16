"use client";

import { useState } from "react";
import { Product } from "./action";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateDescription } from "./generateDescription";

export default function Page() {
  const [form, setForm] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
    productCategory: "",
    productStock: "",
    productRating: "",
    productReview: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleGenerateDescription() {
    setLoading(true);
    const description = await generateDescription({
      productName: form.productName,
      productCategory: form.productCategory,
    });
    setForm((prev) => ({ ...prev, productDescription: description }));
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await Product(form);
    setSuccess(true);
    setForm({
      productName: "",
      productPrice: "",
      productDescription: "",
      productImage: "",
      productCategory: "",
      productStock: "",
      productRating: "",
      productReview: "",
    });
    setTimeout(() => setSuccess(false), 2000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black p-20">
      <div className="bg-white w-[800px] h-[650px] flex flex-col justify-center items-center rounded shadow p-10 font-mono">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4 text-center">Add Product</h2>
          <label>Product Name</label>
          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className="border-2 rounded w-full mb-2 p-1"
            required
          />

          <label>Product Price</label>
          <input
            name="productPrice"
            value={form.productPrice}
            onChange={handleChange}
            className="border-2 rounded w-full mb-2 p-1"
            required
          />

          <label>Product Description</label>
          <div className="flex gap-2 mb-2">
            <input
              name="productDescription"
              value={form.productDescription}
              onChange={handleChange}
              className="border-2 rounded w-full p-1"
              required
            />
            <button
              type="button"
              onClick={handleGenerateDescription}
              className="bg-green-500 text-white p-2 rounded"
              disabled={loading || !form.productName || !form.productCategory}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>

          <label>Product Image</label>
          <input
            name="productImage"
            value={form.productImage}
            onChange={handleChange}
            className="border-2 rounded w-full mb-2 p-1"
          />

          <label>Product Category</label>
          <input
            name="productCategory"
            value={form.productCategory}
            onChange={handleChange}
            className="border-2 rounded w-full mb-2 p-1"
          />

          <label>Product Stock</label>
          <input
            name="productStock"
            value={form.productStock}
            onChange={handleChange}
            className="border-2 rounded w-full mb-2 p-1"
          />

          <label>Product Rating</label>
          <input
            name="productRating"
            value={form.productRating}
            onChange={handleChange}
            className="border-2 rounded w-full mb-2 p-1"
          />

          <label>Product Review</label>
          <input
            name="productReview"
            value={form.productReview}
            onChange={handleChange}
            className="border-2 rounded w-full mb-4 p-1"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Add Product
          </button>
          {success && (
            <div className="text-green-600 text-center mt-2">
              Product added successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

