

import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

// Import full pages
import WorkerReportIssue from "../../worker-report-issue";
import WorkerEarnings from "../../worker-earnings";
import WorkerSupport from "../../worker-support";
import WorkerSafety from "../../worker-safety";

const QuickActions = () => {
  const [activeAction, setActiveAction] = useState(null);

  const actions = [
    { id: "report", icon: "Camera", label: "Report Issue", component: <WorkerReportIssue />, bg: "from-green-400 to-green-600" },
    { id: "earnings", icon: "DollarSign", label: "Check Earnings", component: <WorkerEarnings />, bg: "from-blue-400 to-blue-600" },
    { id: "support", icon: "Headphones", label: "Request Support", component: <WorkerSupport />, bg: "from-yellow-400 to-yellow-500" },
    { id: "safety", icon: "Shield", label: "View Safety Tips", component: <WorkerSafety />, bg: "from-red-400 to-red-600" },
  ];

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-green-100 to-green-200 shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-800">
        ⚡ Quick Actions
      </h2>

      {/* Grid for desktop and scrollable for mobile */}
      <div className="flex flex-wrap gap-4 justify-start md:justify-between">
        {actions.map((a) => (
          <div
            key={a.id}
            onClick={() => setActiveAction(a)}
            className={`flex-1 min-w-[160px] max-w-[220px] flex flex-col items-center p-6 rounded-2xl text-white cursor-pointer shadow-md transform transition hover:scale-105 hover:shadow-xl bg-gradient-to-br ${a.bg}`}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-3 bg-white/20 rounded-full">
              <Icon name={a.icon} size={24} className="text-white" />
            </div>
            <span className="font-semibold text-center">{a.label}</span>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeAction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-3xl relative max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setActiveAction(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>

            {/* Scrollable area */}
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              {activeAction.component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions;
