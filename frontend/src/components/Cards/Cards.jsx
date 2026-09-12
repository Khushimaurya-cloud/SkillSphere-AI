import "./Cards.css";
import { FaLinkedinIn,FaGithub} from "react-icons/fa";
import { FiArrowRight,FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Cards() {

    const navigate = useNavigate();

    return (
        <div className="cards">

            <div className="card">
                <div className="card-title">
                    <span className="linkedin-icon">
                        <FaLinkedinIn />
                    </span>
                    <h2>LinkedIn Analysis</h2>
                    <span className="arrow">
                        <FiArrowRight />
                    </span>
                </div>

                <p>Analyze your LinkedIn profile and get AI-powered insights.</p>

                <div className="input-box">
                    <span>🔗</span>
                    <input placeholder="Paste your LinkedIn profile URL" />
                </div>

                <div className="input-box">
                    <span>🎯</span>
                    <input placeholder="Target Job Role (e.g. Data Analyst)" />
                </div>

                <button onClick={() => navigate("/linkedin")}>
                    Analyze LinkedIn <FiArrowRight />
                </button>
            </div>


            <div className="card">
                <div className="card-title">
                    <span className="github-icon">
                        <FaGithub />
                    </span>
                    <h2>GitHub Analysis</h2>
                    <span className="arrow">
                        <FiArrowRight />
                    </span>
                </div>

                <p>Analyze your GitHub profile and get AI-powered insights.</p>

                <div className="input-box">
                    <span>🔗</span>
                    <input placeholder="Paste your GitHub profile URL" />
                </div>

                <div className="input-box">
                    <span>🎯</span>
                    <input placeholder="Target Job Role (e.g. Data Analyst)" />
                </div>

                <button onClick={() => navigate("/github")}>
                    Analyze GitHub <FiArrowRight />
                </button>
            </div>


            <div className="card">
                <div className="card-title">
                    <span className="resume-icon">
                        <FiFileText/>
                    </span>
                    <h2>Resume ATS Analysis</h2>
                    <span className="arrow">
                        <FiArrowRight />
                    </span>
                </div>

                <p>Check your resume ATS score and get improvement suggestion.</p>

                <div className="input-box">
                    <span>📎</span>
                    <input type="file" />
                </div>

                <div className="input-box">
                    <span>🎯</span>
                    <input placeholder="Target Job Role (e.g. Data Analyst)" />
                </div>

                <button onClick={() => navigate("/resume")}>
                    Analyze Resume <FiArrowRight />
                </button>
            </div>

        </div>
    );
}

export default Cards;