// src/pages/landing-page/components/ImpactMetricsSection.jsx

import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const ImpactMetricsSection = () => {
  const [counters, setCounters] = useState({
    wasteProcessed: 0,
    communitiesServed: 0,
    co2Reduced: 0,
    treesEquivalent: 0
  });

  const finalValues = {
    wasteProcessed: 2847392, // kg
    communitiesServed: 1247,
    co2Reduced: 15680, // tonnes
    treesEquivalent: 78400
  };

  const comparisons = [
    {
      metric: 'wasteProcessed',
      comparison: 'equivalent to clearing 142 football fields of waste',
      icon: 'Trash2'
    },
    {
      metric: 'co2Reduced',
      comparison: 'same as removing 3,400 cars from roads for a year',
      icon: 'Car'
    },
    {
      metric: 'treesEquivalent',
      comparison: 'equal to planting a forest the size of 156 football fields',
      icon: 'Trees'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        if (currentStep < steps) {
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(increment * currentStep)
          }));
          currentStep++;
        } else {
          setCounters(prev => ({
            ...prev,
            [key]: finalValues?.[key]
          }));
        }
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'K';
    }
    return num?.toLocaleString('en-IN');
  };

  const metrics = [
    {
      key: 'wasteProcessed',
      title: 'Waste Processed',
      value: counters?.wasteProcessed,
      unit: 'KG',
      icon: 'Recycle',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Total waste collected and processed through our platform'
    },
    {
      key: 'communitiesServed',
      title: 'Communities Served',
      value: counters?.communitiesServed,
      unit: 'AREAS',
      icon: 'Building2',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Neighborhoods and communities actively using WasteWise'
    },
    {
      key: 'co2Reduced',
      title: 'CO₂ Emissions Reduced',
      value: counters?.co2Reduced,
      unit: 'TONNES',
      icon: 'Leaf',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'Carbon emissions prevented through better waste management'
    },
    {
      key: 'treesEquivalent',
      title: 'Trees Equivalent',
      value: counters?.treesEquivalent,
      unit: 'TREES',
      icon: 'Trees',
      color: 'text-green-700',
      bgColor: 'bg-green-100',
      description: 'Environmental impact equivalent in tree planting'
    }
  ];

  return (
    // ✅ removed gradient background → transparent section
    <section id="impact" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            <span className="text-sm font-medium ">Environmental Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-white">
            Measuring Our <span className="text-primary text-white">Collective Impact</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-8 text-white">
            Every action counts. See the real-time environmental impact created by 
            our community of citizens, workers, and organizations across India.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {metrics?.map((metric) => (
            <div key={metric?.key} className="group">
              {/* ✅ glassmorphism card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-gray-200 hover:shadow-elevation transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${metric?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={metric?.icon} size={32} className={metric?.color} />
                </div>
                
                <div className="mb-2">
                  <div className={`text-3xl sm:text-4xl font-bold ${metric?.color} mb-1`}>
                    {formatNumber(metric?.value)}
                  </div>
                  <div className="text-xs text-text-secondary font-medium tracking-wider">
                    {metric?.unit}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {metric?.title}
                </h3>
                
                <p className="text-sm text-text-secondary">
                  {metric?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Comparisons */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12 text-white">
            To Put This in Perspective
          </h3>
          
          <div className="space-y-8">
            {comparisons?.map((comparison, index) => (
              // ✅ glassmorphism comparison cards
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name={comparison?.icon} size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-baseline flex-wrap gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {formatNumber(counters?.[comparison?.metric])}
                      </span>
                      <span className="text-text-secondary">
                        {metrics?.find(m => m?.key === comparison?.metric)?.unit?.toLowerCase()}
                      </span>
                      <span className="text-text-secondary">is</span>
                      <span className="text-foreground font-medium">
                        {comparison?.comparison}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Updates */}
        {/* ✅ glassmorphism applied */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elevation border border-green-200 max-w-3xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <h3 className="text-xl font-semibold text-foreground">Live Impact Updates</h3>
            </div>
            <p className="text-text-secondary">
              These numbers update in real-time as our community takes action across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50/90 rounded-lg">
              <Icon name="Clock" size={24} className="text-green-600 mx-auto mb-2" />
              <div className="text-sm text-text-secondary">Updated every</div>
              <div className="font-semibold text-foreground">5 minutes</div>
            </div>
            
            <div className="text-center p-4 bg-blue-50/90 rounded-lg">
              <Icon name="Users" size={24} className="text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-text-secondary">Active users</div>
              <div className="font-semibold text-foreground">2,847 online</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50/90 rounded-lg">
              <Icon name="Activity" size={24} className="text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-text-secondary">Actions today</div>
              <div className="font-semibold text-foreground">1,234 reports</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* ✅ glassmorphism CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-card border border-gray-200">
            <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Help Us Reach Our Next Milestone
            </h3>
            <p className="text-text-secondary mb-6">
              Join our mission to process 5 million kg of waste and serve 2,000 communities by the end of 2024.
            </p>
            
            {/* Progress Bar */}
            <div className="bg-white rounded-full p-1 mb-6">
              <div className="bg-primary rounded-full h-2 transition-all duration-1000" style={{ width: '57%' }}></div>
            </div>
            
            <div className="flex items-center justify-center text-sm text-text-secondary">
              <Icon name="Users" size={16} className="text-primary mr-2" />
              <span>57% towards our 2024 goal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;
