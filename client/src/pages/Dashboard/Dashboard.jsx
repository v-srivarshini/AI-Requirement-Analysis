import "./Dashboard.css";
import {
 FaClipboardList,
 FaCheckCircle,
 FaClock,
 FaFileAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StatCard from "../../components/Card/StatCard";
import AnalysisCard from "../../components/Card/AnalysisCard";

function Dashboard() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [projects, setProjects] = useState([]);
   const [stats, setStats] = useState({
  total: 0,
  completed: 0,
  reports: 0,
  pending: 0,
});
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");

console.log(response.data);
console.log(response.data.projects[0]);
const projectData = response.data.projects;
setProjects(projectData);

setStats({
  total: projectData.length,

  // status based counts
  completed: projectData.filter(
    (project) => project.status === "Completed"
  ).length,

  reports: projectData.filter(
    (project) => project.reportGenerated === true
  ).length,

  pending: projectData.filter(
    (project) => 
      project.status === "Pending" || 
      project.status === "Draft"
  ).length,
});
      } catch (error) {
        console.log("Projects Error:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

  <Navbar />

  <section className="hero-section">

   <h1>Hello, {user?.name}!</h1>

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

    {/* <img
      src="/re"
      alt="AI Illustration"
      className="hero-image"
    /> */}

  </div>

</section>

  <section className="overview">

    <h3>Overview</h3>

   <div className="overview-grid">

  <StatCard
  icon={<FaClipboardList />}
  count={stats.total}
  title="Total Analyses"
  subtitle="Created by you"
/>

<StatCard
  icon={<FaCheckCircle />}
  count={stats.completed}
  title="Completed"
  subtitle="Successful Analyses"
/>

<StatCard
  icon={<FaFileAlt />}
  count={stats.reports}
  title="Reports Generated"
  subtitle="Ready to View"
/>

<StatCard
  icon={<FaClock />}
  count={stats.pending}
  title="In Progress"
  subtitle=""
/>

</div>
  </section>

  <section className="recent-analysis">

    <div className="recent-top">

        <h3>Recent Analyses</h3>

      <button
  className="view-btn"
  onClick={() => navigate("/ai-analysis")}>
  View All
</button>

    </div>

{
  projects.length === 0 ? (

    <p className="no-analysis">
      No analyses available.
    </p>

  ) : (

    projects.slice(0, 3).map((project) => (

     <AnalysisCard
  key={project._id}
  title={project.projectName}
  date={new Date(project.createdAt).toLocaleDateString()}
  status={project.status || "Draft"}
/>

    ))

  )
} 

</section>
</div>

    </div>
  );
}

export default Dashboard;