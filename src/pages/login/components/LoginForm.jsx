//src/pages/login/components/LoginForm.jsx


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Mock credentials for different user roles
  const mockCredentials = [
    { email: 'citizen@wasteauth.com', password: 'citizen123', role: 'citizen', redirect: '/gamified-learning-portal' },  // ✅ fixed
    { email: 'worker@wasteauth.com', password: 'worker123', role: 'worker', redirect: '/worker-portal' },                 // ✅ fixed
    { email: 'champion@wasteauth.com', password: 'champion123', role: 'champion', redirect: '/community-action-center' }, // ✅ fixed
    { email: 'admin@wasteauth.com', password: 'admin123', role: 'admin', redirect: '/impact-visualization-dashboard' }    // ✅ fixed
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
    
    if (!formData?.password?.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      const user = mockCredentials?.find(
        cred => cred?.email === formData?.email && cred?.password === formData?.password
      );
      
      if (user) {
        setMessage({ 
          type: 'success', 
          text: `Welcome back! Redirecting to your ${user?.role} dashboard...` 
        });
        
        
        // Store user session (compatible with RequireAuth)
          localStorage.setItem('ww_user', JSON.stringify({
            email: user?.email,
            role: user?.role,
            name: user?.role + " User"
          }));
          localStorage.setItem('ww_role', user?.role);
          localStorage.setItem('ww_token', btoa(`${user?.email}:${Date.now()}`)); // simple token

          // Redirect after success message
          setTimeout(() => {
            navigate(user?.redirect);
          }, 1500);

        
        // Redirect after success message
        setTimeout(() => {
          navigate(user?.redirect);
        }, 1500);
      } else {
        setMessage({ 
          type: 'error', 
          text: 'Invalid email or password. Please check your credentials and try again.' 
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
          className="w-full"
        />

        {/* Password Input */}
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            value={formData?.password}
            onChange={handleInputChange}
            error={errors?.password}
            required
            className="w-full pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <Icon 
              name={showPassword ? 'EyeOff' : 'Eye'} 
              size={20} 
            />
          </button>
        </div>

        {/* Message Display */}
        {message?.text && (
          <div className={`p-3 rounded-lg text-sm font-medium ${
            message?.type === 'success' ?'bg-green-50 text-green-700 border border-green-200' 
              : message?.type === 'error' ?'bg-red-50 text-red-700 border border-red-200' :'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            <div className="flex items-center gap-2">
              <Icon 
                name={
                  message?.type === 'success' ? 'CheckCircle' : 
                  message?.type === 'error' ? 'AlertCircle' : 'Info'
                } 
                size={16} 
              />
              {message?.text}
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
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>

        {/* Forgot Password Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Forgot your password?
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Register here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;