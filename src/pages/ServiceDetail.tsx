import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/mockData';
import '../styles/custom.css';

gsap.registerPlugin(ScrollToPlugin);


const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === Number(id));

  useEffect(() => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0,
      ease: 'power2.out'
    });
  }, []);

  const handleGetStarted = (serviceName: string) => {
    navigate("/", {
      state: { serviceName },
    });
  };

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ minHeight: '100vh', paddingTop: '150px' }}>
          <div className="text-center">
            <h1>Service Not Found</h1>
            <button className="btn-primary-aura mt-4" onClick={() => navigate('/')}>
              Go Back Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <section className="section service-section">
        <div className="container">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-5">
              <div className="service-det-icon-area">
                <i className={`bi ${service.icon}`} style={{ fontSize: '4rem', color: '#43c1ce' }}></i>
              </div>

              <h1 className="gradient-text service-head mb-3">{service.serviceName}</h1>
              <p className="lead service-description" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {service.description}
              </p>
            </div>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <div className="glass-card service-feaure-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3>Key Features</h3>
              <div className="row g-4">
                {service.serviceFeatures.map((feature, index) => (
                  <div key={feature.id} className="col-md-6">
                    <Fade direction="up" delay={index * 50} triggerOnce>
                      <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill me-3" style={{ color: '#43c1ce', fontSize: '1.25rem' }}></i>
                        <div>
                          <h6 className="feature-title mb-2">{feature.feature}</h6>
                          <p className="feature-description mb-0">
                            {feature?.description}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade direction="up" delay={400} triggerOnce>
            <div className="text-center mt-5">
              <button
                className="btn-primary-aura me-3"
                onClick={() => handleGetStarted(service.serviceName)}
              >
                Get Started
                <i className="bi bi-arrow-right"></i>
              </button>
              <button className="btn-outline-aura" onClick={() => navigate('/')}>
                Back to Home
              </button>
            </div>
          </Fade>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
