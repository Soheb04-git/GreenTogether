import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [impactCounters, setImpactCounters] = useState({
    wasteReduced: 2847563,
    treesPlanted: 45678,
    communitiesServed: 1234,
    carbonSaved: 156789
  });
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Community Leader",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `WasteWise India transformed our society completely. We went from 30% waste segregation to 95% in just 6 months. The gamification made it fun for kids and adults alike. Our monthly waste management costs dropped by 40%.`,
      impact: "Reduced society waste by 2.3 tons monthly",
      rating: 5,
      date: "2025-01-10"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Waste Management Worker",
      location: "Bangalore, Karnataka",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `The platform helped me understand my work's real impact. I can now track my daily collections, earn performance bonuses, and citizens rate my service. My monthly income increased by 35% through the incentive system.`,
      impact: "Improved efficiency by 45%",
      rating: 5,
      date: "2025-01-08"
    },
    {
      id: 3,
      name: "Dr. Anita Desai",
      role: "Environmental Scientist",
      location: "Pune, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: `As an environmental consultant, I've seen many initiatives fail. WasteWise India's data-driven approach and community engagement model is revolutionary. The real-time monitoring helps identify issues before they become problems.`,
      impact: "Consulted for 15+ cities using the platform",
      rating: 5,
      date: "2025-01-05"
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "Municipal Commissioner",
      location: "Ahmedabad, Gujarat",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `WasteWise India gave us the tools to make data-driven decisions. Compliance tracking, resource optimization, and citizen feedback - everything in one dashboard. Our city's cleanliness ranking improved from 45th to 12th nationally.`,
      impact: "Improved city ranking by 33 positions",
      rating: 5,
      date: "2025-01-03"
    }
  ];

  const mediaEndorsements = [
    {
      id: 1,
      source: "The Times of India",
      headline: "WasteWise India: Revolutionizing Urban Waste Management",
      excerpt: "A comprehensive digital platform that\'s transforming how Indian cities handle waste management through technology and community engagement.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop",
      date: "2025-01-15",
      type: "news"
    },
    {
      id: 2,
      source: "Ministry of Environment",
      headline: "Official Recognition for Digital Innovation",
      excerpt: "WasteWise India receives government endorsement for its contribution to the Swachh Bharat Mission and sustainable development goals.",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=50&fit=crop",
      date: "2025-01-12",
      type: "government"
    },
    {
      id: 3,
      source: "Economic Times",
      headline: "Tech Platform Drives 40% Improvement in Waste Management",
      excerpt: "Cities using WasteWise India report significant improvements in efficiency, cost reduction, and citizen satisfaction scores.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop",
      date: "2025-01-10",
      type: "business"
    }
  ];

  const successMetrics = [
    {
      icon: "Recycle",
      value: "2.8M+ kg",
      label: "Waste Reduced",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: "TreePine",
      value: "45K+",
      label: "Trees Equivalent",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: "MapPin",
      value: "1.2K+",
      label: "Communities",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: "Leaf",
      value: "156K+ kg",
      label: "Carbon Saved",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCounters(prev => ({
        wasteReduced: prev?.wasteReduced + Math.floor(Math.random() * 20) + 5,
        treesPlanted: prev?.treesPlanted + Math.floor(Math.random() * 3) + 1,
        communitiesServed: prev?.communitiesServed + (Math.random() > 0.8 ? 1 : 0),
        carbonSaved: prev?.carbonSaved + Math.floor(Math.random() * 15) + 3
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000)?.toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000)?.toFixed(1)}K`;
    }
    return num?.toString();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-500 fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="CheckCircle" size={16} />
            <span>Trusted by Millions Across India</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Impact, Real Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of communities, workers, and officials who are creating a cleaner, 
            greener India through collective action.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successMetrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>
              <div className={`text-2xl lg:text-3xl font-bold ${metric?.color} mb-2 animate-count-up`}>
                {metric?.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-elevation-lg">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonials?.[activeTestimonial]?.rating)}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonials?.[activeTestimonial]?.avatar}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials?.[activeTestimonial]?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials?.[activeTestimonial]?.role} • {testimonials?.[activeTestimonial]?.location}
                    </div>
                  </div>
                </div>
                
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                  <Icon name="TrendingUp" size={14} />
                  <span>{testimonials?.[activeTestimonial]?.impact}</span>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex flex-col space-y-3">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Media Endorsements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Featured In Leading Publications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaEndorsements?.map((endorsement) => (
              <div key={endorsement?.id} className="bg-card border border-border rounded-xl p-6 shadow-elevation hover:shadow-elevation-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={endorsement?.logo}
                    alt={endorsement?.source}
                    className="w-12 h-8 object-contain"
                  />
                  <div>
                    <div className="font-medium text-foreground text-sm">{endorsement?.source}</div>
                    <div className="text-xs text-muted-foreground">{endorsement?.date}</div>
                  </div>
                  <div className={`ml-auto px-2 py-1 rounded-full text-xs font-medium ${
                    endorsement?.type === 'government' ? 'bg-success/10 text-success' :
                    endorsement?.type === 'business'? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                  }`}>
                    {endorsement?.type}
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                  {endorsement?.headline}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {endorsement?.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Government Validation */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={32} className="text-success" />
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-foreground">Government Certified</div>
              <div className="text-sm text-muted-foreground">Aligned with Swachh Bharat Mission</div>
            </div>
          </div>
          
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            Officially recognized by the Ministry of Environment and Forest for contributing to 
            India's sustainable development goals and digital governance initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/gamified-learning-portal')}
              iconName="Award"
              iconPosition="left"
            >
              Get Certified
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/community-action-center')}
              iconName="Users"
              iconPosition="left"
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Real-time Participation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-card border border-border px-6 py-3 rounded-full shadow-elevation">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
              <span className="text-sm font-medium text-foreground">Live Activity</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{formatNumber(impactCounters?.wasteReduced)}</span> kg waste reduced
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-secondary">{formatNumber(impactCounters?.communitiesServed)}</span> communities active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;