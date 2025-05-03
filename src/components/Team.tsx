import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);
    
    return () => clearTimeout(timer);
  }, [index]);

  // 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  
  const resetStyles = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  return (
    <div 
      ref={cardRef}
      className={`bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-all duration-500 hover:border-indigo-500/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetStyles();
      }}
    >
      <div className="p-6 relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
          <p className="text-indigo-300 mb-4">{member.role}</p>
          
          <div className="flex gap-3">
            {member.socials.github && (
              <a 
                href={member.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-700/80 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
              >
                <Github size={16} />
              </a>
            )}
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-700/80 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            )}
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-700/80 flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
              >
                <Twitter size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Anji Reddy Sattaru",
      role: "Lead Developer",
      socials: {
        github: "https://github.com/sanjire1",
        linkedin: "https://www.linkedin.com/in/sattaru-anji-reddy-516922161/",
      }
    },
    {
      name: "Venkata Susmitha Duggineni",
      role: "ML Engineer",
      socials: {
        github: "https://github.com/Susi0306",
        linkedin: "https://www.linkedin.com/in/venkata-susmitha-duggineni/"
      }
    },
    {
      name: "Srikanth Thota",
      role: "Lead Developer",
      socials: {
        github: "https://github.com/SrikanthThota159",
        linkedin: "https://www.linkedin.com/in/srikanth-thota-46141022a/"
      }
    },
    {
      name: "Suryateja Reddy Chitti",
      role: "ML Engineer",
      socials: {
        github: "https://github.com/Chittisurya",
        linkedin: "https://www.linkedin.com/in/suryateja-reddy-chitti-80a7621b7/"
      }
    },
    {
      name: "Mounika Aithagoni",
      role: "Lead Developer",
      socials: {
        github: "https://github.com/maith-2",
        linkedin: "https://www.linkedin.com/in/mounika-aithagoni-0b791a28b/"
      }
    },
    {
      name: "Vedanth Reddy Doddannagari",
      role: "ML Engineer",
      socials: {
        github: "https://github.com/vedanthreddy25",
        linkedin: "https://www.linkedin.com/in/vedanthreddy7/"
      }
    },
    {
      name: "Hima Sai Kuruba",
      role: "Web Developer",
      socials: {
        github: "https://github.com/himasaik004",
        linkedin: "https://www.linkedin.com/in/himasaikuruba/"
      }
    }
  ];

  return (
    <section 
      id="team" 
      className="py-20 relative overflow-hidden bg-mesh-gradient"
    >
      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Talented individuals who are passionate about revolutionizing education with AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};