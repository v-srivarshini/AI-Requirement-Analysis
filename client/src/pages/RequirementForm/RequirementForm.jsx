import "./RequirementForm.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function RequirementForm() {
    const navigate = useNavigate();
         const [projectTitle, setProjectTitle] = useState("");
const [companyName, setCompanyName] = useState("");
const [description, setDescription] = useState("");
const handleAnalyze = async () => {
  try {

    const projectResponse = await api.post("/projects", {
      projectName: projectTitle,
      companyName: companyName,
      description: description
    });

    const projectId = projectResponse.data.project._id;

    await api.post("/requirements", {
      project: projectId,
      title: projectTitle,
      description: description,
      priority: "High"
    });

    navigate("/report");

  } catch(error) {
    console.log(error);
    alert("Something went wrong");
  }
};
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
                <span className="optional"> (Optional)</span>
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
                0 / 2000
              </div>

            </div>

           <button
  type="button"
  className="analyze-btn"
   onClick={handleAnalyze}
>
  Analyze with AI ✨
</button>
          </form>

        </div>

      </div>

    </div>
  );
}

export default RequirementForm;