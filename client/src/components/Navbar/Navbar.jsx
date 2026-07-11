import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">

      <div></div>

      <div className="navbar-right">

        <div className="profile">

          <div className="profile-circle">
            S
          </div>
{/* 
          <span className="username">
            Sunny
          </span> */}

         

        </div>

      </div>

    </header>
  );
}

export default Navbar;