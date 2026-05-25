import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, ChevronDown } from 'lucide-react';
import useHeroAnimation from '../hooks/useHeroAnimation';
import useScrollReveal from '../hooks/useScrollReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import TextReveal from '../components/shared/TextReveal';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import MagneticButton from '../components/shared/MagneticButton';
import services from '../data/services';
import testimonials from '../data/testimonials';
import portfolio from '../data/portfolio';
import './Home.css';

export default function Home() {
  const heroRef = useHeroAnimation();
  const statsRef = useStaggerReveal();
  const servicesGridRef = useStaggerReveal();
  const portfolioRef = useStaggerReveal();
  const testimonialRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const featuredProjects = portfolio.filter(p => p.featured);
  const featuredTestimonial = testimonials[0];

  return (
    <main>
      {/* ===== Hero Section ===== */}
      <section className="hero" ref={heroRef} id="hero-section">
        <div className="hero__bg-blobs">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__blob hero__blob--3" />
        </div>
        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <Sparkles size={14} /> Modern Digital Growth Studio
            </div>
            <h1 className="hero__title">
              <span className="line">We Ignite</span>
              <span className="line text-gradient">Digital Growth</span>
            </h1>
            <p className="hero__subtitle">
              Strategic branding, scroll-stopping content, and AI-powered systems that help ambitious brands scale faster than ever.
            </p>
            <div className="hero__ctas">
              <MagneticButton className="btn btn-primary btn-lg" onClick={() => window.location.href='/contact'}>
                Book a Discovery Call <ArrowRight size={18} />
              </MagneticButton>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__phone">
              <div className="hero__phone-screen">
                <div className="hero__phone-header">
                  <div className="hero__phone-dot" />
                  <span>NavvByte Dashboard</span>
                </div>
                <div className="hero__phone-stats">
                  <div className="hero__phone-stat">
                    <span className="hero__phone-stat-value">+285%</span>
                    <span className="hero__phone-stat-label">Growth</span>
                  </div>
                  <div className="hero__phone-stat">
                    <span className="hero__phone-stat-value">12.5K</span>
                    <span className="hero__phone-stat-label">Leads</span>
                  </div>
                </div>
                <div className="hero__phone-chart">
                  <div className="hero__phone-bar" style={{ height: '30%' }} />
                  <div className="hero__phone-bar" style={{ height: '50%' }} />
                  <div className="hero__phone-bar" style={{ height: '40%' }} />
                  <div className="hero__phone-bar" style={{ height: '70%' }} />
                  <div className="hero__phone-bar" style={{ height: '60%' }} />
                  <div className="hero__phone-bar" style={{ height: '90%' }} />
                  <div className="hero__phone-bar" style={{ height: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ===== Trusted By ===== */}
      <section className="trusted section" id="trusted-section">
        <div className="container">
          <p className="trusted__label">Trusted by innovative brands</p>
          <div className="trusted__marquee">
            <div className="trusted__track">
              {['Luxe Living', 'TechNova', 'GreenLeaf', 'FitPulse', 'Artisan Coffee', 'EduSpark', 'UrbanStyle', 'SmartHire',
                'Luxe Living', 'TechNova', 'GreenLeaf', 'FitPulse', 'Artisan Coffee', 'EduSpark', 'UrbanStyle', 'SmartHire'
              ].map((name, i) => (
                <span key={i} className="trusted__brand">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats section" id="stats-section">
        <div className="container">
          <div className="stats__grid" ref={statsRef}>
            <div className="stats__item">
              <span className="stats__number"><AnimatedCounter target={500} suffix="+" /></span>
              <span className="stats__label">Projects Delivered</span>
            </div>
            <div className="stats__item">
              <span className="stats__number"><AnimatedCounter target={200} suffix="+" /></span>
              <span className="stats__label">Happy Clients</span>
            </div>
            <div className="stats__item">
              <span className="stats__number"><AnimatedCounter target={5} suffix="+" /></span>
              <span className="stats__label">Years of Experience</span>
            </div>
            <div className="stats__item">
              <span className="stats__number"><AnimatedCounter target={98} suffix="%" /></span>
              <span className="stats__label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Preview ===== */}
      <section className="section section--surface" id="services-preview">
        <div className="container">
          <div className="section__header">
            <span className="section__badge"><Sparkles size={14} /> What We Do</span>
            <TextReveal>Services That Drive Results</TextReveal>
            <p>We combine creativity, strategy, and technology to deliver comprehensive digital growth solutions.</p>
          </div>
          <div className="home-services__grid" ref={servicesGridRef}>
            {services.map(service => (
              <Link to="/services" key={service.id} className="home-service-card card" id={`service-${service.id}`}>
                <div className="home-service-card__icon" style={{ color: service.color }}>
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <span className="home-service-card__link">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Portfolio Preview ===== */}
      <section className="section" id="portfolio-preview">
        <div className="container">
          <div className="section__header">
            <span className="section__badge"><Sparkles size={14} /> Our Work</span>
            <TextReveal>Featured Projects</TextReveal>
            <p>A glimpse of the digital experiences we've crafted for our clients.</p>
          </div>
          <div className="home-portfolio__grid" ref={portfolioRef}>
            {featuredProjects.map(project => (
              <Link to="/portfolio" key={project.id} className="home-project-card" id={`project-${project.id}`}>
                <div className="home-project-card__image">
                  <div className="home-project-card__placeholder" style={{ background: project.id % 2 === 0 ? 'var(--gradient-cool)' : 'var(--gradient-warm)' }}>
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="home-project-card__overlay">
                    <span className="pill pill--active">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
            <Link to="/portfolio" className="home-portfolio__cta">
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonial ===== */}
      <section className="section section--surface" id="testimonial-section">
        <div className="container">
          <div className="home-testimonial" ref={testimonialRef}>
            <div className="home-testimonial__quote">
              <span className="home-testimonial__mark">"</span>
              <p>{featuredTestimonial.quote}</p>
            </div>
            <div className="home-testimonial__author">
              <div className="home-testimonial__avatar">
                {featuredTestimonial.name.charAt(0)}
              </div>
              <div>
                <strong>{featuredTestimonial.name}</strong>
                <span>{featuredTestimonial.role}, {featuredTestimonial.company}</span>
              </div>
              <div className="stars">
                {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <Link to="/testimonials" className="btn btn-ghost">
              Read more testimonials <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="home-cta section" id="cta-section">
        <div className="home-cta__bg">
          <div className="home-cta__blob home-cta__blob--1" />
          <div className="home-cta__blob home-cta__blob--2" />
        </div>
        <div className="container" ref={ctaRef}>
          <div className="home-cta__content">
            <TextReveal>Ready to Scale Your Brand?</TextReveal>
            <p>Let's build something amazing together. Book a free discovery call and let's map your growth roadmap.</p>
            <MagneticButton className="btn btn-primary btn-lg" onClick={() => window.location.href='/contact'}>
              Book a Free Call <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
