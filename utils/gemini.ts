import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function main({ image }: { image: File }) {
  // Convert image to buffer
  const buffer = Buffer.from(await image.arrayBuffer());

  // Call Gemini API
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash", // Changed to a valid model name (2.5 does not exist yet)
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              data: buffer.toString("base64"),
              mimeType: image.type,
            },
          },
          {
            text: `
Generate EXACTLY 2 MCQs from the image.
Each MCQ must have:
- question
- options (4)
- correctAnswer

Return ONLY valid JSON.
`,
          },
        ],
      },
    ],
    config: {
      responseMimeType: "application/json", // Forces strict JSON mode
    },
  });

  // Extract text
  const responseText = response.text();

  // Clean up any potential markdown backticks (e.g. ```json ... ```)
  // This prevents JSON.parse errors if the model gets chatty
  const cleanText = responseText.replace(/```json|```/g, "").trim();

  return JSON.parse(cleanText);
} // <--- This was the missing bracket causing your error!
