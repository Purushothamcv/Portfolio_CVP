import { motion } from 'framer-motion';
import CircularGallery from '../CircularGallery/CircularGallery';
import './Contact.css';

const contactData = [
  {
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    text: 'Email',
    icon: 'fas fa-envelope',
    link: 'mailto:purushothamcv18@gmail.com',
    description: 'Drop me an email'
  },
  {
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80',
    text: 'LinkedIn',
    icon: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/purushotham-c-v-132990338/',
    description: 'Connect professionally'
  },
  {
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    text: 'GitHub',
    icon: 'fab fa-github',
    link: 'https://github.com/Purushothamcv',
    description: 'Check my repositories'
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    text: 'LeetCode',
    icon: 'fas fa-code',
    link: 'https://leetcode.com/u/purushothamcv/',
    description: 'View my solutions'
  }
];

const Contact = () => {
  const galleryItems = contactData.map((contact) => ({
    image: contact.image,
    text: contact.text
  }));

  const handleContactClick = (index) => {
    window.open(contactData[index].link, contactData[index].link.startsWith('mailto') ? '_self' : '_blank');
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-gallery-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CircularGallery
              items={galleryItems}
              bend={2}
              textColor="#60A5FA"
              borderRadius={0.08}
              font="bold 32px Figtree"
              scrollSpeed={2.5}
              scrollEase={0.08}
              onClick={handleContactClick}
            />
          </motion.div>

          <motion.div
            className="contact-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="description-content">
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Click on any platform to reach out!
              </p>
              <div className="contact-methods">
                {contactData.map((contact, index) => (
                  <div key={index} className="contact-method">
                    <i className={contact.icon}></i>
                    <div className="method-info">
                      <h4>{contact.text}</h4>
                      <p>{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
