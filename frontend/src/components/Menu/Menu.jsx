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
    const [activeOption, setActiveOption] = useState("");

    const handleOption = (option) => {
        setActiveOption(activeOption === option ? "" : option);
    };

    return (
        <div>

            {/* MAIN MENU */}

            <div className="menu">

                <Link className="menu-link" to="/">
                    <FaHome />
                    Home
                </Link>

                <Link className="menu-link" to="/linkedin">
                    <FaLinkedin />
                    Linkedin Analysis
                </Link>

                <Link className="menu-link" to="/github">
                    <FaGithub />
                    GitHub Analysis
                </Link>

                <Link className="menu-link" to="/resume">
                    <FaFileAlt />
                    Resume ATS Analysis
                </Link>

                <Link className="menu-link" to="/dashboard">
                    <FaHome />
                    Dashboard Overview
                </Link>

            </div>

            <div className="divider"></div>

            {/* EXTRA MENU */}

            <div className="extra-menu">

                <Link className="menu-link" to="/reports">
                    <FaChartBar />
                    Reports
                </Link>

                <Link className="menu-link" to="/ai-roadmap">
                    <FaRoute />
                    AI Roadmap
                </Link>

                <Link className="menu-link" to="/skills-tracker">
                    <FaBullseye />
                    Skills Tracker
                </Link>

                <Link className="menu-link" to="/career-assistant">
                    <FaRobot />
                    Career Assistant
                </Link>

                <Link className="menu-link" to="/saved-analyses">
                    <FaSave />
                    Saved Analyses
                </Link>


                {/* SETTINGS BUTTON */}

                <button
                    className={`settings-button ${settingsOpen ? "settings-open" : ""}`}
                    onClick={() => {
                        setSettingsOpen(!settingsOpen);
                        setActiveOption("");
                    }}
                >
                    <FaCog />
                    <span>Settings</span>

                    <span className="settings-chevron">
                        {settingsOpen ? "⌃" : "⌄"}
                    </span>
                </button>


                {/* SETTINGS OPTIONS */}

                {settingsOpen && (

                    <div className="settings-options">

                        {/* PROFILE */}

                        <button
                            className={activeOption === "Profile" ? "option-active" : ""}
                            onClick={() => handleOption("Profile")}
                        >
                            <FaUser />
                            Profile
                        </button>

                        {activeOption === "Profile" && (
                            <div className="option-content">
                                <b>Profile</b>
                                <p>Manage your name, email and target job role.</p>
                            </div>
                        )}


                        {/* NOTIFICATIONS */}

                        <button
                            className={activeOption === "Notifications" ? "option-active" : ""}
                            onClick={() => handleOption("Notifications")}
                        >
                            <FaBell />
                            Notifications
                        </button>

                        {activeOption === "Notifications" && (
                            <div className="option-content">
                                <b>Notifications</b>
                                <p>Manage email and career notifications.</p>
                            </div>
                        )}


                        {/* PRIVACY */}

                        <button
                            className={activeOption === "Privacy" ? "option-active" : ""}
                            onClick={() => handleOption("Privacy")}
                        >
                            <FaLock />
                            Privacy
                        </button>

                        {activeOption === "Privacy" && (
                            <div className="option-content">
                                <b>Privacy</b>
                                <p>Manage your privacy and account security.</p>
                            </div>
                        )}


                        {/* APPEARANCE */}

                        <button
                            className={activeOption === "Appearance" ? "option-active" : ""}
                            onClick={() => handleOption("Appearance")}
                        >
                            <FaMoon />
                            Appearance
                        </button>

                        {activeOption === "Appearance" && (
                            <div className="option-content">
                                <b>Appearance</b>
                                <p>Customize the look and layout of the app.</p>
                            </div>
                        )}


                        {/* AI PREFERENCES */}

                        <button
                            className={activeOption === "AI Preferences" ? "option-active" : ""}
                            onClick={() => handleOption("AI Preferences")}
                        >
                            <FaBrain />
                            AI Preferences
                        </button>

                        {activeOption === "AI Preferences" && (
                            <div className="option-content">
                                <b>AI Preferences</b>
                                <p>Manage AI recommendations and learning suggestions.</p>
                            </div>
                        )}


                        {/* LOG OUT */}

                        <button
                            className="logout-option"
                            onClick={() => handleOption("Log Out")}
                        >
                            <FaSignOutAlt />
                            Log Out
                        </button>

                        {activeOption === "Log Out" && (
                            <div className="logout-content">
                                <b>Log Out?</b>
                                <p>Are you sure you want to log out?</p>

                                <div className="logout-buttons">
                                    <button
                                        onClick={() => setActiveOption("")}
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