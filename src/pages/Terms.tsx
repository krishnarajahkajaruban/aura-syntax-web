import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import styles from './LegalPages.module.css';

const Terms = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <Fade direction="up" triggerOnce>
          <Link to="/" className={styles.backLink}>
            <i className="bi-arrow-left"></i> Back to Home
          </Link>

          <h1 className={styles.pageTitle}>Terms & Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

          <div className={styles.content}>
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the AuraSyntax website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2>2. Services</h2>
              <p>
                AuraSyntax provides software development services including but not limited to web development, mobile development, AI & machine learning, blockchain solutions, cloud & DevOps, UI/UX design, e-commerce, system integration, and IT consulting.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2>3. User Responsibilities</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for:
              </p>
              <ul>
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of any account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of AuraSyntax and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                Unless otherwise specified in a project agreement, all deliverables and work products created by AuraSyntax for clients become the property of the client upon full payment.
              </p>
            </section>

            <section>
              <h2>5. Project Agreements</h2>
              <p>
                Specific terms for project delivery, timelines, payment schedules, and deliverables will be outlined in individual project agreements or statements of work. These project-specific terms supplement and, where applicable, supersede these general Terms & Conditions.
              </p>
            </section>

            <section>
              <h2>6. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul>
                <li>Invoices are due within the timeframe specified in the agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>Project work may be suspended for overdue payments</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, AuraSyntax shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2>8. Warranty Disclaimer</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.
              </p>
            </section>

            <section>
              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page with an updated revision date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AuraSyntax operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <ul>
                <li>Email: aurasyntax@gmail.com</li>
                <li>Phone: 0740856341</li>
              </ul>
            </section>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Terms;
