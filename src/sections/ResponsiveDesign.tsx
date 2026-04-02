import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Monitor, Layout, Copy, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const points = [
  { icon: Monitor, title: 'Unified Core', color: 'text-indigo-600' },
  { icon: Smartphone, title: 'Mobile First', color: 'text-violet-600' },
  { icon: Layout, title: 'Fluid Grid', color: 'text-blue-600' },
  { icon: Copy, title: 'Sync Logic', color: 'text-slate-600' }
];

const stats = [
  { icon: CheckCircle2, value: '2500', suffix: '+', label: 'PROJECTS', color: 'text-indigo-600' },
  { icon: Users, value: '2000', suffix: '+', label: 'CUSTOMERS', color: 'text-indigo-600' },
  { icon: TrendingUp, value: '6', suffix: '+', label: 'YEARS', color: 'text-indigo-600' },
];

export default function ResponsiveDesign() {
  const containerRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Infinite Neural Flow Background
    gsap.to(flowRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none'
    });

    // Panoramic Entrance
    gsap.fromTo(el.querySelectorAll('.panoramic-reveal'),
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );

    // Stats Counter
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        stats.forEach((s, i) => {
          gsap.to({ val: 0 }, {
            val: parseInt(s.value),
            duration: 2.5,
            ease: 'expo.out',
            onUpdate: function() {
              setCounts(prev => {
                const next = [...prev];
                next[i] = Math.floor(this.targets()[0].val);
                return next;
              });
            }
          });
        });
      }
    });

    // Laser Scan Animation
    gsap.fromTo(el.querySelector('.laser-line'),
        { top: '-10%' },
        {
          top: '110%',
          repeat: -1,
          duration: 4,
          ease: 'power1.inOut'
        }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      id="responsive"
      className="relative w-full py-8 lg:py-12 bg-white overflow-hidden border-y border-slate-50"
    >
      
      {/* 1. INFINITE NEURAL FLOW BACKGROUND (Full Bleed) */}
      <div className="absolute inset-x-0 top-[22%] z-0 pointer-events-none overflow-hidden">
        <div ref={flowRef} className="flex whitespace-nowrap text-[110px] lg:text-[130px] font-black uppercase tracking-tighter text-slate-200/70 select-none">
          Digital Substrate Architecture Elite Framework Global Pulse WebUltra Edge&nbsp;
          Digital Substrate Architecture Elite Framework Global Pulse WebUltra Edge&nbsp;
          Digital Substrate Architecture Elite Framework Global Pulse WebUltra Edge&nbsp;
        </div>
      </div>

      {/* 2. CINEMATIC LASER SCAN */}
      <div className="laser-line absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-10 pointer-events-none" />

      {/* 3. PANORAMIC CONTENT HUB (Full Width Flex) */}
      <div className="relative z-10 w-full px-6 lg:px-16 mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
           
           {/* PART A: THE ARCHITECTURE (Left) */}
           <div className="panoramic-reveal lg:w-[35%] space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/5">
                <Zap size={12} className="text-indigo-600 animate-pulse" />
                <span className="text-[10px] font-black text-indigo-700 uppercase tracking-[0.2em]">Architecture Hub</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-black text-slate-900 leading-[1.1] tracking-tight">
                Global <br/> The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Substrate.</span>
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                 {points.map((p, i) => (
                   <div key={i} className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50/50 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm transition-all hover:bg-white">
                      <p.icon size={12} className={p.color} />
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wider">{p.title}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* PART B: THE PULSE HUB (Middle Avatar Hub) */}
           <div className="panoramic-reveal lg:w-[30%] flex items-center justify-center relative">
              <div className="relative w-44 h-44 lg:w-56 lg:h-56 group rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                 <div className="absolute inset-[-10%] bg-indigo-500/15 blur-[80px] rounded-full animate-pulse" />
                 
                 {/* Internal Animated Border */}
                 <div className="absolute inset-[-4%] rounded-full border-[1.5px] border-dashed border-indigo-500/15 animate-[spin_45s_linear_infinite]" />
                 
                 <div className="relative w-full h-full rounded-full border-[8px] border-white shadow-xl flex items-center justify-center overflow-hidden z-10 bg-slate-50">
                    <img 
                      src="/ceo_profile_avatar.png" 
                      alt="Architecture Core" 
                      className="w-full h-full object-cover scale-110 group-hover:scale-25 transition-transform duration-1000"
                    />
                    
                    {/* Status Dot */}
                    <div className="absolute top-[8%] right-[8%] flex gap-1 z-20">
                       <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)] border-2 border-white" />
                    </div>
                 </div>

                 {/* Floating Decorative Elements */}
                 <div className="absolute -top-3 -right-3 p-3 bg-white rounded-xl shadow-lg border border-indigo-50 animate-bounce-slow z-20">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                 </div>
              </div>
           </div>

           {/* PART C: THE PERFORMANCE (Enhanced Success Dashboard) */}
           <div className="panoramic-reveal lg:w-[35%] flex flex-col justify-center space-y-8 lg:pl-12 border-l border-slate-50">
              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-indigo-500" />
                    <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em]">Metrics</span>
                 </div>
                 <h2 className="text-3xl lg:text-[42px] font-display font-black text-slate-900 tracking-tighter leading-none">Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Performance.</span></h2>
              </div>

              <div className="space-y-6 lg:space-y-8">
                 {stats.map((s, i) => (
                   <div key={i} className="group relative flex flex-col gap-2.5">
                      {/* STAT ROW */}
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="relative w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-indigo-200 transition-all shadow-sm">
                               <s.icon size={16} className="text-indigo-600" />
                            </div>
                            <span className="text-[11px] font-black text-slate-600 uppercase tracking-[0.3em] font-display">{s.label}</span>
                         </div>
                         <div className="text-3xl lg:text-4xl font-black text-slate-950 tracking-tighter tabular-nums transition-transform duration-700">
                            {counts[i]}{s.suffix}
                         </div>
                      </div>

                      {/* BLUE THIN SEPARATOR - MATCHING SCREENSHOT */}
                      <div className="relative h-[1.5px] w-full bg-indigo-600/90 rounded-full scale-x-100 origin-left opacity-80 group-hover:opacity-100 transition-opacity" />
                   </div>
                 ))}
              </div>
           </div>

        </div>
      </div>

    </section>
  );
}

