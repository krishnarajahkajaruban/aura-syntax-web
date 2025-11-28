/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import { services } from '@/data/mockData';
import '../styles/custom.css';
import { heroIllustration } from '@/utils/appData';

const HeroSection = () => {
  const navigate = useNavigate();

  // Split services into two rows
  const firstRowServices = [...services, ...services];
  const secondRowServices = [...services.slice().reverse(), ...services.slice().reverse()];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-lg-6">
            <Fade direction="up" cascade damping={0.2} triggerOnce>
              <h1 className="hero-title fw-bold mb-4">
                <span className="gradient-text">
                  Craft the Logic.<br />
                  Build What's Next.
                </span>
              </h1>

              <p className="hero-paragraph mb-4" style={{ color: 'var(--text-secondary)' }}>
                We blend creative aura with structured syntax to develop modern software
                experiences — from AI and mobile apps to cloud, DevOps, and cybersecurity.
                At AuraSyntax, logic meets imagination.
              </p>

              <p className="hero-paragraph mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                AuraSyntax is a leading software development company specializing in comprehensive digital solutions 
                including web development, mobile applications, artificial intelligence and machine learning, blockchain 
                technology, cloud computing, DevOps automation, UI/UX design, e-commerce platforms, system integration, 
                IT consulting, data analytics, quality assurance, and cybersecurity services. Our expert team delivers 
                scalable, innovative solutions that drive business growth and digital transformation.
              </p>

              <div className="marquee-container">
                <div className="marquee-row">
                  <div className="marquee-content">
                    {firstRowServices.map((service, index) => (
                      <span
                        key={index}
                        className="service-chip"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                        <i className={`bi ${service.icon} me-2`}></i>
                        {service.serviceName}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="marquee-row">
                  <div className="marquee-content">
                    {secondRowServices.map((service, index) => (
                      <span
                        key={index}
                        className="service-chip"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                        <i className={`bi ${service.icon} me-2`}></i>
                        {service.serviceName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="btn-primary-aura"
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - 70; // 70px offset
                      window.scrollTo({
                        top: topPosition,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  Explore Our Services
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-illustration"
            >
              <img
                src={heroIllustration}
                alt="Development Illustration"
                className="img-fluid hero-img"
                width="1200"
                height="957"
                fetchPriority="high"
                style={{ aspectRatio: '1200/957' }}
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
