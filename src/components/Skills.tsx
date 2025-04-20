import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface ToolSkill {
  name: string;
  logo: string;
  link: string;
}

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const designSkills: Skill[] = [
    { name: 'Graphic Design', level: 90, icon: '🎨' },
    { name: 'Video Editing', level: 85, icon: '🎬' },
    { name: 'UI/UX Design', level: 80, icon: '📱' },
    { name: 'Photo Retouching', level: 88, icon: '📷' },
    { name: 'Motion Graphics', level: 75, icon: '✨' },
    { name: 'Content Repurposing', level: 92, icon: '🔄' },
  ];

  // Software tools with official logos
  const tools: ToolSkill[] = [
    {
      name: 'Adobe Premiere Pro',
      logo: 'https://www.adobe.com/content/dam/cc/icons/premiere.svg',
      link: 'https://www.adobe.com/products/premiere.html'
    },
    {
      name: 'Adobe After Effects',
      logo: 'https://www.adobe.com/content/dam/cc/icons/aftereffects.svg',
      link: 'https://www.adobe.com/products/aftereffects.html'
    },
    {
      name: 'Adobe Photoshop',
      logo: 'https://www.adobe.com/content/dam/cc/icons/photoshop.svg',
      link: 'https://www.adobe.com/products/photoshop.html'
    },
    {
      name: 'Figma',
      logo: 'https://imgs.search.brave.com/Cw7Uw4d-7CL2cDKMniS2oWCf59xdnLFUi1BXIibyguY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMzL0ZpZ21hLWxv/Z28uc3Zn',
      link: 'https://www.figma.com'
    },
    {
      name: 'Canva',
      logo: 'https://static.canva.com/static/images/favicon.ico',
      link: 'https://www.canva.com'
    },
    {
      name: 'CapCut',
      logo: 'https://imgs.search.brave.com/0db7-3tnhJDuOZfcFmCXqSglpFbJoSxxCWqxNeOHQpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhkL2Y2/L2E1LzhkZjZhNWI5/MTliMGE5YjViYmMy/Y2Y2N2M4NDQ0YmIy/LmpwZw',
      link: 'https://www.capcut.com'
    }
  ];

  const languages: Skill[] = [
    { name: 'English', level: 90, icon: '🇬🇧' },
    { name: 'Hindi', level: 100, icon: '🇮🇳' },
  ];

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
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC01aDR2MWgtNHYtMXptMC01aDR2MWgtNHYtMXpNMTQgMzRoNHYxaC00di0xem0wLTVoNHYxaC00di0xem0wLTVoNHYxaC00di0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Design & Editing Skills
            </h3>
            
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <span className="mr-2 text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Tools & Software
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.a
                    key={index}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800/60"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.img 
                      src={tool.logo}
                      alt={tool.name}
                      className="w-12 h-12 mx-auto mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <div className="text-sm">{tool.name}</div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Languages
              </h3>
              
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <span className="mr-2 text-xl">{language.icon}</span>
                        <span className="font-medium">{language.name}</span>
                      </div>
                      <span className="text-teal-400">{language.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${language.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};