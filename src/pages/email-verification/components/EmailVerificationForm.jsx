//src/pages/email-verification/components/EmailVerificationForm.jsx


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const EmailVerificationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    // Get email from localStorage
    const resetEmail = localStorage.getItem('reset_email');
    if (resetEmail) {
      setEmail(resetEmail);
    } else {
      // If no email found, redirect to forgot password
      navigate('/forgot-password');
    }
  }, [navigate]);

  useEffect(() => {
    // Cooldown timer for resend button
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleResendEmail = async () => {
    if (resendCooldown > 0) return;
    
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    // Simulate API call delay
    setTimeout(() => {
      setMessage({ 
        type: 'success', 
        text: 'Password reset link sent again! Please check your email.' 
      });
      setResendCooldown(60); // 60 second cooldown
      setIsLoading(false);
    }, 1000);
  };

  const handleBackToLogin = () => {
    localStorage.removeItem('reset_email');
    navigate('/login');
  };

  const handleBackToForgotPassword = () => {
    localStorage.removeItem('reset_email');
    navigate('/forgot-password');
  };

  const maskEmail = (email) => {
    if (!email?.includes('@')) return email;
    const [username, domain] = email?.split('@');
    const maskedUsername = username?.substring(0, 2) + '***';
    return `${maskedUsername}@${domain}`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-6">
        {/* Email Confirmation */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="Check" size={20} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-1">
                Reset link sent successfully!
              </h4>
              <p className="text-sm text-green-700">
                We've sent a password reset link to:
              </p>
              <p className="text-sm font-mono text-green-800 mt-1">
                {maskEmail(email)}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-700">
              <h4 className="font-semibold mb-2">Next Steps:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Check your email inbox for the reset link</li>
                <li>Don't forget to check your spam/junk folder</li>
                <li>Click the link in the email to reset your password</li>
                <li>The reset link will expire in 1 hour for security</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Message Display */}
        {message?.text && (
          <div className={`p-4 rounded-lg text-sm font-medium ${
            message?.type === 'success' ?'bg-green-50 text-green-700 border border-green-200' :'bg-red-50 text-red-700 border border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              <Icon 
                name={message?.type === 'success' ? 'CheckCircle' : 'AlertCircle'} 
                size={16} 
              />
              {message?.text}
            </div>
          </div>
        )}

        {/* Resend Email Button */}
        <Button
          onClick={handleResendEmail}
          variant="secondary"
          loading={isLoading}
          disabled={resendCooldown > 0}
          fullWidth
          className="h-12"
        >
          {isLoading 
            ? 'Resending...' 
            : resendCooldown > 0 
              ? `Resend in ${resendCooldown}s` 
              : 'Resend Email'
          }
        </Button>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleBackToLogin}
            className="w-full text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Icon name="ArrowLeft" size={16} />
            Back to Login
          </button>
          
          <button
            type="button"
            onClick={handleBackToForgotPassword}
            className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Try Different Email Address
          </button>
        </div>

        {/* Support Information */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
          <Icon name="HelpCircle" size={20} className="text-gray-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Still having trouble? Contact your system administrator
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationForm;