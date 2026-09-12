import "./MainContent.css";
import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import CareerSnapshot from "./CareerSnapshot/CareerSnapshot";
import { useNavigate } from "react-router-dom";

function MainContent() {

    const navigate = useNavigate();

    return (
        <div className="main-content">
            <Navbar />

            <h1>Welcome back, Khushi! 👋</h1>

            <p>
                Get AI-powered insights to accelerate your career growth.
            </p>

            <Cards />
            <CareerSnapshot />

            <div className="analyze-all">
                <div>
                    <h2>🚀Want a Complete Career Analysis?</h2>

                    <p>
                        Analyze your LinkedIn, GitHub and Resume together to receive one personalized AI-powered career report.
                    </p>
                </div>

                <button onClick={() => navigate("/dashboard")}>
                    Analyze All Profiles →
                </button>
            </div>
        </div>
    );
}

export default MainContent;