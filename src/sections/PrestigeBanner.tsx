import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users,
  ExternalLink,
  Target,
  Users2,
  BrainCircuit,
  CheckCircle2,
  Star,
  TrendingUp,
  ArrowRight,
  Award,
  Globe,
  Zap,
  Newspaper,
  BarChart3,
  Briefcase
} from 'lucide-react';

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
  const ctaRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Reveals
      gsap.fromTo(ctaRef.current,
        { scale: 0.98, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: ctaRef.current, start: 'top 95%' } }
      );

      gsap.fromTo('.section-header',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, scrollTrigger: { trigger: '.section-header', start: 'top 90%' } }
      );

      gsap.fromTo('.feature-card',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: leftColRef.current, start: 'top 85%' } }
      );

      gsap.fromTo(rightColRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: rightColRef.current, start: 'top 85%' } }
      );

      // Infinite Marquee
      if (marqueeRef.current) {
        const scrollWidth = marqueeRef.current.scrollWidth;
        gsap.to(marqueeRef.current, {
          x: -(scrollWidth / 2),
          duration: 40,
          ease: 'none',
          repeat: -1
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-12 lg:pt-16 pb-14 overflow-hidden bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">



        {/* --- BUSINESS EDGE SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

          {/* Left Content */}
          <div ref={leftColRef}>
            <div className="section-header mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
                <Target size={11} className="text-orange-500" />
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest leading-none">Innovation First</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-950 mb-4 tracking-tight leading-tight uppercase">
                We Bring Your <span className="text-[#FF6600]">Business Edge</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed max-w-md">
                Our <span className="text-slate-900 font-bold">95% timely project delivery</span> and quality outcome give you
                an edge that no competitor has.
              </p>
            </div>

            <div className="space-y-4">
              <FeatureItem
                icon={Target}
                title="Business-First Thinking"
                body="Your P&L = our KPI. Every solution directly impacts your bottom line."
              // tagline="Strategic planning meets tactical execution"
              />
              <FeatureItem
                icon={Users2}
                title="Full-Spectrum Expertise"
                body="500+ specialists across 4 global hubs delivering comprehensive solutions."
              // tagline="From strategy to implementation"
              />
              <FeatureItem
                icon={BrainCircuit}
                title="Human-Centered Delivery"
                body="No overengineering. Pure ROI. Solutions built for real business needs."
              // tagline="Efficiency without complexity"
              />
            </div>
          </div>

          {/* Right Visual & Stats */}
          <div ref={rightColRef} className="relative pt-4">
            <div className="relative rounded-[1.25rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[1.3/1] bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md rounded-lg border border-white/50 shadow-xl z-20">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-white" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Excellence Delivered</span>
              </div>
            </div>

            {/* Centered Floating Stat Bar - More Compact Width */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-stretch gap-3 w-[85%] lg:w-[85%] z-30">
              <StatCard
                icon={CheckCircle2}
                value="95%"
                label="On-Time Delivery"
                sub="global brands trust us"
              />
              <StatCard
                icon={Star}
                value="100+"
                label="Global Brands"
                sub="industry leaders"
              />
              <StatCard
                icon={TrendingUp}
                value="30+"
                label="Markets"
                sub="worldwide presence"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, body, tagline }: any) {
  return (
    <div className="feature-card group p-3 rounded-md bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200 hover:border-orange-200 transition-all duration-400 cursor-pointer relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-10 h-10 rounded-md bg-[#FF6600] flex items-center justify-center shadow-lg shadow-orange-100 border border-orange-200/20 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[16px] lg:text-[18px] font-display font-bold text-slate-900 tracking-tight uppercase">
              {title.split(' ').map((word, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-[#FF6600]" : ""}>
                  {word}{i < arr.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h4>
            <ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-orange-400 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
          </div>
          <p className="text-slate-500 text-sm lg:text-[12px] font-bold leading-relaxed mb-2">{body}</p>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] leading-none block italic opacity-70 group-hover:opacity-100 transition-opacity">{tagline}</span>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, value, label, sub }: any) {
  return (
    <div className="flex-1 bg-white p-3 lg:p-3.5 rounded-[1rem] shadow-xl border border-slate-200 flex flex-col items-center text-center group hover:-translate-y-1.5 transition-all duration-500">
      <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center mb-2 border border-orange-100/50">
        <Icon className="w-3.5 h-3.5 text-orange-500" />
      </div>
      <div className="font-display font-bold text-base lg:text-lg text-slate-950 leading-none mb-1 group-hover:text-orange-600 transition-colors">{value}</div>
      <div className="text-[10px] font-semibold text-slate-900 leading-tight mb-1 capitalize tracking-tight">{label}</div>
      {/* <div className="text-[7.5px] text-slate-400 leading-tight font-bold uppercase tracking-tighter opacity-80">{sub}</div> */}
    </div>
  );
}

