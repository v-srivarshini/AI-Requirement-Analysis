const PDFDocument = require("pdfkit");

const generatePDF = (analysis) => {
  const doc = new PDFDocument({
    margin: 50,
    size: "A4",
  });

  // Title
  doc
    .fontSize(22)
    .fillColor("#1E3A8A")
    .text("AI Requirement Analysis Report", {
      align: "center",
    });

  doc.moveDown();

  doc
    .fontSize(11)
    .fillColor("gray")
    .text(`Generated On: ${new Date().toLocaleString()}`);

  doc.moveDown(2);

  // Helper function
  const addSection = (title, data) => {
    doc
      .fontSize(16)
      .fillColor("#2563EB")
      .text(title);

    doc.moveDown(0.5);

    doc.fontSize(12).fillColor("black");

    if (Array.isArray(data)) {
      data.forEach((item) => {
        doc.text(`• ${item}`);
      });
    } else {
      doc.text(data || "N/A");
    }

    doc.moveDown();
  };

  addSection("Project Summary", analysis.projectSummary);

  addSection("Features", analysis.features);

  addSection(
    "Functional Requirements",
    analysis.functionalRequirements
  );

  addSection(
    "Non Functional Requirements",
    analysis.nonFunctionalRequirements
  );

  addSection("Database Tables", analysis.databaseTables);

  addSection("REST APIs", analysis.apis);

  addSection("Recommended Tech Stack", analysis.techStack);

  addSection("AI Recommendations", analysis.aiRecommendations);

  return doc;
};

module.exports = {
  generatePDF,
};