import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoleSelectionModal = ({ isOpen, onClose, onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const roles = [
    {
      id: 'citizen',
      title: 'Citizen',
      subtitle: 'Individual Contributor',
      description: 'Join as a community member to learn, participate in campaigns, track your environmental impact, and earn rewards for sustainable practices.',
      features: [
        'Personal impact tracking',
        'Gamified learning modules',
        'Community campaigns',
        'Rewards & recognition',
        'Waste segregation guides'
      ],
      icon: 'User',
      color: 'primary',
      bgGradient: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
      popular: true
    },
    {
      id: 'worker',
      title: 'Waste Worker',
      subtitle: 'Field Operations',
      description: 'Optimize your daily routes, track collections, monitor performance metrics, and increase earnings through efficiency bonuses.',
      features: [
        'Route optimization',
        'Performance tracking',
        'Earnings dashboard',
        'Task management',
        'Citizen feedback system'
      ],
      icon: 'Truck',
      color: 'secondary',
      bgGradient: 'from-secondary/10 to-secondary/5',
      borderColor: 'border-secondary/20',
      popular: false
    },
    {
      id: 'champion',
      title: 'Green Champion',
      subtitle: 'Community Leader',
      description: 'Lead local initiatives, organize campaigns, mentor other citizens, and drive environmental change in your neighborhood.',
      features: [
        'Campaign management',
        'Community leadership',
        'Advanced analytics',
        'Mentorship tools',
        'Policy advocacy'
      ],
      icon: 'Award',
      color: 'accent',
      bgGradient: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
      popular: false
    },
    {
      id: 'official',
      title: 'ULB Admin',
      subtitle: 'Government Official',
      description: 'Access comprehensive dashboards, monitor compliance, manage resources, track performance, and make data-driven policy decisions.',
      features: [
        'Administrative dashboard',
        'Compliance monitoring',
        'Resource management',
        'Performance analytics',
        'Policy tools'
      ],
      icon: 'Shield',
      color: 'success',
      bgGradient: 'from-success/10 to-success/5',
      borderColor: 'border-success/20',
      popular: false
    }
  ];

  const handleRoleSelection = async (role) => {
    setSelectedRole(role?.id);
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store role selection
    localStorage.setItem('userRole', role?.id);
    localStorage.setItem('isAuthenticated', 'true');

    // Call parent callback
    if (onRoleSelect) {
      onRoleSelect(role?.id);
    }

    setIsLoading(false);
    onClose();

    // Navigate based on role
    switch (role?.id) {
      case 'citizen': navigate('/gamified-learning-portal');
        break;
      case 'worker': navigate('/smart-monitoring-hub');
        break;
      case 'champion': navigate('/community-action-center');
        break;
      case 'official': navigate('/impact-visualization-dashboard');
        break;
      default:
        navigate('/gamified-learning-portal');
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        text: 'text-primary',
        bg: 'bg-primary',
        hover: 'hover:bg-primary',
        border: 'border-primary'
      },
      secondary: {
        text: 'text-secondary',
        bg: 'bg-secondary',
        hover: 'hover:bg-secondary',
        border: 'border-secondary'
      },
      accent: {
        text: 'text-accent',
        bg: 'bg-accent',
        hover: 'hover:bg-accent',
        border: 'border-accent'
      },
      success: {
        text: 'text-success',
        bg: 'bg-success',
        hover: 'hover:bg-success',
        border: 'border-success'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl shadow-elevation-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Choose Your Role</h2>
              <p className="text-muted-foreground mt-1">
                Select how you'd like to contribute to India's waste management revolution
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              iconName="X"
              iconSize={20}
              className="flex-shrink-0"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles?.map((role) => {
              const colors = getColorClasses(role?.color);
              const isSelected = selectedRole === role?.id;
              const isCurrentlyLoading = isLoading && isSelected;

              return (
                <div
                  key={role?.id}
                  className={`relative p-6 border-2 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-elevation-lg ${
                    isSelected 
                      ? `${role?.borderColor} bg-gradient-to-br ${role?.bgGradient}` 
                      : 'border-border hover:border-muted-foreground bg-card'
                  }`}
                  onClick={() => !isLoading && handleRoleSelection(role)}
                >
                  {/* Popular Badge */}
                  {role?.popular && (
                    <div className="absolute -top-3 left-6">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  {/* Loading Overlay */}
                  {isCurrentlyLoading && (
                    <div className="absolute inset-0 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                        <div className="text-sm font-medium text-foreground">Setting up your dashboard...</div>
                      </div>
                    </div>
                  )}
                  {/* Role Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                    isSelected ? colors?.bg : 'bg-muted'
                  }`}>
                    <Icon 
                      name={role?.icon} 
                      size={32} 
                      className={isSelected ? 'text-white' : colors?.text}
                    />
                  </div>
                  {/* Role Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{role?.title}</h3>
                    <p className={`text-sm font-medium mb-3 ${colors?.text}`}>{role?.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role?.description}
                    </p>
                  </div>
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {role?.features?.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={14} className={colors?.text} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <div className={`w-6 h-6 rounded-full ${colors?.bg} flex items-center justify-center`}>
                        <Icon name="Check" size={14} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 p-6 bg-muted/30 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Info" size={20} className="text-primary" />
              <h4 className="font-semibold text-foreground">Getting Started</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Don't worry about choosing the perfect role right now. You can always switch between roles 
              or access features from other roles as you explore the platform. Your journey towards 
              environmental impact starts with any choice you make.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionModal;