import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionCard = ({ action, onActionClick }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-elevation transition-all duration-300 group">
      <div className="flex items-start space-x-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
          <Icon name={action?.icon} size={20} color="white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground mb-1">
            {action?.title}
          </h4>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {action?.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {action?.duration && (
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{action?.duration}</span>
                </div>
              )}
              {action?.points && (
                <div className="flex items-center space-x-1">
                  <Icon name="Coins" size={12} className="text-accent" />
                  <span className="text-xs text-accent font-medium">+{action?.points}</span>
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="xs"
              onClick={() => onActionClick && onActionClick(action)}
              iconName="ArrowRight"
              iconSize={12}
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionCard;