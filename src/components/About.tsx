import React, { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, MapPin, Phone, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900/80 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl border-4 border-gray-800">
                <img 
                  src="https://i.imgur.com/3Ot9Kqo.png" 
                  alt="Siddharth Dobhal" 
                  className="min-w-10 h-full object-cover object-center"
                />
              </div>
              
              {/* Decoration elements */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg -z-10"></div>
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400">Hi, I'm Siddharth</h3>
            
            <p className="text-gray-300 mb-6">
              Creative video editor and graphic designer with 3+ years of freelance experience. Passionate about visual storytelling, photo editing, and marketing design.
            </p>
            
            <p className="text-gray-300 mb-6">
              Tech-savvy with an IT background and a strong eye for detail. Skilled in delivering engaging content for social media, branding, and promotional use.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-3 text-purple-400" />
                <span>3+ Years of Professional Experience</span>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-3 text-purple-400" />
                <span>BSc in Information Technology (2019-2022)</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Dehradun, Uttarakhand</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>+91 6395691381</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <span>dobhal.sidharth770@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/src/components/Siddharth Resume GV.pdf" 
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};