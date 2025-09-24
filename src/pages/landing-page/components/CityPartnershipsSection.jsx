// //src/pages/landing-page/cmponents/CityPartnershipsSection.jsx

// import React, { useState } from 'react';
// import Icon from 'components/AppIcon';
// import Image from 'components/AppImage';

// const CityPartnershipsSection = () => {
//   const [hoveredPartner, setHoveredPartner] = useState(null);

//   const partnerships = [
//     {
//       id: 'bmc',
//       name: 'Brihanmumbai Municipal Corporation',
//       city: 'Mumbai',
//       state: 'Maharashtra',
//       logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=120&h=80&fit=crop',
//       collaboration: 'Smart Waste Collection Routes',
//       impact: '2.5L tonnes processed',
//       startDate: '2023',
//       details: {
//         projects: ['Digital waste tracking', 'Citizen complaint system', 'Worker coordination platform'],
//         achievements: ['40% reduction in collection time', '85% citizen satisfaction', '60% cost optimization'],
//         population: '12.4 million'
//       }
//     },
//     {
//       id: 'ndmc',
//       name: 'New Delhi Municipal Council',
//       city: 'New Delhi',
//       state: 'Delhi',
//       logo: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=120&h=80&fit=crop',
//       collaboration: 'Integrated Waste Management',
//       impact: '1.8L tonnes processed',
//       startDate: '2023',
//       details: {
//         projects: ['E-waste collection drives', 'Community segregation programs', 'Real-time monitoring'],
//         achievements: ['50% increase in recycling', '70% reduction in complaints', '35% operational efficiency'],
//         population: '0.3 million'
//       }
//     },
//     {
//       id: 'bbmp',
//       name: 'Bruhat Bengaluru Mahanagara Palike',
//       city: 'Bangalore',
//       state: 'Karnataka',
//       logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop',
//       collaboration: 'Tech-Enabled Waste Solutions',
//       impact: '1.2L tonnes processed',
//       startDate: '2024',
//       details: {
//         projects: ['IoT-enabled bins', 'Route optimization', 'Citizen engagement app'],
//         achievements: ['30% faster collection', '90% bin utilization', '45% cost savings'],
//         population: '8.4 million'
//       }
//     },
//     {
//       id: 'cmc',
//       name: 'Chennai Municipal Corporation',
//       city: 'Chennai',
//       state: 'Tamil Nadu',
//       logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&h=80&fit=crop',
//       collaboration: 'Coastal Waste Management',
//       impact: '95K tonnes processed',
//       startDate: '2024',
//       details: {
//         projects: ['Beach cleanup coordination', 'Plastic waste reduction', 'Community awareness'],
//         achievements: ['25% plastic reduction', '80% beach cleanliness', '55% community participation'],
//         population: '4.6 million'
//       }
//     },
//     {
//       id: 'kmc',
//       name: 'Kolkata Municipal Corporation',
//       city: 'Kolkata',
//       state: 'West Bengal',
//       logo: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=120&h=80&fit=crop',
//       collaboration: 'Heritage City Clean Initiative',
//       impact: '78K tonnes processed',
//       startDate: '2024',
//       details: {
//         projects: ['Heritage area cleaning', 'Festival waste management', 'Cultural site maintenance'],
//         achievements: ['60% heritage site cleanliness', '75% festival waste reduction', '40% tourist satisfaction'],
//         population: '4.5 million'
//       }
//     },
//     {
//       id: 'pmc',
//       name: 'Pune Municipal Corporation',
//       city: 'Pune',
//       state: 'Maharashtra',
//       logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=80&fit=crop',
//       collaboration: 'Smart City Waste Initiative',
//       impact: '65K tonnes processed',
//       startDate: '2024',
//       details: {
//         projects: ['Smart bin networks', 'University area cleaning', 'IT corridor maintenance'],
//         achievements: ['35% efficiency improvement', '80% smart bin adoption', '50% complaint reduction'],
//         population: '3.1 million'
//       }
//     }
//   ];

//   const handlePartnerHover = (partnerId) => {
//     setHoveredPartner(partnerId);
//   };

