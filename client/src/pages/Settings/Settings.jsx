import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaLock, FaSignOutAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../services/authService";
function Settings() {
  const navigate = useNavigate();

const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [showCurrent, setShowCurrent] = useState(false);
const [showNew, setShowNew] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

const handleUpdatePassword = async () => {

  if (!currentPassword || !newPassword || !confirmPassword) {
    alert("Please fill all fields.");
    return;
  }

  if (newPassword.length < 6) {
    alert("New password must contain at least 6 characters.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {

    const response = await changePassword({
      currentPassword,
      newPassword,
    });

    alert(response.message);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Password update failed."
    );

  }

};

const handleLogout = () => {

  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (!confirmLogout) return;

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/");
};
  return (
    <div className="settings-page">

      <Sidebar />

      <div className="settings-content">

        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account settings</p>
        </div>

        {/* Change Password */}

        <div className="settings-card">

          <h2>
            <FaLock />
            Change Password
          </h2>
<div className="form-group">
  <label>Current Password</label>

  <div className="password-field">

    <input
      type={showCurrent ? "text" : "password"}
      placeholder="Enter current password"
      value={currentPassword}
      onChange={(e) => setCurrentPassword(e.target.value)}
    />

    <span onClick={() => setShowCurrent(!showCurrent)}>
      {showCurrent ? <FaEyeSlash /> : <FaEye />}
    </span>

  </div>
</div>

        <div className="form-group">
  <label>New Password</label>

  <div className="password-field">

    <input
      type={showNew ? "text" : "password"}
      placeholder="Enter new password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />

    <span onClick={() => setShowNew(!showNew)}>
      {showNew ? <FaEyeSlash /> : <FaEye />}
    </span>

  </div>
</div>
         <div className="form-group">
  <label>Confirm Password</label>

  <div className="password-field">

    <input
      type={showConfirm ? "text" : "password"}
      placeholder="Confirm new password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />

    <span onClick={() => setShowConfirm(!showConfirm)}>
      {showConfirm ? <FaEyeSlash /> : <FaEye />}
    </span>

  </div>
</div>

        <button
  className="update-btn"
  onClick={handleUpdatePassword}
>
  Update Password
</button>

        </div>

        {/* Logout */}

        <div className="settings-card danger">

          <h2>
            <FaSignOutAlt />
            Logout
          </h2>

          <p>
            Click the button below to securely sign out of your account.
          </p>

         <button
  className="logout-btn"
  onClick={handleLogout}
>
  Logout
</button>

        </div>

      </div>

    </div>
  );
}

export default Settings;