import React, { useEffect, useState } from 'react';
import { Video, MessageCircle,CheckCircle,Edit} from 'lucide-react';


interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-700 shadow-lg hover:shadow-indigo-900/20 hover:-translate-y-1 hover:border-indigo-500/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      title: "AI Video Lectures",
      description: "Produce professional lecture videos featuring well-designed slide presentations and natural-sounding voiceovers to enhance the learning experience.",
      icon: <Video size={24} className="text-indigo-400" />,
      delay: 300
    },
    {
      title: "Interactive Lecture Q&A",
      description: "A real-time Q&A assistant allows users to ask follow-up questions related to the lecture content.",
      icon: <MessageCircle size={24} className="text-indigo-400" />,
      delay: 500
    },
    {
      title: "Integrated Knowledge Check ",
      description: "A built-in quiz section automatically generated based on the lecture content to assess comprehension and reinforce key concepts.",
      icon: <Edit size={24} className="text-indigo-400" />      ,
      delay: 700
    },
    {
      title: "Instant Quiz Feedback",
      description: "After each answer submission, the system provides immediate feedback, displaying the correct answer along with a brief explanation to support learning.",
      icon: <CheckCircle size={24} className="text-indigo-400" />,
      delay: 700
    }
  ];

  return (
    <section 
      id="features" 
      className="py-20 bg-slate-900/50 relative"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-radial-gradient from-indigo-900/20 to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Powerful Features
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technologies to create comprehensive learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};