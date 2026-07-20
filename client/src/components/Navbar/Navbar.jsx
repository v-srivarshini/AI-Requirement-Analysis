import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="navbar">

      {/* Mobile Menu */}
      <button
        className="menu-btn"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Profile */}
      <div
        className="profile"
        onClick={() => navigate("/profile")}
      >
        <div className="profile-circle">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>
      </div>

    </header>
  );
}

export default Navbar;