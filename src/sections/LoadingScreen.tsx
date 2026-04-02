import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      const tl = gsap.timeline();

      tl.to(logoRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.out',
        }, '-=0.1')
        .set(containerRef.current, { display: 'none' });
    }
  }, [isLoading]);

  return (
    <div
      ref={containerRef}
      className="loading-screen"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <div ref={logoRef} className="relative">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-xl border-2 border-slate-200" />

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-violet-500 rounded-xl opacity-10" />

            {/* Logo Text */}
            <span className="relative font-display font-semibold text-2xl gradient-text">W</span>

            {/* Spinning Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent border-t-accent-500 border-r-violet-500 animate-spin" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-slate-400 font-medium text-sm tracking-wider uppercase">
            Loading
          </p>
          <div className="flex gap-1.5 justify-center mt-2">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '120ms' }} />
            <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '240ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
