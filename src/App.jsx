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

    // Horizontal scroll on desktop - converts vertical scroll to horizontal
    const handleWheel = (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        
        // Smooth horizontal scrolling with acceleration
        const scrollAmount = e.deltaY;
        const scrollSpeed = Math.abs(scrollAmount) > 100 ? 2 : 1.5;
        
        container.scrollLeft += scrollAmount * scrollSpeed;
      }
    };

    // Add keyboard navigation for better UX
    const handleKeyDown = (e) => {
      if (window.innerWidth > 768) {
        const scrollAmount = window.innerWidth * 0.8; // Scroll 80% of viewport width
        
        switch(e.key) {
          case 'ArrowRight':
            container.scrollLeft += scrollAmount;
            break;
          case 'ArrowLeft':
            container.scrollLeft -= scrollAmount;
            break;
          case 'Home':
            container.scrollLeft = 0;
            break;
          case 'End':
            container.scrollLeft = container.scrollWidth;
            break;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
