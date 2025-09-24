//src/pages/landing-page/cmponents/SolutionOverviewSection.jsx

import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const SolutionOverviewSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Citizens Report',
      description: 'Citizens easily report waste issues in their neighborhoods through our mobile app',
      icon: 'Smartphone',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50/70',
      borderColor: 'border-blue-200',
      details: [
        'Take photo of waste issue',
        'Add location automatically',
        'Describe the problem',
        'Submit in under 30 seconds'
      ]
    },
    {
      id: 1,
      title: 'Workers Coordinate',
      description: 'Waste management workers receive organized requests and coordinate efficient collection',
      icon: 'Users',
      color: 'text-green-600',
      bgColor: 'bg-green-50/70',
      borderColor: 'border-green-200',
      details: [
        'Receive prioritized work orders',
        'Optimize collection routes',
        'Update status in real-time',
        'Earn fair compensation'
      ]
    },
    {
      id: 2,
      title: 'Communities Track',
      description: 'Communities monitor progress and celebrate improvements in their neighborhoods',
      icon: 'BarChart3',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50/70',
      borderColor: 'border-purple-200',
      details: [
        'View neighborhood cleanliness scores',
        'Track waste reduction metrics',
        'Celebrate community achievements',
        'Share success stories'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm text-green-800 rounded-full px-4 py-2 mb-6 shadow-card">
            <Icon name="Lightbulb" size={16} className="mr-2" />
            <span className="text-sm font-medium">Smart Solution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-white">
            A <span className="text-primary text-white">Three-Pillar Approach</span> <p className="text-white">to Clean Cities</p>
          </h2>
          
          <p className="text-xl text-text-secondary mb-8 text-white">
            WasteWise India connects citizens, workers, and communities in a coordinated effort 
            to transform waste management across the country.
          </p>
        </div>

        {/* Interactive Workflow */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Step Navigation */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-12 space-y-4 sm:space-y-0 sm:space-x-8">
            {steps?.map((step, index) => (
              <button
                key={step?.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? `${step?.bgColor} ${step?.color} border-2 ${step?.borderColor}`
                    : 'bg-gray-100 text-text-secondary border-2 border-transparent hover:bg-gray-200'
                }`}
              >
                <Icon name={step?.icon} size={20} className="mr-3" />
                <span className="font-medium">{step?.title}</span>
                {index < steps?.length - 1 && (
                  <Icon name="ArrowRight" size={16} className="ml-4 hidden sm:block" />
                )}
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-elevation border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Step Illustration */}
              <div className={`${steps?.[activeStep]?.bgColor} rounded-xl p-8 text-center`}>
                <Icon 
                  name={steps?.[activeStep]?.icon} 
                  size={80} 
                  className={`${steps?.[activeStep]?.color} mx-auto mb-6`} 
                />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {steps?.[activeStep]?.title}
                </h3>
                <p className="text-text-secondary">
                  {steps?.[activeStep]?.description}
                </p>
              </div>

              {/* Step Details */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">How it works:</h4>
                <div className="space-y-4">
                  {steps?.[activeStep]?.details?.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-6 h-6 ${steps?.[activeStep]?.bgColor} ${steps?.[activeStep]?.color} rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0`}>
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-text-secondary">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Workflow */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12 text-white">
            Complete Workflow Visualization
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps?.map((step, index) => (
              <div key={step?.id} className="relative">
                <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card border-2 ${
                  activeStep === index ? step?.borderColor : 'border-gray-100'
                } transition-all duration-300 hover:shadow-elevation`}>
                  <div className={`w-12 h-12 ${step?.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name={step?.icon} size={24} className={step?.color} />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {step?.title}
                  </h4>
                  
                  <p className="text-sm text-text-secondary mb-4">
                    {step?.description}
                  </p>
                  
                  <div className="text-xs text-text-secondary">
                    Step {index + 1} of {steps?.length}
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps?.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto shadow-elevation">
            <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to be part of the solution?
            </h3>
            <p className="text-text-secondary mb-6">
              Join thousands of Indians who are already making their cities cleaner through coordinated action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-text-secondary">
                <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                <span>Immediate impact</span>
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                <span>Community recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverviewSection;