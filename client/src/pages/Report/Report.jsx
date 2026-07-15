import "./Report.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const [reportData, setReportData] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("analysisReport");
    if(data){
      setReportData(JSON.parse(data));
    }
  }, []);
  // PDF DOWNLOAD FUNCTION
  const handleDownload = async () => {
  try {

    const analysisId = localStorage.getItem("analysisId");

    if (!analysisId) {
      alert("Analysis ID not found");
      return;
    }

    const response = await api.get(`/pdf/${analysisId}`, {
      responseType: "blob",
    });

    const file = new Blob([response.data], {
      type: "application/pdf",
    });

    const fileURL = window.URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = fileURL;

    // Latest project name
    const projectName =
      localStorage.getItem("selectedProjectName") || "AI_Analysis";

    link.download = `${projectName.replace(/\s+/g, "_")}_Report.pdf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(fileURL);

  } catch (error) {

    console.log(error);
    console.log(error.response);

    alert(error.response?.data?.message || "PDF download failed");

  }
};
  return (
    <div className="report-page">
      <Sidebar />
      <div className="report-content">
        <div className="report-header">
          <div>
           <button
              className="back-btn"
              onClick={() => navigate("/ai-analysis")}
            >
              <FaArrowLeft />
              Back to My Analyses
            </button>
            <h1>
              AI Requirement Analysis Report
            </h1>
            <p>
              Generated on 
              <strong>
                {new Date().toLocaleDateString()}
              </strong>
            </p>
          </div>
          <button 
            className="download-btn"
            onClick={handleDownload}
          >
            <FaDownload />
            Download Report
          </button>
        </div>
        <div className="status-badge">
          <FaCheckCircle />
          Completed
        </div>
        <div className="report-card">
          <h2>
            Project Summary
          </h2>
          <p>
            {reportData?.projectSummary || "Generating AI analysis..."}
          </p>

        </div>

        <div className="report-card">

          <h2>
            Functional Requirements
          </h2>
          <ul>

            {
              reportData?.functionalRequirements?.map((item,index)=>(
                <li key={index}>
                  {item}
                </li>
              ))
            }

          </ul>

        </div>

        <div className="report-card">

          <h2>
            Non Functional Requirements
          </h2>
          <ul>
            {
              reportData?.nonFunctionalRequirements?.map((item,index)=>(
                <li key={index}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        <div className="report-card">
          <h2>
            <FaCode />
            Recommended Tech Stack
          </h2>

          <div className="tech-grid">

            {
              reportData?.techStack?.map((tech,index)=>(
                <div key={index}>
                  <p>{tech}</p>
                </div>
              ))
            }

          </div>
        </div>

        <div className="report-card">
          <h2>
            Features
          </h2>
          <ul>
          {
            reportData?.features?.map((item,index)=>(
              <li key={index}>
                {item}
              </li>
            ))
          }
          </ul>
        </div>

        <div className="report-card">
          <h2>
            Database Tables
          </h2>
          <ul>
          {
            reportData?.databaseTables?.map((item,index)=>(
              <li key={index}>
                {item}
              </li>
            ))
          }
          </ul>
        </div>

        <div className="report-card">
          <h2>
            Suggested APIs
          </h2>
          <ul>

          {
            reportData?.apis?.map((item,index)=>(
              <li key={index}>
                {item}
              </li>
            ))
          }
          </ul>
        </div>

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
        <div className="report-card">

          <h2>
            <FaLightbulb />

            AI Recommendations

          </h2>
          <ul>

          {
            reportData?.aiRecommendations?.map((item,index)=>(
              <li key={index}>
                {item}
              </li>
            ))
          }

          </ul>

        </div>

      </div>

    </div>
  );
}


export default Report;