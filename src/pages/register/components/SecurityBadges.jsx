//src/pages/register/components/SecurityBadges.jsx

import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      text: 'SSL Encrypted',
      description: 'Your data is protected with 256-bit encryption'
    },
    {
      icon: 'Lock',
      text: 'Secure Registration',
      description: 'Government-grade security standards'
    },
    {
      icon: 'CheckCircle',
      text: 'Verified Platform',
      description: 'Official waste management system'
    }
  ];

  return (
    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="ShieldCheck" size={24} color="#059669" />
        <h3 className="text-lg font-semibold text-slate-900">Secure Registration</h3>
      </div>
      <div className="space-y-3">
        {securityFeatures?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              <Icon 
                name={feature?.icon} 
                size={16} 
                color="#059669" 
              />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">{feature?.text}</p>
              <p className="text-xs text-slate-600">{feature?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500 text-center">
          Protected by industry-standard security protocols
        </p>
      </div>
    </div>
  );
};

export default SecurityBadges;