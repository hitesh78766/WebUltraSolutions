import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
   const containerRef = useRef<HTMLElement>(null);
   const cardRef = useRef<HTMLDivElement>(null);

   // 3D Tilt Logic
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

   function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      x.set(mouseX / width - 0.5);
      y.set(mouseY / height - 0.5);
   }

   function handleMouseLeave() {
      x.set(0);
      y.set(0);
   }

   useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      gsap.fromTo(el.querySelectorAll('.cta-animate'),
         { y: 30, opacity: 0 },
         {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
               trigger: el,
               start: 'top 85%',
            }
         }
      );
   }, []);

   return (
      <section
         ref={containerRef}
         id="cta"
         className="relative py-12 lg:py-16 bg-white overflow-hidden"
      >
         <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full flex items-center justify-center">

            {/* ELITE 3D INTERACTIVE CTA BANNER */}
            <motion.div
               ref={cardRef}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="cta-animate w-full p-8 lg:p-14 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-sm"
            >
               {/* Moving Aura (Slow & Subtle) */}
               <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/5 to-transparent blur-[60px] pointer-events-none" />
               <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-200/20 rounded-full blur-[100px] pointer-events-none" />

               {/* TEXT CONTENT - ANIMATED FOCUS */}
               <div className="flex-1 space-y-5 text-center lg:text-left relative z-10" style={{ transform: "translateZ(50px)" }}>
                  <div className="cta-animate inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-100 rounded-full shadow-sm">
                     <Sparkles size={11} className="text-slate-400" />
                     <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Connect With Us</span>
                  </div>

                  <h2 className="cta-animate text-2xl md:text-3xl lg:text-5xl font-display font-black text-slate-900 leading-[1.1] tracking-tight">
                     DO YOU HAVE A <span className="text-indigo-600">PROJECT</span> <br />
                     AND WANT TO DISCUSS WITH US?
                  </h2>

                  <p className="cta-animate text-slate-500 text-xs lg:text-sm font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
                     We provide comprehensive support for Website Services, E-commerce, Mobile Apps, Custom Development, and SEO. Specializing in high-performance GUI & UX Designing.
                  </p>
               </div>

               {/* ACTION BUTTON - INTERACTIVE FOCUS */}
               <div className="shrink-0 relative z-10" style={{ transform: "translateZ(80px)" }}>
                  <motion.button
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => window.location.href = '#contact'}
                     className="group relative inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white text-[12px] font-black rounded-2xl shadow-xl transition-all"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                        Get Started Now
                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                  </motion.button>

                  <div className="mt-4 flex items-center justify-center lg:justify-end gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     Experts Available Now
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
