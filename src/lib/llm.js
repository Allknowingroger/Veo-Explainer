import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Robust content generation helper
 */
export async function generateText(prompt, model = 'gemini-3-pro-preview') {
  const response = await ai.models.generateContent({
    model,
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    config: {
      temperature: 1,
      responseMimeType: 'application/json'
    }
  });
  return response.text;
}

/**
 * Image generation helper using the specialized image model
 */
export async function generateKeyframe(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: [{ role: 'user', parts: [{ text: `Create a photorealistic cinematic still for a video project based on this description: ${prompt}. Ensure high detail, cinematic lighting, and 16:9 aspect ratio style.` }] }],
    config: {
      imageConfig: {
        aspectRatio: '16:9'
      }
    }
  });

  // Find the image part in the response
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
