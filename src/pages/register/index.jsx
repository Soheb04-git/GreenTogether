//src/pages/register/index.jsx


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import SecurityBadges from './components/SecurityBadges';
import RoleInfoCard from './components/RoleInfoCard';
import Icon from '../../components/AppIcon';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Mock credentials for different roles
  const mockCredentials = {
    'citizen': { email: 'citizen@wasteauth.com', password: 'Citizen123!' },
    'waste-worker': { email: 'worker@wasteauth.com', password: 'Worker123!' },
    'green-champion': { email: 'champion@wasteauth.com', password: 'Champion123!' },
    'ulb-admin': { email: 'admin@wasteauth.com', password: 'Admin123!' }
  };

  const handleRegistration = async (formData) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock validation - check if email already exists for the role
      const existingCredential = mockCredentials?.[formData?.role];
      if (formData?.email === existingCredential?.email) {
        throw new Error('An account with this email already exists for the selected role');
      }

      // Simulate successful registration
      setSuccess('Account created successfully! Redirecting to your dashboard...');

      localStorage.setItem('wasteauth_user', JSON.stringify({
        email: formData?.email,
        role: formData?.role,
        loginTime: new Date().toISOString()
      }));

      //  Map roles to correct routes
      const roleRedirects = {
        citizen: '/gamified-learning-portal',
        'waste-worker': '/worker-portal',
        'green-champion': '/community-action-center',
        'ulb-admin': '/impact-visualization-dashboard'
      };
      
      // Simulate redirect delay
      setTimeout(() => {
        // Role-based routing
        switch (formData?.role) {
          case 'citizen': navigate('/gamified-learning-portal');
            break;
          case 'waste-worker': navigate('/worker-portal');
            break;
          case 'green-champion': navigate('/community-action-center');
            break;
          case 'ulb-admin': navigate('/impact-visualization-dashboard');
            break;
          default:
            navigate('/login');
        }
      }, 1500);

    } catch (err) {
      setError(err?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-600 rounded-full p-3">
              <Icon name="Recycle" size={32} color="white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">GreenTogether</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join our comprehensive waste management platform. Create your account to access 
            role-specific tools and contribute to a cleaner, more sustainable environment.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Main Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Create Your Account</h2>
                <p className="text-slate-600">
                  Fill in your details to get started with the waste management platform
                </p>
              </div>

              <RegistrationForm
                onSubmit={handleRegistration}
                loading={loading}
                error={error}
                success={success}
              />

              {/* Login Link */}
              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-600">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <SecurityBadges />
            <RoleInfoCard />
            
            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Lightbulb" size={20} color="#059669" />
                <h3 className="font-semibold text-slate-900">Getting Started</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={14} color="#059669" className="mt-0.5 flex-shrink-0" />
                  <span>Choose your role based on your responsibilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={14} color="#059669" className="mt-0.5 flex-shrink-0" />
                  <span>Complete the registration with accurate information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={14} color="#059669" className="mt-0.5 flex-shrink-0" />
                  <span>Access your personalized dashboard immediately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-500">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={16} color="#64748b" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Lock" size={16} color="#64748b" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="CheckCircle" size={16} color="#64748b" />
              <span>Verified</span>
            </div>
          </div>
          <p>© {new Date()?.getFullYear()} GreenTogether Auth System. All rights reserved.</p>
          <p className="mt-1">
            Powered by secure government-grade infrastructure for waste management solutions.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Register;