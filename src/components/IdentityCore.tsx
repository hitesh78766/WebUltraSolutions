import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function IdentityCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Create 3 nested geometric rings/shapes
    const shapes = ['w-[100%] h-[100%]', 'w-[75%] h-[75%]', 'w-[50%] h-[50%]'];
    const refs: HTMLDivElement[] = [];

    shapes.forEach((size, i) => {
      const shape = document.createElement('div');
      // Adding a dynamic gradient border style
      shape.className = `absolute ${size} border-[2px] rounded-lg lg:rounded-2xl z-10 transition-colors duration-1000`;
      shape.style.borderColor = i === 0 ? 'rgba(99, 102, 241, 0.6)' : 'rgba(167, 139, 250, 0.3)';
      container.appendChild(shape);
      refs.push(shape);

      // Rotating through colors
      gsap.to(shape, {
        borderColor: i % 2 === 0 ? 'rgba(124, 58, 237, 0.8)' : 'rgba(56, 189, 248, 0.6)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 3D Rotations
      gsap.to(shape, {
        rotateX: i % 2 === 0 ? 360 : -360,
        rotateY: i % 3 === 0 ? 360 : -360,
        rotateZ: 360,
        duration: 12 + i * 4,
        repeat: -1,
        ease: 'none'
      });
    });

    // Vivid Central "Soul" Node
    const core = document.createElement('div');
    core.className = 'absolute w-12 h-12 lg:w-16 lg:h-16 rounded-full blur-[15px] z-20 mix-blend-screen';
    core.style.background = 'radial-gradient(circle, #6366f1 0%, #a855f7 50%, transparent 100%)';
    container.appendChild(core);

    gsap.to(core, {
      scale: 1.4,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Intense Internal Glow
    const innerCore = document.createElement('div');
    innerCore.className = 'absolute w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full blur-[4px] z-30 shadow-[0_0_20px_#fff]';
    container.appendChild(innerCore);

    // Floating data particles
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'absolute w-0.5 h-0.5 bg-indigo-400 rounded-full opacity-60 z-30';
      container.appendChild(p);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = 40 + Math.random() * 60;
      
      gsap.set(p, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: (Math.random() - 0.5) * 100
      });

      gsap.to(p, {
        x: `+=${(Math.random() - 0.5) * 60}`,
        y: `+=${(Math.random() - 0.5) * 60}`,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }

    // 4. Rotating "Intelligence" Status Ring (Text)
    const textRing = document.createElement('div');
    textRing.className = 'absolute w-[92%] h-[92%] rounded-full z-20 pointer-events-none';
    container.appendChild(textRing);

    const labels = ["ELITE FRAMEWORK", "GLOBAL PULSE", "DIGITAL SUBSTRATE", "WEBULTRA SOLUTIONS"];
    labels.forEach((text, i) => {
        const span = document.createElement('span');
        span.innerText = text;
        span.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-white opacity-40 whitespace-nowrap tracking-[0.4em]';
        
        const angle = (i / labels.length) * Math.PI * 2;
        const radius = container.clientWidth * 0.44;
        
        gsap.set(span, {
            x: Math.cos(angle) * (radius || 110),
            y: Math.sin(angle) * (radius || 110),
            rotation: (angle * 180 / Math.PI) + 90
        });
        textRing.appendChild(span);
    });

    gsap.to(textRing, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'none'
      });

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ 
        perspective: '1000px', 
        transformStyle: 'preserve-3d',
        background: 'radial-gradient(circle at 50% 50%, #171717 0%, #0a0a0a 100%)'
      }}
    >
        {/* Atmospheric Neural Glow (Vibrant Blue/Purple) */}
        <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-gradient-to-tr from-indigo-500/20 via-violet-600/15 to-indigo-600/20 blur-[70px] rounded-full z-0 animate-pulse" />
        
        {/* Subtle Identity Scanning Beams (Horizontal Lines) */}
        <div className="absolute inset-0 opacity-[0.05] z-0 overflow-hidden">
            <div className="w-full h-4 bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-indigo-500/0 absolute top-[20%] animate-[slideUp_8s_linear_infinite]" />
            <div className="w-full h-4 bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-indigo-500/0 absolute top-[70%] animate-[slideUp_5s_linear_infinite_reverse]" />
        </div>

        {/* Global Substrate Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.04] z-0" 
             style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
    </div>
  );
}
