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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#111827] tracking-tight leading-[1.1] uppercase">
            Industry-Specific <span className="text-[#FF6600]">Excellence</span>
          </h2>
          <p className="text-slate-600 text-[12px] md:text-[14px] font-semibold leading-relaxed opacity-80 capitalize tracking-widest max-w-xl mx-auto italic">
            Specialized solutions engineered for your industry's unique challenges and opportunities.
          </p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="h-px w-5 bg-orange-200" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Deep domain expertise across 6 core industries</p>
            <span className="h-px w-5 bg-orange-200" />
          </div>
        </div>

        {/* Industry Grid - Compact & Detailed */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-14">
          {industries.map((item, i) => (
            <IndustryCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ title, category, icon: Icon, achievement, description, impact, timeline }: any) {
  return (
    <div className="industry-card bg-white border border-slate-200 rounded-md p-4 lg:p-5 flex flex-col h-full group hover:border-[#F97316] shadow-2xl shadow-slate-200/40 hover:shadow-orange-500/10 transition-all duration-500 relative overflow-hidden">
      {/* Decorative Corner Refraction */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[3rem] group-hover:from-[#F97316]/10 transition-colors" />

      {/* Icon & Title Row (Micro-Scaled for Readability) */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="w-9 h-9 rounded-md bg-orange-50 text-[#F97316] flex items-center justify-center border border-orange-100/50 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500">
          <Icon size={16} className="group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h4 className="text-xl lg:text-2xl font-display font-bold text-[#111827] group-hover:text-[#FF6600] tracking-tight leading-none transition-colors capitalize">{title}</h4>
          <p className="text-[12px] font-semibold text-slate-400 capitalize tracking-widest mt-2">{category}</p>
        </div>
      </div>

      {/* Achievement Tag (Increased Font Size) */}
      <div className="mb-4 px-3 py-2 bg-orange-50/80 border border-orange-100/30 rounded-lg relative z-10 hover:bg-orange-100/40 transition-colors">
        <div className="flex items-center gap-2">
          <TrendingUp size={14} className="text-[#FF6600] shrink-0" />
          <p className="text-sm lg:text-sm font-bold text-[#FF6600] leading-tight tracking-tight italic">{achievement}</p>
        </div>
      </div>

      {/* Description (Increased Readability) */}
      <p className="text-slate-500 text-sm lg:text-[15.5px] font-semibold leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Metrics Row (Scaled Highlights) */}
      <div className="flex items-stretch gap-2 mb-5">
        <div className="flex-1 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
          <div className="text-[12px] font-bold text-slate-900 group-hover:text-[#FF6600] leading-none mb-1.5 transition-colors">{impact}</div>
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Impact</div>
        </div>
        <div className="flex-1 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
          <div className="text-[12px] font-bold text-slate-900 group-hover:text-[#FF6600] leading-none mb-1.5 transition-colors">{timeline}</div>
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Timeline</div>
        </div>
      </div>

      {/* Action Button (Increased Interactive Font Size) */}
      <button className="w-full py-3 rounded-md bg-white text-[#FF6600] border border-[#FF6600]/30 font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-[#FF6600] hover:text-white shadow-sm hover:shadow-lg hover:shadow-orange-500/20 transition-all active:scale-95 flex items-center justify-center gap-2">
        <span>Explore Solutions</span>
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
