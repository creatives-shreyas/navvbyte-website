import { useState } from 'react';
import { Sparkles, ArrowRight, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/shared/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import careers from '../data/careers';
import './Careers.css';

const perks = [
  { emoji: '🏡', title: 'Remote Friendly', desc: 'Work from anywhere. We trust you to deliver, not to sit in a chair.' },
  { emoji: '📚', title: 'Learning Budget', desc: 'Annual learning budget for courses, books, and conferences.' },
  { emoji: '🎨', title: 'Creative Freedom', desc: 'We encourage experimentation. Your best ideas deserve a chance.' },
  { emoji: '🚀', title: 'Growth Path', desc: 'Clear career progression with mentorship and leadership opportunities.' },
];

export default function Careers() {
  const [openJob, setOpenJob] = useState(null);
  const perksRef = useStaggerReveal();
  return (
    <main className="careers-page">
      <section className="section careers-hero"><div className="container">
        <span className="section__badge"><Sparkles size={14} /> Careers</span>
        <TextReveal tag="h1">Join <span className="text-gradient">NavvByte</span></TextReveal>
        <p className="careers-hero__desc">Build your career while building brands. We're looking for creative, driven people who want to make an impact.</p>
      </div></section>
      <section className="section section--surface"><div className="container">
        <div className="section__header"><TextReveal tag="h3">Why Work With Us</TextReveal></div>
        <div className="perks-grid" ref={perksRef}>
          {perks.map((p, i) => (
            <div key={i} className="perk-card card" id={`perk-${i}`}>
              <span className="perk-card__emoji">{p.emoji}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section"><div className="container">
        <div className="section__header"><TextReveal tag="h3">Open Positions</TextReveal></div>
        <div className="jobs-list">
          {careers.map((job, i) => (
            <div key={job.id} className={`job-item ${openJob === i ? 'job-item--open' : ''}`} id={`job-${job.id}`}>
              <button className="job-item__header" onClick={() => setOpenJob(openJob === i ? null : i)}>
                <div className="job-item__info">
                  <h4>{job.title}</h4>
                  <div className="job-item__tags">
                    <span><Briefcase size={14} /> {job.department}</span>
                    <span><MapPin size={14} /> {job.location}</span>
                    <span className="pill pill--active" style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem' }}>{job.type}</span>
                  </div>
                </div>
                <ChevronDown size={20} className={`job-item__chevron ${openJob === i ? 'job-item__chevron--open' : ''}`} />
              </button>
              <AnimatePresence>
                {openJob === i && (
                  <motion.div className="job-item__body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p>{job.description}</p>
                    <h5>Requirements</h5>
                    <ul>{job.requirements.map((r, j) => <li key={j}>{r}</li>)}</ul>
                    <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Apply Now <ArrowRight size={14} /></Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section section--surface" style={{ textAlign: 'center' }}><div className="container">
        <TextReveal tag="h3">Don't See Your Role?</TextReveal>
        <p style={{ margin: '0.5rem auto 2rem', maxWidth: '500px' }}>We're always looking for exceptional talent. Send us your portfolio anyway.</p>
        <Link to="/contact" className="btn btn-secondary">Send Your Portfolio <ArrowRight size={16} /></Link>
      </div></section>
    </main>
  );
}
