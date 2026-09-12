import { Link } from "react-router-dom";
import { useState } from "react";
import {
    FaChartBar,
    FaRoute,
    FaBullseye,
    FaRobot,
    FaSave,
    FaCog,
    FaHome,
    FaLinkedin,
    FaGithub,
    FaFileAlt,
    FaUser,
    FaBell,
    FaLock,
    FaMoon,
    FaBrain,
    FaSignOutAlt
} from "react-icons/fa";

import "./Menu.css";

function Menu() {

    const [settingsOpen, setSettingsOpen] = useState(false);
    const [activeSetting, setActiveSetting] = useState(null);
    const [showLogout, setShowLogout] = useState(false);

    const settingContent = {
        Profile: "Manage your name, email and target job role.",
        Notifications: "Control email notifications, career tips and analysis updates.",
        Privacy: "Manage your privacy and account security.",
        Appearance: "Customize dark mode and compact layout.",
        "AI Preferences": "Manage AI recommendations and learning suggestions."
    };

    const handleSetting = (name) => {
        setActiveSetting(
            activeSetting === name ? null : name
        );
        setShowLogout(false);
    };

    return (
        <div>

            <div className="menu">

                <Link className="menu-link" to="/">
                    <FaHome /> Home
                </Link>

                <Link className="menu-link" to="/linkedin">
                    <FaLinkedin /> Linkedin Analysis
                </Link>

                <Link className="menu-link" to="/github">
                    <FaGithub /> GitHub Analysis
                </Link>

                <Link className="menu-link" to="/resume">
                    <FaFileAlt /> Resume ATS Analysis
                </Link>

                <Link className="menu-link" to="/dashboard">
                    <FaHome /> Dashboard Overview
                </Link>

            </div>

            <div className="divider"></div>

            <div className="extra-menu">

                <Link className="menu-link" to="/reports">
                    <FaChartBar /> Reports
                </Link>

                <Link className="menu-link" to="/ai-roadmap">
                    <FaRoute /> AI Roadmap
                </Link>

                <Link className="menu-link" to="/skills-tracker">
                    <FaBullseye /> Skills Tracker
                </Link>

                <Link className="menu-link" to="/career-assistant">
                    <FaRobot /> Career Assistant
                </Link>

                <Link className="menu-link" to="/saved-analyses">
                    <FaSave /> Saved Analyses
                </Link>


                {/* SETTINGS */}

                <button
                    className={`settings-main ${settingsOpen ? "settings-active" : ""}`}
                    onClick={() => {
                        setSettingsOpen(!settingsOpen);
                        setActiveSetting(null);
                        setShowLogout(false);
                    }}
                >
                    <FaCog />
                    <span>Settings</span>
                    <span className="settings-arrow">
                        {settingsOpen ? "⌃" : "⌄"}
                    </span>
                </button>


                {/* SETTINGS OPTIONS */}

                {settingsOpen && (
                    <div className="settings-submenu">

                        <button
                            onClick={() => handleSetting("Profile")}
                            className={activeSetting === "Profile" ? "sub-active" : ""}
                        >
                            <FaUser />
                            Profile
                        </button>

                        {activeSetting === "Profile" && (
                            <div className="setting-small-content">
                                <b>Profile</b>
                                <span>{settingContent.Profile}</span>
                            </div>
                        )}


                        <button
                            onClick={() => handleSetting("Notifications")}
                            className={activeSetting === "Notifications" ? "sub-active" : ""}
                        >
                            <FaBell />
                            Notifications
                        </button>

                        {activeSetting === "Notifications" && (
                            <div className="setting-small-content">
                                <b>Notifications</b>
                                <span>{settingContent.Notifications}</span>
                            </div>
                        )}


                        <button
                            onClick={() => handleSetting("Privacy")}
                            className={activeSetting === "Privacy" ? "sub-active" : ""}
                        >
                            <FaLock />
                            Privacy
                        </button>

                        {activeSetting === "Privacy" && (
                            <div className="setting-small-content">
                                <b>Privacy</b>
                                <span>{settingContent.Privacy}</span>
                            </div>
                        )}


                        <button
                            onClick={() => handleSetting("Appearance")}
                            className={activeSetting === "Appearance" ? "sub-active" : ""}
                        >
                            <FaMoon />
                            Appearance
                        </button>

                        {activeSetting === "Appearance" && (
                            <div className="setting-small-content">
                                <b>Appearance</b>
                                <span>{settingContent.Appearance}</span>
                            </div>
                        )}


                        <button
                            onClick={() => handleSetting("AI Preferences")}
                            className={activeSetting === "AI Preferences" ? "sub-active" : ""}
                        >
                            <FaBrain />
                            AI Preferences
                        </button>

                        {activeSetting === "AI Preferences" && (
                            <div className="setting-small-content">
                                <b>AI Preferences</b>
                                <span>{settingContent["AI Preferences"]}</span>
                            </div>
                        )}


                        {/* LOGOUT */}

                        <button
                            className="logout-setting"
                            onClick={() => {
                                setShowLogout(!showLogout);
                                setActiveSetting(null);
                            }}
                        >
                            <FaSignOutAlt />
                            Log Out
                        </button>

                        {showLogout && (
                            <div className="logout-small-content">
                                <b>Log Out?</b>
                                <span>Are you sure you want to log out?</span>

                                <div>
                                    <button
                                        onClick={() => setShowLogout(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button className="confirm-logout">
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                )}

            </div>

        </div>
    );
}

export default Menu;