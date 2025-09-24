// src/components/CitizenReportTab.jsx
import React, { useState, useContext } from "react";
import { ReportContext } from "../context/ReportContext";
import Icon from "./AppIcon";
import Button from "./ui/Button";

export default function CitizenReportTab({ closeTab }) {
  const { reports, setReports } = useContext(ReportContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Waste");
  const [priority, setPriority] = useState("Normal");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Get current location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Submit a new report
  const handleSubmit = () => {
    if (!title || !description) {
      alert("Please provide title and description.");
      return;
    }

    const newReport = {
      id: Date.now(),
      name: title,
      desc: description,
      category,
      priority,
      photo,
      location,
      status: "Pending",
      createdAt: new Date().toLocaleString(),
    };

    setReports([newReport, ...reports]);

    // Reset form
    setTitle("");
    setDescription("");
    setCategory("Waste");
    setPriority("Normal");
    setPhoto(null);
    setLocation({ lat: null, lng: null });
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto space-y-4">
      {/* Form Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Report a New Issue</h3>

        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
        />

        <div className="flex flex-col md:flex-row gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Waste">Waste</option>
            <option value="Compost">Compost</option>
            <option value="Street Cleaning">Street Cleaning</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
            <Button variant="outline" size="sm" iconName="Camera">
              Upload Photo
            </Button>
          </label>

          <Button variant="outline" size="sm" iconName="MapPin" onClick={handleGetLocation}>
            Use Current Location
          </Button>
        </div>

        {photo && (
          <div className="mt-2">
            <img src={photo} alt="preview" className="max-h-32 rounded shadow" />
          </div>
        )}

        {location.lat && location.lng && (
          <div className="text-sm text-gray-500">
            Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </div>
        )}

        <Button variant="default" size="sm" onClick={handleSubmit} className="w-full">
          Submit Issue
        </Button>
      </div>

      {/* Previous Reports */}
      <div className="flex-1 overflow-y-auto space-y-3">
        <h3 className="text-lg font-semibold text-gray-700">Previous Reports</h3>
        {reports.length === 0 && <div className="text-gray-500">No reports yet.</div>}

        {reports.map((r) => (
          <div key={r.id} className="p-3 border rounded shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <span className="font-medium">{r.name}</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-200">{r.status}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">{r.desc}</div>
            <div className="mt-1 text-xs text-gray-500">
              Category: {r.category} | Priority: {r.priority}
            </div>
            {r.photo && <img src={r.photo} alt="report" className="mt-2 max-h-28 rounded" />}
            {r.location.lat && (
              <div className="mt-1 text-xs text-gray-500">
                Location: {r.location.lat.toFixed(4)}, {r.location.lng.toFixed(4)}
              </div>
            )}
            <div className="mt-1 text-xs text-gray-400">Reported: {r.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
