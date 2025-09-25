

import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeaderboardCard = ({ leaderboard, currentUser }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return { icon: 'Crown', color: 'text-yellow-500' };
      case 2:
        return { icon: 'Medal', color: 'text-gray-400' };
      case 3:
        return { icon: 'Award', color: 'text-orange-500' };
      default:
        return null;
    }
  };

  const getRankBadge = (rank) => {
    if (rank <= 3) {
      return `bg-gradient-to-r ${
        rank === 1 ? 'from-yellow-400 to-yellow-600' :
        rank === 2 ? 'from-gray-300 to-gray-500': 'from-orange-400 to-orange-600'
      } text-white`;
    }
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 sm:p-3 md:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground sm:text-base md:text-lg mb-2 sm:mb-0">
          Community Leaderboard
        </h3>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground sm:text-xs md:text-sm">
          <Icon name="Users" size={16} className="text-primary" />
          <span>{leaderboard?.totalParticipants} learners</span>
        </div>
      </div>

      <div className="space-y-3">
        {leaderboard?.topUsers?.map((user, index) => {
          const rank = index + 1;
          const rankIcon = getRankIcon(rank);
          const isCurrentUser = user?.id === currentUser?.id;

          return (
            <div
              key={user?.id}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-3 p-3 rounded-lg transition-all duration-300 ${
                isCurrentUser ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankBadge(rank)} sm:w-7 sm:h-7 md:w-8 md:h-8`}>
                  {rankIcon ? (
                    <Icon name={rankIcon?.icon} size={16} className={rankIcon?.color} />
                  ) : (
                    rank
                  )}
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-border sm:w-8 sm:h-8 md:w-10 md:h-10">
                  <Image
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <p className={`text-sm font-medium truncate ${isCurrentUser ? 'text-primary' : 'text-foreground'} sm:text-xs md:text-sm`}>
                      {user?.name}
                      {isCurrentUser && (
                        <span className="ml-1 text-xs text-primary sm:text-xxs md:text-xs">(You)</span>
                      )}
                    </p>
                    {user?.level && (
                      <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full sm:text-xxs md:text-xs">
                        L{user?.level}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground sm:text-xxs md:text-xs truncate">
                    {user?.location} • {user?.modulesCompleted} modules
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:flex-col sm:items-end sm:space-y-1 text-right">
                <div className="flex items-center space-x-1">
                  <Icon name="Coins" size={14} className="text-accent" />
                  <span className="text-sm font-semibold text-accent sm:text-xs md:text-sm">
                    {user?.points?.toLocaleString()}
                  </span>
                </div>
                {user?.weeklyGain > 0 && (
                  <div className="flex items-center space-x-1 mt-1 sm:mt-0">
                    <Icon name="TrendingUp" size={12} className="text-success" />
                    <span className="text-xs text-success sm:text-xxs md:text-xs">
                      +{user?.weeklyGain}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {currentUser && currentUser?.rank > 3 && (
        <>
          <div className="border-t border-border my-4"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold sm:w-7 sm:h-7 md:w-8 md:h-8">
                {currentUser?.rank}
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary sm:w-8 sm:h-8 md:w-10 md:h-10">
                <Image
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary sm:text-xs md:text-sm">
                  {currentUser?.name} (You)
                </p>
                <p className="text-xs text-muted-foreground sm:text-xxs md:text-xs">
                  {currentUser?.location} • {currentUser?.modulesCompleted} modules
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end sm:flex-col sm:items-end sm:space-y-1 text-right">
              <div className="flex items-center space-x-1">
                <Icon name="Coins" size={14} className="text-accent" />
                <span className="text-sm font-semibold text-accent sm:text-xs md:text-sm">
                  {currentUser?.points?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeaderboardCard;
