import api from "./api";

// Analyze Requirement
export const analyzeRequirement = async (requirementId) => {
  const response = await api.post("/ai/analyze", {
    requirementId,
  });

  return response.data;
};

// Get All Analyses
export const getAllAnalyses = async () => {
  const response = await api.get("/ai");
  return response.data;
};

// Get Single Analysis
export const getAnalysisById = async (id) => {
  const response = await api.get(`/ai/${id}`);
  return response.data;
};

// Delete Analysis
export const deleteAnalysis = async (id) => {
  const response = await api.delete(`/ai/${id}`);
  return response.data;
};