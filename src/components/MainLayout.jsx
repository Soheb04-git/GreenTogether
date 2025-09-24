// src/components/MainLayout.jsx
import React, { useState } from "react";
import CitizenReportTab from "./CitizenReportTab";
import WorkerIssuesTab from "./WorkerIssuesTab";

export default function MainLayout({ children }) {
  // ✅ Track which tab is open
  const [openTab, setOpenTab] = useState(null);

  return (
    <div className="flex-1 p-4">
      {/* Quick Action Tabs */}
      {openTab === "report" && <CitizenReportTab />}       {/* Citizen tab */}
      {openTab === "see-issues" && <WorkerIssuesTab />}   {/* Worker tab */}
      {!openTab && children}                               {/* Normal page content */}
    </div>
  );
}
