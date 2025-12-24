import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ReflectiveCard from '../ReflectiveCard';
import './Skills.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    {
      id: 1,
      icon: '🐍',
      name: 'Python',
      category: 'Core AI/ML Programming',
      topics: [
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms',
        'NumPy & Pandas for Data Manipulation',
        'Async Programming & Multithreading',
        'File I/O & API Integration',
        'Error Handling & Debugging'
      ]
    },
    {
      id: 2,
      icon: '🤖',
      name: 'Machine Learning',
      category: 'Supervised & Unsupervised',
      topics: [
        'Linear & Logistic Regression',
        'Decision Trees & Random Forests',
        'Support Vector Machines (SVM)',
        'K-Means & Hierarchical Clustering',
        'Principal Component Analysis (PCA)',
        'Model Evaluation & Cross-Validation'
      ]
    },
    {
      id: 3,
      icon: '🧠',
      name: 'Deep Learning',
      category: 'Neural Networks',
      topics: [
        'Artificial Neural Networks (ANN)',
        'Convolutional Neural Networks (CNN)',
        'Recurrent Neural Networks (RNN)',
        'Long Short-Term Memory (LSTM)',
        'Transfer Learning & Fine-tuning',
        'TensorFlow & PyTorch Frameworks'
      ]
    },
    {
      id: 4,
      icon: '✨',
      name: 'Generative AI',
      category: 'LLMs & Diffusion',
      topics: [
        'Large Language Models (GPT, BERT)',
        'Prompt Engineering & Fine-tuning',
        'Diffusion Models (Stable Diffusion)',
        'Generative Adversarial Networks (GANs)',
        'RAG (Retrieval-Augmented Generation)',
        'LangChain & Vector Databases'
      ]
    },
    {
      id: 5,
      icon: '📊',
      name: 'Data Analysis',
      category: 'Pandas & Visualization',
      topics: [
        'Data Cleaning & Preprocessing',
        'Exploratory Data Analysis (EDA)',
        'Statistical Analysis & Hypothesis Testing',
        'Matplotlib & Seaborn Visualization',
        'Plotly Interactive Dashboards',
        'SQL & Database Querying'
      ]
    },
    {
      id: 6,
      icon: '⚡',
      name: 'FastAPI',
      category: 'Backend Development',
      topics: [
        'RESTful API Design & Development',
        'WebSockets & Real-time Communication',
        'Authentication & Authorization (JWT)',
        'Database Integration (SQLAlchemy)',
        'Async Request Handling',
        'API Documentation (OpenAPI)'
      ]
    },
    {
      id: 7,
      icon: '💻',
      name: 'Core CS',
      category: 'Fundamentals',
      topics: [
        'Computer Networks (CN)',
        'Database Management Systems (DBMS)',
        'Operating Systems (OS)',
        'Data Structures & Algorithms (DSA)',
        'System Design & Architecture',
        'Software Engineering Principles'
      ]
    },
    {
      id: 8,
      icon: '⚛️',
      name: 'Web Development',
      category: 'Frontend Technologies',
      topics: [
        'HTML5 & Semantic Markup',
        'CSS3 & Modern Layouts (Grid, Flexbox)',
        'JavaScript ES6+ Features',
        'React.js & Component Architecture',
        'State Management (Context API)',
        'Responsive Design & Animations'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tap on any skill to explore detailed topics
        </motion.p>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.button
              key={skill.id}
              className="skill-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkill(skill)}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-label">{skill.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedSkill && (
            <>
              <motion.div
                className="skill-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
              />
              <motion.div
                className="skill-modal-container"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <ReflectiveCard
                  skillName={selectedSkill.name}
                  skillCategory={selectedSkill.category}
                  skillTopics={selectedSkill.topics}
                  onClose={() => setSelectedSkill(null)}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
