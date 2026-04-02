import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  { q: 'What Is The Average Cost?', a: 'The cost varies based on complexity and features. We provide tailored quotes that ensure you only pay for the value and performance your business requires.' },
  { q: 'How Long Does It Take?', a: 'Typically, a project can take anywhere from 3 to 8 weeks depending on the scope. We prioritize precision and quality over speed.' },
  { q: 'What Technology Do You Support?', a: 'We excel in modern stacks including React, Next.js, Node.js, and high-performance CMS solutions like Shopify and WordPress.' },
  { q: 'Can I Track Progress?', a: 'Absolutely. We provide a live staging URL where you can track our progress in real-time. Transparency is our bedrock.' },
  { q: 'Do you sign NDAs?', a: 'Yes, your intellectual property and business ideas are safe with us. We sign NDAs for all our projects.' },
  { q: 'Custom Code or CMS?', a: 'We are experts in both. We recommend the path that offers the best balance of flexibility and ease-of-management for you.' },
  { q: 'What are payment steps?', a: 'We usually work with a milestone-based payment structure: Initial deposit, design approval, and final launch.' },
  { q: 'Can you manage Hosting?', a: 'We manage the entire procurement and setup process for you, ensuring your hosting is lightning-fast and secure.' }
];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      baseX: number; baseY: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
      }
      update() {
        // Subtle Mouse Interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= dx * force * 0.03;
          this.y -= dy * force * 0.03;
        }

        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(15, 23, 42, 0.7)';
        ctx!.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: 120 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(15, 23, 42, ${0.4 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resize();
    init();
    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-100 z-0" />;
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.animate-up'),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        }
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      id="faq"
      className="relative py-8 lg:py-12 bg-[#f8f9ff] overflow-hidden border-t border-slate-100 font-display"
    >
      {/* ELITE DYNAMIC DARK-PARTICLE BACKGROUND */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full relative z-10">

        {/* COMPACT 2-COLUMN GRID ARCHITECTURE */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: NARRATIVE */}
          <div className="lg:col-span-4 space-y-4">
            <div className="animate-up inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-indigo-50 rounded-full shadow-sm">
              <HelpCircle size={8} className="text-indigo-600" />
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest leading-none">Support Center</span>
            </div>
            <h2 className="animate-up text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Knowledge <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Base.</span>
            </h2>
            <p className="animate-up text-slate-600 text-[10px] font-medium max-w-[240px] leading-relaxed opacity-80">
              Fast, deterministic answers for your digital journey.
            </p>

            <div className="animate-up pt-2">
              <button className="flex items-center gap-2 group px-4 py-3 bg-slate-900 rounded-xl text-white transition-all hover:bg-indigo-600 hover:shadow-indigo-500/10 active:scale-95 shadow-lg">
                <MessageCircle size={14} className="group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Connect Support</span>
              </button>
            </div>
          </div>

          {/* RIGHT: COMPACT 2-COLUMN FAQ GRID */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-2.5 items-start">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`animate-up group relative rounded-xl border transition-all duration-500 ${activeIndex === i ? 'bg-white border-indigo-300 shadow-xl scale-[1.01] z-10' : 'bg-white/95 border-slate-200 shadow-sm hover:bg-white hover:shadow-md hover:border-indigo-200'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-3.5 lg:p-4 text-left transition-all"
                >
                  <span className={`text-[11px] lg:text-[12px] font-black transition-colors leading-tight ${activeIndex === i ? 'text-indigo-600' : 'text-slate-950'}`}>
                    {item.q}
                  </span>
                  <div className={`w-6 h-6 shrink-0 rounded-lg border flex items-center justify-center transition-all duration-300 ${activeIndex === i ? 'bg-indigo-600 border-indigo-600 text-white rotate-180 scale-110' : 'bg-white border-slate-300 text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-500'}`}>
                    {activeIndex === i ? <Minus size={10} /> : <Plus size={10} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'circOut' }}
                    >
                      <div className="px-4 pb-4 text-[10.5px] text-slate-700 leading-relaxed font-bold border-t border-slate-200 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
