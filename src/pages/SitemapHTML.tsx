import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import '../styles/custom.css';

const SitemapHTML = () => {
  return (
    <React.Fragment>
      <SEO
        title="Sitemap | AuraSyntax"
        description="Browse AuraSyntax website sitemap. Find all pages, services, projects, and important links in one place."
        keywords="AuraSyntax sitemap, website navigation, site map"
        canonicalUrl="https://www.aurasyntax.com/sitemap"
      />
      <Navbar />
      
      <section className="section" style={{ minHeight: '60vh', paddingTop: '120px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section-title gradient-text mb-4">Website Sitemap</h1>
              <p className="section-subtitle mb-5">
                Navigate through all pages and sections of our website
              </p>

              <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                  <h2 className="h4 mb-3" style={{ color: '#43c1ce' }}>Main Pages</h2>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link to="/" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Home
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/terms" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/privacy" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h2 className="h4 mb-3" style={{ color: '#43c1ce' }}>Services</h2>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link to="/services/1" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Web Development
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/services/2" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Mobile Development
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/services/3" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/services/4" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Blockchain Development
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/services/5" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Cloud & DevOps
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h2 className="h4 mb-3" style={{ color: '#43c1ce' }}>Projects</h2>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link to="/projects/1" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Kover Drive
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/projects/2" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Parking Deals
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/projects/3" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Singai Restaurant
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12">
                  <h2 className="h4 mb-3" style={{ color: '#43c1ce' }}>Sections on Homepage</h2>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="/#home" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Home Section
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/#about" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        About Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/#services" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Services
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/#projects" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Projects
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/#contact" className="text-decoration-none" style={{ color: 'var(--text-secondary)' }}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default SitemapHTML;

