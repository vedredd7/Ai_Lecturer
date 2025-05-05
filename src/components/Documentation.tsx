import React, { useEffect, useState, useRef } from 'react';
import { BookText, Code, FileText } from 'lucide-react';

export const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'user', label: 'User Guide', icon: <BookText size={20} /> },
    { id: 'developer', label: 'Developer Guide', icon: <Code size={20} /> },
    { id: 'api', label: 'Final Report', icon: <FileText size={20} /> },
  ];

  return (
    <section 
      id="docs" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS02IDBoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDBoMnYyaC0ydi0yem0tNCAwaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">
            <span className="text-gradient">Documentation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
            Comprehensive guides and resources to help you get the most out of the AI Lecturer platform.
          </p>

          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-1 inline-flex shadow-lg shadow-black/5">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-md transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md'
                      : 'text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              {activeTab === 'user' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold text-white mb-4">User Guide</h3>
                  <p className="text-slate-300 mb-4">
                    Learn how to use all the features of AI Lecturer to create engaging educational content for your students.
                  </p>
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-indigo-500/30 transition-colors">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mt-0.5 text-white font-semibold text-sm">1</div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Getting Started</h4>
                        <p className="text-slate-400">Create an account and configure your preferences</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-indigo-500/30 transition-colors">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mt-0.5 text-white font-semibold text-sm">2</div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Creating Your First Lecture Video</h4>
                        <p className="text-slate-400"> Input a topic and generate lecture video</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-indigo-500/30 transition-colors">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mt-0.5 text-white font-semibold text-sm">3</div>
                      <div>
                        <h4 className="text-lg font-medium text-white">ChatBot and Quiz </h4>
                        <p className="text-slate-400">Chat with Ai and Complete Quiz</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a 
                      href="https://drive.google.com/file/d/1Lc5nUs7RnNiHrCMvNBg_-rRwFuue813L/view?usp=drive_link" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-indigo-700/20"
                    >
                      <BookText size={18} />
                      <span>Read Full User Guide</span>
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'developer' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold text-white mb-4">Developer Guide</h3>
                  <p className="text-slate-300 mb-4">
                    Technical documentation for developers who want to extend or integrate with AI Lecturer.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 mb-6 border border-slate-700/50 overflow-hidden group hover:border-indigo-500/30 transition-colors">
                    <div className="flex items-center text-xs text-slate-500 mb-2">
                      <div className="flex gap-1.5 mr-auto">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <span>script.js</span>
                    </div>
                    <pre className="text-indigo-300 overflow-x-auto scrollbar-hide text-sm">
                      <code>{`//1. Clone the repository using Git
git clone https://github.com/UNH-TCOE-ECECS/S25-S1-Team3.git

//2. Setting Up a Virtual Environment (Python)

python -m venv venv

//On Windows
venv\Scripts\activate
//On macOS/Linux
source venv/bin/activate

//3. Installing Python Dependencies
pip install -r requirements.txt

//4. Running the Project
python ai_lecturer.py
 
 `}</code>
                    </pre>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://drive.google.com/file/d/1llyO9voD93iACALSlLjxG2KO-lBu412u/view?usp=drive_link" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-indigo-700/20"
                    >
                      <Code size={18} />
                      <span>Explore Developer Docs</span>
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'api' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-semibold text-white mb-4">Final Report</h3>
                  <p className="text-slate-300 mb-4">
                  </p>
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-indigo-500/30 transition-colors">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mt-0.5 text-white font-semibold text-sm">1</div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Project Overview</h4>
                        <p className="text-slate-400">AI Lecturer automates the creation of lecture slides, narrated videos, and quizzes using AI, simplifying the content creation process for educators.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-indigo-500/30 transition-colors">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mt-0.5 text-white font-semibold text-sm">2</div>
                      <div>
                        <h4 className="text-lg font-medium text-white">System Architecture</h4>
                        <p className="text-slate-400"> The system generates structured content through GPT-4, converts it into slides with Reveal.js, narrates using gTTS, and creates videos with MoviePy, alongside quizzes and a GPT-4-powered chatbot.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-indigo-500/30 transition-colors">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mt-0.5 text-white font-semibold text-sm">3</div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Impact and Future Scope </h4>
                        <p className="text-slate-400">It reduces educators' workload, enhances student engagement, and has potential for LMS integration and future improvements like avatar-based narration.</p>
                      </div>
                    </li>
                  </ul>
                 
                  <div className="mt-6">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-indigo-700/20"
                    >
                      <FileText size={18} />
                      <span>View Complete Report</span>
                    </a>
                  </div>
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};