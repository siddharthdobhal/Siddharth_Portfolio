import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="relative overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Cursor />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;