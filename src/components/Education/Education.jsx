import { motion } from 'framer-motion';
import CardSwap, { Card } from '../CardSwap';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 'be',
      degree: 'BE - CSE',
      institution: 'JSS SCIENCE & TECHNOLOGY UNIVERSITY',
      score: 'CGPA: 8.42',
      period: '2022 - 2026'
    },
    {
      id: 'puc',
      degree: 'PUC (12TH GRADE)',
      institution: 'MASTERS PU COLLEGE',
      score: '94.66% | KCET: 3271',
      period: '2020 - 2022'
    },
    {
      id: 'sslc',
      degree: 'SSLC (10TH GRADE)',
      institution: 'ROYALE APOLLO INTERNATIONAL SCHOOL',
      score: 'SCORE: 96.16%',
      period: '2020'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Education Journey
        </motion.h2>

        <motion.div
          className="education-card-swap-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <CardSwap
            width={550}
            height={400}
            cardDistance={50}
            verticalDistance={60}
            delay={4000}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
          >
            {educationData.map((edu) => (
              <Card key={edu.id} customClass="education-card">
                <div className="card-degree">{edu.degree}</div>
                <div className="card-institution">{edu.institution}</div>
                <div className="card-score">{edu.score}</div>
                <div className="card-period">{edu.period}</div>
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
