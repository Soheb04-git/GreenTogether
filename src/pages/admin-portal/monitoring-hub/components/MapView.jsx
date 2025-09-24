//src/pages/admin-portal/monitoring-hub/components/MapView.jsx

import React, { useState } from 'react';
import Icon from "../../../../components/AppIcon";
import Button from "../../../../components/ui/Button";


const MapView = ({ selectedRegion, onRegionSelect, facilities, routes }) => {
  const [mapView, setMapView] = useState('satellite');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    facilities: true,
    routes: true,
    alerts: true,
    performance: true
  });

  const regions = [
    { id: 'national', name: 'India', level: 'country', status: 'good', coordinates: '20.5937,78.9629' },
    { id: 'maharashtra', name: 'Maharashtra', level: 'state', status: 'excellent', coordinates: '19.7515,75.7139' },
    { id: 'mumbai', name: 'Mumbai', level: 'city', status: 'good', coordinates: '19.0760,72.8777' },
    { id: 'bandra', name: 'Bandra West', level: 'area', status: 'warning', coordinates: '19.0596,72.8295' }
  ];

  const performanceData = {
    excellent: { count: 156, color: 'bg-success', textColor: 'text-success' },
    good: { count: 89, color: 'bg-primary', textColor: 'text-primary' },
    warning: { count: 23, color: 'bg-warning', textColor: 'text-warning' },
    critical: { count: 7, color: 'bg-error', textColor: 'text-error' }
  };

  const handleFilterToggle = (filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [filter]: !prev?.[filter]
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'warning': return 'text-warning';
      case 'critical': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-elevation overflow-hidden">
      {/* Map Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-foreground">Live Monitoring Map</h3>
          <div className="flex items-center space-x-2">
            {regions?.map((region, index) => (
              <React.Fragment key={region?.id}>
                <button
                  onClick={() => onRegionSelect(region)}
                  className={`text-sm font-medium transition-colors ${
                    selectedRegion?.id === region?.id
                      ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {region?.name}
                </button>
                {index < regions?.length - 1 && (
                  <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            iconName="Filter"
            iconPosition="left"
            iconSize={16}
          >
            Filters
          </Button>
          
          <div className="flex items-center bg-background rounded-lg p-1 border border-border">
            <button
              onClick={() => setMapView('satellite')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                mapView === 'satellite' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Satellite
            </button>
            <button
              onClick={() => setMapView('terrain')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                mapView === 'terrain' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Terrain
            </button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            iconName="Maximize2"
            iconSize={16}
          />
        </div>
      </div>
      {/* Filters Panel */}
      {showFilters && (
        <div className="p-4 border-b border-border bg-muted/20">
          <div className="flex flex-wrap gap-3">
            {Object.entries(activeFilters)?.map(([filter, active]) => (
              <button
                key={filter}
                onClick={() => handleFilterToggle(filter)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                <Icon 
                  name={active ? "CheckCircle2" : "Circle"} 
                  size={14} 
                />
                <span className="capitalize">{filter}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Map Container */}
      <div className="relative h-96 lg:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title={`${selectedRegion?.name || 'India'} Waste Management Map`}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${selectedRegion?.coordinates || '20.5937,78.9629'}&z=10&output=embed`}
          className="w-full h-full"
        />

        {/* Map Overlays */}
        <div className="absolute top-4 left-4 space-y-2">
          {/* Performance Legend */}
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border shadow-elevation">
            <h4 className="text-sm font-semibold text-foreground mb-2">Performance Status</h4>
            <div className="space-y-1">
              {Object.entries(performanceData)?.map(([status, data]) => (
                <div key={status} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${data?.color}`}></div>
                  <span className="text-xs text-muted-foreground capitalize">{status}</span>
                  <span className={`text-xs font-medium ${data?.textColor}`}>{data?.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Updates */}
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border shadow-elevation">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
              <span className="text-sm font-semibold text-foreground">Live Updates</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Last updated: 2 min ago</div>
              <div className="text-xs text-success">+12 collections completed</div>
              <div className="text-xs text-warning">3 route delays detected</div>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Plus"
            iconSize={16}
            className="bg-card/95 backdrop-blur-sm"
          />
          <Button
            variant="outline"
            size="sm"
            iconName="Minus"
            iconSize={16}
            className="bg-card/95 backdrop-blur-sm"
          />
          <Button
            variant="outline"
            size="sm"
            iconName="RotateCcw"
            iconSize={16}
            className="bg-card/95 backdrop-blur-sm"
          />
        </div>

        {/* Quick Stats Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border shadow-elevation">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">156</div>
                <div className="text-xs text-muted-foreground">Active Routes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-success">89%</div>
                <div className="text-xs text-muted-foreground">On-Time Rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-warning">23</div>
                <div className="text-xs text-muted-foreground">Alerts</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">2.4k</div>
                <div className="text-xs text-muted-foreground">Tons Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;