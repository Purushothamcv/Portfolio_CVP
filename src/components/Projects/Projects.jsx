import { motion } from 'framer-motion';
import { useState } from 'react';
import CircularGallery from '../CircularGallery/CircularGallery';
import './Projects.css';

/**
 * PROJECT DATA ARRAY
 * Each project is uniquely mapped to its own card in the gallery
 * Order: LoanLens → SmartAgri-AI
 * Images are correctly matched: Loan image → LoanLens, Crop image → SmartAgri
 */
const projectsData = [
  {
    id: 1,
    title: 'LoanLens – AI Loan Prediction System',
    description: 'A complete full-stack application for predicting loan approval status using advanced machine learning algorithms. Features a modern React frontend with smooth animations and a FastAPI backend powered by Logistic Regression.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    text: 'LoanLens',
    liveLink: 'https://loanlens.vercel.app/',
    githubLink: 'https://github.com/Purushothamcv/loanlens.git',
    techStack: ['React', 'Tailwind CSS', 'Python', 'FastAPI', 'ML']
  },
  {
    id: 2,
    title: 'SmartAgri-AI – Crop Yield Forecasting',
    description: 'A machine learning-based crop yield forecasting system focused on time series prediction. The project uses an LSTM (Long Short-Term Memory) neural network to forecast crop yield values for upcoming days based on historical and environmental data patterns.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    text: 'SmartAgri-AI',
    liveLink: 'https://agriculture-farm-technology.vercel.app/',
    githubLink: 'https://github.com/Purushothamcv/AgricultureFarmTechnology.git',
    techStack: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Streamlit']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Transform projects data for CircularGallery
  const galleryItems = projectsData.map((project) => ({
    image: project.image,
    text: project.text
  }));

  // Handle gallery item click
  const handleGalleryClick = (index) => {
    setSelectedProject(projectsData[index]);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-content">
          <motion.div
            className="gallery-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              font="bold 30px Figtree"
              scrollSpeed={2}
              scrollEase={0.05}
              onClick={handleGalleryClick}
            />
          </motion.div>

          <motion.div
            className="projects-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="description-content">
              <h3>Building Intelligent Solutions</h3>
              <p>
                I've crafted these projects by leveraging cutting-edge <span className="highlight">Machine Learning</span>, <span className="highlight">Deep Learning</span>, and <span className="highlight">Generative AI</span> concepts to solve real-world problems.
              </p>
              <p>
                Each application features a robust <span className="highlight">FastAPI backend</span> that delivers high-performance, scalable APIs with efficient data processing and model inference. The architecture ensures optimal response times and seamless integration between frontend and AI models.
              </p>
              <p>
                From predictive analytics to time series forecasting, these projects demonstrate end-to-end development expertise—combining modern web technologies with advanced AI capabilities to create production-ready applications.
              </p>
              <div className="tech-highlights">
                <div className="tech-item">
                  <span className="tech-icon">🤖</span>
                  <span>ML/DL Models</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">⚡</span>
                  <span>FastAPI Backend</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">✨</span>
                  <span>Gen AI Integration</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🚀</span>
                  <span>Cloud Deployed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Info Overlay - Shows on card click */}
        {selectedProject && (
          <div className="project-info-overlay active" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="info-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                ×
              </button>
              
              <h3 className="info-title">{selectedProject.title}</h3>
              <p className="info-description">{selectedProject.description}</p>
              
              <div className="info-tech-stack">
                {selectedProject.techStack.map((tech, index) => (
                  <span key={index} className="info-tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="info-actions">
                <a 
                  href={selectedProject.liveLink} 
                  className="info-btn live-btn cursor-target" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>🚀</span>
                  <span>Live Demo</span>
                </a>
                <a 
                  href={selectedProject.githubLink} 
                  className="info-btn github-btn cursor-target" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>💻</span>
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
