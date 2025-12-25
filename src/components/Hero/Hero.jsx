import { motion } from 'framer-motion';
import GridScan from '../GridScan/GridScan';
import Shuffle from '../Shuffle/Shuffle';
import profileImage from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
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

      <div className="container hero-content">
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="hero-image-wrapper">
            <img 
              src={profileImage}
              alt="Purushotham CV"
              className="hero-profile-image"
            />
          </div>
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-title">
            <Shuffle
              text="Hi, I'm "
              tag="span"
              duration={0.5}
              shuffleTimes={3}
              scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
              animationMode="evenodd"
              stagger={0.04}
              triggerOnce={false}
              threshold={0.5}
              style={{ display: 'inline' }}
            />
            <Shuffle
              text="Purushotham CV"
              tag="span"
              className="gradient-text"
              duration={0.6}
              shuffleTimes={4}
              scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
              animationMode="evenodd"
              stagger={0.05}
              triggerOnce={false}
              threshold={0.5}
              style={{ display: 'inline' }}
            />
          </h1>

          <p className="hero-subtitle">
            <Shuffle
              text="AI/ML Developer | Deep Learning Engineer | Full-stack Engineer"
              tag="span"
              duration={0.4}
              shuffleTimes={2}
              scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
              animationMode="evenodd"
              stagger={0.02}
              triggerOnce={false}
              threshold={0.5}
            />
          </p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary cursor-target">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary cursor-target">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint-horizontal">
        <i className="fas fa-arrow-right"></i>
        <span>Scroll to explore →</span>
      </div>
    </section>
  );
};

export default Hero;
