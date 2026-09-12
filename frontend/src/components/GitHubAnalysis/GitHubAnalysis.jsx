import { useNavigate } from "react-router-dom";
import "./GitHubAnalysis.css";

function GitHubAnalysis() {
    const navigate = useNavigate();

    return (
        <div className="github-page">

            {/* ================= HEADER ================= */}

            <div className="github-head">

                <div className="github-title">
                    <h1>GitHub Analysis</h1>

                    <p>
                        Detailed analysis of your GitHub profile and repositories
                    </p>
                </div>

                <button
                    className="back-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Home
                </button>

            </div>


            {/* ================= TOP SECTION ================= */}

            <div className="github-top">

                {/* GITHUB SCORE CARD */}

                <div className="github-score-card">

                    <div className="github-score-left">

                        <h2>GitHub Score</h2>

                        <div className="github-score-circle">
                            <strong>78</strong>
                            <span>/ 100</span>
                        </div>

                        <b>Good</b>

                    </div>


                    {/* PROFILE INFORMATION */}

                    <div className="github-profile-info">

                        {/* USERNAME */}

                        <div className="profile-detail">

                            <div className="detail-icon github-icon">
                                ◉
                            </div>

                            <div>
                                <h3>GitHub Username</h3>

                                <p>
                                    khushi-maurya
                                </p>
                            </div>

                        </div>


                        {/* PROFILE URL */}

                        <div className="profile-detail">

                            <div className="detail-icon">
                                ↗
                            </div>

                            <div>
                                <h3>Profile URL</h3>

                                <p className="profile-url">
                                    github.com/khushi-maurya
                                </p>
                            </div>

                        </div>


                        {/* ANALYZED ON */}

                        <div className="profile-detail">

                            <div className="detail-icon">
                                ▣
                            </div>

                            <div>
                                <h3>Analyzed On</h3>

                                <p>
                                    16 Aug 2025, 10:30 AM
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= PROFILE OVERVIEW ================= */}

                <div className="profile-overview">

                    <h2>Profile Overview</h2>

                    <div className="overview-grid">

                        <div>
                            <strong>18</strong>
                            <span>Public Repos</span>
                        </div>

                        <div>
                            <strong>12</strong>
                            <span>Followers</span>
                        </div>

                        <div>
                            <strong>9</strong>
                            <span>Following</span>
                        </div>

                        <div>
                            <strong>156</strong>
                            <span>Total Commits</span>
                        </div>

                        <div>
                            <strong>6</strong>
                            <span>Pull Requests</span>
                        </div>

                        <div>
                            <strong>4</strong>
                            <span>Contributions This Month</span>
                        </div>

                    </div>

                </div>

            </div>


            {/* ================= MIDDLE SECTION ================= */}

            <div className="github-middle">

                {/* ================= REPOSITORY ANALYSIS ================= */}

                <div className="github-card">

                    <h2>📁 Repository Analysis</h2>

                    <div className="progress-item">
                        <span>Repository Quality</span>
                        <strong>80%</strong>
                    </div>

                    <div className="progress-item">
                        <span>README Quality</span>
                        <strong>75%</strong>
                    </div>

                    <div className="progress-item">
                        <span>Code Quality</span>
                        <strong>70%</strong>
                    </div>

                    <div className="progress-item">
                        <span>Project Structure</span>
                        <strong>75%</strong>
                    </div>

                    <div className="progress-item">
                        <span>Documentation</span>
                        <strong>70%</strong>
                    </div>

                </div>


                {/* ================= TOP LANGUAGES ================= */}

                <div className="github-card">

                    <h2>💻 Top Languages</h2>

                    <div className="language-chart">

                        {/* DONUT CHART */}

                        <div className="donut">

                            <strong>5</strong>

                            <span>
                                Languages
                            </span>

                        </div>


                        {/* LANGUAGE LIST */}

                        <div className="language-list">

                            <p>
                                <span>🔵 Python</span>
                                <strong>40%</strong>
                            </p>

                            <p>
                                <span>🟡 JavaScript</span>
                                <strong>25%</strong>
                            </p>

                            <p>
                                <span>🔴 HTML</span>
                                <strong>15%</strong>
                            </p>

                            <p>
                                <span>🟣 CSS</span>
                                <strong>10%</strong>
                            </p>

                            <p>
                                <span>⚪ Others</span>
                                <strong>10%</strong>
                            </p>

                        </div>

                    </div>

                </div>


                {/* ================= ACTIVITY ================= */}

                <div className="github-card">

                    <h2>📈 Activity & Contribution</h2>

                    <div className="activity-item">
                        <span>Total Contributions</span>
                        <strong>156</strong>
                    </div>

                    <div className="activity-item">
                        <span>Contributions This Month</span>
                        <strong>4</strong>
                    </div>

                    <div className="activity-item">
                        <span>Longest Streak</span>
                        <strong>12 days</strong>
                    </div>

                    <div className="activity-item">
                        <span>Recent Activity</span>
                        <strong>2 days ago</strong>
                    </div>

                </div>

            </div>


            {/* ================= STRENGTHS + IMPROVEMENTS ================= */}

            <div className="strength-improve">

                {/* STRENGTHS */}

                <div className="github-card strengths">

                    <h2>🟢 Top Strengths</h2>

                    <p>
                        ✓ Good number of public repositories
                    </p>

                    <p>
                        ✓ Consistent commit activity
                    </p>

                    <p>
                        ✓ Well written code in most repositories
                    </p>

                    <p>
                        ✓ Good use of README files
                    </p>

                    <p>
                        ✓ Active in multiple programming languages
                    </p>

                </div>


                {/* IMPROVEMENTS */}

                <div className="github-card improvements">

                    <h2>🟠 Areas to Improve</h2>

                    <p>
                        ! Increase contributions and commit frequency
                    </p>

                    <p>
                        ! Add more detailed documentation
                    </p>

                    <p>
                        ! Work on more collaborative projects
                    </p>

                    <p>
                        ! Improve code quality and best practices
                    </p>

                    <p>
                        ! Add more real-world projects
                    </p>

                </div>

            </div>


            {/* ================= AI RECOMMENDATIONS ================= */}

            <div className="ai-recommendations">

                <h2>✨ AI Recommendations</h2>

                <div className="recommendation-grid">

                    {/* RECOMMENDATION 1 */}

                    <div className="recommendation">

                        <span className="recommendation-number">
                            1
                        </span>

                        <div className="recommendation-content">

                            <h3>
                                Increase Contributions
                            </h3>

                            <p>
                                Push code regularly and maintain consistent
                                contribution activity.
                            </p>

                        </div>

                    </div>


                    {/* RECOMMENDATION 2 */}

                    <div className="recommendation">

                        <span className="recommendation-number">
                            2
                        </span>

                        <div className="recommendation-content">

                            <h3>
                                Improve Documentation
                            </h3>

                            <p>
                                Add detailed README files and clear code comments.
                            </p>

                        </div>

                    </div>


                    {/* RECOMMENDATION 3 */}

                    <div className="recommendation">

                        <span className="recommendation-number">
                            3
                        </span>

                        <div className="recommendation-content">

                            <h3>
                                Collaborate More
                            </h3>

                            <p>
                                Contribute to open-source projects to increase visibility.
                            </p>

                        </div>

                    </div>


                    {/* RECOMMENDATION 4 */}

                    <div className="recommendation">

                        <span className="recommendation-number">
                            4
                        </span>

                        <div className="recommendation-content">

                            <h3>
                                Build More Projects
                            </h3>

                            <p>
                                Build diverse projects to showcase your skills and expertise.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default GitHubAnalysis;