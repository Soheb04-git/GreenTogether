import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import ActivityModal from './ActivityModal';

// ✅ ADDED: import leaflet for map
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationFeed = ({ onReportIssue }) => {
  const [currentLocation, setCurrentLocation] = useState('Koramangala, Bangalore');
  const [feedItems, setFeedItems] = useState([]);

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false); // ✅ ADDED modal state
  const [manualAddress, setManualAddress] = useState(''); // ✅ ADDED manual entry
  const [mapCoords, setMapCoords] = useState(null); // ✅ ADDED map coords
  const [loadingAddress, setLoadingAddress] = useState(false); // ✅ added
  const [selectedItem, setSelectedItem] = useState(null);   // ✅ NEW
  const [isModalOpen, setIsModalOpen] = useState(false);
    // ✅ Waste Centers State



  useEffect(() => {
    // Mock location-aware feed data
    const mockFeedItems = [
      {
        id: 1,
        type: 'issue',
        title: 'Overflowing Garbage Bin',
        description: 'Community dustbin near Metro Station overflowing for 3 days',
        location: '0.2 km away • Koramangala 5th Block',
        timestamp: '2 hours ago',
        image: 'https://media.istockphoto.com/id/155382228/photo/overflowing-wheelie-bin.jpg?s=1024x1024&w=is&k=20&c=eqUOjcgt5rkhgLKG08-fkF6O_xiRHHZ1ch93A1DQRWE=',
        reporter: 'Soheb',
        status: 'pending',
        urgency: 'high',
        votes: 12
      },
      {
        id: 2,
        type: 'campaign',
        title: 'Weekend Cleanup Drive',
        description: 'Join us for a community cleanup at Koramangala Park this Saturday',
        location: '0.5 km away • Koramangala Park',
        timestamp: 'Starting in 2 days',
        image: 'https://cdn.pixabay.com/photo/2014/05/12/18/22/cleanup-342707_1280.jpg',
        organizer: 'Green Warriors Bangalore',
        participants: 45,
        target: 100,
        category: 'cleanup',
        joined: false
      },
      {
        id: 3,
        type: 'volunteer',
        title: 'Waste Segregation Training',
        description: 'Help teach proper waste segregation to local residents',
        location: '0.8 km away • Community Center',
        timestamp: 'Tomorrow 10:00 AM',
        image: 'https://cdn.pixabay.com/photo/2014/10/25/19/22/waste-separation-502952_1280.jpg',
        organizer: 'WasteWise Volunteers',
        duration: '2 hours',
        skills: ['Teaching', 'Waste Management']
      },
      {
        id: 4,
        type: 'issue',
        title: 'Illegal Dumping Spot',
        description: 'Construction waste being dumped illegally behind residential complex',
        location: '1.2 km away • Koramangala 6th Block',
        timestamp: '1 day ago',
        image: 'https://cdn.pixabay.com/photo/2020/07/13/13/20/garbage-5400780_1280.jpg',
        reporter: 'Vivek Gupta',
        status: 'investigating',
        urgency: 'medium',
        votes: 8
      }
    ];
    setFeedItems(mockFeedItems);
  }, []);

  // ✅ fetch readable address from lat/lng
  const fetchAddress = async (lat, lng) => {
    setLoadingAddress(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      if (data?.display_name) {
        setCurrentLocation(data.display_name);
      } else {
        setCurrentLocation(`Lat: ${lat}, Lng: ${lng}`);
      }
    } catch (err) {
      console.error('Error fetching address:', err);
      setCurrentLocation(`Lat: ${lat}, Lng: ${lng}`);
    }
    setLoadingAddress(false);
  };

  // ✅ ADDED: map click handler
  // ✅ handle map clicks
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setMapCoords(e.latlng);
        fetchAddress(e.latlng.lat, e.latlng.lng);
      },
    });
    return mapCoords === null ? null : <Marker position={mapCoords}></Marker>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-warning';
      case 'investigating': return 'text-primary';
      case 'resolved': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-error text-error-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleItemAction = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // ✅ ADDED: save new location
  const handleSaveLocation = () => {
    if (manualAddress.trim() !== '') {
      setCurrentLocation(manualAddress);
    }
    setIsLocationModalOpen(false);
  };

  const handleJoinCampaign = (item) => {
    setFeedItems(prev =>
      prev.map(f =>
        f.id === item.id ? { ...f, joined: true, participants: f.participants + 1 } : f
      )
    );
  };

  const handleLeaveCampaign = (item) => {
    setFeedItems((prev) =>
      prev.map((f) =>
        f.id === item.id ? { ...f, joined: false, participants: f.participants - 1 } : f
      )
    );
  };

  
  const handleApplyVolunteer = (item) => {
    setFeedItems(prev =>
      prev.map(f => (f.id === item.id ? { ...f, applied: true } : f))
    );
  };

  
  const handleWithdrawVolunteer = (item) => {
    setFeedItems((prev) =>
      prev.map((f) => (f.id === item.id ? { ...f, applied: false } : f))
    );
  };

  // // ✅ Volunteer application handler
  // const handleApplyVolunteer = (volunteerItem) => {
  //   console.log("Volunteer application submitted for:", volunteerItem);
  //   // Later: call API to apply volunteer
  // };


  return (
    <div className="space-y-6">
      {/* Location Header */}
      <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Your Location</h3>
            <p className="text-sm text-muted-foreground">
              {loadingAddress ? 'Fetching address...' : currentLocation}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Settings"
          iconSize={16}
          onClick={() => setIsLocationModalOpen(true)}
        >
          Change
        </Button>
      </div>

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>Update Your Location</span>
            </h2>

            {/* Manual Entry */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2 text-muted-foreground">
                Enter Address Manually
              </label>
              <input
                type="text"
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
                placeholder="Type your location..."
                className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Map Picker */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-muted-foreground">
                Or Pick From Map
              </label>
              <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                <MapContainer
                  center={[12.9716, 77.5946]}
                  zoom={13}
                  style={{ height: '250px', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <LocationMarker />
                </MapContainer>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLocationModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleSaveLocation}
                className="px-6"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      )}


            {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4">
        <Button
          variant="default"
          size="lg"
          onClick={onReportIssue}
          iconName="Camera"
          iconPosition="left"
          iconSize={20}
          className="h-16"
        >
          Report Issue
        </Button>
      </div>

      
      {/* Feed Items */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Nearby Activity</h2>
          <Button variant="ghost" size="sm" iconName="Filter" iconSize={16}>
            Filter
          </Button>
        </div>

        {feedItems?.map((item) => (
          <div key={item?.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevation transition-shadow">
            <div className="flex">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {item?.type === 'issue' && (
                      <Icon name="AlertTriangle" size={16} className="text-warning" />
                    )}
                    {item?.type === 'campaign' && (
                      <Icon name="Users" size={16} className="text-primary" />
                    )}
                    {item?.type === 'volunteer' && (
                      <Icon name="Heart" size={16} className="text-accent" />
                    )}
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {item?.type}
                    </span>
                  </div>
                  
                  {item?.urgency && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUrgencyColor(item?.urgency)}`}>
                      {item?.urgency} priority
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-foreground mb-1">{item?.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item?.description}</p>

                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{item?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{item?.timestamp}</span>
                  </div>
                </div>

                {/* Item-specific metadata */}
                {item?.type === 'issue' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-muted-foreground">by {item?.reporter}</span>
                      <span className={`font-medium ${getStatusColor(item?.status)}`}>
                        {item?.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="ThumbsUp" size={12} />
                      <span>{item?.votes}</span>
                    </div>
                  </div>
                )}

                {item?.type === 'campaign' && (
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      by {item?.organizer}
                    </div>
                    <div className="text-xs">
                      <span className="font-medium text-primary">{item?.participants}</span>
                      <span className="text-muted-foreground">/{item?.target} joined</span>
                    </div>
                  </div>
                )}

                {item?.type === 'volunteer' && (
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {item?.duration} • {item?.organizer}
                    </div>
                    <div className="flex space-x-1">
                      {item?.skills?.slice(0, 2)?.map((skill, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="px-4 pb-4">
              {item?.type === 'campaign' ? (
                item?.joined ? (
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleLeaveCampaign(item)}
                      iconName="UserX"
                      iconSize={14}
                      className="flex-1"
                    >
                      Leave Campaign
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleItemAction(item)}
                      iconName="Eye"
                      iconSize={14}
                      className="flex-1"
                    >
                      View Details
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleItemAction(item)} // opens join modal
                    iconName="UserPlus"
                    iconSize={14}
                    fullWidth
                  >
                    Join Campaign
                  </Button>
                )
              ) : item?.type === 'volunteer' ? (
                item?.applied ? (
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleWithdrawVolunteer(item)}
                      iconName="XCircle"
                      iconSize={14}
                      className="flex-1"
                    >
                      Withdraw
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleItemAction(item)}
                      iconName="Eye"
                      iconSize={14}
                      className="flex-1"
                    >
                      View Details
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleItemAction(item)} // opens apply modal
                    iconName="HandHeart"
                    iconSize={14}
                    fullWidth
                  >
                    Apply to Help
                  </Button>
                )
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleItemAction(item)} // issue details modal
                  iconName="Eye"
                  iconSize={14}
                  fullWidth
                >
                  View Details
                </Button>
              )}
            </div>

          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" iconName="ChevronDown" iconSize={16}>
          Load More Activity
        </Button>
      </div>


      {/* ✅ Activity Modal */}
      <ActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        onJoinCampaign={handleJoinCampaign}
        onLeaveCampaign={handleLeaveCampaign}
        onApplyVolunteer={handleApplyVolunteer}
        onWithdrawVolunteer={handleWithdrawVolunteer}
      />

    </div>
  );
};

export default LocationFeed;