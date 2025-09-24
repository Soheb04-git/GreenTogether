import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'redeem': return 'ShoppingCart';
      case 'earn': return 'Plus';
      case 'penalty': return 'AlertTriangle';
      case 'bonus': return 'Star';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'redeem': return 'text-primary bg-primary/10';
      case 'earn': return 'text-success bg-success/10';
      case 'penalty': return 'text-error bg-error/10';
      case 'bonus': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>
      {activities?.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="Activity" size={48} className="text-muted-foreground mx-auto mb-3" />
          <h3 className="font-semibold text-foreground mb-2">No Recent Activity</h3>
          <p className="text-muted-foreground">Start earning points to see your activity here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getActivityColor(activity?.type)}`}>
                <Icon name={getActivityIcon(activity?.type)} size={16} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground text-sm truncate">
                    {activity?.title}
                  </h3>
                  <div className="flex items-center text-sm font-semibold ml-2 flex-shrink-0">
                    {activity?.type === 'redeem' || activity?.type === 'penalty' ? (
                      <span className="text-error">-{activity?.points}</span>
                    ) : (
                      <span className="text-success">+{activity?.points}</span>
                    )}
                    <Icon name="Coins" size={14} className="text-accent ml-1" />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {activity?.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{activity?.timestamp}</span>
                  {activity?.status && (
                    <span className={`px-2 py-1 rounded-full ${
                      activity?.status === 'completed' ? 'bg-success/10 text-success' :
                      activity?.status === 'pending'? 'bg-warning/10 text-warning' : 'bg-muted/10 text-muted-foreground'
                    }`}>
                      {activity?.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;