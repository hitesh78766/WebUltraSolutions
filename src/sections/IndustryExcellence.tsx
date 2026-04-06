import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Factory, CarFront, Truck, ShoppingCart,
  Building2, Landmark, ArrowRight, CheckCircle2,
  TrendingUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: 'Manufacturing',
    category: 'Industrial',
    icon: Factory,
    achievement: 'AI automation — 60% faster assembly',
    description: 'Smart factories that predict maintenance, optimize workflows, and eliminate downtime with advanced IoT integration.',
    impact: '60% efficiency',
    timeline: '8-12 months'
  },
  {
    title: 'Automotive',
    category: 'Transportation',
    icon: CarFront,
    achievement: '100% digital commerce (Fisher case)',
    description: 'Complete digital transformation from traditional sales to modern e-commerce excellence with full integration.',
    impact: '100% digital',
    timeline: '12 months'
  },
  {
    title: 'Logistics',
    category: 'Supply Chain',
    icon: Truck,
    achievement: 'Real-time visibility — 22% fuel savings',
    description: 'Connected supply chains with predictive analytics and route optimization for maximum efficiency.',
    impact: '22% savings',
    timeline: '2-6 months'
  },
  {
    title: 'Retail',
    category: 'Commerce',
    icon: ShoppingCart,
    achievement: 'eComm outperforming physical revenue',
    description: 'Digital-first retail experiences that drive customer loyalty and sales growth through seamless omnichannel.',
    impact: '200% growth',
    timeline: '6-9 months'
  },
  {
    title: 'Real Estate',
    category: 'Property',
    icon: Building2,
    achievement: 'PropTech revolution in progress',
    description: 'Smart building management and digital property experiences with advanced analytics and automation.',
    impact: '50% automation',
    timeline: '6-12 months'
  },
  {
    title: 'BFSI',
    category: 'Financial',
    icon: Landmark,
    achievement: 'Zero compliance violation modernization',
    description: 'Secure financial platforms with full regulatory compliance and modern UX for enhanced experience.',
    impact: '100% compliant',
    timeline: '12-18 months'
  }
];

export default function IndustryExcellence() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".industry-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
          }
        }
      );

      // Cards Animation
      gsap.fromTo(".industry-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 95%",
          }
        }
      );

      // Footer Banner Animation
      gsap.from(".industry-footer", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-footer",
          start: "top 95%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="industry-excellence" className="py-10 lg:py-14 bg-white overflow-hidden font-display relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* Section Header */}
        <div className="industry-header text-center max-w-4xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.1]">
            Industry-Specific <span className="text-[#F97316]">Excellence</span>
          </h2>
          <p className="text-slate-500 text-[12px] md:text-[14px] font-medium leading-relaxed opacity-80 uppercase tracking-widest max-w-xl mx-auto italic">
            Specialized solutions engineered for your industry's unique challenges and opportunities.
          </p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="h-px w-5 bg-orange-200" />
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Deep domain expertise across 6 core industries</p>
            <span className="h-px w-5 bg-orange-200" />
          </div>
        </div>

        {/* Industry Grid - Compact & Detailed */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-14">
          {industries.map((item, i) => (
            <IndustryCard key={i} {...item} />
          ))}
        </div>

        {/* Bottom Leadership Banner */}
        <div className="industry-footer relative rounded-xl bg-[#111827] overflow-hidden p-6 lg:p-8 shadow-2xl flex flex-col items-center text-center group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.05] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-colors duration-700 group-hover:bg-[#F97316]/20" />

          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md">
              <CheckCircle2 size={10} className="text-[#F97316]" />
              <span className="text-[8px] font-bold text-white uppercase tracking-widest leading-none">Industry Leadership</span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight">
              Ready to Transform Your Industry?
            </h3>

            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.1em] opacity-80 italic">
              Industry expertise that drives transformation. Proven results.
            </p>

            <button className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-3 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all shadow-[0_15px_40px_-10px_rgba(249,115,22,0.4)] active:scale-95 group/btn">
              <span>Explore Industry Solutions</span>
              <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function IndustryCard({ title, category, icon: Icon, achievement, description, impact, timeline }: any) {
  return (
    <div className="industry-card bg-white border border-slate-200 rounded-xl p-4 lg:p-5 flex flex-col h-full group hover:border-[#F97316] shadow-2xl shadow-slate-200/40 hover:shadow-orange-500/10 transition-all duration-500 relative overflow-hidden">
      {/* Decorative Corner Refraction */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[3rem] group-hover:from-[#F97316]/10 transition-colors" />

      {/* Icon & Title Row (Micro-Scaled for Readability) */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F97316] flex items-center justify-center border border-orange-100/50 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500">
          <Icon size={16} className="group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h4 className="text-[16px] lg:text-[17.5px] font-bold text-[#111827] group-hover:text-[#F97316] tracking-tight leading-none transition-colors">{title}</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{category}</p>
        </div>
      </div>

      {/* Achievement Tag (Increased Font Size) */}
      <div className="mb-4 px-3 py-1.5 bg-orange-50/80 border border-orange-100/30 rounded-lg relative z-10 hover:bg-orange-100/40 transition-colors">
        <div className="flex items-start gap-2">
          <TrendingUp size={11} className="text-[#F97316] mt-0.5 shrink-0" />
          <p className="text-[11.5px] font-bold text-[#F97316] leading-tight tracking-tight mt-0.5 italic">{achievement}</p>
        </div>
      </div>

      {/* Description (Increased Readability) */}
      <p className="text-slate-500 text-[12px] lg:text-[13px] font-medium leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Metrics Row (Scaled Highlights) */}
      <div className="flex items-stretch gap-2 mb-5">
        <div className="flex-1 bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
          <div className="text-[9.5px] font-bold text-slate-900 group-hover:text-[#F97316] leading-none mb-1 transition-colors">{impact}</div>
          <div className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Impact</div>
        </div>
        <div className="flex-1 bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
          <div className="text-[9.5px] font-bold text-slate-900 group-hover:text-[#F97316] leading-none mb-1 transition-colors">{timeline}</div>
          <div className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Timeline</div>
        </div>
      </div>

      {/* Action Button (Increased Interactive Font Size) */}
      <button className="w-full py-2.5 rounded-lg bg-white text-[#F97316] border border-[#F97316]/30 font-bold text-[10px] uppercase tracking-[0.18em] hover:bg-[#F97316] hover:text-white shadow-sm hover:shadow-lg hover:shadow-orange-500/20 transition-all active:scale-95 flex items-center justify-center gap-2">
        <span>Explore Solutions</span>
        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
