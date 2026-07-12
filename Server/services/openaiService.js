console.log("API Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Not Loaded");

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeRequirement = async (requirement) => {
  try {
    console.log("Requirement:", requirement);
    console.log("Calling Gemini API...");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Analyze this software requirement and generate:

1. Project Summary
2. Features
3. Functional Requirements
4. Non-Functional Requirements
5. Database Tables
6. APIs
7. Recommended Tech Stack
8. AI Recommendations

Requirement:
${requirement}`,
    });

    console.log("Gemini Response:", response.text);

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

module.exports = { analyzeRequirement };