import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'WebUltra Solution transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupHub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Working with WebUltra was an absolute pleasure. They understood our vision and created a website that perfectly represents our brand.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'The e-commerce platform WebUltra built has significantly increased our online sales. Their expertise is truly world-class.',
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // AUTO-PLAY LOGIC
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000); // Change every 5 seconds
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => {
    autoPlayRef.current = setInterval(next, 5000);
  };

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
    <section ref={containerRef} id="testimonials" className="relative py-12 lg:py-16 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        
        {/* ELITE UNIFIED COMPACT TESTIMONIAL CARD WITH AUTO-PLAY */}
        <div 
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          className="animate-up flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative overflow-hidden group hover:bg-white hover:shadow-premium-xl transition-all"
        >
           {/* Decorative Grid Overlay */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.02] pointer-events-none" />
           <Quote 
             size={120} 
             className="absolute bottom-[-20px] right-[-10px] text-indigo-500/10 -rotate-12 pointer-events-none group-hover:text-indigo-600/20 group-hover:scale-110 group-hover:rotate-0 transition-all duration-700" 
           />

           {/* PROFILE POD */}
           <div className="shrink-0 flex flex-col items-center gap-4 relative z-10 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm min-w-[200px]">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-50 shadow-md">
                 <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                 <span className="block text-sm font-black text-slate-900 tracking-tight leading-none mb-1">{testimonials[currentIndex].name}</span>
                 <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">{testimonials[currentIndex].role}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                 <ShieldCheck size={8} className="text-emerald-500" />
                 <span className="text-[7px] font-black text-emerald-600 uppercase tracking-widest leading-none">Verified Identity</span>
              </div>
           </div>

           {/* CONTENT POD */}
           <div className="flex-1 space-y-6 relative z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1">
                 {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                   <Star key={i} size={10} className="fill-indigo-600 text-indigo-600" />
                 ))}
                 <div className="ml-3 px-2 py-0.5 bg-indigo-600 rounded-full text-[6px] font-black text-white uppercase tracking-widest animate-pulse">Auto Rolling</div>
              </div>
              
              <AnimatePresence mode="wait">
                 <motion.div
                    key={currentIndex}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                 >
                    <p className="text-lg lg:text-2xl font-display font-black text-slate-900 leading-snug tracking-tight">
                       "{testimonials[currentIndex].content}"
                    </p>
                 </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                 <button onClick={prev} className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm active:scale-90">
                    <ChevronLeft size={18} />
                 </button>
                 <button onClick={next} className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm active:scale-90">
                    <ChevronRight size={18} />
                 </button>
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4">
                    0{currentIndex + 1} / 0{testimonials.length}
                 </span>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
