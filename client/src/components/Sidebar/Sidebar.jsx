import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaHome,
  FaPlus,
  FaFileAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

function Sidebar({ isOpen, closeSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("analysisReport");

    navigate("/");
  };

  return (
    <>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>

        {/* Mobile Close Button */}

        <div className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </div>

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
            onClick={closeSidebar}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/requirement-form"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={closeSidebar}
          >
            <FaPlus />
            <span>New Requirement</span>
          </NavLink>

          <NavLink
            to="/ai-analysis"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={closeSidebar}
          >
            <FaFileAlt />
            <span>My Analyses</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={closeSidebar}
          >
            <FaUser />
            <span>Profile</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={closeSidebar}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>

        </ul>

        {/* Logout */}

        <div
          className="logout"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;