//src/pages/register/components/RoleInfoCard.jsx

import React from 'react';
import Icon from '../../../components/AppIcon';

const RoleInfoCard = () => {
  const roleDescriptions = [
    {
      role: 'Citizen',
      icon: 'Users',
      description: 'Access waste management services, training materials, and report issues',
      features: ['Service requests', 'Educational content', 'Community updates']
    },
    {
      role: 'Waste Worker',
      icon: 'Truck',
      description: 'Manage collection routes, update status, and coordinate with teams',
      features: ['Route management', 'Status updates', 'Team coordination']
    }
    // {
    //   role: 'Green Champion',
    //   icon: 'Leaf',
    //   description: 'Monitor environmental impact and promote sustainable practices',
    //   features: ['Impact monitoring', 'Sustainability reports', 'Community engagement']
    // },
    // {
    //   role: 'ULB Admin',
    //   icon: 'Settings',
    //   description: 'Oversee operations, manage users, and access comprehensive analytics',
    //   features: ['System administration', 'User management', 'Analytics dashboard']
    // }
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Info" size={20} color="#1e40af" />
        <h3 className="text-lg font-semibold text-slate-900">Role Information</h3>
      </div>
      <div className="space-y-4">
        {roleDescriptions?.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-200 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name={item?.icon} size={16} color="#1e40af" />
              <h4 className="font-medium text-slate-900">{item?.role}</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">{item?.description}</p>
            <ul className="space-y-1">
              {item?.features?.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-2 text-xs text-slate-500">
                  <Icon name="Check" size={12} color="#059669" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleInfoCard;