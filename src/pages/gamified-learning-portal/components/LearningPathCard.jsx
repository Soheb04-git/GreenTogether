import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathCard = ({ path, onStartPath, onContinuePath }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-success';
    if (progress >= 50) return 'text-accent';
    return 'text-primary';
  };

  const getProgressBg = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-accent';
    return 'bg-primary';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-elevation-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${path?.bgColor}`}>
            <Icon name={path?.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {path?.title}
            </h3>
            <p className="text-sm text-muted-foreground">{path?.modules} modules • {path?.duration}</p>
          </div>
        </div>
        
        {path?.isNew && (
          <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            New
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {path?.description}
      </p>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className={`text-sm font-semibold ${getProgressColor(path?.progress)}`}>
            {path?.progress}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressBg(path?.progress)}`}
            style={{ width: `${path?.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Trophy" size={16} className="text-accent" />
            <span className="text-sm text-muted-foreground">{path?.badges} badges</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">{path?.learners}+ learners</span>
          </div>
        </div>

        <Button
          variant={path?.progress > 0 ? "default" : "outline"}
          size="sm"
          onClick={path?.progress > 0 ? () => onContinuePath(path?.id) : () => onStartPath(path?.id)}
          iconName={path?.progress > 0 ? "Play" : "BookOpen"}
          iconPosition="left"
          iconSize={16}
        >
          {path?.progress > 0 ? "Continue" : "Start"}
        </Button>
      </div>
    </div>
  );
};

export default LearningPathCard;