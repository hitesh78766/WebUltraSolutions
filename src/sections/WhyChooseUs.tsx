import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Clock, Headphones, Rocket, Shield, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 250, suffix: '+', label: 'Projects' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 6, suffix: '+', label: 'Years' },
  { value: 50, suffix: '+', label: 'Team' },
];

const reasons = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Skilled professionals with years of industry experience.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects promptly.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your needs.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing ensures flawless deliverables.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Optimized solutions for lightning-fast speed.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    icon: Sparkles,
    title: 'Creative Design',
    description: 'Stunning visuals that capture your brand essence.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
  },
];

// Animated Counter Component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter || hasAnimated.current) return;

    const trigger = ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        
        gsap.to({ val: 0 }, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].val));
          }
        });
      },
    });

    return () => trigger.kill();
  }, [value]);

  return (
    <span ref={counterRef} className="stat-number tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const statsEl = statsRef.current;
    const reasonsEl = reasonsRef.current;

    if (!section || !heading || !statsEl || !reasonsEl) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(heading.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsEl.children,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: statsEl,
            start: 'top 88%',
          }
        }
      );

      // Reasons animation
      gsap.fromTo(reasonsEl.children,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: reasonsEl,
            start: 'top 90%',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-5 border border-slate-100 shadow-soft">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-500 font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-semibold text-slate-800 mb-4">
            The <span className="gradient-text">WebUltra</span> Advantage
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-5 lg:p-6 text-center border border-slate-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold gradient-text mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div ref={reasonsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-5 border border-slate-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                {/* Icon */}
                <div className={`w-11 h-11 ${reason.color} rounded-lg flex items-center justify-center mb-3 group-hover:shadow-soft transition-shadow`}>
                  <reason.icon className={`w-5 h-5 ${reason.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-base font-display font-semibold text-slate-700 mb-1 group-hover:text-accent-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
