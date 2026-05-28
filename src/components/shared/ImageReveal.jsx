import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({ src, alt, className = '', direction = 'left' }) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    const clipPaths = {
      left:  { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
      right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
      top:   { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
      bottom:{ from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
    };

    const clip = clipPaths[direction] || clipPaths.left;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(wrapper,
        { clipPath: clip.from },
        { clipPath: clip.to, duration: 1.2, ease: 'power4.inOut' }
      ).fromTo(img,
        { scale: 1.3 },
        { scale: 1, duration: 1.4, ease: 'power3.out' },
        0
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={wrapperRef} className={`image-reveal ${className}`} style={{ overflow: 'hidden' }}>
      <img ref={imgRef} src={src} alt={alt} style={{ width: '100%', display: 'block', willChange: 'transform' }} />
    </div>
  );
}
