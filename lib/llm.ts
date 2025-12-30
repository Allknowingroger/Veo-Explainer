import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface GeneratedData {
  topic: string;
  idea: string;
  prompt: string;
}

/**
 * Generates structured text data for the storyboard using Gemini 3 Pro
 */
export async function generateText(prompt: string): Promise<GeneratedData> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      temperature: 1,
      responseMimeType: 'application/json',
      thinkingConfig: { thinkingBudget: 4000 }
    }
  });

  const text = response.text;
  if (!text) throw new Error('No response text from AI');

  try {
    return JSON.parse(text) as GeneratedData;
  } catch (e) {
    // Fallback if the model didn't perfectly adhere to JSON mode or wrapped it in markdown
    const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleaned) as GeneratedData;
  }
}

/**
 * Generates a photorealistic preview image using Gemini 2.5 Flash Image
 */
export async function generateKeyframe(prompt: string): Promise<string | null> {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: `Create a photorealistic cinematic still for a video project based on this description: ${prompt}. Ensure high detail, cinematic lighting, and 16:9 aspect ratio style.`,
    config: {
      imageConfig: {
        aspectRatio: '16:9'
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
