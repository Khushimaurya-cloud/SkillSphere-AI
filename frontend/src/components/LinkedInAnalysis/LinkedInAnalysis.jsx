import "./LinkedInAnalysis.css";
import { useNavigate } from "react-router-dom";

function LinkedInAnalysis() {
  const navigate = useNavigate();
  const strengths = [
    ["👤", "Headline", 85],
    ["📝", "About Section", 78],
    ["⭐", "Skills", 90],
    ["💼", "Experience", 80],
    ["🎓", "Education", 85],
    ["🔍", "Keywords", 75],
    ["✓", "Profile Completeness", 82],
  ];

  const topStrengths = [
    "Good profile completeness",
    "Strong skills section",
    "Relevant work experience",
    "Professional profile picture",
    "Consistent job history",
  ];

  const improvements = [
    "Improve your headline",
    "Add more relevant keywords",
    "Enhance your About section",
    "Add measurable achievements",
    "Include more projects/volunteer work",
  ];

  const recommendations = [
    ["1", "Improve Headline", "Your headline is good but can be more impactful. Add specific skills and your target role."],
    ["2", "Add Keywords", "Add more Data Analyst related keywords to improve profile visibility in searches."],
    ["3", "Enhance About Section", "Make your About section more engaging. Add your skills, projects and career goals."],
    ["4", "Showcase Achievements", "Add quantifiable achievements in your experience section to stand out."],
  ];

  return (
    <div className="linkedin-page">

      <div className="linkedin-header">
        <div>
          <h1>LinkedIn Analysis</h1>
          <p>Detailed analysis of your LinkedIn profile and professional presence</p>
        </div>
        <button className="back-btn" onClick={() => navigate("/")}>
            ← &nbsp; Back to Home
        </button>
      </div>

      {/* TOP */}
      <div className="linkedin-top">

        <div className="score-area">
          <h3>LinkedIn Score</h3>
          <div className="linkedin-score-circle">
            <strong>82</strong>
            <span>/100</span>
          </div>
          <b>• Very Good</b>
        </div>

        <div className="score-message">
          <h3>🏆 &nbsp; Great Job!</h3>
          <p>
            Your LinkedIn profile is strong and well-optimized.
            Focus on the suggestions to make it even better.
          </p>
        </div>

        <div className="profile-info">
          <p>🔗 <b>Profile URL</b></p>
          <a href="#">linkedin.com/in/khushi-maurya-8278b936b</a>

          <p>💼 <b>Target Job Role</b></p>
          <strong>Data Analyst</strong>

          <p>📅 <b>Analyzed On</b></p>
          <span>16 Aug 2025, 10:30 AM</span>
        </div>

      </div>

      {/* BREAKDOWN + STRENGTHS */}
      <div className="middle-section">

        <div className="box breakdown">
          <h2>📊 &nbsp; Profile Strength Breakdown</h2>

          {strengths.map(([icon, name, score]) => (
            <div className="breakdown-row" key={name}>
              <span className="breakdown-icon">{icon}</span>
              <b>{name}</b>
              <div className="bar">
                <div style={{ width: `${score}%` }} />
              </div>
              <strong>{score}%</strong>
            </div>
          ))}
        </div>

        <div className="box strength-area">
          <h2>💡 &nbsp; Strengths & Areas to Improve</h2>

          <div className="strength-columns">
            <div className="strength-card">
              <h3>🟢 &nbsp; Top Strengths</h3>
              {topStrengths.map(item => (
                <p key={item}>✓ &nbsp; {item}</p>
              ))}
            </div>

            <div className="improve-card">
              <h3>⚠️ &nbsp; Areas to Improve</h3>
              {improvements.map(item => (
                <p key={item}>! &nbsp; {item}</p>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* AI RECOMMENDATIONS */}
      <div className="box recommendations">
        <h2>✨ &nbsp; AI Recommendations</h2>

        <div className="recommendation-grid">
          {recommendations.map(([num, title, text]) => (
            <div className="recommendation" key={num}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default LinkedInAnalysis;