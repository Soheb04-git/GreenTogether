//src/pages/landing-page/cmponents/FinalConversionSection.jsx

import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { useNavigate } from "react-router-dom";


const FinalConversionSection = () => {
  const navigate = useNavigate();

  const [userLocation, setUserLocation] = useState('your area');
  const [nearbyRegistrations, setNearbyRegistrations] = useState(47);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    name: ''
  });
  const [urgencyTimer, setUrgencyTimer] = useState(24 * 60 * 60); // 24 hours in seconds

  // Mock location detection
  useEffect(() => {
    // Simulate location detection
    setTimeout(() => {
      setUserLocation('Koramangala, Bangalore');
    }, 2000);
  }, []);

  // Update nearby registrations counter
  useEffect(() => {
    const interval = setInterval(() => {
      setNearbyRegistrations(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Urgency timer countdown
  useEffect(() => {
    if (urgencyTimer > 0) {
      const timer = setTimeout(() => setUrgencyTimer(urgencyTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [urgencyTimer]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours?.toString()?.padStart(2, '0')}:${minutes?.toString()?.padStart(2, '0')}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handleRegistrationToggle = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  const handleQuickRegister = () => {
    if (formData?.phone?.length >= 10) {
      console.log('Quick registration:', formData);
      //alert('Registration successful! Welcome to WasteWise India community.');
       navigate('/register');
      // In real app, this would redirect to dashboard
    }
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // In real app, this would open login modal or redirect
  };

  const benefits = [
    {
      icon: 'Zap',
      title: 'Instant Impact',
      description: 'Start making a difference in your community immediately'
    },
    {
      icon: 'Users',
      title: 'Community Connection',
      description: 'Connect with neighbors working toward the same goals'
    },
    {
      icon: 'Award',
      title: 'Recognition',
      description: 'Earn points and badges for your environmental contributions'
    },
    {
      icon: 'BarChart3',
      title: 'Track Progress',
      description: 'See real-time improvements in your neighborhood'
    }
  ];

  const socialProof = [
    { metric: '50,000+', label: 'Active Citizens' },
    { metric: '127', label: 'Partner Cities' },
    { metric: '2.8M+', label: 'Kg Waste Processed' },
    { metric: '4.9/5', label: 'User Rating' }
  ];

//   return (
//     <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
//       </div>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Localized Urgency Banner */}
//         <div className="max-w-4xl mx-auto mb-12">
//           <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-xl p-6 text-center">
//             <div className="flex items-center justify-center mb-4">
//               <Icon name="MapPin" size={20} className="text-orange-600 mr-2" />
//               <span className="text-orange-800 font-medium">
//                 {nearbyRegistrations} neighbors in {userLocation} registered this week
//               </span>
//             </div>
            
//             <div className="flex items-center justify-center text-sm text-orange-700">
//               <Icon name="Clock" size={16} className="mr-2" />
//               <span>Limited time community bonus expires in: {formatTime(urgencyTimer)}</span>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Content */}
//             <div>
//               <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
//                 <Icon name="Sparkles" size={16} className="mr-2" />
//                 <span className="text-sm font-medium">Join the Movement</span>
//               </div>

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//                 Your City Needs You.{' '}
//                 <span className="text-primary">Join Today.</span>
//               </h2>

//               <p className="text-xl text-text-secondary mb-8">
//                 Be part of India's largest community-driven waste management revolution. 
//                 Every action counts, every citizen matters.
//               </p>

//               {/* Social Proof Metrics */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
//                 {socialProof?.map((item, index) => (
//                   <div key={index} className="text-center p-3 bg-white rounded-lg shadow-card">
//                     <div className="text-lg font-bold text-primary mb-1">{item?.metric}</div>
//                     <div className="text-xs text-text-secondary">{item?.label}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Key Benefits */}
//               <div className="space-y-4 mb-8">
//                 {benefits?.map((benefit, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                       <Icon name={benefit?.icon} size={20} className="text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-foreground mb-1">{benefit?.title}</h3>
//                       <p className="text-sm text-text-secondary">{benefit?.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex flex-wrap items-center gap-4 mb-8">
//                 <div className="flex items-center text-sm text-text-secondary">
//                   <Icon name="Shield" size={16} className="text-green-600 mr-2" />
//                   <span>Government Approved</span>
//                 </div>
//                 <div className="flex items-center text-sm text-text-secondary">
//                   <Icon name="Lock" size={16} className="text-green-600 mr-2" />
//                   <span>100% Secure</span>
//                 </div>
//                 <div className="flex items-center text-sm text-text-secondary">
//                   <Icon name="Smartphone" size={16} className="text-green-600 mr-2" />
//                   <span>Free Forever</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Registration Form */}
//             <div>
//               <div className="bg-white rounded-2xl shadow-elevation p-8 border border-gray-100">
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-foreground mb-2">
//                     Start Making Impact Today
//                   </h3>
//                   <p className="text-text-secondary">
//                     Join thousands of citizens creating cleaner communities
//                   </p>
//                 </div>

//                 {!showRegistrationForm ? (
//                   /* CTA Buttons */
//                   (<div className="space-y-4">
//                     <Button
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       onClick={() => navigate('/register')}
//                       iconName="UserPlus"
//                       iconPosition="right"
//                       iconSize={20}
//                       className="text-lg font-semibold py-4"
//                     >
//                       Register as Citizen
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="lg"
//                       fullWidth
//                       onClick={() => navigate('/login')}
//                       iconName="LogIn"
//                       iconPosition="right"
//                       iconSize={20}
//                       className="text-lg font-semibold py-4"
//                     >
//                       Login to Continue
//                     </Button>
//                     <div className="text-center">
//                       <div className="text-sm text-text-secondary mb-4">
//                         Registration takes less than 2 minutes
//                       </div>
                      
//                       {/* Quick Stats */}
//                       <div className="flex items-center justify-center space-x-6 text-xs text-text-secondary">
//                         <div className="flex items-center">
//                           <Icon name="Clock" size={12} className="mr-1" />
//                           <span>2 min setup</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Icon name="Users" size={12} className="mr-1" />
//                           <span>50K+ members</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Icon name="Star" size={12} className="mr-1" />
//                           <span>4.9/5 rating</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>)
//                 ) : (
//                   /* Quick Registration Form */
//                   (<div className="space-y-4">
//                     <Input
//                       label="Full Name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       value={formData?.name}
//                       onChange={(e) => setFormData({ ...formData, name: e?.target?.value })}
//                       required
//                     />
//                     <Input
//                       label="Mobile Number"
//                       type="tel"
//                       placeholder="Enter 10-digit mobile number"
//                       value={formData?.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
//                       required
//                     />
//                     <Input
//                       label="Email Address (Optional)"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={formData?.email}
//                       onChange={(e) => setFormData({ ...formData, email: e?.target?.value })}
//                     />
//                     <Button
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       onClick={handleQuickRegister}
//                       disabled={!formData?.name || formData?.phone?.length < 10}
//                       iconName="ArrowRight"
//                       iconPosition="right"
//                       className="text-lg font-semibold py-4"
//                     >
//                       Complete Registration
//                     </Button>
//                     <button
//                       onClick={handleRegistrationToggle}
//                       className="w-full text-center text-sm text-text-secondary hover:text-foreground transition-colors"
//                     >
//                       ← Back to options
//                     </button>
//                     <div className="text-xs text-text-secondary text-center">
//                       By registering, you agree to our Terms of Service and Privacy Policy
//                     </div>
//                   </div>)
//                 )}

//                 {/* Bottom Trust Elements */}
//                 <div className="mt-6 pt-6 border-t border-gray-100">
//                   <div className="flex items-center justify-center space-x-4 text-xs text-text-secondary">
//                     <div className="flex items-center">
//                       <Icon name="Shield" size={12} className="text-green-600 mr-1" />
//                       <span>SSL Secured</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Icon name="Eye" size={12} className="text-green-600 mr-1" />
//                       <span>Privacy Protected</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Icon name="Smartphone" size={12} className="text-green-600 mr-1" />
//                       <span>Mobile Optimized</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Incentive */}
//               <div className="mt-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 text-center">
//                 <div className="flex items-center justify-center mb-2">
//                   <Icon name="Gift" size={16} className="text-primary mr-2" />
//                   <span className="text-sm font-medium text-foreground">Early Member Bonus</span>
//                 </div>
//                 <p className="text-xs text-text-secondary">
//                   Register this week and get 100 bonus community points + exclusive early access to new features
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Testimonial */}
//         <div className="max-w-4xl mx-auto mt-16 text-center">
//           <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
//             <div className="flex items-center justify-center mb-4">
//               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
//                 <Icon name="User" size={20} className="text-primary" />
//               </div>
//               <div>
//                 <div className="font-medium text-foreground">Rajesh Kumar</div>
//                 <div className="text-sm text-text-secondary">Mumbai, Maharashtra</div>
//               </div>
//             </div>
//             <blockquote className="text-text-secondary italic">
//               "Joining GreenTogether was the best decision I made for my community. 
//               In just 3 months, our society went from messy to one of the cleanest in the area. 
//               The app makes it so easy to coordinate with neighbors and track our progress."
//             </blockquote>
//             <div className="flex items-center justify-center mt-4">
//               {[1, 2, 3, 4, 5]?.map((star) => (
//                 <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FinalConversionSection;

return (
    // CHANGE ↓ removed background gradient, made transparent to show global landing bg
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* CHANGE ↓ removed local blurred circles (to avoid clashing with global background) */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Localized Urgency Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-xl p-6 text-center shadow-card">
            <div className="flex items-center justify-center mb-4">
              <Icon name="MapPin" size={20} className="text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">
                {nearbyRegistrations} neighbors in {userLocation} registered this week
              </span>
            </div>

            <div className="flex items-center justify-center text-sm text-orange-700">
              <Icon name="Clock" size={16} className="mr-2" />
              <span>Limited time community bonus expires in: {formatTime(urgencyTimer)}</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
                <Icon name="Sparkles" size={16} className="mr-2" />
                <span className="text-sm font-medium text-white">Join the Movement</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-white">
                Your City Needs You. <span className="text-primary text-gray-100">Join Today.</span>
              </h2>

              <p className="text-xl text-text-secondary mb-8 text-white">
                Be part of India's largest community-driven waste management revolution. Every action counts, every citizen matters.
              </p>

              {/* Social Proof */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {socialProof.map((item, index) => (
                  <div key={index} className="text-center p-3 bg-white/90 backdrop-blur rounded-lg shadow-card">
                    {/* CHANGE ↑ added /90 opacity + backdrop-blur so text stays visible on bg */}
                    <div className="text-lg font-bold text-primary mb-1 text-white">{item.metric}</div>
                    <div className="text-xs text-text-secondary text-white">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon name={benefit.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-white">{benefit.title}</h3>
                      <p className="text-sm text-text-secondary text-white">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center text-sm text-text-secondary">
                  <Icon name="Shield" size={16} className="text-green-600 mr-2" />
                  <span className="text-slate-200">Government Approved</span>
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <Icon name="Lock" size={16} className="text-green-600 mr-2" />
                  <span className="text-slate-200">100% Secure</span>
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <Icon name="Smartphone" size={16} className="text-green-600 mr-2" />
                  <span className="text-slate-200">Free Forever</span>
                </div>
              </div>
            </div>

            {/* Right Column - Registration */}
            <div>
              <div className="bg-white/95 backdrop-blur rounded-2xl shadow-elevation p-8 border border-gray-100">
                {/* CHANGE ↑ added /95 opacity + backdrop-blur for readability over bg */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Start Making Impact Today</h3>
                  <p className="text-text-secondary">Join thousands of citizens creating cleaner communities</p>
                </div>

                {!showRegistrationForm ? (
                  <div className="space-y-4">
                    <Button
                      variant="default"
                      size="lg"
                      fullWidth
                      onClick={() => navigate('/register')}
                      iconName="UserPlus"
                      iconPosition="right"
                      iconSize={20}
                      className="text-lg font-semibold py-4"
                    >
                      Register as Citizen
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      onClick={() => navigate('/login')}
                      iconName="LogIn"
                      iconPosition="right"
                      iconSize={20}
                      className="text-lg font-semibold py-4"
                    >
                      Login to Continue
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Mobile Number"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                    <Input
                      label="Email Address (Optional)"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Button
                      variant="default"
                      size="lg"
                      fullWidth
                      onClick={handleQuickRegister}
                      disabled={!formData.name || formData.phone.length < 10}
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="text-lg font-semibold py-4"
                    >
                      Complete Registration
                    </Button>
                    <button
                      onClick={handleRegistrationToggle}
                      className="w-full text-center text-sm text-text-secondary hover:text-foreground transition-colors"
                    >
                      ← Back to options
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-card border border-gray-100">
            {/* CHANGE ↑ made testimonial card semi-transparent to blend with bg */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Icon name="User" size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Rajesh Kumar</div>
                <div className="text-sm text-text-secondary">Mumbai, Maharashtra</div>
              </div>
            </div>
            <blockquote className="text-text-secondary italic">
              "Joining GreenTogether was the best decision I made for my community. In just 3 months, our society went from messy to one of the cleanest in the area. The app makes it so easy to coordinate with neighbors and track our progress."
            </blockquote>
            <div className="flex items-center justify-center mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalConversionSection;