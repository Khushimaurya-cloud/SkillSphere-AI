import "./CareerSnapshot.css";

function CareerSnapshot() {
    return (
        <div className="snapshot">

            <div className="snapshot-head">
                <h2><span>🎯</span> Your Career Snapshot</h2>
                <span>⟳</span>
            </div>
            <p className="snapshot-subtitle">
             A quick overview of your professional presence
            </p>

            <div className="snapshot-body">

                <div className="scores">

                    <div className="score">
                        <div className="circle linkedin">--</div>
                        <h3>LinkedIn</h3>
                        <p>Not analyzed</p>
                    </div>

                    <div className="line"></div>

                    <div className="score">
                        <div className="circle github">--</div>
                        <h3>GitHub</h3>
                        <p>Not analyzed</p>
                    </div>

                    <div className="line"></div>

                    <div className="score">
                        <div className="circle resume">--</div>
                        <h3>Resume</h3>
                        <p>Not analyzed</p>
                    </div>

                </div>

                <div className="line overall-line"></div>
                <div className="overall">

                    <h3>Overall Career Score</h3>

                    <div className="half-circle">
                        <strong>-- / 100</strong>
                    </div>

                    <span>↑ Good Progress</span>

                </div>

            </div>
        </div>
    );
}

export default CareerSnapshot;