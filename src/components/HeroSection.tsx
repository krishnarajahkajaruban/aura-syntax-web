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
                  AuraSyntax
                </span>
              </h1>
              <h2 className="hero-subtitle fw-bold mb-4" style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginTop: '-1rem' }}>
                <span>
                  Craft the Logic.<br />
                  Build What's Next.
                </span>
              </h2>

              <p className="hero-paragraph mb-4" style={{ color: 'var(--text-secondary)' }}>
                AuraSyntax crafts modern digital experiences where creativity meets engineering. From AI and mobile apps to cloud, DevOps, and cybersecurity, AuraSyntax builds technology that inspires and performs.
              </p>

              <p className="hero-paragraph mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                AuraSyntax is a full-stack software development company delivering web and mobile apps, AI/ML solutions, blockchain systems, cloud infrastructure, UI/UX design, e-commerce platforms, and cybersecurity services. We create scalable, high-impact solutions that accelerate business growth and digital transformation.
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
                fetchpriority="high"
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
