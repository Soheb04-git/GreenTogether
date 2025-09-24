import React from 'react';
import Icon from '../../../components/AppIcon';

const LeaderboardSection = ({ leaderboardData, currentUser }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Community Leaderboard</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Trophy" size={16} className="text-accent" />
          <span>This Month</span>
        </div>
      </div>
      <div className="space-y-3">
        {leaderboardData?.map((user, index) => (
          <div
            key={user?.id}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              user?.id === currentUser?.id 
                ? 'bg-primary/10 border border-primary/20' :'bg-muted/50 hover:bg-muted'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                index === 0 ? 'bg-accent text-accent-foreground' :
                index === 1 ? 'bg-muted-foreground/20 text-foreground' :
                index === 2 ? 'bg-earth-brown/20 text-earth-brown': 'bg-muted text-muted-foreground'
              }`}>
                {index < 3 ? (
                  <Icon 
                    name={index === 0 ? 'Crown' : index === 1 ? 'Medal' : 'Award'} 
                    size={16} 
                  />
                ) : (
                  index + 1
                )}
              </div>
              
              <div>
                <div className="font-medium text-foreground text-sm">
                  {user?.name}
                  {user?.id === currentUser?.id && (
                    <span className="ml-2 text-xs text-primary font-medium">(You)</span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  Level {user?.level} • {user?.location}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-sm font-semibold text-foreground">
                <Icon name="Coins" size={14} className="text-accent mr-1" />
                {user?.points?.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">
                +{user?.monthlyGain} this month
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Your current rank: <span className="font-semibold text-foreground">#{currentUser?.rank}</span>
          </p>
          <div className="text-xs text-muted-foreground">
            {currentUser?.pointsToNextRank > 0 ? (
              `${currentUser?.pointsToNextRank} points to climb to rank #${currentUser?.rank - 1}`
            ) : (
              'You are at the top! Keep up the great work!'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;