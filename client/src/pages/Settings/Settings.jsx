import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaLock, FaSignOutAlt } from "react-icons/fa";

function Settings() {
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
            <input
              type="password"
              placeholder="Enter current password"
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <button className="update-btn">
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

          <button className="logout-btn">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;