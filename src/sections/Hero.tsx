import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Sparkles, ShoppingCart, Monitor, Globe, Search
} from 'lucide-react';

import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';


gsap.registerPlugin(ScrollTrigger);

const sliderData = [
  {
    title: 'Best Solution For Online Stores',
    subtitle: 'Discover what SEO Consulting Services can do for Your Company',
    features: [
      'Easily update products',
      'Sell your products online',
      'Quick, Easy and Convenient',
      'Shaping Cart, Shopping carts, E-commerce Portals',
      'User Friendly, Resonable Price, On time Delivery, Quality Assurance'
    ],
    cta: 'READ MORE',
    color: 'bg-[#5e6ad2]',
    icon: ShoppingCart,
  },
  {
    title: 'Responsive Website Design',
    subtitle: 'A comprehensive web solution tailored for your business or personal website needs',
    features: [
      'Ultra Responsive Design Using HTML5 & CSS3',
      'Support All Major Browser (IE9/10/11, Firefox, Chrome Etc.)',
      'Works Great on Computer, Tablets & Phones'
    ],
    cta: 'READ MORE',
    color: 'bg-violet-600',
    icon: Monitor,
  },
  {
    title: 'Services The Way You Want Them',
    subtitle: 'A comprehensive web solution tailored for your business or personal website needs',
    features: [
      'Website Designing & Development',
      'Software & Portal Development',
      'Search Engine Optimization ( SEO )',
      'Graphics & Application Development',
      'Digital Marketing & PPC Advertising'
    ],
    cta: 'READ MORE',
    color: 'bg-indigo-600',
    icon: Globe,
  },
  {
    title: 'Search Engine Optimization',
    subtitle: 'Discover what SEO Consulting Services can do for Your Company',
    features: [
      'Digital Marketing & SEO Consulting',
      'Content & Social Media Marketing',
      'Reputation Management & Writing',
      'Keyword & Opportunity Research',
      'In-Depth Analytics & Reporting'
    ],
    cta: 'READ MORE',
    color: 'bg-[#5e6ad2]',
    icon: Search,
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Word entrance animation
    gsap.fromTo(el.querySelectorAll('.hero-char'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.015,
        ease: 'power3.out',
        delay: 0.2
      }
    );

    gsap.fromTo(el.querySelectorAll('.hero-fade-in'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
    );

    // Auto-play logic: 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const slide = sliderData[currentSlide];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#fcfdff] py-16"
    >
      <ThreeNetworkGlobe />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-7">

        {/* Elite Badge */}
        <div className="hero-fade-in inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-[0.3em]">Premium Web Experience</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight max-w-5xl mx-auto">
          {(() => {
            const words = slide.title.split(' ');
            const splitIndex = Math.max(1, words.length - 2);

            return words.map((word, wordIdx) => {
              const isDark = wordIdx < splitIndex;
              return (
                <span key={wordIdx} className={`inline-block ${isDark ? 'text-slate-900' : 'text-indigo-600'}`}>
                  {word.split('').map((char, charIdx) => (
                    <span key={`${currentSlide}-${wordIdx}-${charIdx}`} className="hero-char inline-block whitespace-pre">
                      {char}
                    </span>
                  ))}
                  {/* Space between words */}
                  {wordIdx < words.length - 1 && (
                    <span className="inline-block whitespace-pre"> </span>
                  )}
                </span>
              );
            });
          })()}
        </h1>

        {/* Subtitle */}
        <p className="hero-fade-in text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed font-secondary">
          {slide.subtitle}
        </p>

        {/* Dynamic Feature List - High Density Centered */}
        <div className="hero-fade-in flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {slide.features.map((feature, i) => (
            <div key={i} className="px-5 py-2.5 glass rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 transition-transform hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-sm" />
              <span className="text-[12px] font-bold text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Main Actions */}
        <div className="hero-fade-in pt-6 flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="group relative px-10 py-5 bg-slate-900 text-white text-sm font-bold rounded-full transition-all hover:bg-indigo-600 hover:shadow-premium-xl active:scale-95 flex items-center gap-3">
            <span>{slide.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" />
                </div>
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500">Trusted by Global Brands</span>
          </div>
        </div>


      </div>

      {/* Slider Nav - Re-integrated */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {sliderData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-700 rounded-full ${currentSlide === i ? 'w-10 bg-indigo-600' : 'w-4 bg-slate-200 hover:bg-slate-300'
                }`}
            />
          ))}
        </div>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Switch Solution</span>
      </div>
    </section>
  );
}
