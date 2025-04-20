import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.setProperty('--x', `${x * 20}px`);
      containerRef.current.style.setProperty('--y', `${y * 20}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative py-20 overflow-hidden"
      style={{ '--x': '0px', '--y': '0px' } as React.CSSProperties}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/40 to-gray-900 opacity-80"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC01aDR2MWgtNHYtMXptMC01aDR2MWgtNHYtMXpNMTQgMzRoNHYxaC00di0xem0wLTVoNHYxaC00di0xem0wLTVoNHYxaC00di0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Moving gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-3/4 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-purple-400 mb-4 tracking-widest uppercase text-sm font-medium">
            Graphic Designer & Video Editor
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transform transition-transform duration-500 hover:scale-[1.01]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400">
              Siddharth Dobhal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Turning creative visions into stunning visual realities with 3+ years of experience in design and editing.
          </p>
          
          <div className="flex gap-4 mb-10">
            <a 
              href="#portfolio" 
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/siddharthdobhal/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 hover:bg-purple-500 text-white rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/heysidio/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 hover:bg-purple-500 text-white rounded-full transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://github.com/siddharthdobhal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800 hover:bg-purple-500 text-white rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};