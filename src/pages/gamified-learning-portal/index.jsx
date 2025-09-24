//src/pages/gamified-learning-portal

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Header from '../../components/ui/Header';
// import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import LearningPathCard from './components/LearningPathCard';
import AchievementBadge from './components/AchievementBadge';
import SkillTreeNode from './components/SkillTreeNode';
import LearningStats from './components/LearningStats';
import QuickActionCard from './components/QuickActionCard';
import LeaderboardCard from './components/LeaderboardCard';
import CertificationCard from './components/CertificationCard';
//import { useMemo } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import confetti from "canvas-confetti";
import { toast, Toaster } from "react-hot-toast";

const GamifiedLearningPortal = () => {
  const [activeTab, setActiveTab] = useState('paths');
  const [selectedCategory, setSelectedCategory] = useState('all');
  //const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showSkillTree, setShowSkillTree] = useState(false);
  const navigate = useNavigate();
  const [showCommunityPost, setShowCommunityPost] = useState(false); 
  const [postText, setPostText] = useState(""); 
  const [postSubmitted, setPostSubmitted] = useState(false);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const heroTitle = "🚀 Your Eco-Journey Starts Here!";



  // Mock data for learning paths
  const learningPaths = [
    {
      id: 1,
      title: "Segregation Mastery",
      description: "Master the art of waste segregation with hands-on training and real-world scenarios from Indian communities.",
      modules: 8,
      duration: "5-6 Minutes",
      progress: 75,
      badges: 3,
      learners: 1250,
      icon: "Recycle",
      bgColor: "bg-primary",
      isNew: false
    },
    {
      id: 2,
      title: "Community Leadership",
      description: "Learn to organize and lead waste management initiatives in your neighborhood and society.",
      modules: 12,
      duration: "4-5 hours",
      progress: 30,
      badges: 5,
      learners: 890,
      icon: "Users",
      bgColor: "bg-secondary",
      isNew: true
    },
    {
      id: 3,
      title: "Policy Understanding",
      description: "Understand waste management policies, regulations, and your rights as a citizen in India.",
      modules: 6,
      duration: "1-2 hours",
      progress: 0,
      badges: 2,
      learners: 2100,
      icon: "FileText",
      bgColor: "bg-trust-blue",
      isNew: false
    },
    {
      id: 4,
      title: "Composting Champion",
      description: "Transform organic waste into valuable compost using traditional and modern techniques.",
      modules: 10,
      duration: "3-4 hours",
      progress: 100,
      badges: 4,
      learners: 1680,
      icon: "Leaf",
      bgColor: "bg-success",
      isNew: false
    }
  ];

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first module",
      icon: "BookOpen",
      points: 50,
      bgColor: "bg-primary",
      progress: 100
    },
    {
      id: 2,
      title: "Streak Master",
      description: "Learn for 7 days straight",
      icon: "Zap",
      points: 200,
      bgColor: "bg-accent",
      progress: 85
    },
    {
      id: 3,
      title: "Community Helper",
      description: "Help 5 neighbors with waste sorting",
      icon: "Heart",
      points: 150,
      bgColor: "bg-success",
      progress: 60
    },
    {
      id: 4,
      title: "Knowledge Sharer",
      description: "Share a learning module",
      icon: "Share2",
      points: 100,
      bgColor: "bg-secondary",
      progress: 0
    }
  ];

  // Mock data for skill tree
  const skillTreeNodes = [
    {
      id: 1,
      title: "Basics",
      icon: "BookOpen",
      status: "completed",
      type: "foundation",
      points: 100
    },
    {
      id: 2,
      title: "Sorting",
      icon: "Filter",
      status: "completed",
      type: "skill",
      points: 150
    },
    {
      id: 3,
      title: "Composting",
      icon: "Leaf",
      status: "available",
      type: "skill",
      points: 200,
      progress: 45
    },
    {
      id: 4,
      title: "Leadership",
      icon: "Crown",
      status: "locked",
      type: "milestone",
      points: 500
    }
  ];

  // Mock data for learning stats
  const learningStats = {
    modulesCompleted: 18,
    totalModules: 36,
    badgesEarned: 12,
    totalBadges: 25,
    currentStreak: 7,
    learningTime: 24
  };

  // Mock data for quick actions
  const quickActions = [
    {
      id: 1,
      title: "Daily Quiz",
      description: "Test your knowledge with today\'s waste management quiz",
      icon: "HelpCircle",
      bgColor: "bg-primary",
      duration: "5 min",
      points: 25
    },
    {
      id: 2,
      title: "Photo Challenge",
      description: "Share a photo of proper waste segregation",
      icon: "Camera",
      bgColor: "bg-accent",
      duration: "2 min",
      points: 50
    },
    {
      id: 3,
      title: "Community Post",
      description: "Share a tip with your community",
      icon: "MessageSquare",
      bgColor: "bg-secondary",
      duration: "3 min",
      points: 30
    }
  ];

  // Mock data for leaderboard
  const leaderboard = {
    totalParticipants: 15420,
    topUsers: [
      {
        id: 1,
        name: "Priya Sharma",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        points: 2850,
        location: "Mumbai",
        modulesCompleted: 28,
        level: 5,
        weeklyGain: 180
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        points: 2720,
        location: "Delhi",
        modulesCompleted: 26,
        level: 4,
        weeklyGain: 150
      },
      {
        id: 3,
        name: "Anita Patel",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        points: 2650,
        location: "Bangalore",
        modulesCompleted: 25,
        level: 4,
        weeklyGain: 120
      }
    ]
  };

  const currentUser = {
    id: 4,
    name: "You",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    points: 1850,
    location: "Pune",
    modulesCompleted: 18,
    level: 3,
    rank: 8
  };

  // Mock data for certifications
  const certifications = [
    {
      id: 1,
      title: "Waste Segregation Expert",
      description: "Certified expert in waste segregation techniques and best practices for Indian households.",
      issuer: "GreenTogether",
      level: "Advanced",
      status: "earned",
      badgeImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center",
      earnedDate: "2024-08-15",
      duration: "3 hours",
      points: 500
    },
    {
      id: 2,
      title: "Community Leader",
      description: "Certified to lead and organize waste management initiatives in residential communities.",
      issuer: "WasteWise India",
      level: "Professional",
      status: "in-progress",
      badgeImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
      progress: 65,
      remainingModules: 4,
      duration: "5 hours",
      points: 750
    },
    {
      id: 3,
      title: "Composting Specialist",
      description: "Master the art of composting organic waste using various techniques suitable for Indian conditions.",
      issuer: "WasteWise India",
      level: "Intermediate",
      status: "available",
      badgeImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop&crop=center",
      duration: "4 hours",
      points: 600,
      prerequisites: ["Waste Segregation Basics", "Organic Waste Identification"]
    }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'community', label: 'Community' }
  ];

  const tabs = [
    { id: 'paths', label: 'Learning Paths', icon: 'BookOpen' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'leaderboard', label: 'Leaderboard', icon: 'Users' }
  ];

  // ✅ ADD this after tabs = [ ... ] 
    const quizQuestions = [
      {
        question: "Which waste goes into the green bin?",
        options: ["Plastic bottles", "Food waste", "Glass", "E-waste"],
        answer: "Food waste"
      },
      {
        question: "Which of these is recyclable?",
        options: ["Banana peel", "Old newspaper", "Leftover curry", "Soil"],
        answer: "Old newspaper"
      },
      {
        question: "Which is compostable?",
        options: ["Plastic bag", "Coffee grounds", "Glass", "Batteries"],
        answer: "Coffee grounds"
      }
    ];


  const [selectedPath, setSelectedPath] = useState(null);
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [showPhotoChallenge, setShowPhotoChallenge] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoUploadSuccess, setPhotoUploadSuccess] = useState(false);

  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("userPoints");
    return savedPoints ? parseInt(savedPoints, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("userPoints", points);
  }, [points]);

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("dailyQuiz"));
    if (savedQuiz) {
      //setQuizQuestion(savedQuiz.question);
      setSelectedAnswer(savedQuiz.answer);
    }

    const savedPhoto = localStorage.getItem("photoPreview");
    if (savedPhoto) setPhotoPreview(savedPhoto);

    const savedPosts = JSON.parse(localStorage.getItem("communityPosts")) || [];
    setCommunityPosts(savedPosts);
  }, []);

  // ✅ Reward helper (NEW)
  const triggerReward = (message, amount) => {
    toast.success(`🎉 ${message} (+${amount} pts)`);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handlePathClick = (path) => {
    setSelectedPath(path);
    if (path.id === 1) setActiveModalTab('video'); 
  };

  const handleContinueClick = (path) => {
    setSelectedPath(path);
    if (path.id === 1) setActiveModalTab('video'); 
  };

  const handleAchievementClick = (ach) => console.log("Achievement clicked:", ach);
  const handleNodeClick = (node) => console.log("Skill tree node clicked:", node);


  // -------------------- LEARNING PATH MODAL -------------------- 
  // ✅ Rewritten Segregation Mastery Modal with Video + Summary + Quiz
  const [activeModalTab, setActiveModalTab] = useState('video');
  const [quizAnswers, setQuizAnswers] = useState({}); // store answers

  // Function to handle quiz input changes
  const handleQuizChange = (q, value) => {
    setQuizAnswers({ ...quizAnswers, [q]: value });
  };

  // Function to submit quiz
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    if (quizAnswers['biodegradable']?.toLowerCase().includes('food') ||
        quizAnswers['biodegradable']?.toLowerCase().includes('organic')) score += 1;
    if (quizAnswers['importance']?.toLowerCase().includes('recycle') ||
        quizAnswers['importance']?.toLowerCase().includes('reduce') ||
        quizAnswers['importance']?.toLowerCase().includes('segregate')) score += 1;

    if(score === 2){
      triggerReward("Excellent! You answered all correctly.", 20);
    } else {
      toast('Some answers were not correct. Keep learning!');
    }
  };

  // const handleQuickAction = (action) => {
  //   console.log('Quick action:', action);
  // };

  

  const handleQuickAction = (action) => {
    if (action.title === "Daily Quiz") {
      const randomQ = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
      setQuizQuestion(randomQ);
      setSelectedAnswer(null);
    } else if (action.title === "Photo Challenge") {
      setShowPhotoChallenge(true);
      setPhotoFile(null);
      setPhotoPreview(null);
      setPhotoUploadSuccess(false);
    } else if (action.title === "Community Post") {
      setShowCommunityPost(true);
      setPostText("");
      setPostSubmitted(false);
    } else {
      console.log("Quick action:", action);
    }
  };

  const handleSubmitPost = () => {
    if (!postText.trim()) {
      alert("Please write something before posting!");
      return;
    }

    const newPost = {
      id: Date.now(),
      text: postText,
      date: new Date().toLocaleString(),
      user: "You",                        
      avatar: currentUser.avatar
    };

    const updatedPosts = [newPost, ...communityPosts];
    setCommunityPosts(updatedPosts);
    localStorage.setItem("communityPosts", JSON.stringify(updatedPosts));

    setPostSubmitted(true);

    // ✅ Award points for posting
    setPoints((prev) => prev + 30);
    triggerReward("Community post shared!", 30);

    setTimeout(() => {
      setShowCommunityPost(false);
      setPostText("");
      setPostSubmitted(false);
    }, 1500);
  };

  


  const handleViewCertificate = (certification) => {
    console.log('Viewing certificate:', certification);
  };

  const handleShareCertificate = (certification) => {
    console.log('Sharing certificate:', certification);
  };

  // ✅ Quiz helpers
