import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Globe, Zap, Newspaper, BarChart3, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'BOROK TIMES', icon: Newspaper },
  { name: 'DAILYHUNT', icon: Zap },
  { name: 'FLIPBOARD', icon: Globe },
  { name: 'MEDIUM', icon: Briefcase },
  { name: 'SCOOP360', icon: BarChart3 },
  { name: 'TRIPURA NEWS', icon: Award },
  { name: 'BOROK TIMES', icon: Newspaper },
  { name: 'DAILYHUNT', icon: Zap },
  { name: 'FLIPBOARD', icon: Globe },
  { name: 'MEDIUM', icon: Briefcase },
  { name: 'SCOOP360', icon: BarChart3 },
  { name: 'TRIPURA NEWS', icon: Award }
];

export default function PrestigeBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Entrance Reveal
    gsap.fromTo(el.querySelector('.featured-header'),
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
        }
      }
    );

    // Infinite Marquee Logic
    const marquee = marqueeRef.current;
    if (marquee) {
      const scrollWidth = marquee.scrollWidth;
      gsap.to(marquee, {
        x: -(scrollWidth / 2),
        duration: 35,
        ease: 'none',
        repeat: -1
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-6 lg:py-8 overflow-hidden bg-[#fafafa]"
    >
       {/* ELITE LIGHT GRADIENT BACKGROUND */}
       <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50 pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
             {/* ULTRA-COMPACT LABEL GRID - ENHANCED VISUALS */}
             <div className="featured-header shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left relative lg:pl-8">
                {/* Subtle vertical accent for desktop */}
                <div className="hidden lg:block absolute left-0 top-1 bottom-1 w-0.5 bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-indigo-500/50 rounded-full" />
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] rounded-full mb-2">
                   <Award size={10} className="text-indigo-600" />
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Global Coverage</span>
                </div>
                <h3 className="text-[14px] lg:text-[16px] font-display font-black text-slate-900 uppercase tracking-[0.3em] leading-none">
                  Featured <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">In.</span>
                </h3>
             </div>

             {/* ULTRA-COMPACT INFINITE MARQUEE */}
             <div className="flex-1 overflow-hidden relative">
                {/* Fade Gradients - Refined for depth */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/40 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/40 to-transparent z-10" />

                <div 
                   ref={marqueeRef}
                   className="flex items-center gap-4 lg:gap-6 whitespace-nowrap py-3"
                >
                   {partners.map((p, i) => (
                     <div 
                      key={i}
                      className="group px-5 py-2.5 lg:px-6 lg:py-4 flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-slate-100/80 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(79,70,229,0.12)] hover:border-indigo-100 hover:-translate-y-0.5"
                     >
                        {/* VIBRANT TINY ICON POD */}
                        <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                           <p.icon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                        </div>
                        
                        <div className="flex flex-col justify-center min-w-[120px]">
                           <span className="text-[11px] lg:text-[13px] font-black text-slate-900 font-display tracking-tight uppercase leading-none block">
                             {p.name}
                           </span>
                           <div className="flex items-center gap-1.5 mt-1.5">
                              <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest leading-none block">
                                 Verified Partner
                              </span>
                              <div className="h-[1px] flex-1 bg-slate-100 group-hover:bg-indigo-100 transition-colors" />
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
