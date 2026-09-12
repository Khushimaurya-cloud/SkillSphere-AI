import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import LinkedInAnalysis from "./components/LinkedInAnalysis/LinkedInAnalysis";
import GitHubAnalysis from "./components/GitHubAnalysis/GitHubAnalysis";
import ResumeATSAnalysis from "./components/ResumeATSAnalysis/ResumeATSAnalysis";
import Dashboard from "./components/Dashboard/Dashboard";
import Reports from "./components/Reports/Reports";
import AIRoadmap from "./components/AIRoadmap/AIRoadmap";
import CareerAssistant from "./components/CareerAssistant/CareerAssistant";
import SkillTracker from "./components/SkillTracker/SkillTracker";
import SavedAnalyses from "./components/SavedAnalyses/SavedAnalyses";
import "./App.css";

function App() {
    return (
        <BrowserRouter>

            <div className="app">

                <Sidebar />

                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/linkedin" element={<LinkedInAnalysis />} />
                        <Route path="/github" element={<GitHubAnalysis />} />
                        <Route path="/resume" element={<ResumeATSAnalysis />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/ai-roadmap" element={<AIRoadmap />} />
                        <Route path="/career-assistant" element={<CareerAssistant />} />
                        <Route path="/skills-tracker" element={<SkillTracker />} />
                        <Route path="/saved-analyses" element={<SavedAnalyses />} />
                    </Routes>

                

            </div>

        </BrowserRouter>
    );
}

export default App;