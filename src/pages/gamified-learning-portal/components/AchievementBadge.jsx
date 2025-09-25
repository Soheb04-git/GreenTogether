

import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ achievement, isEarned = false, onClick }) => {
  return (
    <div 
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group 
        ${isEarned 
          ? 'border-accent bg-accent/10 hover:bg-accent/20' 
          : 'border-border bg-muted/50 hover:bg-muted'}
        sm:p-3 md:p-4
      `}
      onClick={() => onClick && onClick(achievement)}
    >
      <div className="text-center">
        <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center 
          ${isEarned ? achievement?.bgColor : 'bg-muted'}
          sm:w-12 sm:h-12 md:w-16 md:h-16
        `}>
          <Icon 
            name={achievement?.icon} 
            size={28} 
            color={isEarned ? "white" : "var(--color-muted-foreground)"} 
          />
        </div>
        
        <h4 className={`text-sm font-semibold mb-1 
          ${isEarned ? 'text-foreground' : 'text-muted-foreground'}
          sm:text-xs md:text-sm
        `}>
          {achievement?.title}
        </h4>
        
        <p className="text-xs text-muted-foreground mb-2
          sm:text-xxs md:text-xs
        ">
          {achievement?.description}
        </p>
        
        <div className="flex items-center justify-center space-x-1">
          <Icon name="Coins" size={14} className="text-accent sm:w-3 sm:h-3 md:w-4 md:h-4" />
          <span className="text-xs font-medium text-accent sm:text-xxs md:text-xs">
            +{achievement?.points} pts
          </span>
        </div>
      </div>

      {isEarned && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center
          sm:w-5 sm:h-5 md:w-6 md:h-6
        ">
          <Icon name="Check" size={14} color="white" />
        </div>
      )}

      {!isEarned && achievement?.progress && (
        <div className="absolute bottom-2 left-2 right-2">
          <div className="w-full bg-border rounded-full h-1 sm:h-0.5 md:h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-500 sm:h-0.5 md:h-1"
              style={{ width: `${achievement?.progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementBadge;
