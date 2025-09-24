//src/pages/landing-page/cmponents/SuccessStoriesCarousel.jsx

import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const SuccessStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stories = [
    {
      id: 1,
      name: 'Anita Desai',
      location: 'Mumbai, Maharashtra',
      role: 'Community Leader',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      videoThumbnail: 'src/assets/images/landing/Society_s_Waste_Management_Transformation.mp4',
      quote: `Our housing society was struggling with overflowing garbage bins and irregular collection. After joining GreenTogether, we organized our community and now have a 95% waste segregation rate. We even won the 'Cleanest Society Award' from BMC!`,
      impact: {
        wasteReduced: '2.5 tonnes/month',
        recyclingRate: '95%',
        timeframe: '6 months'
      },
      language: 'Hindi',
      duration: '2:45'
    },
    {
      id: 2,
      name: 'Ravi Krishnan',
      location: 'Bangalore, Karnataka',
      role: 'Waste Collection Worker',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      videoThumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      quote: `Before GreenTogether, I used to struggle with unorganized routes and low pay. Now I get optimized routes, fair wages, and respect from the community. My monthly income increased by 40% and I feel proud of my work.`,
      impact: {
        incomeIncrease: '40%',
        efficiency: '+60%',
        communities: '25 served'
      },
      language: 'Kannada',
      duration: '3:12'
    },
    {
      id: 3,
      name: 'Dr. Priya Mehta',
      location: 'Delhi, NCR',
      role: 'Environmental Activist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      videoThumbnail: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop',
      quote: `As an environmental scientist, I was looking for practical solutions to Delhi's waste crisis. GreenTogether provided the perfect platform to coordinate citizen action. We've reduced our area's waste by 60% in just 8 months!`,
      impact: {
        wasteReduced: '60%',citizensEngaged: '500+',areasCovered: '12 sectors'
      },
      language: 'English',duration: '4:20'
    },
    {
      id: 4,
      name: 'Suresh Patel',location: 'Ahmedabad, Gujarat',role: 'Shop Owner',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',videoThumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      quote: `My shop area was always dirty with scattered waste. Through GreenTogether, I connected with other shop owners and we created a clean business district. Customer footfall increased by 30% after our area became cleaner!`,
      impact: {
        businessGrowth: '30%',shopsInvolved: '45',cleanlinessScore: '9.2/10'
      },
      language: 'Gujarati',duration: '2:58'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentStory((prev) => (prev + 1) % stories?.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, stories?.length]);

  const handlePlayVideo = (storyId) => {
    setIsPlaying(true);
    console.log(`Playing video for story ${storyId}`);
    // In a real app, this would open a video player
    setTimeout(() => setIsPlaying(false), 3000); // Simulate video end
  };

  const handlePrevious = () => {
    setCurrentStory((prev) => (prev - 1 + stories?.length) % stories?.length);
  };

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % stories?.length);
  };

  const currentStoryData = stories?.[currentStory];

  return (
    <section className="py-16 sm:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm text-blue-800 rounded-full px-4 py-2 mb-6">
            <Icon name="Play" size={16} className="mr-2" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-white">
            Real People, <span className="text-primary text-white">Real Impact</span>
          </h2>
          
          <p className="text-xl text-text-secondary text-white">
            Hear from citizens, workers, and community leaders who are transforming 
            their neighborhoods with WasteWise India.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-elevation overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video Thumbnail */}
              <div className="relative">
                <Image
                  src={currentStoryData?.videoThumbnail}
                  alt={`${currentStoryData?.name} success story`}
                  className="w-full h-64 lg:h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/30"></div>
                  <button
                    onClick={() => handlePlayVideo(currentStoryData?.id)}
                    className="relative w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 group"
                    disabled={isPlaying}
                  >
                    <Icon 
                      name={isPlaying ? "Loader2" : "Play"} 
                      size={24} 
                      className={`text-primary ml-1 ${isPlaying ? 'animate-spin' : 'group-hover:scale-110 transition-transform'}`} 
                    />
                  </button>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Icon name="Globe" size={14} className="mr-2" />
                        <span>{currentStoryData?.language} subtitles</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-2" />
                        <span>{currentStoryData?.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-8">
                {/* User Info */}
                <div className="flex items-center mb-6">
                  <Image
                    src={currentStoryData?.avatar}
                    alt={currentStoryData?.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {currentStoryData?.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {currentStoryData?.role}
                    </p>
                    <div className="flex items-center text-sm text-text-secondary mt-1">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {currentStoryData?.location}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary mb-6 italic">
                  "{currentStoryData?.quote}"
                </blockquote>

                {/* Impact Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(currentStoryData?.impact)?.map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-primary mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-text-secondary capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:shadow-elevation transition-all duration-300"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-secondary" />
          </button>

          {/* Story Indicators */}
          <div className="flex space-x-2">
            {stories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:shadow-elevation transition-all duration-300"
          >
            <Icon name="ChevronRight" size={20} className="text-text-secondary" />
          </button>
        </div>

        {/* Story Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stories?.map((story, index) => (
            <button
              key={story?.id}
              onClick={() => setCurrentStory(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentStory 
                  ? 'ring-2 ring-primary shadow-elevation' 
                  : 'hover:shadow-card'
              }`}
            >
              <Image
                src={story?.avatar}
                alt={story?.name}
                className="w-full h-20 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white text-xs font-medium truncate">
                  {story?.name}
                </div>
                <div className="text-white/80 text-xs truncate">
                  {story?.location?.split(',')?.[0]}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Your Success Story Awaits
            </h3>
            <p className="text-text-secondary mb-6">
              Join these inspiring individuals and start creating positive change in your community today.
            </p>
            <div className="flex items-center justify-center text-sm text-text-secondary">
              <Icon name="Video" size={16} className="text-primary mr-2" />
              <span>Share your story and inspire others</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;