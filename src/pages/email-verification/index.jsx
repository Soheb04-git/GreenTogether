//src/pages/email-verification/index.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import EmailVerificationForm from './components/EmailVerificationForm';
import SecurityBadges from '../login/components/SecurityBadges';
import Icon from '../../components/AppIcon';

const EmailVerificationPage = () => {
  return (
    <>
      <Helmet>
        <title>Email Verification - WasteAuth System</title>
        <meta name="description" content="Email verification for password reset. Complete your WasteAuth password recovery process." />
        <meta name="keywords" content="email verification, password reset, authentication, waste management" />
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
                  <h1 className="text-2xl font-bold">WasteAuth</h1>
                  <p className="text-blue-100 text-sm">Waste Management Platform</p>
                </div>
              </div>

              {/* Verification Message */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Check Your Email
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We've sent a password reset link to your registered email address. Follow the link to create a new password.
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-blue-100">Email sent successfully</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={16} />
                  </div>
                  <span className="text-blue-100">Check your inbox and spam folder</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="MousePointer" size={16} />
                  </div>
                  <span className="text-blue-100">Click the reset link in email</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Verification Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md mx-auto w-full">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MailCheck" size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Email Sent Successfully
                </h3>
                <p className="text-gray-600">
                  Please check your email for the password reset link
                </p>
              </div>

              {/* Email Verification Form */}
              <EmailVerificationForm />

              {/* Security Badges */}
              <SecurityBadges />

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date()?.getFullYear()} WasteAuth System. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Secure email verification process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerificationPage;