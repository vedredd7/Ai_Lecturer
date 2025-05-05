import React, { useEffect, useState, useRef } from 'react';
//import { ArrowRight, ArrowLeft } from "lucide-react";


export const Demo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoIndex] = useState(0);
//  const [videoIndex, setVideoIndex] = useState(0);

  const videoUrls = [
  "https://www.youtube.com/embed/CdkMWrpYWlA?rel=0&autoplay=0&mute=1"  ];

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

{/*  const handleNextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };
  
  const handlePrevVideo = () => {
    setVideoIndex((prevIndex) =>
      (prevIndex - 1 + videoUrls.length) % videoUrls.length
    );
  };
*/}
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
            className={`max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 transition-all duration-300 hover:shadow-indigo-900/20 ${
              isHovering ? 'ring-2 ring-indigo-400/60' : ''
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src={videoUrls[videoIndex]}
                title="AI Lecturer Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
             {/*} <button
  onClick={handlePrevVideo}
  className="absolute bottom-8 left-4 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition shadow-lg"
  aria-label="Previous video"
>
 <ArrowLeft className="w-5 h-5" />
</button>

<button
  onClick={handleNextVideo}
  className="absolute bottom-8 right-4 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition shadow-lg"
  aria-label="Next video"
>
  <ArrowRight className="w-5 h-5" />
</button>
          */}
            </div>
          </div>

          
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              This demo showcases our AI-powered lecture generation capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
