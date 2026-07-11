import "./Report.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  FaArrowLeft,
  FaDownload,
  FaCheckCircle,
  FaClock,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

function Report() {
  return (
    <div className="report-page">

      <Sidebar />

      <div className="report-content">

        {/* Header */}

        <div className="report-header">

          <div>

            <button className="back-btn">
              <FaArrowLeft />
              Back to My Analyses
            </button>

            <h1>AI Requirement Analysis Report</h1>

            <p>
              Generated on <strong>08 July 2026</strong>
            </p>

          </div>

          <button className="download-btn">
            <FaDownload />
            Download Report
          </button>

        </div>

        {/* Status */}

        <div className="status-badge">
          <FaCheckCircle />
          Completed
        </div>

        {/* Summary */}

        <div className="report-card">

          <h2>Project Summary</h2>

          <p>
            This AI-powered Requirement Analyzer converts software
            requirements into structured documentation. It identifies
            functional requirements, non-functional requirements,
            recommended technologies, implementation timeline and
            development recommendations automatically.
          </p>

        </div>

        {/* Functional */}

        <div className="report-card">

          <h2>Functional Requirements</h2>

          <ul>

            <li>User Registration & Login</li>

            <li>Requirement Submission</li>

            <li>AI Requirement Analysis</li>

            <li>Report Generation</li>

            <li>Dashboard Statistics</li>

          </ul>

        </div>

        {/* Non Functional */}

        <div className="report-card">

          <h2>Non Functional Requirements</h2>

          <ul>

            <li>Responsive User Interface</li>

            <li>Secure Authentication</li>

            <li>Fast Response Time</li>

            <li>Scalable Architecture</li>

          </ul>

        </div>

        {/* Tech Stack */}

        <div className="report-card">

          <h2>
            <FaCode />
            Recommended Tech Stack
          </h2>

          <div className="tech-grid">

            <div>
              <strong>Frontend</strong>
              <p>React.js</p>
            </div>

            <div>
              <strong>Backend</strong>
              <p>Node.js + Express</p>
            </div>

            <div>
              <strong>Database</strong>
              <p>MongoDB</p>
            </div>

            <div>
              <strong>AI Model</strong>
              <p>Gemini API</p>
            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="report-card">

          <h2>
            <FaClock />
            Estimated Timeline
          </h2>

          <p>
            Estimated development duration:
            <strong> 4–6 Weeks</strong>
          </p>

        </div>

        {/* Recommendations */}

        <div className="report-card">

          <h2>
            <FaLightbulb />
            AI Recommendations
          </h2>

          <ul>

            <li>Use JWT Authentication.</li>

            <li>Validate all user inputs.</li>

            <li>Store reports inside MongoDB.</li>

            <li>Create downloadable PDF reports.</li>

            <li>Implement proper error handling.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Report;