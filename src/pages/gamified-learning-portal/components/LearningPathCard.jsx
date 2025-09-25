

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
    <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-elevation-lg transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex items-start sm:items-center space-x-3">
          <div className={`w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${path?.bgColor}`}>
            <Icon name={path?.icon} size={24} color="white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {path?.title}
            </h3>
            <p className="text-sm sm:text-xs md:text-sm text-muted-foreground truncate">
              {path?.modules} modules • {path?.duration}
            </p>
          </div>
        </div>

        {path?.isNew && (
          <span className="mt-2 sm:mt-0 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full self-start sm:self-auto">
            New
          </span>
        )}
      </div>

      <p className="text-sm sm:text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2">
        {path?.description}
      </p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm sm:text-xs md:text-sm font-medium text-foreground">Progress</span>
          <span className={`text-sm sm:text-xs md:text-sm font-semibold ${getProgressColor(path?.progress)}`}>
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Trophy" size={16} className="text-accent" />
            <span className="text-sm sm:text-xs md:text-sm text-muted-foreground">{path?.badges} badges</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm sm:text-xs md:text-sm text-muted-foreground">{path?.learners}+ learners</span>
          </div>
        </div>

        <div>
          <Button
            variant={path?.progress > 0 ? "default" : "outline"}
            size="sm"
            onClick={path?.progress > 0 ? () => onContinuePath(path?.id) : () => onStartPath(path?.id)}
            iconName={path?.progress > 0 ? "Play" : "BookOpen"}
            iconPosition="left"
            iconSize={16}
            className="w-full sm:w-auto"
          >
            {path?.progress > 0 ? "Continue" : "Start"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;
