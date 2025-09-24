import React, { useState, forwardRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialFeatures = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('groups');
  const [localGroups] = useState([
    {
      id: 1,
      name: 'Koramangala Green Warriors',
      description: 'Dedicated to keeping Koramangala clean and green through regular cleanup drives and awareness campaigns.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300',
      members: 156,
      location: 'Koramangala, Bangalore',
      category: 'Cleanup',
      isJoined: false,
      recentActivity: 'Organized park cleanup 2 days ago',
      upcomingEvent: 'Weekend cleanup drive - Jan 18',
      admin: 'Priya Sharma',
      tags: ['Active', 'Beginner Friendly', 'Weekend Events']
    },
    {
      id: 2,
      name: 'HSR Layout Waste Warriors',
      description: 'Community group focused on waste segregation education and sustainable living practices in HSR Layout.',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=300',
      members: 89,
      location: 'HSR Layout, Bangalore',
      category: 'Education',
      isJoined: true,
      recentActivity: 'Conducted segregation workshop',
      upcomingEvent: 'Door-to-door awareness - Jan 20',
      admin: 'Rajesh Kumar',
      tags: ['Educational', 'Family Friendly', 'Regular Meetings']
    },
    {
      id: 3,
      name: 'Indiranagar Eco Champions',
      description: 'Promoting zero waste lifestyle and plastic-free initiatives across Indiranagar neighborhood.',
      image: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=300',
      members: 234,
      location: 'Indiranagar, Bangalore',
      category: 'Sustainability',
      isJoined: false,
      recentActivity: 'Plastic-free market campaign',
      upcomingEvent: 'Zero waste workshop - Jan 22',
      admin: 'Anita Desai',
      tags: ['Advanced', 'Zero Waste', 'Innovation']
    }
  ]);

  const [achievements] = useState([
    {
      id: 1,
      user: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=100',
      achievement: 'Cleanup Champion',
      description: 'Organized 10 successful community cleanup drives',
      badge: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=50',
      points: 1250,
      date: '2 days ago',
      category: 'Leadership',
      level: 'Gold'
    },
    {
      id: 2,
      user: 'Rajesh Kumar',
      avatar: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=100',
      achievement: 'Education Master',
      description: 'Trained 100+ households in waste segregation',
      badge: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=50',
      points: 980,
      date: '1 week ago',
      category: 'Education',
      level: 'Silver'
    },
    {
      id: 3,
      user: 'Anita Desai',
      avatar: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=100',
      achievement: 'Content Creator Pro',
      description: 'Created 50+ educational posts reaching 10K+ people',
      badge: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=50',
      points: 750,
      date: '3 days ago',
      category: 'Media',
      level: 'Bronze'
    }
  ]);

  const [mentorships] = useState([
    {
      id: 1,
      mentor: 'Vikram Singh',
      mentorAvatar: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=100',
      expertise: 'Waste Management Systems',
      experience: '5+ years',
      rating: 4.8,
      reviews: 23,
      specialties: ['Segregation Training', 'Community Organizing', 'Policy Advocacy'],
      availability: 'Weekends',
      mentees: 12,
      maxMentees: 15,
      description: 'Experienced waste management professional helping newcomers understand effective community engagement strategies.',
      achievements: ['Certified Trainer', 'Community Leader', 'Policy Advisor']
    },
    {
      id: 2,
      mentor: 'Meera Patel',
      mentorAvatar: 'https://images.pexels.com/photos/6647021/pexels-photo-6647021.jpeg?auto=compress&cs=tinysrgb&w=100',
      expertise: 'Digital Campaigns',
      experience: '3+ years',
      rating: 4.9,
      reviews: 18,
      specialties: ['Social Media', 'Content Creation', 'Online Engagement'],
      availability: 'Flexible',
      mentees: 8,
      maxMentees: 10,
      description: 'Digital marketing expert specializing in environmental awareness campaigns and community building online.',
      achievements: ['Content Master', 'Digital Ambassador', 'Influence Builder']
    }
  ]);

  const handleJoinGroup = (groupId) => {
    console.log('Joining group:', groupId);
  };

  const handleLeaveGroup = (groupId) => {
    console.log('Leaving group:', groupId);
  };

  const handleRequestMentorship = (mentorId) => {
    console.log('Requesting mentorship from:', mentorId);
  };

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case 'cleanup': return 'bg-success/10 text-success';
      case 'education': return 'bg-primary/10 text-primary';
      case 'sustainability': return 'bg-secondary/10 text-secondary';
      case 'leadership': return 'bg-accent/10 text-accent';
      case 'media': return 'bg-trust-blue/10 text-trust-blue';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'gold': return 'text-yellow-600';
      case 'silver': return 'text-gray-500';
      case 'bronze': return 'text-orange-600';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6" ref={ref}>
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Community Network</h2>
        <p className="text-sm text-muted-foreground">Connect, learn, and grow with fellow environmental champions</p>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted rounded-lg p-1">
        {[
          { id: 'groups', label: 'Local Groups', icon: 'Users' },
          { id: 'achievements', label: 'Achievements', icon: 'Award' },
          { id: 'mentorship', label: 'Mentorship', icon: 'GraduationCap' }
        ]?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab?.id
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Local Groups Tab */}
      {activeTab === 'groups' && (
        <div className="space-y-4">
          {localGroups?.map((group) => (
            <div key={group?.id} className="bg-card rounded-lg border border-border p-5 hover:shadow-elevation transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={group?.image}
                    alt={group?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{group?.name}</h3>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={12} />
                          <span>{group?.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={12} />
                          <span>{group?.members} members</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(group?.category)}`}>
                      {group?.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{group?.description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {group?.tags?.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Activity" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{group?.recentActivity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{group?.upcomingEvent}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Admin: </span>
                      <span className="font-medium text-foreground">{group?.admin}</span>
                    </div>
                    
                    {group?.isJoined ? (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" iconName="MessageCircle" iconSize={14}>
                          Chat
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLeaveGroup(group?.id)}
                          iconName="UserMinus"
                          iconSize={14}
                        >
                          Leave
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleJoinGroup(group?.id)}
                        iconName="UserPlus"
                        iconSize={14}
                      >
                        Join Group
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Community Champions</h3>
            <p className="text-sm text-muted-foreground">Celebrating outstanding contributions to environmental action</p>
          </div>

          {achievements?.map((achievement) => (
            <div key={achievement?.id} className="bg-card rounded-lg border border-border p-5 hover:shadow-elevation transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={achievement?.avatar}
                    alt={achievement?.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{achievement?.user}</h4>
                      <p className="text-sm text-muted-foreground">{achievement?.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium ${getLevelColor(achievement?.level)}`}>
                        {achievement?.level}
                      </span>
                      <span className="text-sm font-medium text-primary">{achievement?.points} pts</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={achievement?.badge}
                        alt="Badge"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">{achievement?.achievement}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(achievement?.category)}`}>
                        {achievement?.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{achievement?.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button variant="outline" iconName="Trophy" iconSize={16}>
              View All Achievements
            </Button>
          </div>
        </div>
      )}
      {/* Mentorship Tab */}
      {activeTab === 'mentorship' && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Find a Mentor</h3>
            <p className="text-sm text-muted-foreground">Learn from experienced community leaders and environmental experts</p>
          </div>

          {mentorships?.map((mentor) => (
            <div key={mentor?.id} className="bg-card rounded-lg border border-border p-5 hover:shadow-elevation transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={mentor?.mentorAvatar}
                    alt={mentor?.mentor}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{mentor?.mentor}</h4>
                      <p className="text-sm font-medium text-primary">{mentor?.expertise}</p>
                      <p className="text-sm text-muted-foreground">{mentor?.experience} experience</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-foreground">{mentor?.rating}</span>
                        <span className="text-sm text-muted-foreground">({mentor?.reviews})</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {mentor?.mentees}/{mentor?.maxMentees} mentees
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{mentor?.description}</p>

                  <div className="mb-3">
                    <h5 className="text-sm font-medium text-foreground mb-2">Specialties</h5>
                    <div className="flex flex-wrap gap-2">
                      {mentor?.specialties?.map((specialty, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-foreground mb-2">Achievements</h5>
                    <div className="flex flex-wrap gap-2">
                      {mentor?.achievements?.map((achievement, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Available: </span>
                      <span className="font-medium text-foreground">{mentor?.availability}</span>
                    </div>
                    
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleRequestMentorship(mentor?.id)}
                      disabled={mentor?.mentees >= mentor?.maxMentees}
                      iconName="MessageSquare"
                      iconSize={14}
                    >
                      {mentor?.mentees >= mentor?.maxMentees ? 'Fully Booked' : 'Request Mentorship'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button variant="outline" iconName="Search" iconSize={16}>
              Find More Mentors
            </Button>
          </div>
        </div>
      )}
    </div>
  );
});

export default SocialFeatures;