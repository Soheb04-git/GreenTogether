// src/pages/worker-portal/components/UpcomingRoutes.jsx
import React from "react";
import Button from "../../../components/ui/Button";

const UpcomingRoutes = ({ routes, onStartRoute, onCompleteStop }) => {
  const mockRoutes = [
    {
      id: "route_1",
      name: "Morning Collection - Zone A",
      status: "not_started",
      stops: [
        { id: "stop1", address: "Street 12, Bandra", status: "pending" },
        { id: "stop2", address: "Lane 5, Andheri", status: "pending" },
      ],
    },
  ];

  const data = routes?.length ? routes : mockRoutes;

  return (
    <div className="space-y-4 mt-6">
      {data.map((route) => (
        <div
          key={route.id}
          className="border border-border rounded-xl p-4 bg-card shadow-sm space-y-4"
        >
          {/* Route Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{route.name}</h2>
            {route.status === "not_started" && (
              <Button size="sm" variant="primary" onClick={() => onStartRoute(route.id)}>
                Start Route
              </Button>
            )}
          </div>

          {/* Stops */}
          <div className="space-y-2">
            {route.stops.map((stop) => (
              <div
                key={stop.id}
                className="flex justify-between items-center border-b border-border py-2"
              >
                <span className="text-sm">{stop.address}</span>
                {stop.status === "pending" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onCompleteStop(route.id, stop.id)}
                  >
                    Mark Done
                  </Button>
                ) : (
                  <span className="text-success text-xs">✔ Completed</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingRoutes;