const handleSelectAnswer = (opt) => {
    if (selectedAnswer) return;
    setSelectedAnswer(opt);

    localStorage.setItem("dailyQuiz", JSON.stringify({
      question: quizQuestion,
      answer: opt
    }));

    // ✅ Award points if correct
    if (opt === quizQuestion.answer) {
      setPoints((prev) => prev + 25);
      triggerReward("Correct Quiz Answer!", 25);
    }
  };

const handleNextQuizQuestion = () => {
  const randomQ = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  setQuizQuestion(randomQ);
  setSelectedAnswer(null);
};

// ✅ Photo challenge helpers
const handlePhotoChange = (file) => {
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
      localStorage.setItem("photoPreview", e.target.result);
    };
    reader.readAsDataURL(file);
  };

const handlePhotoSubmit = () => {
    if (!photoFile) {
      alert("Please select an image first.");
      return;
    }
    console.log("Uploading photo:", photoFile);
    setPhotoUploadSuccess(true);

    // ✅ Award points for photo submission
    setPoints((prev) => prev + 50);
    triggerReward("Photo uploaded!", 50);

    setTimeout(() => {
      setShowPhotoChallenge(false);
      setPhotoFile(null);
      setPhotoPreview(null);
      setPhotoUploadSuccess(false);
    }, 1500);
  };


  return (
    <DashboardLayout>    {/* ✅ Wrap page inside the new layout */}
      <div className="p-6 max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{heroTitle}</h1>
              <p className="text-white/90 mb-4">
                Continue your journey to become a waste management expert. You're making a real difference!
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={20} />
                  <span className="font-medium">7 day streak</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Trophy" size={20} />
                  <span className="font-medium">Level 3 Learner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Coins" size={20} />
                  {/* 🔹 Modified: dynamic points */}
                  <span className="font-medium">{points} points</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={64} />
              </div>
            </div>
          </div>
        </div>

          {/* Learning Stats */}
          <div className="mb-8">
            <LearningStats stats={learningStats} />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
              <Button
                variant="ghost"
                size="sm"
                iconName="RefreshCw"
                iconSize={16}
              >
                Refresh
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions?.map((action) => (
                <QuickActionCard
                  key={action?.id}
                  action={action}
                  onActionClick={handleQuickAction}
                />
              ))}
            </div>
          </div>
          
          {/* ✅ Community Feed with See More + Smooth Scroll */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Community Feed</h2>
              {communityPosts.length === 0 ? (
                <p className="text-muted-foreground">No posts yet. Be the first to share!</p>
              ) : (
                <>
                  <div className="space-y-4" id="community-feed">
                    {communityPosts.slice(0, visiblePosts).map((post) => (
                      <div key={post.id} className="border p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center mb-2">
                          <img
                            src={post.avatar || "https://randomuser.me/api/portraits/lego/2.jpg"}
                            alt="User avatar"
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-medium">{post.user || "Anonymous User"}</p>
                            <span className="text-xs text-muted-foreground">{post.date}</span>
                          </div>
                        </div>
                        <p className="text-foreground mb-3">{post.text}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <button
                            className="flex items-center space-x-1 hover:text-primary"
                            onClick={() => {
                              const updatedPosts = communityPosts.map((p) =>
                                p.id === post.id ? { ...p, likes: (p.likes || 0) + 1 } : p
                              );
                              setCommunityPosts(updatedPosts);
                              localStorage.setItem("communityPosts", JSON.stringify(updatedPosts));
                            }}
                          >
                            <Icon name="Heart" size={16} />
                            <span>{post.likes || 0}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ✅ See More Button */}
                  {visiblePosts < communityPosts.length && (
                    <div className="mt-4 flex justify-center">
                      <button
                        className="px-4 py-2 bg-white border rounded-lg shadow-md text-primary font-medium hover:bg-primary hover:text-white transition"
                        onClick={() => {
                          setVisiblePosts((prev) => prev + 2);
                          setTimeout(() => {
                            const feed = document.getElementById("community-feed");
                            if (feed) {
                              feed.lastElementChild?.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100); // wait for render
                        }}
                      >
                        See More
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>


        {/* -------------------- UPDATED SEGREGATION MASTER MODAL -------------------- */}
        {selectedPath && selectedPath.id === 1 && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedPath(null)}
          >
            <div
              className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{selectedPath.title}</h2>
                <button
                  className="text-gray-500 hover:text-gray-800 text-lg font-bold"
                  onClick={() => setSelectedPath(null)}
                >
                  ✖
                </button>
              </div>

              {/* Tabs */}
              <div className="mb-4 flex border-b">
                <button
                  onClick={() => setActiveModalTab('video')}
                  className={`py-2 px-4 ${activeModalTab === 'video' ? 'bg-blue-500 text-white rounded-t-lg' : 'bg-gray-200 text-gray-800 rounded-t-lg'}`}
                >
                  Video
                </button>
                <button
                  onClick={() => setActiveModalTab('summary')}
                  className={`py-2 px-4 ${activeModalTab === 'summary' ? 'bg-blue-500 text-white rounded-t-lg' : 'bg-gray-200 text-gray-800 rounded-t-lg'}`}
                >
                  Summary
                </button>
                <button
                  onClick={() => setActiveModalTab('quiz')}
                  className={`py-2 px-4 ${activeModalTab === 'quiz' ? 'bg-blue-500 text-white rounded-t-lg' : 'bg-gray-200 text-gray-800 rounded-t-lg'}`}
                >
                  Quiz
                </button>
              </div>

              {/* Tab Content */}
              {activeModalTab === 'video' && (
                <div className="mb-4 relative" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/Pe5fSaOTtDo?si=wlUHoVNuHIUIZsqD"
                    title="Segregation Mastery"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {activeModalTab === 'summary' && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Summary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This video explains how to segregate waste effectively. You learn the difference between biodegradable (organic), recyclable, and non-recyclable waste. 
                    It shows real-life examples of households and communities practicing segregation, explains why sorting waste helps reduce pollution and conserve resources, and encourages community participation.
                  </p>
                </div>
              )}

              {activeModalTab === 'quiz' && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Quick Quiz</h3>
                  <form onSubmit={handleQuizSubmit}>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">What is biodegradable waste?</label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Your answer"
                        value={quizAnswers['biodegradable'] || ''}
                        onChange={(e) => handleQuizChange('biodegradable', e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium">Why is waste segregation important?</label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Your answer"
                        value={quizAnswers['importance'] || ''}
                        onChange={(e) => handleQuizChange('importance', e.target.value)}
                      />
                    </div>
                    <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                  </form>
                </div>
              )}

              <div className="mt-6">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => setSelectedPath(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}


          {/* Main Content Tabs */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab?.id
                        ? 'bg-card text-primary shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                {activeTab === 'paths' && (
                  <>
                    <Select
                      options={categoryOptions}
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                      placeholder="Filter by category"
                      className="w-48"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSkillTree(!showSkillTree)}
                      iconName="GitBranch"
                      iconSize={16}
                    >
                      {showSkillTree ? 'Hide' : 'Show'} Skill Tree
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'paths' && (
              <div className="space-y-6">
                {showSkillTree && (
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Learning Skill Tree</h3>
                    <div className="flex items-center justify-center space-x-8">
                      {skillTreeNodes?.map((node, index) => (
                        <SkillTreeNode
                          key={node?.id}
                          node={node}
                          onNodeClick={handleNodeClick}
                          isConnected={index > 0}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {learningPaths?.map((path) => (
                    <LearningPathCard
                      key={path?.id}
                      path={path}
                      onStartPath={() => handlePathClick(path)}
                      onContinuePath={() => handleContinueClick(path)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements?.map((achievement) => (
                    <AchievementBadge
                      key={achievement?.id}
                      achievement={achievement}
                      isEarned={achievement?.progress === 100}
                      onClick={handleAchievementClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {certifications?.map((certification) => (
                    <CertificationCard
                      key={certification?.id}
                      certification={certification}
                      onViewCertificate={handleViewCertificate}
                      onShareCertificate={handleShareCertificate}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <LeaderboardCard
                    leaderboard={leaderboard}
                    currentUser={currentUser}
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Your Progress</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Current Rank</span>
                        <span className="text-lg font-bold text-primary">#{currentUser?.rank}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Points</span>
                        <span className="text-lg font-bold text-accent">{currentUser?.points?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Next Level</span>
                        <span className="text-sm text-muted-foreground">150 pts to go</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ✅ Learning Path Modal
        
{selectedPath && (
  <div 
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
    onClick={() => setSelectedPath(null)}
  >
    <div 
      className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold mb-2">{selectedPath?.title}</h2>
      <p className="text-muted-foreground mb-4">{selectedPath?.description}</p>
      <p className="text-sm text-gray-600 mb-4">
        🚧 Full learning modules will be available soon!
      </p>
      <Button
        variant="default"
        onClick={() => setSelectedPath(null)}
        fullWidth
      >
        Close
      </Button>
    </div>
  </div>
)} */}



        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LeaderboardCard
                leaderboard={leaderboard}
                currentUser={currentUser}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current Rank</span>
                    <span className="text-lg font-bold text-primary">#{currentUser?.rank}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Points</span>
                    <span className="text-lg font-bold text-accent">
                      {points.toLocaleString()}   {/* ✅ FIX: use live points */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

    {/* ✅ Daily Quiz Modal */}
      {quizQuestion && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          onClick={() => setQuizQuestion(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close button (top-right) */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setQuizQuestion(null)}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4">Daily Quiz</h2>
            <p className="mb-4 text-foreground font-medium">{quizQuestion.question}</p>

            {/* Options */}
            <div className="space-y-3">
              {quizQuestion.options.map((opt) => {
                let classes = "w-full px-4 py-2 rounded text-left border transition-all";
                if (selectedAnswer) {
                  if (opt === quizQuestion.answer) classes += " bg-green-50 border-green-400 font-semibold";
                  else if (opt === selectedAnswer && opt !== quizQuestion.answer)
                    classes += " bg-red-50 border-red-400";
                } else {
                  classes += " bg-white hover:bg-gray-100";
                }

                return (
                  <button
                    key={opt}
                    className={classes}
                    onClick={() => handleSelectAnswer(opt)}
                    disabled={!!selectedAnswer}

                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {selectedAnswer && (
              <div className="mt-4 text-center">
                {selectedAnswer === quizQuestion.answer ? (
                  <p className="text-green-600 font-medium">
                    ✅ Correct! 🎉
                  </p>
                ) : (
                  <p className="text-red-600 font-medium">
                    ❌ Incorrect. Correct answer: <strong>{quizQuestion.answer}</strong>
                  </p>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              {!selectedAnswer ? (
                <Button variant="default" disabled>
                  Submit Answer {/* 🔹 FIX: disabled since answer submits on option click */}
                </Button>
              ) : (
                <Button variant="default" onClick={handleNextQuizQuestion}>
                  Next Question
                </Button>
              )}
              <Button variant="ghost" onClick={() => setQuizQuestion(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Photo Challenge Modal */}
{showPhotoChallenge && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
    onClick={() => setShowPhotoChallenge(false)}
  >
    <div
      className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold mb-2">Photo Challenge</h2>
      <p className="text-muted-foreground mb-4">
        Show how you are segregating waste properly! Upload an image or capture it using your camera.
      </p>

      <div className="space-y-3">
        <label className="block text-sm font-medium">Upload from gallery</label>
        <input type="file" accept="image/*" onChange={(e) => handlePhotoChange(e.target.files?.[0])} />

        <label className="block text-sm font-medium mt-2">Or capture with camera</label>

        {/* ✅ Hidden file input for camera */}
        <input
          type="file"
          accept="image/*"
          capture="environment"
          id="cameraInput"
          className="hidden"
          onChange={(e) => handlePhotoChange(e.target.files?.[0])}
        />

        {/* ✅ Custom button with camera icon */}
        <Button
          variant="outline"
          className="flex items-center space-x-2 mt-2"
          onClick={() => document.getElementById("cameraInput").click()}
        >
          <Icon name="Camera" size={18} />
          <span>Open Camera</span>
        </Button>


        {photoPreview && (
          <div className="mt-3">
            <div className="text-sm text-muted-foreground mb-1">Preview:</div>
            <img src={photoPreview} alt="preview" className="w-full max-h-48 object-cover rounded-lg border" />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <Button variant="ghost" onClick={() => setShowPhotoChallenge(false)}>Cancel</Button>
        <Button variant="default" onClick={handlePhotoSubmit} disabled={!photoFile}>
          {photoUploadSuccess ? 'Uploaded' : 'Submit Photo'}
        </Button>
      </div>

      {photoUploadSuccess && <div className="mt-3 text-sm text-success">Uploaded successfully!</div>}
    </div>
  </div>
)}

    {/* ✅ Community Post Modal */}
{showCommunityPost && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
    onClick={() => setShowCommunityPost(false)}
  >
    <div
      className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-bold mb-2">Community Post</h2>
      <p className="text-muted-foreground mb-4">
        Share your tips, suggestions, or experiences with the community.
      </p>

      <textarea
        className="w-full border rounded-lg p-3 text-sm focus:ring-primary focus:border-primary"
        rows={4}
        placeholder="Write your community tip here..."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />

      <div className="mt-4 flex items-center space-x-2">
        <Button
          variant="ghost"
          onClick={() => setShowCommunityPost(false)}
        >
          Cancel
        </Button>
        <Button
          variant="default"
          onClick={handleSubmitPost}
          disabled={postSubmitted}
        >
          {postSubmitted ? "Posted!" : "Post"}
        </Button>
      </div>

      {postSubmitted && (
        <div className="mt-3 text-sm text-success">
          ✅ Your post has been shared!
        </div>
      )}
    </div>
    
  </div>
)}

  
    <Toaster position="top-center" reverseOrder={false} />
    </DashboardLayout>
  );
};

export default GamifiedLearningPortal;