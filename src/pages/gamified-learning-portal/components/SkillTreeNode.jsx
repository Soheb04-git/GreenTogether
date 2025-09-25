

import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillTreeNode = ({ node, onNodeClick, isConnected = false }) => {
  const getStatusColor = () => {
    switch (node?.status) {
      case 'completed':
        return 'border-success bg-success text-success-foreground';
      case 'available':
        return 'border-primary bg-primary text-primary-foreground';
      case 'locked':
        return 'border-border bg-muted text-muted-foreground';
      default:
        return 'border-border bg-card text-foreground';
    }
  };

  const getNodeSize = () => {
    switch (node?.type) {
      case 'milestone':
        return 'w-12 sm:w-16 h-12 sm:h-16';
      case 'bonus':
        return 'w-10 sm:w-12 h-10 sm:h-12';
      default:
        return 'w-12 sm:w-14 h-12 sm:h-14';
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Connection Line */}
      {isConnected && (
        <div className="absolute -top-6 sm:-top-8 w-0.5 h-6 sm:h-8 bg-border"></div>
      )}

      {/* Node */}
      <div
        className={`${getNodeSize()} rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${getStatusColor()}`}
        onClick={() => onNodeClick && onNodeClick(node)}
      >
        <Icon 
          name={node?.icon} 
          size={node?.type === 'milestone' ? 20 : 16} 
          className="sm:text-base"
        />

        {node?.status === 'locked' && (
          <div className="absolute -bottom-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-muted-foreground rounded-full flex items-center justify-center">
            <Icon name="Lock" size={10} sm={12} color="white" />
          </div>
        )}
      </div>

      {/* Node Label */}
      <div className="mt-1 sm:mt-2 text-center max-w-[60px] sm:max-w-20">
        <p className="text-xs sm:text-sm font-medium text-foreground truncate">
          {node?.title}
        </p>
        {node?.points && (
          <p className="text-xs sm:text-sm text-accent font-medium">
            +{node?.points}
          </p>
        )}
      </div>

      {/* Progress Indicator */}
      {node?.progress && node?.progress > 0 && node?.status !== 'completed' && (
        <div className="absolute inset-0 rounded-full">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-primary opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={`${node?.progress * 2.83} 283`}
              className="text-primary"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SkillTreeNode;
