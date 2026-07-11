import "./AnalysisCard.css";
import { FaChevronRight } from "react-icons/fa";

function AnalysisCard({ title, date, status, iconColor }) {
  return (
    <div className="analysis-card">

      <div className="analysis-left">

        <div
          className="analysis-icon"
          style={{ background: iconColor }}
        >
          📄
        </div>

        <div>
          <h4>{title}</h4>
          <p>{date}</p>
        </div>

      </div>

      <div className="analysis-right">
        <span className="status">{status}</span>
        <FaChevronRight />
      </div>

    </div>
  );

}

export default AnalysisCard;