//src/pages/landing-page/cmponents/FooterSection.jsx

import React from 'react';
import Icon from 'components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    product: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Success Stories', href: '#success-stories' },
      { name: 'Mobile App', href: '#mobile-app' }
    ],
    community: [
      { name: 'Citizen Portal', href: '#citizen-portal' },
      { name: 'Worker Hub', href: '#worker-hub' },
      { name: 'Community Leaders', href: '#community-leaders' },
      { name: 'Volunteer Program', href: '#volunteer' },
      { name: 'Events', href: '#events' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Technical Support', href: '#tech-support' },
      { name: 'Training Resources', href: '#training' },
      { name: 'API Documentation', href: '#api-docs' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Blog', href: '#blog' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Data Protection', href: '#data-protection' },
      { name: 'Compliance', href: '#compliance' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/GreenTogether' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/GreenTogether.india' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/GreenTogether' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/GreenTogether' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/@GreenTogether' }
  ];

  const certifications = [
    { name: 'ISO 14001', description: 'Environmental Management' },
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'Swachh Bharat', description: 'Mission Partner' },
    { name: 'Digital India', description: 'Initiative Partner' }
  ];

  const contactInfo = {
    address: 'GreenTogether Pvt. Ltd.\n123 Faridpur\nDurgapur, West Bengal 713213',
    phone: '+91-85-1399-5642',
    email: 'hello@GreenTogether',
    support: 'support@GreenTogether'
  };

  const handleLinkClick = (href) => {
    console.log('Navigation to:', href);
  };

  const handleSocialClick = (platform, href) => {
    console.log(`Opening ${platform}:`, href);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <Icon name="Recycle" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold">GreenTogether </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering every Indian citizen to actively participate in keeping their cities clean 
              through accessible waste management solutions and community coordination.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <Icon name="MapPin" size={16} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {contactInfo?.address?.split('\n')?.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="text-primary mr-3" />
                <span className="text-sm text-gray-300">{contactInfo?.phone}</span>
              </div>
              
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="text-primary mr-3" />
                <span className="text-sm text-gray-300">{contactInfo?.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <button
                  key={social?.name}
                  onClick={() => handleSocialClick(social?.name, social?.href)}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks?.product?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Community</h3>
                <ul className="space-y-3">
                  {footerLinks?.community?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks?.support?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks?.company?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks?.legal?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Certifications & Compliance */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-sm font-semibold mb-4 lg:mb-2">Certifications & Compliance</h4>
              <div className="flex flex-wrap gap-4">
                {certifications?.map((cert) => (
                  <div key={cert?.name} className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                    <Icon name="Award" size={16} className="text-primary mr-2" />
                    <div>
                      <div className="text-xs font-medium">{cert?.name}</div>
                      <div className="text-xs text-gray-400">{cert?.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Download Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors duration-300">
                <Icon name="Smartphone" size={20} className="text-primary mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </button>
              
              <button className="flex items-center bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors duration-300">
                <Icon name="Smartphone" size={20} className="text-primary mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 sm:mb-0">
              © {currentYear} GreenTogether All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Icon name="Shield" size={14} className="text-green-500 mr-2" />
                <span>SSL Secured</span>
              </div>
              
              <div className="flex items-center">
                <Icon name="Globe" size={14} className="text-blue-500 mr-2" />
                <span>Made in India</span>
              </div>
              
              <div className="flex items-center">
                <Icon name="Heart" size={14} className="text-red-500 mr-2" />
                <span>For a Cleaner India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;