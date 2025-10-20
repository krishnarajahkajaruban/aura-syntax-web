import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { milestones } from '@/data/mockData';
import '../styles/custom.css';

gsap.registerPlugin(ScrollTrigger);

const MilestonesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline items on scroll
      const timelineItems = document.querySelectorAll('.timeline-item');
      const isMobile = window.innerWidth < 991;

      timelineItems.forEach((item, index) => {
        const fromX = isMobile ? 50 : index % 2 === 0 ? -50 : 50;

        gsap.fromTo(item,
          {
            opacity: 0,
            x: fromX
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );

        window.addEventListener('resize', () => ScrollTrigger.refresh());
      });

      // Animate timeline line
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section milestone-timeline-section">
      <div className="container">
        <h2 className="section-title gradient-text">Our Journey</h2>
        <p className="section-subtitle">
          Building the future, one milestone at a time
        </p>

        <div ref={timelineRef} className="timeline-container">
          <div className="timeline-line"></div>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <i className={milestone.icon}></i>
                </div>
                <h3 className="timeline-title">{milestone.label}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
