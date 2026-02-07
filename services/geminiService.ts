
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getChatResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      // Inicialización dentro del método para asegurar disponibilidad de la clave de API en cada llamada
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
        config: {
          systemInstruction: `Eres el Coach AI de "Red Gym". Tu estilo es motivador, directo y energético. Ayudas a los usuarios con dudas sobre ejercicios, nutrición y los servicios de Red Gym. Red Gym se caracteriza por su ambiente de luces rojas que favorecen la intensidad y la recuperación. Responde siempre en español. No menciones que eres una IA a menos que te lo pregunten. Eres parte del equipo de Red Gym.`,
          temperature: 0.8,
        },
      });

      // El acceso a .text es una propiedad, no un método
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "¡Tuvimos un pequeño problema técnico, pero no dejes que eso te detenga! La zona roja te espera. ¿En qué más puedo ayudarte con tu entrenamiento?";
    }
  }
}

export const geminiService = new GeminiService();
