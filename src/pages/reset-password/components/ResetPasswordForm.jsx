//src/pages/reset-password/components/ResetPasswordForm.jsx

import React, { useState, useEffect } from 'react';
        import { useNavigate, useSearchParams } from 'react-router-dom';
        import Input from '../../../components/ui/Input';
        import Button from '../../../components/ui/Button';
        import Icon from '../../../components/AppIcon';

        const ResetPasswordForm = () => {
          const navigate = useNavigate();
          const [searchParams] = useSearchParams();
          const [formData, setFormData] = useState({
            password: '',
            confirmPassword: ''
          });
          const [showPassword, setShowPassword] = useState({
            password: false,
            confirmPassword: false
          });
          const [errors, setErrors] = useState({});
          const [isLoading, setIsLoading] = useState(false);
          const [message, setMessage] = useState({ type: '', text: '' });
          const [passwordStrength, setPasswordStrength] = useState({
            score: 0,
            feedback: []
          });

          // Check for valid reset token on component mount
          useEffect(() => {
            const token = searchParams?.get('token');
            if (!token) {
              setMessage({
                type: 'error',
                text: 'Invalid or missing reset token. Please request a new password reset link.'
              });
            }
          }, [searchParams]);

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

            // Check password strength for the password field
            if (name === 'password') {
              checkPasswordStrength(value);
            }
          };

          const checkPasswordStrength = (password) => {
            let score = 0;
            const feedback = [];

            // Length check
            if (password?.length >= 8) {
              score += 1;
            } else {
              feedback?.push('At least 8 characters');
            }

            // Uppercase check
            if (/[A-Z]/?.test(password)) {
              score += 1;
            } else {
              feedback?.push('One uppercase letter');
            }

            // Lowercase check
            if (/[a-z]/?.test(password)) {
              score += 1;
            } else {
              feedback?.push('One lowercase letter');
            }

            // Number check
            if (/\d/?.test(password)) {
              score += 1;
            } else {
              feedback?.push('One number');
            }

            // Special character check
            if (/[!@#$%^&*(),.?":{}|<>]/?.test(password)) {
              score += 1;
            } else {
              feedback?.push('One special character');
            }

            // Common password check
            const commonPasswords = ['password', '123456', 'qwerty', 'admin'];
            if (commonPasswords?.some(common => password?.toLowerCase()?.includes(common))) {
              score = Math.max(0, score - 2);
              feedback?.push('Avoid common passwords');
            }

            setPasswordStrength({ score, feedback });
          };

          const getPasswordStrengthText = (score) => {
            if (score <= 2) return { text: 'Weak', color: 'text-red-600' };
            if (score <= 3) return { text: 'Fair', color: 'text-yellow-600' };
            if (score <= 4) return { text: 'Good', color: 'text-blue-600' };
            return { text: 'Strong', color: 'text-green-600' };
          };

          const getPasswordStrengthBarColor = (score) => {
            if (score <= 2) return 'bg-red-500';
            if (score <= 3) return 'bg-yellow-500';
            if (score <= 4) return 'bg-blue-500';
            return 'bg-green-500';
          };

          const validateForm = () => {
            const newErrors = {};
            
            if (!formData?.password?.trim()) {
              newErrors.password = 'Password is required';
            } else if (formData?.password?.length < 8) {
              newErrors.password = 'Password must be at least 8 characters';
            } else if (passwordStrength?.score < 3) {
              newErrors.password = 'Password is too weak. Please follow the requirements.';
            }
            
            if (!formData?.confirmPassword?.trim()) {
              newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData?.password !== formData?.confirmPassword) {
              newErrors.confirmPassword = 'Passwords do not match';
            }
            
            setErrors(newErrors);
            return Object.keys(newErrors)?.length === 0;
          };

          const handleSubmit = async (e) => {
            e?.preventDefault();
            
            const token = searchParams?.get('token');
            if (!token) {
              setMessage({
                type: 'error',
                text: 'Invalid reset token. Please request a new password reset link.'
              });
              return;
            }
            
            if (!validateForm()) {
              return;
            }
            
            setIsLoading(true);
            
            // Simulate API call delay
            setTimeout(() => {
              setMessage({ 
                type: 'success', 
                text: 'Your password has been successfully reset! You can now sign in with your new password.' 
              });
              
              // Clear stored reset email
              localStorage.removeItem('wasteauth_reset_email');
              
              // Redirect to login after successful reset
              setTimeout(() => {
                navigate('/login', { 
                  state: { 
                    message: { 
                      type: 'success', 
                      text: 'Password reset successful! Please sign in with your new password.' 
                    } 
                  } 
                });
              }, 2000);
              
              setIsLoading(false);
            }, 2000);
          };

          const handleBackToLogin = () => {
            navigate('/login');
          };

          const togglePasswordVisibility = (field) => {
            setShowPassword(prev => ({
              ...prev,
              [field]: !prev?.[field]
            }));
          };

          const token = searchParams?.get('token');

          return (
            <div className="w-full max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Password Input */}
                <div className="relative">
                  <Input
                    label="New Password"
                    type={showPassword?.password ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your new password"
                    value={formData?.password}
                    onChange={handleInputChange}
                    error={errors?.password}
                    required
                    className="w-full pr-12"
                    disabled={!token || message?.type === 'success'}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('password')}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={showPassword?.password ? 'Hide password' : 'Show password'}
                  >
                    <Icon 
                      name={showPassword?.password ? 'EyeOff' : 'Eye'} 
                      size={20} 
                    />
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {formData?.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Password Strength:</span>
                      <span className={`text-sm font-medium ${getPasswordStrengthText(passwordStrength?.score)?.color}`}>
                        {getPasswordStrengthText(passwordStrength?.score)?.text}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthBarColor(passwordStrength?.score)}`}
                        style={{ width: `${(passwordStrength?.score / 5) * 100}%` }}
                      ></div>
                    </div>
                    {passwordStrength?.feedback?.length > 0 && (
                      <div className="text-xs text-gray-500">
                        <span>Required: </span>
                        <span>{passwordStrength?.feedback?.join(', ')}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Confirm Password Input */}
                <div className="relative">
                  <Input
                    label="Confirm New Password"
                    type={showPassword?.confirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm your new password"
                    value={formData?.confirmPassword}
                    onChange={handleInputChange}
                    error={errors?.confirmPassword}
                    required
                    className="w-full pr-12"
                    disabled={!token || message?.type === 'success'}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirmPassword')}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={showPassword?.confirmPassword ? 'Hide password' : 'Show password'}
                  >
                    <Icon 
                      name={showPassword?.confirmPassword ? 'EyeOff' : 'Eye'} 
                      size={20} 
                    />
                  </button>
                </div>

                {/* Password Match Indicator */}
                {formData?.confirmPassword && (
                  <div className="flex items-center gap-2 text-sm">
                    <Icon 
                      name={formData?.password === formData?.confirmPassword ? 'Check' : 'X'} 
                      size={16} 
                      color={formData?.password === formData?.confirmPassword ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'} 
                    />
                    <span className={formData?.password === formData?.confirmPassword ? 'text-green-600' : 'text-red-600'}>
                      {formData?.password === formData?.confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                    </span>
                  </div>
                )}

                {/* Message Display */}
                {message?.text && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${
                    message?.type === 'success' ?'bg-green-50 text-green-700 border border-green-200' 
                      : message?.type === 'error' ?'bg-red-50 text-red-700 border border-red-200' :'bg-blue-50 text-blue-700 border border-blue-200'
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
                          <div className="mt-2 text-xs text-green-600">
                            Redirecting to login page...
                          </div>
                        )}
                        {message?.type === 'error' && !token && (
                          <div className="mt-3 pt-3 border-t border-red-200">
                            <button
                              type="button"
                              onClick={() => navigate('/forgot-password')}
                              className="text-xs text-red-600 hover:text-red-700 underline"
                            >
                              Request a new reset link
                            </button>
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
                  disabled={!token || message?.type === 'success' || passwordStrength?.score < 3}
                >
                  {isLoading ? 'Updating Password...' : 'Update Password'}
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
              </form>
            </div>
          );
        };

        export default ResetPasswordForm;