import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generateProductDescription(
  productName,
  productCategory = "",
  productPrice = ""
) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are a professional product description writer. Your goal is to write a compelling, unique, and highly specific product description for the following item. Use *all* provided details to tailor the description.

Product Name: ${productName}
${productCategory ? `Category: ${productCategory}` : ""}
${productPrice ? `Price: $${productPrice}` : ""}

Strict Requirements for the description:
1. The description MUST be highly specific to the provided product name, category, and price.
2. Focus on unique features and benefits directly related to the product type.
3. Use descriptive, engaging, and persuasive language.
4. Ensure it is concise (2-3 sentences) but packed with relevant information.
5. Maintain a professional and trustworthy tone.
6. Adapt your writing style based on the category (e.g., mention technical specs for electronics, material for clothing, plot for books, taste for food).

Generate a description that would compel customers to purchase this *exact* product.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const description = response.text();

    return description;
  } catch (error) {
    console.error("Error generating product description:", error);
    return "A fantastic product that meets all your needs."; // Fallback description
  }
}
