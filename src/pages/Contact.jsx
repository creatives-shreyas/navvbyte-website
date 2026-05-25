import { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/shared/TextReveal';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollReveal();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="contact-page">
      <section className="section contact-hero" id="contact-hero">
        <div className="container">
          <span className="section__badge"><Sparkles size={14} /> Get in Touch</span>
          <TextReveal tag="h1">Let's Talk Growth</TextReveal>
          <p className="contact-hero__desc">
            Have a project in mind? Want to discuss growth strategies? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section" id="contact-form-section">
        <div className="container">
          <div className="contact-grid" ref={formRef}>
            <div className="contact-form-wrapper">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    id="contact-form"
                  >
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label htmlFor="contact-name">Full Name</label>
                        <input type="text" id="contact-name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="contact-form__field">
                        <label htmlFor="contact-email">Email Address</label>
                        <input type="email" id="contact-email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label htmlFor="contact-phone">Phone Number</label>
                        <input type="tel" id="contact-phone" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="contact-form__field">
                        <label htmlFor="contact-subject">Subject</label>
                        <select id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required>
                          <option value="" disabled>Select a service</option>
                          <option value="branding">Branding & Identity</option>
                          <option value="content">Content Creation</option>
                          <option value="social">Social Media Marketing</option>
                          <option value="ai">AI & Automation</option>
                          <option value="web">Web Development</option>
                          <option value="crm">CRM & Growth</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="contact-message">Your Message</label>
                      <textarea id="contact-message" name="message" placeholder="Tell us about your project, goals, and timeline..." rows="5" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg contact-form__submit" id="submit-btn">
                      Send Message <Send size={18} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    id="contact-success"
                  >
                    <div className="contact-success__icon"><CheckCircle size={48} /></div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="contact-info">
              <div className="contact-info__card card">
                <h3>Contact Information</h3>
                <p>Reach out to us through any of these channels.</p>
                <div className="contact-info__items">
                  <a href="mailto:hello@navvbyte.com" className="contact-info__item" id="contact-email-link">
                    <div className="contact-info__icon"><Mail size={20} /></div>
                    <div><strong>Email</strong><span>hello@navvbyte.com</span></div>
                  </a>
                  <a href="tel:+919876543210" className="contact-info__item" id="contact-phone-link">
                    <div className="contact-info__icon"><Phone size={20} /></div>
                    <div><strong>Phone</strong><span>+91 98765 43210</span></div>
                  </a>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><MapPin size={20} /></div>
                    <div><strong>Office</strong><span>Nagpur, Maharashtra, India</span></div>
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hi%20NavvByte!%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn contact-whatsapp"
                  id="contact-whatsapp"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
