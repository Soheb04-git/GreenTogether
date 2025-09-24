// src/pages/worker-safety/index.jsx
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";

const VIDEOS = [
  {
    id: "v1",
    title: "Safe Lifting & Handling",
    youtube: "https://www.youtube.com/embed/5MgBikgcWnY",
    summary:
      "Always use gloves, bend at the knees, avoid twisting while lifting. Work in pairs for heavy bags.",
  },
  {
    id: "v2",
    title: "Personal Protective Equipment (PPE)",
    youtube: "https://www.youtube.com/embed/3fumBcKC6RE",
    summary:
      "Wear gloves, reflective vest, and closed shoes. Replace damaged PPE immediately.",
  },
  {
    id: "v3",
    title: "Road Safety while Collecting",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "Stay on sidewalks when possible, use signals when moving equipment, keep vehicle lights on in low visibility.",
  },
];

export default function WorkerSafety() {
  const [watched, setWatched] = useState(() => {
    return JSON.parse(localStorage.getItem("worker_safety_watched") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("worker_safety_watched", JSON.stringify(watched));
  }, [watched]);

  const toggleWatched = (id) => {
    setWatched((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
        <Icon name="Shield" size={22} />
        <span>Safety & Training</span>
      </h2>
      <p className="text-sm text-muted-foreground">
        Short safety videos and plain-language tips for daily work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VIDEOS.map((v) => (
          <div
            key={v.id}
            className="bg-card border border-border rounded-lg p-3 space-y-3"
          >
            <div className="w-full aspect-video bg-black rounded overflow-hidden">
              <iframe
                title={v.title}
                src={v.youtube}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="font-semibold">{v.title}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {v.summary}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant={watched.includes(v.id) ? "outline" : "primary"}
                size="sm"
                onClick={() => toggleWatched(v.id)}
              >
                {watched.includes(v.id) ? "Marked Watched" : "Mark as Watched"}
              </Button>
              <div className="text-xs text-muted-foreground">
                {watched.includes(v.id) ? "✓ Completed" : "Not watched"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
