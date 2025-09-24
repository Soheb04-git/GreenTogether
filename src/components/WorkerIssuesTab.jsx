import React, { useContext } from "react";
import { ReportContext } from "../context/ReportContext";

export default function WorkerIssuesTab() {
  const { reports, setReports } = useContext(ReportContext);

  const handleStatusUpdate = (id, status) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  return (
    <div className="p-4 max-h-[500px] overflow-y-auto space-y-4">
      {reports.map((issue) => (
        <div key={issue.id} className="p-4 bg-white shadow rounded-lg border">
          <div className="font-semibold">{issue.name}</div>
          {issue.photo && (
            <img
              src={issue.photo}
              alt="report"
              className="max-h-40 rounded mt-2"
            />
          )}
          <div className="mt-2">{issue.desc}</div>
          <div className="mt-2 text-sm text-muted">
            Location:{" "}
            {issue.location
              ? `${issue.location.lat.toFixed(4)}, ${issue.location.lng.toFixed(4)}`
              : "N/A"}
          </div>
          <div className="mt-2 flex space-x-2">
            <button
              className="bg-green-500 text-white px-3 py-1 rounded"
              onClick={() => handleStatusUpdate(issue.id, "Accepted")}
            >
              Accept
            </button>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => handleStatusUpdate(issue.id, "Completed")}
            >
              Complete
            </button>
          </div>
          {issue.status && (
            <div className="mt-2 text-sm font-semibold">Status: {issue.status}</div>
          )}
        </div>
      ))}
    </div>
  );
}
