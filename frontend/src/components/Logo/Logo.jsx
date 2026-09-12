import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {

    return (
        <div className = "logo">
            <img src={logo} alt="SkillSphere AI Logo" className="logo-image" />
            <div className="logo-text">
            <h1>SkillSphere AI</h1>
            <p>AI Powered Career Analysis Platform</p>
            </div>

        </div>

    );

}
export default Logo;