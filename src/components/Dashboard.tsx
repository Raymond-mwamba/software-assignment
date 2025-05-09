import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="card-title">Students Dashboard</h3>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
          <div className="mt-4">
            <h5>Welcome {userEmail || 'Student'}!</h5>
            <p>This is your dashboard where you can view your information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;