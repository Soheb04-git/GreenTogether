import React from 'react';
import Icon from '../../../components/AppIcon';

const RewardsHeader = ({ userPoints, userLevel, nextLevelPoints }) => {
  const progressPercentage = ((userPoints % 1000) / 1000) * 100;

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Rewards Marketplace</h1>
          <p className="text-white/90">Transform your eco-actions into amazing rewards</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Coins" size={24} className="text-accent mr-2" />
              <span className="text-2xl font-bold">{userPoints?.toLocaleString()}</span>
            </div>
            <p className="text-sm text-white/80">Available Points</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Level {userLevel}</span>
              <span className="text-sm text-white/80">{nextLevelPoints - userPoints} to next</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-white/80 mt-1">Eco Warrior Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsHeader;