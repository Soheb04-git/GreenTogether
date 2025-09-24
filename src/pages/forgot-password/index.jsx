//src/pages/forgot-password/index.jsx


import React from 'react';
import { Helmet } from 'react-helmet';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import SecurityBadges from './components/SecurityBadges';
import Icon from '../../components/AppIcon';

const ForgotPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password - GreenTogether</title>
        <meta name="description" content="Reset your GreenTogether Auth password securely. Enter your email to receive password reset instructions." />
        <meta name="keywords" content="password reset, forgot password, waste management, authentication, security" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Branding & Information */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-green-600 p-8 lg:p-12 flex flex-col justify-center text-white">
            <div className="max-w-md mx-auto lg:mx-0">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
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
                  Password Recovery
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Securely reset your password to regain access to your waste management dashboard.
                </p>
              </div>

              {/* Security Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={16} />
                  </div>
                  <span className="text-blue-100">Secure password reset process</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={16} />
                  </div>
                  <span className="text-blue-100">Email verification required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={16} />
                  </div>
                  <span className="text-blue-100">Time-limited reset tokens</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Forgot Password Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md mx-auto w-full">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Key" size={32} color="rgb(59, 130, 246)" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Forgot Password?
                </h3>
                <p className="text-gray-600">
                  No worries! Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              {/* Forgot Password Form */}
              <ForgotPasswordForm />

              {/* Security Badges */}
              <SecurityBadges />

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date()?.getFullYear()} GreenTogether Auth System. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Secure password recovery for municipal waste management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;