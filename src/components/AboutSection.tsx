import { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/custom.css';
import '../styles/team.css';
import '../styles/responsive.css';
import { logoPortrait } from '@/utils/appData';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const teamsRef = useRef<HTMLDivElement>(null);

  const teams = [
    { icon: 'bi-code-square', role: 'Frontend Developers' },
    { icon: 'bi-server', role: 'Backend Developers' },
    { icon: 'bi-shield-check', role: 'Quality Assurance Team' },
    { icon: 'bi-phone', role: 'Mobile Developers' },
    { icon: 'bi-pencil', role: 'UI/UX Designers' },
    { icon: 'bi-cloud', role: 'Cloud & DevOps Experts' },
  ];

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0, rotation: -10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: logoRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    if (teamsRef.current) {
      gsap.fromTo(teamsRef.current.children,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: teamsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title gradient-text">About AuraSyntax</h2>
          <p className="section-subtitle">
            Where Logic Meets Imagination
          </p>
        </Fade>

        <div className="row mt-5 align-items-center">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <img
              ref={logoRef}
              src={logoPortrait}
              alt="AuraSyntax Logo"
              className="img-fluid about-img"
              style={{ maxWidth: '280px' }}
              draggable={false}
            />
          </div>
          <div className="col-lg-8">
            <div ref={textRef}>
              <p className='section-paragraph' style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                At AuraSyntax, we're a team of engineers, designers, and problem-solvers
                dedicated to building tomorrow's technology today. From artificial intelligence
                and mobile innovation to cloud infrastructure, DevOps automation, and cutting-edge
                cybersecurity — we take on the challenges that matter. Our mission is simple:
                to merge creative aura with structured syntax and deliver software that inspires.
              </p>
              <p className='section-paragraph' style={{ color: 'var(--text-secondary)' }}>
                We believe great software starts with bold ideas. Whether you're building a disruptive
                startup, modernizing enterprise systems, or exploring the future of intelligent applications,
                we're here to bring the vision to life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-center mb-5 gradient-text sub-section-title">Our Team</h3>
          <div className="row team-grid-row" ref={teamsRef}>
            {teams.map((team, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-4 col-xxl-3">
                <div className="team-card">
                  <div className="team-card-inner">
                    <div className="team-icon-wrapper">
                      <i className={`bi ${team.icon} team-icon`}></i>
                    </div>
                    <h5 className="team-role">{team.role}</h5>
                    <div className="team-card-glow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
