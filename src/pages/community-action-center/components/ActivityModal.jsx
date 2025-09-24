

// src/pages/community-action-center/components/ActivityModal.jsx
import React, { useState, useEffect } from "react"; 

import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function ActivityModal({
  isOpen,       // ✅ use isOpen properly
  item,
  onClose,
  onJoinCampaign,
  onApplyVolunteer,
  onLeaveCampaign,
  onWithdrawVolunteer
}) {
  if (!isOpen || !item) return null;

  // ✅ Local state for forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = () => {
  //   if (!name || !email) return alert("Please fill in required fields.");

  //   if (item.type === "campaign") {
  //     onJoinCampaign(item);
  //   } else if (item.type === "volunteer") {
  //     onApplyVolunteer(item);
  //   }
  //   setSubmitted(true);
  // };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = () => {
    if (!name || !email) return alert("Please fill in required fields.");

    if (item.type === "campaign") {
      onJoinCampaign(item); 
    } else if (item.type === "volunteer") {
      onApplyVolunteer(item); 
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose}   
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}   
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Icon
              name={item.type === "issue" ? "AlertTriangle" : item.type === "campaign" ? "Users" : "Heart"}
              size={20}
              className="text-primary"
            />
            <span>{item.title}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{item.description}</p>

        {/* --- Campaign / Volunteer Forms --- */}
        {(item.type === "campaign" || item.type === "volunteer") && (
          <div className="space-y-4">
            {!submitted ? (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm"
                />
                <div className="flex space-x-3">
                  {/* ✅ CHANGE: Added Cancel button */}
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                <Button variant="default" fullWidth onClick={handleSubmit}>
                  {item.type === "campaign" ? "Join Campaign" : "Apply to Help"}
                </Button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-3">
                <p className="text-green-600 font-semibold">✅ You’re in!</p>
                <Button variant="outline" fullWidth>
                  View Details
                </Button>
              </div>
            )}
          </div>
        )}

        {/* --- Issue View --- */}
        {item.type === "issue" && (
          <div className="space-y-3">
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Reporter:</strong> {item.reporter}</p>
            <p><strong>Votes:</strong> {item.votes}</p>
            <Button variant="outline" fullWidth onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
