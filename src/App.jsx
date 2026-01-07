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

    let currentMouseX = window.innerWidth / 2;
    let animationId = null;

    // Horizontal scroll on desktop - converts vertical scroll to horizontal
    const handleWheel = (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        const scrollSpeed = 2;
        container.scrollLeft += e.deltaY * scrollSpeed;
      }
    };

    // Track mouse position
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        currentMouseX = e.clientX;
      }
    };

    let lastScrollTime = 0;
    const scrollDelay = 1000; // 1 second delay between scrolls
    
    // Continuous scroll animation based on mouse position
    const animateScroll = () => {
      if (window.innerWidth > 768 && container) {
        const windowWidth = window.innerWidth;
        const edgeZone = windowWidth * 0.3; // 30% edge zones
        const now = Date.now();
        
        // Check if we should trigger scroll to next/prev section
        if (now - lastScrollTime > scrollDelay) {
          if (currentMouseX > windowWidth - edgeZone) {
            // Scroll to next section (right)
            const currentSection = Math.round(container.scrollLeft / windowWidth);
            const targetSection = Math.min(currentSection + 1, 7); // 8 sections (0-7)
            
            if (targetSection !== currentSection) {
              container.scrollTo({
                left: targetSection * windowWidth,
                behavior: 'smooth'
              });
              lastScrollTime = now;
            }
          } else if (currentMouseX < edgeZone) {
            // Scroll to previous section (left)
            const currentSection = Math.round(container.scrollLeft / windowWidth);
            const targetSection = Math.max(currentSection - 1, 0);
            
            if (targetSection !== currentSection) {
              container.scrollTo({
                left: targetSection * windowWidth,
                behavior: 'smooth'
              });
              lastScrollTime = now;
            }
          }
        }
      }
      
      animationId = requestAnimationFrame(animateScroll);
    };

    // Touch support
    let touchStartX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      if (!touchStartX) return;
      
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX - touchEndX;
      
      if (Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? 1 : -1;
        const currentSection = Math.round(container.scrollLeft / window.innerWidth);
        const targetSection = Math.max(0, Math.min(currentSection + direction, 7));
        
        container.scrollTo({
          left: targetSection * window.innerWidth,
          behavior: 'smooth'
        });
        
        touchStartX = 0;
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (window.innerWidth > 768) {
        const scrollAmount = window.innerWidth;
        
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

    // Add event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    // Start animation loop
    animationId = requestAnimationFrame(animateScroll);
    
    // Cleanup
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
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
