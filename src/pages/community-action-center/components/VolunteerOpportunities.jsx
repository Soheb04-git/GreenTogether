import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const VolunteerOpportunities = ({ onApplyVolunteer }) => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [opportunities] = useState([
    {
      id: 1,
      title: 'Waste Segregation Trainer',
      organization: 'WasteWise Education Team',
      description: 'Train community members on proper waste segregation techniques. Conduct workshops and provide hands-on guidance.',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'education',
      timeCommitment: '4 hours/week',
      duration: '3 months',
      location: 'Multiple locations in Bangalore',
      distance: '1-5 km radius',
      skillsRequired: ['Communication', 'Teaching', 'Waste Management Knowledge'],
      skillsPreferred: ['Local Language', 'Community Engagement'],
      schedule: 'Flexible weekends',
      participants: 12,
      maxParticipants: 20,
      urgency: 'medium',
      rewards: {
        points: 50,
        weeklyBonus: 25,
        certificate: 'Certified Waste Educator',
        badge: 'Master Trainer'
      },
      requirements: [
        'Complete basic waste management course',
        'Attend orientation session',
        'Commit to minimum 3 months',
        'Basic smartphone skills for reporting'
      ],
      impact: 'Train 100+ households per month',
      coordinator: {
        name: 'Priya Sharma',
        role: 'Training Coordinator',
        contact: 'Available after application'
      }
    },
    {
      id: 2,
      title: 'Community Cleanup Coordinator',
      organization: 'Green Warriors Bangalore',
      description: 'Lead and organize community cleanup drives. Coordinate with volunteers, manage supplies, and ensure safety protocols.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'leadership',
      timeCommitment: '6 hours/week',
      duration: 'Ongoing',
      location: 'Koramangala, HSR Layout, Indiranagar',
      distance: '2-8 km radius',
      skillsRequired: ['Leadership', 'Event Management', 'Team Coordination'],
      skillsPreferred: ['First Aid', 'Local Area Knowledge', 'Photography'],
      schedule: 'Weekend mornings',
      participants: 3,
      maxParticipants: 5,
      urgency: 'high',
      rewards: {
        points: 75,
        weeklyBonus: 40,
        certificate: 'Community Leader',
        badge: 'Cleanup Champion'
      },
      requirements: [
        'Previous volunteer experience preferred',
        'Leadership or management background',
        'Available for weekend activities',
        'Own transportation preferred'
      ],
      impact: 'Organize 2-3 cleanup drives per month',
      coordinator: {
        name: 'Rajesh Kumar',
        role: 'Operations Manager',
        contact: 'Available after application'
      }
    },
    {
      id: 3,
      title: 'Digital Content Creator',
      organization: 'WasteWise Media Team',
      description: 'Create engaging content for social media campaigns, document volunteer activities, and help spread awareness digitally.',
      image: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'media',
      timeCommitment: '3 hours/week',
      duration: '6 months',
      location: 'Remote + Field visits',
      distance: 'Flexible',
      skillsRequired: ['Content Creation', 'Social Media', 'Photography/Videography'],
      skillsPreferred: ['Graphic Design', 'Video Editing', 'Copywriting'],
      schedule: 'Flexible timing',
      participants: 7,
      maxParticipants: 10,
      urgency: 'low',
      rewards: {
        points: 40,
        weeklyBonus: 20,
        certificate: 'Digital Ambassador',
        badge: 'Content Creator'
      },
      requirements: [
        'Portfolio of previous work',
        'Own camera/smartphone with good quality',
        'Basic editing software knowledge',
        'Active on social media platforms'
      ],
      impact: 'Reach 1000+ people monthly through content',
      coordinator: {
        name: 'Anita Desai',
        role: 'Content Manager',
        contact: 'Available after application'
      }
    },
    {
      id: 4,
      title: 'Mobile App Beta Tester',
      organization: 'WasteWise Tech Team',
      description: 'Test new features of the WasteWise app, provide feedback, and help improve user experience for the community.',
      image: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'technology',
      timeCommitment: '2 hours/week',
      duration: '4 months',
      location: 'Remote',
      distance: 'N/A',
      skillsRequired: ['Smartphone Usage', 'Attention to Detail', 'Feedback Writing'],
      skillsPreferred: ['Tech Savvy', 'Previous Testing Experience', 'Multiple Device Access'],
      schedule: 'Flexible',
      participants: 15,
      maxParticipants: 25,
      urgency: 'medium',
      rewards: {
        points: 30,
        weeklyBonus: 15,
        certificate: 'Beta Tester',
        badge: 'Tech Pioneer'
      },
      requirements: [
        'Android/iOS smartphone',
        'Regular app usage commitment',
        'Detailed feedback reporting',
        'Participate in testing sessions'
      ],
      impact: 'Help improve app for 10,000+ users',
      coordinator: {
        name: 'Vikram Singh',
        role: 'Product Manager',
        contact: 'Available after application'
      }
    },
    {
      id: 5,
      title: 'Community Outreach Volunteer',
      organization: 'Neighborhood Connect',
      description: 'Engage with local residents, apartment complexes, and businesses to promote waste management best practices.',
      image: 'https://images.pexels.com/photos/6647021/pexels-photo-6647021.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'outreach',
      timeCommitment: '5 hours/week',
      duration: '6 months',
      location: 'Whitefield, Electronic City, Marathahalli',
      distance: '3-10 km radius',
      skillsRequired: ['Communication', 'Interpersonal Skills', 'Persuasion'],
      skillsPreferred: ['Sales Experience', 'Local Language', 'Presentation Skills'],
      schedule: 'Evenings and weekends',
      participants: 8,
      maxParticipants: 15,
      urgency: 'high',
      rewards: {
        points: 60,
        weeklyBonus: 30,
        certificate: 'Community Ambassador',
        badge: 'Outreach Expert'
      },
      requirements: [
        'Excellent communication skills',
        'Comfortable approaching strangers',
        'Basic knowledge of waste management',
        'Reliable attendance'
      ],
      impact: 'Engage 50+ households per month',
      coordinator: {
        name: 'Meera Patel',
        role: 'Community Manager',
        contact: 'Available after application'
      }
    }
  ]);

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'education', label: 'Education & Training' },
    { value: 'leadership', label: 'Leadership & Coordination' },
    { value: 'media', label: 'Media & Content' },
    { value: 'technology', label: 'Technology & Testing' },
    { value: 'outreach', label: 'Community Outreach' }
  ];

  const filteredOpportunities = filterCategory === 'all' 
    ? opportunities 
    : opportunities?.filter(opp => opp?.category === filterCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'education': return 'GraduationCap';
      case 'leadership': return 'Users';
      case 'media': return 'Camera';
      case 'technology': return 'Smartphone';
      case 'outreach': return 'Megaphone';
      default: return 'Heart';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'education': return 'bg-primary/10 text-primary';
      case 'leadership': return 'bg-accent/10 text-accent';
      case 'media': return 'bg-secondary/10 text-secondary';
      case 'technology': return 'bg-trust-blue/10 text-trust-blue';
      case 'outreach': return 'bg-success/10 text-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getAvailabilityPercentage = (participants, maxParticipants) => {
    return ((maxParticipants - participants) / maxParticipants) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Volunteer Opportunities</h2>
          <p className="text-sm text-muted-foreground">Make a lasting impact in your community</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select
            options={categoryOptions}
            value={filterCategory}
            onChange={setFilterCategory}
            className="w-48"
          />
          <Button variant="outline" size="sm" iconName="MapPin" iconSize={16}>
            Near Me
          </Button>
        </div>
      </div>
      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOpportunities?.map((opportunity) => (
          <div key={opportunity?.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevation transition-shadow">
            {/* Header Image */}
            <div className="relative h-32 overflow-hidden">
              <Image
                src={opportunity?.image}
                alt={opportunity?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(opportunity?.category)}`}>
                  <Icon name={getCategoryIcon(opportunity?.category)} size={12} className="inline mr-1" />
                  {opportunity?.category?.charAt(0)?.toUpperCase() + opportunity?.category?.slice(1)}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 text-xs font-medium rounded ${getUrgencyColor(opportunity?.urgency)} bg-white/90`}>
                  {opportunity?.urgency} priority
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Title and Organization */}
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-foreground mb-1">{opportunity?.title}</h3>
                <p className="text-sm text-primary font-medium">{opportunity?.organization}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{opportunity?.description}</p>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{opportunity?.timeCommitment}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{opportunity?.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground truncate">{opportunity?.distance}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={14} className="text-muted-foreground" />
                  <span className="text-primary font-medium">{opportunity?.rewards?.points} pts/week</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Spots Available</span>
                  <span className="font-medium text-foreground">
                    {opportunity?.maxParticipants - opportunity?.participants} of {opportunity?.maxParticipants}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-success h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getAvailabilityPercentage(opportunity?.participants, opportunity?.maxParticipants)}%` }}
                  />
                </div>
              </div>

              {/* Skills Required */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Skills Required</h4>
                <div className="flex flex-wrap gap-1">
                  {opportunity?.skillsRequired?.slice(0, 3)?.map((skill, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      {skill}
                    </span>
                  ))}
                  {opportunity?.skillsRequired?.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      +{opportunity?.skillsRequired?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Impact & Schedule */}
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Impact:</span>
                    <span className="font-medium text-foreground text-right">{opportunity?.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Schedule:</span>
                    <span className="font-medium text-foreground text-right">{opportunity?.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Coordinator */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">{opportunity?.coordinator?.name}</p>
                  <p className="text-muted-foreground">{opportunity?.coordinator?.role}</p>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Icon name="MessageCircle" size={14} />
                  <span className="text-xs">Contact after apply</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="default"
                size="sm"
                onClick={() => onApplyVolunteer(opportunity)}
                iconName="HandHeart"
                iconPosition="left"
                iconSize={16}
                fullWidth
                disabled={opportunity?.participants >= opportunity?.maxParticipants}
              >
                {opportunity?.participants >= opportunity?.maxParticipants ? 'Spots Full' : 'Apply to Volunteer'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      {filteredOpportunities?.length > 0 && (
        <div className="text-center">
          <Button variant="outline" iconName="ChevronDown" iconSize={16}>
            Load More Opportunities
          </Button>
        </div>
      )}
      {/* Empty State */}
      {filteredOpportunities?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No opportunities found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your filters or check back later for new opportunities.</p>
          <Button variant="outline" onClick={() => setFilterCategory('all')}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default VolunteerOpportunities;