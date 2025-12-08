import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { services, projects } from '@/data/mockData';
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
                    {services.filter(s => s.status).map((service) => (
                      <li key={service.id} className="mb-2">
                        <Link 
                          to={`/services/${service.id}`} 
                          className="text-decoration-none" 
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {service.serviceName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h2 className="h4 mb-3" style={{ color: '#43c1ce' }}>Projects</h2>
                  <ul className="list-unstyled">
                    {projects.filter(p => p.status).map((project) => (
                      <li key={project.id} className="mb-2">
                        <Link 
                          to={`/projects/${project.id}`} 
                          className="text-decoration-none" 
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {project.name}
                        </Link>
                      </li>
                    ))}
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

