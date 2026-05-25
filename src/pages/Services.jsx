import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import useScrollReveal from '../hooks/useScrollReveal';
import MagneticButton from '../components/shared/MagneticButton';
import services from '../data/services';
import './Services.css';

const process = [
  { step: '01', title: 'Discover', desc: 'We learn your business, goals, audience, and competitive landscape.' },
  { step: '02', title: 'Strategy', desc: 'We craft a tailored growth roadmap with clear milestones and KPIs.' },
  { step: '03', title: 'Execute', desc: 'Our team brings the strategy to life with premium creative and technical execution.' },
  { step: '04', title: 'Scale', desc: 'We optimize, iterate, and scale what works to accelerate your growth.' },
];

export default function Services() {
  const gridRef = useStaggerReveal();
  const processRef = useStaggerReveal();
  const ctaRef = useScrollReveal();

  return (
    <main className="services-page">
      <section className="section services-hero" id="services-hero">
        <div className="container">
          <span className="section__badge"><Sparkles size={14} /> Our Expertise</span>
          <TextReveal tag="h1">Services That Drive Results</TextReveal>
          <p className="services-hero__desc">Comprehensive digital growth solutions crafted for ambitious brands. From identity to automation, we've got you covered.</p>
        </div>
      </section>

      <section className="section" id="services-list">
        <div className="container">
          <div className="services-list" ref={gridRef}>
            {services.map((service, i) => (
              <div key={service.id} className="service-detail card" id={`service-detail-${service.id}`}>
                <div className="service-detail__header">
                  <div className="service-detail__number" style={{ color: service.color }}>0{i + 1}</div>
                  <div className="service-detail__icon" style={{ color: service.color }}>
                    <service.icon size={32} />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p className="service-detail__desc">{service.description}</p>
                <ul className="service-detail__features">
                  {service.features.map((f, j) => (
                    <li key={j}><CheckCircle size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-ghost">Get Started <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="process">
        <div className="container">
          <div className="section__header">
            <TextReveal>Our Process</TextReveal>
            <p>A proven 4-step framework that delivers results consistently.</p>
          </div>
          <div className="process-grid" ref={processRef}>
            {process.map((p, i) => (
              <div key={i} className="process-step" id={`process-step-${p.step}`}>
                <span className="process-step__number text-gradient">{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                {i < process.length - 1 && <div className="process-step__connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services-cta" ref={ctaRef}>
        <div className="container" style={{ textAlign: 'center' }}>
          <TextReveal>Let's Build Something Amazing</TextReveal>
          <p style={{ fontSize: '1.125rem', margin: '1rem auto 2rem', maxWidth: '500px' }}>
            Ready to take your brand to the next level? Let's discuss your goals.
          </p>
          <MagneticButton className="btn btn-primary btn-lg" onClick={() => window.location.href = '/contact'}>
            Start Your Project <ArrowRight size={18} />
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
