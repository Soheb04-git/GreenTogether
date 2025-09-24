//src/pages/admin-portal/monitoring-hub/components/MapView.jsx

import React from 'react';
import Icon from "../../../../components/AppIcon";



const MetricsGrid = ({ metrics, timeframe, onTimeframeChange }) => {
  const timeframeOptions = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' }
  ];

  const getMetricIcon = (type) => {
    switch (type) {
      case 'waste_processed': return 'Trash2';
      case 'segregation_rate': return 'Recycle';
      case 'collection_efficiency': return 'Truck';
      case 'carbon_reduction': return 'Leaf';
      case 'facilities_active': return 'Building2';
      case 'compliance_score': return 'Shield';
      case 'cost_savings': return 'DollarSign';
      case 'citizen_reports': return 'Users';
      default: return 'BarChart3';
    }
  };

  const getMetricColor = (type, trend) => {
    if (trend === 'up') return 'text-success';
    if (trend === 'down') return 'text-error';
    return 'text-muted-foreground';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      case 'stable': return 'Minus';
      default: return 'Minus';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Timeframe Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Key Performance Indicators</h2>
        <div className="flex items-center space-x-2">
          {timeframeOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => onTimeframeChange(option?.value)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                timeframe === option?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics?.map((metric) => (
          <div
            key={metric?.id}
            className="bg-card rounded-lg border border-border p-6 shadow-elevation hover:shadow-elevation-lg transition-shadow"
          >
            {/* Metric Header */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                metric?.trend === 'up' ? 'bg-success/10' :
                metric?.trend === 'down' ? 'bg-error/10' : 'bg-muted'
              }`}>
                <Icon 
                  name={getMetricIcon(metric?.type)} 
                  size={24} 
                  className={getMetricColor(metric?.type, metric?.trend)}
                />
              </div>
              
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                metric?.trend === 'up' ? 'bg-success/10 text-success' :
                metric?.trend === 'down' ? 'bg-error/10 text-error' : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={getTrendIcon(metric?.trend)} size={12} />
                <span>{metric?.change}</span>
              </div>
            </div>

            {/* Metric Value */}
            <div className="mb-2">
              <div className="text-2xl font-bold text-foreground animate-count-up">
                {metric?.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric?.unit}</div>
            </div>

            {/* Metric Label */}
            <div className="text-sm font-medium text-foreground mb-3">
              {metric?.label}
            </div>

            {/* Progress Bar (if applicable) */}
            {metric?.progress !== undefined && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{metric?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      metric?.progress >= 80 ? 'bg-success' :
                      metric?.progress >= 60 ? 'bg-primary' :
                      metric?.progress >= 40 ? 'bg-warning' : 'bg-error'
                    }`}
                    style={{ width: `${metric?.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Additional Info */}
            {metric?.subtitle && (
              <div className="mt-3 text-xs text-muted-foreground">
                {metric?.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Environmental Impact */}
        <div className="bg-gradient-to-br from-success/5 to-success/10 rounded-lg border border-success/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Leaf" size={20} className="text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Environmental Impact</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">CO₂ Reduced</span>
              <span className="text-sm font-medium text-success">1,245 kg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Trees Equivalent</span>
              <span className="text-sm font-medium text-success">56 trees</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Water Saved</span>
              <span className="text-sm font-medium text-success">2,340 L</span>
            </div>
          </div>
        </div>

        {/* Operational Efficiency */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Operational Efficiency</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Route Optimization</span>
              <span className="text-sm font-medium text-primary">94%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Fuel Savings</span>
              <span className="text-sm font-medium text-primary">₹45,230</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Time Efficiency</span>
              <span className="text-sm font-medium text-primary">+23%</span>
            </div>
          </div>
        </div>

        {/* Community Engagement */}
        <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Community Engagement</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Active Citizens</span>
              <span className="text-sm font-medium text-accent">12,456</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Reports Filed</span>
              <span className="text-sm font-medium text-accent">1,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Satisfaction</span>
              <span className="text-sm font-medium text-accent">4.7/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;