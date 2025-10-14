import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <img src="/AuraSyntax Logo.png" alt="AuraSyntax" />
              <div>
                <h3>AuraSyntax</h3>
                <p>Craft the Logic</p>
              </div>
            </div>
            <p className={styles.footerDescription}>
              Building modern software experiences from AI and mobile apps to cloud, DevOps, and cybersecurity.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/AuraSyntax" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi-facebook"></i>
              </a>
              <a href="https://twitter.com/AuraSyntax" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bi-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/aurasyntax" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi-linkedin"></i>
              </a>
              <a href="https://github.com/AuraSyntax" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi-github"></i>
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/" onClick={scrollToTop}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Services</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <i className="bi-envelope"></i>
                <a href="mailto:aurasyntax@gmail.com">aurasyntax@gmail.com</a>
              </li>
              <li>
                <i className="bi-telephone"></i>
                <a href="tel:0740856341">0740856341</a>
              </li>
              <li>
                <i className="bi-facebook"></i>
                <a href="https://www.facebook.com/AuraSyntax" target="_blank" rel="noopener noreferrer">
                  facebook.com/AuraSyntax
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} AuraSyntax. All rights reserved.</p>
          <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Scroll to top">
            <i className="bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