//   const handlePartnerLeave = () => {
//     setHoveredPartner(null);
//   };

//   const totalImpact = partnerships?.reduce((sum, partner) => {
//     const impact = parseFloat(partner?.impact?.replace(/[^\d.]/g, ''));
//     const multiplier = partner?.impact?.includes('L') ? 100000 : 1000;
//     return sum + (impact * multiplier);
//   }, 0);

//   return (
//     <section id="communities" className="relative py-16 sm:py-24 bg-cover bg-center" 
//     style={{ backgroundImage: "url('/assets/images/landing/bg2.png')" }}>
//       <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
//             <Icon name="Handshake" size={16} className="mr-2" />
//             <span className="text-sm font-medium">Government Partnerships</span>
//           </div>
          
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Trusted by <span className="text-primary">Major Indian Cities</span>
//           </h2>
          
//           <p className="text-xl text-text-secondary mb-8">
//             GreenTogether partners with municipal corporations across the country 
//             to create scalable, sustainable waste management solutions.
//           </p>

//           {/* Overall Impact Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
//             <div className="text-center p-4 bg-white rounded-lg shadow-card">
//               <div className="text-2xl font-bold text-primary mb-1">
//                 {partnerships?.length}
//               </div>
//               <div className="text-sm text-text-secondary">City Partnerships</div>
//             </div>
//             <div className="text-center p-4 bg-white rounded-lg shadow-card">
//               <div className="text-2xl font-bold text-secondary mb-1">
//                 {(totalImpact / 100000)?.toFixed(1)}L+
//               </div>
//               <div className="text-sm text-text-secondary">Tonnes Processed</div>
//             </div>
//             <div className="text-center p-4 bg-white rounded-lg shadow-card">
//               <div className="text-2xl font-bold text-accent mb-1">
//                 33M+
//               </div>
//               <div className="text-sm text-text-secondary">Citizens Served</div>
//             </div>
//           </div>
//         </div>

//         {/* Partnership Logos Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
//           {partnerships?.map((partner) => (
//             <div
//               key={partner?.id}
//               className="group cursor-pointer"
//               onMouseEnter={() => handlePartnerHover(partner?.id)}
//               onMouseLeave={handlePartnerLeave}
//             >
//               <div className={`bg-white rounded-xl p-6 shadow-card border-2 transition-all duration-300 ${
//                 hoveredPartner === partner?.id 
//                   ? 'border-primary shadow-elevation scale-105' 
//                   : 'border-gray-100 hover:border-gray-200 hover:shadow-elevation'
//               }`}>
//                 <div className="text-center">
//                   <Image
//                     src={partner?.logo}
//                     alt={`${partner?.name} logo`}
//                     className="w-16 h-12 object-cover rounded-lg mx-auto mb-3"
//                   />
//                   <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
//                     {partner?.city}
//                   </h3>
//                   <p className="text-xs text-text-secondary">
//                     {partner?.state}
//                   </p>
//                   <div className="mt-2 text-xs text-primary font-medium">
//                     Since {partner?.startDate}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Detailed Partnership Info */}
//         {hoveredPartner && (
//           <div className="max-w-4xl mx-auto mb-16">
//             {partnerships?.filter(partner => partner?.id === hoveredPartner)?.map(partner => (
//                 <div 
//                   key={partner?.id} 
//                   className="bg-white rounded-2xl p-8 shadow-elevation border border-primary/20 animate-in slide-in-from-bottom-4 duration-300"
//                 >
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Partnership Overview */}
//                     <div>
//                       <div className="flex items-center mb-4">
//                         <Image
//                           src={partner?.logo}
//                           alt={`${partner?.name} logo`}
//                           className="w-12 h-8 object-cover rounded mr-3"
//                         />
//                         <div>
//                           <h3 className="text-xl font-bold text-foreground">
//                             {partner?.name}
//                           </h3>
//                           <p className="text-text-secondary text-sm">
//                             {partner?.city}, {partner?.state}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="space-y-4">
//                         <div>
//                           <div className="text-sm text-text-secondary mb-1">Collaboration Focus</div>
//                           <div className="font-medium text-foreground">{partner?.collaboration}</div>
//                         </div>
                        
