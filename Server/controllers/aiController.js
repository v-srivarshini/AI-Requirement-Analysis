const Requirement = require("../models/Requirement");
const Analysis = require("../models/Analysis");

const {
  analyzeRequirementWithAI,
} = require("../services/openaiService");

const analyzeRequirement = async (req, res) => {
  try {
    const { requirementId } = req.body;

    if (!requirementId) {
      return res.status(400).json({
        success: false,
        message: "Requirement ID is required",
      });
    }

    const requirement = await Requirement.findById(requirementId);

    if (!requirement) {
      return res.status(404).json({
        success: false,
        message: "Requirement not found",
      });
    }

    const aiResult = await analyzeRequirementWithAI(
      requirement.description
    );

    const savedAnalysis = await Analysis.create({
      project: requirement.project,
      requirement: requirement._id,
      createdBy: requirement.createdBy,
      analysis: aiResult,
    });
   
    requirement.status = "Analyzed";

    await requirement.save();

    res.status(200).json({
      success: true,
      message: "Requirement analyzed successfully",
      analysis: savedAnalysis,
    });

  } catch (error) {
  console.error("AI Error:", error);

  // Gemini service is temporarily busy
  if (
    error.status === 503 ||
    error.message?.includes("503") ||
    error.message?.includes("UNAVAILABLE")
  ) {
    return res.status(503).json({
      success: false,
      message: "Gemini AI service is currently busy. Please try again after a few moments.",
    });
  }

  // Other errors
  return res.status(500).json({
    success: false,
    message: "AI generation failed",
    error: error.message,
  });
}
};
const getAllAnalyses = async (req, res) => {
  try {
    const analyses = await Analysis.find({
      createdBy: req.user._id,
    })
      .populate("project", "projectName companyName")
      .populate("requirement", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: analyses.length,
      analyses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAnalysisById = async (req, res) => {
  try {
    const analysis = await Analysis.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    })
      .populate("project", "projectName companyName")
      .populate("requirement", "title description");

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found",
      });
    }

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteAnalysis = async (req, res) => {
  try {
    const analysis = await Analysis.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Analysis deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeRequirement,
  getAllAnalyses,
  getAnalysisById,
  deleteAnalysis,
};