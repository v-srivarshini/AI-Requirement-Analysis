import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import RequirementForm from "../pages/RequirementForm/RequirementForm";
import AIAnalysis from "../pages/AIAnalysis/AIAnalysis";
import Report from "../pages/Report/Report";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/requirement-form" element={<RequirementForm />} />
      <Route path="/ai-analysis" element={<AIAnalysis />} />
      <Route path="/report" element={<Report />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;