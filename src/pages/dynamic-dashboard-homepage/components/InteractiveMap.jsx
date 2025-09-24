import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    // Mock data for Indian states with participation levels
    const mockMapData = [
      {
        id: 'maharashtra',
        name: 'Maharashtra',
        participationLevel: 'high',
        activeUsers: 456789,
        wasteReduced: 89234,
        campaigns: 23,
        coordinates: { lat: 19.7515, lng: 75.7139 }
      },
      {
        id: 'karnataka',
        name: 'Karnataka',
        participationLevel: 'high',
        activeUsers: 234567,
        wasteReduced: 67890,
        campaigns: 18,
        coordinates: { lat: 15.3173, lng: 75.7139 }
      },
      {
        id: 'tamil-nadu',
        name: 'Tamil Nadu',
        participationLevel: 'medium',
        activeUsers: 198765,
        wasteReduced: 45678,
        campaigns: 15,
        coordinates: { lat: 11.1271, lng: 78.6569 }
      },
      {
        id: 'gujarat',
        name: 'Gujarat',
        participationLevel: 'high',
        activeUsers: 187654,
        wasteReduced: 56789,
        campaigns: 20,
        coordinates: { lat: 22.2587, lng: 71.1924 }
      },
      {
        id: 'rajasthan',
        name: 'Rajasthan',
        participationLevel: 'medium',
        activeUsers: 145678,
        wasteReduced: 34567,
        campaigns: 12,
        coordinates: { lat: 27.0238, lng: 74.2179 }
      },
      {
        id: 'uttar-pradesh',
        name: 'Uttar Pradesh',
        participationLevel: 'low',
        activeUsers: 123456,
        wasteReduced: 23456,
        campaigns: 8,
        coordinates: { lat: 26.8467, lng: 80.9462 }
      },
      {
        id: 'west-bengal',
        name: 'West Bengal',
        participationLevel: 'medium',
        activeUsers: 167890,
        wasteReduced: 38901,
        campaigns: 14,
        coordinates: { lat: 22.9868, lng: 87.8550 }
      },
      {
        id: 'kerala',
        name: 'Kerala',
        participationLevel: 'high',
        activeUsers: 134567,
        wasteReduced: 45678,
        campaigns: 16,
        coordinates: { lat: 10.8505, lng: 76.2711 }
      }
    ];

    setMapData(mockMapData);
  }, []);

  const getParticipationColor = (level) => {
    switch (level) {
      case 'high': return 'bg-primary';
      case 'medium': return 'bg-secondary';
      case 'low': return 'bg-accent';
      default: return 'bg-muted';
    }
  };

  const getParticipationIcon = (level) => {
    switch (level) {
      case 'high': return 'TrendingUp';
      case 'medium': return 'Activity';
      case 'low': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const formatNumber = (num) => {
    if (num >= 100000) {
      return `${(num / 100000)?.toFixed(1)}L`;
    } else if (num >= 1000) {
      return `${(num / 1000)?.toFixed(1)}K`;
    }
    return num?.toString();
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real-Time Activity Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore participation levels and environmental impact across different states. 
            Join the movement in your region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Interactive Map</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">High Activity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Medium Activity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Growing</span>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="India Waste Management Activity Map"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=20.5937,78.9629&z=5&output=embed"
                  className="border-0"
                ></iframe>
                
                {/* Overlay with activity indicators */}
                <div className="absolute inset-0 pointer-events-none">
                  {mapData?.slice(0, 4)?.map((state, index) => (
                    <div
                      key={state?.id}
                      className={`absolute w-4 h-4 ${getParticipationColor(state?.participationLevel)} rounded-full animate-pulse-gentle pointer-events-auto cursor-pointer`}
                      style={{
                        top: `${20 + index * 15}%`,
                        left: `${30 + index * 10}%`,
                      }}
                      onClick={() => setSelectedState(state)}
                      title={`${state?.name} - ${state?.participationLevel} activity`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Click on activity indicators to view detailed statistics
                </p>
              </div>
            </div>
          </div>

          {/* State Statistics */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-elevation">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {selectedState ? selectedState?.name : 'National Overview'}
              </h3>
              
              {selectedState ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name={getParticipationIcon(selectedState?.participationLevel)} size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Activity Level</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      selectedState?.participationLevel === 'high' ? 'bg-primary/10 text-primary' :
                      selectedState?.participationLevel === 'medium'? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'
                    }`}>
                      {selectedState?.participationLevel}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Users</span>
                      <span className="font-semibold text-foreground">{formatNumber(selectedState?.activeUsers)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Waste Reduced</span>
                      <span className="font-semibold text-primary">{formatNumber(selectedState?.wasteReduced)} kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Campaigns</span>
                      <span className="font-semibold text-secondary">{selectedState?.campaigns}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedState(null)}
                    className="w-full mt-4 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium text-foreground transition-colors"
                  >
                    View National Overview
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">2.3M+</div>
                      <div className="text-xs text-muted-foreground">Total Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">156</div>
                      <div className="text-xs text-muted-foreground">Active Campaigns</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">2.8M kg</div>
                    <div className="text-sm text-muted-foreground">Total Waste Reduced</div>
                  </div>
                </div>
              )}
            </div>

            {/* Top Performing States */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-elevation">
              <h3 className="text-lg font-semibold text-foreground mb-4">Top Performers</h3>
              <div className="space-y-3">
                {mapData?.sort((a, b) => b?.activeUsers - a?.activeUsers)?.slice(0, 5)?.map((state, index) => (
                    <div
                      key={state?.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                      onClick={() => setSelectedState(state)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                          index === 2 ? 'bg-amber-600' : 'bg-muted-foreground'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-medium text-foreground text-sm">{state?.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-primary">{formatNumber(state?.activeUsers)}</div>
                        <div className="text-xs text-muted-foreground">users</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;