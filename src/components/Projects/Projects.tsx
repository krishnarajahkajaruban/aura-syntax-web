import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';
import { projects } from '../../data/mockData';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className={styles.projectsContainer}>
        <Fade direction="up" triggerOnce>
          <div className="section-title">
            <h2>
              Our <span className="gradient-text">Projects</span>
            </h2>
            <p className={styles.subtitle}>
              Delivering excellence through innovative solutions
            </p>
          </div>
        </Fade>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Fade key={project.id} direction="up" delay={index * 100} triggerOnce>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={500}
                className={styles.tiltWrapper}
              >
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.name} />
                    <div className={styles.projectType}>{project.projectType}</div>
                  </div>

                  <div className={styles.projectContent}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectDescription}>
                      {project.projectDescriptions[0]?.description}
                    </p>

                    <div className={styles.projectActions}>
                      <a href={`/projects/${project.id}`} className={styles.detailsBtn}>
                        Know more <i className="bi-arrow-right"></i>
                      </a>
                      {project.hasPreview && (
                        <a
                          href={project.previewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.previewBtn}
                        >
                          <i className="bi-box-arrow-up-right"></i> Preview
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
