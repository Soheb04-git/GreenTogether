//src/pages/impact-visualization-dashboard/components/InteractiveCharts.jsx

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveCharts = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('waste');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const timeframes = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' }
  ];

  const categories = [
    { value: 'waste', label: 'Waste Management', icon: 'Recycle' },
    { value: 'carbon', label: 'Carbon Impact', icon: 'Leaf' },
    { value: 'community', label: 'Community Growth', icon: 'Users' },
    { value: 'recycling', label: 'Recycling Rates', icon: 'RotateCcw' }
  ];

  const regions = [
    { value: 'all', label: 'All India' },
    { value: 'north', label: 'North India' },
    { value: 'south', label: 'South India' },
    { value: 'west', label: 'West India' },
    { value: 'east', label: 'East India' }
  ];

  const wasteData = [
    { month: 'Jan', collected: 245, recycled: 186, diverted: 201 },
    { month: 'Feb', collected: 267, recycled: 203, diverted: 223 },
    { month: 'Mar', collected: 289, recycled: 221, diverted: 245 },
    { month: 'Apr', collected: 312, recycled: 238, diverted: 267 },
    { month: 'May', collected: 334, recycled: 256, diverted: 289 },
    { month: 'Jun', collected: 356, recycled: 274, diverted: 312 },
    { month: 'Jul', collected: 378, recycled: 292, diverted: 334 },
    { month: 'Aug', collected: 401, recycled: 311, diverted: 356 },
    { month: 'Sep', collected: 423, recycled: 329, diverted: 378 }
  ];

  const carbonData = [
    { month: 'Jan', reduced: 89, target: 100 },
    { month: 'Feb', reduced: 95, target: 110 },
    { month: 'Mar', reduced: 102, target: 120 },
    { month: 'Apr', reduced: 108, target: 130 },
    { month: 'May', reduced: 115, target: 140 },
    { month: 'Jun', reduced: 122, target: 150 },
    { month: 'Jul', reduced: 128, target: 160 },
    { month: 'Aug', reduced: 135, target: 170 },
    { month: 'Sep', reduced: 142, target: 180 }
  ];

  const wasteTypeData = [
    { name: 'Organic', value: 45, color: '#4CAF50' },
    { name: 'Plastic', value: 25, color: '#FF9800' },
    { name: 'Paper', value: 15, color: '#2196F3' },
    { name: 'Metal', value: 8, color: '#9C27B0' },
    { name: 'Glass', value: 7, color: '#607D8B' }
  ];

  const communityGrowthData = [
    { month: 'Jan', users: 1250, communities: 45 },
    { month: 'Feb', users: 1456, communities: 52 },
    { month: 'Mar', users: 1678, communities: 61 },
    { month: 'Apr', users: 1923, communities: 68 },
    { month: 'May', users: 2187, communities: 76 },
    { month: 'Jun', users: 2456, communities: 85 },
    { month: 'Jul', users: 2734, communities: 94 },
    { month: 'Aug', users: 3021, communities: 103 },
    { month: 'Sep', users: 3312, communities: 112 }
  ];

  const getCurrentData = () => {
    switch (selectedCategory) {
      case 'carbon':
        return carbonData;
      case 'community':
        return communityGrowthData;
      default:
        return wasteData;
    }
  };

  const renderChart = () => {
    const data = getCurrentData();

    switch (selectedCategory) {
      case 'waste':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                }} 
              />
              <Bar dataKey="collected" fill="#2E7D32" name="Collected (Tonnes)" />
              <Bar dataKey="recycled" fill="#4CAF50" name="Recycled (Tonnes)" />
              <Bar dataKey="diverted" fill="#8BC34A" name="Diverted (Tonnes)" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'carbon':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                }} 
              />
              <Area type="monotone" dataKey="reduced" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.3} name="CO₂ Reduced (Tonnes)" />
              <Line type="monotone" dataKey="target" stroke="#FF9800" strokeDasharray="5 5" name="Target (Tonnes)" />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'community':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                }} 
              />
              <Line type="monotone" dataKey="users" stroke="#2E7D32" strokeWidth={3} name="Active Users" />
              <Line type="monotone" dataKey="communities" stroke="#FF9800" strokeWidth={3} name="Communities" />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                }} 
              />
              <Bar dataKey="collected" fill="#2E7D32" name="Collected (Tonnes)" />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="bg-background py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Interactive Impact Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore detailed insights into our environmental impact through interactive visualizations. 
            Filter by timeframe, category, and region to discover meaningful patterns.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-elevation">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Timeframe Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Time Period
              </label>
              <div className="flex flex-wrap gap-2">
                {timeframes?.map((timeframe) => (
                  <Button
                    key={timeframe?.value}
                    variant={selectedTimeframe === timeframe?.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTimeframe(timeframe?.value)}
                  >
                    {timeframe?.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Impact Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categories?.map((category) => (
                  <Button
                    key={category?.value}
                    variant={selectedCategory === category?.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category?.value)}
                    iconName={category?.icon}
                    iconPosition="left"
                    iconSize={16}
                    className="justify-start"
                  >
                    {category?.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Geographic Region
              </label>
              <div className="space-y-2">
                {regions?.map((region) => (
                  <Button
                    key={region?.value}
                    variant={selectedRegion === region?.value ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedRegion(region?.value)}
                    className="w-full justify-start"
                  >
                    {region?.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {categories?.find(cat => cat?.value === selectedCategory)?.label} Trends
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedTimeframe?.charAt(0)?.toUpperCase() + selectedTimeframe?.slice(1)} data for {regions?.find(reg => reg?.value === selectedRegion)?.label}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" iconName="Download" iconSize={16}>
                    Export
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Share2" iconSize={16}>
                    Share
                  </Button>
                </div>
              </div>
              
              <div className="w-full h-96">
                {renderChart()}
              </div>
            </div>
          </div>

          {/* Waste Type Distribution */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Waste Type Distribution
              </h3>
              
              <div className="w-full h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={wasteTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {wasteTypeData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry?.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2">
                {wasteTypeData?.map((item) => (
                  <div key={item?.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item?.color }}
                      ></div>
                      <span className="text-sm text-foreground">{item?.name}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item?.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Impact Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="User" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Your Impact</h3>
                  <p className="text-sm text-muted-foreground">Personal contribution</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground">Waste Reported</span>
                  <span className="text-sm font-semibold text-primary">23.5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground">Carbon Saved</span>
                  <span className="text-sm font-semibold text-success">12.8 kg CO₂</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-foreground">Community Rank</span>
                  <span className="text-sm font-semibold text-accent">#47</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full mt-4" iconName="TrendingUp" iconPosition="left">
                View Detailed Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;