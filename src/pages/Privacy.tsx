import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import styles from './LegalPages.module.css';

const Privacy = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <Fade direction="up" triggerOnce>
          <Link to="/" className={styles.backLink}>
            <i className="bi-arrow-left"></i> Back to Home
          </Link>

          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

          <div className={styles.content}>
            <section>
              <h2>1. Introduction</h2>
              <p>
                AuraSyntax ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Contact us through our contact form</li>
                <li>Subscribe to notifications about upcoming projects</li>
                <li>Request information about our services</li>
                <li>Enter into a business relationship with us</li>
              </ul>
              <p>
                This information may include:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project requirements and details</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and complete service requests</li>
                <li>Send you project updates and notifications</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal processes</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users or others</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2>7. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on servers located outside of your jurisdiction. By using our services, you consent to the transfer of your information to countries that may have different data protection laws.
              </p>
            </section>

            <section>
              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page with an updated revision date. Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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

export default Privacy;
