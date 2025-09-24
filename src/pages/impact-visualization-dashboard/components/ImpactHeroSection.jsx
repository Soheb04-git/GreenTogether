//src/pages/impact-visualization-dashboard/components/ImpactHeroSection.jsx

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImpactHeroSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    wasteReduced: 0,
    carbonSaved: 0,
    communitiesTransformed: 0,
    treesEquivalent: 0
  });

  const finalStats = {
    wasteReduced: 2847,
    carbonSaved: 1523,
    communitiesTransformed: 156,
    treesEquivalent: 8934
  };

  const [showShareModal, setShowShareModal] = useState(false); 
  const [showReportModal, setShowReportModal] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        wasteReduced: Math.floor(finalStats?.wasteReduced * progress),
        carbonSaved: Math.floor(finalStats?.carbonSaved * progress),
        communitiesTransformed: Math.floor(finalStats?.communitiesTransformed * progress),
        treesEquivalent: Math.floor(finalStats?.treesEquivalent * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const impactMetrics = [
    {
      icon: 'Recycle',
      label: 'Waste Diverted',
      value: animatedStats?.wasteReduced,
      unit: 'Tonnes',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'From landfills this year'
    },
    {
      icon: 'Leaf',
      label: 'Carbon Reduced',
      value: animatedStats?.carbonSaved,
      unit: 'Tonnes CO₂',
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Environmental impact'
    },
    {
      icon: 'Users',
      label: 'Communities',
      value: animatedStats?.communitiesTransformed,
      unit: 'Transformed',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Across India'
    },
    {
      icon: 'TreePine',
      label: 'Trees Equivalent',
      value: animatedStats?.treesEquivalent,
      unit: 'Planted',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      description: 'Carbon offset impact'
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://wastewiseindia.org/myimpact");
    setMessage("✅ Link copied to clipboard!");
  };

  const handleShareFeed = () => {
    setMessage("✅ Post shared to community feed!");
  };

  const handleSharePlatform = (platform) => {
    setMessage(`✅ Post shared on ${platform} successfully!`);
  };

  const handleDownloadReport = () => {
    // ---- Option 1: Prototype modal ----
    setShowReportModal(true);

    // ---- Option 2: Actual PDF download if file in /public/reports ----
    // window.open("/reports/impact-report.pdf", "_blank");
  };

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Real-Time Impact</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Collective Impact
            <span className="block text-primary">Transforming India</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Witness the power of community action as we build a sustainable future together. 
            Every small action contributes to massive environmental change across the nation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* 🟢 CHANGE: open Share Modal */}
            <Button
              variant="default"
              iconName="Share2"
              iconPosition="left"
              onClick={() => {
                setShowShareModal(true);
                setMessage("");
              }}
            >
              Share Your Impact
            </Button>

            {/* 🟢 CHANGE: trigger Report Download */}
            <Button
              variant="outline"
              iconName="Download"
              iconPosition="left"
              onClick={handleDownloadReport}
            >
              Download Report
            </Button>
          </div>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics?.map((metric, index) => (
            <div
              key={metric?.label}
              className="bg-card border border-border rounded-xl p-6 shadow-elevation hover:shadow-elevation-lg transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric?.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={24} className={metric?.color} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl lg:text-3xl font-bold ${metric?.color} animate-count-up`}>
                    {metric?.value?.toLocaleString('en-IN')}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {metric?.unit}
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">{metric?.label}</h3>
              <p className="text-sm text-muted-foreground">{metric?.description}</p>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Swachh Bharat Mission Progress
              </h3>
              <p className="text-muted-foreground">
                Contributing to India's national cleanliness goals
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">78%</div>
              <div className="text-sm text-muted-foreground">Target Achievement</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">Waste Segregation Compliance</span>
                <span className="text-primary font-semibold">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[85%] transition-all duration-1000"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">Community Participation</span>
                <span className="text-success font-semibold">72%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-success to-primary h-2 rounded-full w-[72%] transition-all duration-1000"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">Recycling Rate</span>
                <span className="text-accent font-semibold">68%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full w-[68%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SHARE MODAL */}
{showShareModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <Icon name="Share2" size={22} className="text-primary mr-2" />
        <h3 className="text-2xl font-bold text-foreground">Share Your Impact</h3>
      </div>

      <div className="space-y-5">
        {/* Copy Link */}
        <Button
          variant="outline"
          onClick={handleCopyLink}
          className="w-full flex items-center justify-start gap-3 border-primary hover:bg-primary/10"
        >
          <Icon name="Link" size={18} className="text-primary" />
          <span>Copy Link</span>
        </Button>

        {/* Share on Feed */}
        <Button
          variant="outline"
          onClick={handleShareFeed}
          className="w-full flex items-center justify-start gap-3 border-accent hover:bg-accent/10"
        >
          <Icon name="MessageSquare" size={18} className="text-accent" />
          <span>Share on Community Feed</span>
        </Button>

        {/* Social Media */}
        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-3">
            Share on Social Media
          </p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { name: "WhatsApp", color: "text-green-600", bg: "bg-green-100" },
              { name: "Instagram", color: "text-pink-600", bg: "bg-pink-100" },
              { name: "Twitter", color: "text-sky-500", bg: "bg-sky-100" },
              { name: "LinkedIn", color: "text-blue-700", bg: "bg-blue-100" }
            ].map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleSharePlatform(platform.name)}
                className={`p-3 rounded-xl shadow-sm ${platform.bg} hover:scale-105 transition`}
              >
                <Icon name={platform.name} size={22} className={platform.color} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Message */}
      {message && (
        <p className="mt-5 text-sm text-center font-medium text-green-600">
          {message}
        </p>
      )}

      {/* Close */}
      <div className="text-center mt-6">
              <Button
                variant="ghost"
                onClick={() => setShowShareModal(false)}
                className="text-red-500 hover:bg-red-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}


      {/*  REPORT MODAL */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
            <Icon name="CheckCircle" size={40} className="text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Report Downloaded Successfully!</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Your environmental impact report is ready.
            </p>

            <div className="mt-6">
              <Button variant="ghost" onClick={() => setShowReportModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactHeroSection;