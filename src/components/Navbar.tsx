import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/logo.png';
import '../styles/custom.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = sectionPosition - 80;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      let current = activeSection;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          const height = el.offsetHeight;
          if (top <= window.innerHeight / 3 && top + height > 0) {
            current = section;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav className="navbar-aura" style={{ zIndex: 1000 }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link
            to="/"
            onClick={() => handleNavClick('home')}
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src={logo}
              alt="AuraSyntax"
              style={{ height: '40px' }}
              draggable={false}
            />
          </Link>

          <button
            ref={buttonRef}
            className={`navbar-toggler d-lg-none ${isOpen ? 'active' : ''}`}
            onClick={handleToggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>

          <div ref={menuRef} className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <button
              aria-label='Home'
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>

            <button
              aria-label='About'
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>

            <button
              aria-label='Services'
              onClick={() => handleNavClick('services')}
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </button>

            <button
              aria-label='Contact'
              onClick={() => handleNavClick('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>

            <button
              aria-label='Get Started'
              onClick={() => handleNavClick('contact')}
              className="nav-cta-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
