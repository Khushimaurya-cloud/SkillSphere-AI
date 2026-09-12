import "./Reports.css";
import { useNavigate } from "react-router-dom";
import {
FiFileText,
FiSearch,
FiEye,
FiMoreVertical,
FiBarChart2
} from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";

function Reports() {
const navigate = useNavigate();

const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All Reports");
const [sort, setSort] = useState("Latest");
const [page, setPage] = useState(1);

const reports = [
{
type: "linkedin",
title: "LinkedIn Analysis",
role: "Data Analyst",
date: "16 Aug 2026, 10:30 AM",
score: 82,
status: "Very Good"
},
{
type: "github",
title: "GitHub Analysis",
role: "Data Analyst",
date: "15 Aug 2026, 09:15 AM",
score: 78,
status: "Good"
},
{
type: "resume",
title: "Resume ATS Analysis",
role: "Data Analyst",
date: "14 Aug 2026, 08:45 PM",
score: 82,
status: "Very Good"
},
{
type: "linkedin",
title: "LinkedIn Analysis",
role: "Data Scientist",
date: "10 Aug 2026, 11:20 AM",
score: 75,
status: "Good"
},
{
type: "resume",
title: "Resume ATS Analysis",
role: "Data Scientist",
date: "08 Aug 2026, 07:30 PM",
score: 70,
status: "Good"
},
{
type: "github",
title: "GitHub Analysis",
role: "Data Analyst",
date: "05 Aug 2026, 04:20 PM",
score: 74,
status: "Good"
},
{
type: "linkedin",
title: "LinkedIn Analysis",
role: "Data Analyst",
date: "03 Aug 2026, 12:15 PM",
score: 79,
status: "Good"
},
{
type: "resume",
title: "Resume ATS Analysis",
role: "Data Analyst",
date: "01 Aug 2026, 06:30 PM",
score: 76,
status: "Good"
}
];

const getIcon = (type) => {
if (type === "linkedin") {
return <FaLinkedinIn />;
}

if (type === "github") {
return <FaGithub />;
}

return <FiFileText />;
};

const filteredReports = reports
.filter((report) => {
const matchesSearch =
report.title.toLowerCase().includes(search.toLowerCase()) ||
report.role.toLowerCase().includes(search.toLowerCase());

const matchesFilter =
filter === "All Reports" ||
(filter === "LinkedIn" && report.type === "linkedin") ||
(filter === "GitHub" && report.type === "github") ||
(filter === "Resume" && report.type === "resume");

return matchesSearch && matchesFilter;
})
.sort((a, b) => {
if (sort === "Latest") {
return reports.indexOf(a) - reports.indexOf(b);
}

if (sort === "Oldest") {
return reports.indexOf(b) - reports.indexOf(a);
}

if (sort === "Highest Score") {
return b.score - a.score;
}

if (sort === "Lowest Score") {
return a.score - b.score;
}

return 0;
});

const reportsPerPage = 5;

const totalPages = Math.ceil(
filteredReports.length / reportsPerPage
);

const startIndex = (page - 1) * reportsPerPage;

const currentReports = filteredReports.slice(
startIndex,
startIndex + reportsPerPage
);

const viewReport = (type) => {
if (type === "linkedin") {
navigate("/linkedin");
} else if (type === "github") {
navigate("/github");
} else {
navigate("/resume");
}
};

return (
<div className="reports-page">

{/* Header */}
<div className="reports-header">
<div>
<h1>Reports & Analysis</h1>
<p>View and manage all your career analysis reports in one place.</p>
</div>

<div className="reports-welcome">
<div>
<h2>Welcome, Khushi! 👋</h2>
<p>Keep learning, keep growing.</p>
</div>

<div className="reports-profile">K</div>
</div>
</div>

{/* Summary Cards */}
<div className="report-summary">

<div className="summary-card">
<div className="summary-icon blue-icon">
<FiFileText />
</div>

<div>
<h3>Total Reports</h3>
<strong>8</strong>
<p>All time analyses</p>
</div>
</div>

<div className="summary-card">
<div className="summary-icon linkedin-bg">
<FaLinkedinIn />
</div>

<div>
<h3>LinkedIn Reports</h3>
<strong>3</strong>
<p>LinkedIn analyses</p>
</div>
</div>

<div className="summary-card">
<div className="summary-icon github-bg">
<FaGithub />
</div>

<div>
<h3>GitHub Reports</h3>
<strong>2</strong>
<p>GitHub analyses</p>
</div>
</div>

<div className="summary-card">
<div className="summary-icon resume-bg">
<FiFileText />
</div>

<div>
<h3>Resume Reports</h3>
<strong>3</strong>
<p>Resume ATS analyses</p>
</div>
</div>

</div>

{/* Search and Filters */}
<div className="report-filters">

<div className="search-box">
<FiSearch />

<input
type="text"
placeholder="Search reports by role or keyword..."
value={search}
onChange={(e) => {
setSearch(e.target.value);
setPage(1);
}}
/>
</div>

<select
className="filter-select"
value={filter}
onChange={(e) => {
setFilter(e.target.value);
setPage(1);
}}
>
<option>All Reports</option>
<option>LinkedIn</option>
<option>GitHub</option>
<option>Resume</option>
</select>

<select
className="filter-select"
value={sort}
onChange={(e) => {
setSort(e.target.value);
setPage(1);
}}
>
<option>Latest</option>
<option>Oldest</option>
<option>Highest Score</option>
<option>Lowest Score</option>
</select>

<button
className="clear-btn"
onClick={() => {
setSearch("");
setFilter("All Reports");
setSort("Latest");
setPage(1);
}}
>
<FiBarChart2 />
Clear Filters
</button>

</div>

{/* Recent Reports */}
<div className="recent-reports">

<div className="recent-header">
<h2>Recent Reports</h2>
</div>

{currentReports.length > 0 ? (
currentReports.map((report, index) => (
<div className="report-row" key={index}>

<div className={`report-icon ${report.type}-report-icon`}>
{getIcon(report.type)}
</div>

<div className="report-details">
<h3>{report.title}</h3>

<p>
{report.role}
<span>•</span>
{report.date}
</p>
</div>

<div className="report-score">
<span>Score</span>

<strong className={report.type}>
{report.score}
</strong>

<small>/100</small>
</div>

<div className="report-status">
<span>Status</span>

<b className={
report.status === "Very Good"
? "very-good"
: "good"
}>
{report.status}
</b>
</div>

<button
className="view-report-btn"
onClick={() => viewReport(report.type)}
>
<FiEye />
View Report
</button>

<button className="more-btn">
<FiMoreVertical />
</button>

</div>
))
) : (
<div className="no-reports">
No reports found.
</div>
)}

{/* Bottom */}
<div className="reports-bottom">

<p>
Showing{" "}
{filteredReports.length === 0 ? 0 : startIndex + 1}
{" "}to{" "}
{Math.min(
startIndex + reportsPerPage,
filteredReports.length
)}
{" "}of {filteredReports.length} reports
</p>

<div className="pagination">

<button
disabled={page === 1}
onClick={() => setPage(page - 1)}
>
‹
</button>

{Array.from(
{ length: totalPages },
(_, index) => (
<button
key={index}
className={
page === index + 1
? "active-page"
: ""
}
onClick={() => setPage(index + 1)}
>
{index + 1}
</button>
)
)}

<button
disabled={page === totalPages || totalPages === 0}
onClick={() => setPage(page + 1)}
>
›
</button>

</div>

</div>

</div>

</div>
);
}

export default Reports;