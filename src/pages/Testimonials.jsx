import { Sparkles, Star } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import useStaggerReveal from '../hooks/useStaggerReveal';
import testimonials from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const gridRef = useStaggerReveal();
  return (
    <main className="testimonials-page">
      <section className="section testimonials-hero"><div className="container">
        <span className="section__badge"><Sparkles size={14} /> Reviews</span>
        <TextReveal tag="h1">What Our Clients Say</TextReveal>
        <p className="testimonials-hero__desc">Real feedback from real clients. Our work speaks for itself.</p>
      </div></section>
      <section className="section"><div className="container">
        <div className="testimonials-grid" ref={gridRef}>
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card card" id={`testimonial-${t.id}`}>
              <div className="stars">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                <div><strong>{t.name}</strong><span>{t.role}, {t.company}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section section--surface"><div className="container" style={{ textAlign: 'center' }}>
        <div className="stats__grid" style={{ maxWidth: '600px', margin: '0 auto', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="stats__item"><span className="stats__number"><AnimatedCounter target={98} suffix="%" /></span><span className="stats__label">Client Satisfaction</span></div>
          <div className="stats__item"><span className="stats__number"><AnimatedCounter target={200} suffix="+" /></span><span className="stats__label">Happy Clients</span></div>
        </div>
      </div></section>
    </main>
  );
}
