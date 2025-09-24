import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CertificationCard = ({ certification, onViewCertificate, onShareCertificate }) => {
  const getStatusColor = () => {
    switch (certification?.status) {
      case 'earned':
        return 'text-success';
      case 'in-progress':
        return 'text-accent';
      case 'available':
        return 'text-primary';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusBg = () => {
    switch (certification?.status) {
      case 'earned':
        return 'bg-success/10 border-success/20';
      case 'in-progress':
        return 'bg-accent/10 border-accent/20';
      case 'available':
        return 'bg-primary/10 border-primary/20';
      default:
        return 'bg-muted/50 border-border';
    }
  };

  return (
    <div className={`bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-elevation-lg ${getStatusBg()}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-border">
            <Image
              src={certification?.badgeImage}
              alt={certification?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {certification?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {certification?.issuer} • {certification?.level}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className={`text-sm font-medium ${getStatusColor()}`}>
            {certification?.status === 'earned' ? 'Certified' : 
             certification?.status === 'in-progress'? 'In Progress' : 'Available'}
          </span>
          {certification?.earnedDate && (
            <p className="text-xs text-muted-foreground mt-1">
              Earned {new Date(certification.earnedDate)?.toLocaleDateString('en-IN')}
            </p>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {certification?.description}
      </p>
      {certification?.status === 'in-progress' && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm font-semibold text-accent">
              {certification?.progress}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${certification?.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {certification?.remainingModules} modules remaining
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{certification?.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Coins" size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">+{certification?.points} pts</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {certification?.status === 'earned' && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onShareCertificate && onShareCertificate(certification)}
                iconName="Share2"
                iconSize={16}
              >
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onViewCertificate && onViewCertificate(certification)}
                iconName="Eye"
                iconSize={16}
              >
                View
              </Button>
            </>
          )}
          
          {certification?.status === 'in-progress' && (
            <Button
              variant="default"
              size="sm"
              iconName="Play"
              iconSize={16}
            >
              Continue
            </Button>
          )}
          
          {certification?.status === 'available' && (
            <Button
              variant="outline"
              size="sm"
              iconName="BookOpen"
              iconSize={16}
            >
              Start
            </Button>
          )}
        </div>
      </div>
      {certification?.prerequisites && certification?.prerequisites?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Prerequisites:</p>
          <div className="flex flex-wrap gap-2">
            {certification?.prerequisites?.map((prereq, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;