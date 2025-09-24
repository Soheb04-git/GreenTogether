
// src/pages/community-action-center/index.jsx
import React, { useState, useRef } from "react";

// REMOVED: import Header from '../../components/ui/Header';
import DashboardLayout from '../../layouts/DashboardLayout'; // ADDED
import LocationFeed from './components/LocationFeed';
import PhotoReporting from './components/PhotoReporting';
import CampaignCards from './components/CampaignCards';
import VolunteerOpportunities from './components/VolunteerOpportunities';
import SocialFeatures from './components/SocialFeatures';
import RecognitionSystem from './components/RecognitionSystem';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


  
  

  const wasteCenters = [
    {
      id: 1,
      name: "Koramangala Waste Center",
      address: "Koramangala 4th Block, Bangalore",
      lat: 12.9352,
      lng: 77.6245,
      contact: "080-12345678",
    },
    {
      id: 2,
      name: "Indiranagar Recycling Hub",
      address: "Indiranagar 100ft Road, Bangalore",
      lat: 12.9784,
      lng: 77.6408,
      contact: "080-23456789",
    },
    {
      id: 3,
      name: "BTM Composting Facility",
      address: "BTM Layout 2nd Stage, Bangalore",
      lat: 12.9166,
      lng: 77.6101,
      contact: "080-87654321",
    },
    {
      id: 4,
      name: "HSR Waste Processing Unit",
      address: "HSR Layout Sector 2, Bangalore",
      lat: 12.9101,
      lng: 77.6412,
      contact: "080-76543210",
    },
    {
      id: 5,
      name: "Electronic City Waste Depot",
      address: "Electronic City Phase 1, Bangalore",
      lat: 12.8395,
      lng: 77.6775,
      contact: "080-98765432",
    },
  ];


