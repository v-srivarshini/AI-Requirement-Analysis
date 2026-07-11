import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaBrain,
  FaHome,
  FaPlus,
  FaFileAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <FaBrain className="logo-icon" />
        <h2>AI Analyzer</h2>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">

  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      isActive ? "menu-item active" : "menu-item"
    }
  >
    <FaHome />
    <span>Dashboard</span>
  </NavLink>

  <NavLink
    to="/requirement-form"
    className={({ isActive }) =>
      isActive ? "menu-item active" : "menu-item"
    }
  >
    <FaPlus />
    <span>New Requirement</span>
  </NavLink>

  <NavLink
    to="/ai-analysis"
    className={({ isActive }) =>
      isActive ? "menu-item active" : "menu-item"
    }
  >
    <FaFileAlt />
    <span>My Analyses</span>
  </NavLink>

 <NavLink
  to="/profile"
  className={({ isActive }) =>
    isActive ? "menu-item active" : "menu-item"
  }
>
  <FaUser />
  <span>Profile</span>
</NavLink>

  <NavLink
  to="/settings"
  className={({ isActive }) =>
    isActive ? "menu-item active" : "menu-item"
  }
>
  <FaCog />
  <span>Settings</span>
</NavLink>
</ul>

      {/* Logout */}
      <div className="logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>

    </aside>
  );
}

export default Sidebar;