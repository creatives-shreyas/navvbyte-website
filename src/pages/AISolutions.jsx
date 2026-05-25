import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Bot, Zap, BarChart3, Brain, Cog, MessageSquare } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import MagneticButton from '../components/shared/MagneticButton';
import useStaggerReveal from '../hooks/useStaggerReveal';
import useScrollReveal from '../hooks/useScrollReveal';
import './AISolutions.css';

const features = [
  { icon: MessageSquare, title: 'AI Chatbot Integration', desc: 'Deploy intelligent chatbots that handle 80% of customer queries 24/7 with human-like conversations.' },
  { icon: Zap, title: 'Marketing Automation', desc: 'Automate email sequences, social posting, lead nurturing, and campaign optimization.' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'AI-driven insights that forecast trends, customer behavior, and revenue opportunities.' },
  { icon: Brain, title: 'Content AI', desc: 'Generate on-brand content ideas, captions, and creative briefs powered by AI.' },
  { icon: Cog, title: 'CRM Automation', desc: 'Intelligent lead scoring, automated follow-ups, and pipeline management.' },
  { icon: Bot, title: 'Custom AI Solutions', desc: 'Bespoke AI systems tailored to your unique business challenges and workflows.' },
];

const steps = [
  { num: '01', title: 'Analyze', desc: 'We audit your workflows to identify automation opportunities with the highest ROI.' },
  { num: '02', title: 'Automate', desc: 'We build and deploy AI solutions that handle repetitive tasks intelligently.' },
  { num: '03', title: 'Optimize', desc: 'Continuous monitoring and optimization to improve accuracy and impact.' },
];

export default function AISolutions() {
  const featRef = useStaggerReveal();
  const stepsRef = useStaggerReveal();
  const metricsRef = useStaggerReveal();

  return (
    <main className="ai-page">
      <section className="section ai-hero" id="ai-hero">
        <div className="ai-hero__bg"><div className="ai-hero__grid-pattern" /></div>
        <div className="container">
          <span className="section__badge"><Bot size={14} /> AI & Automation</span>
          <TextReveal tag="h1">AI-Powered Growth</TextReveal>
          <p className="ai-hero__desc">Intelligent automation that works 24/7 so you don't have to. From chatbots to predictive analytics, we bring the future to your business.</p>
        </div>
      </section>

      <section className="section" id="ai-features">
        <div className="container">
          <div className="section__header"><TextReveal>What We Build</TextReveal><p>AI solutions designed to save time, reduce costs, and accelerate growth.</p></div>
          <div className="ai-features__grid" ref={featRef}>
            {features.map((f, i) => (
              <div key={i} className="ai-feature card" id={`ai-feature-${i}`}>
                <div className="ai-feature__num text-gradient">0{i + 1}</div>
                <div className="ai-feature__icon"><f.icon size={24} /></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="ai-how">
        <div className="container">
          <div className="section__header"><TextReveal>How It Works</TextReveal></div>
          <div className="ai-steps" ref={stepsRef}>
            {steps.map((s, i) => (
              <div key={i} className="ai-step">
                <span className="ai-step__num text-gradient">{s.num}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ai-metrics">
        <div className="container">
          <div className="section__header"><TextReveal>The Impact</TextReveal><p>Real results from our AI implementations.</p></div>
          <div className="ai-metrics__grid" ref={metricsRef}>
            <div className="ai-metric card"><span className="ai-metric__value text-gradient"><AnimatedCounter target={80} suffix="%" /></span><span>Queries Handled by AI</span></div>
            <div className="ai-metric card"><span className="ai-metric__value text-gradient"><AnimatedCounter target={60} suffix="%" /></span><span>Time Saved</span></div>
            <div className="ai-metric card"><span className="ai-metric__value text-gradient">3x</span><span>More Qualified Leads</span></div>
            <div className="ai-metric card"><span className="ai-metric__value text-gradient"><AnimatedCounter target={95} suffix="%" /></span><span>Customer Satisfaction</span></div>
          </div>
        </div>
      </section>

      <section className="section section--surface" style={{ textAlign: 'center' }}>
        <div className="container">
          <TextReveal>Automate Your Growth</TextReveal>
          <p style={{ fontSize: '1.125rem', margin: '1rem auto 2rem', maxWidth: '500px' }}>Ready to work smarter? Let's explore how AI can transform your business.</p>
          <MagneticButton className="btn btn-primary btn-lg" onClick={() => window.location.href = '/contact'}>
            Get Started with AI <ArrowRight size={18} />
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
