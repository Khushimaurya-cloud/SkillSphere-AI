import "./SavedAnalyses.css";
import { useState } from "react";
import { jsPDF } from "jspdf";
import {
    FiSearch,
    FiMoreVertical,
    FiEye,
    FiDownload,
    FiFileText,
    FiLinkedin,
    FiGithub,
    FiX
} from "react-icons/fi";

function SavedAnalyses() {

    const [typeFilter, setTypeFilter] = useState("All Types");
    const [sortOrder, setSortOrder] = useState("Newest First");
    const [search, setSearch] = useState("");
    const [selectedReport, setSelectedReport] = useState(null);
    const [menuOpen, setMenuOpen] = useState(null);
    const [showFullReport, setShowFullReport] = useState(false);

    const reports = [
        {
            id: 1,
            title: "LinkedIn Profile Analysis",
            type: "LinkedIn",
            date: "10 Sep 2026",
            score: 78,
            icon: "in",
            summary: "Your LinkedIn profile has a strong professional presence with good headline and experience sections.",
            highlights: [
                "Strong professional headline",
                "Good experience section",
                "Skills section can be improved"
            ]
        },
        {
            id: 2,
            title: "GitHub Repository Analysis",
            type: "GitHub",
            date: "8 Sep 2026",
            score: 82,
            icon: "GH",
            summary: "Your GitHub profile shows good coding activity and project consistency.",
            highlights: [
                "Good repository activity",
                "Projects are relevant",
                "Improve README documentation"
            ]
        },
        {
            id: 3,
            title: "Resume ATS Analysis",
            type: "Resume",
            date: "6 Sep 2026",
            score: 74,
            icon: "CV",
            summary: "Your resume is ATS friendly but can be improved with better keywords and formatting.",
            highlights: [
                "Good resume structure",
                "Relevant technical skills",
                "Add more job-specific keywords"
            ]
        },
        {
            id: 4,
            title: "LinkedIn Profile Analysis",
            type: "LinkedIn",
            date: "3 Sep 2026",
            score: 81,
            icon: "in",
            summary: "Your LinkedIn profile has improved in professional presentation.",
            highlights: [
                "Better profile summary",
                "Strong skills section",
                "Add more certifications"
            ]
        },
        {
            id: 5,
            title: "Resume ATS Analysis",
            type: "Resume",
            date: "1 Sep 2026",
            score: 76,
            icon: "CV",
            summary: "Resume keywords and formatting are good for Data Analyst roles.",
            highlights: [
                "Good keyword matching",
                "Clean formatting",
                "Improve project descriptions"
            ]
        },
        {
            id: 6,
            title: "GitHub Repository Analysis",
            type: "GitHub",
            date: "28 Aug 2026",
            score: 79,
            icon: "GH",
            summary: "GitHub projects are relevant but need stronger documentation.",
            highlights: [
                "Relevant projects",
                "Good coding activity",
                "Improve README files"
            ]
        }
    ];

    const filteredReports = reports
        .filter(report =>
            typeFilter === "All Types" || report.type === typeFilter
        )
        .filter(report =>
            report.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "Newest First") return b.id - a.id;
            if (sortOrder === "Oldest First") return a.id - b.id;
            if (sortOrder === "Highest Score") return b.score - a.score;
            return a.score - b.score;
        });

    const viewReport = (report) => {
        setSelectedReport(report);
        setMenuOpen(null);
    };

    const downloadPDF = (report) => {
        const pdf = new jsPDF();

        pdf.setFontSize(20);
        pdf.text(report.title, 20, 25);

        pdf.setFontSize(13);
        pdf.text(`Type: ${report.type}`, 20, 40);
        pdf.text(`Date: ${report.date}`, 20, 50);
        pdf.text(`Score: ${report.score}/100`, 20, 60);

        pdf.setFontSize(14);
        pdf.text("Analysis Summary", 20, 80);

        pdf.setFontSize(11);
        pdf.text(report.summary, 20, 90, { maxWidth: 170 });

        pdf.setFontSize(14);
        pdf.text("Key Highlights", 20, 120);

        report.highlights.forEach((item, index) => {
            pdf.setFontSize(11);
            pdf.text(`• ${item}`, 25, 132 + index * 10);
        });

        pdf.save(`${report.title.replaceAll(" ", "_")}.pdf`);
    };

    return (
        <div className="saved-page">

            {/* HEADER */}
            <div className="saved-header">
                <div>
                    <h1>Saved Analyses</h1>
                    <p>Access your previously saved analysis reports and insights.</p>
                </div>

                <div className="saved-header-right">
                    <div className="saved-updated">
                        <small>Last Updated</small>
                        <b>12 Sep 2026</b>
                    </div>

                    <div className="saved-motivation">
                        ✨ <span>Keep growing,<br />keep improving!</span>
                    </div>
                </div>
            </div>

            {/* SUMMARY */}
            <div className="saved-summary">

                <div className="saved-summary-card blue">
                    <div className="summary-icon">▣</div>
                    <div>
                        <span>Total Saved Analyses</span>
                        <h2>8</h2>
                        <small>All saved reports</small>
                    </div>
                </div>

                <div className="saved-summary-card linkedin">
                    <div className="summary-icon">in</div>
                    <div>
                        <span>LinkedIn Analyses</span>
                        <h2>3</h2>
                        <small>Profile analyses</small>
                    </div>
                </div>

                <div className="saved-summary-card github">
                    <div className="summary-icon">GH</div>
                    <div>
                        <span>GitHub Analyses</span>
                        <h2>2</h2>
                        <small>Repository analyses</small>
                    </div>
                </div>

                <div className="saved-summary-card resume">
                    <div className="summary-icon">CV</div>
                    <div>
                        <span>Resume Analyses</span>
                        <h2>3</h2>
                        <small>ATS analyses</small>
                    </div>
                </div>

            </div>

            {/* SEARCH + FILTER */}
            <div className="saved-controls">

                <div className="saved-search">
                    <FiSearch />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search your saved analyses..."
                    />
                </div>

                <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option>All Types</option>
                    <option>LinkedIn</option>
                    <option>GitHub</option>
                    <option>Resume</option>
                </select>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Highest Score</option>
                    <option>Lowest Score</option>
                </select>

            </div>

            {/* CONTENT */}
            <div className="saved-layout">

                {/* REPORT LIST */}
                <div className="saved-reports">

                    <div className="saved-list-header">
                        <h2>Saved Reports</h2>
                        <span>{filteredReports.length} reports</span>
                    </div>

                    {filteredReports.map((report) => (

                        <div className="saved-report" key={report.id}>

                            <div className={`report-icon ${report.type.toLowerCase()}`}>
                                {report.icon}
                            </div>

                            <div className="report-info">
                                <h3>{report.title}</h3>
                                <p>{report.type} Analysis • {report.date}</p>
                            </div>

                            <div className="report-score">
                                <strong>{report.score}</strong>
                                <span>/100</span>
                            </div>

                            <button
                                className="view-report-btn"
                                onClick={() => viewReport(report)}
                            >
                                <FiEye /> View Report
                            </button>

                            <div className="report-menu">

                                <button
                                    className="dots-btn"
                                    onClick={() =>
                                        setMenuOpen(
                                            menuOpen === report.id ? null : report.id
                                        )
                                    }
                                >
                                    <FiMoreVertical />
                                </button>

                                {menuOpen === report.id && (
                                    <div className="dots-menu">

                                        <button onClick={() => viewReport(report)}>
                                            <FiEye /> View Report
                                        </button>

                                        <button onClick={() => {
                                            setSelectedReport(report);
                                            setShowFullReport(true);
                                            setMenuOpen(null);
                                        }}>
                                            <FiFileText /> Full Report
                                        </button>

                                        <button onClick={() => downloadPDF(report)}>
                                            <FiDownload /> Download PDF
                                        </button>

                                    </div>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

                {/* PREVIEW */}
                <div className="report-preview">

                    {selectedReport ? (
                        <>
                            <div className="preview-top">
                                <div>
                                    <small>{selectedReport.type} Analysis</small>
                                    <h2>{selectedReport.title}</h2>
                                </div>

                                <button onClick={() => setSelectedReport(null)}>
                                    <FiX />
                                </button>
                            </div>

                            <div className="preview-score">
                                <strong>{selectedReport.score}</strong>
                                <span>/100</span>
                            </div>

                            <h3>Key Highlights</h3>

                            {selectedReport.highlights.map((item, index) => (
                                <div className="highlight" key={index}>
                                    ✓ {item}
                                </div>
                            ))}

                            <h3>Analysis Summary</h3>

                            <p className="preview-summary">
                                {selectedReport.summary}
                            </p>

                            <div className="preview-buttons">

                                <button
                                    onClick={() => setShowFullReport(true)}
                                >
                                    <FiFileText /> View Full Report
                                </button>

                                <button
                                    onClick={() => downloadPDF(selectedReport)}
                                >
                                    <FiDownload /> Download PDF
                                </button>

                            </div>
                        </>
                    ) : (
                        <div className="empty-preview">
                            <FiFileText />
                            <h3>Select a Report</h3>
                            <p>Click View Report to see your saved analysis.</p>
                        </div>
                    )}

                </div>

            </div>

            {/* FULL REPORT MODAL */}
            {showFullReport && selectedReport && (

                <div className="full-report-overlay">

                    <div className="full-report-modal">

                        <button
                            className="modal-close"
                            onClick={() => setShowFullReport(false)}
                        >
                            <FiX />
                        </button>

                        <div className="full-report-icon">
                            {selectedReport.icon}
                        </div>

                        <h2>{selectedReport.title}</h2>
                        <p>{selectedReport.type} • {selectedReport.date}</p>

                        <div className="full-score">
                            {selectedReport.score}/100
                        </div>

                        <h3>Analysis Summary</h3>
                        <p>{selectedReport.summary}</p>

                        <h3>Key Highlights</h3>

                        {selectedReport.highlights.map((item, index) => (
                            <div className="modal-highlight" key={index}>
                                ✓ {item}
                            </div>
                        ))}

                        <button
                            className="download-main-btn"
                            onClick={() => downloadPDF(selectedReport)}
                        >
                            <FiDownload /> Download PDF
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}

export default SavedAnalyses;