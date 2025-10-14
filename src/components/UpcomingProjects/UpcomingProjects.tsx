import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';
import { upcomingProjects } from '../../data/mockData';
import NotifyModal from '../NotifyModal/NotifyModal';
import styles from './UpcomingProjects.module.css';

const UpcomingProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const handleNotifyClick = (projectName: string) => {
    setSelectedProject(projectName);
    setShowModal(true);
  };

  return (
    <section className={`${styles.upcomingProjects} section`}>
      <div className={styles.upcomingContainer}>
        <Fade direction="up" triggerOnce>
          <div className="section-title">
            <h2>
              Upcoming <span className="gradient-text">Projects</span>
            </h2>
            <p className={styles.subtitle}>
              Exciting innovations on the horizon
            </p>
          </div>
        </Fade>

        <div className={styles.upcomingGrid}>
          {upcomingProjects.map((project, index) => (
            <Fade key={project.id} direction="up" delay={index * 100} triggerOnce>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={500}
                className={styles.tiltWrapper}
              >
                <div className={styles.upcomingCard}>
                  <div className={styles.upcomingImage}>
                    <img src={project.image} alt={project.projectName} />
                    <div className={styles.statusBadge}>
                      <i className="bi-clock"></i> Coming Soon
                    </div>
                  </div>

                  <div className={styles.upcomingContent}>
                    <h3 className={styles.upcomingName}>{project.projectName}</h3>
                    <p className={styles.upcomingDescription}>{project.description}</p>

                    <button
                      onClick={() => handleNotifyClick(project.projectName)}
                      className={styles.notifyBtn}
                    >
                      <i className="bi-bell"></i> Notify me
                    </button>
                  </div>
                </div>
              </Tilt>
            </Fade>
          ))}
        </div>
      </div>

      <NotifyModal
        show={showModal}
        onClose={() => setShowModal(false)}
        projectName={selectedProject}
      />
    </section>
  );
};

export default UpcomingProjects;
