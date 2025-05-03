import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              <span className="text-gradient">AI Lecturer</span>
            </h3>
            <p className="mb-6 text-slate-400">
              Revolutionizing education through AI-generated lecture videos, dynamic slide presentations, and interactive quizzes for an engaging, self-paced learning experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-indigo-600 transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
             {/* <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-blue-600 transition-colors duration-300"
                aria-label="Linkedin"
              >
                <Linkedin size={20} />
  </a> */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-emerald-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#repo" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Repository</a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Features</a>
              </li>
              <li>
                <a href="#docs" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Documentation</a>
              </li>
              <li>
                <a href="#team" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Team</a>
              </li>
              <li>
                <a href="#demo" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Demo</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Tutorials</a>
              </li>
              <li>
                <a href="#repo" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">API Documentation</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 inline-block">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} AI Lecturer. All rights reserved.
          </p>
          <p className="flex items-center justify-center mt-2 text-sm text-slate-600">
            Made with 
            <Heart size={14} className="mx-1 text-red-500" fill="#ef4444" /> 
            by the AI Lecturer Team
          </p>
        </div>
      </div>
    </footer>
  );
};