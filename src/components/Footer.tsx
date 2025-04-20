import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400">
              Siddharth Dobhal
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Graphic Designer & Video Editor based in Dehradun
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              &copy; {currentYear} All Rights Reserved. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Design & Development by Siddharth Dobhal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};