import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Globe, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Project Completed', val: 2500, icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-500/5' },
  { label: 'Happy Customers', val: 2000, icon: Users, color: 'text-violet-600', bg: 'bg-violet-500/5' },
  { label: 'Year In Business', val: 6, icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-500/5' }
];

export default function Insights() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.animate-insight'),
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

      const counters = el.querySelectorAll('.counter-val');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.fromTo(counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 95%',
            }
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="insights" className="relative py-14 lg:py-16 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full space-y-12">
        
        {/* ELITE HORIZONTAL NARRATIVE + STATS RIBBON */}
        <div className="animate-insight w-full p-8 lg:p-12 bg-slate-50 border border-slate-100 rounded-[3rem] flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
           
           {/* LEFT: NARRATIVE */}
           <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-full shadow-sm">
                 <Sparkles size={10} className="text-indigo-600" />
                 <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest leading-none">The WebUltra Edge</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-black text-slate-900 leading-tight">
                 How we are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Different.</span>
              </h2>
              <p className="text-slate-500 text-[11px] lg:text-xs font-medium max-w-lg leading-relaxed">
                 Mission-critical delivery propelled beyond satisfaction to pure loyalty.consistently delivering Technically Challenging projects.
              </p>
           </div>

           {/* RIGHT: HIGH-DENSITY COUNTERS */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 shrink-0">
              {stats.map((stat, i) => (
                <div key={i} className="p-5 lg:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:scale-[1.02] transition-transform">
                   <div className="flex items-center gap-2 mb-2">
                      <stat.icon size={12} className={stat.color} />
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                   </div>
                   <div className="text-2xl lg:text-3xl font-display font-black text-slate-900 flex items-baseline">
                      <span className="counter-val" data-target={stat.val}>0</span>
                      <span className="text-sm font-bold text-indigo-500 ml-0.5">+</span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* COMPACT BLOG CTA STRIP */}
        <div className="animate-insight flex flex-col lg:flex-row items-center justify-between gap-6 p-6 lg:px-12 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl">
           <div className="flex items-center gap-5">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                 <BookOpen size={18} />
              </div>
              <div>
                 <span className="block text-xs font-black text-slate-900 tracking-tight">Technical Insights & Trends</span>
                 <span className="text-[10px] font-medium text-slate-500">Discover essential elements to establish and thrive online.</span>
              </div>
           </div>
           <button className="group relative px-6 py-3 bg-white border border-slate-200 text-slate-900 text-[11px] font-black rounded-xl shadow-sm hover:border-indigo-600 hover:shadow-md transition-all active:scale-95 flex items-center gap-2">
              <span>View All Blog</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
}
