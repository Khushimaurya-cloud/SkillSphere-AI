import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Your complete career analysis at a glance</p>
        </div>

        <div className="welcome">
          <div>
            <strong>Welcome, Khushi! 👋</strong>
            <span>Keep learning, keep growing.</span>
          </div>
          <div className="avatar">K</div>
        </div>
      </header>

      {/* SCORE CARDS */}
      <div className="score-grid">

        {/* LINKEDIN */}
        <div className="score-card blue">
          <div className="score-icon">in</div>

          <div className="score-info">
            <h3>LinkedIn Score ⓘ</h3>

            <div className="score-number">
              82 <span>/100</span>
            </div>

            <b>Very Good</b>
          </div>

          <div className="score-circle"></div>
        </div>

        {/* GITHUB */}
        <div className="score-card green">
          <div className="score-icon">
            <svg viewBox="0 0 24 24" className="github-svg">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.69-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.8 10.8 0 0 1 12 6.14c.97 0 1.94.13 2.85.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </div>

          <div className="score-info">
            <h3>GitHub Score ⓘ</h3>

            <div className="score-number">
              78 <span>/100</span>
            </div>

            <b>Good</b>
          </div>

          <div className="score-circle"></div>
        </div>

        {/* RESUME ATS */}
        <div className="score-card purple">
          <div className="score-icon">▤</div>

          <div className="score-info">
            <h3>Resume ATS Score ⓘ</h3>

            <div className="score-number">
              82 <span>/100</span>
            </div>

            <b>Very Good</b>
          </div>

          <div className="score-circle"></div>
        </div>

        {/* OVERALL */}
        <div className="score-card orange">
          <div className="score-icon">🏆</div>

          <div className="score-info">
            <h3>Overall Career Score ⓘ</h3>

            <div className="score-number">
              81 <span>/100</span>
            </div>

            <b>Very Good</b>
          </div>

          <div className="score-circle"></div>
        </div>

      </div>

      {/* PROFILE + SKILLS */}
      <section className="main-grid">

        {/* CAREER PROFILE */}
        <div className="dashboard-box">

          <div className="box-header">
            <h2>👤 &nbsp; Career Profile</h2>

            <button onClick={() => navigate("/profile")}>
              ✎ Edit Profile
            </button>
          </div>

          <div className="profile-content">

            <div className="profile-row">
              <div className="profile-icon">🎯</div>
              <div>
                <b>Target Job Role</b>
                <p>Data Analyst</p>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-icon">💼</div>
              <div>
                <b>Experience</b>
                <p>1.5 Years</p>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-icon">🎓</div>
              <div>
                <b>Education</b>
                <p>B.Sc. in Data Science & AI</p>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-icon">📈</div>
              <div>
                <b>Profile Status</b>
                <p className="green-text">
                  Actively Optimizing
                </p>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="profile-image">
              <div className="document-icon">👤</div>
              <div className="check">✓</div>
            </div>

          </div>
        </div>

        {/* SKILLS OVERVIEW */}
        <div className="dashboard-box">

          <div className="box-header">
            <h2>📊 &nbsp; Skills Overview</h2>

            <button onClick={() => navigate("/skills")}>
              View All Skills
            </button>
          </div>

          <div className="skills-list">

            <div className="skill-row">
              <div className="skill-icon">🐍</div>
              <b>Python</b>

              <div className="skill-bar">
                <div
                  className="blue-bar"
                  style={{ width: "90%" }}
                />
              </div>

              <strong>90%</strong>
            </div>

            <div className="skill-row">
              <div className="skill-icon">🗄️</div>
              <b>SQL</b>

              <div className="skill-bar">
                <div
                  className="blue-bar"
                  style={{ width: "85%" }}
                />
              </div>

              <strong>85%</strong>
            </div>

            <div className="skill-row">
              <div className="skill-icon">📗</div>
              <b>Excel</b>

              <div className="skill-bar">
                <div
                  className="blue-bar"
                  style={{ width: "80%" }}
                />
              </div>

              <strong>80%</strong>
            </div>

            <div className="skill-row">
              <div className="skill-icon">📊</div>
              <b>Pandas</b>

              <div className="skill-bar">
                <div
                  className="blue-bar"
                  style={{ width: "78%" }}
                />
              </div>

              <strong>78%</strong>
            </div>

            <div className="skill-row">
              <div className="skill-icon">📊</div>
              <b>Power BI</b>

              <div className="skill-bar">
                <div
                  className="orange-bar"
                  style={{ width: "55%" }}
                />
              </div>

              <strong className="orange-text">55%</strong>
            </div>

            <div className="skill-row">
              <div className="skill-icon">◆</div>
              <b>Tableau</b>

              <div className="skill-bar">
                <div
                  className="orange-bar"
                  style={{ width: "50%" }}
                />
              </div>

              <strong className="orange-text">50%</strong>
            </div>

          </div>
        </div>

      </section>

      {/* ANALYSIS + AI */}
      <section className="bottom-grid">

        {/* ANALYSIS SUMMARY */}
        <div className="dashboard-box">

          <div className="box-header">
            <h2>◔ &nbsp; Analysis Summary</h2>

            <button onClick={() => navigate("/reports")}>
              View All Reports
            </button>
          </div>

          <div className="analysis-cards">

            {/* LINKEDIN */}
            <div className="analysis-card blue-card">

              <div className="analysis-icon">
                in
              </div>

              <h3>LinkedIn Analysis</h3>

              <strong>Very Good</strong>

              <p>
                Your LinkedIn profile is strong
                and well-optimized.
              </p>

              <button onClick={() => navigate("/linkedin")}>
                View Report →
              </button>

            </div>

            {/* GITHUB */}
            <div className="analysis-card green-card">

              <div className="analysis-icon github-small">

                <svg viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>

              </div>

              <h3>GitHub Analysis</h3>

              <strong>Good</strong>

              <p>
                Good profile with quality
                repositories.
              </p>

              <button onClick={() => navigate("/github")}>
                View Report →
              </button>

            </div>

            {/* RESUME */}
            <div className="analysis-card purple-card">

              <div className="analysis-icon">
                ▤
              </div>

              <h3>Resume ATS Analysis</h3>

              <strong>Very Good</strong>

              <p>
                Your resume is well-structured
                and ATS-friendly.
              </p>

              <button onClick={() => navigate("/resume")}>
                View Report →
              </button>

            </div>

          </div>
        </div>

        {/* AI CAREER INSIGHTS */}
        <div className="dashboard-box insights-box">

          <div className="box-header">
            <h2>✨ &nbsp; AI Career Insights</h2>
          </div>

          <div className="insight">
            <span className="success">✓</span>

            <div>
              <b>Strong in Python and SQL</b>

              <p>
                You have strong technical skills
                in Python and SQL.
              </p>
            </div>
          </div>

          <div className="insight">
            <span className="warning">!</span>

            <div>
              <b>Improve Power BI and Tableau</b>

              <p>
                Focus on improving Power BI and
                Tableau for data visualization.
              </p>
            </div>
          </div>

          <div className="insight">
            <span className="warning">!</span>

            <div>
              <b>Add more measurable achievements</b>

              <p>
                Include more quantified achievements
                in your experience.
              </p>
            </div>
          </div>

          <div className="insight">
            <span className="tip">💡</span>

            <div>
              <b>Build more data projects</b>

              <p>
                Work on end-to-end data projects
                to strengthen your portfolio.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}