import "./AIRoadmap.css";
import { useState } from "react";
import {
    FiTarget,
    FiClock,
    FiBookOpen,
    FiArrowRight,
    FiTrendingUp,
    FiHelpCircle,
    FiSearch,
    FiBell,
    FiChevronDown,
    FiCheckCircle
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AIRoadmap() {

    const [activeTab, setActiveTab] = useState("roadmap");
    const [search, setSearch] = useState("");
    const [selectedStage, setSelectedStage] = useState(null);
    const [showTip, setShowTip] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const navigate = useNavigate();

    const stages = [
        {
            id: 1,
            title: "Python Basics & Data Analysis",
            level: "Beginner",
            description: "Build a strong foundation in Python and learn how to work with real-world datasets.",
            duration: "4–6 weeks",
            tools: "Python, Jupyter, Pandas",
            topics: "Variables, data types, loops, functions, lists, dictionaries, NumPy, Pandas and data cleaning.",
            practice: "Solve Python problems and analyze small datasets using Pandas.",
            project: "Build a Student Performance or Sales Data Analysis project.",
            outcome: "You will be able to clean, analyze and summarize datasets using Python."
        },
        {
            id: 2,
            title: "SQL & Database Management",
            level: "Intermediate",
            description: "Master SQL queries and learn how to retrieve and analyze data from databases.",
            duration: "3–4 weeks",
            tools: "MySQL, PostgreSQL",
            topics: "SELECT, WHERE, GROUP BY, ORDER BY, JOIN, subqueries, aggregate functions and database concepts.",
            practice: "Practice SQL queries using employee, customer and sales datasets.",
            project: "Create a Sales Database and write analytical SQL queries.",
            outcome: "You will be able to extract meaningful information from databases using SQL."
        },
        {
            id: 3,
            title: "Data Visualization",
            level: "Intermediate",
            description: "Learn to turn raw data into clear and meaningful dashboards and visual stories.",
            duration: "3–4 weeks",
            tools: "Power BI, Tableau, Matplotlib",
            topics: "Charts, dashboards, filters, KPIs, data storytelling and dashboard design.",
            practice: "Create dashboards using sales, customer and business datasets.",
            project: "Build an interactive Sales Performance Dashboard.",
            outcome: "You will be able to present insights clearly through professional visualizations."
        },
        {
            id: 4,
            title: "Advanced Analytics & Projects",
            level: "Advanced",
            description: "Apply your skills to real-world problems and build strong projects for your portfolio.",
            duration: "4–6 weeks",
            tools: "Pandas, Excel, Power BI, Projects",
            topics: "EDA, advanced data cleaning, Excel analytics, trend analysis and business insights.",
            practice: "Analyze real-world datasets and identify trends, patterns and business problems.",
            project: "Build a complete end-to-end Data Analyst portfolio project.",
            outcome: "You will have practical project experience that you can showcase on your resume."
        },
        {
            id: 5,
            title: "Interview Preparation & Career Growth",
            level: "Advanced",
            description: "Prepare for Data Analyst interviews and develop the skills required to become job-ready.",
            duration: "2–3 weeks",
            tools: "Mock Interviews, Resume, Soft Skills",
            topics: "SQL interview questions, Python, Excel, case studies, resume and communication.",
            practice: "Solve interview questions and participate in mock interview sessions.",
            project: "Prepare your portfolio, resume and a strong project presentation.",
            outcome: "You will be better prepared for Data Analyst internships and job interviews."
        }
    ];

    const filteredStages = stages.filter((stage) =>
        stage.title.toLowerCase().includes(search.toLowerCase()) ||
        stage.description.toLowerCase().includes(search.toLowerCase()) ||
        stage.topics.toLowerCase().includes(search.toLowerCase()) ||
        stage.tools.toLowerCase().includes(search.toLowerCase())
    );

    const handleViewDetails = (stage) => {
        if (selectedStage?.id === stage.id) {
            setSelectedStage(null);
        } else {
            setSelectedStage(stage);
        }
    };

    return (
        <div className="ai-roadmap-page">

            {/* NAVBAR */}
            <div className="roadmap-navbar">

                <div className="roadmap-search">
                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search roadmap, skills, resources..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

               <div className="roadmap-nav-right">
                   <div className="welcome-user">
                       <div>
                           <h3>Welcome, Khushi! 👋</h3>
                           <p>Keep learning, keep growing.</p>
                        </div>
                        <div className="roadmap-profile">K</div>
                    </div>
                </div>
            </div>


            {/* HEADER */}
            <div className="roadmap-header">

                <div className="roadmap-title">

                    <div className="roadmap-main-icon">
                        <FiTrendingUp />
                    </div>

                    <div>
                        <h1>AI Roadmap</h1>

                        <p>
                            Your personalized learning path to achieve your career goals.
                        </p>
                    </div>

                </div>

            </div>


            <div className="roadmap-layout">

                <div className="roadmap-main">


                    {/* CAREER GOAL */}
                    <div className="career-goal-card">

                        <div className="target-section">

                            <FiTarget className="target-icon" />

                            <div>

                                <span>Target Role</span>

                                <h2>Data Analyst</h2>

                                <div className="based-on">
                                    Based on your LinkedIn, GitHub & Resume analysis
                                </div>

                            </div>

                        </div>


                        <div className="goal-description">

                            <p>
                                Your roadmap is designed to help you build the right
                                skills, enhance your portfolio and get ready for your
                                dream job.
                            </p>

                            <div className="rocket">
                                🚀
                            </div>

                        </div>

                    </div>


                    {/* TABS */}
                    <div className="roadmap-tabs">

                        <button
                            className={activeTab === "roadmap" ? "active-tab" : ""}
                            onClick={() => setActiveTab("roadmap")}
                        >
                            <FiTrendingUp />
                            Learning Roadmap
                        </button>

                        <button
                            className={activeTab === "skills" ? "active-tab" : ""}
                            onClick={() => setActiveTab("skills")}
                        >
                            <FiTarget />
                            Skills to Focus
                        </button>

                        <button
                            className={activeTab === "resources" ? "active-tab" : ""}
                            onClick={() => setActiveTab("resources")}
                        >
                            <FiBookOpen />
                            Resources
                        </button>

                        <button
                            className={activeTab === "timeline" ? "active-tab" : ""}
                            onClick={() => setActiveTab("timeline")}
                        >
                            <FiClock />
                            Timeline
                        </button>

                    </div>


                    {/* LEARNING ROADMAP */}
                    {activeTab === "roadmap" && (

                        <div className="roadmap-stages">

                            <div className="roadmap-line"></div>

                            {filteredStages.length > 0 ? (

                                filteredStages.map((stage) => (

                                    <div key={stage.id}>

                                        <div className={`roadmap-stage ${stage.color || "blue"}-stage`}>

                                            <div className={`stage-number ${stage.color || "blue"}-number`}>
                                                {stage.id}
                                            </div>


                                            <div className="stage-content">

                                                <div className="stage-heading">

                                                    <h2>
                                                        {stage.title}
                                                    </h2>

                                                    <span className={`level-${stage.color || "blue"}`}>
                                                        {stage.level}
                                                    </span>

                                                </div>


                                                <p>
                                                    {stage.description}
                                                </p>


                                                <div className="stage-info">

                                                    <span>
                                                        <FiClock />
                                                        {stage.duration}
                                                    </span>

                                                    <span>
                                                        <FiBookOpen />
                                                        {stage.tools}
                                                    </span>

                                                </div>

                                            </div>


                                            <button
                                                className="details-btn"
                                                onClick={() => handleViewDetails(stage)}
                                            >
                                                {selectedStage?.id === stage.id
                                                    ? "Hide Details"
                                                    : "View Details"
                                                }

                                                <FiArrowRight />

                                            </button>

                                        </div>


                                        {/* DETAILS */}
                                        {selectedStage?.id === stage.id && (

                                            <div className="stage-details">

                                                <h3>
                                                    📚 What You'll Learn
                                                </h3>

                                                <p>
                                                    {stage.topics}
                                                </p>


                                                <h3>
                                                    📝 Practice
                                                </h3>

                                                <p>
                                                    {stage.practice}
                                                </p>


                                                <h3>
                                                    🚀 Mini Project
                                                </h3>

                                                <p>
                                                    {stage.project}
                                                </p>


                                                <h3>
                                                    ✅ Expected Outcome
                                                </h3>

                                                <p>
                                                    {stage.outcome}
                                                </p>


                                                <div className="detail-list">

                                                    <div>
                                                        <FiCheckCircle />
                                                        Learn the core concepts
                                                    </div>

                                                    <div>
                                                        <FiCheckCircle />
                                                        Practice with real datasets
                                                    </div>

                                                    <div>
                                                        <FiCheckCircle />
                                                        Build a portfolio project
                                                    </div>

                                                    <div>
                                                        <FiCheckCircle />
                                                        Complete the stage assessment
                                                    </div>

                                                </div>

                                            </div>

                                        )}

                                    </div>

                                ))

                            ) : (

                                <div className="no-roadmap-results">
                                    No roadmap results found.
                                </div>

                            )}

                        </div>

                    )}


                    {/* SKILLS TO FOCUS */}
                    {activeTab === "skills" && (

                        <div className="tab-content-card">

                            <h2>
                                🎯 Skills to Focus
                            </h2>

                            <p>
                                These are the most important skills you should focus on
                                for your Data Analyst career.
                            </p>


                            <div className="focus-skills">

                                <div className="focus-skill">
                                    <strong>Python</strong>
                                    <span>High Priority</span>
                                    <p>Learn Python fundamentals, Pandas, NumPy and data cleaning.</p>
                                    <div>
                                        <b style={{ width: "85%" }}></b>
                                    </div>
                                </div>


                                <div className="focus-skill">
                                    <strong>SQL</strong>
                                    <span>High Priority</span>
                                    <p>Practice queries, joins, subqueries and aggregation.</p>
                                    <div>
                                        <b style={{ width: "80%" }}></b>
                                    </div>
                                </div>


                                <div className="focus-skill">
                                    <strong>Pandas</strong>
                                    <span>High Priority</span>
                                    <p>Learn data cleaning, filtering, grouping and analysis.</p>
                                    <div>
                                        <b style={{ width: "75%" }}></b>
                                    </div>
                                </div>


                                <div className="focus-skill">
                                    <strong>Power BI</strong>
                                    <span>Medium Priority</span>
                                    <p>Build dashboards, KPIs and interactive reports.</p>
                                    <div>
                                        <b style={{ width: "60%" }}></b>
                                    </div>
                                </div>


                                <div className="focus-skill">
                                    <strong>Excel</strong>
                                    <span>Medium Priority</span>
                                    <p>Practice Pivot Tables, VLOOKUP, charts and formulas.</p>
                                    <div>
                                        <b style={{ width: "55%" }}></b>
                                    </div>
                                </div>


                                <div className="focus-skill">
                                    <strong>Data Visualization</strong>
                                    <span>Medium Priority</span>
                                    <p>Learn how to communicate insights using charts and dashboards.</p>
                                    <div>
                                        <b style={{ width: "65%" }}></b>
                                    </div>
                                </div>

                            </div>

                        </div>

                    )}


                    {/* RESOURCES */}
                    {activeTab === "resources" && (

                        <div className="tab-content-card">

                            <h2>
                                📚 Recommended Resources
                            </h2>

                            <p>
                                Use these resources to strengthen your skills and complete
                                the roadmap.
                            </p>


                            <div className="resource-grid">

                                <div className="resource-card">
                                    <h3>🐍 Python</h3>
                                    <p>
                                        Learn Python basics, Pandas, NumPy and data analysis.
                                        Practice coding with small datasets.
                                    </p>
                                    <button onClick={() => window.open("https://www.w3schools.com/python/", "_blank")}>
                                        Explore Resources
                                        <FiArrowRight />
                                    </button>
                                </div>


                                <div className="resource-card">
                                    <h3>🗄️ SQL</h3>
                                    <p>
                                        Practice SELECT, JOIN, GROUP BY, subqueries and
                                        real-world database problems.
                                    </p>
                                    <button onClick={() => window.open("https://www.w3schools.com/sql/", "_blank")}>
                                        Explore Resources
                                        <FiArrowRight />
                                    </button>
                                </div>


                                <div className="resource-card">
                                    <h3>📊 Power BI</h3>
                                    <p>
                                        Learn dashboard creation, data modeling, charts,
                                        filters and business KPIs.
                                    </p>
                                    <button onClick={() => window.open("https://learn.microsoft.com/en-us/training/powerplatform/power-bi/", "_blank")}>
                                        Explore Resources
                                        <FiArrowRight />
                                    </button>
                                </div>


                                <div className="resource-card">
                                    <h3>📈 Excel</h3>
                                    <p>
                                        Practice Pivot Tables, VLOOKUP, XLOOKUP, charts,
                                        formulas and data cleaning.
                                    </p>
                                    <button onClick={() => window.open("https://support.microsoft.com/en-us/excel", "_blank")}>
                                        Explore Resources
                                        <FiArrowRight />
                                    </button>
                                </div>


                                <div className="resource-card">
                                    <h3>📊 Data Visualization</h3>
                                    <p>
                                        Learn how to choose the right chart and communicate
                                        business insights effectively.
                                    </p>
                                    <button  onClick={() => window.open("https://www.tableau.com/learn", "_blank")}>
                                        Explore Resources
                                        <FiArrowRight />
                                    </button>
                                </div>


                                <div className="resource-card">
                                    <h3>💼 Projects</h3>
                                    <p>
                                        Build real-world projects using sales, IPL, Netflix
                                        or customer datasets.
                                    </p>
                                    <button  onClick={() => window.open("https://github.com/topics/data-analysis", "_blank")}>
                                        Explore Resources
                                        <FiArrowRight />
                                    </button>
                                </div>

                            </div>

                        </div>

                    )}


                    {/* TIMELINE */}
                    {activeTab === "timeline" && (

                        <div className="tab-content-card">

                            <h2>
                                ⏱️ Your Learning Timeline
                            </h2>

                            <p>
                                Estimated roadmap duration:
                                <strong> 16–23 weeks</strong>.
                                Follow each milestone at your own pace.
                            </p>


                            <div className="timeline-list">

                                <div>
                                    <span>1</span>

                                    <div>
                                        <h3>Python Basics & Data Analysis</h3>
                                        <p>
                                            Week 1–6: Python fundamentals, Pandas,
                                            NumPy and data cleaning.
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <span>2</span>

                                    <div>
                                        <h3>SQL & Databases</h3>
                                        <p>
                                            Week 7–10: SQL queries, joins,
                                            subqueries and database practice.
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <span>3</span>

                                    <div>
                                        <h3>Data Visualization</h3>
                                        <p>
                                            Week 11–14: Power BI, Tableau,
                                            charts and dashboards.
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <span>4</span>

                                    <div>
                                        <h3>Advanced Analytics & Projects</h3>
                                        <p>
                                            Week 15–20: EDA, real-world datasets
                                            and portfolio projects.
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <span>5</span>

                                    <div>
                                        <h3>Interview Preparation</h3>
                                        <p>
                                            Week 21–23: SQL/Python interview questions,
                                            resume and mock interviews.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    )}

                </div>


                {/* RIGHT SIDEBAR */}
                <div className="roadmap-sidebar">


                    {/* PROGRESS */}
                    <div className="progress-card">

                        <h2>
                            <FiTrendingUp />
                            Your Progress
                        </h2>


                        <div className="progress-top">

                            <div className="progress-circle">

                                <div>
                                    <strong>20%</strong>
                                </div>

                            </div>


                            <div>

                                <span>
                                    Current Stage
                                </span>

                                <h3>
                                    Python Basics &
                                    <br />
                                    Data Analysis
                                </h3>

                            </div>

                        </div>


                        <div className="progress-bar">
                            <div></div>
                        </div>


                        <p>
                            1 of 5 stages completed
                        </p>

                    </div>


                    {/* KEY SKILLS */}
                    <div className="skills-card">

                        <h2>
                            <FiTarget />
                            Key Skills to Build
                        </h2>


                        <div className="skill-tags">

                            <span>Python</span>
                            <span>SQL</span>
                            <span>Pandas</span>
                            <span>Power BI</span>
                            <span>Tableau</span>
                            <span>Excel</span>
                            <span>Data Visualization</span>
                            <span>Problem Solving</span>
                            <span>Statistics</span>
                            <span>Communication</span>

                        </div>

                    </div>


                    {/* PRO TIP */}
                    <button
                        className={`pro-tip-card ${showTip ? "tip-open" : ""}`}
                        onClick={() => setShowTip(!showTip)}
                    >

                        <h2>
                            💡 Pro Tip
                        </h2>

                        <p>
                            {showTip
                                ? "Try to spend at least 1–2 hours every day learning and building practical projects. Create small projects after every major skill and add your best projects to GitHub."
                                : "Consistency is more important than perfection. Keep learning, keep building!"
                            }
                        </p>

                        <FiArrowRight />

                    </button>


                    {/* NEED HELP */}
                    <button
                        className={`help-card ${showHelp ? "help-open" : ""}`}
                        onClick={() => navigate("/career-assistant")}
                    >

                        <div className="help-icon">
                            <FiHelpCircle />
                        </div>


                        <div>

                            <h2>
                                Need Help?
                            </h2>

                            <p>
                                {showHelp
                                    ? "You can ask the AI Career Assistant about skills, projects, interview preparation, resume improvement and your Data Analyst career path."
                                    : "Ask our AI Career Assistant"
                                }
                            </p>

                        </div>


                        <FiArrowRight />

                    </button>

                </div>

            </div>

        </div>
    );
}

export default AIRoadmap;