

// src/pages/admin-portal/monitoring-hub/index.jsx
import React, { useState, useEffect, useRef } from 'react';  
import api from "../../../services/api";
import MetricsGrid from './components/MetricsGrid';
import AlertsPanel from './components/AlertsPanel';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import RouteOptimization from './components/RouteOptimization';
import Icon from "../../../components/AppIcon";   
import Button from "../../../components/ui/Button"; 
import LiveMonitoringMap from "./components/LiveMonitoringMap";
import DashboardLayout from "../../../layouts/DashboardLayout";

const SmartMonitoringHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState({ 
    id: 'national', 
    name: 'India', 
    level: 'country', 
    status: 'good', 
    coordinates: '20.5937,78.9629' 
  });
  const [timeframe, setTimeframe] = useState('today');
  const [refreshing, setRefreshing] = useState(false);
  const [metrics, setMetrics] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [routes, setRoutes] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const fetchAll = async () => {
      try {
        const [mRes, aRes, rRes] = await Promise.all([
          api.get('/metrics', { params: { region: selectedRegion.id, timeframe }}),
          api.get('/alerts', { params: { region: selectedRegion.id }}),
          api.get('/routes', { params: { region: selectedRegion.id }}),
        ]);
        if (!mounted) return;
        setMetrics(mRes.data.metrics || []);
        setAlerts(aRes.data.alerts || []);
        setRoutes(rRes.data.routes || []);
      } catch (err) {
        console.error('Failed to fetch hub data', err);
      }
    };
    fetchAll();
    return () => { mounted = false; };
  }, [selectedRegion, timeframe]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'analytics', label: 'Predictive Analytics', icon: 'TrendingUp' },
    { id: 'routes', label: 'Route Optimization', icon: 'Navigation' },
    { id: 'alerts', label: 'Alerts & Notifications', icon: 'Bell' }
  ];

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const [mRes, aRes, rRes] = await Promise.all([
        api.get('/metrics', { params: { region: selectedRegion.id, timeframe }}),
        api.get('/alerts', { params: { region: selectedRegion.id }}),
        api.get('/routes', { params: { region: selectedRegion.id }}),
      ]);
      setMetrics(mRes.data.metrics || []);
      setAlerts(aRes.data.alerts || []);
      setRoutes(rRes.data.routes || []);
    } catch (err) {
      console.error('Failed to refresh hub data', err);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(() => { if (!refreshing) handleRefresh(); }, 30000);
    return () => clearInterval(interval);
  }, [refreshing]);

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">

        {/* Page Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              🔍 Track, Analyze & Transform Your City
            </h1>
            <p className="text-sm sm:text-base mt-1">
              Real-time visibility into waste management operations across India
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 px-3 py-2 bg-white/20 rounded-lg border border-white/40">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
              <span className="text-sm font-medium text-white">Live Data</span>
              <span className="text-xs text-white/80">
                Updated {refreshing ? 'now' : '2 min ago'}
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              loading={refreshing}
              iconName="RefreshCw"
              iconPosition="left"
              iconSize={16}
              className="text-white border-white/40 hover:bg-white/20"
            >
              Refresh
            </Button>

            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              iconPosition="left"
              iconSize={16}
              className="text-white hover:bg-white/20"
            >
              Export
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center space-x-1 bg-muted/30 p-1 rounded-lg w-fit">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab?.id
                  ? 'bg-card text-foreground shadow-elevation'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
              {tab?.id === 'alerts' && alerts?.filter(a => !a?.read)?.length > 0 && (
                <span className="w-2 h-2 bg-error rounded-full animate-pulse-gentle"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <>
              <MetricsGrid 
                metrics={metrics}
                timeframe={timeframe}
                onTimeframeChange={setTimeframe}
              />

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                <div className="xl:col-span-2">
                  <div className="bg-card rounded-lg border border-border shadow-elevation p-4 sm:p-5">
                    <h2 className="text-lg font-semibold text-foreground mb-2">
                      Live Monitoring Map
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Track vehicles, waste collection, and routes in real-time.
                    </p>
                    <LiveMonitoringMap 
                      selectedRegion={selectedRegion}
                      onRegionSelect={setSelectedRegion}
                      routes={routes}
                    />
                  </div>
                </div>
                <div>
                  <AlertsPanel 
                    alerts={alerts?.slice(0, 5)}
                    onAlertAction={(id) => console.log('Alert action:', id)}
                    onAlertDismiss={(id) => console.log('Alert dismissed:', id)}
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <PredictiveAnalytics 
              predictions={[]}
              historicalData={[]}
              onRefreshPredictions={() => console.log('Refreshing predictions')}
            />
          )}

          {activeTab === 'routes' && (
            <RouteOptimization 
              routes={routes}
              vehicles={[]}
              onRouteOptimize={(mode) => console.log('Optimizing routes with mode:', mode)}
              onRouteUpdate={(id) => console.log('Updating route:', id)}
            />
          )}

          {activeTab === 'alerts' && (
            <AlertsPanel 
              alerts={alerts}
              onAlertAction={(id) => console.log('Alert action:', id)}
              onAlertDismiss={(id) => console.log('Alert dismissed:', id)}
            />
          )}
        </div>

        {/* Quick Stats Footer */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary animate-count-up">275</div>
              <div className="text-sm text-muted-foreground">Cities Connected</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success animate-count-up">12.4M</div>
              <div className="text-sm text-muted-foreground">Citizens Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent animate-count-up">89.7%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning animate-count-up">₹45.2L</div>
              <div className="text-sm text-muted-foreground">Monthly Savings</div>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default SmartMonitoringHub;
