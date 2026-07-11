import "./Dashboard.css";
import {
 FaClipboardList,
 FaCheckCircle,
 FaClock,
 FaFileAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StatCard from "../../components/Card/StatCard";
import AnalysisCard from "../../components/Card/AnalysisCard";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

  <Navbar />

  <section className="hero-section">

    <h1>Hello, Sunny! </h1>

    <p>
        Here's what's happening with your analyses.
    </p>

</section>
<section className="hero-card">

  <div className="hero-left">

    <h3>Got a new requirement?</h3>

    <p>
      Let AI analyze your requirements and suggest the best approach.
    </p>

   <button
    className="new-btn"
    onClick={() => navigate("/requirement-form")}
>
    New Requirement
</button>
  </div>

  <div className="hero-right">

    <img
      src="/re"
      alt="AI Illustration"
      className="hero-image"
    />

  </div>

</section>

  <section className="overview">

    <h3>Overview</h3>

    <div className="overview-grid">

        <StatCard
            icon={<FaClipboardList />}
            count="12"
            title="Total Analyses"
            subtitle="All Time"
        />

        <StatCard
            icon={<FaCheckCircle />}
            count="8"
            title="Completed"
            subtitle="This Month"
        />

        <StatCard
            icon={<FaClock />}
            count="3"
            title="In Progress"
            subtitle="This Month"
        />

        <StatCard
            icon={<FaFileAlt />}
            count="1"
            title="Drafts"
            subtitle="This Month"
        />

    </div>



  </section>

  <section className="recent-analysis">

    <div className="recent-top">

        <h3>Recent Analyses</h3>

        <button className="view-btn">
            View All
        </button>

    </div>

    <AnalysisCard
  title="E-Commerce Website"
  date="Analyzed on 27 Jun 2026 • 11:30 AM"
  status="Completed"
  iconColor="#DCFCE7"
/>

<AnalysisCard
  title="Hospital Management System"
  date="Analyzed on 25 Jun 2026 • 04:20 PM"
  status="Completed"
  iconColor="#DBEAFE"
/>

<AnalysisCard
  title="Food Delivery App"
  date="Analyzed on 24 Jun 2026 • 10:10 AM"
  status="Completed"
  iconColor="#FFEDD5"
/>

</section>
</div>

    </div>
  );
}

export default Dashboard;