//src/pages/landing-page/cmponents/HeroSection.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  const [wasteProcessed, setWasteProcessed] = useState(2847392);
  const [citiesCount] = useState(127);
  const [usersCount] = useState(50000);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setWasteProcessed(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    console.log('Register as Citizen clicked');
  };

  const handleLogin = () => {
    console.log('Login to Continue clicked');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center z-10" 
      // ✅ removed gradient bg
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicator */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-card border border-green-100">
            <Icon name="MapPin" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-text-secondary">
              {citiesCount} cities already participating
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-teal-300">
            Transform Your City's{' '}
            <span className="text-primary text-white">Waste Management</span>
            <br />
            <p className="text-teal-300 text-gray-100">One Citizen at a Time</p>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed text-white">
            Join {usersCount?.toLocaleString('en-IN')}+ Indians creating cleaner communities through smart waste coordination
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/register')}
              iconName="UserPlus"
              iconPosition="right"
              iconSize={20}
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              Register as Citizen
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/login')}
              iconName="LogIn"
              iconPosition="right"
              iconSize={20}
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              Login to Continue
            </Button>
          </div>

          {/* Real-time Counter */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-elevation border border-green-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Recycle" size={24} className="text-primary mr-3" />
              <h3 className="text-lg font-semibold text-foreground">Live Impact Tracker</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {wasteProcessed?.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-text-secondary">Kg Waste Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">
                  {citiesCount}
                </div>
                <div className="text-sm text-text-secondary">Cities Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                  {Math.floor(usersCount / 1000)}K+
                </div>
                <div className="text-sm text-text-secondary">Active Citizens</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={24} className="text-text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;