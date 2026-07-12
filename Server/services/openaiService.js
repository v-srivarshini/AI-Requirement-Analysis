const ai = require("../config/openai");

const analyzeRequirementWithAI = async (requirement) => {
  const response = await ai.models.generateContent({
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

  const text = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};

module.exports = {
  analyzeRequirementWithAI,
};