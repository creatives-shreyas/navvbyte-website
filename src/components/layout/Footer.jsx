import { Link } from 'react-router-dom';
import { Globe, ExternalLink, AtSign, PlayCircle, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo/logo_transparent.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer__gradient-border" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="NavvByte Labs" />
              <span>NavvByte</span>
            </Link>
            <p className="footer__tagline">Innovate • Build • Grow</p>
            <p className="footer__desc">
              We help ambitious brands scale through creative technology, strategic marketing, and AI-powered growth solutions.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social"><AtSign size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="footer__social"><ExternalLink size={18} /></a>
              <a href="#" aria-label="Twitter" className="footer__social"><Globe size={18} /></a>
              <a href="#" aria-label="YouTube" className="footer__social"><PlayCircle size={18} /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/ai-solutions">AI Solutions</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <Link to="/services">Branding & Identity</Link>
            <Link to="/services">Content Creation</Link>
            <Link to="/services">Social Media Marketing</Link>
            <Link to="/services">AI Systems & Automation</Link>
            <Link to="/services">Web Development</Link>
            <Link to="/services">CRM & Growth</Link>
          </div>

          <div className="footer__col">
            <h4>Get in Touch</h4>
            <a href="mailto:hello@navvbyte.com" className="footer__contact-item">
              <Mail size={16} /> hello@navvbyte.com
            </a>
            <a href="tel:+919876543210" className="footer__contact-item">
              <Phone size={16} /> +91 98765 43210
            </a>
            <div className="footer__contact-item">
              <MapPin size={16} /> Nagpur, Maharashtra, India
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} NavvByte Labs. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
