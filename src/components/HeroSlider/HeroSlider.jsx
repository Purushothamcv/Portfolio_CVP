import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from '../ElectricBorder/ElectricBorder';
import GridScan from '../GridScan/GridScan';
import Shuffle from '../Shuffle/Shuffle';
import profileImage from '../../assets/profile.jpg';
import './HeroSlider.css';

const HeroSlider = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (isScrollingRef.current) return;
      
      const delta = e.deltaY + e.deltaX;
      
      if (Math.abs(delta) > 5) {
        e.preventDefault();
        isScrollingRef.current = true;
        
        setCurrentSlide(prev => {
          if (delta > 0) {
            return Math.min(prev + 1, totalSlides - 1);
          } else {
            return Math.max(prev - 1, 0);
          }
        });

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Hi, I'm a ",
      highlight: "AI/ML Developer",
      subtitle: "Building intelligent solutions with Machine Learning & Deep Learning",
      borderColor: "#6366f1"
    },
    {
      id: 2,
      title: "Specialized in ",
      highlight: "Deep Learning",
      subtitle: "LSTM, Time Series Forecasting & Neural Networks",
      borderColor: "#8b5cf6"
    },
    {
      id: 3,
      title: "Creating ",
      highlight: "Smart Solutions",
      subtitle: "Full-stack AI applications with real-world impact",
      borderColor: "#ec4899"
    }
  ];

  return (
    <section id="home" className="hero-slider">
      <div className="hero-background">
        <GridScan
          lineThickness={1.5}
          linesColor="#392e4e"
          scanColor="#FF9FFC"
          scanOpacity={0.5}
          gridScale={0.1}
          sensitivity={0.6}
        />
      </div>

      <div ref={containerRef} className="slider-container">
        <motion.div
          className="slides-wrapper"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide">
              <ElectricBorder
                color={slide.borderColor}
                speed={1.5}
                chaos={1.2}
                thickness={3}
                className="slide-border"
              >
                <div className="slide-content">
                  {index === 0 && (
                    <motion.div 
                      className="profile-image-container"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="profile-image-wrapper">
                        <img 
                          src={profileImage}
                          alt="Purushotham CV"
                          className="profile-image"
                        />
                      </div>
                    </motion.div>
                  )}
                  <h1 className="slide-title">
                    <Shuffle
                      text={slide.title}
                      tag="span"
                      duration={0.5}
                      shuffleTimes={3}
                      scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%"
                      animationMode="evenodd"
                      stagger={0.04}
                      triggerOnce={false}
                      triggerOnHover={false}
                      threshold={0.5}
                      style={{ display: 'inline' }}
                    />
                    <Shuffle
                      text={slide.highlight}
                      tag="span"
                      className="gradient-text"
                      duration={0.6}
                      shuffleTimes={4}
                      scrambleCharset="01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>[]{}#@!*"
                      animationMode="evenodd"
                      stagger={0.05}
                      triggerOnce={false}
                      triggerOnHover={false}
                      threshold={0.5}
                      style={{ display: 'inline' }}
                    />
                  </h1>
                  <div className="slide-subtitle">
                    <Shuffle
                      text={slide.subtitle}
                      tag="p"
                      duration={0.4}
                      shuffleTimes={2}
                      scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
                      animationMode="evenodd"
                      stagger={0.02}
                      triggerOnce={false}
                      triggerOnHover={false}
                      threshold={0.5}
                      style={{ color: 'var(--text-secondary)', fontSize: 'inherit', margin: 0 }}
                    />
                  </div>
                  <motion.div
                    className="slide-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <a href="#projects" className="btn btn-primary">
                      View Projects
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                      Get in Touch
                    </a>
                  </motion.div>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="scroll-hint">
        <i className="fas fa-mouse"></i>
        <span>Scroll to navigate</span>
      </div>
    </section>
  );
};

export default HeroSlider;
