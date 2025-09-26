// src/pages/worker-portal/components/OfflineTraining.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../components/ui/Button";
import CertificateModal from "./CertificateModal";

const trainings = [
  {
    id: 1,
    title: "Waste Segregation Basics",
    description:
      "Learn the importance of separating biodegradable and non-biodegradable waste for efficient management.",
    date: "2025-09-10",
    status: "completed",
    certificateId: "GT-WSB-001",
  },
  {
    id: 2,
    title: "Safety Measures for Waste Handling",
    description:
      "Understand proper safety practices, use of protective gear, and emergency response.",
    date: "2025-09-15",
    status: "pending",
    certificateId: "GT-SMWH-002",
  },
  {
    id: 3,
    title: "Composting Techniques",
    description:
      "Hands-on learning of turning organic waste into compost for community use.",
    date: "2025-09-20",
    status: "completed",
    certificateId: "GT-CT-003",
  },
  {
    id: 4,
    title: "Recycling Awareness",
    description:
      "Detailed session on recycling methods, materials identification, and sustainable practices.",
    date: "2025-09-22",
    status: "completed",
    certificateId: "GT-RA-004",
  },
];

const OfflineTraining = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Offline Training Sessions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainings.map((training) => (
          <motion.div
            key={training.id}
            className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {training.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {training.description}
            </p>
            <p className="mt-3 text-sm text-gray-500">📅 {training.date}</p>
            <p
              className={`mt-1 text-sm font-medium ${
                training.status === "completed"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {training.status === "completed"
                ? "✅ Completed"
                : "🕒 Pending"}
            </p>

            <div className="flex gap-3 mt-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedTraining(training)}
              >
                View Details
              </Button>

              {training.status === "completed" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCertificate(training)}
                >
                  View Certificate
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedTraining && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <button
                onClick={() => setSelectedTraining(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {selectedTraining.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedTraining.description}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Date:</span>{" "}
                {selectedTraining.date}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Status:</span>{" "}
                {selectedTraining.status}
              </p>
              <div className="mt-6 text-right">
                <Button onClick={() => setSelectedTraining(null)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            training={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfflineTraining;
