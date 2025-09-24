// src/pages/worker-support/index.jsx
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";

export default function WorkerSupport() {
  const [requests, setRequests] = useState([]);
  const [category, setCategory] = useState("Technical Issue");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("worker_support_requests") || "[]");
    setRequests(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      id: `s_${Date.now()}`,
      workerId: localStorage.getItem("userId") || "worker_123",
      category,
      description,
      status: "pending",
      date: new Date().toISOString(),
    };

    const updated = [payload, ...requests];
    setRequests(updated);
    localStorage.setItem("worker_support_requests", JSON.stringify(updated));

    setCategory("Technical Issue");
    setDescription("");
    setSubmitting(false);
  };

  const markResolved = (id) => {
    const updated = requests.map((r) =>
      r.id === id ? { ...r, status: "resolved" } : r
    );
    setRequests(updated);
    localStorage.setItem("worker_support_requests", JSON.stringify(updated));
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
        <Icon name="HelpCircle" size={22} />
        <span>Request Support</span>
      </h2>
      <p className="text-sm text-muted-foreground">
        Request help with payments, routes, or technical issues.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-card border border-border rounded-lg p-4 space-y-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option>Technical Issue</option>
            <option>Payment Issue</option>
            <option>Route Change</option>
            <option>Other</option>
          </select>

          <div className="md:col-span-2">
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Describe the problem or request..."
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="ghost"
            onClick={() => {
              setCategory("Technical Issue");
              setDescription("");
            }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? "Sending..." : "Send Request"}
          </Button>
        </div>
      </form>

      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">My Support Requests</h3>
        {requests.length === 0 ? (
          <div className="text-muted-foreground">No requests yet.</div>
        ) : (
          <div className="space-y-2">
            {requests.map((r) => (
              <div
                key={r.id}
                className="p-3 border rounded-lg flex items-start justify-between"
              >
                <div>
                  <div className="font-medium">
                    {r.category}{" "}
                    <span className="text-xs text-muted-foreground">
                      • {new Date(r.date).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {r.description}
                  </div>
                  <div className="text-xs mt-1">
                    {r.status === "pending" ? "Pending" : "Resolved"}
                  </div>
                </div>
                <div>
                  {r.status === "pending" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => markResolved(r.id)}
                    >
                      Mark as resolved (demo)
                    </Button>
                  ) : (
                    <div className="text-xs text-success">Resolved</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
