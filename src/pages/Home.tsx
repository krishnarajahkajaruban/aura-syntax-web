import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import MilestonesSection from '@/components/MilestonesSection';
import ProjectsSection from '@/components/ProjectsSection';
import UpcomingProjectsSection from '@/components/UpcomingProjectsSection';
import ContactSection from '@/components/ContactSection';
import SmoothScroll from '@/components/SmoothScroll';
import BackToTop from '@/components/BackToTop';
import SEO from '@/components/SEO';
import SEOContent from '@/components/SEOContent';
import { useLocation, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  subject: string;
}

const Home = () => {
  const [formData, setFormData] = useState<FormData>({
    subject: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const state = location?.state as { serviceName?: string } | null;
    
    if (state?.serviceName) {
      setFormData({
        subject: `Requesting a consultation for the ${state.serviceName} service`
      });

      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);

      setTimeout(() => {
        firstNameRef.current?.focus();
      }, 600);

      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate, location.pathname]);

  const handleNotifyMe = (projectName: string) => {
    setFormData({ subject: `I want to get notified about the project: ${projectName}` });

    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      firstNameRef.current?.focus();
    }, 400);
  };

  useEffect(() => {
    gsap.from('body', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    });

    // Set smooth scroll behavior via CSS (GSAP doesn't support scrollBehavior property)
    document.documentElement.style.scrollBehavior = 'smooth';

    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const parallaxElements = document.querySelectorAll('.hero-illustration, .contact-illustration');
    parallaxElements.forEach((element) => {
      gsap.to(element, {
        y: () => -window.innerHeight * 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <React.Fragment>
        <SEO
          title="AuraSyntax - Software Development | Web & AI Solutions"
          description="AuraSyntax provides expert software development, web development, mobile apps, AI, machine learning, blockchain, and cloud computing services. We build innovative, scalable systems that power what's next."
          keywords="AuraSyntax, software development, web development, mobile apps, AI, machine learning, blockchain, cloud computing, DevOps, UI/UX design, e-commerce, system integration, IT consulting, custom software, web applications, mobile applications"
          canonicalUrl="https://www.aurasyntax.com/"
        />
        <SEOContent />
        <Navbar />

        <main>
          <HeroSection />

          <AboutSection />

          <ServicesSection />

          <MilestonesSection />

          <ProjectsSection />

          <UpcomingProjectsSection onNotify={handleNotifyMe} />

          <ContactSection
            contactSectionRef={contactSectionRef}
            firstNameRef={firstNameRef}
            prefilledSubject={formData.subject}
          />
        </main>

        <Footer />

        <BackToTop />
      </React.Fragment>
    </SmoothScroll>
  );
};

export default Home;
