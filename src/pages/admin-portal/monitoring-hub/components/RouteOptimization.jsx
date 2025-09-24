// //src/pages/admin-portal/monitoring-hub/components/RouteOptimization.jsx

// import React, { useState } from 'react';
// import Icon from "../../../../components/AppIcon";
// import Button from "../../../../components/ui/Button";


// const RouteOptimization = ({ routes, vehicles, onRouteOptimize, onRouteUpdate }) => {
//   const [selectedRoute, setSelectedRoute] = useState(null);
//   const [optimizationMode, setOptimizationMode] = useState('efficiency');
//   const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);

//   const optimizationModes = [
//     { id: 'efficiency', label: 'Fuel Efficiency', icon: 'Fuel', description: 'Minimize fuel consumption' },
//     { id: 'time', label: 'Time Optimal', icon: 'Clock', description: 'Fastest completion time' },
//     { id: 'balanced', label: 'Balanced', icon: 'Scale', description: 'Balance time and fuel' },
//     { id: 'environmental', label: 'Eco-Friendly', icon: 'Leaf', description: 'Minimize carbon footprint' }
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active': return 'text-success bg-success/10';
//       case 'delayed': return 'text-warning bg-warning/10';
//       case 'completed': return 'text-primary bg-primary/10';
//       case 'issue': return 'text-error bg-error/10';
//       default: return 'text-muted-foreground bg-muted';
//     }
//   };

//   const getEfficiencyColor = (efficiency) => {
//     if (efficiency >= 90) return 'text-success';
//     if (efficiency >= 75) return 'text-primary';
//     if (efficiency >= 60) return 'text-warning';
//     return 'text-error';
//   };

//   const calculateOptimizationSavings = (route) => {
//     const baseFuel = route?.distance * 0.3; // Base fuel consumption
//     const optimizedFuel = baseFuel * (route?.efficiency / 100);
//     const savings = baseFuel - optimizedFuel;
//     return {
//       fuelSaved: savings?.toFixed(1),
//       costSaved: (savings * 85)?.toFixed(0), // ₹85 per liter
//       timeSaved: Math.round(route?.distance * 0.05 * (1 - route?.efficiency / 100))
//     };
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-semibold text-foreground">Route Optimization</h2>
//           <p className="text-sm text-muted-foreground">AI-powered route planning and optimization</p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setShowOptimizationPanel(!showOptimizationPanel)}
//             iconName="Settings"
//             iconPosition="left"
//             iconSize={16}
//           >
//             Optimize Settings
//           </Button>
//           <Button
//             variant="default"
//             size="sm"
//             onClick={() => onRouteOptimize(optimizationMode)}
//             iconName="Zap"
//             iconPosition="left"
//             iconSize={16}
//           >
//             Optimize All Routes
//           </Button>
//         </div>
//       </div>
//       {/* Optimization Panel */}
//       {showOptimizationPanel && (
//         <div className="bg-card rounded-lg border border-border p-6 shadow-elevation">
//           <h3 className="text-lg font-semibold text-foreground mb-4">Optimization Settings</h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {optimizationModes?.map((mode) => (
//               <button
//                 key={mode?.id}
//                 onClick={() => setOptimizationMode(mode?.id)}
//                 className={`p-4 rounded-lg border transition-all text-left ${
//                   optimizationMode === mode?.id
//                     ? 'border-primary bg-primary/5 shadow-elevation'
//                     : 'border-border bg-card hover:border-primary/50'
//                 }`}
//               >
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
//                     optimizationMode === mode?.id ? 'bg-primary/10' : 'bg-muted'
//                   }`}>
//                     <Icon 
//                       name={mode?.icon} 
//                       size={16} 
//                       className={optimizationMode === mode?.id ? 'text-primary' : 'text-muted-foreground'}
//                     />
//                   </div>
//                   <div className="text-sm font-medium text-foreground">{mode?.label}</div>
//                 </div>
//                 <div className="text-xs text-muted-foreground">{mode?.description}</div>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//       {/* Routes Overview */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Routes List */}
//         <div className="lg:col-span-2 space-y-4">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-foreground">Active Routes</h3>
//             <div className="flex items-center space-x-2">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 iconName="Filter"
//                 iconSize={16}
//               />
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 iconName="Download"
//                 iconSize={16}
//               />
//             </div>
//           </div>

