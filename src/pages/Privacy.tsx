import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/custom.css';
import BackToTop from '@/components/BackToTop';
import SEO from '@/components/SEO';

const Privacy = () => {
  return (
    <React.Fragment>
      <SEO
        title="Privacy Policy | AuraSyntax"
        description="AuraSyntax Privacy Policy. Learn how we collect, use, and protect your personal information. Your privacy is important to us."
        keywords="AuraSyntax, privacy policy, data protection, GDPR, user privacy, information security"
        canonicalUrl="https://www.aurasyntax.com/privacy"
      />
      <Navbar />

      <section className="section terms-policy-section">
        <div className="container">
          <Fade direction="up" triggerOnce>
            <h1 className="section-title gradient-text">Privacy Policy</h1>
            <p className="section-subtitle">
              Last updated on: October 20, 2025
            </p>
          </Fade>

          <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Fade direction="up" delay={200} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">1. Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as name, email address, phone number,
                  and project requirements when you contact us or request our services. We also collect information
                  automatically when you use our website, including IP address, browser type, and usage data.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">2. How We Use Your Information</h3>
                <p className="mb-3">
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">3. Information Sharing</h3>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information with trusted service providers who assist us in operating our website and conducting
                  our business, provided they agree to keep this information confidential.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={500} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">4. Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={600} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">5. Cookies and Tracking</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                  being sent. However, some parts of our website may not function properly without cookies.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={700} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">6. Your Rights</h3>
                <p className="mb-3">
                  You have the right to:
                </p>
                <ul>
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>
            </Fade>

            <Fade direction="up" delay={800} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">7. Data Retention</h3>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in
                  this privacy policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={900} triggerOnce>
              <section>
                <h3 className="mb-3">8. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  Email: <Link to="mailto:aurasyntax@gmail.com">aurasyntax@gmail.com</Link>
                  <br />
                  Phone: <Link to="tel:0740856341">074 085 6341</Link>
                </p>
              </section>
            </Fade>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </React.Fragment>
  );
};

export default Privacy;
