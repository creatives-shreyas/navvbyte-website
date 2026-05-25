import { Link } from 'react-router-dom';
import { Sparkles, Check, X, ArrowRight, Star } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import pricing from '../data/pricing';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Pricing.css';

const faqs = [
  { q: "What\u2019s included in the monthly retainer?", a: "Each plan includes a dedicated set of services delivered monthly. You\u2019ll receive regular deliverables, strategy calls, and performance reports based on your chosen tier." },
  { q: "Can I upgrade or downgrade my plan?", a: "Absolutely! You can change your plan at any time. We\u2019ll adjust the scope of work for the following month." },
  { q: "Do you offer custom packages?", a: "Yes! Our Enterprise plan is fully customizable. Contact us to discuss your specific needs and we\u2019ll create a tailored proposal." },
  { q: "What\u2019s the minimum commitment period?", a: "We recommend a minimum 3-month commitment for best results, but we don\u2019t lock you into long-term contracts. Results speak for themselves." },
  { q: "How do you measure ROI?", a: "We set clear KPIs at the start of every engagement and provide monthly analytics reports tracking leads, engagement, conversions, and revenue impact." },
];

export default function Pricing() {
  const gridRef = useStaggerReveal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="pricing-page">
      <section className="section pricing-hero" id="pricing-hero">
        <div className="container">
          <span className="section__badge"><Sparkles size={14} /> Pricing</span>
          <TextReveal tag="h1">Transparent Pricing</TextReveal>
          <p className="pricing-hero__desc">Choose the plan that fits your growth stage. No hidden fees, no surprises.</p>
        </div>
      </section>

      <section className="section" id="pricing-cards">
        <div className="container">
          <div className="pricing-grid" ref={gridRef}>
            {pricing.map(plan => (
              <div key={plan.id} className={`pricing-card card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`} id={`plan-${plan.id}`}>
                {plan.badge && <span className="pricing-card__badge"><Star size={12} fill="currentColor" /> {plan.badge}</span>}
                <h3>{plan.name}</h3>
                <p className="pricing-card__desc">{plan.description}</p>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{plan.price}</span>
                  <span className="pricing-card__period">{plan.period}</span>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((f, i) => (
                    <li key={i} className="pricing-card__feature"><Check size={16} /> {f}</li>
                  ))}
                  {plan.notIncluded.map((f, i) => (
                    <li key={`n-${i}`} className="pricing-card__feature pricing-card__feature--no"><X size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                  {plan.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="faq">
        <div className="container">
          <div className="section__header"><TextReveal>Frequently Asked Questions</TextReveal></div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`} id={`faq-${i}`}>
                <button className="faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-item__toggle">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div className="faq-item__a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
