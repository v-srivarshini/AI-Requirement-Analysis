import "./RequirementForm.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function RequirementForm() {
    const navigate = useNavigate();
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
              ></textarea>

              <div className="char-count">
                0 / 2000
              </div>

            </div>

           <button
  type="button"
  className="analyze-btn"
  onClick={() => navigate("/report")}
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