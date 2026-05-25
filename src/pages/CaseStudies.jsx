import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/shared/TextReveal';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import useStaggerReveal from '../hooks/useStaggerReveal';
import caseStudies from '../data/caseStudies';
import './CaseStudies.css';

export default function CaseStudies() {
  const gridRef = useStaggerReveal();
  return (
    <main className="casestudies-page">
      <section className="section cs-hero"><div className="container">
        <span className="section__badge"><Sparkles size={14} /> Success Stories</span>
        <TextReveal tag="h1">Case Studies</TextReveal>
        <p className="cs-hero__desc">Deep dives into our best work. Real challenges, real solutions, real results.</p>
      </div></section>
      <section className="section"><div className="container">
        <div className="cs-list" ref={gridRef}>
          {caseStudies.map(cs => (
            <div key={cs.id} className="cs-card card" id={`cs-${cs.id}`}>
              <div className="cs-card__header">
                <span className="cs-card__industry">{cs.industry}</span>
                <h3>{cs.client}</h3>
              </div>
              <div className="cs-card__body">
                <div className="cs-card__section"><h4>Challenge</h4><p>{cs.challenge}</p></div>
                <div className="cs-card__section"><h4>Solution</h4><p>{cs.solution}</p></div>
              </div>
              <div className="cs-card__results">
                {cs.results.map((r, i) => (
                  <div key={i} className="cs-card__result">
                    <span className="cs-card__result-metric text-gradient">{r.metric}</span>
                    <span className="cs-card__result-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section section--surface" style={{ textAlign: 'center' }}>
        <div className="container">
          <TextReveal tag="h3">Want Results Like These?</TextReveal>
          <p style={{ margin: '0.5rem auto 2rem', maxWidth: '500px' }}>Let's discuss how we can create a success story for your brand.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Success Story <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
