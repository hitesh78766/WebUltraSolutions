import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight, BarChart3, Trophy, Target, Globe, Users, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Arsenal() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Narrrative Entrance
      gsap.from(".arsenal-text-item", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Metric Card Entrance
      gsap.from(cardRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Individual Mini Metric Fade In
      gsap.fromTo(".mini-metric",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const metricBoxes = [
    { icon: Target, value: "24+", label: "Years Experience", progress: 85 },
    { icon: Briefcase, value: "1000+", label: "Projects Delivered", progress: 95 },
    { icon: Users, value: "500+", label: "Happy Clients", progress: 90 },
    { icon: Globe, value: "30+", label: "Countries Served", progress: 75 }
  ];

  return (
    <section ref={sectionRef} id="arsenal" className="py-14 lg:py-16 bg-[#FCFCFD] overflow-hidden font-display relative">
      {/* Background Soft Atmosphere (Elite Props) */}
      <div className="absolute top-[10%] -right-[15%] w-[40%] h-[50%] bg-[#FFF1E2] rounded-full blur-[140px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[10%] w-[35%] h-[45%] bg-[#F5F3FF] rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Column: Narrative (Compact) */}
          <div ref={textRef} className="md:w-[48%] lg:w-[48%] space-y-6">
            <div className="space-y-4">
              <h2 className="arsenal-text-item text-xl sm:text-2xl md:text-3xl lg:text-5xl font-display font-bold text-[#111827] leading-[1.1] tracking-tight uppercase">
                Your <span className="text-[#FF6600]">Digital Dominance</span> <br />
                That <span className="text-slate-500">Outlives</span> Market Shifts
              </h2>

              <div className="arsenal-text-item space-y-4">
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-slate-800 leading-snug">
                  We don't just build tech—we forge <span className="text-[#FF6600]">unshakeable competitive foundations.</span>
                </p>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed max-w-lg">
                  For leaders who refuse to be disrupted: Choose the arsenal that keeps you ahead of trends, not chasing them.
                </p>
              </div>

              {/* Advanced Checklist (Nano UI) */}
              <div className="arsenal-text-item grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-2">
                {[
                  "Battle-tested expertise",
                  "Future-proof architecture",
                  "Scalable solutions",
                  "24/7 support guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 group/check">
                    <div className="w-4.5 h-4.5 rounded-full bg-white flex items-center justify-center border border-slate-200 group-hover/check:border-[#F97316]/40 group-hover/check:bg-[#F97316]/5 transition-all">
                      <CheckCircle2 className={`w-2.5 h-2.5 ${i === 0 || i === 3 ? 'text-[#F97316]' : 'text-slate-400'}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 tracking-tight leading-none pt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="arsenal-text-item pt-2">
              <button className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all shadow-[0_15px_40px_-10px_rgba(249,115,22,0.3)] active:scale-95 group">
                <span>Explore Our Arsenal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Arsenal Metrics Card (Compact HD) */}
          <div ref={cardRef} className="md:w-[46%] lg:w-[44%] relative group">
            {/* Industry Leader Badge */}
            <div className="absolute -top-3 left-6 z-20">
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#F97316] capitalize tracking-widest leading-none">Industry</span>
                <span className="text-[10px] font-bold text-[#111827] capitalize tracking-widest leading-none">Leader</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/50">

              {/* Card Header (Midnight Precision - Ultra Compact with 3D Architectural Nexus & Neural Particles) */}
              <div className="bg-[#111827] px-7 pt-7 pb-8 relative overflow-hidden group/header">
                {/* 3D Isometric Architectural Grid Floor */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] overflow-hidden" style={{ perspective: '1200px' }}>
                  <div
                    className="absolute inset-x-[-50%] inset-y-[-50%] h-[200%] w-[200%] blueprint-drift"
                    style={{
                      background: 'radial-gradient(circle, rgba(249,115,22,0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      transform: 'rotateX(65deg) rotateZ(35deg) translateZ(-50px)'
                    }}
                  />
                  <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes drift { 0% { background-position: 0 0; } 100% { background-position: 48px 48px; } }
                    .blueprint-drift { animation: drift 15s linear infinite; }
                    @keyframes breathe { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(249,115,22,0.3); } 50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(249,115,22,0.5); } }
                    .icon-breathe { animation: breathe 4s ease-in-out infinite; }
                    @keyframes float-trophy { 0%, 100% { transform: translateY(0) rotate(12deg); } 50% { transform: translateY(-5px) rotate(15deg); } }
                    .trophy-float { animation: float-trophy 6s ease-in-out infinite; }
                    @keyframes float-particle { 0%, 100% { transform: translate(0, 0); opacity: 0.2; } 50% { transform: translate(10px, -15px); opacity: 0.5; } }
                    .particle { animation: float-particle var(--duration) ease-in-out infinite; }
                  `}} />
                </div>

                {/* Floating Neural Particles (15-20 dots) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="particle absolute w-1 h-1 rounded-full bg-white/30"
                      style={{
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.4 + 0.1,
                        scale: Math.random() * 0.5 + 0.5,
                        '--duration': `${4 + Math.random() * 4}s`
                      } as any}
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="particle absolute w-1.5 h-1.5 rounded-full bg-[#F97316]/40"
                      style={{
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.4 + 0.1,
                        scale: Math.random() * 0.5 + 0.5,
                        '--duration': `${5 + Math.random() * 5}s`
                      } as any}
                    />
                  ))}
                </div>

                {/* Digital Pulse Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F97316]/5 to-transparent animate-pulse-slow" />

                {/* Header Content Overlay */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {/* Breathing Icon Container */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center shadow-lg icon-breathe">
                      <BarChart3 className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">Arsenal <span className="text-[#F97316]">Metrics</span></h4>
                      <p className="text-white/40 text-[8.5px] font-bold uppercase tracking-[0.15em] leading-none pt-1.5 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#F97316] animate-pulse" />
                        Proven Excellence
                      </p>
                    </div>
                  </div>
                  {/* Subtle Floating Trophy */}
                  <div className="trophy-float">
                    <Trophy className="w-7 h-7 text-white/5" />
                  </div>
                </div>
              </div>

              {/* Metric Card Content (Ultra High Density Nano UI) */}
              <div className="px-5 pt-5 lg:pt-6 pb-8 bg-white relative z-10 rounded-t-[2.25rem] border-t border-slate-100 shadow-inner -mt-6">
                <div className="text-center mb-4">
                  <h5 className="text-xl font-bold text-[#111827] tracking-tight relative inline-block">
                    Performance <span className="text-[#F97316]">Indicators</span>
                    <div className="hidden sm:block absolute -bottom-1.5 w-6 h-0.5 bg-[#F97316] rounded-full left-1/2 -translate-x-1/2" />
                  </h5>
                </div>

                {/* Metric Grid - Nano Compact */}
                <div className="grid grid-cols-2 gap-2">
                  {metricBoxes.map((box, i) => (
                    <div key={i} className="mini-metric bg-slate-50 border border-slate-200 p-2 lg:p-2.5 rounded-md flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-500 hover:bg-white hover:border-[#F97316] hover:shadow-xl hover:shadow-orange-500/10 group/box hover:-translate-y-1">
                      <div className="w-7 h-7 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover/box:bg-[#F97316] transition-all duration-300">
                        <box.icon className="w-3 h-3 text-[#F97316] group-hover/box:text-white transition-colors" />
                      </div>
                      <div className="space-y-0">
                        <div className="text-base lg:text-lg font-bold text-[#111827] tracking-tight leading-none group-hover/box:text-[#FF6600] transition-colors">{box.value}</div>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none pt-1">{box.label}</p>
                      </div>
                      <div className="w-8 h-0.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#F97316] transition-all duration-1000 ease-out"
                          style={{ width: `${box.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Micro-Stats Footer (Nano Compact) */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                  {[
                    { val: "98%", label: "Success Rate", color: "text-emerald-500" },
                    { val: "97%", label: "Retention", color: "text-blue-500" },
                    { val: "95%", label: "On-Time", color: "text-orange-500" }
                  ].map((stat) => (
                    <div key={stat.label} className="mini-metric text-center">
                      <div className={`text-[13px] font-bold ${stat.color}`}>{stat.val}</div>
                      <p className="text-[12px] font-bold text-slate-400 capitalize tracking-widest leading-none pt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
