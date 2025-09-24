//src/pages/impact-visualization-dashboard/index.jsx
import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "../../layouts/DashboardLayout";
import ImpactHeroSection from "./components/ImpactHeroSection";
import InteractiveCharts from "./components/InteractiveCharts";
import SuccessStories from "./components/SuccessStories";
import PredictiveModeling from "./components/PredictiveModeling";
import SocialSharing from "./components/SocialSharing";

const ImpactVisualizationDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Impact Visualization Dashboard - WasteWise India</title>
        <meta
          name="description"
          content="Explore compelling environmental impact data and success stories from communities across India. Visualize collective progress toward sustainability goals."
        />
        <meta
          name="keywords"
          content="environmental impact, waste management data, sustainability metrics, community success stories, India"
        />
      </Helmet>

      <DashboardLayout>
        {/* Page content inside the layout */}
        <ImpactHeroSection />
        <InteractiveCharts />
        <SuccessStories />
        <PredictiveModeling />
        <SocialSharing />
      </DashboardLayout>
    </>
  );
};

export default ImpactVisualizationDashboard;
