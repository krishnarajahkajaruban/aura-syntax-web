import { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/mockData';
import '../styles/custom.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const navigate = useNavigate();
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card');

      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title gradient-text">Our Projects</h2>
          <p className="section-subtitle">
            Showcase of our innovative solutions and successful deliveries
          </p>
        </Fade>

        <div className="row g-sm-4 g-lg-5 g-xxl-4 mt-sm-0 mt-lg-4 justify-content-center project-card-row" ref={cardsRef}>
          {projects.map((project, index) => (
            <div key={project.id} className="col-12 col-lg-6 col-xl-6 col-xxl-4">
              <div className="project-card"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty("--mouse-x", `${x}px`);
                  card.style.setProperty("--mouse-y", `${y}px`);
                }}>
                <div className="project-card-img-area">
                  <img src={project.image} alt={project.name} draggable={false} />
                </div>
                <div className="project-card-content">
                  <div className="project-title-area">
                    <h5 className="mb-0">{project.name}</h5>
                    <span
                      className="badge"
                      style={{
                        background: 'rgba(67, 193, 206, 0.2)',
                        color: '#43c1ce',
                        padding: '0.5rem 0.9rem',
                        borderRadius: '1rem',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}
                    >
                      {project.projectType}
                    </span>
                  </div>

                  <p className="project-card_description mb-4">
                    {project.projectDescriptions[0]?.description
                      ?.split(' ')
                      .slice(0, 25)
                      .join(' ') + (project.projectDescriptions[0]?.description?.split(' ').length > 25 ? '...' : '')}
                  </p>

                  <div className="d-flex gap-2">
                    <button
                      className="btn-outline-aura flex-grow-1"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      View Details
                    </button>
                    {project.hasPreview && (
                      <button
                        aria-label='Preview'
                        className="btn-primary-aura"
                        onClick={() => window.open(project.previewLink, '_blank')}
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
