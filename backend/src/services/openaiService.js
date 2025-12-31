// import OpenAI from 'openai';
// import dotenv from 'dotenv';

// dotenv.config();

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

// export async function generateMovieRecommendations(userInput) {
//     try {
//         const prompt = `Based on the following user preferences: "${userInput}"
    
// Please recommend 5 movies that match these preferences. For each movie, provide:
// 1. Title
// 2. Year
// 3. Genre
// 4. A brief description (2-3 sentences)
// 5. Why it matches the user's preferences

// Format your response as a JSON array with the following structure:
// [
//   {
//     "title": "Movie Title",
//     "year": 2023,
//     "genre": "Genre",
//     "description": "Brief description",
//     "matchReason": "Why it matches"
//   }
// ]

// Only return the JSON array, no additional text.`;

//         const completion = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 {
//                     role: "system",
//                     content: "You are a knowledgeable movie recommendation assistant. You provide personalized movie suggestions based on user preferences."
//                 },
//                 {
//                     role: "user",
//                     content: prompt
//                 }
//             ],
//             temperature: 0.8,
//             max_tokens: 1500
//         });

//         const responseText = completion.choices[0].message.content.trim();

//         // Extract JSON from response (in case there's extra text)
//         const jsonMatch = responseText.match(/\[[\s\S]*\]/);
//         if (!jsonMatch) {
//             throw new Error('Failed to parse movie recommendations from AI response');
//         }

//         const movies = JSON.parse(jsonMatch[0]);
//         return movies;
//     } catch (error) {
//         console.error('OpenAI API Error:', error);
//         throw new Error(`Failed to generate recommendations: ${error.message}`);
//     }
// }



// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// dotenv.config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export async function generateMovieRecommendations(userInput) {
//   try {
//     const prompt = `
// Based on the following user preferences: "${userInput}"

// Please recommend 5 movies that match these preferences. For each movie, provide:

// Format your response strictly as a JSON array with the following structure:
// [
//   {
//     "title": "Movie Title",
//     "year": 2023,
//     "genre": "Genre",
//     "description": "Brief description",
//   }
// ]

// Return ONLY the JSON array. No markdown, no explanation.
// `;

//     const model = genAI.getGenerativeModel({
//       model: "gemini-flash-latest"
//     });

//     const result = await model.generateContent({
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }]
//         }
//       ],
//       generationConfig: {
//         temperature: 0.8,
//         maxOutputTokens: 1500
//       }
//     });

//     const responseText = result.response.text().trim();

//     // Extract JSON array safely
//     const jsonMatch = responseText.match(/\[[\s\S]*\]/);
//     if (!jsonMatch) {
//       throw new Error("Failed to parse movie recommendations from Gemini response");
//     }

//     const movies = JSON.parse(jsonMatch[0]);
//     return movies;

//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     throw new Error(`Failed to generate recommendations: ${error.message}`);
//   }
// }


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
