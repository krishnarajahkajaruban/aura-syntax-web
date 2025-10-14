import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { services } from '../data/mockData';
import styles from './ServiceDetail.module.css';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === parseInt(id || '0'));

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h1>Service Not Found</h1>
        <Link to="/" className={styles.backLink}>
          <i className="bi-arrow-left"></i> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.serviceDetail}>
      <div className={styles.detailContainer}>
        <Fade direction="up" triggerOnce>
          <Link to="/" className={styles.backLink}>
            <i className="bi-arrow-left"></i> Back to Home
          </Link>

          <div className={styles.serviceHeader}>
            <div className={styles.serviceIcon}>
              <i className={service.icon}></i>
            </div>
            <div>
              <h1 className={styles.serviceName}>{service.serviceName}</h1>
              <p className={styles.serviceTagline}>Professional solutions tailored to your needs</p>
            </div>
          </div>

          <div className={styles.serviceContent}>
            <section className={styles.descriptionSection}>
              <h2>Overview</h2>
              <p className={styles.description}>{service.description}</p>
            </section>

            <section className={styles.featuresSection}>
              <h2>What We Offer</h2>
              <div className={styles.featuresGrid}>
                {service.serviceFeatures.map((feature) => (
                  <div key={feature.id} className={styles.featureCard}>
                    <i className="bi-check-circle-fill"></i>
                    <span>{feature.feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.ctaSection}>
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how we can help bring your project to life.</p>
              <a href="/#contact" className={styles.ctaButton}>
                Contact Us <i className="bi-arrow-right"></i>
              </a>
            </section>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ServiceDetail;
