import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ achievement, isEarned = false, onClick }) => {
  return (
    <div 
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
        isEarned 
          ? 'border-accent bg-accent/10 hover:bg-accent/20' :'border-border bg-muted/50 hover:bg-muted'
      }`}
      onClick={() => onClick && onClick(achievement)}
    >
      <div className="text-center">
        <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
          isEarned ? achievement?.bgColor : 'bg-muted'
        }`}>
          <Icon 
            name={achievement?.icon} 
            size={28} 
            color={isEarned ? "white" : "var(--color-muted-foreground)"} 
          />
        </div>
        
        <h4 className={`text-sm font-semibold mb-1 ${
          isEarned ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          {achievement?.title}
        </h4>
        
        <p className="text-xs text-muted-foreground mb-2">
          {achievement?.description}
        </p>
        
        <div className="flex items-center justify-center space-x-1">
          <Icon name="Coins" size={14} className="text-accent" />
          <span className="text-xs font-medium text-accent">
            +{achievement?.points} pts
          </span>
        </div>
      </div>
      {isEarned && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
          <Icon name="Check" size={14} color="white" />
        </div>
      )}
      {!isEarned && achievement?.progress && (
        <div className="absolute bottom-2 left-2 right-2">
          <div className="w-full bg-border rounded-full h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-500"
              style={{ width: `${achievement?.progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementBadge;