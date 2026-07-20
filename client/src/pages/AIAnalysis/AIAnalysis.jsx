import "./AIAnalysis.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaSearch, FaEye, FaDownload, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getAllAnalyses,  deleteAnalysis,} from "../../services/aiService";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function AIAnalysis() {

  const navigate = useNavigate();
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
//fetch all analyses function
  const fetchAnalyses = async () => {

    try {

      const response = await getAllAnalyses();

      console.log(response);
console.log(response.analyses[0]);
      setAnalyses(response.analyses);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchAnalyses();

  }, []);

  //delete analysis function

  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this analysis?"
  );

  if (!confirmDelete) return;

  try {

    await deleteAnalysis(id);

    setAnalyses(
      analyses.filter((item) => item._id !== id)
    );

    alert("Analysis deleted successfully!");

  } catch (error) {
    console.log(error);
    alert("Failed to delete analysis.");
  }

};
//download pdf function
const handleDownload = async (id, projectName) => {

  try {

    const response = await api.get(
      `/pdf/${id}`,
      {
        responseType: "blob",
      }
    );

    const file = new Blob(
      [response.data],
      {
        type: "application/pdf",
      }
    );

    const fileURL = window.URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = fileURL;

   
   link.download = `${projectName.replace(/\s+/g, "_")}_Report.pdf`;

    document.body.appendChild(link);

    link.click();

    link.remove();

  } catch (error) {

    console.log(error);

    alert("PDF download failed");

  }

};

  return (

    <div className="analysis-page">

      <Sidebar />

      <div className="analysis-content">

        <div className="analysis-header">
          <button
  className="mobile-back-btn"
  onClick={() => navigate("/dashboard")}
>
  <FaArrowLeft />
</button>

          <h1>My Analyses </h1>
          <p>
            View and manage all your AI generated requirement analyses.
          </p>

        </div>

        <div className="analysis-toolbar">

          <div className="search-box">

            <FaSearch />

           <input
  type="text"
  placeholder="Search analysis..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

          </div>

        </div>

        <div className="analysis-table">

          <div className="table-head">

            <span>Project</span>

            <span>Status</span>

            <span>Date</span>

            <span>Actions</span>

          </div>

          {loading ? (

            <p className="no-analysis">
              Loading analyses...
            </p>

          ) : analyses.length === 0 ? (

            <p className="no-analysis">
              No analyses found.
            </p>

          ) : (

           analyses
  .filter((item) =>
    item.project?.projectName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((item) => (

              <div
                className="table-row"
                key={item._id}
              >

                <div>

                  <h4>
                    {item.project?.projectName}
                  </h4>

                  <p>
                    {item.requirement?.title}
                  </p>

                </div>

                <span className="status completed">

                  Completed

                </span>

                <span>

                  {new Date(item.createdAt).toLocaleDateString()}

                </span>

                <div className="action-icons">

                 <FaEye
  onClick={() => {
   localStorage.setItem(
  "analysisReport",
  JSON.stringify(item.analysis)
);
localStorage.setItem(
  "analysisId",
  item._id
);
localStorage.setItem(
  "selectedProjectName",
  item.project.projectName
);
    navigate("/report");
  }}
/>

               <FaDownload
  onClick={() =>
    handleDownload(item._id, item.project.projectName)
  }
  style={{ cursor: "pointer" }}
/>
                 <FaTrash
  onClick={() => handleDelete(item._id)}
  style={{ cursor: "pointer" }}
/>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );

}
export default AIAnalysis;