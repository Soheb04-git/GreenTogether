import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecognitionSystem = () => {
  const [activeView, setActiveView] = useState('spotlight');
  const [monthlySpotlight] = useState([
    {
      id: 1,
      name: 'Soheb Ansari',
      title: 'Community Cleanup Champion',
      avatar: 'https://cdn.pixabay.com/photo/2024/10/04/15/22/ai-generated-9096732_1280.jpg',
      location: 'Koramangala, Bangalore',
      achievement: 'Organized 15 successful cleanup drives in the past month, mobilizing 300+ volunteers and collecting 2.5 tons of waste.',
      impact: {
        cleanupDrives: 15,
        volunteersEngaged: 312,
        wasteCollected: '2.5 tons',
        areasCleared: '8 locations'
      },
      badges: ['Cleanup Master', 'Community Leader', 'Volunteer Coordinator'],
      points: 2450,
      joinedDate: 'March 2024',
      quote: `"Every small action creates ripples of change. When we come together as a community, we can transform our neighborhoods and inspire others to join the movement."`,
      socialMedia: {
        posts: 45,
        followers: 1200,
        engagement: '95%'
      },
      upcomingEvents: 2
    },
    {
      id: 2,
      name: 'Vivek Gupta',
      title: 'Waste Education Specialist',
      avatar: 'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg',
      location: 'HSR Layout, Bangalore',
      achievement: 'Conducted 25 waste segregation workshops, training over 500 households in proper waste management techniques.',
      impact: {
        workshopsConducted: 25,
        householdsTrained: 523,
        certificatesIssued: 156,
        communityPartners: 8
      },
      badges: ['Education Master', 'Certified Trainer', 'Knowledge Sharer'],
      points: 1980,
      joinedDate: 'January 2024',
      quote: `"Education is the foundation of lasting change. When people understand the 'why' behind waste management, they become lifelong advocates for the environment."`,
      socialMedia: {
        posts: 32,
        followers: 890,
        engagement: '87%'
      },
      upcomingEvents: 3
    }
  ]);

  const [topContributors] = useState([
    {
      rank: 1,
      name: 'Vinit Mondal',
      avatar: 'https://media.istockphoto.com/id/1459572328/photo/3d-rendered-happy-boy-avatar-wearing-a-white-shirt-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=aPSdSKOOUQsDf5YNYAh4C5HvQUeWVMyxm-fdU9B2mjE=',
      points: 3250,
      category: 'Content Creation',
      contributions: 'Created 50+ educational posts',
      badge: 'Content Master',
      trend: 'up'
    },
    {
      rank: 2,
      name: 'Sneha Singh',
      avatar: 'https://media.istockphoto.com/id/1296058958/vector/happy-young-woman-watching-into-rounded-frame-isolated-on-white-3d-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=31WnTQvI2vliWZq3VCS0rNQzX-grKVrSX1qmGsTI0C8=',
      points: 2890,
      category: 'Technology',
      contributions: 'Beta tested 15 app features',
      badge: 'Tech Pioneer',
      trend: 'up'
    },
    {
      rank: 3,
      name: 'Meera Patel',
      avatar: 'https://images.pexels.com/photos/6647021/pexels-photo-6647021.jpeg?auto=compress&cs=tinysrgb&w=100',
      points: 2650,
      category: 'Outreach',
      contributions: 'Engaged 200+ households',
      badge: 'Community Ambassador',
      trend: 'same'
    },
    {
      rank: 4,
      name: 'Subham Kumar',
      avatar: 'https://media.istockphoto.com/id/2211932793/photo/isolated-3d-character-of-a-young-man-with-buttoned-shirt.jpg?s=1024x1024&w=is&k=20&c=HyIIzpn_V3SjhjLBXNBgeAW5_djrEjkRiZLi9lGvTZc=',
      points: 2340,
      category: 'Volunteer Coordination',
      contributions: 'Coordinated 12 events',
      badge: 'Event Organizer',
      trend: 'down'
    },
    {
      rank: 5,
      name: 'Nikhil Sah',
      avatar: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=100',
      points: 2120,
      category: 'Education',
      contributions: 'Trained 150+ residents',
      badge: 'Training Expert',
      trend: 'up'
    }
  ]);

  const [achievementShowcase] = useState([
    {
      id: 1,
      title: 'Zero Waste Neighborhood',
      description: 'Koramangala 5th Block achieved 95% waste segregation compliance',
      image: 'https://media.istockphoto.com/id/2156202669/photo/world-environment-day-business-corporate-and-community-cooperation-for-environment.jpg?s=1024x1024&w=is&k=20&c=cFTA-jFIhjfDbAjIeMOqDG8vqweVPshv8yLyLCCJFuU=',
      date: '2025-01-15',
      participants: 450,
      impact: '2.8 tons waste properly segregated',
      organizer: 'Green Warriors Bangalore',
      category: 'Community Achievement'
    },
    {
      id: 2,
      title: 'E-Waste Collection Record',
      description: 'Largest single-day e-waste collection drive in Bangalore',
      image: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-12',
      participants: 200,
      impact: '1.2 tons e-waste collected',
      organizer: 'Tech for Good Initiative',
      category: 'Environmental Impact'
    },
    {
      id: 3,
      title: 'Plastic-Free Market Success',
      description: 'KR Market vendors commit to plastic-free operations',
      image: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-10',
      participants: 85,
      impact: '50+ vendors, 1000+ cloth bags distributed',
      organizer: 'Zero Waste Bangalore',
      category: 'Policy Change'
    }
  ]);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Content Creation': 'bg-secondary/10 text-secondary',
      'Technology': 'bg-trust-blue/10 text-trust-blue',
      'Outreach': 'bg-success/10 text-success',
      'Volunteer Coordination': 'bg-accent/10 text-accent',
      'Education': 'bg-primary/10 text-primary'
    };
    return colors?.[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Recognition & Achievements</h2>
        <p className="text-sm text-muted-foreground">Celebrating our community's environmental champions</p>
      </div>
      {/* View Toggle */}
      <div className="flex space-x-1 bg-muted rounded-lg p-1">
        {[
          { id: 'spotlight', label: 'Monthly Spotlight', icon: 'Star' },
          { id: 'leaderboard', label: 'Top Contributors', icon: 'Trophy' },
          { id: 'achievements', label: 'Community Wins', icon: 'Award' }
        ]?.map((view) => (
          <button
            key={view?.id}
            onClick={() => setActiveView(view?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeView === view?.id
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={view?.icon} size={16} />
            <span>{view?.label}</span>
          </button>
        ))}
      </div>
      {/* Monthly Spotlight */}
      {activeView === 'spotlight' && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">January 2025 Community Champions</h3>
            <p className="text-sm text-muted-foreground">Recognizing outstanding contributions to environmental action</p>
          </div>

          {monthlySpotlight?.map((person) => (
            <div key={person?.id} className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border p-6">
              <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                {/* Profile Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-muted mb-3">
                      <Image
                        src={person?.avatar}
                        alt={person?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Crown" size={16} className="text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground">{person?.name}</h4>
                  <p className="text-sm font-medium text-primary mb-1">{person?.title}</p>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
                    <Icon name="MapPin" size={12} />
                    <span>{person?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={12} />
                    <span>Joined {person?.joinedDate}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-2">Achievement</h5>
                    <p className="text-sm text-muted-foreground">{person?.achievement}</p>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {Object.entries(person?.impact)?.map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-card rounded-lg border border-border">
                        <div className="text-lg font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-2">Badges Earned</h5>
                    <div className="flex flex-wrap gap-2">
                      {person?.badges?.map((badge, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-card rounded-lg p-4 border-l-4 border-primary mb-4">
                    <blockquote className="text-sm italic text-muted-foreground">
                      "{person?.quote}"
                    </blockquote>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Award" size={14} className="text-primary" />
                        <span className="font-medium text-foreground">{person?.points} points</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{person?.upcomingEvents} upcoming events</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" iconName="MessageCircle" iconSize={14}>
                        Connect
                      </Button>
                      <Button variant="default" size="sm" iconName="UserPlus" iconSize={14}>
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Top Contributors Leaderboard */}
      {activeView === 'leaderboard' && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Top Contributors This Month</h3>
            <p className="text-sm text-muted-foreground">Leading the way in environmental action</p>
          </div>

          {topContributors?.map((contributor) => (
            <div key={contributor?.rank} className="bg-card rounded-lg border border-border p-4 hover:shadow-elevation transition-shadow">
              <div className="flex items-center space-x-4">
                {/* Rank */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  contributor?.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                  contributor?.rank === 2 ? 'bg-gray-100 text-gray-800' :
                  contributor?.rank === 3 ? 'bg-orange-100 text-orange-800': 'bg-muted text-muted-foreground'
                }`}>
                  {contributor?.rank}
                </div>

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={contributor?.avatar}
                    alt={contributor?.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{contributor?.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={getTrendIcon(contributor?.trend)} 
                        size={14} 
                        className={getTrendColor(contributor?.trend)} 
                      />
                      <span className="font-bold text-primary">{contributor?.points}</span>
                      <span className="text-sm text-muted-foreground">pts</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(contributor?.category)}`}>
                        {contributor?.category}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">{contributor?.contributions}</p>
                    </div>
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      {contributor?.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button variant="outline" iconName="BarChart3" iconSize={16}>
              View Full Leaderboard
            </Button>
          </div>
        </div>
      )}
      {/* Community Achievements */}
      {activeView === 'achievements' && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Recent Community Achievements</h3>
            <p className="text-sm text-muted-foreground">Celebrating collective environmental victories</p>
          </div>

          {achievementShowcase?.map((achievement) => (
            <div key={achievement?.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevation transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 h-32 sm:h-auto overflow-hidden">
                  <Image
                    src={achievement?.image}
                    alt={achievement?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{achievement?.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement?.description}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-success/10 text-success rounded-full whitespace-nowrap">
                      {achievement?.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {new Date(achievement.date)?.toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{achievement?.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{achievement?.impact}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Organized by: </span>
                      <span className="font-medium text-foreground">{achievement?.organizer}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" iconName="Share2" iconSize={14}>
                        Share
                      </Button>
                      <Button variant="outline" size="sm" iconName="Heart" iconSize={14}>
                        Celebrate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button variant="outline" iconName="Archive" iconSize={16}>
              View Achievement Archive
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecognitionSystem;