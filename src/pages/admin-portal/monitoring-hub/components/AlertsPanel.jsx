
// src/pages/admin-portal/monitoring-hub/components/AlertsPanel.jsx

import React, { useState } from 'react';
import Icon from "../../../../components/AppIcon";
import Button from "../../../../components/ui/Button";

const AlertsPanel = ({ alerts = [], onAlertAction, onAlertDismiss }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('priority');

  // 📌 NEW: Dummy fallback alerts for prototype mode
  const dummyAlerts = [
    {
      id: "a1",
      title: "Overflow Detected at Bandra Bin",
      description: "Garbage bin at Bandra West has exceeded 90% capacity.",
      priority: "critical",
      category: "collection",
      timestamp: new Date().toISOString(),
      location: "Bandra West, Mumbai",
      actionable: true,
      read: false
    },
    {
      id: "a2",
      title: "Delayed Collection in Mumbai Central",
      description: "Truck #45 is delayed by 25 minutes due to traffic.",
      priority: "warning",
      category: "transport",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      location: "Mumbai Central",
      actionable: true,
      read: false
    },
    {
      id: "a3",
      title: "New Recycling Center Operational",
      description: "A new recycling facility is now live in Pune.",
      priority: "info",
      category: "infrastructure",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
      location: "Pune",
      actionable: false,
      read: true
    }
  ];

  // 📌 Use dummyAlerts if API gives no data
  const displayedAlerts = alerts?.length > 0 ? alerts : dummyAlerts;

  const alertTypes = {
    critical: { color: 'bg-error', textColor: 'text-error', icon: 'AlertTriangle' },
    warning: { color: 'bg-warning', textColor: 'text-warning', icon: 'AlertCircle' },
    info: { color: 'bg-primary', textColor: 'text-primary', icon: 'Info' },
    success: { color: 'bg-success', textColor: 'text-success', icon: 'CheckCircle' }
  };

  const filterOptions = [
    { value: 'all', label: 'All Alerts', count: displayedAlerts?.length },
    { value: 'critical', label: 'Critical', count: displayedAlerts?.filter(a => a?.priority === 'critical')?.length },
    { value: 'warning', label: 'Warning', count: displayedAlerts?.filter(a => a?.priority === 'warning')?.length },
    { value: 'unread', label: 'Unread', count: displayedAlerts?.filter(a => !a?.read)?.length }
  ];

  const filteredAlerts = displayedAlerts?.filter(alert => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !alert?.read;
    return alert?.priority === filter;
  });

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - alertTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getPriorityOrder = (priority) => {
    switch (priority) {
      case 'critical': return 1;
      case 'warning': return 2;
      case 'info': return 3;
      case 'success': return 4;
      default: return 5;
    }
  };

  const sortedAlerts = [...filteredAlerts]?.sort((a, b) => {
    if (sortBy === 'priority') {
      return getPriorityOrder(a?.priority) - getPriorityOrder(b?.priority);
    }
    if (sortBy === 'time') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    }
    return 0;
  });

  return (
    <div className="bg-card rounded-lg border border-border shadow-elevation">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">System Alerts</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortBy(sortBy === 'priority' ? 'time' : 'priority')}
            iconName={sortBy === 'priority' ? 'ArrowUpDown' : 'Clock'}
            iconPosition="left"
            iconSize={14}
          >
            {sortBy === 'priority' ? 'Priority' : 'Time'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="MoreVertical"
            iconSize={16}
          />
        </div>
      </div>
      {/* 📌 FIX: Added flex-wrap to prevent overflow */}
      <div className="flex flex-wrap items-center gap-2 p-4 border-b border-border bg-muted/20">
        {filterOptions?.map((option) => (
          <button
            key={option?.value}
            onClick={() => setFilter(option?.value)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === option?.value
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <span>{option?.label}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              filter === option?.value
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {option?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Alerts List */}
      <div className="max-h-96 overflow-y-auto">
        {sortedAlerts?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Icon name="Bell" size={24} className="text-muted-foreground" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2">No alerts found</h4>
            <p className="text-sm text-muted-foreground">
              {filter === 'all' ? 'All systems are running smoothly' : `No ${filter} alerts at this time`}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {sortedAlerts?.map((alert) => (
              <div
                key={alert?.id}
                className={`p-4 hover:bg-muted/30 transition-colors ${
                  !alert?.read ? 'bg-primary/5' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  {/* Alert Icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    alertTypes?.[alert?.priority]?.color || 'bg-muted'
                  }/10`}>
                    <Icon 
                      name={alertTypes?.[alert?.priority]?.icon || 'Bell'} 
                      size={16} 
                      className={alertTypes?.[alert?.priority]?.textColor || 'text-muted-foreground'}
                    />
                  </div>

                  {/* Alert Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`text-sm font-medium ${
                        !alert?.read ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {alert?.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        {!alert?.read && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {getTimeAgo(alert?.timestamp)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {alert?.description}
                    </p>

                    {/* Alert Metadata */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        {alert?.location && (
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={12} />
                            <span>{alert?.location}</span>
                          </div>
                        )}
                        {alert?.category && (
                          <div className="flex items-center space-x-1">
                            <Icon name="Tag" size={12} />
                            <span className="capitalize">{alert?.category}</span>
                          </div>
                        )}
                      </div>

                      {/* 📌 Fully working action buttons */}
                      <div className="flex items-center space-x-1">
                        {alert?.actionable && (
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => onAlertAction(alert?.id)}
                            iconName="ExternalLink"
                            iconSize={12}
                          >
                            View
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => onAlertDismiss(alert?.id)}
                          iconName="X"
                          iconSize={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Footer */}
      {sortedAlerts?.length > 0 && (
        <div className="flex items-center justify-between p-4 border-t border-border bg-muted/20">
          <div className="text-sm text-muted-foreground">
            Showing {sortedAlerts?.length} of {displayedAlerts?.length} alerts
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const unreadAlerts = displayedAlerts?.filter(a => !a?.read);
                unreadAlerts?.forEach(alert => onAlertDismiss(alert?.id));
              }}
              disabled={displayedAlerts?.filter(a => !a?.read)?.length === 0}
            >
              Mark all as read
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              iconSize={14}
            >
              Export
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsPanel;
