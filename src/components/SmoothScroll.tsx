import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const scrollConfig = {
      duration: 1.2,
      ease: 'power2.out'
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((link as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          gsap.to(window, {
            scrollTo: { y: target, offsetY: 100 },
            ...scrollConfig
          });
        }
      });
    });

    const images = document.querySelectorAll('.hero-illustration');
    images.forEach((img) => {
      gsap.to(img, {
        y: () => -window.innerHeight * 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