//                         <div>
//                           <div className="text-sm text-text-secondary mb-1">Total Impact</div>
//                           <div className="font-bold text-primary text-lg">{partner?.impact}</div>
//                         </div>
                        
//                         <div>
//                           <div className="text-sm text-text-secondary mb-1">Population Served</div>
//                           <div className="font-medium text-foreground">{partner?.details?.population}</div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Projects and Achievements */}
//                     <div>
//                       <div className="mb-6">
//                         <h4 className="text-lg font-semibold text-foreground mb-3">Key Projects</h4>
//                         <div className="space-y-2">
//                           {partner?.details?.projects?.map((project, index) => (
//                             <div key={index} className="flex items-center">
//                               <Icon name="CheckCircle" size={16} className="text-primary mr-3 flex-shrink-0" />
//                               <span className="text-sm text-text-secondary">{project}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
//                         <div className="grid grid-cols-1 gap-3">
//                           {partner?.details?.achievements?.map((achievement, index) => (
//                             <div key={index} className="bg-green-50 rounded-lg p-3">
//                               <div className="flex items-center">
//                                 <Icon name="TrendingUp" size={16} className="text-green-600 mr-2" />
//                                 <span className="text-sm font-medium text-foreground">{achievement}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         )}

//         {/* Partnership Benefits */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <h3 className="text-2xl font-bold text-center text-foreground mb-12">
//             Why Cities Choose GreenTogether
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6 bg-white rounded-xl shadow-card">
//               <Icon name="Zap" size={48} className="text-yellow-500 mx-auto mb-4" />
//               <h4 className="text-lg font-semibold text-foreground mb-3">Rapid Implementation</h4>
//               <p className="text-text-secondary text-sm">
//                 Deploy comprehensive waste management solutions in under 30 days with minimal infrastructure changes.
//               </p>
//             </div>
            
//             <div className="text-center p-6 bg-white rounded-xl shadow-card">
//               <Icon name="DollarSign" size={48} className="text-green-500 mx-auto mb-4" />
//               <h4 className="text-lg font-semibold text-foreground mb-3">Cost Effective</h4>
//               <p className="text-text-secondary text-sm">
//                 Reduce operational costs by up to 40% through optimized routes and improved efficiency.
//               </p>
//             </div>
            
//             <div className="text-center p-6 bg-white rounded-xl shadow-card">
//               <Icon name="BarChart3" size={48} className="text-blue-500 mx-auto mb-4" />
//               <h4 className="text-lg font-semibold text-foreground mb-3">Data-Driven Insights</h4>
//               <p className="text-text-secondary text-sm">
//                 Real-time analytics and reporting help make informed decisions for better waste management.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action for Cities */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-3xl mx-auto">
//             <Icon name="Building2" size={48} className="text-primary mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-foreground mb-4">
//               Is Your City Ready for Smart Waste Management?
//             </h3>
//             <p className="text-text-secondary mb-6">
//               Join the growing network of Indian cities transforming their waste management 
//               systems with GreenTogether's proven solutions.
//             </p>
            
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//               <div className="flex items-center justify-center text-sm text-text-secondary">
//                 <Icon name="Users" size={16} className="text-primary mr-2" />
//                 <span>Citizen engagement</span>
//               </div>
//               <div className="flex items-center justify-center text-sm text-text-secondary">
//                 <Icon name="Smartphone" size={16} className="text-primary mr-2" />
//                 <span>Digital solutions</span>
//               </div>
//               <div className="flex items-center justify-center text-sm text-text-secondary">
//                 <Icon name="Award" size={16} className="text-primary mr-2" />
//                 <span>Proven results</span>
//               </div>
//             </div>
            
//             <div className="text-sm text-text-secondary">
//               Contact our municipal partnership team to learn more
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CityPartnershipsSection;

// src/pages/landing-page/components/RegistrationPreviewSection.jsx
import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

const RegistrationPreviewSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    location: '',
    preferences: []
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(120); // seconds

  const steps = [
    {
      id: 1,
      title: 'Phone Verification',
      description: 'Verify your mobile number with OTP',
      icon: 'Smartphone',
      duration: 30
    },
    {
      id: 2,
      title: 'Location Selection',
      description: 'Set your neighborhood location',
      icon: 'MapPin',
      duration: 45
    },
    {
      id: 3,
      title: 'Preferences',
      description: 'Choose your involvement level',
      icon: 'Settings',
      duration: 45
    }
  ];

  const preferences = [
    {
      id: 'reporter',
      title: 'Waste Reporter',
      description: 'Report waste issues in your area',
      icon: 'Camera',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'volunteer',
      title: 'Community Volunteer',
      description: 'Participate in cleanup drives',
      icon: 'Users',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'advocate',
      title: 'Environmental Advocate',
      description: 'Spread awareness and educate others',
      icon: 'Megaphone',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'monitor',
      title: 'Progress Monitor',
      description: 'Track and celebrate improvements',
      icon: 'BarChart3',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  useEffect(() => {
    if (estimatedTime > 0) {
      const timer = setTimeout(() => setEstimatedTime(estimatedTime - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [estimatedTime]);

  const handlePhoneSubmit = () => {
    if (formData?.phone?.length === 10) {
      setIsOtpSent(true);
      console.log('OTP sent to:', formData?.phone);
    }
  };

  const handleOtpVerify = () => {
    if (formData?.otp?.length === 6) {
      setCurrentStep(2);
      console.log('OTP verified');
    }
  };

  const handleLocationDetect = () => {
    setFormData({ ...formData, location: 'Koramangala, Bangalore, Karnataka' });
    setTimeout(() => setCurrentStep(3), 1000);
  };

  const handlePreferenceToggle = (prefId) => {
    const newPreferences = formData?.preferences?.includes(prefId)
      ? formData?.preferences?.filter(p => p !== prefId)
      : [...formData?.preferences, prefId];
    setFormData({ ...formData, preferences: newPreferences });
  };

  const handleComplete = () => {
    console.log('Registration completed:', formData);
    alert('Registration completed! Welcome to WasteWise India community.');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  return (
    // 🔥 changed: make section transparent so landing slideshow shows through
    <section className="py-16 sm:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔥 changed: header pill translucent to preserve BG visibility */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm text-green-800 rounded-full px-4 py-2 mb-6">
            <Icon name="UserPlus" size={16} className="mr-2" />
            <span className="text-sm font-medium">Quick Registration</span>
          </div>

          {/* 🔥 changed: heading color light for background contrast */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join in Just <span className="text-primary">3 Simple Steps</span>
          </h2>

          <p className="text-xl text-gray-200 mb-8">
            Get started with GreenTogether in under 2 minutes. 
            No lengthy forms, just quick verification and you're ready to make an impact.
          </p>

          {/* 🔥 changed: time pill translucent */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-card border border-green-100">
            <Icon name="Clock" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">
              Estimated completion time: {formatTime(estimatedTime)}
            </span>
          </div>
        </div>

        {/* Registration Process Preview */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps?.map((step, index) => (
              <React.Fragment key={step?.id}>
                <div className="flex flex-col items-center">
                  {/* 🔥 changed: keep active styling but ensure contrast on BG */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step?.id 
                      ? 'bg-primary border-primary text-white' 
                      : currentStep === step?.id 
                        ? 'bg-white/80 border-primary text-primary' 
                        : 'bg-white/60 border-gray-300 text-gray-500'
                  }`}>
                    {currentStep > step?.id ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <Icon name={step?.icon} size={20} />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${
                      currentStep >= step?.id ? 'text-primary' : 'text-gray-300'
                    }`}>
                      {step?.title}
                    </div>
                    <div className="text-xs text-gray-300 hidden sm:block">
                      ~{step?.duration}s
                    </div>
                  </div>
                </div>
                
                {index < steps?.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 transition-all duration-300 ${currentStep > step?.id ? 'bg-primary' : 'bg-gray-300'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 🔥 changed: form container to translucent (glass) so BG shows */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elevation p-8 border border-gray-100">
            {/* Step 1: Phone Verification */}
            {currentStep === 1 && (
              <div className="text-center">
                <Icon name="Smartphone" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Verify Your Phone Number
                </h3>
                <p className="text-text-secondary mb-8">
                  We'll send you a secure OTP to verify your mobile number
                </p>

                <div className="max-w-md mx-auto space-y-4">
                  <Input
                    label="Mobile Number"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={formData?.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
                    className="text-center"
                  />

                  {!isOtpSent ? (
                    <Button
                      variant="default"
                      fullWidth
                      onClick={handlePhoneSubmit}
                      disabled={formData?.phone?.length !== 10}
                      iconName="Send"
                      iconPosition="right"
                    >
                      Send OTP
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center text-green-800">
                          <Icon name="CheckCircle" size={16} className="mr-2" />
                          <span className="text-sm">OTP sent to +91 {formData?.phone}</span>
                        </div>
                      </div>

                      <Input
                        label="Enter OTP"
                        type="text"
                        placeholder="6-digit OTP"
                        value={formData?.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e?.target?.value })}
                        className="text-center"
                      />

                      <Button
                        variant="default"
                        fullWidth
                        onClick={handleOtpVerify}
                        disabled={formData?.otp?.length !== 6}
                        iconName="Shield"
                        iconPosition="right"
                      >
                        Verify OTP
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Location Selection */}
            {currentStep === 2 && (
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Set Your Location
                </h3>
                <p className="text-text-secondary mb-8">
                  Help us connect you with your local community and waste management services
                </p>

                <div className="max-w-md mx-auto space-y-4">
                  {!formData?.location ? (
                    <div className="space-y-4">
                      <Button
                        variant="default"
                        fullWidth
                        onClick={handleLocationDetect}
                        iconName="Navigation"
                        iconPosition="left"
                      >
                        Auto-Detect Location
                      </Button>
                      
                      <div className="text-sm text-text-secondary">or</div>
                      
                      <Input
                        label="Enter Location Manually"
                        type="text"
                        placeholder="Area, City, State"
                        value={formData?.location}
                        onChange={(e) => setFormData({ ...formData, location: e?.target?.value })}
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center text-green-800">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          <span className="text-sm">{formData?.location}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-text-secondary">
                        Location detected successfully! Moving to next step...
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="text-center">
                <Icon name="Settings" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Choose Your Involvement
                </h3>
                <p className="text-text-secondary mb-8">
                  Select how you'd like to contribute to your community's cleanliness (you can change this later)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  {preferences?.map((pref) => (
                    <button
                      key={pref?.id}
                      onClick={() => handlePreferenceToggle(pref?.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        formData?.preferences?.includes(pref?.id)
                          ? 'border-primary bg-primary/5' :'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-10 h-10 ${pref?.bgColor} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                          <Icon name={pref?.icon} size={20} className={pref?.color} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {pref?.title}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {pref?.description}
                          </p>
                        </div>
                        {formData?.preferences?.includes(pref?.id) && (
                          <Icon name="CheckCircle" size={20} className="text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  onClick={handleComplete}
                  disabled={formData?.preferences?.length === 0}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="px-8"
                >
                  Complete Registration
                </Button>

                <div className="mt-4 text-sm text-text-secondary">
                  {formData?.preferences?.length} of {preferences?.length} preferences selected
                </div>
              </div>
            )}
          </div>

          {/* 🔥 changed: Benefits Reminder - translucent so BG shows */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-center text-foreground mb-6">
              What happens after registration?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Instant Access</h4>
                <p className="text-sm text-text-secondary">
                  Start reporting waste issues and tracking progress immediately
                </p>
              </div>
              
              <div className="text-center">
                <Icon name="Users" size={32} className="text-secondary mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Community Connection</h4>
                <p className="text-sm text-text-secondary">
                  Connect with neighbors and local waste management workers
                </p>
              </div>
              
              <div className="text-center">
                <Icon name="Award" size={32} className="text-accent mx-auto mb-3" />
                <h4 className="font-medium text-foreground mb-2">Recognition & Rewards</h4>
                <p className="text-sm text-text-secondary">
                  Earn points and recognition for your environmental contributions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPreviewSection;
