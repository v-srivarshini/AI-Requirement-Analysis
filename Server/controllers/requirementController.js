const Requirement = require("../models/Requirement");

// Create Requirement
const createRequirement = async (req, res) => {
  try {
    const { project, title, description, priority } = req.body;

    if (!project || !title || !description) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const requirement = await Requirement.create({
      project,
      title,
      description,
      priority,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Requirement created successfully",
      requirement,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get Requirements by Project
const getRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find({
      project: req.params.projectId,
      createdBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      count: requirements.length,
      requirements,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getRequirementById = async (req, res) => {
  try {
    const requirement = await Requirement.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!requirement) {
      return res.status(404).json({
        message: "Requirement not found",
      });
    }

    res.status(200).json(requirement);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateRequirement = async (req, res) => {
  try {
    const requirement = await Requirement.findOneAndUpdate(
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

    if (!requirement) {
      return res.status(404).json({
        message: "Requirement not found",
      });
    }

    res.status(200).json({
      message: "Requirement updated successfully",
      requirement,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteRequirement = async (req, res) => {
  try {
    const requirement = await Requirement.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!requirement) {
      return res.status(404).json({
        message: "Requirement not found",
      });
    }

    res.status(200).json({
      message: "Requirement deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createRequirement,
  getRequirements,
  getRequirementById,
  updateRequirement,
  deleteRequirement,
};