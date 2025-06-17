"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateDescription({ productName, productCategory }) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate a single, short, and attractive product description for a product named "${productName}" in the category "${productCategory}". Provide only the description text.`;

    const result = await model.generateContent(prompt);
    console.log(result);
    if (!result.response) {
      throw new Error(
        "No response from Gemini API. Check your API key and model access."
      );
    }
    const description = result.response.text();
    return description;
  } catch (error) {
    console.error("Error generating description from Gemini API:", error);
    return "A high-quality product that meets your needs."; // Default description
  }
}

export async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const models = await genAI.listModels();
  console.log(models);
}
