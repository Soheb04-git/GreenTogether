//src/pages/admin-portal/monitoring-hub/components/PredictiveAnalysis.jsx

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, PieChart, Pie, Cell } from 'recharts';
import Icon from "../../../../components/AppIcon";
import Button from "../../../../components/ui/Button";


const PredictiveAnalytics = ({ predictions, historicalData, onRefreshPredictions }) => {
  const [selectedMetric, setSelectedMetric] = useState('waste_volume');
  const [timeHorizon, setTimeHorizon] = useState('7d');

  const metrics = [
    { id: 'waste_volume', label: 'Waste Volume', icon: 'BarChart3', color: '#2E7D32' },
    { id: 'collection_efficiency', label: 'Collection Efficiency', icon: 'TrendingUp', color: '#1565C0' },
    { id: 'resource_demand', label: 'Resource Demand', icon: 'Users', color: '#FF9800' },
    { id: 'maintenance_needs', label: 'Maintenance Needs', icon: 'Settings', color: '#F44336' }
  ];

  const timeHorizons = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const wasteVolumeData = [
    { date: '2025-01-10', actual: 2400, predicted: 2420, confidence: 95 },
    { date: '2025-01-11', actual: 2210, predicted: 2180, confidence: 92 },
    { date: '2025-01-12', actual: 2290, predicted: 2310, confidence: 94 },
    { date: '2025-01-13', actual: 2000, predicted: 2050, confidence: 89 },
    { date: '2025-01-14', actual: 2181, predicted: 2200, confidence: 91 },
    { date: '2025-01-15', actual: 2500, predicted: 2480, confidence: 93 },
    { date: '2025-01-16', actual: null, predicted: 2350, confidence: 88 },
    { date: '2025-01-17', actual: null, predicted: 2420, confidence: 85 },
    { date: '2025-01-18', actual: null, predicted: 2380, confidence: 87 },
    { date: '2025-01-19', actual: null, predicted: 2450, confidence: 84 },
    { date: '2025-01-20', actual: null, predicted: 2520, confidence: 82 },
    { date: '2025-01-21', actual: null, predicted: 2600, confidence: 80 },
    { date: '2025-01-22', actual: null, predicted: 2580, confidence: 78 }
  ];

  const riskFactors = [
    { name: 'Weather Impact', value: 35, color: '#FF9800' },
    { name: 'Holiday Season', value: 25, color: '#2E7D32' },
    { name: 'Population Growth', value: 20, color: '#1565C0' },
    { name: 'Infrastructure', value: 15, color: '#F44336' },
    { name: 'Other', value: 5, color: '#9E9E9E' }
  ];

  const maintenancePredictions = [
    { facility: 'Processing Plant A', risk: 85, nextMaintenance: '2025-01-20', type: 'Critical' },
    { facility: 'Collection Hub B', risk: 65, nextMaintenance: '2025-01-25', type: 'Preventive' },
    { facility: 'Transfer Station C', risk: 45, nextMaintenance: '2025-02-01', type: 'Routine' },
    { facility: 'Sorting Facility D', risk: 30, nextMaintenance: '2025-02-10', type: 'Routine' }
  ];

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-success';
    if (confidence >= 80) return 'text-warning';
    return 'text-error';
  };

  const getRiskColor = (risk) => {
    if (risk >= 80) return 'bg-error text-error-foreground';
    if (risk >= 60) return 'bg-warning text-warning-foreground';
    if (risk >= 40) return 'bg-primary text-primary-foreground';
    return 'bg-success text-success-foreground';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Predictive Analytics</h2>
          <p className="text-sm text-muted-foreground">AI-powered insights and forecasting</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {timeHorizons?.map((horizon) => (
              <button
                key={horizon?.value}
                onClick={() => setTimeHorizon(horizon?.value)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  timeHorizon === horizon?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {horizon?.label}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onRefreshPredictions}
            iconName="RefreshCw"
            iconPosition="left"
            iconSize={16}
          >
            Refresh
          </Button>
        </div>
      </div>
      {/* Metric Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics?.map((metric) => (
          <button
            key={metric?.id}
            onClick={() => setSelectedMetric(metric?.id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedMetric === metric?.id
                ? 'border-primary bg-primary/5 shadow-elevation'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                selectedMetric === metric?.id ? 'bg-primary/10' : 'bg-muted'
              }`}>
                <Icon 
                  name={metric?.icon} 
                  size={20} 
                  style={{ color: selectedMetric === metric?.id ? metric?.color : undefined }}
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-foreground">{metric?.label}</div>
                <div className="text-xs text-muted-foreground">Forecast</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Main Chart */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-elevation">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">
            {metrics?.find(m => m?.id === selectedMetric)?.label} Forecast
          </h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Actual</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Predicted</span>
            </div>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={wasteVolumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                tickFormatter={(value) => new Date(value)?.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                }}
                formatter={(value, name) => [
                  `${value} tons`,
                  name === 'actual' ? 'Actual' : 'Predicted'
                ]}
                labelFormatter={(value) => new Date(value)?.toLocaleDateString('en-IN')}
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                connectNulls={false}
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="var(--color-accent)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'var(--color-accent)', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Confidence Indicator */}
        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Prediction Confidence</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                Average: <span className={`font-medium ${getConfidenceColor(85)}`}>85%</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Next 7 days: <span className={`font-medium ${getConfidenceColor(88)}`}>88%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Risk Factors & Maintenance Predictions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Factors */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-elevation">
          <h3 className="text-lg font-semibold text-foreground mb-4">Risk Factors Analysis</h3>
          
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskFactors}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskFactors?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Impact']}
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {riskFactors?.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: factor?.color }}
                  ></div>
                  <span className="text-sm text-foreground">{factor?.name}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{factor?.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Predictions */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-elevation">
          <h3 className="text-lg font-semibold text-foreground mb-4">Maintenance Predictions</h3>
          
          <div className="space-y-4">
            {maintenancePredictions?.map((prediction, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-foreground">{prediction?.facility}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(prediction?.risk)}`}>
                    {prediction?.risk}% Risk
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">
                    Next: {new Date(prediction.nextMaintenance)?.toLocaleDateString('en-IN')}
                  </div>
                  <div className={`font-medium ${
                    prediction?.type === 'Critical' ? 'text-error' :
                    prediction?.type === 'Preventive' ? 'text-warning' : 'text-success'
                  }`}>
                    {prediction?.type}
                  </div>
                </div>

                {/* Risk Progress Bar */}
                <div className="mt-3">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        prediction?.risk >= 80 ? 'bg-error' :
                        prediction?.risk >= 60 ? 'bg-warning' :
                        prediction?.risk >= 40 ? 'bg-primary' : 'bg-success'
                      }`}
                      style={{ width: `${prediction?.risk}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-2">
              <Icon name="Lightbulb" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">AI Recommendation</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Schedule maintenance for Processing Plant A within 3 days to prevent critical failure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;