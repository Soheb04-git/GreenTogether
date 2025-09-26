

// src/components/ui/Sidebar.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import { getRole } from '../../utils/auth';

const Sidebar = ({ isCollapsed = false, onToggleCollapse, onQuickAction = () => {} }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = getRole();
  const showExpanded = !isCollapsed;

  const navigationItems = [
    {
      section: 'Main',
      items: [
        ...(role === 'admin'
          ? [
              { path: '/impact-visualization-dashboard', label: 'Impact Dashboard', icon: 'TrendingUp', description: 'Progress visualization' },
              { path: '/admin-portal/monitoring-hub', label: 'Monitoring Hub', icon: 'Activity', description: 'Real-time tracking' },
            ]
          : []),
        ...(role === 'citizen'
          ? [
              { path: '/gamified-learning-portal', label: 'Learning Portal', icon: 'GraduationCap', description: 'Training & courses' },
              { path: '/community-action-center', label: 'Champion', icon: 'Users', description: 'Local initiatives' },
            ]
          : []),
        ...(role === 'worker'
          ? [
              { path: '/worker-portal', label: 'Worker Dashboard', icon: 'Truck', description: 'Assigned routes & stats' },
              { path: '/worker-performance', label: 'Performance', icon: 'BarChart', description: 'Earnings & efficiency' },
              { path: '/worker-benefits', label: 'Incentives & Benefits', icon: 'Gift', description: 'Earnings & perks' },
            ]
          : []),
      ],
    },
    {
      section: 'Engagement',
      items: [
        ...(role === 'citizen'
          ? [{ path: '/rewards-marketplace', label: 'Rewards', icon: 'Gift', description: 'Earn & redeem points' }]
          : []),
      ],
    },
  ];

  const quickActions =
    role === 'worker'
      ? [{ icon: 'Eye', label: 'See Issues', action: 'see-issues' }]
      : [
          { icon: 'Camera', label: 'Report Issue', action: 'report' },
          { icon: 'MapPin', label: 'Find Centers', action: 'locate' },
          { icon: 'MessageSquare', label: 'Community Chat', action: 'chat' },
        ];

  const handleNavigation = (path) => navigate(path);
  const isActivePath = (path) => location?.pathname === path;

  return (
    <aside
      className={`flex flex-col h-[calc(100vh-1rem)] mt-4 bg-white/90 backdrop-blur-lg border-r border-gray-200 shadow-lg rounded-xl transition-all duration-300 ${
        showExpanded ? 'w-64' : 'w-16'
      }`}
    >
      {/* Top: Active session + collapse */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {showExpanded && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
            <span className="text-sm font-medium text-gray-600">Active Session</span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1 rounded-full hover:bg-gray-100 transition"
        >
          <Icon name={isCollapsed ? 'ChevronRight' : 'ChevronLeft'} size={16} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-6 relative">
        {navigationItems.map((section) => (
          <div key={section.section}>
            {showExpanded && (
              <h3 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.section}
              </h3>
            )}
            <div className="flex flex-col space-y-1 px-2 relative">
              {section.items.map((item) => {
                const active = isActivePath(item.path);
                return (
                  <div key={item.path} className="relative group">
                    {/* Glow Background */}
                    <span
                      className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                        active
                          ? 'bg-gradient-to-r from-green-200 via-green-100 to-green-200 animate-glow'
                          : 'opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-green-100 group-hover:via-green-50 group-hover:to-green-100'
                      }`}
                    ></span>

                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg w-full transition-transform duration-300 hover:scale-[1.03] z-10"
                      title={!showExpanded ? item.label : ''}
                    >
                      {/* Vertical active indicator */}
                      <span
                        className={`absolute left-0 top-0 h-full w-1 rounded-r-lg transition-all duration-300 ${
                          active ? 'bg-gradient-to-b from-green-500 to-green-400' : 'opacity-0'
                        }`}
                      ></span>

                      {/* Icon */}
                      <Icon
                        name={item.icon}
                        size={20}
                        className={`flex-shrink-0 transition-transform duration-300 ${
                          active ? 'text-green-600 scale-110 animate-pulse' : 'text-gray-500 group-hover:text-green-500'
                        }`}
                      />

                      {/* Title & description */}
                      {showExpanded && (
                        <div className="flex-1 min-w-0">
                          <div className={`font-medium text-sm truncate ${active ? 'text-green-700' : 'text-gray-700'}`}>
                            {item.label}
                          </div>
                          <div className="text-xs truncate text-gray-400">{item.description}</div>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <div className="border-t border-gray-200 pt-4 px-2">
          {showExpanded && <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Quick Actions</h3>}
          <div className="flex flex-col space-y-2">
            {quickActions.map((action) => (
              <button
                key={action.action}
                onClick={() => onQuickAction(action.action)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-green-100 hover:via-green-50 hover:to-green-100"
                title={!showExpanded ? action.label : ''}
              >
                <Icon name={action.icon} size={18} className="text-green-500 transition-transform duration-300 group-hover:scale-110" />
                {showExpanded && <span className="text-gray-700 font-medium">{action.label}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Glow Animation Keyframes */}
      <style>{`
        @keyframes glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-glow {
          background-size: 200% 200%;
          animation: glow 3s ease infinite;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
