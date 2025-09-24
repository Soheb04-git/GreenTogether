import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ isAuthenticated = false, userRole = null }) => {
  const [wasteReduced, setWasteReduced] = useState(2847563);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setWasteReduced(prev => prev + Math.floor(Math.random() * 50) + 10);
      setTimeout(() => setIsAnimating(false), 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN')?.format(num);
  };

  const handleStartJourney = () => {
    navigate('/gamified-learning-portal');
  };

  const handleExploreFeatures = () => {
    navigate('/smart-monitoring-hub');
  };

  if (isAuthenticated) {
    return (
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Welcome back, <span className="text-primary capitalize">{userRole || 'Champion'}</span>!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your personalized dashboard is ready. Continue making an impact in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Your Impact</h3>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">127 kg</div>
              <p className="text-sm text-muted-foreground">Waste properly segregated</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Achievements</h3>
                  <p className="text-sm text-muted-foreground">Level progress</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">Level 3</div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Community</h3>
                  <p className="text-sm text-muted-foreground">Active campaigns</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-accent mb-2">3 Active</div>
              <p className="text-sm text-muted-foreground">Join ongoing initiatives</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              onClick={handleExploreFeatures}
              iconName="ArrowRight"
              iconPosition="right"
              className="mr-4"
            >
              Explore Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/community-action-center')}
              iconName="Users"
              iconPosition="left"
            >
              Join Campaign
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Transforming India, One Community at a Time</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Collective Action,</span>
            <br />
            Individual Impact
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Join millions of Indians in creating a cleaner, greener future. Track your impact, 
            learn sustainable practices, and earn rewards for making a difference.
          </p>

          {/* Live Counter */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-8 shadow-elevation-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Icon name="Recycle" size={32} className="text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                  Waste Reduced Across India
                </div>
                <div className={`text-3xl lg:text-4xl font-bold text-primary transition-all duration-500 ${
                  isAnimating ? 'animate-count-up' : ''
                }`}>
                  {formatNumber(wasteReduced)} kg
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
                <span>Live Updates</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} />
                <span>2.3M+ Active Citizens</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="xl"
              onClick={handleStartJourney}
              iconName="Rocket"
              iconPosition="left"
              className="w-full sm:w-auto animate-pulse-gentle"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={handleExploreFeatures}
              iconName="Play"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name="GraduationCap" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Learn & Earn</h3>
            <p className="text-muted-foreground">
              Complete training modules and earn certifications while building sustainable habits.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <Icon name="MapPin" size={32} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Track Impact</h3>
            <p className="text-muted-foreground">
              Monitor real-time waste management data and see your community's progress.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon name="Gift" size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Get Rewarded</h3>
            <p className="text-muted-foreground">
              Earn points and redeem rewards for your environmental contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;