//src/pages/reset-password/index.jsx


import React from 'react';
        import { Helmet } from 'react-helmet';
        import ResetPasswordForm from './components/ResetPasswordForm';
        import SecurityBadges from './components/SecurityBadges';
        import Icon from '../../components/AppIcon';

        const ResetPasswordPage = () => {
          return (
            <>
              <Helmet>
                <title>Create New Password - WasteAuth System</title>
                <meta name="description" content="Create a new secure password for your WasteAuth account following government-grade security standards." />
                <meta name="keywords" content="new password, password reset, security, waste management, authentication" />
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

                      {/* Welcome Message */}
                      <div className="mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                          Create New Password
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed">
                          Set up a strong, secure password that meets our government-grade security requirements.
                        </p>
                      </div>

                      {/* Security Requirements */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Icon name="Check" size={16} />
                          </div>
                          <span className="text-blue-100">Minimum 8 characters length</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Icon name="Check" size={16} />
                          </div>
                          <span className="text-blue-100">Include uppercase & lowercase</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Icon name="Check" size={16} />
                          </div>
                          <span className="text-blue-100">Include numbers & special characters</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Reset Password Form */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <div className="max-w-md mx-auto w-full">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Lock" size={32} color="rgb(34, 197, 94)" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Set New Password
                        </h3>
                        <p className="text-gray-600">
                          Create a strong password that you haven't used before to secure your account.
                        </p>
                      </div>

                      {/* Reset Password Form */}
                      <ResetPasswordForm />

                      {/* Security Badges */}
                      <SecurityBadges />

                      {/* Footer */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <p className="text-xs text-gray-500">
                          © {new Date()?.getFullYear()} WasteAuth System. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Government-grade security for municipal waste management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        };

        export default ResetPasswordPage;