import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-dark-300">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4 animate-glow">
            AS
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mx-auto relative">
            <div className="absolute top-0 left-0 h-full bg-white/30 animate-[pulse_2s_ease-in-out_infinite] w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-dark-300 text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;