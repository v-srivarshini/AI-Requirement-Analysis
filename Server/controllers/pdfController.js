const Analysis = require("../models/Analysis");
const { generatePDF } = require("../services/pdfService");

const downloadPDF = async (req, res) => {
  try {
    const analysis = await Analysis.findOne({
      _id: req.params.analysisId,
      createdBy: req.user._id,
    });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found",
      });
    }

    // Generate PDF
    const doc = generatePDF(analysis.analysis);

    // Response headers
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=AI_Analysis_${analysis._id}.pdf`
    );

    res.setHeader("Content-Type", "application/pdf");

    // Stream PDF directly to response
    doc.pipe(res);

    doc.end();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "PDF generation failed",
      error: error.message,
    });
  }
};

module.exports = {
  downloadPDF,
};