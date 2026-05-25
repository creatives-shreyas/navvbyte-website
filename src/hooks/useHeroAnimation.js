import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function useHeroAnimation() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero__badge', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero__title .line', { y: '110%', opacity: 0, duration: 1, stagger: 0.15 }, '-=0.4')
        .from('.hero__subtitle', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero__ctas > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.hero__visual', { scale: 0.9, opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=0.8')
        .from('.hero__trusted', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return heroRef;
}