//           <div className="space-y-3">
//             {routes?.map((route) => {
//               const savings = calculateOptimizationSavings(route);
//               return (
//                 <div
//                   key={route?.id}
//                   className={`bg-card rounded-lg border p-4 shadow-elevation cursor-pointer transition-all hover:shadow-elevation-lg ${
//                     selectedRoute?.id === route?.id ? 'border-primary bg-primary/5' : 'border-border'
//                   }`}
//                   onClick={() => setSelectedRoute(route)}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                         <Icon name="Truck" size={20} className="text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-semibold text-foreground">{route?.name}</h4>
//                         <div className="flex items-center space-x-2 text-xs text-muted-foreground">
//                           <span>Vehicle: {route?.vehicle}</span>
//                           <span>•</span>
//                           <span>Driver: {route?.driver}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center space-x-2">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(route?.status)}`}>
//                         {route?.status?.charAt(0)?.toUpperCase() + route?.status?.slice(1)}
//                       </span>
//                       <Button
//                         variant="ghost"
//                         size="xs"
//                         iconName="MoreVertical"
//                         iconSize={14}
//                       />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
//                     <div className="text-center">
//                       <div className="text-lg font-bold text-foreground">{route?.stops}</div>
//                       <div className="text-xs text-muted-foreground">Stops</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-lg font-bold text-foreground">{route?.distance} km</div>
//                       <div className="text-xs text-muted-foreground">Distance</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-lg font-bold text-foreground">{route?.duration}</div>
//                       <div className="text-xs text-muted-foreground">Duration</div>
//                     </div>
//                     <div className="text-center">
//                       <div className={`text-lg font-bold ${getEfficiencyColor(route?.efficiency)}`}>
//                         {route?.efficiency}%
//                       </div>
//                       <div className="text-xs text-muted-foreground">Efficiency</div>
//                     </div>
//                   </div>
//                   {/* Progress Bar */}
//                   <div className="mb-3">
//                     <div className="flex items-center justify-between text-xs mb-1">
//                       <span className="text-muted-foreground">Progress</span>
//                       <span className="font-medium text-foreground">{route?.progress}%</span>
//                     </div>
//                     <div className="w-full bg-muted rounded-full h-2">
//                       <div 
//                         className={`h-2 rounded-full transition-all duration-500 ${
//                           route?.status === 'completed' ? 'bg-success' :
//                           route?.status === 'active' ? 'bg-primary' :
//                           route?.status === 'delayed' ? 'bg-warning' : 'bg-error'
//                         }`}
//                         style={{ width: `${route?.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   {/* Optimization Savings */}
//                   <div className="flex items-center justify-between text-xs">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center space-x-1 text-success">
//                         <Icon name="Fuel" size={12} />
//                         <span>-{savings?.fuelSaved}L</span>
//                       </div>
//                       <div className="flex items-center space-x-1 text-primary">
//                         <Icon name="Clock" size={12} />
//                         <span>-{savings?.timeSaved}min</span>
//                       </div>
//                       <div className="flex items-center space-x-1 text-accent">
//                         <Icon name="DollarSign" size={12} />
//                         <span>₹{savings?.costSaved}</span>
//                       </div>
//                     </div>
                    
