import "./CareerAssistant.css";
import { useState } from "react";
import { FiSend, FiMessageCircle, FiUser, FiStar } from "react-icons/fi";

function CareerAssistant() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: "Hi Khushi! 👋 I'm your AI Career Assistant. I can help you with skills, projects, resumes, interviews and your Data Analyst career path."
        }
    ]);

    const sendMessage = () => {
        if (!message.trim()) return;

        setMessages([
            ...messages,
            { type: "user", text: message },
            {
                type: "bot",
                text: "That's a great question! 🤖 I'll help you with your career journey. This AI assistant can provide personalized guidance based on your goals."
            }
        ]);

        setMessage("");
    };

    const quickQuestion = (question) => {
        setMessage(question);
    };

    return (
        <div className="career-page">

            {/* HEADER */}
            <div className="career-header">
                <div>
                    <h1>AI Career Assistant</h1>
                    <p>Your personal AI-powered career guide</p>
                </div>

                <div className="career-ai-icon">
                    <FiStar />
                </div>
            </div>

            {/* MAIN CHAT */}
            <div className="career-chat-card">

                <div className="chat-title">
                    <div className="assistant-icon">
                        <FiMessageCircle />
                    </div>

                    <div>
                        <h2>Career Assistant</h2>
                        <span>● Online & ready to help</span>
                    </div>
                </div>

                <div className="chat-messages">

                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.type}`}
                        >
                            <div className="message-icon">
                                {msg.type === "bot" ? <FiStar /> : <FiUser />}
                            </div>

                            <div className="message-text">
                                {msg.text}
                            </div>
                        </div>
                    ))}

                </div>

                {/* QUICK QUESTIONS */}
                <div className="quick-section">
                    <h3>Quick Questions</h3>

                    <div className="quick-buttons">
                        <button onClick={() => quickQuestion("How can I become a Data Analyst?")}>
                            How can I become a Data Analyst?
                        </button>

                        <button onClick={() => quickQuestion("What skills should I learn?")}>
                            What skills should I learn?
                        </button>

                        <button onClick={() => quickQuestion("How can I improve my resume?")}>
                            Improve my resume
                        </button>

                        <button onClick={() => quickQuestion("What projects should I build?")}>
                            Project ideas
                        </button>
                    </div>
                </div>

                {/* INPUT */}
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Ask anything about your career..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") sendMessage();
                        }}
                    />

                    <button onClick={sendMessage}>
                        <FiSend />
                    </button>
                </div>

            </div>

            {/* HELP CARDS */}
            <div className="career-help-grid">

                <div className="career-help-card">
                    <div>📊</div>
                    <h3>Career Guidance</h3>
                    <p>Get guidance on career paths, skills and job opportunities.</p>
                </div>

                <div className="career-help-card">
                    <div>📄</div>
                    <h3>Resume & ATS</h3>
                    <p>Learn how to improve your resume and ATS score.</p>
                </div>

                <div className="career-help-card">
                    <div>🎯</div>
                    <h3>Interview Preparation</h3>
                    <p>Practice interview questions and prepare with confidence.</p>
                </div>

            </div>

        </div>
    );
}

export default CareerAssistant;