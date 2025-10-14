import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fade } from 'react-awesome-reveal';
import { milestones } from '../../data/mockData';
import styles from './Milestones.module.css';

gsap.registerPlugin(ScrollTrigger);

const Milestones = () => {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      if (counter) {
        const target = milestones[index].count;

        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2.5,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onUpdate: function() {
              counter.textContent = Math.ceil(parseFloat(counter.textContent || '0')).toString();
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className={`${styles.milestones} section`}>
      <div className={styles.milestonesContainer}>
        <Fade direction="up" triggerOnce>
          <div className="section-title">
            <h2>
              Our <span className="gradient-text">Achievements</span>
            </h2>
          </div>
        </Fade>

        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            <Fade key={milestone.id} direction="up" delay={index * 100} triggerOnce>
              <div className={styles.milestoneCard}>
                <div className={styles.milestoneIcon}>
                  <i className={milestone.icon}></i>
                </div>
                <div className={styles.milestoneContent}>
                  <span
                    className={styles.milestoneNumber}
                    ref={(el) => (countersRef.current[index] = el)}
                    aria-label={`${milestone.count} ${milestone.title}`}
                  >
                    0
                  </span>
                  <span className={styles.milestoneTitle}>{milestone.title}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
