
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const HF_ROUTER_URL = "https://router.huggingface.co/v1/chat/completions";

export async function generateMovieRecommendations(userInput) {
  try {
    const response = await fetch(HF_ROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.1-8B-Instruct",
        messages: [
          {
            role: "system",
            content: "You are a movie recommendation assistant. Respond ONLY with valid JSON."
          },
          {
            role: "user",
            content: `
Based on the following user preferences: "${userInput}"

Recommend 5 movies.

Return ONLY a JSON array:
[
  {
    "title": "Movie Title",
    "year": 2023,
    "genre": "Genre",
    "description": "Brief description"
  }
]
`
          }
        ],
        temperature: 0.8,
        max_tokens: 800
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HF Router Error ${response.status}: ${text}`);
    }

    const data = await response.json();
    const responseText = data.choices?.[0]?.message?.content?.trim() || "";

    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error("Model did not return valid JSON");
    }
    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error("Hugging Face Router Error:", error);
    throw new Error(`Failed to generate recommendations: ${error.message}`);
  }
}
