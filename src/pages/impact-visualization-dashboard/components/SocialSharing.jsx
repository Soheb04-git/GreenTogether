//src/pages/impact-visualization-dashboard/components/SocialSharing.jsx

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialSharing = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('personal');
  const [customMessage, setCustomMessage] = useState('');
  const [shareStats, setShareStats] = useState({
    totalShares: 15847,
    weeklyShares: 1234,
    topPlatform: 'WhatsApp',
    engagement: '89%'
  });

  const shareTemplates = [
    {
      id: 'personal',
      title: 'Personal Impact',
      description: 'Share your individual environmental achievements',
      preview: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
      stats: {
        wasteReduced: '23.5 kg',
        carbonSaved: '12.8 kg CO₂',
        rank: '#47',
        points: '1,250'
      },
      hashtags: ['#WasteWiseIndia', '#MyImpact', '#SustainableLiving', '#GreenIndia']
    },
    {
      id: 'community',
      title: 'Community Achievement',
      description: 'Celebrate collective community progress',
      preview: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      stats: {
        participants: '1,247',
        wasteReduced: '89%',
        communities: '156',
        impact: 'High'
      },
      hashtags: ['#CommunityPower', '#WasteWiseIndia', '#TogetherForChange', '#SwachhBharat']
    },
    {
      id: 'milestone',
      title: 'Milestone Celebration',
      description: 'Announce major environmental milestones',
      preview: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=300&fit=crop',
      stats: {
        milestone: '5,000 Tonnes',
        achievement: 'Waste Diverted',
        equivalent: '1,200 Cars',
        timeframe: '2024'
      },
      hashtags: ['#MilestoneAchieved', '#WasteWiseIndia', '#EnvironmentalWin', '#IndiaGreen']
    },
    {
      id: 'challenge',
      title: 'Challenge Invitation',
      description: 'Invite friends to join environmental challenges',
      preview: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
      stats: {
        challenge: 'Zero Waste Week',
        participants: '2,847',
        prize: '₹10,000',
        duration: '7 Days'
      },
      hashtags: ['#ZeroWasteChallenge', '#JoinTheMovement', '#WasteWiseIndia', '#EcoChallenge']
    }
  ];

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      shares: 6234,
      engagement: '94%'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      shares: 4521,
      engagement: '87%'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      shares: 3456,
      engagement: '82%'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      shares: 1636,
      engagement: '76%'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      shares: 892,
      engagement: '91%'
    },
    {
      name: 'Telegram',
      icon: 'Send',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      shares: 1108,
      engagement: '88%'
    }
  ];

  const recentShares = [
    {
      user: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      platform: 'Instagram',
      content: 'Just completed my 30-day zero waste challenge! 🌱 Reduced 15kg of waste and saved 8kg CO₂. Small actions, big impact! #WasteWiseIndia',
      likes: 234,
      shares: 45,
      time: '2 hours ago'
    },
    {
      user: 'Rajesh Kumar',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      platform: 'WhatsApp',
      content: 'Our society achieved 90% waste segregation! 🏆 Thanks to WasteWise India for making it possible. Join us in building a cleaner future!',
      likes: 156,
      shares: 89,
      time: '4 hours ago'
    },
    {
      user: 'Anita Desai',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      platform: 'Facebook',
      content: 'Proud to be part of the community that diverted 2,500 tonnes of waste from landfills this year! Every action counts. 🌍',
      likes: 312,
      shares: 67,
      time: '6 hours ago'
    }
  ];

  const currentTemplate = shareTemplates?.find(t => t?.id === selectedTemplate);

  const handleShare = (platform) => {
    console.log(`Sharing to ${platform}:`, {
      template: selectedTemplate,
      message: customMessage,
      stats: currentTemplate?.stats
    });
    
    // Simulate share success
    setShareStats(prev => ({
      ...prev,
      totalShares: prev?.totalShares + 1,
      weeklyShares: prev?.weeklyShares + 1
    }));
  };

  const generateShareText = () => {
    const template = currentTemplate;
    let text = '';

    switch (template?.id) {
      case 'personal':
        text = `🌱 My environmental impact with WasteWise India:\n• Waste Reduced: ${template?.stats?.wasteReduced}\n• Carbon Saved: ${template?.stats?.carbonSaved}\n• Community Rank: ${template?.stats?.rank}\n\nJoin me in building a sustainable future! 🇮🇳`;
        break;
      case 'community':
        text = `🏆 Our community achieved amazing results:\n• ${template?.stats?.participants} participants\n• ${template?.stats?.wasteReduced} waste reduction\n• ${template?.stats?.communities} communities transformed\n\nTogether we're making India cleaner! 🌍`;
        break;
      case 'milestone':
        text = `🎉 Milestone Alert! We've diverted ${template?.stats?.milestone} of waste from landfills in ${template?.stats?.timeframe}!\n\nThat's equivalent to removing ${template?.stats?.equivalent} from roads for a year! 🚗💨`;
        break;
      case 'challenge':
        text = `🚀 Join the ${template?.stats?.challenge}!\n• ${template?.stats?.participants} participants already joined\n• Win up to ${template?.stats?.prize}\n• Duration: ${template?.stats?.duration}\n\nAre you ready for the challenge? 💪`;
        break;
      default:
        text = 'Join WasteWise India and make a difference! 🌱';
    }

    return text + '\n\n' + template?.hashtags?.join(' ');
  };

  return (
    <div className="bg-muted/30 py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Share2" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Social Impact</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Share Your Environmental Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Amplify your impact by sharing achievements with friends and family. 
            Inspire others to join the movement and create a ripple effect of positive environmental change.
          </p>
        </div>

        {/* Share Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4 text-center shadow-elevation">
            <div className="text-2xl font-bold text-primary mb-1">
              {shareStats?.totalShares?.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Total Shares</div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4 text-center shadow-elevation">
            <div className="text-2xl font-bold text-success mb-1">
              {shareStats?.weeklyShares?.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4 text-center shadow-elevation">
            <div className="text-2xl font-bold text-accent mb-1">
              {shareStats?.topPlatform}
            </div>
            <div className="text-sm text-muted-foreground">Top Platform</div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4 text-center shadow-elevation">
            <div className="text-2xl font-bold text-secondary mb-1">
              {shareStats?.engagement}
            </div>
            <div className="text-sm text-muted-foreground">Engagement</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Choose Your Share Template
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {shareTemplates?.map((template) => (
                  <button
                    key={template?.id}
                    onClick={() => setSelectedTemplate(template?.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedTemplate === template?.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="aspect-video mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={template?.preview}
                        alt={template?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-1">{template?.title}</h4>
                    <p className="text-sm text-muted-foreground">{template?.description}</p>
                  </button>
                ))}
              </div>

              {/* Preview */}
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Share Preview</h4>
                  <div className="flex items-center space-x-2">
                    <Icon name="Eye" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Preview</span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} color="white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Your Name</div>
                      <div className="text-sm text-muted-foreground">2 minutes ago</div>
                    </div>
                  </div>

                  <div className="aspect-video mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={currentTemplate?.preview}
                      alt={currentTemplate?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-foreground mb-3 whitespace-pre-line">
                    {generateShareText()}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>234</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>45</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Share2" size={14} />
                        <span>67</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Custom Message */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Add Personal Message (Optional)
                  </label>
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e?.target?.value)}
                    placeholder="Add your personal touch to the message..."
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground resize-none"
                    rows={3}
                  />
                </div>

                {/* Share Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  {socialPlatforms?.slice(0, 6)?.map((platform) => (
                    <Button
                      key={platform?.name}
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare(platform?.name)}
                      iconName={platform?.icon}
                      iconPosition="left"
                      iconSize={16}
                      className="justify-start"
                    >
                      {platform?.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Platform Analytics & Recent Shares */}
          <div className="space-y-6">
            {/* Platform Performance */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Platform Performance
              </h3>
              
              <div className="space-y-3">
                {socialPlatforms?.map((platform) => (
                  <div key={platform?.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${platform?.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon name={platform?.icon} size={16} className={platform?.color} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{platform?.name}</div>
                        <div className="text-xs text-muted-foreground">{platform?.shares} shares</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-success">{platform?.engagement}</div>
                      <div className="text-xs text-muted-foreground">engagement</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Community Shares */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Recent Community Shares
              </h3>
              
              <div className="space-y-4">
                {recentShares?.map((share, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={share?.avatar}
                          alt={share?.user}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-foreground text-sm">{share?.user}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{share?.time}</span>
                        </div>
                        
                        <p className="text-sm text-foreground mb-2 line-clamp-2">
                          {share?.content}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="Heart" size={12} />
                            <span>{share?.likes}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Share2" size={12} />
                            <span>{share?.shares}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="w-full mt-4" iconName="ArrowRight" iconPosition="right">
                View All Community Shares
              </Button>
            </div>

            {/* Share Goals */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Target" size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Monthly Share Goal</h3>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-primary">847</div>
                <div className="text-sm text-muted-foreground">of 1,000 shares</div>
              </div>

              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[85%] transition-all duration-1000"></div>
              </div>

              <p className="text-sm text-foreground text-center mb-4">
                You're 85% towards your monthly goal! Keep sharing to inspire more people.
              </p>

              <Button variant="outline" size="sm" className="w-full" iconName="Zap" iconPosition="left">
                Boost Sharing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSharing;