import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Sparkles, Zap, Shield, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '49',
    description: 'Perfect for startups and simple landing pages.',
    features: ['5 Pages Development', 'Responsive Design', 'Basic SEO', '1 Month Support', 'Free Hosting'],
    color: 'indigo',
    popular: false
  },
  {
    name: 'Professional',
    icon: Shield,
    price: '149',
    description: 'Optimized for growing businesses and e-commerce.',
    features: ['Unlimited Pages', 'Premium Animations', 'Advanced SEO', '6 Months Support', 'CMS Integration', 'Priority Email'],
    color: 'violet',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: '499',
    description: 'Full-scale solutions for large enterprises.',
    features: ['Custom Web Apps', 'Elite 3D Visuals', 'Market Strategy', 'Lifetime Support', 'Dedicated Manager', 'API Integrations'],
    color: 'emerald',
    popular: false
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.pricing-card'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      id="pricing"
      className="relative py-20 lg:py-32 bg-[#fcfdff] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="reveal-up inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/5">
            <Sparkles size={14} className="text-indigo-600" />
            <span className="text-[11px] font-black text-indigo-700 uppercase tracking-[0.25em]">Investment</span>
          </div>
          <h2 className="reveal-up text-2xl md:text-3xl lg:text-5xl font-display font-black text-slate-900 leading-tight">
            Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Growth Plans.</span>
          </h2>
          <p className="reveal-up text-slate-500 text-sm font-medium max-w-xl mx-auto">
            Choose a plan that fits your vision. No hidden fees, just pure digital performance.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`pricing-card relative p-8 lg:p-10 bg-white rounded-[2.5rem] border ${p.popular ? 'border-indigo-500 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-xl'} flex flex-col transition-all duration-500 hover:translate-y-[-10px]`}
            >
              {p.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-600 rounded-full shadow-lg">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Most Popular</span>
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${p.popular ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-600'}`}>
                    <p.icon size={24} />
                  </div>
                  <span className="text-sm font-black text-slate-300 uppercase tracking-widest">#{i+1}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-black text-slate-900">{p.name}</h3>
                  <p className="text-slate-400 text-xs font-medium mt-1 leading-relaxed">{p.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                   <span className="text-sm font-bold text-slate-400">$</span>
                   <span className="text-5xl font-black text-slate-900 leading-none">{p.price}</span>
                   <span className="text-sm font-bold text-slate-400">/mo</span>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                   {p.features.map((f, j) => (
                     <div key={j} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${p.popular ? 'bg-indigo-500' : 'bg-slate-100'} text-white`}>
                           <Check size={10} />
                        </div>
                        <span className="text-xs font-semibold text-slate-600">{f}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="pt-10">
                <button className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${p.popular ? 'bg-slate-900 text-white shadow-xl hover:bg-slate-800' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-100'}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
