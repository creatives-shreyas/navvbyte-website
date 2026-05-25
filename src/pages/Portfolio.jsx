import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import portfolio from '../data/portfolio';
import './Portfolio.css';

const categories = ['All', 'Branding', 'Web', 'AI', 'Social Media'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const gridRef = useStaggerReveal();
  const filtered = active === 'All' ? portfolio : portfolio.filter(p => p.category === active);

  return (
    <main className="portfolio-page">
      <section className="section portfolio-hero" id="portfolio-hero">
        <div className="container">
          <span className="section__badge"><Sparkles size={14} /> Our Work</span>
          <TextReveal tag="h1">Projects We're Proud Of</TextReveal>
          <p className="portfolio-hero__desc">A curated collection of our best work across branding, web, AI, and social media.</p>
        </div>
      </section>

      <section className="section" id="portfolio-grid">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button key={cat} className={`pill ${active === cat ? 'pill--active' : ''}`} onClick={() => setActive(cat)} id={`filter-${cat.toLowerCase().replace(' ', '-')}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="portfolio-grid" ref={gridRef} key={active}>
            {filtered.map(project => (
              <div key={project.id} className={`portfolio-card ${project.featured ? 'portfolio-card--featured' : ''}`} id={`portfolio-${project.id}`}>
                <div className="portfolio-card__image">
                  <div className="portfolio-card__placeholder" style={{ background: project.id % 2 === 0 ? 'var(--gradient-cool)' : project.id % 3 === 0 ? 'var(--gradient-primary)' : 'var(--gradient-warm)' }}>
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="portfolio-card__overlay">
                    <span className="pill pill--active">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-card__metrics">
                      {Object.values(project.metrics).map((m, i) => (
                        <span key={i} className="portfolio-card__metric">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="portfolio-cta" style={{ textAlign: 'center' }}>
        <div className="container">
          <TextReveal>Have a Project in Mind?</TextReveal>
          <p style={{ fontSize: '1.125rem', margin: '1rem auto 2rem', maxWidth: '500px' }}>
            Let's discuss how we can bring your vision to life.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
