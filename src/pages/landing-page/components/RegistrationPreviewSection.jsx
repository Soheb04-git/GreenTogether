//src/pages/landing-page/cmponents/RegistrationPreviewSection.jsx

import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

const RegistrationPreviewSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    location: '',
    preferences: []
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(120); // seconds

  const steps = [
    {
      id: 1,
      title: 'Phone Verification',
      description: 'Verify your mobile number with OTP',
      icon: 'Smartphone',
      duration: 30
    },
    {
      id: 2,
      title: 'Location Selection',
      description: 'Set your neighborhood location',
      icon: 'MapPin',
      duration: 45
    },
    {
      id: 3,
      title: 'Preferences',
      description: 'Choose your involvement level',
      icon: 'Settings',
      duration: 45
    }
  ];

  const preferences = [
    {
      id: 'reporter',
      title: 'Waste Reporter',
      description: 'Report waste issues in your area',
      icon: 'Camera',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'volunteer',
      title: 'Community Volunteer',
      description: 'Participate in cleanup drives',
      icon: 'Users',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'advocate',
      title: 'Environmental Advocate',
      description: 'Spread awareness and educate others',
      icon: 'Megaphone',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'monitor',
      title: 'Progress Monitor',
      description: 'Track and celebrate improvements',
      icon: 'BarChart3',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  React.useEffect(() => {
    if (estimatedTime > 0) {
      const timer = setTimeout(() => setEstimatedTime(estimatedTime - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [estimatedTime]);

  const handlePhoneSubmit = () => {
    if (formData?.phone?.length === 10) {
      setIsOtpSent(true);
      console.log('OTP sent to:', formData?.phone);
    }
  };

  const handleOtpVerify = () => {
    if (formData?.otp?.length === 6) {
      setCurrentStep(2);
      console.log('OTP verified');
    }
  };

  const handleLocationDetect = () => {
    setFormData({ ...formData, location: 'Koramangala, Bangalore, Karnataka' });
    setTimeout(() => setCurrentStep(3), 1000);
  };

  const handlePreferenceToggle = (prefId) => {
    const newPreferences = formData?.preferences?.includes(prefId)
      ? formData?.preferences?.filter(p => p !== prefId)
      : [...formData?.preferences, prefId];
    setFormData({ ...formData, preferences: newPreferences });
  };

  const handleComplete = () => {
    console.log('Registration completed:', formData);
    alert('Registration completed! Welcome to WasteWise India community.');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <Icon name="UserPlus" size={16} className="mr-2" />
            <span className="text-sm font-medium">Quick Registration</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join in Just <span className="text-primary">3 Simple Steps</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-8">
            Get started with GreenTogether in under 2 minutes. 
            No lengthy forms, just quick verification and you're ready to make an impact.
          </p>

          {/* Time Estimate */}
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-card border border-green-100">
            <Icon name="Clock" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">
              Estimated completion time: {formatTime(estimatedTime)}
            </span>
          </div>
        </div>

        {/* Registration Process Preview */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps?.map((step, index) => (
              <React.Fragment key={step?.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step?.id 
                      ? 'bg-primary border-primary text-white' 
                      : currentStep === step?.id 
                        ? 'bg-white border-primary text-primary' :'bg-gray-100 border-gray-300 text-gray-400'
                  }`}>
                    {currentStep > step?.id ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <Icon name={step?.icon} size={20} />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${
                      currentStep >= step?.id ? 'text-primary' : 'text-text-secondary'
                    }`}>
                      {step?.title}
                    </div>
                    <div className="text-xs text-text-secondary hidden sm:block">
                      ~{step?.duration}s
                    </div>
                  </div>
                </div>
                
                {index < steps?.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step?.id ? 'bg-primary' : 'bg-gray-300'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Interactive Registration Form */}
          <div className="bg-white rounded-2xl shadow-elevation p-8 border border-gray-100">
            {/* Step 1: Phone Verification */}
            {currentStep === 1 && (
              <div className="text-center">
                <Icon name="Smartphone" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Verify Your Phone Number
                </h3>
                <p className="text-text-secondary mb-8">
                  We'll send you a secure OTP to verify your mobile number
                </p>

                <div className="max-w-md mx-auto space-y-4">
                  <Input
                    label="Mobile Number"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={formData?.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
                    className="text-center"
                  />

                  {!isOtpSent ? (
                    <Button
                      variant="default"
                      fullWidth
                      onClick={handlePhoneSubmit}
                      disabled={formData?.phone?.length !== 10}
                      iconName="Send"
                      iconPosition="right"
                    >
                      Send OTP
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center text-green-800">
                          <Icon name="CheckCircle" size={16} className="mr-2" />
                          <span className="text-sm">OTP sent to +91 {formData?.phone}</span>
                        </div>
                      </div>

                      <Input
                        label="Enter OTP"
                        type="text"
                        placeholder="6-digit OTP"
                        value={formData?.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e?.target?.value })}
                        className="text-center"
                      />

                      <Button
                        variant="default"
                        fullWidth
                        onClick={handleOtpVerify}
                        disabled={formData?.otp?.length !== 6}
                        iconName="Shield"
                        iconPosition="right"
                      >
                        Verify OTP
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Location Selection */}
            {currentStep === 2 && (
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Set Your Location
                </h3>
                <p className="text-text-secondary mb-8">
                  Help us connect you with your local community and waste management services
                </p>

                <div className="max-w-md mx-auto space-y-4">
                  {!formData?.location ? (
                    <div className="space-y-4">
                      <Button
                        variant="default"
                        fullWidth
                        onClick={handleLocationDetect}
                        iconName="Navigation"
                        iconPosition="left"
                      >
                        Auto-Detect Location
                      </Button>
                      
                      <div className="text-sm text-text-secondary">or</div>
                      
                      <Input
                        label="Enter Location Manually"
                        type="text"
                        placeholder="Area, City, State"
                        value={formData?.location}
                        onChange={(e) => setFormData({ ...formData, location: e?.target?.value })}
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center text-green-800">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          <span className="text-sm">{formData?.location}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-text-secondary">
                        Location detected successfully! Moving to next step...
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="text-center">
                <Icon name="Settings" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Choose Your Involvement
                </h3>
                <p className="text-text-secondary mb-8">
                  Select how you'd like to contribute to your community's cleanliness (you can change this later)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  {preferences?.map((pref) => (
                    <button
                      key={pref?.id}
                      onClick={() => handlePreferenceToggle(pref?.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        formData?.preferences?.includes(pref?.id)
                          ? 'border-primary bg-primary/5' :'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-10 h-10 ${pref?.bgColor} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                          <Icon name={pref?.icon} size={20} className={pref?.color} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {pref?.title}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {pref?.description}
                          </p>
                        </div>
                        {formData?.preferences?.includes(pref?.id) && (
                          <Icon name="CheckCircle" size={20} className="text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  onClick={handleComplete}
                  disabled={formData?.preferences?.length === 0}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="px-8"
                >
                  Complete Registration
                </Button>

                <div className="mt-4 text-sm text-text-secondary">
                  {formData?.preferences?.length} of {preferences?.length} preferences selected
                </div>
              </div>
            )}
          </div>

          {/* Benefits Reminder */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-center text-foreground mb-6">
              What happens after registration?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Instant Access</h4>
                <p className="text-sm text-text-secondary">
                  Start reporting waste issues and tracking progress immediately
                </p>
              </div>
              
              <div className="text-center">
                <Icon name="Users" size={32} className="text-secondary mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Community Connection</h4>
                <p className="text-sm text-text-secondary">
                  Connect with neighbors and local waste management workers
                </p>
              </div>
              
              <div className="text-center">
                <Icon name="Award" size={32} className="text-accent mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Recognition & Rewards</h4>
                <p className="text-sm text-text-secondary">
                  Earn points and recognition for your environmental contributions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPreviewSection;