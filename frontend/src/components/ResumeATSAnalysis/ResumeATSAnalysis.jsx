import "./ResumeATSAnalysis.css";
import { useNavigate } from "react-router-dom";

function ResumeATSAnalysis() {
    const navigate = useNavigate();
    const matchedSkills = [
        "Python", "SQL", "Excel", "Pandas", "Statistics",
        "Data Analysis", "NumPy", "Matplotlib", "Problem Solving", "Data Cleaning"
    ];

    const missingSkills = [
        "Power BI", "Tableau", "Advanced Excel", "Data Visualization",
        "Business Intelligence", "Dashboarding", "ETL", "Data Modeling",
        "Big Data", "Looker / Qlik"
    ];

    const strongKeywords = [
        "SQL", "Python", "Data Analysis", "Excel",
        "Pandas", "Statistics", "Data Cleaning", "Visualization"
    ];

    const missingKeywords = [
        "Power BI", "Dashboard", "Business Intelligence",
        "Data Visualization", "Reporting", "Data Modeling", "ETL", "KPI"
    ];

    const improvements = [
        "Add measurable achievements in experience",
        "Improve keyword coverage for Data Analyst role",
        "Add missing technical skills (Power BI, Tableau, etc.)",
        "Add more data visualization projects",
        "Enhance project descriptions with impact"
    ];

    return (
        <div className="resume-page">

            <div className="resume-top">
                <div>
                    <h1>Resume ATS Analysis</h1>
                    <p>Detailed analysis of your resume for Data Analyst</p>
                </div>

                <button className="back-btn" onClick={() => navigate("/")}>
                    ← &nbsp; Back to Home
                </button>
            </div>

            {/* TOP SECTION */}
            <div className="top-section">

                {/* ATS SCORE */}
                <div className="ats-card">
                    <div className="ats-title">OVERALL ATS SCORE</div>

                    <div className="ats-circle">
                        <strong>82</strong>
                        <span>/100</span>
                    </div>

                    <h2>VERY GOOD</h2>

                    <div className="stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="gray-star">★</span>
                    </div>

                    <p className="score-message">
                        Your resume is well-optimized<br />
                        for the target role.
                    </p>
                </div>

                {/* RESUME INFORMATION */}
                <div className="info-card">
                    <div className="section-title blue">
                        <span>▣</span> RESUME INFORMATION
                    </div>

                    <div className="info-row">
                        <span>📄 &nbsp; Resume Name</span>
                        <strong>Khushi_Resume.pdf</strong>
                    </div>

                    <div className="info-row">
                        <span>🎯 &nbsp; Target Role</span>
                        <strong>Data Analyst</strong>
                    </div>

                    <div className="info-row">
                        <span>💼 &nbsp; Experience</span>
                        <strong>1.5 Years</strong>
                    </div>

                    <div className="info-row">
                        <span>🎓 &nbsp; Education</span>
                        <strong>B.Sc. Data Science & AI</strong>
                    </div>

                    <div className="info-row">
                        <span>📅 &nbsp; Analyzed On</span>
                        <strong>18 Aug 2026</strong>
                    </div>
                </div>
            </div>

            {/* SCORE CARDS */}
            <div className="score-cards">

                <ScoreCard icon="💼" title="EXPERIENCE MATCH" score="85%" type="blue" />
                <ScoreCard icon="🔑" title="KEYWORD MATCH" score="82%" type="green" />
                <ScoreCard icon="</>" title="SKILLS MATCH" score="80%" type="purple" />
                <ScoreCard icon="📄" title="FORMATTING" score="90%" type="orange" />
                <ScoreCard icon="🎓" title="EDUCATION MATCH" score="88%" type="teal" />

            </div>

            {/* JOB MATCH */}
            <div className="box job-match">
                <div className="section-title blue">
                    🎯 &nbsp; JOB MATCH / COMPATIBILITY
                </div>

                <p>
                    Your resume matches 82% of the requirements for the Data Analyst role.
                </p>

                <div className="job-progress">
                    <div></div>
                    <strong>82%</strong>
                </div>
            </div>

            {/* MATCHED + MISSING */}
            <div className="two-columns">

                <div className="box matched-box">
                    <div className="section-title green">
                        ● &nbsp; MATCHED SKILLS
                    </div>

                    <div className="skill-grid">
                        {matchedSkills.map((skill, index) => (
                            <div className="skill-item matched" key={index}>
                                <span>✓</span> {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="box missing-box">
                    <div className="section-title red">
                        ● &nbsp; MISSING SKILLS
                    </div>

                    <div className="skill-grid">
                        {missingSkills.map((skill, index) => (
                            <div className="skill-item missing" key={index}>
                                <span>!</span> {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* KEYWORD ANALYSIS */}
            <div className="box keyword-box">

                <div className="section-title blue">
                    🔑 &nbsp; KEYWORD ANALYSIS
                </div>

                <div className="keyword-columns">

                    <div>
                        <h3 className="green-text">STRONG KEYWORDS</h3>

                        <div className="keyword-list">
                            {strongKeywords.map((item, index) => (
                                <span className="keyword strong-keyword" key={index}>
                                    <b>✓</b> {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="red-text">MISSING KEYWORDS</h3>

                        <div className="keyword-list">
                            {missingKeywords.map((item, index) => (
                                <span className="keyword missing-keyword" key={index}>
                                    <b>!</b> {item}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* STRENGTHS + IMPROVE */}
            <div className="two-columns">

                <div className="box strength-box">
                    <div className="section-title green">
                        ★ &nbsp; RESUME STRENGTHS
                    </div>

                    {[
                        "Strong technical skills in Python, SQL and Excel",
                        "Relevant projects aligned with Data Analyst role",
                        "Good use of keywords related to data analysis",
                        "Clear education background in Data Science",
                        "Well-structured and easy to read"
                    ].map((item, index) => (
                        <div className="point-item strength-point" key={index}>
                            <span>✓</span>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="box improve-box">
                    <div className="section-title red">
                        ↗ &nbsp; AREAS TO IMPROVE
                    </div>

                    {improvements.map((item, index) => (
                        <div className="point-item improve-point" key={index}>
                            <span>!</span>
                            {item}
                        </div>
                    ))}
                </div>

            </div>

            {/* AI RECOMMENDATIONS */}
            <div className="box recommendations">

                <div className="section-title purple">
                    ✨ &nbsp; AI RECOMMENDATIONS
                </div>

                <div className="recommendation-grid">

                    <Recommendation number="1">
                        Add Power BI and Tableau to your technical skills.
                    </Recommendation>

                    <Recommendation number="2">
                        Add more Data Analyst related keywords.
                    </Recommendation>

                    <Recommendation number="3">
                        Include measurable achievements in experience.
                    </Recommendation>

                    <Recommendation number="4">
                        Add a data visualization project to your portfolio.
                    </Recommendation>

                    <Recommendation number="5">
                        Improve project descriptions with results and impact.
                    </Recommendation>

                </div>
            </div>

        </div>
    );
}

function ScoreCard({ icon, title, score, type }) {
    return (
        <div className={`score-card ${type}`}>
            <div className="score-icon">{icon}</div>
            <h3>{title}</h3>
            <strong>{score}</strong>

            <div className="mini-progress">
                <div style={{ width: score }}></div>
            </div>
        </div>
    );
}

function Recommendation({ number, children }) {
    return (
        <div className="recommendation">
            <span>{number}</span>
            <p>{children}</p>
        </div>
    );
}

export default ResumeATSAnalysis;