import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getRestaurantDetails(url: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Extract details about the restaurant from this URL: ${url}. 
    I need:
    1. Restaurant Name
    2. Cuisine type
    3. Key menu items (Appetizers, Main Course, Desserts)
    4. Atmosphere/Vibe description
    5. Contact info (Phone, Address, Opening Hours)
    6. Any specific branding elements (colors, themes)
    
    Return the data in a clean JSON format.`,
    config: {
      tools: [{ urlContext: {} }],
      responseMimeType: "application/json",
    },
  });

  return JSON.parse(response.text || "{}");
}
