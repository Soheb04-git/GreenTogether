// // src/pages/admin-portal/monitoring-hub/components/LiveMonitoringMap.jsx

// import React, { useState } from "react";
// import Icon from "../../../../components/AppIcon";
// import Button from "../../../../components/ui/Button";

// const LiveMonitoringMap = ({ selectedRegion, onRegionSelect, routes }) => {
//   const [mapType, setMapType] = useState("roadmap"); // ✅ CHANGE: state for map view

//   // ✅ Dummy regions hierarchy
//   const regions = [
//     { id: "india", name: "India", coords: "20.5937,78.9629" },
//     { id: "maharashtra", name: "Maharashtra", coords: "19.7515,75.7139" },
//     { id: "mumbai", name: "Mumbai", coords: "19.0760,72.8777" },
//     { id: "bandra", name: "Bandra West", coords: "19.0600,72.8347" },
//   ];

//   // ✅ Build Google Maps embed URL dynamically
//   const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${selectedRegion?.coordinates || "20.5937,78.9629"}&zoom=12&maptype=${mapType}`;

//   return (
//     <div className="bg-card rounded-lg border border-border shadow-elevation p-4 space-y-4">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className="text-lg font-semibold text-foreground">
//             Live Monitoring Map
//           </h3>
//           <p className="text-sm text-muted-foreground">
//             {selectedRegion?.name || "India"}
//           </p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Button
//             variant={mapType === "roadmap" ? "default" : "outline"}
//             size="sm"
//             onClick={() => setMapType("roadmap")}
//             iconName="Map"
//           >
//             Default
//           </Button>
//           <Button
//             variant={mapType === "satellite" ? "default" : "outline"}
//             size="sm"
//             onClick={() => setMapType("satellite")}
//             iconName="Image"
//           >
//             Satellite
//           </Button>
//           <Button
//             variant={mapType === "terrain" ? "default" : "outline"}
//             size="sm"
//             onClick={() => setMapType("terrain")}
//             iconName="Layers"
//           >
//             Terrain
//           </Button>
//         </div>
//       </div>

//       {/* Region Filters */}
//       <div className="flex flex-wrap gap-2">
//         {regions.map((region) => (
//           <Button
//             key={region.id}
//             variant={
//               selectedRegion?.id === region.id ? "default" : "outline"
//             }
//             size="sm"
//             onClick={() => onRegionSelect(region)}
//           >
//             {region.name}
//           </Button>
//         ))}
//       </div>

//       {/* Google Map */}
//       <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border">
//         <iframe
//           title="Live Map"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           loading="lazy"
//           allowFullScreen
//           referrerPolicy="no-referrer-when-downgrade"
//           src={mapUrl}
//         />
//         {/* Live Status */}
//         <div className="absolute top-2 left-2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 border border-border">
//           <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
//           <span className="text-xs font-medium text-foreground">
//             Live Tracking
//           </span>
//         </div>
//       </div>

//       {/* Routes Overlay Info */}
//       {routes?.length > 0 && (
//         <div className="bg-muted/40 p-3 rounded-lg text-xs text-muted-foreground">
//           <p className="font-medium text-foreground mb-2">Active Routes:</p>
//           <ul className="space-y-1">
//             {routes.map((route) => (
//               <li key={route.id} className="flex items-center space-x-2">
//                 <Icon name="Truck" size={12} className="text-primary" />
//                 <span>
//                   {route.name} – {route.distance} km ({route.status})
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveMonitoringMap;


// src/pages/admin-portal/monitoring-hub/components/LiveMonitoringMap.jsx

import React, { useState } from "react";
import Icon from "../../../../components/AppIcon";
import Button from "../../../../components/ui/Button";

const LiveMonitoringMap = ({ selectedRegion, routes = [] }) => {
  const [mapType, setMapType] = useState("default");

  // ✅ CHANGED: Free Google Maps embed (no API key required)
  const mapUrl = `https://www.google.com/maps?q=${
    selectedRegion?.coordinates || "20.5937,78.9629"
  }&z=12&output=embed`;

  return (
    <div className="bg-card rounded-lg border border-border shadow-elevation overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Live Monitoring Map
          </h3>
          <p className="text-xs text-muted-foreground">
            Track vehicles, waste collection, and routes in real-time
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {["default", "satellite", "terrain"].map((type) => (
            <Button
              key={type}
              size="sm"
              variant={mapType === type ? "default" : "outline"}
              onClick={() => setMapType(type)}
              iconName={
                type === "default"
                  ? "Map"
                  : type === "satellite"
                  ? "Image"
                  : "Layers"
              }
              iconPosition="left"
              iconSize={14}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Region Breadcrumb */}
      <div className="px-4 py-2 border-b border-border text-sm text-muted-foreground flex space-x-4 overflow-x-auto">
        {/* ✅ CHANGED: Flex-wrap for breadcrumb */}
        <span className="cursor-pointer hover:text-primary">India</span>
        <span className="cursor-pointer hover:text-primary">Maharashtra</span>
        <span className="cursor-pointer hover:text-primary">Mumbai</span>
        <span className="cursor-pointer hover:text-primary">Bandra West</span>
      </div>

      {/* Map Section */}
      <div className="relative h-72">
        <iframe
          title="Live Monitoring Map"
          src={mapUrl}
          width="100%"
          height="100%"
          loading="lazy"
          className="w-full h-full"
        />

        {/* Live Tag */}
        <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 border border-border shadow">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></span>
          <span className="text-xs font-medium text-foreground">Live Tracking</span>
        </div>
      </div>

      {/* ✅ CHANGED: Dynamic Overlay for Routes & Waste Data */}
      {routes?.length > 0 ? (
        <div className="p-4 border-t border-border bg-muted/40">
          <p className="font-medium text-sm text-foreground mb-2">
            Active Routes:
          </p>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li
                key={route.id}
                className="flex items-center justify-between text-xs bg-card p-2 rounded-lg border border-border"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={14} className="text-primary" />
                  <span className="text-foreground font-medium">
                    {route.name}
                  </span>
                  <span className="text-muted-foreground">
                    ({route.status})
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="Trash2" size={12} className="text-accent" />
                    <span>{route.wasteCollected} tons</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} className="text-warning" />
                    <span>{route.duration}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="p-4 border-t border-border text-xs text-muted-foreground">
          No active routes available in {selectedRegion?.name || "this region"}.
        </div>
      )}
    </div>
  );
};

export default LiveMonitoringMap;
