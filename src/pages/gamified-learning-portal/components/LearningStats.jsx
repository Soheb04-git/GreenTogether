

import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'BookOpen',
      label: 'Modules Completed',
      value: stats?.modulesCompleted,
      total: stats?.totalModules,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Trophy',
      label: 'Badges Earned',
      value: stats?.badgesEarned,
      total: stats?.totalBadges,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Zap',
      label: 'Current Streak',
      value: stats?.currentStreak,
      suffix: 'days',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Clock',
      label: 'Learning Time',
      value: stats?.learningTime,
      suffix: 'hrs',
      color: 'text-trust-blue',
      bgColor: 'bg-trust-blue/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems?.map((item, index) => (
        <div 
          key={index} 
          className="bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-elevation transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${item?.bgColor}`}>
              <Icon name={item?.icon} size={20} className={item?.color} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline space-x-1">
                <span className={`text-xl sm:text-2xl md:text-xl font-bold ${item?.color}`}>
                  {item?.value}
                </span>
                {item?.total && (
                  <span className="text-sm sm:text-xs md:text-sm text-muted-foreground">
                    /{item?.total}
                  </span>
                )}
                {item?.suffix && (
                  <span className="text-sm sm:text-xs md:text-sm text-muted-foreground">
                    {item?.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm md:text-xs text-muted-foreground truncate">
                {item?.label}
              </p>
            </div>
          </div>

          {item?.total && (
            <div className="mt-3">
              <div className="w-full bg-muted rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${item?.color?.replace('text-', 'bg-')}`}
                  style={{ width: `${(item?.value / item?.total) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningStats;
