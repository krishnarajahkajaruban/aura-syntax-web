import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';
import { services } from '../../data/mockData';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={`${styles.services} section`} id="services">
      <div className={styles.servicesContainer}>
        <Fade direction="up" triggerOnce>
          <div className="section-title">
            <h2>
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className={styles.subtitle}>
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </Fade>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.servicesSwiper}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className={styles.serviceName}>{service.serviceName}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <a href={`/services/${service.id}`} className={styles.knowMore}>
                    Know more <i className="bi-arrow-right"></i>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Fade direction="up" triggerOnce delay={300}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceGridItem}>
                <div className={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>
                <h4>{service.serviceName}</h4>
                <p>{service.description}</p>
                <a href={`/services/${service.id}`} className={styles.gridLink}>
                  Learn more <i className="bi-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Services;
