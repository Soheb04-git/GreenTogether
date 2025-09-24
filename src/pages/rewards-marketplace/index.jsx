//src/pages/rewards-marketplace/inex.jsx

import React, { useState, useEffect } from 'react';
// import Header from '../../components/ui/Header';
// import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RewardsHeader from './components/RewardsHeader';
import CategoryTabs from './components/CategoryTabs';
import RewardCard from './components/RewardCard';
import LeaderboardSection from './components/LeaderboardSection';
import PenaltyManagement from './components/PenaltyManagement';
import PartnerShowcase from './components/PartnerShowcase';
import RecentActivity from './components/RecentActivity';
import DashboardLayout from '../../layouts/DashboardLayout';
import CitizenReportTab from "../../components/CitizenReportTab";


const RewardsMarketplace = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showRedemptionModal, setShowRedemptionModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const [userPoints, setUserPoints] = useState(() => {
    const saved = localStorage.getItem("userPoints");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [showReportTab, setShowReportTab] = useState(false);

  useEffect(() => {
    localStorage.setItem("userPoints", userPoints);
  }, [userPoints]);

  // Mock user data
  const currentUser = {
    id: 'user123',
    name: 'Priya Sharma',
    points: userPoints,
    level: 3,
    rank: 15,
    pointsToNextRank: 150
  };

  // Mock rewards data
  const rewardsData = [
    {
      id: 'r1',
      title: 'Amazon Gift Voucher - ₹500',
      description: 'Shop for anything on Amazon with this digital voucher',
      points: 500,
      originalPrice: 500,
      image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww',
      category: 'vouchers',
      brand: 'Amazon',
      rating: 4.8,
      redeemed: 1250,
      isPopular: true,
      validUntil: '31 Dec 2025'
    },
    {
      id: 'r2',
      title: 'Bamboo Toothbrush Set (Pack of 4)',
      description: 'Eco-friendly bamboo toothbrushes with soft bristles',
      points: 200,
      originalPrice: 300,
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400',
      category: 'products',
      brand: 'EcoLife',
      rating: 4.6,
      redeemed: 890,
      validUntil: '30 Jun 2025'
    },
    {
      id: 'r3',
      title: 'Tree Plantation Drive Participation',
      description: 'Join our weekend tree plantation drive in your city',
      points: 100,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400',
      category: 'experiences',
      brand: 'WasteWise',
      rating: 4.9,
      redeemed: 456,
      isLimited: true,
      validUntil: '15 Jan 2025'
    },
    {
      id: 'r4',
      title: 'Flipkart Shopping Voucher - ₹1000',
      description: 'Digital voucher for Flipkart shopping across all categories',
      points: 950,
      originalPrice: 1000,
      image: 'https://images.unsplash.com/photo-1654573817889-296cad084c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpcGthcnR8ZW58MHx8MHx8fDA%3D',
      category: 'vouchers',
      brand: 'Flipkart',
      rating: 4.7,
      redeemed: 2100,
      isPopular: true,
      validUntil: '31 Dec 2025'
    },
    {
      id: 'r5',
      title: 'Donate to Clean Ganga Mission',
      description: 'Support river cleaning initiatives across India',
      points: 250,
      image: 'https://plus.unsplash.com/premium_photo-1697730421390-63ae0487b986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZ2ElMjByaXZlcnxlbnwwfHwwfHx8MA%3D%3D',
      category: 'charity',
      brand: 'Clean Ganga',
      rating: 5.0,
      redeemed: 678,
      validUntil: 'Ongoing'
    },
    {
      id: 'r6',
      title: 'Society Bulk Order - Compost Bins (10 units)',
      description: 'Bulk order for residential societies - 10 compost bins',
      points: 1500,
      originalPrice: 2000,
      image: 'https://media.istockphoto.com/id/1397735293/photo/a-senior-man-is-adding-materials-to-a-compost-bin.webp?a=1&b=1&s=612x612&w=0&k=20&c=P_p1pi57aVfNSznHULAnhFBFD29Y2o55yvhZNLI2HNQ=',
      category: 'society',
      brand: 'GreenTech',
      rating: 4.5,
      redeemed: 89,
      validUntil: '28 Feb 2025'
    }
  ];

  // Mock leaderboard data
  const leaderboardData = [
    { id: 'u1', name: 'Rajesh Kumar', points: 4250, level: 4, location: 'Mumbai', monthlyGain: 850 },
    { id: 'u2', name: 'Anita Desai', points: 3890, level: 4, location: 'Delhi', monthlyGain: 720 },
    { id: 'u3', name: 'Vikram Singh', points: 3650, level: 3, location: 'Bangalore', monthlyGain: 680 },
    { id: 'user123', name: 'Priya Sharma', points: 2750, level: 3, location: 'Pune', monthlyGain: 450 },
    { id: 'u4', name: 'Meera Patel', points: 2580, level: 3, location: 'Ahmedabad', monthlyGain: 390 }
  ];

  // Mock penalties data
  const penaltiesData = [
    {
      id: 'p1',
      violation: 'Improper Waste Segregation',
      description: 'Mixed wet and dry waste found in dry waste bin during inspection',
      amount: 200,
      status: 'pending',
      issuedDate: '12 Jan 2025',
      dueDate: '26 Jan 2025',
      location: 'Koregaon Park, Pune',
      evidence: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400'
    },
    {
      id: 'p2',
      violation: 'Missed Collection Schedule',
      description: 'Waste not placed for collection during designated time slot',
      amount: 150,
      status: 'paid',
      issuedDate: '08 Jan 2025',
      dueDate: '22 Jan 2025',
      location: 'Baner, Pune',
      paidDate: '10 Jan 2025'
    }
  ];

  // Mock partners data
  const partnersData = [
    { id: 'p1', name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100', category: 'E-commerce', rewardsCount: 25, rating: 4.8, isVerified: true },
    { id: 'p2', name: 'Flipkart', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100', category: 'E-commerce', rewardsCount: 18, rating: 4.7, isVerified: true },
    { id: 'p3', name: 'EcoLife', logo: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=100', category: 'Eco Products', rewardsCount: 12, rating: 4.6, isVerified: true },
    { id: 'p4', name: 'GreenTech', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100', category: 'Technology', rewardsCount: 8, rating: 4.5, isVerified: true }
  ];

  // Mock recent activity data
  const recentActivities = [
    {
      id: 'a1',
      type: 'earn',
      title: 'Training Module Completed',
      description: 'Completed "Advanced Composting Techniques" module',
      points: 50,
      timestamp: '2 hours ago',
      status: 'completed'
    },
    {
      id: 'a2',
      type: 'redeem',
      title: 'Amazon Voucher Redeemed',
      description: 'Redeemed ₹500 Amazon gift voucher',
      points: 500,
      timestamp: '1 day ago',
      status: 'completed'
    },
    {
      id: 'a3',
      type: 'penalty',
      title: 'Penalty Payment',
      description: 'Paid penalty for missed collection schedule',
      points: 150,
      timestamp: '3 days ago',
      status: 'completed'
    },
    {
      id: 'a4',
      type: 'bonus',
      title: 'Festival Bonus',
      description: 'Makar Sankranti special bonus points',
      points: 100,
      timestamp: '1 week ago',
      status: 'completed'
    }
  ];

  // Filter rewards based on category and search
  const filteredRewards = rewardsData?.filter(reward => {
    const matchesCategory = activeCategory === 'all' || reward?.category === activeCategory;
    const matchesSearch = reward?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         reward?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort rewards
  const sortedRewards = [...filteredRewards]?.sort((a, b) => {
    switch (sortBy) {
      case 'points-low':
        return a?.points - b?.points;
      case 'points-high':
        return b?.points - a?.points;
      case 'rating':
        return b?.rating - a?.rating;
      case 'popular':
      default:
        return b?.redeemed - a?.redeemed;
    }
  });

  const handleRedeemReward = (reward) => {
    if (userPoints >= reward?.points) {  // 🔹 CHANGE 3: check using live points
      setSelectedReward(reward);
      setShowRedemptionModal(true);
    }
  };

  const handleConfirmRedemption = () => {
    if (selectedReward) {
      setUserPoints(prev => prev - selectedReward.points); 
      setShowRedemptionModal(false);
      setSelectedReward(null);
    }
  };

  const handlePayPenalty = (penalty) => {
    console.log('Paying penalty:', penalty);
  };

  const handleAppealPenalty = (penalty) => {
    console.log('Appealing penalty:', penalty);
  };
  const handleQuickAction = (action) => {
    if (action === "report") setShowReportTab(true);
    console.log("Quick action triggered:", action);
  };

  

  return (
    // ✅ Wrap whole page inside DashboardLayout
    <DashboardLayout onQuickAction={handleQuickAction}>
      <div className="p-4 lg:p-6 max-w-7xl mx-auto">
        
        {/* ✅ Rewards Header */}
        <RewardsHeader 
          userPoints={userPoints}
          userLevel={currentUser?.level}
          nextLevelPoints={4000}
        />

        {/* ✅ Search + Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search rewards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e?.target?.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="points-low">Points: Low to High</option>
                <option value="points-high">Points: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              
              <Button
                variant="outline"
                size="sm"
                iconName="Filter"
                iconPosition="left"
                iconSize={16}
              >
                Filter
              </Button>
            </div>
          </div>
          
          <CategoryTabs 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* ✅ Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3">
            {/* Rewards Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Available Rewards ({sortedRewards?.length})
                </h2>
                <div className="text-sm text-muted-foreground">
                  Showing {activeCategory === 'all' ? 'all categories' : activeCategory}
                </div>
              </div>
              
              {sortedRewards?.length === 0 ? (
                <div className="text-center py-12">
                  <Icon name="Gift" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Rewards Found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery ? 'Try adjusting your search terms' : 'No rewards available in this category'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedRewards?.map((reward) => (
                    <RewardCard
                      key={reward?.id}
                      reward={reward}
                      onRedeem={handleRedeemReward}
                      userPoints={userPoints}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Penalty + Partners */}
            <div className="mb-8">
              <PenaltyManagement penalties={penaltiesData} />
            </div>
            <PartnerShowcase partners={partnersData} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LeaderboardSection leaderboardData={leaderboardData} currentUser={currentUser} />
            <RecentActivity activities={recentActivities} />
          </div>
        </div>
      </div>

      

      {/* Redemption Modal remains same */}
      {showRedemptionModal && selectedReward && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Confirm Redemption</h2>
            <p className="mb-2">Reward: <strong>{selectedReward.title}</strong></p>
            <p className="mb-2">Cost: <strong>{selectedReward.points} points</strong></p>
            <p className="mb-4">Your Balance After Redemption: <strong>{userPoints - selectedReward.points}</strong></p>

            <div className="flex justify-end space-x-3">
              <Button variant="ghost" onClick={() => setShowRedemptionModal(false)}>Cancel</Button>
              <Button variant="default" onClick={handleConfirmRedemption}>Confirm</Button>
            </div>
          </div>
        </div>
      )}

      {/* Report Issue Tab Popup */}
      {showReportTab && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              onClick={() => setShowReportTab(false)}
            >
              ✕
            </button>
            <CitizenReportTab /> {/* 🔹 tab popup */}
          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default RewardsMarketplace;