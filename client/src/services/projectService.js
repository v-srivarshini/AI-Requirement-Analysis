import api from "./api";

// Create Project
export const createProject = async (projectData) => {
  const response = await api.post("/projects", projectData);
  return response.data;
};

// Get All Projects
export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

// Get Single Project
export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};