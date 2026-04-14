import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, TrendingUp, Building2, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    title: 'For Startups',
    icon: Rocket,
    tagline: '"From napkin sketch to market dominance in 18 months"',
    description: 'We accelerate your journey from idea to a market-ready MVP, securing your foothold and attracting early adopters.',
    features: [
      'Rapid Prototyping & MVP Development',
      'Reduced Time-to-Market',
      'Cost-Effective Scalable Architecture',
      'Data-Driven Iteration for Product-Market Fit'
    ],
    color: 'border-slate-200'
  },
  {
    title: 'For Growing SMEs',
    icon: TrendingUp,
    popular: true,
    tagline: '"Supercharge your growth and outpace competitors."',
    description: 'We optimize and scale your existing operations, removing bottlenecks therein, with our robust technology solutions.',
    features: [
      'Process Automation & System Integration',
      'Enhanced Operational Efficiency',
      'Advanced Data & Growth Analytics',
      'Scalable Infrastructure for Uninterrupted Growth'
    ],
    color: 'border-[#F97316]'
  },
  {
    title: 'For Large Enterprises',
    icon: Building2,
    tagline: '"Transform legacy systems into agile, innovation powerhouses."',
    description: 'We modernize your digital core with cutting-edge solutions, ensuring security, efficiency, and market leadership.',
    features: [
      'Enterprise-Grade Digital Transformation',
      'Legacy System Modernization & Cloud Migration',
      'AI & ML Integration for Intelligent Operations',
      'Enhanced Security, Compliance, and Global Scalability'
    ],
    color: 'border-slate-200'
  }
];

export default function ScaleAmbition() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ambition-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          }
        }
      );

      gsap.fromTo(".ambition-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="scale-ambition" className="py-12 lg:py-16 bg-[#FAFAFB] overflow-hidden font-display relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* Header content */}
        <div className="ambition-header text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#111827] tracking-tight leading-[1.1] uppercase">
            Scale With the <span className="text-[#FF6600]">Power of Your Ambition</span>
          </h2>
          <div className="w-12 h-1 bg-[#FF6600] mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-base font-semibold leading-relaxed max-w-2xl mx-auto pt-2">
            From emerging startup visionaries to global enterprise titans — we engineer technology that merges into your business for a resilient and scalable backbone.
          </p>
        </div>

        {/* Pricing/Tier Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`ambition-card bg-white border ${tier.color} rounded-md p-5 lg:p-6 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 relative`}>

              {/* Card Top Section */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-9 h-9 rounded-md ${tier.popular ? 'bg-[#FF6600] text-white' : 'bg-slate-900 text-white'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <tier.icon size={18} />
                </div>
                {tier.popular && (
                  <span className="bg-[#FF6600] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="text-xl lg:text-2xl font-display font-bold text-[#111827] mb-6 tracking-tight capitalize group-hover:text-[#FF6600] transition-colors">{tier.title}</h3>

              <div className="space-y-3 flex-grow mb-6">
                <p className="text-[#FF6600] text-sm lg:text-[15px] font-bold italic leading-snug tracking-tight">
                  {tier.tagline}
                </p>
                <p className="text-slate-500 text-sm lg:text-[15px] font-semibold leading-relaxed">
                  {tier.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 pt-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 group/item">
                      <div className="mt-0.5 w-4.5 h-4.5 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-[#FF6600]" strokeWidth={3} />
                      </div>
                      <span className="text-[12.5px] font-bold text-slate-700 tracking-tight leading-normal group-hover:text-slate-900 transition-colors pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className={`w-full py-3.5 rounded-md flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-[0.2em] transition-all active:scale-95 group/btn ${tier.popular ? 'bg-[#FF6600] text-white hover:bg-slate-900 shadow-orange-500/20 shadow-xl' : 'bg-[#FF6600] text-white hover:bg-slate-900'}`}>
                <span>Get Started</span>
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
