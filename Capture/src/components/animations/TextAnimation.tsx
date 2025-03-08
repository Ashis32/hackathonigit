import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextAnimation: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Set initial styles for the text
      gsap.set(textRef.current, { opacity: 0, y: 50 });

      // Animate the text to fade in and slide up
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5, // Optional delay before the animation starts
      });
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div ref={textRef} style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Hello, GSAP Animation!
      </div>
    </div>
  );
};

export default TextAnimation;