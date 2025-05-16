import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRipple } from "../utils/rippleEffect.tsx";
import "../enhanced-styles.css";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('registrationSuccess') === 'true') {
      setShowRegistrationSuccess(true);
      localStorage.removeItem('registrationSuccess');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      localStorage.setItem('isLoggedIn', 'true');
      if (formData.rememberMe) {
        localStorage.setItem('userEmail', formData.email);
      }
      navigate('/dashboard');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <div className="login-container">
        <div className="glass-card gradient-border animate-fade-in">
          <div className="card-content">
            <h3 className="text-2xl font-bold text-center mb-6 enhanced-text">Student Login</h3>
            
            {showRegistrationSuccess && (
              <div className="glass-card success-pulse mb-6">
                <div className="card-content">
                  <p className="text-center enhanced-text">Registration successful! Please log in.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="email" className="enhanced-text">Email</label>
                <input
                  type="email"
                  className="enhanced-input"
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
                  className="enhanced-input"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <div className="form-group flex items-center">
                <input
                  type="checkbox"
                  className="enhanced-input w-4 h-4 mr-2"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                />
                <label className="enhanced-text" htmlFor="rememberMe">Remember me</label>
              </div>

              <button 
                type="submit" 
                className="enhanced-button w-full"
                onMouseDown={(e) => createRipple(e)}
              >
                Login
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="enhanced-text">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;