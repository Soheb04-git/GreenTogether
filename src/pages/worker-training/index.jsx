import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Icon from "../../components/AppIcon";

const WorkerTraining = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="BookOpen" size={24} />
          <span>Worker Training & Guides</span>
        </h1>
        <p className="text-muted-foreground">
          Learn best practices with simple videos and easy-to-read summaries.
        </p>

        {/* Training Video */}
        <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Worker Training Video"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Summary */}
        <div className="p-4 bg-card border border-border rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2 text-foreground">Video Summary</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This training covers <span className="font-medium">proper waste collection</span>,
            <span className="font-medium"> segregation techniques</span>, 
            <span className="font-medium"> safety measures</span>, 
            and how to handle citizen complaints effectively.  
            Completing this module helps you improve efficiency, earn more points, and avoid fines.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkerTraining;
