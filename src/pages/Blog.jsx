import { useState } from 'react';
import { Sparkles, Clock, User, ArrowRight } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import blog from '../data/blog';
import './Blog.css';

const categories = ['All', 'Marketing', 'AI', 'Branding', 'Development', 'Growth'];

export default function Blog() {
  const [active, setActive] = useState('All');
  const gridRef = useStaggerReveal();
  const filtered = active === 'All' ? blog : blog.filter(b => b.category === active);

  return (
    <main className="blog-page">
      <section className="section blog-hero"><div className="container">
        <span className="section__badge"><Sparkles size={14} /> Insights</span>
        <TextReveal tag="h1">Insights & Resources</TextReveal>
        <p className="blog-hero__desc">Expert insights on digital growth, marketing, AI, and brand building.</p>
      </div></section>
      <section className="section"><div className="container">
        <div className="blog-filters">
          {categories.map(cat => (
            <button key={cat} className={`pill ${active === cat ? 'pill--active' : ''}`} onClick={() => setActive(cat)}>{cat}</button>
          ))}
        </div>
        <div className="blog-grid" ref={gridRef} key={active}>
          {filtered.map(post => (
            <article key={post.id} className="blog-card card" id={`blog-${post.id}`}>
              <div className="blog-card__image"><div className="blog-card__placeholder" style={{ background: post.category === 'AI' ? 'var(--gradient-cool)' : post.category === 'Marketing' ? 'var(--gradient-warm)' : 'var(--gradient-primary)' }}><span>{post.category}</span></div></div>
              <div className="blog-card__content">
                <span className="blog-card__category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span><User size={14} /> {post.author}</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div></section>
      <section className="section section--surface blog-newsletter"><div className="container" style={{ textAlign: 'center' }}>
        <TextReveal tag="h3">Subscribe for Weekly Growth Tips</TextReveal>
        <p style={{ margin: '0.5rem auto 1.5rem', maxWidth: '400px' }}>Join 2,000+ founders getting actionable insights every Friday.</p>
        <form className="blog-newsletter__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn btn-primary">Subscribe <ArrowRight size={16} /></button>
        </form>
      </div></section>
    </main>
  );
}
