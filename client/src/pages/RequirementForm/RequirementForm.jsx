import "./RequirementForm.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProject } from "../../services/projectService";
import { createRequirement } from "../../services/requirementService";
import { analyzeRequirement } from "../../services/aiService";

function RequirementForm() {
    const navigate = useNavigate();
         const [projectTitle, setProjectTitle] = useState("");
const [companyName, setCompanyName] = useState("");
const [description, setDescription] = useState("");
const [loading, setLoading] = useState(false);
const handleAnalyze = async () => {
  setLoading(true);
  try {

    // 1. Create Project
    const projectResponse = await createProject({
      projectName: projectTitle,
      companyName,
      description,
    });

    const projectId = projectResponse.project._id;

    // 2. Create Requirement
    const requirementResponse = await createRequirement({
      project: projectId,
      title: projectTitle,
      description,
      priority: "High",
    });

    const requirementId = requirementResponse.requirement._id;

   // 3. Analyze with AI
const analysisResponse = await analyzeRequirement(requirementId);

console.log("AI Response:", analysisResponse);
console.log("Analysis object:", analysisResponse.analysis);
console.log("Inner analysis:", analysisResponse.analysis.analysis);

// Save Analysis ID for PDF download
localStorage.setItem(
  "analysisId",
  analysisResponse.analysis._id
);

// 4. Save AI report
localStorage.setItem(
  "analysisReport",
  JSON.stringify(analysisResponse.analysis.analysis)
);
// Save project name for PDF filename
localStorage.setItem(
  "selectedProjectName",
  projectTitle
);
console.log("Saving Project Name:", projectTitle);

localStorage.setItem(
  "selectedProjectName",
  projectTitle
);

// 5. Navigate to Report
navigate("/report");
  } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);
  alert(error.response?.data?.message || "Something went wrong");
} finally {
  setLoading(false);

}
};
if (loading) {
  return (

    <div className="loading-screen">
      <div className="spinner"></div>
      <h2>AI is analyzing your requirements...</h2>
      <p>Please wait while we generate your report.</p>
    </div>
  );
}
  return (
    <div className="requirement-page">

      <Sidebar />

      <div className="requirement-content">

        <div className="page-header">
          <h1>New Requirement</h1>
          <p>Describe your project idea in detail.</p>
        </div>

        <div className="requirement-card">

          <form>

            {/* Project Title */}

            <div className="form-group">
              <label>Project Title</label>

             <input
           type="text"
           placeholder="Enter project title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
/>
            </div>

            {/* Client */}

            <div className="form-group">
              <label>
                Client / Company Name
              </label>

              <input
                type="text"
                placeholder="Enter client or company name"
                value={companyName}
                onChange={(e)=>setCompanyName(e.target.value)}
              />
            </div>

            {/* Description */}

            <div className="form-group">

              <label>Project Description</label>

              <small>
                Provide as much detail as possible about your project
                idea, goals, features and expectations.
              </small>

              <textarea
                rows="9"
                maxLength="2000"
                placeholder="Type your project description here..."
                value={description}
              onChange={(e)=>setDescription(e.target.value)}
              ></textarea>

             <div className="char-count">
{description.length} / 2000
</div>

            </div>

          <button
  type="button"
  className="analyze-btn"
  onClick={handleAnalyze}
  disabled={loading}
>
  {loading ? "Analyzing..." : "Analyze with AI ✨"}
</button>
          </form>

        </div>

      </div>

    </div>
  );
}

export default RequirementForm;