
// src/components/ui/Sidebar.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { getRole } from '../../utils/auth';

const Sidebar = ({ isCollapsed = false, onToggleCollapse, onQuickAction = () => {}, className = '' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = getRole();

  const navigationItems = [
    {
      section: 'Main',
      items: [
        ...(role === 'admin'
          ? [
              {
                path: '/impact-visualization-dashboard',
                label: 'Impact Dashboard',
                icon: 'TrendingUp',
                description: 'Progress visualization',
              },
              {
                path: '/admin-portal/monitoring-hub',
                label: 'Monitoring Hub',
                icon: 'Activity',
                description: 'Real-time tracking',
              },
            ]
          : []),

        ...(role === 'citizen'
          ? [
              {
                path: '/gamified-learning-portal',
                label: 'Learning Portal',
                icon: 'GraduationCap',
                description: 'Training & courses',
              },
            ]
          : []),

        ...(role === 'worker'
          ? [
              {
                path: '/worker-portal',
                label: 'Worker Dashboard',
                icon: 'Truck',
                description: 'Assigned routes & stats',
              },
              {
                path: '/worker-performance',
                label: 'Performance',
                icon: 'BarChart',
                description: 'Earnings & efficiency',
              },
              {
                path: '/worker-benefits',
                label: 'Incentives & Benefits',
                icon: 'Gift',
                description: 'Earnings & perks',
              },
            ]
          : []),

        ...(role === 'volunteer'
          ? [
              {
                path: '/community-action-center',
                label: 'Community Center',
                icon: 'Users',
                description: 'Local initiatives',
              },
            ]
          : []),
      ],
    },
    {
      section: 'Engagement',
      items: [
        ...(role === 'citizen'
          ? [
              {
                path: '/rewards-marketplace',
                label: 'Rewards',
                icon: 'Gift',
                description: 'Earn & redeem points',
              },
            ]
          : []),
      ],
    },
  ];

  // Quick Actions (role-specific for worker)
const quickActions = role === 'worker'
  ? [
      { icon: 'Eye', label: 'See Issues', action: 'see-issues' },
      // { icon: 'MapPin', label: 'Find Centers', action: 'locate' },
      // { icon: 'MessageSquare', label: 'Community Chat', action: 'chat' },
    ]
  : [
      { icon: 'Camera', label: 'Report Issue', action: 'report' },
      { icon: 'MapPin', label: 'Find Centers', action: 'locate' },
      { icon: 'MessageSquare', label: 'Community Chat', action: 'chat' },
    ];


  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleQuickActionClick = (action) => {
    if (onQuickAction) {
      onQuickAction(action);
    } else {
      console.log(`Quick action clicked: ${action}`);
    }
  };

  const isActivePath = (path) => location?.pathname === path;

  const showExpanded = !isCollapsed;

  return (
    <aside
      className={`z-40 bg-card border-r border-border shadow-elevation transition-all duration-300 ${
        showExpanded ? 'w-64' : 'w-16'
      } ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {showExpanded && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Active Session
              </span>
            </div>
          )}

          {onToggleCollapse && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              iconName={isCollapsed ? 'ChevronRight' : 'ChevronLeft'}
              iconSize={16}
              className={showExpanded ? '' : 'mx-auto'}
            />
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navigationItems?.map((section) => (
            <div key={section?.section} className="mb-6">
              {showExpanded && (
                <h3 className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {section?.section}
                </h3>
              )}

              <div className="space-y-1 px-2">
                {section?.items?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                    title={!showExpanded ? item?.label : ''}
                  >
                    <Icon
                      name={item?.icon}
                      size={18}
                      className={`flex-shrink-0 ${
                        isActivePath(item?.path)
                          ? 'text-primary-foreground'
                          : 'text-muted-foreground group-hover:text-primary'
                      }`}
                    />

                    {showExpanded && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                          {item?.label}
                        </div>
                        <div
                          className={`text-xs truncate ${
                            isActivePath(item?.path)
                              ? 'text-primary-foreground/80'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {item?.description}
                        </div>
                      </div>
                    )}

                    {isActivePath(item?.path) && (
                      <div className="w-1 h-6 bg-accent rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Actions */}
          <div className="border-t border-border p-4">
            {showExpanded && (
              <h3 className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Quick Actions
              </h3>
            )}

            <div className="space-y-2">
              {quickActions?.map((action) => (
                <Button
                  key={action?.action}
                  variant="ghost"
                  size="sm"
                  onClick={() => onQuickAction(action?.action)}
                  iconName={action?.icon}
                  iconPosition="left"
                  iconSize={16}
                  className={`w-full justify-start ${!showExpanded ? 'px-2' : ''}`}
                  title={!showExpanded ? action?.label : ''}
                >
                  {showExpanded && action?.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Eco Warrior block right after Quick Actions */}
          <div className="border-t border-border p-4">
            <div
              className={`flex items-center ${
                showExpanded ? 'space-x-3' : 'justify-center'
              }`}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={16} color="white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success border-2 border-card rounded-full"></div>
              </div>

              {showExpanded && (
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    Eco Warrior
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Level 3 • 1,250 pts
                  </div>
                </div>
              )}
            </div>

            {showExpanded && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress to Level 4</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full w-3/4 transition-all duration-500"></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
