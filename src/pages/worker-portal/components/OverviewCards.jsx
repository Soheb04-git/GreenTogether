// src/pages/worker-portal/components/OverviewCards.jsx
import React from "react";

const OverviewCards = ({ stats }) => {
  const defaultStats = [
    { label: "Earnings Today", value: "₹1,200", color: "primary" },
    { label: "Tasks Completed", value: "15", color: "success" },
    { label: "Complaints", value: "2", color: "warning" },
    { label: "Reward Points", value: "120", color: "accent" },
  ];

  const data = stats?.length ? stats : defaultStats;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`p-4 bg-${item.color}/10 rounded-lg text-center`}
        >
          <div className={`text-lg font-bold text-${item.color}`}>
            {item.value}
          </div>
          <div className="text-sm text-muted-foreground">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
