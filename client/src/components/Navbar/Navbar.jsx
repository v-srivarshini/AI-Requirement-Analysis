import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="navbar">

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