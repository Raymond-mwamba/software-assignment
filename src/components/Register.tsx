import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRipple } from "../utils/rippleEffect.tsx";
import "../enhanced-styles.css";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    localStorage.setItem('registrationSuccess', 'true');
    navigate('/login');
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="glass-card gradient-border animate-fade-in">
          <div className="card-content">
            <h3 className="text-2xl font-bold text-center mb-6 enhanced-text">Student Registration</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="fullName" className="enhanced-text">Full Name</label>
                <input
                  type="text"
                  className="enhanced-input w-full"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="enhanced-text">Email</label>
                <input
                  type="email"
                  className="enhanced-input w-full"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="enhanced-text">Password</label>
                <input
                  type="password"
                  className="enhanced-input w-full"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="enhanced-text">Confirm Password</label>
                <input
                  type="password"
                  className="enhanced-input w-full"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="enhanced-button w-full"
                onMouseDown={(e) => createRipple(e)}
              >
                Register
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="enhanced-text">
                Already have an account?{' '}
                <a href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;