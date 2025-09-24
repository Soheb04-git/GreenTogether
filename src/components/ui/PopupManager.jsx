import React from "react";

export default function PopupManager({ activePopup, onClose, extraProps = {} }) {
  if (!activePopup) return null;

  let Content = null;

  switch (activePopup) {
    case "report":
      const { CitizenReportTab } = extraProps;
      Content = CitizenReportTab ? <CitizenReportTab /> : <div>No Component</div>;
      break;
    case "see-issues":
      const { WorkerSeeIssuesTab } = extraProps;
      Content = WorkerSeeIssuesTab ? <WorkerSeeIssuesTab /> : <div>No Component</div>;
      break;
    default:
      Content = null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-card w-full max-w-lg p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>
        {Content}
      </div>
    </div>
  );
}
