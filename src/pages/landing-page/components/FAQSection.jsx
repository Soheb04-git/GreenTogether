//src/pages/landing-page/cmponents/FAQSection.jsx

import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How do I register on GreenTogether?',
      answer: `Registration is simple and takes less than 2 minutes:\n1. Verify your mobile number with OTP\n2. Set your location (auto-detect or manual)\n3. Choose your involvement preferences\n\nThat's it! You'll have immediate access to report waste issues and connect with your community.`,
      videoUrl: 'https://example.com/registration-demo',
      relatedTopics: ['Account Setup', 'Mobile Verification', 'Location Services']
    },
    {
      id: 2,
      category: 'Privacy & Security',
      question: 'Is my personal data safe with GreenTogether?',
      answer: `Absolutely! We take data privacy seriously:\n\n• All data is encrypted and stored securely\n• We comply with Indian data protection laws\n• Your location data is only used for waste management coordination\n• We never share personal information with third parties\n• You can delete your account and data anytime\n\nWe're certified by government agencies and follow international security standards.`,
      videoUrl: null,
      relatedTopics: ['Data Protection', 'Privacy Policy', 'Account Security']
    },
    {
      id: 3,
      category: 'Waste Management',question: 'What types of waste issues can I report?',
      answer: `You can report various waste-related problems:\n\n• Overflowing garbage bins\n• Illegal dumping sites\n• Broken or missing waste containers\n• Irregular waste collection\n• Hazardous waste disposal\n• Recycling facility issues\n• Street cleaning problems\n\nSimply take a photo, add location, and describe the issue. Our system will route it to the appropriate authorities.`,
      videoUrl: 'https://example.com/reporting-demo',
      relatedTopics: ['Waste Reporting', 'Photo Guidelines', 'Issue Categories']
    },
    {
      id: 4,
      category: 'Worker Support',question: 'How does GreenTogether help waste management workers?',
      answer: `We provide comprehensive support for waste workers:\n\n• Organized work orders with optimized routes\n• Fair payment system with transparent pricing\n• Safety equipment and training programs\n• Digital tools for efficient coordination\n• Recognition and career advancement opportunities\n• Direct communication with communities\n\nWorkers report 30-40% increase in earnings and job satisfaction through our platform.`,
      videoUrl: 'https://example.com/worker-benefits',
      relatedTopics: ['Worker Registration', 'Payment System', 'Safety Training']
    },
    {
      id: 5,
      category: 'Community Impact',question: 'How can I track my neighborhood\'s progress?',
      answer: `Our community dashboard provides real-time insights:\n\n• Cleanliness scores and improvement trends\n• Waste reduction metrics over time\n• Community participation levels\n• Before/after photos of improvements\n• Comparison with nearby areas\n• Achievement badges and milestones\n\nYou'll receive weekly reports showing your area's environmental impact and progress toward cleanliness goals.`,
      videoUrl: 'https://example.com/dashboard-tour',
      relatedTopics: ['Community Dashboard', 'Progress Tracking', 'Impact Metrics']
    },
    {
      id: 6,
      category: 'Government Compliance',
      question: 'Is GreenTogether approved by government authorities?',
      answer: `Yes, we work closely with government bodies:\n\n• Partnerships with 127+ municipal corporations\n• Compliance with Solid Waste Management Rules 2016\n• Regular audits by environmental agencies\n• Integration with government waste tracking systems\n• Certified by Ministry of Environment & Climate Change\n• Aligned with Swachh Bharat Mission objectives\n\nOur platform helps cities meet their waste management targets and regulatory requirements.`,
      videoUrl: null,
      relatedTopics: ['Government Partnerships', 'Compliance Certificates', 'Legal Framework']
    },
    {
      id: 7,
      category: 'Technical Support',
      question: 'What if I face technical issues with the app?',
      answer: `We provide 24/7 technical support:\n\n• In-app help center with step-by-step guides\n• Live chat support (9 AM - 9 PM)\n• Video tutorials for common issues\n• WhatsApp support: +91-8513995642\n• Email support: help@GreenTogether.india\n• Community forum for peer assistance\n\nMost issues are resolved within 2 hours. We also provide offline functionality for areas with poor connectivity.`,
      videoUrl: 'https://example.com/support-options',
      relatedTopics: ['App Troubleshooting', 'Contact Support', 'Offline Features']
    },
    {
      id: 8,
      category: 'Costs & Payments',
      question: 'Is GreenTogether free to use?',
      answer: `Yes, GreenTogether is completely free for citizens:\n\n• No registration fees or hidden charges\n• Free waste reporting and tracking\n• Free community features and dashboard\n• Free participation in cleanup drives\n• Optional premium features for advanced analytics\n\nFor waste management workers, we provide tools at no cost and help increase their earnings through better coordination.`,
      videoUrl: null,
      relatedTopics: ['Free Features', 'Premium Options', 'Worker Earnings']
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const handleFAQToggle = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const handleVideoPlay = (videoUrl) => {
    if (videoUrl) {
      console.log('Playing video:', videoUrl);
      // In a real app, this would open a video player
    }
  };

  return (
    // 🔥 changed: transparent so landing BG slideshow shows through
    <section id="about" className="py-16 sm:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* 🔥 changed: translucent pill */}
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm text-blue-800 rounded-full px-4 py-2 mb-6">
            <Icon name="HelpCircle" size={16} className="mr-2" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          {/* 🔥 changed: lighter heading for BG contrast */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Got Questions? <span className="text-primary">We've Got Answers</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            Find answers to common questions about GreenTogether, from registration 
            to privacy, technical support, and community impact.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: '24/7', label: 'Support Available', color: 'text-primary' },
              { value: '<2hrs', label: 'Average Response', color: 'text-secondary' },
              { value: '95%', label: 'Issues Resolved', color: 'text-accent' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-card">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs?.map((faq) => (
            <div key={faq?.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-card border border-gray-100 overflow-hidden">
              <button
                onClick={() => handleFAQToggle(faq?.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/60 transition-colors duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mr-3">
                      {faq?.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq?.question}
                  </h3>
                </div>
                <Icon 
                  name={expandedFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                  size={24} 
                  className="text-gray-600 flex-shrink-0" 
                />
              </button>

              {expandedFAQ === faq?.id && (
                <div className="px-6 pb-6 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-6">
                    {/* Answer Content */}
                    <div className="prose prose-sm max-w-none mb-6">
                      {faq?.answer?.split('\n')?.map((line, index) => (
                        <p key={index} className="text-gray-700 mb-2 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Video Tutorial */}
                    {faq?.videoUrl && (
                      <div className="mb-6">
                        <button
                          onClick={() => handleVideoPlay(faq?.videoUrl)}
                          className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200"
                        >
                          <Icon name="Play" size={16} className="mr-2" />
                          <span className="text-sm font-medium">Watch Video Tutorial</span>
                        </button>
                      </div>
                    )}

                    {/* Related Topics */}
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-3">Related Topics:</div>
                      <div className="flex flex-wrap gap-2">
                        {faq?.relatedTopics?.map((topic, index) => (
                          <span
                            key={index}
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our support team is here to help you 24/7. Get personalized assistance 
              for any questions not covered in our FAQ.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: 'MessageSquare', label: 'Live Chat' },
                { icon: 'Phone', label: 'WhatsApp Support' },
                { icon: 'Mail', label: 'Email Support' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center p-3 bg-white/70 backdrop-blur-sm rounded-lg">
                  <Icon name={item.icon} size={16} className="text-primary mr-2" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="text-sm text-gray-700">
              Average response time: Under 2 hours
            </div>
          </div>
        </div>

        {/* Search FAQ */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-gray-100">
            <div className="flex items-center">
              <Icon name="Search" size={20} className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="flex-1 text-gray-900 placeholder-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

