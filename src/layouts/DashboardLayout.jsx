
// src/layouts/DashboardLayout.jsx
import React, { useState } from "react";
import Header from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";
import { getRole } from "../utils/auth";

// ✅ Added imports for popups/tabs
import CitizenReportTab from "../components/CitizenReportTab";
import WorkerSeeIssuesTab from "../components/WorkerIssuesTab";

export default function DashboardLayout({ children, workerData }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePopup, setActivePopup] = useState(null); // 🔹 CHANGE 1: track active popup/tab
  const role = getRole();

  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Flex wrapper: Sidebar + Main */}
      <div className="flex pt-16">
        {/* Sidebar */}
        {role !== "champion" && (
          <Sidebar
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
            onQuickAction={(action) => setActivePopup(action)} // 🔹 CHANGE 2: handle Quick Action
          />
        )}

        {/* Main content */}
        <main className="transition-all duration-300 bg-background min-h-screen flex-1">
          <div className="max-w-7xl mx-auto p-6">{children}</div>
        </main>
      </div>

      {/* 🔹 Conditional Citizen Report Tab */}
      {activePopup === "report" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-card p-4 rounded-lg relative w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              onClick={() => setActivePopup(null)}
            >
              ×
            </button>
            <CitizenReportTab onClose={() => setActivePopup(null)} />
          </div>
        </div>
      )}

      {/* 🔹 Conditional Worker See Issues Tab */}
      {activePopup === "see-issues" && workerData && ( // 🔹 CHANGE 3: check workerData
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-card p-4 rounded-lg relative w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              onClick={() => setActivePopup(null)}
            >
              ×
            </button>
            <WorkerSeeIssuesTab
              routes={workerData.routes}
              complaints={workerData.complaints}
              handleCompleteStop={workerData.handleCompleteStop}
              handleStartRoute={workerData.handleStartRoute}
              onClose={() => setActivePopup(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}


