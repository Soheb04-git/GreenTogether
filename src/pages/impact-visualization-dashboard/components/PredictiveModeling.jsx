//src/pages/impact-visualization-dashboard/components/PredictiveModeling.jsx

import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PredictiveModeling = () => {
  const [selectedScenario, setSelectedScenario] = useState('current');
  const [selectedMetric, setSelectedMetric] = useState('waste');

  const scenarios = [
    { 
      value: 'current', 
      label: 'Current Trend', 
      description: 'Based on existing participation rates',
      color: '#2E7D32',
      icon: 'TrendingUp'
    },
    { 
      value: 'optimistic', 
      label: 'Accelerated Growth', 
      description: 'With increased community engagement',
      color: '#4CAF50',
      icon: 'Zap'
    },
    { 
      value: 'conservative', 
      label: 'Steady Progress', 
      description: 'Minimal growth scenario',
      color: '#FF9800',
      icon: 'Minus'
    }
  ];

  const metrics = [
    { value: 'waste', label: 'Waste Reduction', icon: 'Recycle', unit: 'Tonnes' },
    { value: 'carbon', label: 'Carbon Impact', icon: 'Leaf', unit: 'Tonnes CO₂' },
    { value: 'communities', label: 'Community Growth', icon: 'Users', unit: 'Communities' },
    { value: 'recycling', label: 'Recycling Rate', icon: 'RotateCcw', unit: 'Percentage' }
  ];

  const generatePredictionData = (scenario, metric) => {
    const baseData = [
      { month: 'Oct 2024', current: 423, historical: 423 },
      { month: 'Nov 2024', current: 445, historical: 445 },
      { month: 'Dec 2024', current: 467, historical: 467 }
    ];

    const futureMonths = [
      'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025',
      'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025'
    ];

    const multipliers = {
      current: { waste: 1.08, carbon: 1.06, communities: 1.12, recycling: 1.04 },
      optimistic: { waste: 1.15, carbon: 1.12, communities: 1.25, recycling: 1.08 },
      conservative: { waste: 1.04, carbon: 1.03, communities: 1.06, recycling: 1.02 }
    };

    const multiplier = multipliers?.[scenario]?.[metric];
    let lastValue = 467;

    const futureData = futureMonths?.map((month, index) => {
      lastValue = Math.floor(lastValue * multiplier);
      return {
        month,
        current: lastValue,
        historical: null
      };
    });

    return [...baseData, ...futureData];
  };

  const predictionData = generatePredictionData(selectedScenario, selectedMetric);

  const milestones = [
    {
      date: 'March 2025',
      title: '5,000 Tonnes Milestone',
      description: 'Projected to divert 5,000 tonnes of waste from landfills',
      impact: 'Equivalent to removing 1,200 cars from roads for a year',
      probability: 85,
      icon: 'Target'
    },
    {
      date: 'June 2025',
      title: '200 Communities',
      description: 'Expected to reach 200 active communities',
      impact: 'Covering over 2 million citizens across India',
      probability: 78,
      icon: 'Users'
    },
    {
      date: 'September 2025',
      title: 'Carbon Neutral Goal',
      description: 'Achieve carbon neutrality for participating communities',
      impact: 'Offset 10,000 tonnes of CO₂ emissions annually',
      probability: 72,
      icon: 'Leaf'
    },
    {
      date: 'December 2025',
      title: 'National Recognition',
      description: 'Projected to receive Swachh Bharat Excellence Award',
      impact: 'Setting benchmark for digital waste management',
      probability: 68,
      icon: 'Award'
    }
  ];

  const riskFactors = [
    {
      factor: 'Seasonal Variations',
      impact: 'Medium',
      description: 'Monsoon and festival seasons may affect participation rates',
      mitigation: 'Develop weather-adaptive programs and festival-specific campaigns',
      probability: 65
    },
    {
      factor: 'Policy Changes',
      impact: 'High',
      description: 'Government policy shifts could accelerate or slow adoption',
      mitigation: 'Maintain strong government partnerships and policy advocacy',
      probability: 45
    },
    {
      factor: 'Technology Adoption',
      impact: 'Low',
      description: 'Slower smartphone adoption in rural areas',
      mitigation: 'Develop offline-capable features and SMS-based alternatives',
      probability: 30
    },
    {
      factor: 'Economic Factors',
      impact: 'Medium',
      description: 'Economic downturns may reduce participation in paid programs',
      mitigation: 'Focus on free community programs and government subsidies',
      probability: 40
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-error bg-error/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-background py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Crystal" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Predictive Analytics</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Future Impact Projections
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced modeling shows the potential environmental impact of continued community engagement. 
            Explore different scenarios to understand how collective action shapes India's sustainable future.
          </p>
        </div>

        {/* Scenario Selection */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-elevation">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Select Projection Scenario
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {scenarios?.map((scenario) => (
              <button
                key={scenario?.value}
                onClick={() => setSelectedScenario(scenario?.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedScenario === scenario?.value
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    selectedScenario === scenario?.value ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <Icon name={scenario?.icon} size={16} />
                  </div>
                  <h4 className="font-semibold text-foreground">{scenario?.label}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{scenario?.description}</p>
              </button>
            ))}
          </div>

          {/* Metric Selection */}
          <div className="flex flex-wrap gap-2">
            {metrics?.map((metric) => (
              <Button
                key={metric?.value}
                variant={selectedMetric === metric?.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedMetric(metric?.value)}
                iconName={metric?.icon}
                iconPosition="left"
                iconSize={16}
              >
                {metric?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Prediction Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {metrics?.find(m => m?.value === selectedMetric)?.label} Forecast
                  </h3>
                  <p className="text-muted-foreground">
                    {scenarios?.find(s => s?.value === selectedScenario)?.label} scenario through 2025
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Historical</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Projected</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={predictionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#666666"
                      tick={{ fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis stroke="#666666" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="current" 
                      stroke={scenarios?.find(s => s?.value === selectedScenario)?.color}
                      fill={scenarios?.find(s => s?.value === selectedScenario)?.color}
                      fillOpacity={0.3}
                      strokeWidth={3}
                      name={`${metrics?.find(m => m?.value === selectedMetric)?.label} (${metrics?.find(m => m?.value === selectedMetric)?.unit})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Key Projections */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                2025 Year-End Projection
              </h3>
              
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {predictionData?.[predictionData?.length - 1]?.current?.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metrics?.find(m => m?.value === selectedMetric)?.unit}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-success/5 rounded-lg">
                    <div className="text-lg font-bold text-success">+{Math.floor(((predictionData?.[predictionData?.length - 1]?.current - 467) / 467) * 100)}%</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <div className="text-lg font-bold text-accent">
                      {scenarios?.find(s => s?.value === selectedScenario)?.label === 'Accelerated Growth' ? '92%' : 
                       scenarios?.find(s => s?.value === selectedScenario)?.label === 'Current Trend' ? '78%' : '65%'}
                    </div>
                    <div className="text-xs text-muted-foreground">Confidence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Lightbulb" size={20} className="text-secondary" />
                <h3 className="font-semibold text-foreground">Scenario Insight</h3>
              </div>
              
              <p className="text-sm text-foreground mb-4">
                {selectedScenario === 'optimistic' && 
                  "With increased community engagement and government support, we could exceed our environmental targets by 25% and create a model for global sustainability programs."
                }
                {selectedScenario === 'current' && 
                  "Maintaining current growth rates will help us achieve significant environmental impact while building sustainable community practices across India."
                }
                {selectedScenario === 'conservative' && 
                  "Even with minimal growth, consistent participation will create meaningful environmental change and establish strong foundations for future expansion."
                }
              </p>

              <Button variant="outline" size="sm" className="w-full" iconName="ArrowRight" iconPosition="right">
                View Detailed Analysis
              </Button>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mb-12">
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-elevation">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Projected Milestones & Achievements
            </h3>

            <div className="space-y-6">
              {milestones?.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={milestone?.icon} size={20} color="white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{milestone?.title}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium text-success">{milestone?.probability}%</div>
                        <div className="text-xs text-muted-foreground">probability</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{milestone?.description}</p>
                    <p className="text-sm text-foreground font-medium">{milestone?.impact}</p>
                    
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Expected: {milestone?.date}</span>
                        <span>{milestone?.probability}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-primary to-success h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: `${milestone?.probability}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-elevation">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Risk Assessment & Mitigation
              </h3>
              <p className="text-muted-foreground">
                Potential challenges and our strategies to address them
              </p>
            </div>
            
            <Button variant="outline" iconName="Shield" iconPosition="left">
              Risk Management Plan
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {riskFactors?.map((risk, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{risk?.factor}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(risk?.impact)}`}>
                      {risk?.impact} Impact
                    </span>
                    <span className="text-xs text-muted-foreground">{risk?.probability}%</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{risk?.description}</p>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Shield" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground">{risk?.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveModeling;