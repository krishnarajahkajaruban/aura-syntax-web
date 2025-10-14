import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const teamRoles = [
    { icon: 'bi-code-slash', role: 'Frontend Developers' },
    { icon: 'bi-server', role: 'Backend Developers' },
    { icon: 'bi-brush', role: 'UI Designers' },
    { icon: 'bi-bug', role: 'Quality Assurance' },
    { icon: 'bi-hdd-network', role: 'Server & DB Admins' },
    { icon: 'bi-graph-up', role: 'Data Analysts' },
  ];

  return (
    <section className={`${styles.about} section`} id="about">
      <div className={styles.aboutContainer}>
        <Fade direction="up" triggerOnce>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              About <span className="gradient-text">AuraSyntax</span>
            </h2>

            <div className={styles.textContent}>
              <p>
                AuraSyntax is a passionate team of software developers dedicated to building
                modern, stylish web applications with a strong focus on customer-oriented user
                experiences and robust backend architecture.
              </p>

              <p>
                We deliver high-performance applications that pass rigorous test suites, ensuring
                every solution is user-friendly, responsive across all devices and platforms, and
                built to exceed expectations.
              </p>

              <p>
                Our priority is satisfying client requirements through a structured development
                lifecycle, combining technical excellence with creative innovation to craft
                software that truly makes a difference.
              </p>
            </div>

            <div className={styles.teamRoles}>
              <h3>Our Expert Team</h3>
              <div className={styles.rolesGrid}>
                {teamRoles.map((role, index) => (
                  <motion.div
                    key={role.role}
                    className={styles.roleCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className={role.icon}></i>
                    <span>{role.role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.aboutImage}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team collaboration"
                className={styles.teamImage}
              />
              <div className={styles.statsBadge}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>120+</span>
                  <span className={styles.statLabel}>Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
