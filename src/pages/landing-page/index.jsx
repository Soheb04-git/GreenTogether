
// src/pages/landing-page/index.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EnvironmentalCrisisSection from "./components/EnvironmentalCrisisSection";
import SolutionOverviewSection from "./components/SolutionOverviewSection";
import BenefitsShowcase from "./components/BenefitsShowcase";
import SuccessStoriesCarousel from "./components/SuccessStoriesCarousel";
import ImpactMetricsSection from "./components/ImpactMetricsSection";
import CityPartnershipsSection from "./components/CityPartnershipsSection";
import RegistrationPreviewSection from "./components/RegistrationPreviewSection";
import FAQSection from "./components/FAQSection";
import FinalConversionSection from "./components/FinalConversionSection";
import FooterSection from "./components/FooterSection";

const LandingPage = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    "/images/landing/bg1.png",
    "/images/landing/bg2.png",
    "/images/landing/bg3.png",
    "/images/landing/bg4.png",
    "/images/landing/bg5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ✅ Background slideshow fixed to top */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        {backgrounds.map((bg, index) => (
          <img
            key={index}
            src={bg}
            alt={`Background ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-top object-cover transition-opacity duration-1000
              ${index === currentBg ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* ✅ Overlay stays */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Content scrolls over background */}
      <div className="relative z-10">
        
        <Header />
        <HeroSection />
        <EnvironmentalCrisisSection />
        <SolutionOverviewSection />
        <BenefitsShowcase />
        <SuccessStoriesCarousel />
        <ImpactMetricsSection />
        <CityPartnershipsSection />
        <RegistrationPreviewSection />
        <FAQSection />
        <FinalConversionSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
