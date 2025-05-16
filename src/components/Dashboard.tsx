import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRipple } from "../utils/rippleEffect.tsx";
import "../enhanced-styles.css";

function ArrivalNote() {
  return (
    <div className="glass-card gradient-border animate-fade-in">
      <div className="card-content">
        <h2 className="text-xl font-bold mb-4 enhanced-text">Arrival Note</h2>
        <textarea
          className="enhanced-input w-full"
          placeholder="Write your arrival note here..."
          rows={4}
        ></textarea>
      </div>
    </div>
  );
}

function SupervisorLogbookEntry() {
  return (
    <div className="glass-card gradient-border animate-fade-in">
      <div className="card-content">
        <h2 className="text-xl font-bold mb-4 enhanced-text">Logbook Entry</h2>
        <textarea
          className="enhanced-input w-full"
          placeholder="Supervisor's logbook notes..."
          rows={4}
        ></textarea>
      </div>
    </div>
  );
}

function EvaluationForm() {
  return (
    <div className="glass-card gradient-border animate-fade-in">
      <div className="card-content">
        <h2 className="text-xl font-bold mb-4 enhanced-text">Evaluation Form</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label className="enhanced-text">Student Name</label>
            <input
              className="enhanced-input w-full"
              type="text"
              placeholder="Enter student name"
            />
          </div>
          <div className="form-group">
            <label className="enhanced-text">Score</label>
            <input
              className="enhanced-input w-full"
              type="number"
              placeholder="Enter score (0-100)"
            />
          </div>
          <div className="form-group">
            <label className="enhanced-text">Remarks</label>
            <textarea
              className="enhanced-input w-full"
              placeholder="Enter remarks"
              rows={4}
            ></textarea>
          </div>
          <div className="text-right">
            <button 
              className="enhanced-button"
              onClick={(e) => createRipple(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");
  const [showIPTSections, setShowIPTSections] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const toggleIPTSections = () => {
    setShowIPTSections(!showIPTSections);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass-card gradient-border animate-fade-in">
        <div className="card-content">
          <div className="header-container">
            <h3 className="text-2xl font-bold enhanced-text">Students Dashboard</h3>
            <button 
              onClick={handleLogout} 
              className="enhanced-button"
              onMouseDown={(e) => createRipple(e)}
            >
              Logout
            </button>
          </div>
          <div className="mt-6">
            <h5 className="text-xl enhanced-text">Welcome {userEmail || "Student"}!</h5>
            <p className="mt-2 enhanced-text">This is your dashboard where you can view your information.</p>
            <div className="mt-4">
              <button
                onClick={toggleIPTSections}
                className="enhanced-button"
                onMouseDown={(e) => createRipple(e)}
              >
                {showIPTSections ? "Hide IPT" : "Show IPT"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showIPTSections && (
        <div className="mt-8 space-y-6">
          <div className="glass-card gradient-border animate-fade-in">
            <div className="card-content">
              <h2 className="text-2xl font-bold enhanced-text">Application</h2>
              <p className="mt-2 enhanced-text">Details about the application process...</p>
            </div>
          </div>
          <ArrivalNote />
          <SupervisorLogbookEntry />
          <EvaluationForm />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
