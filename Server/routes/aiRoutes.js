const express = require("express");

const router = express.Router();

const { analyzeRequirement } = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

router.post("/analyze", protect, analyzeRequirement);

module.exports = router;