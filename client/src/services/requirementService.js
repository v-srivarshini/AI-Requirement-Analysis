import api from "./api";

// Create Requirement
export const createRequirement = async (requirementData) => {
  const response = await api.post("/requirements", requirementData);
  return response.data;
};

// Get Requirements by Project
export const getRequirements = async (projectId) => {
  const response = await api.get(
    `/requirements/project/${projectId}`
  );
  return response.data;
};