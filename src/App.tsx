import  { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Repository } from './components/Repository';
import { Features } from './components/Features';
import { Documentation } from './components/Documentation';
import { Team } from './components/Team';
import { Demo } from './components/Demo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorEffect } from './components/CursorEffect';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Once loading reaches 100%, set a timeout to hide the loader
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Page Loader */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center">
          <div className="w-24 h-24 relative mb-8 animate-pulse-glow">
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-rotate-slow"></div>
          </div>
          <h2 className="text-2xl font-bold text-gradient mb-4">AI Lecturer</h2>
          <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-slate-400 text-sm">{Math.round(loadingProgress)}%</p>
        </div>
      )}

      <div className={`min-h-screen text-slate-100 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ParticleBackground />
        <CursorEffect />
        <Header />
        <main>
          <Hero />
          <Repository />
          <Features />
          <Documentation />
          <Team />
          <Demo />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;