//                     <Button
//                       variant="outline"
//                       size="xs"
//                       onClick={(e) => {
//                         e?.stopPropagation();
//                         onRouteUpdate(route?.id);
//                       }}
//                       iconName="RefreshCw"
//                       iconSize={12}
//                     >
//                       Re-optimize
//                     </Button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Route Details & Map */}
//         <div className="space-y-4">
//           {selectedRoute ? (
//             <>
//               {/* Route Map */}
//               <div className="bg-card rounded-lg border border-border shadow-elevation overflow-hidden">
//                 <div className="p-4 border-b border-border">
//                   <h4 className="text-sm font-semibold text-foreground">{selectedRoute?.name}</h4>
//                   <p className="text-xs text-muted-foreground">Live tracking</p>
//                 </div>
                
//                 <div className="relative h-48">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     loading="lazy"
//                     title={`${selectedRoute?.name} Route Map`}
//                     referrerPolicy="no-referrer-when-downgrade"
//                     src={`https://www.google.com/maps?q=${selectedRoute?.coordinates}&z=12&output=embed`}
//                     className="w-full h-full"
//                   />
                  
//                   {/* Live Position Indicator */}
//                   <div className="absolute top-2 right-2 bg-card/95 backdrop-blur-sm rounded-lg p-2 border border-border">
//                     <div className="flex items-center space-x-2">
//                       <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
//                       <span className="text-xs font-medium text-foreground">Live</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Route Details */}
//               <div className="bg-card rounded-lg border border-border p-4 shadow-elevation">
//                 <h4 className="text-sm font-semibold text-foreground mb-3">Route Details</h4>
                
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-muted-foreground">Start Time</span>
//                     <span className="text-xs font-medium text-foreground">{selectedRoute?.startTime}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-muted-foreground">Est. Completion</span>
//                     <span className="text-xs font-medium text-foreground">{selectedRoute?.estimatedCompletion}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-muted-foreground">Fuel Consumption</span>
//                     <span className="text-xs font-medium text-foreground">{selectedRoute?.fuelConsumption}L</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-muted-foreground">Waste Collected</span>
//                     <span className="text-xs font-medium text-foreground">{selectedRoute?.wasteCollected} tons</span>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-3 border-t border-border">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     fullWidth
//                     iconName="MessageSquare"
//                     iconPosition="left"
//                     iconSize={14}
//                   >
//                     Contact Driver
//                   </Button>
//                 </div>
//               </div>

//               {/* Optimization Suggestions */}
//               <div className="bg-card rounded-lg border border-border p-4 shadow-elevation">
//                 <h4 className="text-sm font-semibold text-foreground mb-3">AI Suggestions</h4>
                
//                 <div className="space-y-3">
//                   <div className="p-3 bg-success/5 rounded-lg border border-success/20">
//                     <div className="flex items-center space-x-2 mb-1">
//                       <Icon name="CheckCircle" size={14} className="text-success" />
//                       <span className="text-xs font-medium text-success">Optimization Applied</span>
//                     </div>
//                     <p className="text-xs text-muted-foreground">
//                       Route optimized for fuel efficiency. Saved 2.3L fuel and 15 minutes.
//                     </p>
//                   </div>
                  
//                   <div className="p-3 bg-warning/5 rounded-lg border border-warning/20">
//                     <div className="flex items-center space-x-2 mb-1">
//                       <Icon name="AlertTriangle" size={14} className="text-warning" />
//                       <span className="text-xs font-medium text-warning">Traffic Alert</span>
//                     </div>
//                     <p className="text-xs text-muted-foreground">
//                       Heavy traffic detected on MG Road. Consider alternate route.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="bg-card rounded-lg border border-border p-8 shadow-elevation text-center">
//               <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Icon name="MapPin" size={24} className="text-muted-foreground" />
//               </div>
//               <h4 className="text-sm font-medium text-foreground mb-2">Select a Route</h4>
//               <p className="text-xs text-muted-foreground">
//                 Click on a route from the list to view details and tracking information.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RouteOptimization;

// src/pages/admin-portal/monitoring-hub/components/RouteOptimization.jsx

