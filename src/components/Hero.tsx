import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phrases = ['Lecture Video Generation', 'Interactive Learning', 'AI-Powered Education'];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [typeIndex, setTypeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Typing animation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      if (typeIndex < phrases[phraseIndex].length) {
        timer = setTimeout(() => {
          setCurrentPhrase(phrases[phraseIndex].substring(0, typeIndex + 1));
          setTypeIndex(typeIndex + 1);
        }, 100);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (typeIndex > 0) {
        timer = setTimeout(() => {
          setCurrentPhrase(phrases[phraseIndex].substring(0, typeIndex - 1));
          setTypeIndex(typeIndex - 1);
        }, 50);
      } else {
        setIsTyping(true);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [typeIndex, isTyping, phraseIndex, phrases]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((elem, index) => {
        const speed = index % 3 === 0 ? 0.2 : index % 3 === 1 ? 0.1 : 0.15;
        const element = elem as HTMLElement;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to Repository section
  const scrollToRepo = () => {
    const repoSection = document.getElementById('repo');
    if (repoSection) {
      window.scrollTo({
        top: repoSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-indigo-900/80">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse-glow parallax"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse-glow parallax" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl animate-pulse-glow parallax" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 animate-float parallax" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 animate-float parallax" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[25%] left-[20%] w-20 h-20 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 animate-float parallax" style={{ animationDelay: '2.5s' }}></div>
        
        <div className="absolute top-[45%] left-[25%] w-32 h-1 bg-gradient-to-r from-indigo-500 to-transparent animate-pulse-glow parallax" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-[55%] right-[20%] w-32 h-1 bg-gradient-to-l from-blue-500 to-transparent animate-pulse-glow parallax" style={{ animationDelay: '1.3s' }}></div>
      </div>

      {/* Hero content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-4xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 animate-bounce-subtle">
            <div className="bg-slate-900 rounded-full px-4 py-1">
              <span className="text-sm font-medium text-white">Future of Education</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
          <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Lecturer
          </span>
        </h1>
        
        <div className="h-16 md:h-20 flex items-center justify-center mb-4">
          <p className="text-xl md:text-3xl text-blue-100 font-light">
            {currentPhrase}
            <span className="animate-blink">|</span>
          </p>
        </div>
        
        <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
          Transform education with AI-generated lectures, Interactive Lecture Q&A , Integrated Knowledge Check and Instant Quiz Feedback.
        </p>
        
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <a href="https://your-project-website.com" target="_blank" rel="noopener noreferrer">
          <button
            className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </a>
          <button 
            className="group relative px-8 py-3 bg-transparent border border-indigo-400 text-indigo-300 hover:text-white rounded-full font-medium transition-all duration-300 overflow-hidden"
          >
            <a href="#features" className="relative z-10">
              Learn More
            </a>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
        onClick={scrollToRepo}
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
          <ArrowDown size={24} className="text-blue-300" />
        </div>
      </div>
    </section>
  );
};