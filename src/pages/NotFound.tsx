import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { projects, services } from "@/data/mockData";

// Type definition for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Log 404 errors for analytics (can be integrated with analytics service)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: '404 - Page Not Found'
      });
    }
  }, [location.pathname]);

  const featuredProjects = projects.filter(p => p.status).slice(0, 3);
  const featuredServices = services.filter(s => s.status).slice(0, 4);

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Explore our services, projects, or return to the homepage."
        canonicalUrl={`https://www.aurasyntax.com${location.pathname}`}
        noindex={true}
      />
      <Navbar />
      <div className="notfound-container" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="gradient-text" style={{ fontSize: '8rem', fontWeight: '800', lineHeight: '1', marginBottom: '1rem' }}>
              404
            </h1>
            <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: '600' }}>
              Oops! Page Not Found
            </h2>
            <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button
                className="btn-primary-aura"
                onClick={() => navigate('/')}
              >
                <i className="bi bi-house-door"></i> Go to Homepage
              </button>
              <button
                className="btn-outline-aura"
                onClick={() => navigate(-1)}
              >
                <i className="bi bi-arrow-left"></i> Go Back
              </button>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-12 col-lg-6">
              <div className="glass-card h-100 p-4">
                <h3 className="mb-4">
                  <i className="bi bi-briefcase me-2" style={{ color: '#43c1ce' }}></i>
                  Popular Services
                </h3>
                <ul className="list-unstyled">
                  {featuredServices.map((service) => (
                    <li key={service.id} className="mb-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-decoration-none d-flex align-items-center"
                        style={{ color: '#fff', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#43c1ce'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        {service.serviceName}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('services');
                      if (element) {
                        const yOffset = -120;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="btn-outline-aura btn-sm mt-3"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="glass-card h-100 p-4">
                <h3 className="mb-4">
                  <i className="bi bi-folder me-2" style={{ color: '#43c1ce' }}></i>
                  Featured Projects
                </h3>
                <ul className="list-unstyled">
                  {featuredProjects.map((project) => (
                    <li key={project.id} className="mb-3">
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-decoration-none d-flex align-items-center"
                        style={{ color: '#fff', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#43c1ce'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('projects');
                      if (element) {
                        const yOffset = -120;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="btn-outline-aura btn-sm mt-3"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="mb-3">Need help? Check out these pages:</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/terms" className="btn-outline-aura btn-sm">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="btn-outline-aura btn-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
