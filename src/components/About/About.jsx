import { motion } from 'framer-motion';
import { GridScan } from '../GridScan';
import './About.css';

/**
 * About Me Section - Professional Introduction
 * 
 * Purpose: Provides a concise overview of who I am, what I build,
 * and my approach to solving problems. Acts as the entry point
 * to understanding my professional journey.
 * 
 * Features:
 * - Animated GridScan background
 * - Centered professional description
 * - Strong tagline that leads to Experience section
 * - Visual thread anchor point (right edge)
 */
const About = () => {
  return (
    <section id="about" className="about">
      {/* Animated Grid Background */}
      <GridScan
        lineThickness={1.2}
        linesColor="#1e293b"
        scanColor="#60A5FA"
        scanOpacity={0.3}
        gridScale={0.08}
        lineStyle="solid"
        lineJitter={0}
        scanDirection="pingpong"
        enablePost={true}
        bloomIntensity={0.2}
        chromaticAberration={0.001}
        noiseIntensity={0.005}
        scanGlow={0.6}
        scanSoftness={2.5}
        scanDuration={3.0}
        scanDelay={1.5}
        className="gridscan-background"
      />
      
      <div className="about-container">
        {/* Section Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Main Content - Text Only */}
        <div className="about-content">
          {/* Professional Description */}
          <motion.div
            className="about-description-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-paragraph">
              I'm a passionate <span className="highlight-text">AI/ML Developer</span> and{' '}
              <span className="highlight-text">Full-Stack Engineer</span> specializing in deep learning,
              time series forecasting, and intelligent system design. My focus is on building
              production-ready solutions that bridge the gap between cutting-edge research
              and real-world impact.
            </p>
            <p className="about-paragraph">
              From data preprocessing to model deployment, I craft end-to-end pipelines
              that turn complex problems into scalable, maintainable applications. Currently
              learning about <span className="highlight-text">Agentic AI</span> and{' '}
              <span className="highlight-text">n8n automations</span> to build smarter workflows.
            </p>
          </motion.div>

          {/* Strong Tagline - Thread Connection Point */}
          <motion.div
            className="tagline-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="tagline-box cursor-target">
              <div className="tagline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="tagline-text">
                Building intelligent solutions that <span className="gradient-text">learn</span>,{' '}
                <span className="gradient-text">adapt</span>, and{' '}
                <span className="gradient-text">deliver</span>.
              </p>
              {/* Thread Anchor - Connection point for visual thread */}
              <div className="thread-anchor" data-thread-start="true"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
