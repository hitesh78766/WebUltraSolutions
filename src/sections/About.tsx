import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Target, ArrowRight, Sparkles } from 'lucide-react';
import ForceDirectedGraph from '../components/ForceDirectedGraph';
import ParticleNetwork from '../components/ParticleNetwork';
import IdentityCore from '../components/IdentityCore';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Cinematic Reveal
    gsap.fromTo(el.querySelectorAll('.reveal-up'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
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
      id="about"
      className="relative py-6 lg:py-10 overflow-hidden bg-[#fcfdff]"
    >
      
      {/* 1. Cinematic Particle Network Background */}
      <div className="absolute inset-0 z-0">
          <ParticleNetwork />
      </div>

      {/* 2. Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT SIDE - CONTENT (Smaller focus) */}
            <div className="lg:w-[35%] space-y-6 text-center lg:text-left">
              <div className="reveal-up space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/5 backdrop-blur-sm">
                    <Sparkles size={12} className="text-indigo-600" />
                    <span className="text-[10px] font-black text-indigo-700 uppercase tracking-[0.15em]">Our Identity</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/10">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                    <span className="text-[9px] font-bold text-emerald-600 tracking-tight">Active</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-black text-slate-900 leading-[1.1] tracking-tight">
                  <span className="inline-block transform hover:scale-110 transition-transform origin-left cursor-default">👋</span> We Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient-x">Digital Dreams.</span>
                </h2>

                <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
                   Webultrasolution is a premium IT partner delivering elite websites, eCommerce platforms, and more.
                </p>
              </div>

              <div className="reveal-up pt-2">
                 <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[12px] font-black rounded-full shadow-xl transition-all active:scale-95 overflow-hidden hover:shadow-indigo-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2.5">
                      Start Your Project
                      <ArrowRight size={16} className="group-hover:translate-y-1 transition-transform" />
                    </span>
                 </button>
              </div>
            </div>

            {/* RIGHT SIDE - INTERACTIVE VISUAL (Orbital Reference Style) */}
            <div className="relative lg:w-[68%] flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
              <div className="relative w-full h-full min-h-[350px] lg:min-h-[500px] reveal-up">
                
                {/* 1. Dashboard Orbital Rings - Wide & Subtle */}
                <div className="absolute inset-x-[-10%] inset-y-[-10%] rounded-full border border-dashed border-emerald-500/15 animate-spin-slow scale-110 opacity-40" />
                <div className="absolute inset-[-5%] rounded-full border border-dashed border-indigo-500/10 animate-spin-reverse-slow scale-125 opacity-20" />

                {/* 2. CENTRAL AVATAR / LOGO (Animated Hub) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] z-10 flex items-center justify-center">
                   
                   {/* Cinematic Breathing Core */}
                   <div className="relative w-full h-full animate-[pulse_6s_ease-in-out_infinite]">
                      
                      {/* Internal Rotating Energy Ring */}
                      <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-indigo-500/40 border-r-indigo-500/20 animate-spin-slow z-20 pointer-events-none" />

                      <div className="absolute inset-0 rounded-full overflow-hidden border-[6px] border-white shadow-2xl ring-2 ring-indigo-500/10 z-10">
                        <IdentityCore />
                      </div>
                   </div>

                   {/* Orbital Energy Rings (Concentric Animation) */}
                   <div className="absolute inset-[-15%] rounded-full border border-indigo-500/15 animate-[spin_30s_linear_infinite]" />
                   <div className="absolute inset-[-8%] rounded-full border border-dashed border-emerald-500/10 animate-[spin_45s_linear_infinite_reverse]" />
                   <div className="absolute inset-[-25%] rounded-full border border-indigo-500/5 animate-[spin_60s_linear_infinite]" />
                   
                   {/* Vivid Core Glow */}
                   <div className="absolute inset-x-[-30%] inset-y-[-30%] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[80px] rounded-full z-[-1] animate-pulse" />
                </div>

                {/* 3. INTERACTIVE ORBITAL SKILLS (Canvas) */}
                <div className="absolute inset-0 z-20 w-full h-full bg-transparent flex items-center justify-center">
                   <ForceDirectedGraph />
                </div>

                {/* 4. Large Atmospheric Background Diffusion */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[750px] h-[400px] rounded-full bg-indigo-50/10 backdrop-blur-[0.5px] border border-white/10 z-0" />
                
                {/* 5. Micro-Badges (Corner Focus) */}
                <div className="absolute top-0 right-[5%] p-2 bg-white rounded-xl shadow-lg border border-indigo-50 animate-bounce-slow z-30">
                   <CheckCircle2 size={16} className="text-emerald-500" />
                </div>
                <div className="absolute bottom-0 left-[5%] p-2 bg-white rounded-xl shadow-lg border border-indigo-50 animate-float z-30">
                   <Target size={16} className="text-indigo-500" />
                </div>
              </div>
            </div>

         </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes spin-reverse-slow { from { transform: rotate(360deg) } to { transform: rotate(0deg) } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-15px) } }
        @keyframes float { 0%, 100% { transform: translate(0, 0) } 50% { transform: translate(10px, -20px) } }
        
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 8s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse-slow 25s linear infinite; }
        .animate-spin-extra-slow { animation: spin-slow 35s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
}

