//src/pages/impact-visualization-dashboard/components/SuccessStories.jsx

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 1,
      title: "Gurgaon\'s Green Revolution",
      location: "Sector 47, Gurgaon, Haryana",
      beforeImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      duration: "6 months",
      participants: 1247,
      wasteReduced: "89%",
      carbonSaved: "156 tonnes CO₂",
      testimonial: `"The transformation has been incredible. Our society went from having overflowing bins and scattered waste to a clean, organized community. The children now actively participate in segregation, and we've become a model for neighboring societies."`,
      resident: {
        name: "Priya Sharma",
        role: "Resident Welfare Association President",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      metrics: [
        { label: "Waste Segregation", before: "15%", after: "94%" },
        { label: "Recycling Rate", before: "8%", after: "76%" },
        { label: "Community Participation", before: "23%", after: "87%" },
        { label: "Composting Adoption", before: "2%", after: "68%" }
      ],
      achievements: [
        "First society in Gurgaon to achieve 90%+ segregation",
        "Reduced waste collection frequency by 40%",
        "Generated ₹2.3 lakhs from recyclable sales",
        "Established community composting center"
      ]
    },
    {
      id: 2,
      title: "Mumbai\'s Coastal Cleanup Success",
      location: "Versova Beach, Mumbai, Maharashtra",
      beforeImage: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      duration: "1 year",
      participants: 3456,
      wasteReduced: "92%",
      carbonSaved: "234 tonnes CO₂",
      testimonial: `"What started as a small weekend cleanup has become a movement. We've not only cleaned our beach but also educated thousands about marine pollution. The sea turtles have returned after 15 years!"`,
      resident: {
        name: "Afroz Shah",
        role: "Environmental Activist & Lawyer",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      metrics: [
        { label: "Beach Cleanliness", before: "12%", after: "96%" },
        { label: "Plastic Waste Removed", before: "0 kg", after: "8,500 kg" },
        { label: "Volunteer Engagement", before: "5 people", after: "500+ people" },
        { label: "Marine Life Recovery", before: "Rare", after: "Thriving" }
      ],
      achievements: [
        "Removed over 8.5 tonnes of plastic waste",
        "Restored 2.5 km of pristine coastline",
        "Established permanent cleanup stations",
        "Created marine conservation awareness program"
      ]
    },
    {
      id: 3,
      title: "Bangalore\'s Tech Hub Goes Green",
      location: "Electronic City, Bangalore, Karnataka",
      beforeImage: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      duration: "8 months",
      participants: 2134,
      wasteReduced: "85%",
      carbonSaved: "198 tonnes CO₂",
      testimonial: `"Our IT park transformation proves that technology and sustainability go hand in hand. We've implemented smart waste monitoring, and our employees are now environmental champions both at work and home."`,
      resident: {
        name: "Rajesh Kumar",
        role: "Facility Manager, Tech Park",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg"
      },
      metrics: [
        { label: "E-waste Management", before: "25%", after: "98%" },
        { label: "Paper Reduction", before: "30%", after: "82%" },
        { label: "Energy Efficiency", before: "45%", after: "89%" },
        { label: "Green Certification", before: "None", after: "LEED Gold" }
      ],
      achievements: [
        "First tech park to achieve zero waste to landfill",
        "Implemented AI-powered waste sorting",
        "Reduced operational costs by ₹15 lakhs annually",
        "Created 50+ green jobs in the community"
      ]
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories?.length) % successStories?.length);
  };

  const story = successStories?.[currentStory];

  return (
    <div className="bg-muted/30 py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Communities Transformed
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from real communities across India showing the power of collective action 
            and sustainable practices in creating lasting environmental change.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevStory}
            iconName="ChevronLeft"
            iconSize={16}
          />
          
          <div className="flex space-x-2">
            {successStories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextStory}
            iconName="ChevronRight"
            iconSize={16}
          />
        </div>

        {/* Main Story Card */}
        <div className="bg-card border border-border rounded-2xl shadow-elevation-lg overflow-hidden mb-8">
          {/* Story Header */}
          <div className="p-6 lg:p-8 border-b border-border">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {story?.title}
                </h3>
                <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">{story?.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{story?.participants?.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{story?.wasteReduced}</div>
                  <div className="text-xs text-muted-foreground">Waste Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{story?.carbonSaved}</div>
                  <div className="text-xs text-muted-foreground">Carbon Saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-error/90 text-error-foreground px-3 py-1 rounded-full text-sm font-medium">
                Before
              </div>
              <div className="aspect-video overflow-hidden">
                <Image
                  src={story?.beforeImage}
                  alt={`${story?.title} - Before transformation`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                After
              </div>
              <div className="aspect-video overflow-hidden">
                <Image
                  src={story?.afterImage}
                  alt={`${story?.title} - After transformation`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Testimonial */}
              <div>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg mb-6">
                  <Icon name="Quote" size={24} className="text-primary mb-4" />
                  <p className="text-foreground italic mb-4 leading-relaxed">
                    {story?.testimonial}
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={story?.resident?.avatar}
                        alt={story?.resident?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{story?.resident?.name}</div>
                      <div className="text-sm text-muted-foreground">{story?.resident?.role}</div>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Trophy" size={18} className="text-accent mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {story?.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="font-semibold text-foreground mb-6 flex items-center">
                  <Icon name="BarChart3" size={18} className="text-primary mr-2" />
                  Impact Metrics
                </h4>
                
                <div className="space-y-6">
                  {story?.metrics?.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{metric?.label}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-error bg-error/10 px-2 py-1 rounded">
                            {metric?.before}
                          </span>
                          <Icon name="ArrowRight" size={12} className="text-muted-foreground" />
                          <span className="text-xs text-success bg-success/10 px-2 py-1 rounded">
                            {metric?.after}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-success h-2 rounded-full transition-all duration-1000"
                          style={{ width: metric?.after?.replace('%', '') + '%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duration Badge */}
                <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">Transformation Duration</span>
                    </div>
                    <span className="text-lg font-bold text-accent">{story?.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Transform Your Community?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of communities across India who are making a real difference. 
              Start your sustainability journey today and become part of the next success story.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" iconName="Users" iconPosition="left">
                Start Community Program
              </Button>
              <Button variant="outline" iconName="Share2" iconPosition="left">
                Share Success Story
              </Button>
              <Button variant="ghost" iconName="FileText" iconPosition="left">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;