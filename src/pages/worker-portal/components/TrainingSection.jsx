// src/pages/worker-portal/components/TrainingSection.jsx
import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const TrainingSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const trainingModules = [
    {
      id: "t1",
      title: "How to Handle Waste Safely",
      videoUrl: "https://www.youtube.com/embed/HgEo7YnvJs0?si=6n3sDM9FtmtN2kOq",
      summary:
    "🌍 Introduction: The condition of our environment depends greatly on how we manage waste. Waste management involves prevention, generation, monitoring, handling, treatment, disposal, and reuse of waste materials. It is important today because of rising population and rapid industrialization.\n\n🗑️ Types of Solid Waste: Solid waste comes from farming, municipal sources (homes, schools, offices), and special types such as healthcare waste, sewage sludge, and hazardous household materials. If not managed properly, these wastes can harm health, spread diseases, and damage the environment.\n\n✅ Importance of Proper Waste Disposal: Proper disposal keeps the environment free from germs, reduces negative impact on health, conserves resources, and supports eco-friendly living.\n\n♻️ Four Effective Ways of Waste Management:\n1. Recycling – Converting old products into new ones, saving raw materials and reducing pollution.\n2. Composting – Turning organic waste like food and garden waste into natural fertilizer that improves soil quality.\n3. Landfilling – Burying waste safely underground when it cannot be reused or recycled.\n4. Incineration – Burning waste at high temperatures to reduce its volume, sometimes producing energy in the process.\n\n🌱 Conclusion: Effective waste management is the responsibility of everyone. By practicing recycling, composting, landfilling, and controlled incineration, we can reduce pollution, conserve resources, prevent diseases, and create a cleaner and greener future.",
    },
    {
      id: "t2",
      title: "Operating Collection Vehicles",
      videoUrl: "https://www.youtube.com/embed/-aOR3FDRx3w?si=9b9lkEYCe3Y0s4FY",
      summary:
        "Learn how to operate vehicles, follow routes properly, and save fuel while maintaining safety.",
    },
    {
      id: "t3",
      title: "Dealing with Complaints",
      videoUrl: "https://www.youtube.com/embed/kx7-S9jvVXM?si=w9_1PJyiSh25KA3Z",
      summary:
        "Guidelines on handling citizen complaints politely, logging issues, and avoiding fines.",
    },
  ];

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-border rounded-2xl shadow-md">
      {/* STYLE: section heading with better icon style */}
      <h2 className="text-xl font-bold flex items-center space-x-2 mb-4 text-indigo-800">
        <Icon name="BookOpen" size={22} className="text-indigo-600" />
        <span>Training & Guides</span>
      </h2>

      {/* STYLE: Cards with hover animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trainingModules.map((module) => (
          <div
            key={module.id}
            className="p-4 border border-border rounded-xl bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
            onClick={() => setSelectedVideo(module)}
          >
            <h3 className="font-medium text-gray-800">{module.title}</h3>
            <p className="text-xs text-gray-500 mt-2">
              {module.summary.slice(0, 60)}...
            </p>
          </div>
        ))}
      </div>

          {/* Video Player */}
        {selectedVideo && (
          <div className="mt-6 bg-white p-4 rounded-xl shadow-md relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              ✖
            </button>

            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {selectedVideo.title}
            </h3>
            <div className="aspect-video mb-4">
          <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-64 rounded-lg border-0"
              allowFullScreen
            ></iframe>

        </div>

            <p className="text-sm text-gray-600">{selectedVideo.summary}</p>
            <Button
              className="mt-3"
              variant="primary"
              onClick={() => alert("Marked as completed ✅")}
            >
              Mark as Completed
            </Button>
          </div>
        )}

    </div>
  );
};

export default TrainingSection;

