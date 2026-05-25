import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Eye, Zap, Heart, Users, TrendingUp } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import useScrollReveal from '../hooks/useScrollReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import team from '../data/team';
import './About.css';

const values = [
  { icon: Zap, title: 'Innovation', desc: 'We stay ahead of trends and embrace cutting-edge technology to deliver future-proof solutions.' },
  { icon: Target, title: 'Quality', desc: 'Every pixel, every word, every strategy is crafted with meticulous attention to detail.' },
  { icon: TrendingUp, title: 'Growth', desc: 'We measure success by your growth — if you succeed, we succeed. It\'s that simple.' },
  { icon: Heart, title: 'Partnership', desc: 'We don\'t just work for you — we work with you. Your vision drives everything we do.' },
];

const milestones = [
  { year: '2020', title: 'Founded', desc: 'NavvByte Labs started with a vision to democratize premium digital growth for ambitious brands.' },
  { year: '2021', title: 'First 50 Clients', desc: 'Crossed 50 clients with a focus on branding and social media marketing in Central India.' },
  { year: '2022', title: 'AI Division Launch', desc: 'Launched our AI & Automation division, bringing intelligent systems to small and medium businesses.' },
  { year: '2023', title: '200+ Projects', desc: 'Delivered 200+ projects across branding, web development, content, and AI solutions.' },
  { year: '2024', title: 'National Expansion', desc: 'Expanded operations beyond Nagpur, serving clients across India and international markets.' },
  { year: '2025', title: '500+ Projects', desc: 'Crossed the 500 project milestone with 98% client satisfaction rate. The journey continues.' },
];

export default function About() {
  const missionRef = useScrollReveal();
  const valuesRef = useStaggerReveal();
  const teamRef = useStaggerReveal();

  return (
    <main className="about-page">
      <section className="about-hero section" id="about-hero">
        <div className="container">
          <span className="section__badge"><Sparkles size={14} /> Our Story</span>
          <TextReveal tag="h1">Building Brands That Matter</TextReveal>
          <p className="about-hero__desc">
            Born in Nagpur, built for the world. NavvByte Labs is a modern digital growth studio that combines creativity, strategy, and technology to help brands scale faster and smarter.
          </p>
        </div>
      </section>

      <section className="section" id="mission-vision">
        <div className="container">
          <div className="about-mv__grid" ref={missionRef}>
            <div className="card card--coral about-mv__card">
              <div className="about-mv__icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>To empower businesses of every size with world-class digital growth solutions that were once only available to Fortune 500 companies. We believe every brand deserves to look premium, feel premium, and perform premium.</p>
            </div>
            <div className="card card--indigo about-mv__card">
              <div className="about-mv__icon"><Eye size={28} /></div>
              <h3>Our Vision</h3>
              <p>To become India's most trusted creative-tech growth partner — known for turning ambitious ideas into thriving digital empires through the perfect blend of art, science, and artificial intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="timeline">
        <div className="container">
          <div className="section__header">
            <TextReveal>Our Journey</TextReveal>
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div key={i} className="about-timeline__item" id={`milestone-${m.year}`}>
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <span className="about-timeline__year">{m.year}</span>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <div className="section__header">
            <TextReveal>What We Stand For</TextReveal>
            <p>Four principles that guide every decision we make.</p>
          </div>
          <div className="about-values__grid" ref={valuesRef}>
            {values.map((v, i) => (
              <div key={i} className="card about-values__card" id={`value-${v.title.toLowerCase()}`}>
                <div className="about-values__icon"><v.icon size={24} /></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats section section--surface" id="about-stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stats__item"><span className="stats__number"><AnimatedCounter target={500} suffix="+" /></span><span className="stats__label">Projects</span></div>
            <div className="stats__item"><span className="stats__number"><AnimatedCounter target={200} suffix="+" /></span><span className="stats__label">Clients</span></div>
            <div className="stats__item"><span className="stats__number"><AnimatedCounter target={6} /></span><span className="stats__label">Services</span></div>
            <div className="stats__item"><span className="stats__number"><AnimatedCounter target={98} suffix="%" /></span><span className="stats__label">Satisfaction</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="team-preview">
        <div className="container">
          <div className="section__header">
            <TextReveal>Meet the Team</TextReveal>
            <p>The creative minds behind NavvByte Labs.</p>
          </div>
          <div className="about-team__grid" ref={teamRef}>
            {team.slice(0, 4).map(member => (
              <div key={member.id} className="about-team-card card" id={`team-${member.id}`}>
                <div className="about-team-card__avatar">{member.name.charAt(0)}</div>
                <h4>{member.name}</h4>
                <span className="about-team-card__role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/team" className="btn btn-secondary">View Full Team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
