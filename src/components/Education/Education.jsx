import { motion } from 'framer-motion';
import CardSwap, { Card } from '../CardSwap';
import './Education.css';

const Education = () => {
  const educationData = [
    { id: 'be', degree: 'B.E. IN COMPUTER SCIENCE AND ENGINEERING', institution: 'SHRI JAYACHAMARAJENDRA COLLEGE OF ENGINEERING, MYSORE', score: 'CGPA: 8.47', period: '2022 – 2026' },
    { id: 'pu', degree: 'PRE-UNIVERSITY EDUCATION', institution: 'MASTERS PU COLLEGE', score: 'PERCENTAGE: 94.66% · KCET RANK: 3271', period: '2020 – 2022' }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>Education Journey</motion.h2>
        <div className="education-card-swap-wrapper">
          <CardSwap width={550} height={400} cardDistance={70} verticalDistance={80} delay={3500} pauseOnHover skewAmount={8} easing="elastic">
            {educationData.map((edu) => <Card key={edu.id} customClass="education-card"><div className="card-degree">{edu.degree}</div><div className="card-institution">{edu.institution}</div><div className="card-score">{edu.score}</div><div className="card-period">{edu.period}</div></Card>)}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Education;
