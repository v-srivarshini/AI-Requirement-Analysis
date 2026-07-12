const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    requirement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Requirement",
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    analysis: {
      projectSummary: {
        type: String,
      },

      features: [String],

      functionalRequirements: [String],

      nonFunctionalRequirements: [String],

      databaseTables: [String],

      apis: [String],

      techStack: [String],

      aiRecommendations: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Analysis", analysisSchema);