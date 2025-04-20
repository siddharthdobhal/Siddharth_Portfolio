import React, { useEffect, useRef } from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const timelineData: TimelineItem[] = [
    {
      type: 'work',
      title: 'EDP (Electronic Data Processing)',
      company: 'NEXA & Taniya Motors',
      location: 'Mohabewala',
      date: 'Feb 2025 - Present',
      description: [
        'Managing digital operations, system data handling, and internal support tasks.',
        'Assisting with backend processes and ensuring smooth technical workflow.'
      ]
    },
    {
      type: 'work',
      title: 'Senior Sales Officer',
      company: 'HDB Financial Services (Automobile Financing)',
      location: 'Dehradun',
      date: '2023 - 2024',
      description: [
        'Managed loan processing for vehicles, customer handling, and financial documentation.',
        'Worked closely with automobile dealerships to drive sales through financing solutions.'
      ]
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'Prodigy Infotech',
      location: 'Remote',
      date: '1 Month | 2024',
      description: [
        'Worked on front-end web projects using HTML, CSS, and JavaScript.',
        'Built mini projects and practiced real-world implementation in a team environment.'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology (BSc IT)',
      company: 'Uttaranchal University',
      location: 'Dehradun',
      date: '2019 - 2022',
      description: [
        'Completed degree with focus on programming, web development, and digital media.',
        'Developed technical skills in various programming languages and design software.'
      ]
    }
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
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/90 relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative z-10 animate-on-scroll opacity-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-gray-800 rounded-lg p-6 shadow-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl ${index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'} relative`}>
                      {/* Color accent based on type */}
                      <div className={`absolute inset-0 rounded-lg ${item.type === 'work' ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20' : 'bg-gradient-to-r from-blue-500/20 to-teal-400/20'} opacity-50`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className={`rounded-full p-2 mr-2 ${item.type === 'work' ? 'bg-purple-500/20 text-purple-400' : 'bg-teal-500/20 text-teal-400'}`}>
                            {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar size={12} className="mr-1" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-2 ${item.type === 'work' ? 'text-purple-400' : 'text-teal-400'}`}>
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-300 font-medium mb-1">{item.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{item.location}</p>
                        
                        <ul className="space-y-2 text-gray-300">
                          {item.description.map((desc, i) => (
                            <li key={i} className="flex">
                              <span className="mr-2">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-6 md:mt-0">
                    <div className={`w-6 h-6 rounded-full border-4 border-gray-900 z-10 ${item.type === 'work' ? 'bg-purple-500' : 'bg-teal-400'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};