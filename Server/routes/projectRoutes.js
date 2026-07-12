const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const { protect } = require("../middleware/authMiddleware");
const { validateProject } = require("../middleware/validationMiddleware");

// Create Project
router.post("/", protect, validateProject, createProject);

// Get All Projects
router.get("/", protect, getProjects);

// Get Single Project
router.get("/:id", protect, getProjectById);

// Update Project
router.put("/:id", protect, updateProject);

// Delete Project
router.delete("/:id", protect, deleteProject);

module.exports = router;