import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoleBasedWidgets = ({ userRole = 'citizen', isAuthenticated = true }) => {
  const [dashboardData, setDashboardData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Mock data based on user role
    const mockData = {
      citizen: {
        impactMetrics: {
          wasteSegregated: 127,
          pointsEarned: 1250,
          level: 3,
          levelProgress: 75,
          carbonSaved: 45.6,
          treesEquivalent: 12
        },
        upcomingCampaigns: [
          {
            id: 1,
            title: "Clean Streets Initiative",
            date: "2025-01-20",
            location: "Koramangala, Bangalore",
            participants: 156,
            type: "cleanup"
          },
          {
            id: 2,
            title: "E-Waste Collection Drive",
            date: "2025-01-25",
            location: "Indiranagar, Bangalore",
            participants: 89,
            type: "collection"
          },
          {
            id: 3,
            title: "Composting Workshop",
            date: "2025-01-28",
            location: "HSR Layout, Bangalore",
            participants: 45,
            type: "workshop"
          }
        ],
        trainingProgress: {
          completedModules: 8,
          totalModules: 12,
          currentModule: "Advanced Composting Techniques",
          nextCertification: "Waste Management Expert",
          progressPercentage: 67
        },
        recentAchievements: [
          { id: 1, title: "Segregation Master", icon: "Award", date: "2025-01-15" },
          { id: 2, title: "Community Helper", icon: "Users", date: "2025-01-10" },
          { id: 3, title: "Eco Warrior", icon: "Leaf", date: "2025-01-05" }
        ]
      },
      official: {
        complianceMetrics: {
          overallCompliance: 87,
          violationsReported: 23,
          resolvedIssues: 156,
          pendingActions: 12,
          collectionEfficiency: 94
        },
        resourceAllocation: {
          vehiclesActive: 45,
          totalVehicles: 52,
          workersOnDuty: 234,
          totalWorkers: 267,
          budgetUtilized: 78,
          monthlyBudget: 2500000
        },
        criticalAlerts: [
          {
            id: 1,
            type: "high",
            message: "Collection delay in Zone 3 - Immediate attention required",
            timestamp: "2025-01-16 09:30",
            location: "Zone 3, Sector 15"
          },
          {
            id: 2,
            type: "medium",
            message: "Vehicle maintenance due for 3 trucks",
            timestamp: "2025-01-16 08:15",
            location: "Central Depot"
          },
          {
            id: 3,
            type: "low",
            message: "Training session scheduled for new workers",
            timestamp: "2025-01-16 07:00",
            location: "Training Center"
          }
        ],
        performanceMetrics: {
          wasteCollected: 15670,
          recyclingRate: 68,
          citizenSatisfaction: 4.2,
          costPerTon: 1250
        }
      },
      worker: {
        dailyTasks: [
          {
            id: 1,
            route: "Route A - Residential",
            status: "completed",
            housesVisited: 45,
            totalHouses: 45,
            wasteCollected: 234
          },
          {
            id: 2,
            route: "Route B - Commercial",
            status: "in-progress",
            housesVisited: 23,
            totalHouses: 38,
            wasteCollected: 156
          },
          {
            id: 3,
            route: "Route C - Mixed",
            status: "pending",
            housesVisited: 0,
            totalHouses: 52,
            wasteCollected: 0
          }
        ],
        performanceStats: {
          efficiency: 92,
          punctuality: 98,
          citizenRating: 4.6,
          monthlyTarget: 85,
          currentProgress: 78
        },
        earnings: {
          todayEarnings: 450,
          monthlyEarnings: 12750,
          bonusEarned: 1200,
          incentives: 800
        }
      }
    };

    setDashboardData(mockData?.[userRole] || mockData?.citizen);
  }, [userRole]);

  const getCampaignIcon = (type) => {
    switch (type) {
      case 'cleanup': return 'Trash2';
      case 'collection': return 'Package';
      case 'workshop': return 'GraduationCap';
      default: return 'Calendar';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  if (!isAuthenticated) {
    return null;
  }

  // Citizen Dashboard Widgets
  if (userRole === 'citizen') {
    const { impactMetrics, upcomingCampaigns, trainingProgress, recentAchievements } = dashboardData;

    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Environmental Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your progress, join campaigns, and continue learning to maximize your positive impact.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Scale" size={24} className="text-primary" />
                <span className="text-2xl font-bold text-primary">{impactMetrics?.wasteSegregated} kg</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Waste Segregated</h3>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Star" size={24} className="text-secondary" />
                <span className="text-2xl font-bold text-secondary">{impactMetrics?.pointsEarned}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Points Earned</h3>
              <p className="text-sm text-muted-foreground">Level {impactMetrics?.level} • {impactMetrics?.levelProgress}% to next</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Leaf" size={24} className="text-success" />
                <span className="text-2xl font-bold text-success">{impactMetrics?.carbonSaved} kg</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Carbon Saved</h3>
              <p className="text-sm text-muted-foreground">Equivalent to {impactMetrics?.treesEquivalent} trees</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="TrendingUp" size={24} className="text-accent" />
                <span className="text-2xl font-bold text-accent">{impactMetrics?.level}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Current Level</h3>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${impactMetrics?.levelProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Campaigns */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Upcoming Campaigns</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/community-action-center')}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingCampaigns?.slice(0, 3)?.map((campaign) => (
                  <div key={campaign?.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={getCampaignIcon(campaign?.type)} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{campaign?.title}</h4>
                      <p className="text-sm text-muted-foreground">{campaign?.location}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-muted-foreground">{campaign?.date}</span>
                        <span className="text-xs text-primary">{campaign?.participants} participants</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Join</Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Progress */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Learning Progress</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/gamified-learning-portal')}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Continue
                </Button>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {trainingProgress?.completedModules}/{trainingProgress?.totalModules} modules
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${trainingProgress?.progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="BookOpen" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Current Module</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{trainingProgress?.currentModule}</p>
                </div>

                <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="Award" size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground">Next Certification</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{trainingProgress?.nextCertification}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-foreground mb-3">Recent Achievements</h4>
                <div className="space-y-2">
                  {recentAchievements?.map((achievement) => (
                    <div key={achievement?.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <Icon name={achievement?.icon} size={16} className="text-accent" />
                      <span className="text-sm text-foreground flex-1">{achievement?.title}</span>
                      <span className="text-xs text-muted-foreground">{achievement?.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Official Dashboard Widgets
  if (userRole === 'official') {
    const { complianceMetrics, resourceAllocation, criticalAlerts, performanceMetrics } = dashboardData;

    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Administrative Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor compliance, manage resources, and track performance across your jurisdiction.
            </p>
          </div>

          {/* Compliance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="CheckCircle" size={24} className="text-success" />
                <span className="text-2xl font-bold text-success">{complianceMetrics?.overallCompliance}%</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Overall Compliance</h3>
              <p className="text-sm text-muted-foreground">Across all zones</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="AlertTriangle" size={24} className="text-warning" />
                <span className="text-2xl font-bold text-warning">{complianceMetrics?.violationsReported}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Active Violations</h3>
              <p className="text-sm text-muted-foreground">{complianceMetrics?.pendingActions} pending actions</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Truck" size={24} className="text-primary" />
                <span className="text-2xl font-bold text-primary">{resourceAllocation?.vehiclesActive}/{resourceAllocation?.totalVehicles}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Active Vehicles</h3>
              <p className="text-sm text-muted-foreground">{Math.round((resourceAllocation?.vehiclesActive / resourceAllocation?.totalVehicles) * 100)}% operational</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Users" size={24} className="text-secondary" />
                <span className="text-2xl font-bold text-secondary">{resourceAllocation?.workersOnDuty}/{resourceAllocation?.totalWorkers}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Workers On Duty</h3>
              <p className="text-sm text-muted-foreground">{Math.round((resourceAllocation?.workersOnDuty / resourceAllocation?.totalWorkers) * 100)}% attendance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Critical Alerts */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Critical Alerts</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/smart-monitoring-hub')}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {criticalAlerts?.map((alert) => (
                  <div key={alert?.id} className={`p-4 border rounded-lg ${getAlertColor(alert?.type)}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="AlertCircle" size={16} />
                        <span className="font-medium text-sm capitalize">{alert?.type} Priority</span>
                      </div>
                      <span className="text-xs opacity-75">{alert?.timestamp}</span>
                    </div>
                    <p className="text-sm mb-2">{alert?.message}</p>
                    <p className="text-xs opacity-75">{alert?.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Performance Metrics</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/impact-visualization-dashboard')}
                  iconName="BarChart3"
                  iconPosition="right"
                >
                  Detailed View
                </Button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{performanceMetrics?.wasteCollected}</div>
                    <div className="text-sm text-muted-foreground">Tons Collected</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">{performanceMetrics?.recyclingRate}%</div>
                    <div className="text-sm text-muted-foreground">Recycling Rate</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Citizen Satisfaction</span>
                      <span className="text-sm text-muted-foreground">{performanceMetrics?.citizenSatisfaction}/5.0</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-success h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(performanceMetrics?.citizenSatisfaction / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Budget Utilization</span>
                      <span className="text-sm text-muted-foreground">{resourceAllocation?.budgetUtilized}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${resourceAllocation?.budgetUtilized}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Cost Efficiency</span>
                    <span className="text-lg font-bold text-primary">{formatCurrency(performanceMetrics?.costPerTon)}/ton</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">15% below target cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Worker Dashboard Widgets
  if (userRole === 'worker') {
    const { dailyTasks, performanceStats, earnings } = dashboardData;

    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Worker Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your daily tasks, monitor performance, and view earnings.
            </p>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <span className="text-2xl font-bold text-primary">{performanceStats?.efficiency}%</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Efficiency</h3>
              <p className="text-sm text-muted-foreground">Above average</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Clock" size={24} className="text-success" />
                <span className="text-2xl font-bold text-success">{performanceStats?.punctuality}%</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Punctuality</h3>
              <p className="text-sm text-muted-foreground">Excellent record</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Star" size={24} className="text-accent" />
                <span className="text-2xl font-bold text-accent">{performanceStats?.citizenRating}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Citizen Rating</h3>
              <p className="text-sm text-muted-foreground">Out of 5.0</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <div className="flex items-center justify-between mb-4">
                <Icon name="Target" size={24} className="text-secondary" />
                <span className="text-2xl font-bold text-secondary">{performanceStats?.currentProgress}%</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Monthly Target</h3>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-secondary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${performanceStats?.currentProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Daily Tasks */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <h3 className="text-xl font-semibold text-foreground mb-6">Today's Tasks</h3>

              <div className="space-y-4">
                {dailyTasks?.map((task) => (
                  <div key={task?.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{task?.route}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task?.status === 'completed' ? 'bg-success/10 text-success' :
                        task?.status === 'in-progress'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                      }`}>
                        {task?.status?.replace('-', ' ')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Houses: </span>
                        <span className="font-medium text-foreground">{task?.housesVisited}/{task?.totalHouses}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Waste: </span>
                        <span className="font-medium text-foreground">{task?.wasteCollected} kg</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            task?.status === 'completed' ? 'bg-success' :
                            task?.status === 'in-progress'? 'bg-warning' : 'bg-muted-foreground'
                          }`}
                          style={{ width: `${(task?.housesVisited / task?.totalHouses) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevation">
              <h3 className="text-xl font-semibold text-foreground mb-6">Earnings Overview</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{formatCurrency(earnings?.todayEarnings)}</div>
                    <div className="text-sm text-muted-foreground">Today's Earnings</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">{formatCurrency(earnings?.monthlyEarnings)}</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Gift" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">Performance Bonus</span>
                    </div>
                    <span className="font-semibold text-accent">{formatCurrency(earnings?.bonusEarned)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Award" size={16} className="text-success" />
                      <span className="text-sm font-medium text-foreground">Incentives</span>
                    </div>
                    <span className="font-semibold text-success">{formatCurrency(earnings?.incentives)}</span>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground mb-1">
                      {formatCurrency(earnings?.monthlyEarnings + earnings?.bonusEarned + earnings?.incentives)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Monthly Income</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default RoleBasedWidgets;