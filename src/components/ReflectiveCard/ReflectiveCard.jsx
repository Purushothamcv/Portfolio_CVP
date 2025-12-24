import './ReflectiveCard.css';
import { X } from 'lucide-react';

const ReflectiveCard = ({
  className = '',
  style = {},
  skillName = 'SKILL NAME',
  skillCategory = 'CATEGORY',
  skillTopics = [],
  onClose
}) => {
  return (
    <div className={`skill-card-container ${className}`} style={style}>
      <div className="skill-card-content">
        <div className="skill-card-header">
          <div className="skill-header-text">
            <h2 className="skill-title">{skillName}</h2>
            <p className="skill-subtitle">{skillCategory}</p>
          </div>
          {onClose && (
            <button className="skill-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          )}
        </div>

        <div className="skill-card-body">
          <div className="skill-topics-container">
            {skillTopics.map((topic, index) => (
              <div key={index} className="skill-topic-card">
                <div className="topic-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="topic-content">{topic}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
