import "./AIAnalysis.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaSearch, FaEye, FaDownload, FaTrash } from "react-icons/fa";

function AIAnalysis() {
  return (
    <div className="analysis-page">

      <Sidebar />

      <div className="analysis-content">

        <div className="analysis-header">
          <h1>My Analyses</h1>
          <p>View and manage all your AI generated requirement analyses.</p>
        </div>

        <div className="analysis-toolbar">

          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search analysis..."
            />
          </div>

          <select className="filter">
            <option>All</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Draft</option>
          </select>

        </div>

        <div className="analysis-table">

          <div className="table-head">

            <span>Project</span>
            <span>Status</span>
            <span>Date</span>
            <span>Actions</span>

          </div>

          {/* Row 1 */}

          <div className="table-row">

            <div>
              <h4>E-Commerce Website</h4>
              <p>Requirement Analysis</p>
            </div>

            <span className="status completed">
              Completed
            </span>

            <span>
              27 Jun 2026
            </span>

            <div className="action-icons">

              <FaEye />

              <FaDownload />

              <FaTrash />

            </div>

          </div>

          {/* Row 2 */}

          <div className="table-row">

            <div>
              <h4>Hospital Management</h4>
              <p>Requirement Analysis</p>
            </div>

            <span className="status progress">
              In Progress
            </span>

            <span>
              25 Jun 2026
            </span>

            <div className="action-icons">

              <FaEye />

              <FaDownload />

              <FaTrash />

            </div>

          </div>

          {/* Row 3 */}

          <div className="table-row">

            <div>
              <h4>Food Delivery App</h4>
              <p>Requirement Analysis</p>
            </div>

            <span className="status draft">
              Draft
            </span>

            <span>
              24 Jun 2026
            </span>

            <div className="action-icons">

              <FaEye />

              <FaDownload />

              <FaTrash />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAnalysis;