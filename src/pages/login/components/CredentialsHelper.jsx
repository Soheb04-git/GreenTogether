//src/pages/login/components/CredentialsHelper.jsx


import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CredentialsHelper = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mockCredentials = [
    {
      role: 'Citizen',
      email: 'citizen@wasteauth.com',
      password: 'citizen123',
      description: 'Access waste management training and services'
    },
    {
      role: 'Waste Worker',
      email: 'worker@wasteauth.com',
      password: 'worker123',
      description: 'Access worker dashboard and collection routes'
    },
    {
      role: 'Green Champion',
      email: 'champion@wasteauth.com',
      password: 'champion123',
      description: 'Access monitoring tools and community programs'
    },
    {
      role: 'ULB Admin',
      email: 'admin@wasteauth.com',
      password: 'admin123',
      description: 'Access administrative dashboard and system controls'
    }
  ];

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon name="Info" size={16} color="rgb(37, 99, 235)" />
          <span className="text-sm font-medium text-blue-700">
            Demo Credentials
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
          iconPosition="right"
          className="text-blue-600 hover:text-blue-700"
        >
          {isExpanded ? 'Hide' : 'Show'}
        </Button>
      </div>
      <p className="text-xs text-blue-600 mb-3">
        Use these credentials to test different user roles in the system
      </p>
      {isExpanded && (
        <div className="space-y-3">
          {mockCredentials?.map((cred, index) => (
            <div 
              key={index}
              className="bg-white p-3 rounded border border-blue-100"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {cred?.role}
                </span>
                <div className="flex items-center gap-1">
                  <Icon name="User" size={14} color="rgb(107, 114, 128)" />
                </div>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={12} />
                  <code className="bg-gray-100 px-1 rounded text-xs">
                    {cred?.email}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Key" size={12} />
                  <code className="bg-gray-100 px-1 rounded text-xs">
                    {cred?.password}
                  </code>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {cred?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CredentialsHelper;