//src/pages/register/components/SecurityBadges.jsx

import React from 'react';
        import Icon from '../../../components/AppIcon';

        const SecurityBadges = () => {
          const securityFeatures = [
            {
              icon: 'Shield',
              text: 'Secure Process',
              description: 'Military-grade encryption protection'
            },
            {
              icon: 'Mail',
              text: 'Email Verified',
              description: 'Confirmation sent to registered email'
            },
            {
              icon: 'Clock',
              text: 'Time Limited',
              description: 'Reset links expire for security'
            }
          ];

          return (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Secure Password Recovery
                </h3>
                <p className="text-xs text-gray-500">
                  Your account security is our top priority
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {securityFeatures?.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full mb-2">
                      <Icon 
                        name={feature?.icon} 
                        size={16} 
                        color="rgb(59, 130, 246)" 
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