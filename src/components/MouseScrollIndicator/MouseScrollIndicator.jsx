import { useEffect, useState } from 'react';
import './MouseScrollIndicator.css';

const MouseScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);
  const [mousePosition, setMousePosition] = useState('center');

  useEffect(() => {
    // Hide indicator after 8 seconds or on first scroll
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 8000);

    const handleScroll = () => {
      setShowIndicator(false);
    };

    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const edgeZone = windowWidth * 0.3;
      
      if (e.clientX > windowWidth - edgeZone) {
        setMousePosition('right');
      } else if (e.clientX < edgeZone) {
        setMousePosition('left');
      } else {
        setMousePosition('center');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!showIndicator) return null;

  return (
    <div className={`mouse-scroll-indicator ${mousePosition}`}>
      <div className="indicator-left">
        <div className="arrow-container">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-left"></i>
        </div>
        <span>Move mouse here to scroll left</span>
      </div>
      
      <div className="indicator-center">
        <div className="instruction-box">
          <i className="fas fa-mouse"></i>
          <p>Move mouse to edges to scroll</p>
          <div className="scroll-icons">
            <i className="fas fa-arrow-left"></i>
            <span>or use scroll wheel</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
      
      <div className="indicator-right">
        <span>Move mouse here to scroll right</span>
        <div className="arrow-container">
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default MouseScrollIndicator;
