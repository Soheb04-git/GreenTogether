
// src/pages/worker-portal/index.jsx
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import api from "../../services/api";
import TrainingSection from "./components/TrainingSection";
import QuickActions from "./components/QuickActions";
import WorkerComplaints from "./components/WorkerComplaints";
import WorkerIssuesTab from "../../components/WorkerIssuesTab";

// 🗺️ Map imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ✅ Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const WorkerPortal = () => {
  const [routes, setRoutes] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [openQuickAction, setOpenQuickAction] = useState(null);

  // 🔑 Worker info
  const workerId = localStorage.getItem("userId") || "worker_123";

  useEffect(() => {
    const fetchWorkerData = async () => {
      setLoading(true);
      try {
        const [routesRes, complaintsRes] = await Promise.all([
          api.get(`/worker/${workerId}/routes/today`),
          api.get(`/worker/${workerId}/complaints`),
        ]);
        setRoutes(routesRes.data.routes || []);
        setComplaints(complaintsRes.data.complaints || []);
      } catch (err) {
        console.error("Failed to fetch worker data", err);

        // ✅ Mock fallback
        setRoutes([
          {
            id: "route_1",
            name: "Morning Collection - Zone A",
            status: "not_started",
            stops: [
              { id: "stop1", address: "Street 12, Bandra", status: "pending", lat: 19.055, lng: 72.84 },
              { id: "stop2", address: "Lane 5, Andheri", status: "pending", lat: 19.119, lng: 72.846 },
              { id: "stop3", address: "Road 3, Dharavi", status: "pending", lat: 19.041, lng: 72.855 },
            ],
          },
        ]);

        setComplaints([
          {
            id: "comp1",
            description: "Garbage not collected yesterday in Street 5",
            status: "validated",
            date: "2024-09-17",
            fine: 200,
          },
          {
            id: "comp2",
            description: "Collection delayed by 1 hour",
            status: "false",
            date: "2024-09-18",
            fine: 0,
          },
        ]);
      }
      setLoading(false);
    };

    fetchWorkerData();
  }, [workerId]);

  const handleStartRoute = async (routeId) => {
    console.log("Starting route:", routeId);
    // await api.post(`/worker/route/${routeId}/start`);
  };

  const handleCompleteStop = async (routeId, stopId) => {
    console.log("Stop complete:", stopId);
    // await api.post(`/worker/route/${routeId}/stop/${stopId}/complete`);

    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === routeId
          ? {
              ...route,
              stops: route.stops.map((stop) =>
                stop.id === stopId ? { ...stop, status: "completed" } : stop
              ),
            }
          : route
      )
    );
  };

  return (
    <DashboardLayout 
    
    workerData={{
    routes,
    complaints,
    handleCompleteStop,
    handleStartRoute
  }}
    
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 space-y-10">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
            <Icon name="Truck" size={24} />
            <span>Worker Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Manage your assigned routes, complaints, and rewards
          </p>
        </div>

        {/* ✅ Worker Training */}
        <TrainingSection />

        {/* ✅ Quick Actions */}
        <QuickActions />

        {/* ✅ Today’s Tasks */}
        <div className="bg-card border border-border rounded-lg shadow p-4 space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Icon name="Calendar" size={18} className="text-green-600" />
            Today’s Tasks
          </h3>
          <p className="text-sm text-muted-foreground">
            Your assigned routes for today. Tap to locate on map.
          </p>

          {routes.length === 0 ? (
            <p className="text-muted-foreground">No tasks assigned today.</p>
          ) : (
            <ul className="space-y-3">
              {routes.flatMap((r) =>
                r.stops.map((stop) => (
                  <li
                    key={stop.id}
                    className={`p-3 rounded border flex justify-between items-center cursor-pointer transition ${
                      selectedRoute === stop.id
                        ? "bg-blue-50 border-blue-400"
                        : stop.status === "completed"
                        ? "bg-green-50 border-green-300"
                        : "bg-gray-50"
                    }`}
                    onClick={() => setSelectedRoute(stop.id)}
                  >
                    <span className="text-sm">{stop.address}</span>
                    {stop.status === "completed" ? (
                      <span className="text-green-600 text-xs">✔ Done</span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCompleteStop(r.id, stop.id);
                        }}
                        className="px-2 py-1 text-xs bg-green-600 text-white rounded"
                      >
                        Mark Done
                      </button>
                    )}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>

        {/* ✅ Quick Action Panel */}
{openQuickAction === "see-issues" && (
  <div className="fixed top-16 right-0 w-96 h-full bg-white shadow-xl z-50 p-4 flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">Reported Issues</h2>
      <button
        onClick={() => setOpenQuickAction(null)}
        className="text-xl font-bold"
      >
        ✕
      </button>
    </div>

    {/* ✅ Pass the required props */}
    <WorkerIssuesTab
      routes={routes}
      complaints={complaints}
      handleCompleteStop={handleCompleteStop}
      handleStartRoute={handleStartRoute}
      onClose={() => setOpenQuickAction(null)} // optional, for internal close
    />
  </div>
)}


        {/* ✅ My Routes Section */}
        <h2 className="text-xl font-semibold flex items-center gap-2 text-orange-800 mt-4">
          🚛 My Routes
        </h2>
        {loading ? (
          <p className="text-muted-foreground">Loading routes...</p>
        ) : (
          routes.map((route) => (
            <div
              key={route.id}
              className="border border-yellow-200 rounded-2xl p-5 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-md hover:shadow-lg hover:scale-[1.01] transition space-y-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-orange-800">
                  {route.name}
                </h2>
                {route.status === "not_started" && (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => handleStartRoute(route.id)}
                  >
                    Start Route
                  </Button>
                )}
              </div>

              {/* Stops */}
              <div className="space-y-2">
                {route.stops.map((stop) => (
                  <div
                    key={stop.id}
                    className="flex justify-between items-center border-b border-orange-200 py-2 rounded-lg px-3 bg-white/70 shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {stop.address}
                    </span>
                    {stop.status === "pending" ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCompleteStop(route.id, stop.id)}
                      >
                        Mark Done
                      </Button>
                    ) : (
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">
                        ✅ Completed
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {/* ✅ GPS Map */}
        <div className="bg-card border border-border rounded-lg shadow">
          <h3 className="p-3 text-lg font-semibold border-b">GPS Map</h3>
          <MapContainer
            center={[19.076, 72.8777]} // Mumbai center (mock)
            zoom={12}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {routes.flatMap((r) =>
              r.stops.map((stop) => (
                <Marker
                  key={stop.id}
                  position={[stop.lat, stop.lng]}
                  eventHandlers={{
                    click: () => setSelectedRoute(stop.id),
                  }}
                >
                  <Popup>
                    <div>
                      <strong>{stop.address}</strong>
                      <br />
                      {stop.status === "completed" ? (
                        <span className="text-green-600">✔ Completed</span>
                      ) : (
                        <button
                          onClick={() => handleCompleteStop(r.id, stop.id)}
                          className="mt-2 px-2 py-1 bg-green-600 text-white text-xs rounded"
                        >
                          Mark Done
                        </button>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))
            )}
          </MapContainer>
        </div>

        {/* ✅ Complaints Section */}
        <WorkerComplaints complaints={complaints} />

        {/* ✅ Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-5 rounded-2xl text-center bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:scale-105 transition">
            <div className="text-xl font-bold">₹1,200</div>
            <div className="text-sm opacity-90">💰 Earnings Today</div>
          </div>

          <div className="p-5 rounded-2xl text-center bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md hover:scale-105 transition">
            <div className="text-xl font-bold">95%</div>
            <div className="text-sm opacity-90">📈 Task Success</div>
          </div>

          <div className="p-5 rounded-2xl text-center bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md hover:scale-105 transition">
            <div className="text-xl font-bold">2</div>
            <div className="text-sm opacity-90">⚠️ Complaints</div>
          </div>

          <div className="p-5 rounded-2xl text-center bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-md hover:scale-105 transition">
            <div className="text-xl font-bold">120</div>
            <div className="text-sm opacity-90">🎁 Reward Points</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkerPortal;
