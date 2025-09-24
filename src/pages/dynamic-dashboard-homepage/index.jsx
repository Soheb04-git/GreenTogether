import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import InteractiveMap from './components/InteractiveMap';
import RoleBasedWidgets from './components/RoleBasedWidgets';
import SocialProofSection from './components/SocialProofSection';
import RoleSelectionModal from './components/RoleSelectionModal';
import DashboardLayout from "../../layouts/DashboardLayout";  // ✅ Added

const DynamicDashboardHomepage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const storedRole = localStorage.getItem('userRole');
    
    setIsAuthenticated(authStatus);
    setUserRole(storedRole);
    setIsLoading(false);

    if (!authStatus && !storedRole) {
      const hasSeenModal = localStorage.getItem('hasSeenRoleModal');
      if (!hasSeenModal) {
        setTimeout(() => {
          setShowRoleModal(true);
        }, 2000);
      }
    }
  }, []);

  const handleRoleSelection = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
    localStorage.setItem('userRole', role);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('hasSeenRoleModal', 'true');
    setShowRoleModal(false);
  };

  const handleStartJourney = () => {
    if (!isAuthenticated) {
      setShowRoleModal(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading WasteWise India...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>WasteWise India - Collective Action, Individual Impact</title>
        <meta name="description" content="Join millions of Indians in creating a cleaner, greener future. Track your impact, learn sustainable practices, and earn rewards for making a difference." />
        <meta name="keywords" content="waste management, India, sustainability, environment, community, gamification, rewards" />
        <meta property="og:title" content="WasteWise India - Transforming Waste Management" />
        <meta property="og:description" content="A comprehensive digital ecosystem platform for waste management in India. Join the movement for a cleaner future." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://wastewise.india.gov.in" />
      </Helmet>

      <DashboardLayout>   {/* ✅ Unified Layout Wrapper */}

        {/* Hero Section */}
        <HeroSection 
          isAuthenticated={isAuthenticated}
          userRole={userRole}
          onStartJourney={handleStartJourney}
        />

        {/* Role-based Dashboard Widgets */}
        {isAuthenticated && (
          <RoleBasedWidgets 
            userRole={userRole}
            isAuthenticated={isAuthenticated}
          />
        )}

        {/* Interactive Map */}
        <InteractiveMap />

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Role Selection Modal */}
        <RoleSelectionModal
          isOpen={showRoleModal}
          onClose={() => {
            setShowRoleModal(false);
            localStorage.setItem('hasSeenRoleModal', 'true');
          }}
          onRoleSelect={handleRoleSelection}
        />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-primary-foreground"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                      <path d="M12 16L13.09 22.26L22 23L13.09 23.74L12 30L10.91 23.74L2 23L10.91 22.26L12 16Z" opacity="0.6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary font-accent">WasteWise</h3>
                    <span className="text-xs text-muted-foreground font-medium">India</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transforming India's waste management through technology, community engagement, and sustainable practices.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/gamified-learning-portal" className="hover:text-primary transition-colors">Learning Portal</a></li>
                  <li><a href="/smart-monitoring-hub" className="hover:text-primary transition-colors">Monitoring Hub</a></li>
                  <li><a href="/community-action-center" className="hover:text-primary transition-colors">Community Center</a></li>
                  <li><a href="/rewards-marketplace" className="hover:text-primary transition-colors">Rewards</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Best Practices</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Policy Updates</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Partner With Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Media Kit</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-muted-foreground mb-4 md:mb-0">
                © {new Date()?.getFullYear()} WasteWise India. All rights reserved. | Aligned with Swachh Bharat Mission
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>

      </DashboardLayout>
    </>
  );
};

export default DynamicDashboardHomepage;
