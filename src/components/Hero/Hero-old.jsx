import { motion } from 'framer-motion';
import LiquidChrome from '../LiquidChrome/LiquidChrome';
import Shuffle from '../Shuffle/Shuffle';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <LiquidChrome
          baseColor={[0.4, 0.25, 0.8]}
          speed={0.3}
          amplitude={0.4}
          frequencyX={3}
          frequencyY={3}
          interactive={true}
        />
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">
          <Shuffle
            text="Hi, I'm a "
            tag="span"
            duration={0.5}
            shuffleTimes={3}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%"
            animationMode="evenodd"
            stagger={0.04}
            triggerOnce={true}
            triggerOnHover={false}
            threshold={0.5}
            style={{ display: 'inline' }}
          />
          <Shuffle
            text="AI/ML Developer"
            tag="span"
            className="gradient-text"
            duration={0.6}
            shuffleTimes={4}
            scrambleCharset="01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>[]{}#@!*"
            animationMode="evenodd"
            stagger={0.05}
            triggerOnce={true}
            triggerOnHover={false}
            threshold={0.5}
            style={{ display: 'inline' }}
          />
        </h1>
        <div className="hero-subtitle">
          <Shuffle
            text="Building intelligent solutions with Machine Learning & Deep Learning"
            tag="p"
            duration={0.4}
            shuffleTimes={2}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
            animationMode="evenodd"
            stagger={0.02}
            triggerOnce={true}
            triggerOnHover={false}
            threshold={0.5}
            style={{ color: 'var(--text-secondary)', fontSize: 'inherit', margin: 0 }}
          />
        </div>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
