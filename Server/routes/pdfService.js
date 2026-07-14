const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { downloadPDF } = require("../controllers/pdfController");

router.get("/:analysisId", protect, downloadPDF);

module.exports = router;