const CommunityActionCenter = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [isReportingOpen, setIsReportingOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isWasteCenterOpen, setIsWasteCenterOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const communityRef = useRef(null);
  const [showEventsModal, setShowEventsModal] = useState(false); // ✅ NEW



  const tabs = [
    { id: 'feed', label: 'Activity Feed', icon: 'Activity', component: LocationFeed },
    { id: 'campaigns', label: 'Campaigns', icon: 'Users', component: CampaignCards },
    { id: 'volunteer', label: 'Volunteer', icon: 'Heart', component: VolunteerOpportunities },
    { id: 'social', label: 'Community', icon: 'MessageSquare', component: SocialFeatures },
    { id: 'recognition', label: 'Recognition', icon: 'Award', component: RecognitionSystem }
  ];

  const handleReportIssue = () => {
    setIsReportingOpen(true);
  };

  const handleReportSubmit = (reportData) => {
    console.log('Report submitted:', reportData);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleJoinCampaign = (campaign) => {
    console.log('Joining campaign:', campaign?.id);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleApplyVolunteer = (opportunity) => {
    console.log('Applying for volunteer opportunity:', opportunity?.id);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const ActiveComponent = tabs?.find(tab => tab?.id === activeTab)?.component;

  return (
    // CHANGED: wrap whole page inside DashboardLayout (removes need to manually render Header/Sidebar)
    <DashboardLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Community Action Center</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empower your community through collaborative environmental action. Report issues, join campaigns, and make a lasting impact together.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-2xl font-bold text-success">89</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-2xl font-bold text-accent">23</div>
                <div className="text-sm text-muted-foreground">Active Campaigns</div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="text-2xl font-bold text-secondary">156</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-6 py-3 rounded-lg shadow-elevation-lg animate-slide-in">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={20} />
            <span className="font-medium">Action completed successfully!</span>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {ActiveComponent && (
              // ✅ FIXED attach ref to SocialFeatures for Community Chat scroll
              <div ref={activeTab === 'social' ? communityRef : null}>
                <ActiveComponent
                  onReportIssue={handleReportIssue}
                  onJoinCampaign={handleJoinCampaign}
                  onApplyVolunteer={handleApplyVolunteer}
                />
              </div>
            )}
          </div>

          {/* Sidebar (page-specific right column) */}
          <div className="lg:col-span-1 space-y-6">
      {/* Quick Actions (Right Sidebar) */}
      <div className="p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="space-y-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="MapPin"
            iconSize={16}
            onClick={() => setActiveTab("social")}
            className="w-full justify-start"
          >
            Find Waste Centers
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="MessageCircle"
            iconSize={16}
            onClick={() =>
              communityRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full justify-start"
          >
            Community Chat
          </Button>
        </div>
      </div>

      </div>

            {/* Your Impact */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Total Points</span>
                  </div>
                  <span className="font-semibold text-primary">1,250</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Camera" size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">Reports Submitted</span>
                  </div>
                  <span className="font-semibold text-foreground">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-success" />
                    <span className="text-sm text-muted-foreground">Campaigns Joined</span>
                  </div>
                  <span className="font-semibold text-foreground">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={16} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">Volunteer Hours</span>
                  </div>
                  <span className="font-semibold text-foreground">28</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next Level</span>
                  <span className="font-medium text-foreground">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-3/4 transition-all duration-500"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">250 points to Eco Champion</p>
              </div>
            </div>

            {/* Upcoming Events */}
<div className="bg-card rounded-lg border border-border p-6">
  <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Events</h3>
  <div className="space-y-3">
    <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">Park Cleanup Drive</p>
        <p className="text-xs text-muted-foreground">Tomorrow, 7:00 AM</p>
      </div>
    </div>
    <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">Segregation Workshop</p>
        <p className="text-xs text-muted-foreground">Jan 20, 9:00 AM</p>
      </div>
    </div>
  </div>

  {/* ✅ CHANGE: Added modal trigger */}
  <Button
    variant="ghost"
    size="sm"
    className="w-full mt-4"
    iconName="Calendar"
    iconSize={14}
    onClick={() => setShowEventsModal(true)} // <-- NEW
  >
    View All Events
  </Button>
</div>

{/* ✅ CHANGE: Events Modal */}
{showEventsModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center space-x-2">
          <Icon name="Calendar" size={20} className="text-primary" />
          <span>All Upcoming Events</span>
        </h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="X"
          onClick={() => setShowEventsModal(false)} // CLOSE modal
        />
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
        {/* Example events list - extendable */}
        <div className="p-4 bg-muted/30 rounded-lg">
          <p className="font-medium text-foreground">Park Cleanup Drive</p>
          <p className="text-xs text-muted-foreground">Tomorrow, 7:00 AM</p>
        </div>
        <div className="p-4 bg-muted/30 rounded-lg">
          <p className="font-medium text-foreground">Segregation Workshop</p>
          <p className="text-xs text-muted-foreground">Jan 20, 9:00 AM</p>
        </div>
        <div className="p-4 bg-muted/30 rounded-lg">
          <p className="font-medium text-foreground">Plastic-Free Awareness Walk</p>
          <p className="text-xs text-muted-foreground">Jan 25, 10:00 AM</p>
        </div>
        <div className="p-4 bg-muted/30 rounded-lg">
          <p className="font-medium text-foreground">Community Recycling Fair</p>
          <p className="text-xs text-muted-foreground">Feb 2, 11:00 AM</p>
        </div>
      </div>
    </div>
  </div>
)}


            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success mt-0.5" />
                  <span>Be respectful and constructive</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success mt-0.5" />
                  <span>Provide accurate location details</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success mt-0.5" />
                  <span>Follow up on your reports</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success mt-0.5" />
                  <span>Support fellow community members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      

      {/* Photo Reporting Modal */}
      <PhotoReporting
        isOpen={isReportingOpen}
        onClose={() => setIsReportingOpen(false)}
        onSubmit={handleReportSubmit}
      />

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <Button
          variant="default"
          size="lg"
          onClick={handleReportIssue}
          iconName="Plus"
          iconSize={24}
          className="w-14 h-14 rounded-full shadow-elevation-lg"
        />
      </div>

            {/* ✅ Waste Center Modal */}
      {isWasteCenterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[80vh] flex flex-col animate-fade-in overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <Icon name="Map" size={20} className="text-primary" />
                <span>Available Waste Centers</span>
              </h2>
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                onClick={() => {
                  setIsWasteCenterOpen(false);
                  setSelectedCenter(null);
                }}
              />
            </div>

            {/* Content - Split List & Map */}
            <div className="flex flex-1 overflow-hidden">
              {/* Waste Centers List */}
              <div className="w-1/2 overflow-y-auto p-4 space-y-4 border-r">
                {wasteCenters.map((center) => (
                  <div
                    key={center.id}
                    className="p-4 bg-card rounded-lg border shadow-sm"
                  >
                    <h3 className="font-semibold text-foreground">{center.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{center.address}</p>
                    {selectedCenter?.id === center.id ? (
                      <div className="text-sm text-primary font-medium">
                        Contact: {center.contact}
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedCenter(center)}
                      >
                        Contact
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="w-1/2">
                <MapContainer
                  center={[12.9716, 77.5946]}
                  zoom={12}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  {wasteCenters.map((center) => (
                    <Marker
                      key={center.id}
                      position={[center.lat, center.lng]}
                    />
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      )}


    </DashboardLayout>
  );
};

export default CommunityActionCenter;