import React, { useState, useEffect } from 'react';
import Icon from "../../../../components/AppIcon";
import Button from "../../../../components/ui/Button";

const RouteOptimization = ({ routes = [], vehicles = [], onRouteOptimize, onRouteUpdate }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [optimizationMode, setOptimizationMode] = useState("efficiency");
  const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);
  const [routeData, setRouteData] = useState([]);

  // ✅ Fallback dummy routes if no data is available
  useEffect(() => {
    if (routes.length === 0) {
      setRouteData([
        {
          id: 1,
          name: "Central Zone",
          vehicle: "MH-12-AB-1234",
          driver: "Amit Kumar",
          status: "active",
          stops: 12,
          distance: 34,
          duration: "1h 20m",
          efficiency: 70,
          progress: 60,
          fuelConsumption: 18,
          wasteCollected: 2.4,
          startTime: "08:30 AM",
          estimatedCompletion: "10:00 AM",
          coordinates: "19.0760,72.8777",
        },
        {
          id: 2,
          name: "North Route",
          vehicle: "MH-12-XY-5678",
          driver: "Priya Sharma",
          status: "delayed",
          stops: 9,
          distance: 25,
          duration: "55m",
          efficiency: 65,
          progress: 40,
          fuelConsumption: 15,
          wasteCollected: 1.7,
          startTime: "09:00 AM",
          estimatedCompletion: "10:30 AM",
          coordinates: "19.2183,72.9781",
        },
      ]);
    } else {
      setRouteData(routes);
    }
  }, [routes]);

  const optimizationModes = [
    { id: "efficiency", label: "Fuel Efficiency", icon: "Fuel", description: "Minimize fuel consumption" },
    { id: "time", label: "Time Optimal", icon: "Clock", description: "Fastest completion time" },
    { id: "balanced", label: "Balanced", icon: "Scale", description: "Balance time and fuel" },
    { id: "environmental", label: "Eco-Friendly", icon: "Leaf", description: "Minimize carbon footprint" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "text-success bg-success/10";
      case "delayed": return "text-warning bg-warning/10";
      case "completed": return "text-primary bg-primary/10";
      case "issue": return "text-error bg-error/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 90) return "text-success";
    if (efficiency >= 75) return "text-primary";
    if (efficiency >= 60) return "text-warning";
    return "text-error";
  };

  // ✅ Route Optimization Logic
    // ✅ Route Optimization Logic
  const optimizeRoutes = (mode, targetId = null) => {
    setRouteData((prev) =>
      prev.map((r) => {
        if (targetId && r.id !== targetId) return r;

        let updated = { ...r };

        switch (mode) {
          case "efficiency":
            updated.efficiency = Math.min(100, r.efficiency + 15);
            updated.fuelConsumption = Math.max(5, r.fuelConsumption - 2);
            break;

          case "time":
            updated.duration = "≈ " + Math.max(20, parseInt(r.duration) - 10) + "m";
            updated.progress = Math.min(100, r.progress + 20);
            break;

          case "balanced":
            updated.efficiency = Math.min(100, r.efficiency + 10);
            updated.progress = Math.min(100, r.progress + 10);
            break;

          case "environmental":
            updated.efficiency = Math.min(100, r.efficiency + 12);
            updated.fuelConsumption = Math.max(4, r.fuelConsumption - 3);
            updated.wasteCollected = r.wasteCollected + 0.5;
            break;

          default:
            updated.efficiency = Math.min(100, r.efficiency + 5);
            updated.progress = Math.min(100, r.progress + 5);
        }

        // ✅ Update status based on new efficiency
        updated.status =
          updated.efficiency >= 90 ? "completed" : updated.efficiency >= 70 ? "active" : "delayed";

        return updated;
      })
    );

    if (targetId) {
      onRouteUpdate?.(targetId);
    } else {
      onRouteOptimize?.(mode);
    }
  };


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Route Optimization</h2>
          <p className="text-sm text-muted-foreground">AI-powered route planning and optimization</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowOptimizationPanel(!showOptimizationPanel)}
            iconName="Settings"
            iconPosition="left"
            iconSize={16}
          >
            Optimize Settings
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => optimizeRoutes(optimizationMode)}
            iconName="Zap"
            iconPosition="left"
            iconSize={16}
          >
            Optimize All Routes
          </Button>
        </div>
      </div>

      {/* Optimization Panel */}
      {showOptimizationPanel && (
        <div className="bg-card rounded-lg border border-border p-6 shadow-elevation">
          <h3 className="text-lg font-semibold text-foreground mb-4">Optimization Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {optimizationModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setOptimizationMode(mode.id)}
                className={`p-4 rounded-lg border transition-all text-left ${
                  optimizationMode === mode.id
                    ? "border-primary bg-primary/5 shadow-elevation"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      optimizationMode === mode.id ? "bg-primary/10" : "bg-muted"
                    }`}
                  >
                    <Icon
                      name={mode.icon}
                      size={16}
                      className={optimizationMode === mode.id ? "text-primary" : "text-muted-foreground"}
                    />
                  </div>
                  <div className="text-sm font-medium text-foreground">{mode.label}</div>
                </div>
                <div className="text-xs text-muted-foreground">{mode.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Routes Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Routes List */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-lg font-semibold text-foreground mb-2">Active Routes</h3>

          {routeData.map((route) => (
            <div
              key={route.id}
              className={`bg-card rounded-lg border p-4 shadow-elevation cursor-pointer transition-all hover:shadow-elevation-lg ${
                selectedRoute?.id === route.id ? "border-primary bg-primary/5" : "border-border"
              }`}
              onClick={() => setSelectedRoute(route)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Truck" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{route.name}</h4>
                    <div className="text-xs text-muted-foreground">
                      Vehicle: {route.vehicle} • Driver: {route.driver}
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(route.status)}`}>
                  {route.status}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-3 text-center">
                <div>
                  <div className="text-lg font-bold text-foreground">{route.stops}</div>
                  <div className="text-xs text-muted-foreground">Stops</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{route.distance} km</div>
                  <div className="text-xs text-muted-foreground">Distance</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{route.duration}</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div>
                  <div className={`text-lg font-bold ${getEfficiencyColor(route.efficiency)}`}>
                    {route.efficiency}%
                  </div>
                  <div className="text-xs text-muted-foreground">Efficiency</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    route.status === "completed"
                      ? "bg-success"
                      : route.status === "active"
                      ? "bg-primary"
                      : "bg-warning"
                  }`}
                  style={{ width: `${route.progress}%` }}
                ></div>
              </div>

              {/* Actions */}
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Waste: {route.wasteCollected} tons</span>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    optimizeRoutes(optimizationMode, route.id);
                  }}
                  iconName="RefreshCw"
                  iconSize={12}
                >
                  Re-optimize
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Route Details */}
        <div>
          {selectedRoute ? (
            <div className="bg-card rounded-lg border p-4 shadow-elevation">
              <h4 className="text-sm font-semibold mb-2">{selectedRoute.name}</h4>
              <p className="text-xs text-muted-foreground">Driver: {selectedRoute.driver}</p>
              <p className="text-xs text-muted-foreground">Fuel: {selectedRoute.fuelConsumption}L</p>
              <p className="text-xs text-muted-foreground">Waste: {selectedRoute.wasteCollected} tons</p>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className="mt-3"
                onClick={() => alert(`Messaging ${selectedRoute.driver}...`)}
                iconName="MessageSquare"
              >
                Contact Driver
              </Button>
            </div>
          ) : (
            <div className="bg-card rounded-lg border p-6 shadow text-center text-sm text-muted-foreground">
              Select a route to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteOptimization;
