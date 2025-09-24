//src/pages/login/components/SecurityBadges.jsx


import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      text: 'SSL Secured',
      description: 'Your data is encrypted and protected'
    },
    {
      icon: 'Lock',
      text: 'Government Grade Security',
      description: 'Meets municipal security standards'
    },
    {
      icon: 'CheckCircle',
      text: 'Verified Platform',
      description: 'Trusted by urban local bodies'
    }
  ];

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="text-center mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Secure Authentication Platform
        </h3>
        <p className="text-xs text-gray-500">
          Your credentials are protected with enterprise-grade security
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {securityFeatures?.map((feature, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mb-2">
              <Icon 
                name={feature?.icon} 
                size={16} 
                color="rgb(34, 197, 94)" 
              />
            </div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              {feature?.text}
            </div>
            <div className="text-xs text-gray-500">
              {feature?.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityBadges;