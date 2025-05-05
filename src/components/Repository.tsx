import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

export const Repository: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('repo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="repo" 
      className="py-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-600">
            Open Source Code
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Explore our codebase, contribute to the project, and join our community of developers building the future of AI-powered education.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <a 
              href="https://github.com/UNH-TCOE-ECECS/S25-S1-Team3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-slate-800/60 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500/70 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-900/20"
            >
              <Github size={24} className="text-indigo-400 group-hover:text-indigo-300" />
              <div>
                <h3 className="text-lg font-medium text-white">GitHub Repository</h3>
                <p className="text-sm text-slate-400">Star and fork our project</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
