import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/custom.css';
import BackToTop from '@/components/BackToTop';
import SEO from '@/components/SEO';

const Terms = () => {
  return (
    <React.Fragment>
      <SEO
        title="Terms & Conditions | AuraSyntax"
        description="Read AuraSyntax Terms & Conditions. Learn about our service agreements, intellectual property, payment terms, confidentiality, and warranty policies."
        keywords="AuraSyntax, terms and conditions, legal, service agreement, software development terms, IT consulting terms"
        canonicalUrl="https://aurasyntax.com/terms"
      />
      <Navbar />

      <section className="section terms-policy-section">
        <div className="container">
          <Fade direction="up" triggerOnce>
            <h2 className="section-title gradient-text">Terms & Conditions</h2>
            <p className="section-subtitle">
              Last updated on: October 20, 2025
            </p>
          </Fade>

          <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Fade direction="up" delay={200} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">1. Agreement to Terms</h3>
                <p>
                  By accessing and using AuraSyntax services, you agree to be bound by these Terms and Conditions.
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">2. Services Description</h3>
                <p>
                  AuraSyntax provides software development services including web development, mobile applications,
                  AI & machine learning solutions, blockchain development, cloud & DevOps, UI/UX design, e-commerce
                  solutions, system integration, and IT consulting.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">3. Intellectual Property</h3>
                <p>
                  All intellectual property rights in the deliverables, unless otherwise agreed in writing, shall
                  be transferred to the client upon full payment. AuraSyntax retains the right to showcase completed
                  work in our portfolio unless explicitly restricted by confidentiality agreements.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={500} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">4. Payment Terms</h3>
                <p>
                  Payment terms will be outlined in individual project contracts. Generally, projects require a deposit
                  before work commences, with the balance due upon completion. Late payments may incur additional charges.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={600} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">5. Confidentiality</h3>
                <p>
                  AuraSyntax agrees to maintain the confidentiality of all client information and project details.
                  We will not disclose any confidential information to third parties without prior written consent.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={700} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">6. Limitation of Liability</h3>
                <p>
                  AuraSyntax shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from the use or inability to use our services. Our total liability shall not
                  exceed the amount paid for the specific service in question.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={800} triggerOnce>
              <section className="mb-5">
                <h3 className="mb-3">7. Warranty</h3>
                <p>
                  We warrant that services will be performed in a professional and workmanlike manner. Bug fixes and
                  minor adjustments are provided for a specified period after project delivery as outlined in the
                  project contract.
                </p>
              </section>
            </Fade>

            <Fade direction="up" delay={900} triggerOnce>
              <section>
                <h3 className="mb-3">8. Changes to Terms</h3>
                <p>
                  AuraSyntax reserves the right to modify these terms at any time. Changes will be effective
                  immediately upon posting to our website. Your continued use of our services constitutes acceptance
                  of any changes.
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

export default Terms;
