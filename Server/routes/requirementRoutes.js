const express = require("express");
const router = express.Router();

const {
  createRequirement,
  getRequirements,
  getRequirementById,
  updateRequirement,
    deleteRequirement,
} = require("../controllers/requirementController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createRequirement);

// Get all requirements of one project
router.get("/project/:projectId", protect, getRequirements);
router.get("/:id", protect, getRequirementById);
router.put("/:id", protect, updateRequirement);
router.delete("/:id", protect, deleteRequirement);

module.exports = router;