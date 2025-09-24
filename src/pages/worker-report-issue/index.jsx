

// src/pages/worker-report-issue/index.jsx
import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";
import api from "../../services/api"; // optional - used if you wire backend

export default function WorkerReportIssue() {
  const [type, setType] = useState("Garbage Overflow");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePhoto = (file) => {
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = (e) => setPhotoPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");

    const payload = {
      id: `r_${Date.now()}`,
      workerId: localStorage.getItem("userId") || "worker_123",
      type,
      details,
      date: new Date().toISOString(),
      status: "reported",
      photo: photoPreview || null,
    };

    try {
      // If backend exists
      // await api.post('/worker/report', payload);

      const existing = JSON.parse(localStorage.getItem("worker_reports") || "[]");
      localStorage.setItem("worker_reports", JSON.stringify([payload, ...existing]));

      setSuccessMessage("Report submitted. Dispatch/ops will review it shortly.");
      setType("Garbage Overflow");
      setDetails("");
      setPhoto(null);
      setPhotoPreview(null);
    } catch (err) {
      console.error("Failed to submit report", err);
      setSuccessMessage("Failed to submit — try again (check console).");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="AlertCircle" size={22} />
          <span>Report Issue</span>
        </h2>
        <p className="text-muted-foreground">
          Quickly report operational or safety issues with a photo.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-card border border-border rounded-lg p-4 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              Issue Type
            </span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-2 border rounded"
            >
              <option>Garbage Overflow</option>
              <option>Damaged Bin</option>
              <option>Vehicle Issue</option>
              <option>Safety Hazard</option>
              <option>Other</option>
            </select>
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="text-sm font-medium text-muted-foreground">
              Details
            </span>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mt-1 p-2 border rounded"
              placeholder="Describe what happened..."
              required
            />
          </label>
        </div>

        <div>
          <span className="text-sm font-medium text-muted-foreground">
            Photo (optional)
          </span>
          <div className="mt-2 flex items-center space-x-3">
            <input
              id="issuePhoto"
              type="file"
              accept="image/*"
              onChange={(e) => handlePhoto(e.target.files?.[0])}
              className="hidden"
            />
            <label
              htmlFor="issuePhoto"
              className="cursor-pointer inline-flex items-center px-3 py-2 border rounded bg-background hover:bg-muted"
            >
              <Icon name="Camera" size={16} />
              <span className="ml-2 text-sm">Attach Photo</span>
            </label>

            {photoPreview && (
              <div className="w-28 h-20 rounded overflow-hidden border">
                <img
                  src={photoPreview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Submitting to operations team — you'll be notified when updated.
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={() => {
                setType("Garbage Overflow");
                setDetails("");
                setPhotoPreview(null);
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              disabled={submitting || !details.trim()}
            >
              {submitting ? "Submitting..." : "Submit Report"}
            </Button>
          </div>
        </div>

        {successMessage && (
          <div className="text-sm text-green-600">{successMessage}</div>
        )}
      </form>
    </div>
  );
}
