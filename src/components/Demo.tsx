import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const Demo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('demo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Simulated video progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 0.5;
          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  // Handle play/pause
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  // Handle mute/unmute
  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <section 
      id="demo" 
      className="py-20 bg-slate-900/80 relative"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">
            See It In Action
          </h2>
          <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
            Watch our demo video to see how AI Lecturer transforms the educational experience.
          </p>

          {/* Video player */}
          <div 
            ref={videoContainerRef}
            className="max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 transition-all duration-300 hover:shadow-indigo-900/20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Video placeholder - in a real implementation, this would be an actual video */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-indigo-900 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              
              {/* Play button overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button 
                  onClick={togglePlayPause}
                  className="w-20 h-20 rounded-full bg-indigo-600/80 backdrop-blur-sm flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 hover:bg-indigo-500"
                >
                  {isPlaying ? <Pause size={36} /> : <Play size={36} className="ml-1" />}
                </button>
              </div>
              
              {/* Video controls */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent px-4 py-3 transition-transform duration-300 ${
                  isHovering ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                {/* Progress bar */}
                <div className="w-full h-1 bg-slate-700 rounded-full mb-3 cursor-pointer">
                  <div 
                    className="h-full bg-indigo-500 rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlayPause}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <span className="text-slate-300 text-sm">
                      {formatTime(progress * 0.6)} / {formatTime(60)}
                    </span>
                  </div>
                  <div>
                    <button className="text-white text-sm bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700 transition-colors">
                      HD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              This demo showcases our AI-powered lecture generation capabilities, including content creation, avatar animation, and student interaction features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to format time in MM:SS
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}