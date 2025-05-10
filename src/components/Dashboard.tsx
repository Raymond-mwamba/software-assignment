import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArrivalNote() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Arrival Note</h2>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Write your arrival note here..."
      ></textarea>
    </div>
  );
}

function SupervisorLogbookEntry() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Supervisor Logbook Entry</h2>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Supervisor's logbook notes..."
      ></textarea>
    </div>
  );
}

function EvaluationForm()  {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Evaluation Form</h2>
      <form className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Student Name"
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Score (0–100)"
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Remarks"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="card-title">Students Dashboard</h3>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
          <div className="mt-4">
            <h5>Welcome {userEmail || "Student"}!</h5>
            <p>This is your dashboard where you can view your information.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
  // src/App.js


 
  
};

export default Dashboard;