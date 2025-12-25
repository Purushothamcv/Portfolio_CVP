import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Clock, Users } from 'lucide-react';
import './Experience.css';

/**
 * Experience Section - Professional Journey
 * 
 * Purpose: Showcases work history, achievements, and technical skills
 * across different roles. Visually connected to About section via
 * an animated thread that symbolizes career progression.
 * 
 * Features:
 * - Animated SVG thread from About section
 * - Experience cards with achievements and tech stacks
 * - Highlight animation when thread completes drawing
 * - Scroll-triggered animations
 */

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Data Analyst",
      company: "Boyle Lifesciences",
      period: "September 2025",
      achievements: [
        { 
          icon: TrendingUp, 
          text: "Cleaned, preprocessed, and organized large datasets using Python, SQL, and Excel, improving data quality by", 
          highlight: "25%" 
        },
        { 
          icon: Users, 
          text: "Performed EDA, generated visualizations, and extracted actionable insights for stakeholders" 
        },
        { 
          icon: Clock, 
          text: "Automated recurring reporting tasks, reducing manual work by", 
          highlight: "30%" 
        },
        { 
          icon: Users, 
          text: "Collaborated with team members to support data-driven decision making" 
        }
      ],
      technologies: ["Python", "SQL", "Excel", "EDA", "Visualization"]
    }
  ];

  return (
    <section id="experience" className="experience">
      {/* Visual Thread - Connects from About section */}
      <motion.svg
        className="experience-thread"
        viewBox="0 0 200 800"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Thread Path - Curved connection from left edge */}
        <motion.path
          d="M 0 50 Q 50 100, 100 200 T 100 400 Q 100 500, 150 600 T 200 750"
          stroke="url(#threadGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut", delay: 0.3 },
            opacity: { duration: 0.3, delay: 0.3 }
          }}
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.8)" />
            <stop offset="50%" stopColor="rgba(167, 139, 250, 0.6)" />
            <stop offset="100%" stopColor="rgba(244, 114, 182, 0.4)" />
          </linearGradient>
          
          {/* Glowing Shadow */}
          <filter id="threadGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated Glow Effect */}
        <motion.path
          d="M 0 50 Q 50 100, 100 200 T 100 400 Q 100 500, 150 600 T 200 750"
          stroke="rgba(96, 165, 250, 0.4)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#threadGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut", delay: 0.3 },
            opacity: { duration: 0.3, delay: 0.3 }
          }}
        />
      </motion.svg>

      {/* Thread End Indicator - Pulsing dot */}
      <motion.div
        className="thread-endpoint"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 2.3 }}
      >
        <div className="endpoint-pulse"></div>
      </motion.div>

      <div className="experience-container">
        {/* Section Header */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <div className="header-badge">
            <Briefcase size={24} />
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <p className="section-subtitle">
            Building solutions, solving problems, delivering impact
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="experience-cards-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card cursor-target"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: 2.7 + index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.02,
                x: 20,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="icon-wrapper">
                  <Briefcase size={28} className="card-icon" />
                </div>
                <div className="header-content">
                  <h3 className="role-title">{exp.title}</h3>
                  <p className="company-name">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>

              {/* Achievements List */}
              <div className="card-body">
                {exp.achievements.map((achievement, i) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={i} className="achievement-item">
                      <div className="achievement-icon">
                        <Icon size={20} />
                      </div>
                      <p className="achievement-text">
                        {achievement.text}
                        {achievement.highlight && (
                          <span className="highlight"> {achievement.highlight}</span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Technology Tags */}
              <div className="tech-tags">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag cursor-target">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
