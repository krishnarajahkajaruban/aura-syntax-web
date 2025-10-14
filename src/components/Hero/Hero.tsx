import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { services } from '../../data/mockData';
import styles from './Hero.module.css';

const Hero = () => {
  const techIcons = [
    'bi-globe',
    'bi-phone',
    'bi-cpu',
    'bi-cloud',
    'bi-shield-check',
    'bi-palette',
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className="gradient-text">Craft the Logic.</span>
              <br />
              <span className="gradient-text">Build What's Next.</span>
            </h1>

            <p className={styles.heroDescription}>
              We blend creative aura with structured syntax to develop modern software
              experiences — from AI and mobile apps to cloud, DevOps, and cybersecurity.
              At AuraSyntax, logic meets imagination.
            </p>

            <div className={styles.serviceChips}>
              <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                  {[...services, ...services].map((service, index) => (
                    <a
                      key={`${service.id}-${index}`}
                      href={`/services/${service.id}`}
                      className={styles.chip}
                    >
                      <i className={service.icon}></i>
                      {service.serviceName}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.techIcons}>
              {techIcons.map((icon, index) => (
                <motion.div
                  key={icon}
                  className={styles.techIcon}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <i className={icon}></i>
                </motion.div>
              ))}
            </div>

            <a href="#services" className={styles.ctaButton}>
              Explore Our Services
              <i className="bi-arrow-right"></i>
            </a>
          </div>

          <div className={styles.heroImage}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
                alt="Software Development"
                className={styles.illustration}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
