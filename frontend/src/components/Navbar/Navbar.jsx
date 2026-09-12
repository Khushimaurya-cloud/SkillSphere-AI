import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { FiBell } from "react-icons/fi";

function Navbar() {
    return (
        <div className="top-navbar">

            <div className="top-navbar-left">
                <HiMenu className="top-menu-icon" />
            </div>

            <div className="top-navbar-right">

                <button className="top-upgrade-btn">
                    ✨ Upgrade to Pro
                </button>

                <FiBell className="top-bell-icon" />

                <div className="top-profile">
                    K
                </div>

            </div>

        </div>
    );
}

export default Navbar;