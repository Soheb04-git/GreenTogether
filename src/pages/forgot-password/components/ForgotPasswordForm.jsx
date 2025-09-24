//src/pages/forgot-password/components/ForgotPasswordForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Mock registered users for validation
  const registeredUsers = [
    'citizen@wasteauth.com',
    'worker@wasteauth.com',
    'champion@wasteauth.com',
    'admin@wasteauth.com'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear general message
    if (message?.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const userExists = registeredUsers?.includes(formData?.email?.toLowerCase());
      
      if (userExists) {
        // Store email for verification page
        localStorage.setItem('wasteauth_reset_email', formData?.email);
        
        setMessage({ 
          type: 'success', 
          text: 'Password reset instructions have been sent to your email address. Please check your inbox and follow the instructions to reset your password.' 
        });
        
        // Navigate to email verification page
        setTimeout(() => {
          navigate('/email-verification');
        }, 2000);
      } else {
        setMessage({ 
          type: 'error', 
          text: 'This email address is not registered in our system. Please check and try again.' 
        });
      }
      
      setIsLoading(false);
    }, 2000);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your registered email address"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
          className="w-full"
        />

        {/* Message Display */}
        {message?.text && (
          <div className={`p-4 rounded-lg text-sm font-medium ${
            message?.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 
            message?.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            <div className="flex items-start gap-3">
              <Icon 
                name={
                  message?.type === 'success' ? 'CheckCircle' : 
                  message?.type === 'error' ? 'AlertCircle' : 'Info'
                } 
                size={20} 
                className="flex-shrink-0 mt-0.5"
              />
              <div className="flex-1">
                {message?.text}
                {message?.type === 'success' && (
                  <div className="mt-3 pt-3 border-t border-green-200">
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <Icon name="Clock" size={14} />
                      <span>Didn't receive the email? Check your spam folder or try again in a few minutes.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          loading={isLoading}
          fullWidth
          className="h-12"
          disabled={message?.type === 'success'}
        >
          {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
        </Button>

        {/* Back to Login */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleBackToLogin}
            className="text-sm text-gray-600 hover:text-gray-700 font-medium transition-colors inline-flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={16} />
            Back to Sign In
          </button>
        </div>

        {/* Additional Help */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">
            Having trouble accessing your account?
          </p>
          <p className="text-xs text-gray-400">
            Contact your system administrator or IT support for assistance.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;