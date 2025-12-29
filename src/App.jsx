import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import TargetCursor from './components/TargetCursor';
import './App.css';

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Only apply horizontal scroll on desktop
    const handleWheel = (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="App">
      <TargetCursor />
      <Navbar />
      <div ref={scrollContainerRef} className="horizontal-scroll-container">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
