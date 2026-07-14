const express = require("express");

const router = express.Router();

const {
  analyzeRequirement,
  getAllAnalyses,
  getAnalysisById,
  deleteAnalysis,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

// Generate & Save AI Analysis
router.post("/analyze", protect, analyzeRequirement);

// Get All Analyses
router.get("/", protect, getAllAnalyses);

// Get Single Analysis
router.get("/:id", protect, getAnalysisById);

// Delete Analysis
router.delete("/:id", protect, deleteAnalysis);

module.exports = router;