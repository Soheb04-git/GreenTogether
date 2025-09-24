//src/pages/landing-page/cmponents/EnvironmentalCrisisSection.jsx

import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const EnvironmentalCrisisSection = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cityData = [
    {
      id: 'mumbai',
      name: 'Mumbai',
      position: { top: '65%', left: '20%' },
      wasteGenerated: '11,000',
      pollutionLevel: 'High',
      color: 'bg-red-500',
      stats: {
        dailyWaste: '11,000 tonnes',
        recyclingRate: '15%',
        landfillOverflow: '85%'
      }
    },
    {
      id: 'delhi',
      name: 'Delhi',
      position: { top: '35%', left: '30%' },
      wasteGenerated: '10,500',
      pollutionLevel: 'Critical',
      color: 'bg-red-600',
      stats: {
        dailyWaste: '10,500 tonnes',
        recyclingRate: '12%',
        landfillOverflow: '92%'
      }
    },
    {
      id: 'bangalore',
      name: 'Bangalore',
      position: { top: '75%', left: '30%' },
      wasteGenerated: '5,000',
      pollutionLevel: 'Moderate',
      color: 'bg-orange-500',
      stats: {
        dailyWaste: '5,000 tonnes',
        recyclingRate: '25%',
        landfillOverflow: '70%'
      }
    },
    {
      id: 'chennai',
      name: 'Chennai',
      position: { top: '80%', left: '35%' },
      wasteGenerated: '4,500',
      pollutionLevel: 'High',
      color: 'bg-red-500',
      stats: {
        dailyWaste: '4,500 tonnes',
        recyclingRate: '18%',
        landfillOverflow: '78%'
      }
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      position: { top: '50%', left: '45%' },
      wasteGenerated: '4,000',
      pollutionLevel: 'High',
      color: 'bg-red-500',
      stats: {
        dailyWaste: '4,000 tonnes',
        recyclingRate: '20%',
        landfillOverflow: '75%'
      }
    }
  ];

  const handleCityClick = (city) => {
    setSelectedCity(selectedCity?.id === city?.id ? null : city);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-red-100/80 backdrop-blur-md text-red-800 rounded-full px-4 py-2 mb-6">
            <Icon name="AlertTriangle" size={16} className="mr-2" />
            <span className="text-sm font-medium">Environmental Crisis</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-white">
            India's Waste Crisis is{' '}
            <span className="text-gray-100">Getting Worse</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-8 text-white">
            Every day, Indian cities generate over 1.5 lakh tonnes of waste. 
            Most of it ends up in overflowing landfills, polluting our air, water, and soil.
          </p>
        </div>

        {/* Interactive India Map */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-elevation border border-orange-100">
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              Tap on cities to see waste statistics
            </h3>
            
            {/* Simplified India Map */}
            <div className="relative w-full h-96 bg-gradient-to-br from-green-100/70 to-green-200/70 rounded-xl overflow-hidden">
              {/* India outline representation */}
              <div className="absolute inset-4 bg-green-50/70 rounded-lg border-2 border-green-300"></div>
              
              {/* City markers */}
              {cityData?.map((city) => (
                <button
                  key={city?.id}
                  onClick={() => handleCityClick(city)}
                  className={`absolute w-4 h-4 ${city?.color} rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-all duration-200 z-10`}
                  style={{ top: city?.position?.top, left: city?.position?.left }}
                  aria-label={`View ${city?.name} waste statistics`}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                    {city?.name}
                  </div>
                </button>
              ))}
              
              {/* Pollution indicators */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xs font-medium text-gray-700 mb-2">Pollution Level</div>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                    <span className="text-xs">Critical</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-xs">High</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-xs">Moderate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* City Statistics Panel */}
          {selectedCity && (
            <div className="mt-6 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-elevation border border-orange-100 animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-foreground">{selectedCity?.name} Waste Statistics</h4>
                <button
                  onClick={() => setSelectedCity(null)}
                  className="text-text-secondary hover:text-foreground"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50/80 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    {selectedCity?.stats?.dailyWaste}
                  </div>
                  <div className="text-sm text-text-secondary">Daily Waste Generated</div>
                </div>
                <div className="text-center p-4 bg-orange-50/80 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {selectedCity?.stats?.recyclingRate}
                  </div>
                  <div className="text-sm text-text-secondary">Recycling Rate</div>
                </div>
                <div className="text-center p-4 bg-red-50/80 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    {selectedCity?.stats?.landfillOverflow}
                  </div>
                  <div className="text-sm text-text-secondary">Landfill Overflow</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Crisis Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-card border border-red-100">
            <Icon name="Trash2" size={48} className="text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">1.5L+</div>
            <div className="text-sm text-text-secondary">Tonnes of waste generated daily across India</div>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-card border border-orange-100">
            <Icon name="AlertCircle" size={48} className="text-orange-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">15%</div>
            <div className="text-sm text-text-secondary">Average recycling rate in Indian cities</div>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-card border border-red-100">
            <Icon name="TrendingUp" size={48} className="text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">5%</div>
            <div className="text-sm text-text-secondary">Annual increase in waste generation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalCrisisSection;