//src/pages/landing-page/cmponents/BenefitsShowcase.jsx

import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const BenefitsShowcase = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      id: 'citizens',
      title: 'For Citizens',
      subtitle: 'Make a Real Difference',
      icon: 'Users',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-200',
      mainBenefits: [
        'Earn community points for reporting waste issues',
        'See real-time improvements in your neighborhood',
        'Connect with like-minded environmental advocates',
        'Get recognition for your contributions'
      ],
      testimonial: {
        name: 'Priya Sharma',
        location: 'Mumbai, Maharashtra',
        badge: 'Verified Citizen',
        quote: "I\'ve reported 15 waste issues in my area and seen 12 of them resolved within a week. It feels amazing to see our neighborhood getting cleaner!"
      },
      stats: {
        users: '35,000+',
        reports: '1.2L+',
        resolved: '85%'
      }
    },
    {
      id: 'workers',
      title: 'For Workers',
      subtitle: 'Better Tools, Fair Pay',
      icon: 'HardHat',
      color: 'text-green-400', 
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-200',
      mainBenefits: [
        'Access organized work orders and optimized routes',
        'Fair payment system with transparent pricing',
        'Safety equipment and training support',
        'Recognition and career advancement opportunities'
      ],
      testimonial: {
        name: 'Rajesh Kumar',
        location: 'Delhi, NCR',
        badge: 'Verified Worker',
        quote: "The app helps me plan my day better and I earn 30% more than before. The community also respects our work more now."
      },
      stats: {
        workers: '8,500+',
        earnings: '+30%',
        efficiency: '+45%'
      }
    },
    {
      id: 'communities',
      title: 'For Communities',
      subtitle: 'Measurable Progress',
      icon: 'Building2',
      color: 'text-purple-400', 
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-200',
      mainBenefits: [
        'Track cleanliness metrics and improvement trends',
        'Achieve government recognition and awards',
        'Build stronger community bonds through shared goals',
        'Access grants and funding for environmental projects'
      ],
      testimonial: {
        name: 'Dr. Meera Patel',
        location: 'Bangalore, Karnataka',
        badge: 'Community Leader',
        quote: "Our society achieved a 70% waste reduction in 6 months and won the \'Cleanest Community\' award from the municipal corporation."
      },
      stats: {
        communities: '450+',
        awards: '25+',
        reduction: '60%'
      }
    }
  ];

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/20 text-primary rounded-full px-4 py-2 mb-6">
            <Icon name="Gift" size={16} className="mr-2" />
            <span className="text-sm font-medium text-gray-100">Benefits for Everyone</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-primary text-white">Everyone Wins</span> with GreenTogether
          </h2>
          
          <p className="text-xl text-gray-200">
            Our platform creates value for citizens, workers, and communities, 
            ensuring sustainable impact for all stakeholders.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits?.map((benefit) => (
            <div key={benefit?.id} className="group">
              <div 
                className={`bg-black/40 backdrop-blur-md rounded-2xl shadow-card border-2 ${
                  expandedCard === benefit?.id ? benefit?.borderColor : 'border-gray-100'
                } transition-all duration-300 hover:shadow-elevation cursor-pointer overflow-hidden`}
                onClick={() => handleCardClick(benefit?.id)}
              >
                {/* Card Header */}
                <div className={`${benefit?.bgColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-black/30 rounded-lg flex items-center justify-center">
                      <Icon name={benefit?.icon} size={24} className={benefit?.color} />
                    </div>
                    <Icon 
                      name={expandedCard === benefit?.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-gray-200 group-hover:text-white transition-colors" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit?.title}
                  </h3>
                  <p className={`text-sm ${benefit?.color} font-medium`}>
                    {benefit?.subtitle}
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Main Benefits */}
                  <div className="space-y-3 mb-6">
                    {benefit?.mainBenefits?.map((benefitItem, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-200">{benefitItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(benefit?.stats)?.map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className={`text-lg font-bold ${benefit?.color} mb-1`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-300 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedCard === benefit?.id && (
                    <div className="border-t border-gray-600 pt-6 animate-in slide-in-from-top-2 duration-300">
                      {/* Testimonial */}
                      <div className={`${benefit?.bgColor} rounded-lg p-4`}>
                        <div className="flex items-start mb-3">
                          <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Icon name="User" size={16} className={benefit?.color} />
                          </div>
                          <div>
                            <div className="font-medium text-white text-sm">
                              {benefit?.testimonial?.name}
                            </div>
                            <div className="text-xs text-gray-300">
                              {benefit?.testimonial?.location}
                            </div>
                            <div className={`inline-flex items-center ${benefit?.color} text-xs mt-1`}>
                              <Icon name="BadgeCheck" size={12} className="mr-1" />
                              {benefit?.testimonial?.badge}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-200 italic">
                          "{benefit?.testimonial?.quote}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-white">
              Ready to Experience These Benefits?
            </h3>
            <p className="text-gray-200 mb-6">
              Join the GreenTogether community and start making a difference in your city today.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-gray-200">
                <Icon name="Clock" size={16} className="text-primary mr-2" />
                <span className="text-sm text-text-secondary text-white">2-minute registration</span>
              </div>
              <div className="flex items-center justify-center text-gray-200">
                <Icon name="Shield" size={16} className="text-primary mr-2" />
                <span className="text-sm text-text-secondary text-white">100% secure platform</span>
              </div>
              <div className="flex items-center justify-center text-gray-200">
                <Icon name="Heart" size={16} className="text-primary mr-2" />
                <span className="text-sm text-text-secondary text-white">Immediate community impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsShowcase;