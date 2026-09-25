import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Graduate Engineer Trainee',
    company: 'Alstom',
    period: 'Aug 2026 – Present',
    achievements: [],
    technologies: []
  },
  {
    id: 2,
    title: 'Video Annotation Specialist',
    company: 'Giant Mind Solutions (Freelance)',
    period: 'Mar 2026 – Present',
    achievements: [
      'Annotated and segmented video data for AI and computer vision model training, accurately identifying objects, activities, and task-relevant actions across video frames.',
      'Applied detailed annotation guidelines to label object movements, hand actions, and temporal events while maintaining consistency across video sequences.'
    ],
    technologies: ['AI Training', 'Computer Vision', 'Video Annotation']
  },
  {
    id: 3,
    title: 'Data Annotator',
    company: 'Innodata',
    period: 'Aug 2025 – Mar 2026',
    achievements: [
      'Annotated diverse text, code, and image datasets for ML model training; maintained high accuracy and throughput across annotation batches.',
      'Performed NER, sentiment tagging, intent classification, and instruction-response labeling for LLM fine-tuning datasets in English and Kannada.'
    ],
    technologies: ['ML Data', 'LLM Fine-tuning', 'English', 'Kannada']
  }
];

const Experience = () => (
  <section id="experience" className="experience">
    <motion.svg className="experience-thread" viewBox="0 0 200 800" preserveAspectRatio="none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}>
      <motion.path d="M 0 50 Q 50 100, 100 200 T 100 400 Q 100 500, 150 600 T 200 750" stroke="url(#threadGradient)" strokeWidth="3" fill="none" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ pathLength: { duration: 2, ease: 'easeInOut', delay: 0.3 }, opacity: { duration: 0.3, delay: 0.3 } }} />
      <defs><linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="rgba(96, 165, 250, 0.8)" /><stop offset="50%" stopColor="rgba(167, 139, 250, 0.6)" /><stop offset="100%" stopColor="rgba(244, 114, 182, 0.4)" /></linearGradient></defs>
    </motion.svg>

    <motion.div className="thread-endpoint" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 2.3 }}><div className="endpoint-pulse" /></motion.div>

    <div className="experience-container">
      <motion.div className="experience-header" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="header-badge"><Briefcase size={24} /><h2 className="section-title">Professional Experience</h2></div>
        <p className="section-subtitle">Building solutions, solving problems, delivering impact</p>
      </motion.div>

      <div className="experience-cards-grid">
        {experiences.map((exp, index) => (
          <motion.article key={exp.id} className="experience-card cursor-target" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.3 + index * 0.15, type: 'spring', stiffness: 80 }} whileHover={{ scale: 1.02, x: 20, transition: { duration: 0.3 } }}>
            <div className="card-header">
              <div className="icon-wrapper"><Briefcase size={28} className="card-icon" /></div>
              <div className="header-content"><h3 className="role-title">{exp.title}</h3><p className="company-name">{exp.company}</p></div>
              <span className="experience-period">{exp.period}</span>
            </div>
            {exp.achievements.length > 0 && <div className="card-body">{exp.achievements.map((achievement) => <div key={achievement} className="achievement-item"><div className="achievement-icon"><CheckCircle2 size={20} /></div><p className="achievement-text">{achievement}</p></div>)}</div>}
            {exp.technologies.length > 0 && <div className="tech-tags">{exp.technologies.map((tech) => <span key={tech} className="tech-tag cursor-target">{tech}</span>)}</div>}
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
