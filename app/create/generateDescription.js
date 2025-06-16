"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateDescription({ productName, productCategory }) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Write a short, attractive product description for a product named "${productName}" in the category "${productCategory}".`;

  const result = await model.generateContent(prompt);
  if (!result.response) {
    throw new Error(
      "No response from Gemini API. Check your API key and model access."
    );
  }
  const description = result.response.text();
  return description;
}

export async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const models = await genAI.listModels();
  console.log(models);
}
