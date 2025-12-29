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
        
        // Enhanced smooth horizontal scrolling
        const scrollAmount = e.deltaY;
        const scrollSpeed = 2; // Consistent faster speed
        
        container.scrollLeft += scrollAmount * scrollSpeed;
      }
    };

    // Touch/Swipe support for better mobile-like interaction
    let touchStartX = 0;
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e) => {
      if (!touchStartX || !touchStartY) return;
      
      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;
      
      // If horizontal swipe is dominant
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        container.scrollLeft += deltaX * 2;
      }
    };

    // Add keyboard navigation for better UX
    const handleKeyDown = (e) => {
      if (window.innerWidth > 768) {
        const scrollAmount = window.innerWidth; // Scroll full viewport width
        
        switch(e.key) {
          case 'ArrowRight':
            e.preventDefault();
            container.scrollLeft += scrollAmount;
            break;
          case 'ArrowLeft':
            e.preventDefault();
            container.scrollLeft -= scrollAmount;
            break;
          case 'Home':
            e.preventDefault();
            container.scrollLeft = 0;
            break;
          case 'End':
            e.preventDefault();
            container.scrollLeft = container.scrollWidth;
            break;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
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
