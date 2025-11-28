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
              alt="AuraSyntax Logo - Where Logic Meets Imagination"
              className="img-fluid about-img"
              loading="lazy"
              width="280"
              height="400"
              style={{ maxWidth: '280px', aspectRatio: '280/400', objectFit: 'contain' }}
              draggable={false}
            />
          </div>
          <div className="col-lg-8">
            <div ref={textRef}>
              <p className='section-paragraph' style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                At AuraSyntax, we&apos;re a team of engineers, designers, and problem-solvers
                dedicated to building tomorrow&apos;s technology today. From artificial intelligence
                and mobile innovation to cloud infrastructure, DevOps automation, and cutting-edge
                cybersecurity — we take on the challenges that matter. Our mission is simple:
                to merge creative aura with structured syntax and deliver software that inspires.
              </p>
              <p className='section-paragraph' style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We believe great software starts with bold ideas. Whether you&apos;re building a disruptive
                startup, modernizing enterprise systems, or exploring the future of intelligent applications,
                we&apos;re here to bring the vision to life. Our comprehensive suite of services covers the entire
                software development lifecycle, from initial concept and design through development, testing,
                deployment, and ongoing maintenance.
              </p>
              <p className='section-paragraph' style={{ color: 'var(--text-secondary)' }}>
                With expertise spanning across multiple technologies and platforms including{' '}
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#43c1ce' }}>React</a>,{' '}
                <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#43c1ce' }}>Node.js</a>,{' '}
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#43c1ce' }}>AWS Cloud</a>, and{' '}
                <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#43c1ce' }}>Kubernetes</a>, AuraSyntax has successfully
                delivered projects across various industries including restaurant management systems, sports
                facility booking platforms, airport parking management systems, and enterprise solutions.
                We prioritize client collaboration, transparent communication, and agile methodologies to ensure
                timely delivery of high-quality software solutions that exceed expectations.
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
                    <h4 className="team-role">{team.role}</h4>
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
