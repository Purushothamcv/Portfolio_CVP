import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Folder from '../Folder';
import './Resume.css';

const Resume = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const resumePath = '/resume/FinalResume.pdf';

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleViewResume = () => {
    setShowViewer(true);
  };

  const handlePaperClick = (index) => {
    if (index === 0) {
      // Download resume
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Purushotham_Resume.pdf';
      link.click();
    } else if (index === 1) {
      // Preview resume
      setShowViewer(true);
    } else if (index === 2) {
      // Open in new tab
      window.open(resumePath, '_blank');
    }
  };

  const folderItems = [
    <div className="paper-content">
      <i className="fas fa-download"></i>
      <span>Download</span>
    </div>,
    <div className="paper-content">
      <i className="fas fa-eye"></i>
      <span>Preview</span>
    </div>,
    <div className="paper-content">
      <i className="fas fa-external-link-alt"></i>
      <span>Open</span>
    </div>
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Resume
        </motion.h2>

        <motion.p
          className="resume-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Click the folder to view options
        </motion.p>

        <motion.div
          className="resume-folder-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Folder
            color="#8400ff"
            size={2.5}
            items={folderItems}
            onPaperClick={handlePaperClick}
            className="resume-folder"
          />
        </motion.div>

        <motion.div
          className="resume-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="highlight-item"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-graduation-cap"></i>
            <span>B.E. in Computer Science</span>
          </motion.div>
          <motion.div
            className="highlight-item"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-brain"></i>
            <span>AI/ML Specialist</span>
          </motion.div>
          <motion.div
            className="highlight-item"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-code"></i>
            <span>Full Stack Developer</span>
          </motion.div>
          <motion.div
            className="highlight-item"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-database"></i>
            <span>Data Engineer</span>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showViewer && (
          <motion.div
            className="resume-viewer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowViewer(false)}
          >
            <motion.div
              className="resume-viewer-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="viewer-header">
                <h3>Resume Preview</h3>
                <div className="viewer-actions">
                  <motion.a
                    href={resumePath}
                    download="Purushotham_Resume.pdf"
                    className="viewer-action-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Download"
                  >
                    <i className="fas fa-download"></i>
                  </motion.a>
                  <motion.a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="viewer-action-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Open in new tab"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </motion.a>
                  <motion.button
                    className="viewer-action-btn close-btn"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowViewer(false)}
                    title="Close"
                  >
                    <i className="fas fa-times"></i>
                  </motion.button>
                </div>
              </div>
              <div className="viewer-content">
                <iframe
                  src={resumePath}
                  title="Resume Preview"
                  className="resume-iframe"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
