import { Sparkles, ExternalLink, Globe, AtSign } from 'lucide-react';
import TextReveal from '../components/shared/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import team from '../data/team';
import './Team.css';

export default function Team() {
  const gridRef = useStaggerReveal();
  return (
    <main className="team-page">
      <section className="section team-hero"><div className="container">
        <span className="section__badge"><Sparkles size={14} /> Our People</span>
        <TextReveal tag="h1">Meet the Team</TextReveal>
        <p className="team-hero__desc">The creative minds and strategic thinkers behind NavvByte Labs.</p>
      </div></section>
      <section className="section"><div className="container">
        <div className="team-grid" ref={gridRef}>
          {team.map(m => (
            <div key={m.id} className="team-card card" id={`member-${m.id}`}>
              <div className="team-card__avatar">{m.name.charAt(0)}</div>
              <h4>{m.name}</h4>
              <span className="team-card__role">{m.role}</span>
              <p>{m.bio}</p>
              <div className="team-card__socials">
                {m.social.linkedin && <a href={m.social.linkedin} aria-label="LinkedIn"><ExternalLink size={16} /></a>}
                {m.social.twitter && <a href={m.social.twitter} aria-label="Twitter"><Globe size={16} /></a>}
                {m.social.instagram && <a href={m.social.instagram} aria-label="Instagram"><AtSign size={16} /></a>}
              </div>
            </div>
          ))}
        </div>
      </div></section>
    </main>
  );
}
