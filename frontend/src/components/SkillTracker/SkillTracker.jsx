import "./SkillTracker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiBookOpen,
    FiCheckCircle,
    FiClock,
    FiPlus,
    FiArrowRight,
    FiBarChart2,
    FiX,
    FiTarget
} from "react-icons/fi";

function SkillTracker() {

    const navigate = useNavigate();

    const [skills, setSkills] = useState([
        { name: "Python", category: "Programming", progress: 80, status: "In Progress", icon: "🐍" },
        { name: "SQL", category: "Database", progress: 90, status: "In Progress", icon: "🗄️" },
        { name: "Pandas", category: "Data Analysis", progress: 70, status: "In Progress", icon: "🐼" },
        { name: "Excel", category: "Tools", progress: 100, status: "Completed", icon: "📊" },
        { name: "Power BI", category: "Visualization", progress: 60, status: "In Progress", icon: "📈" },
        { name: "Tableau", category: "Visualization", progress: 30, status: "In Progress", icon: "📉" },
        { name: "Machine Learning", category: "AI/ML", progress: 20, status: "Not Started", icon: "🧠" },
        { name: "Streamlit", category: "Web Apps", progress: 50, status: "In Progress", icon: "🚀" }
    ]);

    const [selectedSkill, setSelectedSkill] = useState(null);
    const [showAddSkill, setShowAddSkill] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [selectedPath, setSelectedPath] = useState(null);

    const [newSkill, setNewSkill] = useState({
        name: "",
        category: "Programming",
        progress: 0
    });

    const activities = [
        { icon: "✓", title: "Completed Excel Basics", time: "2 days ago" },
        { icon: "▶", title: "Started SQL Practice", time: "3 days ago" },
        { icon: "✓", title: "Completed Python Basics", time: "5 days ago" },
        { icon: "+", title: "Added new skill: Machine Learning", time: "1 week ago" },
        { icon: "✓", title: "Completed Pandas Basics", time: "1 week ago" },
        { icon: "▶", title: "Started Power BI Learning", time: "2 weeks ago" }
    ];

    const learningPath = [
        {
            title: "Python Basics",
            status: "Completed",
            description: "Learn Python fundamentals, variables, loops, functions and data structures."
        },
        {
            title: "SQL & Database",
            status: "Completed",
            description: "Practice SQL queries, joins, filtering, grouping and database concepts."
        },
        {
            title: "Data Analysis with Pandas",
            status: "In Progress",
            description: "Learn data cleaning, DataFrame operations and exploratory data analysis."
        },
        {
            title: "Data Visualization",
            status: "Not Started",
            description: "Learn Power BI and Tableau to create professional dashboards."
        }
    ];

    const completed = skills.filter(skill => skill.status === "Completed").length;
    const inProgress = skills.filter(skill => skill.status === "In Progress").length;
    const notStarted = skills.filter(skill => skill.status === "Not Started").length;

    const completedPercent = skills.length
        ? Math.round((completed / skills.length) * 100)
        : 0;

    const addSkill = () => {

        if (!newSkill.name.trim()) return;

        const progress = Number(newSkill.progress);

        const newItem = {
            name: newSkill.name,
            category: newSkill.category,
            progress: progress,
            status:
                progress === 100
                    ? "Completed"
                    : progress === 0
                    ? "Not Started"
                    : "In Progress",
            icon: "⭐"
        };

        setSkills([...skills, newItem]);

        setNewSkill({
            name: "",
            category: "Programming",
            progress: 0
        });

        setShowAddSkill(false);
    };

    return (
        <div className="skill-page">

            {/* HEADER */}

            <div className="skill-header">

                <div className="skill-title">
                    <div className="skill-main-icon">
                        <FiTarget />
                    </div>

                    <div>
                        <h1>Skill Tracker</h1>
                        <p>
                            Track your learning progress and build your skills step by step.
                        </p>
                    </div>
                </div>

                <div className="skill-header-right">
                    <div className="updated-card">
                        <span>▣</span>
                        <div>
                            <small>Last Updated</small>
                            <b>12 Sep 2026</b>
                        </div>
                    </div>

                    <div className="motivation-card">
                        ✨
                        <span>Small steps create<br />big results!</span>
                    </div>
                </div>

            </div>


            {/* SUMMARY CARDS */}

            <div className="skill-summary">

                <div className="summary-card blue-card">
                    <div className="summary-icon">
                        <FiBookOpen />
                    </div>

                    <div>
                        <span>Total Skills</span>
                        <h2>{skills.length}</h2>
                        <small>You are learning</small>
                    </div>
                </div>

                <div className="summary-card green-card">
                    <div className="summary-icon">
                        <FiCheckCircle />
                    </div>

                    <div>
                        <span>Completed</span>
                        <h2>{completed}</h2>
                        <small>{skills.length ? Math.round((completed / skills.length) * 100) : 0}% of total</small>
                    </div>
                </div>

                <div className="summary-card orange-card">
                    <div className="summary-icon">
                        <FiClock />
                    </div>

                    <div>
                        <span>In Progress</span>
                        <h2>{inProgress}</h2>
                        <small>{skills.length ? Math.round((inProgress / skills.length) * 100) : 0}% of total</small>
                    </div>
                </div>

                <div className="summary-card purple-card">
                    <div className="summary-icon">
                        <FiClock />
                    </div>

                    <div>
                        <span>Not Started</span>
                        <h2>{notStarted}</h2>
                        <small>{skills.length ? Math.round((notStarted / skills.length) * 100) : 0}% of total</small>
                    </div>
                </div>

            </div>


            {/* MAIN GRID */}

            <div className="skill-main-grid">

                {/* LEFT */}

                <div>

                    {/* MY SKILLS */}

                    <div className="skills-card-main">

                        <div className="section-heading">

                            <div>
                                <h2>
                                    <FiBarChart2 /> My Skills
                                </h2>

                                <p>
                                    Track your progress in different technologies and tools.
                                </p>
                            </div>

                            <button
                                className="add-skill-btn"
                                onClick={() => setShowAddSkill(true)}
                            >
                                <FiPlus /> Add Skill
                            </button>

                        </div>


                        <div className="skills-table">

                            <div className="table-head">
                                <span>Skill</span>
                                <span>Category</span>
                                <span>Progress</span>
                                <span>Status</span>
                                <span>Action</span>
                            </div>


                            {skills.map((skill, index) => (

                                <div className="skill-row" key={index}>

                                    <div className="skill-name">
                                        <span className="skill-emoji">
                                            {skill.icon}
                                        </span>
                                        {skill.name}
                                    </div>

                                    <div>
                                        <span className="category-tag">
                                            {skill.category}
                                        </span>
                                    </div>

                                    <div className="progress-cell">

                                        <div className="progress-track">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${skill.progress}%` }}
                                            ></div>
                                        </div>

                                        <span>{skill.progress}%</span>

                                    </div>

                                    <div>
                                        <span
                                            className={`status-tag ${
                                                skill.status === "Completed"
                                                    ? "completed-status"
                                                    : skill.status === "Not Started"
                                                    ? "not-started-status"
                                                    : "progress-status"
                                            }`}
                                        >
                                            {skill.status}
                                        </span>
                                    </div>

                                    <div>
                                        <button
                                            className="view-btn"
                                            onClick={() => setSelectedSkill(skill)}
                                        >
                                            View <FiArrowRight />
                                        </button>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* RECENT ACTIVITY */}

                    <div className="activity-card">

                        <div className="activity-heading">

                            <div>
                                <h2>
                                    <FiClock /> Recent Activity
                                </h2>

                                <p>Your latest learning updates.</p>
                            </div>

                            <button
                                className="view-all-btn"
                                onClick={() => setShowActivities(true)}
                            >
                                View All <FiArrowRight />
                            </button>

                        </div>


                        <div className="activity-list">

                            {activities.slice(0, 4).map((activity, index) => (

                                <div className="activity-item" key={index}>

                                    <div className="activity-icon">
                                        {activity.icon}
                                    </div>

                                    <div>
                                        <strong>{activity.title}</strong>
                                        <span>{activity.time}</span>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>


                {/* RIGHT */}

                <div>

                    {/* OVERALL PROGRESS */}

                    <div className="overall-card">

                        <h2>
                            <FiBarChart2 /> Overall Progress
                        </h2>

                        <div className="overall-content">

                            <div
                                className="progress-circle-large"
                                style={{
                                    background: `conic-gradient(#2563eb ${completedPercent * 3.6}deg, #e2e8f0 0deg)`
                                }}
                            >
                                <div>
                                    <strong>{completedPercent}%</strong>
                                    <span>Completed</span>
                                </div>
                            </div>

                            <div className="progress-legend">

                                <p>
                                    <i className="dot completed-dot"></i>
                                    Completed
                                    <b>{completed}</b>
                                </p>

                                <p>
                                    <i className="dot progress-dot"></i>
                                    In Progress
                                    <b>{inProgress}</b>
                                </p>

                                <p>
                                    <i className="dot notstarted-dot"></i>
                                    Not Started
                                    <b>{notStarted}</b>
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* LEARNING PATH */}

                    <div className="learning-card">

                        <div className="learning-heading">

                            <div>
                                <h2>
                                    <FiTarget /> Learning Path
                                </h2>

                                <p>
                                    Your personalized roadmap to get job ready.
                                </p>
                            </div>

                            <button
                                onClick={() => navigate("/ai-roadmap")}
                                className="roadmap-btn"
                            >
                                View Roadmap <FiArrowRight />
                            </button>

                        </div>


                        <div className="path-list">

                            {learningPath.map((path, index) => (

                                <button
                                    className="path-item"
                                    key={index}
                                    onClick={() => setSelectedPath(path)}
                                >

                                    <div
                                        className={`path-circle ${
                                            path.status === "Completed"
                                                ? "path-completed"
                                                : path.status === "In Progress"
                                                ? "path-progress"
                                                : "path-empty"
                                        }`}
                                    >
                                        {path.status === "Completed" ? "✓" : ""}
                                    </div>

                                    <div className="path-info">
                                        <strong>{path.title}</strong>

                                        <span
                                            className={
                                                path.status === "Completed"
                                                    ? "path-green"
                                                    : path.status === "In Progress"
                                                    ? "path-orange"
                                                    : "path-gray"
                                            }
                                        >
                                            {path.status}
                                        </span>
                                    </div>

                                    <FiArrowRight />

                                </button>

                            ))}

                        </div>

                    </div>


                    {/* KEEP GOING */}

                    <div className="keep-going">

                        <div>
                            <h2>Keep going!</h2>

                            <p>
                                You're doing great. Every skill you learn
                                brings you closer to your dream career.
                            </p>
                        </div>

                        <span>🚩</span>

                    </div>

                </div>

            </div>


            {/* SKILL DETAILS MODAL */}

            {selectedSkill && (

                <div className="modal-overlay">

                    <div className="modal-box">

                        <button
                            className="close-btn"
                            onClick={() => setSelectedSkill(null)}
                        >
                            <FiX />
                        </button>

                        <div className="modal-icon">
                            {selectedSkill.icon}
                        </div>

                        <h2>{selectedSkill.name}</h2>

                        <span className="modal-category">
                            {selectedSkill.category}
                        </span>

                        <div className="modal-progress">

                            <div className="modal-progress-head">
                                <span>Current Progress</span>
                                <b>{selectedSkill.progress}%</b>
                            </div>

                            <div className="modal-track">
                                <div
                                    style={{
                                        width: `${selectedSkill.progress}%`
                                    }}
                                ></div>
                            </div>

                        </div>

                        <h3>Learning Details</h3>

                        <p>
                            Continue learning {selectedSkill.name} and practice
                            real-world problems to improve your skill level.
                        </p>

                        <button
                            className="modal-action"
                            onClick={() => setSelectedSkill(null)}
                        >
                            Continue Learning <FiArrowRight />
                        </button>

                    </div>

                </div>

            )}


            {/* ADD SKILL MODAL */}

            {showAddSkill && (

                <div className="modal-overlay">

                    <div className="modal-box">

                        <button
                            className="close-btn"
                            onClick={() => setShowAddSkill(false)}
                        >
                            <FiX />
                        </button>

                        <h2>Add New Skill</h2>

                        <p className="modal-subtitle">
                            Add a skill that you want to track.
                        </p>

                        <label>Skill Name</label>

                        <input
                            type="text"
                            placeholder="e.g. Python"
                            value={newSkill.name}
                            onChange={(e) =>
                                setNewSkill({
                                    ...newSkill,
                                    name: e.target.value
                                })
                            }
                        />

                        <label>Category</label>

                        <select
                            value={newSkill.category}
                            onChange={(e) =>
                                setNewSkill({
                                    ...newSkill,
                                    category: e.target.value
                                })
                            }
                        >
                            <option>Programming</option>
                            <option>Database</option>
                            <option>Data Analysis</option>
                            <option>Visualization</option>
                            <option>AI/ML</option>
                            <option>Web Apps</option>
                            <option>Tools</option>
                        </select>

                        <label>Progress: {newSkill.progress}%</label>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={newSkill.progress}
                            onChange={(e) =>
                                setNewSkill({
                                    ...newSkill,
                                    progress: e.target.value
                                })
                            }
                        />

                        <button
                            className="modal-action"
                            onClick={addSkill}
                        >
                            Add Skill <FiPlus />
                        </button>

                    </div>

                </div>

            )}


            {/* ALL ACTIVITIES MODAL */}

            {showActivities && (

                <div className="modal-overlay">

                    <div className="modal-box activity-modal">

                        <button
                            className="close-btn"
                            onClick={() => setShowActivities(false)}
                        >
                            <FiX />
                        </button>

                        <h2>All Recent Activities</h2>

                        <p className="modal-subtitle">
                            Your complete learning activity history.
                        </p>

                        <div className="all-activities">

                            {activities.map((activity, index) => (

                                <div className="all-activity-item" key={index}>

                                    <div className="activity-icon">
                                        {activity.icon}
                                    </div>

                                    <div>
                                        <strong>{activity.title}</strong>
                                        <span>{activity.time}</span>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            )}


            {/* LEARNING PATH DETAILS */}

            {selectedPath && (

                <div className="modal-overlay">

                    <div className="modal-box">

                        <button
                            className="close-btn"
                            onClick={() => setSelectedPath(null)}
                        >
                            <FiX />
                        </button>

                        <div className="modal-icon">
                            🎯
                        </div>

                        <h2>{selectedPath.title}</h2>

                        <span className="modal-category">
                            {selectedPath.status}
                        </span>

                        <h3>About this stage</h3>

                        <p>{selectedPath.description}</p>

                        <h3>What you'll learn</h3>

                        <p>
                            Practical concepts, exercises and real-world
                            tasks to help you become job ready.
                        </p>

                        <button
                            className="modal-action"
                            onClick={() => setSelectedPath(null)}
                        >
                            Start Learning <FiArrowRight />
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}

export default SkillTracker;