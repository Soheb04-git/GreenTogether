import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const RewardCard = ({ reward, onRedeem, userPoints }) => {
  const canAfford = userPoints >= reward?.points;
  const discountPercentage = reward?.originalPrice ? 
    Math.round(((reward?.originalPrice - reward?.points) / reward?.originalPrice) * 100) : 0;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-elevation hover:shadow-elevation-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <Image
          src={reward?.image}
          alt={reward?.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {reward?.isPopular && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
            Popular
          </div>
        )}
        
        {reward?.isLimited && (
          <div className="absolute top-3 right-3 bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium">
            Limited
          </div>
        )}
        
        {discountPercentage > 0 && (
          <div className="absolute bottom-3 left-3 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
            {discountPercentage}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground text-sm line-clamp-2 flex-1">
            {reward?.title}
          </h3>
          <div className="flex items-center ml-2 flex-shrink-0">
            <Icon name="Coins" size={16} className="text-accent mr-1" />
            <span className="font-bold text-primary">{reward?.points?.toLocaleString()}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
          {reward?.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Icon name="Star" size={14} className="text-accent mr-1" />
              <span>{reward?.rating}</span>
            </div>
            <div className="flex items-center">
              <Icon name="Users" size={14} className="mr-1" />
              <span>{reward?.redeemed}+ redeemed</span>
            </div>
          </div>
          
          {reward?.validUntil && (
            <div className="text-xs text-muted-foreground">
              Valid till {reward?.validUntil}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {reward?.brand && (
              <div className="flex items-center">
                <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center mr-1">
                  <Icon name="Store" size={12} />
                </div>
                <span className="text-xs text-muted-foreground">{reward?.brand}</span>
              </div>
            )}
          </div>
          
          <Button
            variant={canAfford ? 'default' : 'outline'}
            size="sm"
            onClick={() => onRedeem(reward)}
            disabled={!canAfford}
            iconName={canAfford ? 'ShoppingCart' : 'Lock'}
            iconPosition="left"
            iconSize={14}
            className="text-xs"
          >
            {canAfford ? 'Redeem' : 'Insufficient'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;