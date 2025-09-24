import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

// Import full pages
import WorkerReportIssue from "../../worker-report-issue";
import WorkerEarnings from "../../worker-earnings";
import WorkerSupport from "../../worker-support";
import WorkerSafety from "../../worker-safety";

const QuickActions = () => {
  const [activeAction, setActiveAction] = useState(null);

  const actions = [
    { id: "report", icon: "Camera", label: "Report Issue", component: <WorkerReportIssue /> },
    { id: "earnings", icon: "DollarSign", label: "Check Earnings", component: <WorkerEarnings /> },
    { id: "support", icon: "Headphones", label: "Request Support", component: <WorkerSupport /> },
    { id: "safety", icon: "Shield", label: "View Safety Tips", component: <WorkerSafety /> },
  ];

  return (
    <div className="border border-border rounded-2xl p-6 bg-gradient-to-br from-green-50 to-teal-50 shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-800">
        ⚡ Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((a) => (
          <Button
            key={a.id}
            variant="outline"
            size="lg"
            onClick={() => setActiveAction(a)}
            className="flex flex-col items-center space-y-2 bg-white shadow-sm hover:shadow-md hover:scale-[1.03] transition rounded-xl py-4"
          >
            <Icon name={a.icon} size={22} className="text-green-600" />
            <span className="text-sm font-medium text-gray-700">{a.label}</span>
          </Button>
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
