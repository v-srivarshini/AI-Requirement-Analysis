const Project = require("../models/Project");

// Create Project
const createProject = async (req, res) => {
  try {
    const { projectName, companyName, description } = req.body;

    // Validation
    if (!projectName || !companyName || !description) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Create Project
    const project = await Project.create({
      projectName,
      companyName,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get All Projects of Logged-in User
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      createdBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      count: projects.length,
      projects,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get Single Project
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};