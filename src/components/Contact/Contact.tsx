import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    console.log('Form submitted:', formData);
    setStatus('success');

    setTimeout(() => {
      setFormData({
        name: '',
        contact: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
      setStatus('idle');
    }, 3000);
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className={styles.contactContainer}>
        <Fade direction="up" triggerOnce>
          <div className="section-title">
            <h2>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className={styles.subtitle}>
              Whether you have a bold idea, a technical challenge, or just want to say hello — we're ready to collaborate.
            </p>
          </div>
        </Fade>

        <div className={styles.contactContent}>
          <Fade direction="left" triggerOnce>
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="bi-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:aurasyntax@gmail.com">aurasyntax@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="bi-telephone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:0740856341">0740856341</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="bi-facebook"></i>
                </div>
                <div>
                  <h4>Facebook</h4>
                  <a href="https://www.facebook.com/AuraSyntax" target="_blank" rel="noopener noreferrer">
                    facebook.com/AuraSyntax
                  </a>
                </div>
              </div>

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
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name <span className={styles.required}>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact">Contact Number <span className={styles.required}>*</span></label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="Your contact number"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject <span className={styles.required}>*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message <span className={styles.required}>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry"
                  />
                </div>

                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button type="submit" className={styles.submitBtn}>
                  Send Message <i className="bi-send"></i>
                </button>

                {status === 'success' && (
                  <div className={styles.successMessage}>
                    <i className="bi-check-circle"></i> Thank you! Your message has been sent successfully.
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorMessage}>
                    <i className="bi-x-circle"></i> Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
