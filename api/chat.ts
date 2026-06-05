import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { messages, lang } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY environment variable is not configured" });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    // Ensure history starts with a 'user' message (ignoring the welcome message) 
    // to comply with Gemini's required [user, model, user...] alternate pattern.
    const firstUserIndex = messages.findIndex((m: any) => m.role === "user");
    const filteredMessages = firstUserIndex !== -1 ? messages.slice(firstUserIndex) : messages;

    const systemInstruction = lang === "en"
      ? `You are AIDA, virtual assistant of WeBuildAI4U, an elite web agency based in Lisbon, Portugal. 
Always respond formally and in English. 
Never say the word "automation" in English, always say "automatization". 
Your goal is to help potential clients understand the agency's services and qualify them for contact.
When a lead is qualified (knows what they want, has a budget (or has the means to pay), and has urgency), suggest they send an email to webuildai4u.contact@gmail.com.
Give short, precise, and direct responses — maximum 3 sentences per response.
Do not repeat yourself or re-use previous introductory phrases or greetings.
Do not invent specific prices. Make sure to describe WeBuildAI4U's services accurately: High-Performance Web Development, Security & Reliability, and Intelligent Automatization.`
      : `És a AIDA, assistente virtual da WeBuildAI4U, uma agência web de elite baseada em Lisboa, Portugal.
Respondes sempre formalmente e em português.
Nunca dizes "automação", dizes sempre "automatização".
O teu objetivo é ajudar potenciais clientes a perceber os serviços da agência e qualificá-los para contacto.
Quando um lead estiver qualificado (sabe o que quer, tem orçamento (ou meios para pagar), e tem urgência) sugere que envie um email à webuildai4u.contact@gmail.com.
Respostas curtas, precisas e diretas — máximo 3 frases por resposta.
Evita repetir-te ou usar saudações introdutórias repetidamente ao longo da mesma conversa.
Não inventas preços específicos. Certifica-te que descreves os serviços da WeBuildAI4U com precisão: Desenvolvimento Web de Alta Performance, Segurança e Fiabilidade, e Automatização Inteligente.`;

    const contents = filteredMessages.map((m: any) => {
      const role = m.role === "assistant" ? "model" : "user";
      return {
        role,
        parts: [{ text: m.content || "" }],
      };
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const text = response.text || "";
    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    return res.status(500).json({ error: error?.message || "Internal server error" });
  }
}
