import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/data/mockData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/custom.css';
import '../styles/responsive.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      gsap.fromTo(swiperRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="services" className="section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title gradient-text">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive software solutions tailored to your needs
          </p>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div ref={swiperRef} className='swiper-area'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-nav-btn.next',
                prevEl: '.swiper-nav-btn.prev',
              }}
              grabCursor={true}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1366: { slidesPerView: 3 }
              }}
              className="swiper-container"
            >
              {services.map((service) => (
                <SwiperSlide key={`service.id-${service.id}`} className="service-slide">
                  <div
                    className="glass-card h-100"
                  >
                    <div className=" mb-4">
                      <div
                        className="d-inline-flex align-items-center justify-content-center service-icon-container"
                      >
                        <img
                          src={service?.iconImg}
                          alt={service?.serviceName}
                          className='img-fluid'
                          draggable={false}
                        />
                      </div>
                    </div>

                    <h4 className="service-title mb-3">{service.serviceName}</h4>

                    <ul className='service-feature-list'>
                      {service?.serviceFeatures?.slice(0, 5)?.map((feature) => (
                        <li key={`serviceFeatre-${feature?.id}`}>{feature?.feature}</li>
                      ))}
                    </ul>

                    <div className="">
                      <button
                        className="btn-outline-aura service-btn"
                        onClick={() => navigate(`/services/${service.id}`)}
                      >
                        Know More
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button aria-label='Prev' type='button' className='btn-outline-aura fill swiper-nav-btn prev'>
              <i className='bi bi-arrow-left'></i>
            </button>

            <button aria-label='Next' type='button' className='btn-outline-aura fill swiper-nav-btn next'>
              <i className='bi bi-arrow-right'></i>
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ServicesSection;
