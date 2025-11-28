import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../styles/custom.css';
import { goToTop } from '@/hooks/common';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <footer className="footer">
      <div className="footer-brand-section">
        <h3 className="footer-brand-title">AuraSyntax</h3>
        <p className="footer-tagline">Craft the logic. Build what's next.</p>
      </div>

      <div className="container">
        <div className="row footer-content">
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 footer-col">
            <h4 className="footer-col-title">Connect With Us</h4>
            <div className="footer-social">
              <Link
                to="https://www.facebook.com/profile.php?id=100094623707325"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit AuraSyntax on Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </Link>

              <Link
                to="https://www.instagram.com/aura_syntax?igsh=a3JjZ242N2VqNTg3"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit AuraSyntax on Instagram"
              >
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </Link>

              <Link
                to="http://wa.me/+94740856341?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20software%20solutions.%20Could%20you%20provide%20more%20information?"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Contact AuraSyntax on WhatsApp"
              >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="footer-link-btn"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="footer-link-btn"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="footer-link-btn"
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="footer-link-btn"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms" onClick={goToTop}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" onClick={goToTop}>Privacy Policy</Link></li>
              <li><Link to="/sitemap" onClick={goToTop}>Sitemap</Link></li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 footer-col">
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="bi bi-envelope"></i>
                <Link to='mailto:aurasyntax@gmail.com'>aurasyntax@gmail.com</Link>
              </p>
              <p>
                <i className="bi bi-telephone"></i>
                <Link to='tel:+94740856341'>+94 74 085 6341</Link>
              </p>
              <p>
                <i className="bi bi-geo-alt"></i>
                <span>Global - Remote Software Development Services</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <span className='gradient-text'>AuraSyntax</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
