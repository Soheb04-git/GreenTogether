import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnerShowcase = ({ partners }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Our Partners</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Handshake" size={16} className="text-primary" />
          <span>Trusted Brands</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners?.map((partner) => (
          <div
            key={partner?.id}
            className="group bg-muted/30 border border-border rounded-lg p-4 text-center hover:shadow-elevation transition-all duration-300 hover:border-primary/20"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <Image
                src={partner?.logo}
                alt={partner?.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            
            <h3 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
              {partner?.name}
            </h3>
            
            <p className="text-xs text-muted-foreground mb-2">{partner?.category}</p>
            
            <div className="flex items-center justify-center space-x-3 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Gift" size={12} className="mr-1" />
                <span>{partner?.rewardsCount}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Star" size={12} className="mr-1" />
                <span>{partner?.rating}</span>
              </div>
            </div>
            
            {partner?.isVerified && (
              <div className="mt-2">
                <div className="inline-flex items-center px-2 py-1 bg-success/10 text-success rounded-full text-xs">
                  <Icon name="CheckCircle" size={10} className="mr-1" />
                  Verified
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Want to become a partner and offer rewards to eco-warriors?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <Icon name="Plus" size={16} className="mr-2" />
              Partner with Us
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              <Icon name="FileText" size={16} className="mr-2" />
              Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerShowcase;