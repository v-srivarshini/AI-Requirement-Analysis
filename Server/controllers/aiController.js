const { analyzeRequirement } = require("../services/openaiService");

const analyze = async (req, res) => {
  try {
   console.log("Analyze API called");
    const { requirement } = req.body;

    if (!requirement) {
      return res.status(400).json({
        success: false,
        message: "Requirement is required",
      });
    }

    const analysis = await analyzeRequirement(requirement);

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("AI Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze requirement",
    });
  }
};

module.exports = { analyze };