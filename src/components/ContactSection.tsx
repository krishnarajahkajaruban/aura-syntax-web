import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'sonner';
import { z } from 'zod';
import '../styles/custom.css';
import { Link } from 'react-router-dom';
import { contactIllustration } from '@/utils/appData';

const contactSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, 'First Name is required')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens and apostrophes'),
  lastName: z.string()
    .trim()
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens and apostrophes'),
  contact: z.string()
    .trim()
    .regex(/^[0-9+\-\s()]*$/, 'Invalid phone number format')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  email: z.string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  subject: z.string()
    .trim()
    .min(1, 'Subject is required')
    .max(200, 'Subject must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
});

interface ContactFormProps {
  contactSectionRef: React.RefObject<HTMLDivElement>;
  firstNameRef: React.RefObject<HTMLInputElement>;
  prefilledSubject: string;
}

const ContactSection: React.FC<ContactFormProps> = ({
  contactSectionRef,
  firstNameRef,
  prefilledSubject
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subject: prefilledSubject }));
  }, [prefilledSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactSchema.parse(formData);

      const sanitizedData = {
        firstName: validatedData.firstName.trim(),
        lastName: validatedData.lastName.trim(),
        contact: validatedData.contact?.trim() || '',
        email: validatedData.email.trim(),
        subject: validatedData.subject?.trim() || '',
        message: validatedData.message.trim()
      };

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ firstName: '', lastName: '', contact: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <section id="contact" ref={contactSectionRef} className="section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title gradient-text">Let's Build Something Brilliant</h2>
          <p className="section-subtitle">
            Whether you have a bold idea, a technical challenge, or just want to say hello — we're ready to collaborate.
          </p>
        </Fade>

        <div className="row align-items-center mt-5 pt-2">
          <div className="col-lg-5">
            <Fade direction="left" triggerOnce>
              <div className="text-center mb-4">
                <img
                  src={contactIllustration}
                  alt="Contact Us"
                  className="img-fluid contact-illustration"
                  style={{ maxWidth: '340px' }}
                  draggable={false}
                />
              </div>

              <div className="glass-card contact-info-card">
                <h5 className="contact-info-head">
                  Contact Information
                </h5>

                <div className="contact-info-content">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <small className="mb-1">Email</small>
                    <Link to="mailto:aurasyntax@gmail.com" className="text-decoration-none">
                      aurasyntax@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="contact-info-content">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <small className="mb-1">Phone</small>
                    <Link to="tel:0740856341" className="text-decoration-none">
                      074 085 6341
                    </Link>
                  </div>
                </div>

                <div className="contact-info-content">
                  <i className="bi bi-whatsapp"></i>
                  <div>
                    <small className="mb-1">WhatsApp</small>
                    <Link
                      to="http://wa.me/+94740856341?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20software%20solutions.%20Could%20you%20provide%20more%20information?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none">
                      whatsapp.com/+94 74 085 6341
                    </Link>
                  </div>
                </div>

                <div className="contact-info-content">
                  <i className="bi bi-facebook"></i>
                  <div>
                    <small className="mb-1">Facebook</small>
                    <Link
                      to="https://www.facebook.com/share/16CgR3P1ii/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      facebook.com/Aura Syntax
                    </Link>
                  </div>
                </div>

                <div className="contact-info-content">
                  <i className="bi bi-instagram"></i>
                  <div>
                    <small className="mb-1">Instagram</small>
                    <Link
                      to="https://www.instagram.com/aura_syntax?igsh=a3JjZ242N2VqNTg3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      instagram.com/aura_syntax
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-lg-7">
            <Fade direction="right" triggerOnce>
              <form onSubmit={handleSubmit} className="contact-form">
                <h5 className="contact-form-head">
                  Let’s Connect
                </h5>

                <p className='contact-form-para'>
                  Have a question or project in mind? Fill out the form below, and we’ll get back to you soon!
                </p>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      ref={firstNameRef}
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      maxLength={100}
                      placeholder='Enter your first name'
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder='Enter your last name'
                      maxLength={100}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="contact" className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder='Enter your contact number'
                      maxLength={20}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      maxLength={255}
                      placeholder='Enter your email address'
                      required
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      maxLength={200}
                      placeholder='Enter the subject'
                      required
                    />
                  </div>

                  <div className="col-12 mb-sm-5 mb-4">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      maxLength={2000}
                      placeholder='Type your message here'
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  aria-label='Send Message'
                  type="submit"
                  className="btn-primary-aura send-btn"
                  style={{ width: 'max-content' }}
                >
                  Send Message
                  <i className="bi bi-send"></i>
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
