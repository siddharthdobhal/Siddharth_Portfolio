import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  // Real projects with actual links
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Video",
      category: "graphic-design",
      image: "/src/components/Black White Grayscale Portfolio Presentation.jpg",
      link: "https://www.youtube.com/watch?v=ETCFgivjVSY",
      description: "Introduction of my Portfolio "
    },
    {
      id: 2,
      title: "Charted Account Subtitle X Thumbnail",
      category: "video-editing",
      image: "/src/components/CA.jpeg",
      link: "https://imgur.com/a/YMwXbL1",
      description: "Promotional video highlighting key features of a tech product with motion graphics."
    },
    {
      id: 3,
      title: "Novak jokovic Intro",
      category: "graphic-design",
      image: "https://cdn.wallpapersafari.com/35/45/RuLegc.jpg",
      link: "https://imgur.com/a/FJeoYiJ",
      description: "Introduction video for  novak djokovic"
    },
    {
      id: 4,
      title: "Nike Poster",
      category: "marketing",
      image: "https://i.imgur.com/rtI35lc.png",
      link: "https://i.imgur.com/rtI35lc.png",
      description: "Commercial Poster for Nike Just for practice"
    },
    {
      id: 4,
      title: "Jordan Poster",
      category: "marketing",
      image: "https://i.imgur.com/z2BNz5Y.png",
      link: "https://i.imgur.com/z2BNz5Y.png",
      description: "Commercial Poster for Jordan Just for practice"
    },
    {
      id: 5,
      title: "Anime Tranformation",
      category: "graphic-design",
      image: "https://i.imgur.com/vcnI29Q.jpg",
      link: "https://i.imgur.com/vcnI29Q.jpg",
      description: "Anime Tranformation Poster / Thumbnail for Instagram Influencer"
    },
    {
      id: 6,
      title: "3d Reel ",
      category: "graphic-design",
      image: "/src/components/dp.webp",
      link: "",
      description: "3D gaming instagram reel for Influencer The_Minni_13"
    },
    {
      id: 7,
      title: "Webinar Poster for Influencer",
      category: "marketing",
      image: "https://i.imgur.com/2OzR1SZ.jpeg",
      link: "https://imgur.com/a/pYkDA3O",
      description: "Webinar Poster Tittle = How to make money "
    },
    {
      id: 8,
      title: "Porsche Car Poster",
      category: "graphic-design",
      image: "https://i.imgur.com/3LFNcGq.jpg",
      link: "https://i.imgur.com/3LFNcGq.jpg",
      description: "Poster of Porsche Car "
    },
    {
      id: 9,
      title: "Faceless Video ",
      category: "video-editing",
      image: "https://i.pinimg.com/736x/7b/76/ef/7b76ef389185e356c8442869f2274199.jpg",
      link: "https://youtu.be/yn2-yKTP7L4",
      description: "Faceless Video for Youtube   "
    },
    {
      id: 10,
      title: "Streaming Thumbnail",
      category: "graphic-design",
      image: "https://i.imgur.com/4s8Jfoh.jpg",
      link: "https://i.imgur.com/4s8Jfoh.jpg",
      description: "Gaming Streamer Youtube Thumbnail"
    },
    {
      id: 11,
      title: "Streaming Thumbnail",
      category: "graphic-design",
      image: "https://i.imgur.com/wOHvgSR.jpg",
      link: "https://i.imgur.com/wOHvgSR.jpg",
      description: "Gaming Tournament Streamer Youtube Thumbnail"
    },
    {
      id: 12,
      title: "Instagram Gym Reel",
      category: "graphic-design",
      image: "https://i.pinimg.com/736x/53/59/cc/5359cc29a70e9e1061b6c4326668df06.jpg",
      link: "https://imgur.com/a/WssBUDp",
      description: "Instagram Gym reel for influencer"
    },
    {
      id: 13,
      title: "Instagram Gym Reel",
      category: "graphic-design",
      image: "https://i.pinimg.com/736x/4b/67/fc/4b67fca21a670a0521863d5f224c96b4.jpg",
      link: "https://imgur.com/a/ZzZrziR",
      description: "Instagram Gym reel for influencer"
    },
   
    // Add more of your actual projects here
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'graphic-design', name: 'Graphic Design' },
    { id: 'video-editing', name: 'Video Editing' },
    { id: 'ui-design', name: 'UI/UX Design' },
    { id: 'marketing', name: 'Marketing' },
    
  ];

  // Filtered projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900/90 to-gray-900 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Explore my recent design and editing projects. Each piece represents a unique story and creative solution.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll opacity-0">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-lg bg-gray-800 shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    
                    <span className="absolute top-4 right-4 px-2 py-1 bg-gray-900/80 text-xs font-medium rounded-full text-gray-300">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
