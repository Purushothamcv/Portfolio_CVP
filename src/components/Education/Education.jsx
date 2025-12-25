import { motion } from 'framer-motion';
import CardSwap, { Card } from '../CardSwap';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 'sslc',
      degree: 'SSLC (10TH GRADE)',
      institution: 'ROYALE APOLLO INTERNATIONAL SCHOOL',
      score: 'SCORE: 96.16%',
      period: '2020'
    },
    {
      id: 'puc',
      degree: 'PUC (12TH GRADE)',
      institution: 'MASTERS PU COLLEGE',
      score: '94.66% | KCET: 3271',
      period: '2020 - 2022'
    },
    {
      id: 'be',
      degree: 'BE - CSE',
      institution: 'JSS SCIENCE & TECHNOLOGY UNIVERSITY',
      score: 'CGPA: 8.42',
      period: '2022 - 2026'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">
          Education Journey
        </h2>

        <div className="education-card-swap-wrapper">
          <CardSwap
            width={550}
            height={400}
            cardDistance={70}
            verticalDistance={80}
            delay={3500}
            pauseOnHover={true}
            skewAmount={8}
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
        </div>
      </div>
    </section>
  );
};

export default Education;
