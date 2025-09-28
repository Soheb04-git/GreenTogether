import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import ActivityModal from './ActivityModal';

const CampaignCards = ({ onJoinCampaign, onLeaveCampaign }) => { // ✅ CHANGE: added onLeaveCampaign
  const [joinedCampaigns, setJoinedCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaigns] = useState([
    {
      id: 1,
      title: 'Koramangala Park Cleanup Drive',
      description: 'Join us for a comprehensive cleanup of Koramangala Park. We will focus on removing litter, organizing waste segregation, and planting new saplings.',
      image: 'https://www.shutterstock.com/image-vector/green-warrior-community-logo-badge-260nw-1678117828.jpg',
      organizer: 'Green Warriors Bangalore',
      organizerAvatar: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-3d-600nw-2124054758.jpg',
      date: '2025-01-18',
      time: '7:00 AM - 11:00 AM',
      location: 'Koramangala Park, 5th Block',
      distance: '0.5 km away',
      participants: 67,
      target: 100,
      category: 'cleanup',
      impact: {
        wasteCollected: '250 kg',
        areaCleared: '2.5 acres',
        volunteersNeeded: 33
      },
      tags: ['Environment', 'Community', 'Weekend'],
      difficulty: 'Easy',
      requirements: ['Gloves provided', 'Bring water bottle', 'Wear comfortable clothes'],
      rewards: {
        points: 150,
        certificate: true,
        badge: 'Park Protector'
      }
    },
    {
      id: 2,
      title: 'Waste Segregation Awareness Drive',
      description: 'Educational campaign to teach proper waste segregation techniques to residents of HSR Layout. Interactive workshops and door-to-door awareness.',
      image: 'https://media.istockphoto.com/id/1432753542/photo/color-recycle-bin.jpg?s=1024x1024&w=is&k=20&c=O6TARonWKoZkVFayRacRZr3V7tyuPts0fu5vzvFGb1Y=',
      organizer: 'GreenTogether Volunteers',
      organizerAvatar: 'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg',
      date: '2025-01-20',
      time: '9:00 AM - 1:00 PM',
      location: 'HSR Layout Community Center',
      distance: '2.1 km away',
      participants: 23,
      target: 50,
      category: 'education',
      impact: {
        householdsReached: '200+',
        materialsDistributed: '500 flyers',
        volunteersNeeded: 27
      },
      tags: ['Education', 'Awareness', 'Door-to-door'],
      difficulty: 'Medium',
      requirements: ['Good communication skills', 'Local language helpful', 'Training provided'],
      rewards: {
        points: 200,
        certificate: true,
        badge: 'Awareness Champion'
      }
    },
    {
      id: 3,
      title: 'E-Waste Collection Drive',
      description: 'Special collection drive for electronic waste including old phones, laptops, batteries, and other electronic items from residential areas.',
      image: 'https://media.istockphoto.com/id/1010491208/photo/girl-taking-picture-of-a-friend-after-plogging.jpg?s=1024x1024&w=is&k=20&c=Ffv8XVG_pjwhjFEe8-uOgguLjd99REmQA3FMmYt7MqY=',
      organizer: 'Tech for Good Initiative',
      organizerAvatar: 'https://cdn.pixabay.com/photo/2014/04/02/11/16/people-305730_1280.png',
      date: '2025-01-22',
      time: '10:00 AM - 4:00 PM',
      location: 'Indiranagar Metro Station',
      distance: '3.2 km away',
      participants: 15,
      target: 30,
      category: 'collection',
      impact: {
        eWasteTarget: '500 kg',
        devicesExpected: '200+',
        volunteersNeeded: 15
      },
      tags: ['E-waste', 'Technology', 'Recycling'],
      difficulty: 'Easy',
      requirements: ['Help with sorting', 'Basic tech knowledge helpful', 'Refreshments provided'],
      rewards: {
        points: 175,
        certificate: true,
        badge: 'Tech Recycler'
      }
    },
    {
      id: 4,
      title: 'Plastic-Free Market Initiative',
      description: 'Promote plastic-free shopping by distributing cloth bags and educating vendors and customers about sustainable alternatives.',
      image: 'https://cdn.pixabay.com/photo/2016/09/28/02/17/shopping-bag-1699644_1280.png',
      organizer: 'Zero Waste Bangalore',
      organizerAvatar: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-25',
      time: '6:00 AM - 10:00 AM',
      location: 'KR Market, Bangalore',
      distance: '5.8 km away',
      participants: 8,
      target: 25,
      category: 'awareness',
      impact: {
        bagsDistributed: '1000+',
        vendorsEngaged: '50+',
        volunteersNeeded: 17
      },
      tags: ['Plastic-free', 'Market', 'Sustainable'],
      difficulty: 'Medium',
      requirements: ['Early morning availability', 'Comfortable with crowds', 'Multilingual preferred'],
      rewards: {
        points: 225,
        certificate: true,
        badge: 'Plastic Warrior'
      }
    }
  ]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'cleanup': return 'Trash2';
      case 'education': return 'GraduationCap';
      case 'collection': return 'Package';
      case 'awareness': return 'Megaphone';
      default: return 'Users';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'cleanup': return 'bg-success/10 text-success';
      case 'education': return 'bg-primary/10 text-primary';
      case 'collection': return 'bg-accent/10 text-accent';
      case 'awareness': return 'bg-secondary/10 text-secondary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'Hard': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  const getProgressPercentage = (participants, target) => {
    return Math.min((participants / target) * 100, 100);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  // const toggleCampaign = (campaign) => {
  //   if (joinedCampaigns.includes(campaign.id)) {
  //     setJoinedCampaigns(joinedCampaigns.filter(id => id !== campaign.id));
  //     onLeaveCampaign && onLeaveCampaign(campaign); // optional callback
  //   } else {
  //     setJoinedCampaigns([...joinedCampaigns, campaign.id]);
  //     onJoinCampaign && onJoinCampaign(campaign); //mark....
  //   }
  // };


  const handleJoin = (campaign) => {
    setJoinedCampaigns([...joinedCampaigns, campaign.id]);
    onJoinCampaign && onJoinCampaign(campaign);
    setIsModalOpen(false);
  };

  const handleLeave = (campaign) => {
    setJoinedCampaigns(joinedCampaigns.filter(id => id !== campaign.id));
    onLeaveCampaign && onLeaveCampaign(campaign);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Active Campaigns</h2>
          <p className="text-sm text-muted-foreground">Join community-driven environmental initiatives</p>
        </div>
        <Button variant="outline" size="sm" iconName="Filter" iconSize={16}>
          Filter
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {campaigns?.map((campaign) => (
          <div key={campaign?.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevation transition-shadow">
            {/* Campaign Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={campaign?.image}
                alt={campaign?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(campaign?.category)}`}>
                  <Icon name={getCategoryIcon(campaign?.category)} size={12} className="inline mr-1" />
                  {campaign?.category?.charAt(0)?.toUpperCase() + campaign?.category?.slice(1)}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-medium bg-black/70 text-white rounded">
                  {campaign?.distance}
                </span>
              </div>
            </div>

            {/* Campaign Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">{campaign?.title}</h3>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground ml-4">
                  <Icon name="Calendar" size={12} />
                  <span>{formatDate(campaign?.date)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{campaign?.description}</p>

              {/* Organizer */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={campaign?.organizerAvatar}
                    alt={campaign?.organizer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{campaign?.organizer}</p>
                  <p className="text-xs text-muted-foreground">Campaign Organizer</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{campaign?.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground truncate">{campaign?.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={14} className="text-muted-foreground" />
                  <span className={`font-medium ${getDifficultyColor(campaign?.difficulty)}`}>
                    {campaign?.difficulty}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={14} className="text-muted-foreground" />
                  <span className="text-primary font-medium">{campaign?.rewards?.points} pts</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Participants</span>
                  <span className="font-medium text-foreground">
                    {campaign?.participants}/{campaign?.target}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressPercentage(campaign?.participants, campaign?.target)}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {campaign?.target - campaign?.participants} volunteers needed
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {campaign?.tags?.map((tag, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact Metrics */}
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Expected Impact</h4>
                <div className="grid grid-cols-1 gap-1 text-xs">
                  {Object.entries(campaign?.impact)?.map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-muted-foreground capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.toLowerCase()}:
                      </span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Join/Leave */}
              {joinedCampaigns.includes(campaign.id) ? (
                <div className="flex gap-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleLeave(campaign)}
                    iconName="UserMinus"
                    fullWidth
                  >
                    Leave Campaign
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    fullWidth
                    onClick={() => {
                      setSelectedCampaign(campaign);
                      setIsModalOpen(true);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    setSelectedCampaign(campaign);
                    setIsModalOpen(true);
                  }}
                  iconName="UserPlus"
                  fullWidth
                >
                  Join Campaign
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" iconName="ChevronDown" iconSize={16}>
          Load More Campaigns
        </Button>
      </div>

        {/* ✅ Modal for Join/View */}
      <ActivityModal
        isOpen={isModalOpen}
        item={selectedCampaign ? { ...selectedCampaign, type: "campaign" } : null}
        onClose={() => setIsModalOpen(false)}
        onJoinCampaign={handleJoin}
        onLeaveCampaign={handleLeave}
      />

    </div>
  );
};

export default CampaignCards;