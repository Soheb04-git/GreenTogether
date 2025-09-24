//src/pages/login/index.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from './components/LoginForm';
import SecurityBadges from './components/SecurityBadges';
import CredentialsHelper from './components/CredentialsHelper';
import Icon from '../../components/AppIcon';
//import logo2 from "../../assets/images/global/logo2.png";



const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - GreenTogether</title>
        <meta name="description" content="Secure login to WasteAuth waste management platform. Access role-based dashboards for citizens, workers, champions, and administrators." />
        <meta name="keywords" content="waste management, login, authentication, municipal services, urban local body" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Branding & Information */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-green-600 p-8 lg:p-12 flex flex-col justify-center text-white">
            <div className="max-w-md mx-auto lg:mx-0">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <Icon name="Recycle" size={28} color="rgb(34, 197, 94)" />

                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">GreenTogether</h1>
                    <p className="text-blue-100 text-sm">Waste Management Platform</p>
                  </div>
                </div>


              {/* Welcome Message */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Welcome Back
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Sign in to access your personalized waste management dashboard and contribute to a cleaner, greener community.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={16} />
                  </div>
                  <span className="text-blue-100">Role-based access control</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={16} />
                  </div>
                  <span className="text-blue-100">Government-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Leaf" size={16} />
                  </div>
                  <span className="text-blue-100">Sustainable waste management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md mx-auto w-full">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Sign In to Your Account
                </h3>
                <p className="text-gray-600">
                  Enter your credentials to access the waste management platform
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />

              {/* Demo Credentials Helper */}
              <CredentialsHelper />

              {/* Security Badges */}
              <SecurityBadges />

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date()?.getFullYear()} GreenTogether Auth System. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Powered by sustainable technology for urban waste management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;