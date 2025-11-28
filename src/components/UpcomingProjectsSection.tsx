import { Fade } from 'react-awesome-reveal';
import { upcomingProjects } from '@/data/mockData';
import { toast } from 'sonner';
import '../styles/custom.css';

interface UpcomingProjectsProps {
  onNotify: (projectName: string) => void;
}

const UpcomingProjectsSection: React.FC<UpcomingProjectsProps> = ({ onNotify }) => {

  return (
    <section className="section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title gradient-text">Upcoming Projects</h2>
          <p className="section-subtitle">
            Exciting innovations in the pipeline
          </p>
        </Fade>

        <div className="row g-sm-4 g-lg-5 g-xxl-4 mt-sm-0 mt-lg-4 justify-content-center uc-project-card-row">
          {upcomingProjects.map((project, index) => (
            <div key={project.id} className="col-12 col-lg-6 col-xl-6 col-xxl-4">
              <Fade direction="up" delay={index * 100} triggerOnce>
                <div className="glass-card uc-project-card h-100">
                  <div className="uc-project-card-img-area">
                    <img
                      src={project.image}
                      alt={`${project.projectName} - Coming Soon`}
                      className="img-fluid"
                      loading="lazy"
                      width="600"
                      height="230"
                      style={{ aspectRatio: '600/230' }}
                      draggable={false}
                    />
                  </div>

                  <div className="uc-project-card-title-area">
                    <h3 className="mb-0">{project.projectName}</h3>
                    <span
                      className="badge"
                      style={{
                        background: 'rgba(121, 147, 242, 0.2)',
                        color: '#7993f2',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '1rem',
                        fontSize: '0.7rem'
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>

                  <p className="uc-project-card-desc mb-4">{project.description}</p>

                  <button
                    className="btn-primary-aura justify-content-center w-100"
                    onClick={() => onNotify(project.projectName)}
                  >
                    Get Notified
                    <i className='bi bi-bell'></i>
                  </button>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjectsSection;
