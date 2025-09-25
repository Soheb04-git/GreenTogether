

import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionCard = ({ action, onActionClick }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-elevation transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${action?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
          <Icon name={action?.icon} size={20} color="white" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
            {action?.title}
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
            {action?.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 flex-wrap">
              {action?.duration && (
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} className="text-muted-foreground" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{action?.duration}</span>
                </div>
              )}
              {action?.points && (
                <div className="flex items-center space-x-1">
                  <Icon name="Coins" size={12} className="text-accent" />
                  <span className="text-xs sm:text-sm text-accent font-medium">+{action?.points}</span>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="xs"
              className="mt-2 sm:mt-0"
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
