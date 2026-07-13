const ai = require("../config/openai");

// Delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const analyzeRequirementWithAI = async (requirement) => {
  let response;

  // Retry up to 3 times if Gemini is busy
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      response = await ai.models.generateContent({
        model: "gemini-3.5-flash",

        contents: `
You are a Software Requirement Analyst.

Analyze the following requirement.

Return ONLY valid JSON.

Do not use markdown.

Return exactly in this format:

{
  "projectSummary":"",
  "features":[],
  "functionalRequirements":[],
  "nonFunctionalRequirements":[],
  "databaseTables":[],
  "apis":[],
  "techStack":[],
  "aiRecommendations":[]
}

Requirement:

${requirement}
`,
      });

      // Success
      break;
    } catch (error) {
      console.error(`Gemini Attempt ${attempt} Failed`);

      if (attempt === 3) {
        throw error;
      }

      console.log("Retrying in 3 seconds...");
      await delay(3000);
    }
  }

  const text = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};

module.exports = {
  analyzeRequirementWithAI,
};