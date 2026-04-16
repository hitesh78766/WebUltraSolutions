import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Cpu,
  ShoppingCart,
  Smartphone,
  Cloud,
  Palette,
  ChevronRight,
  ArrowRight,
  Zap,
  Globe,
  Database,
  Layers,
  Shield,
  Box,
  Terminal,
  Smartphone as MobileIcon,
  Code2
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techDomains = [
  {
    icon: Monitor,
    title: 'Digital Transformation',
    subtitle: 'Strategic digital roadmaps for the modern enterprise',
    technologies: [
      { name: 'Strategy', icon: Zap },
      { name: 'Analytics', icon: Database },
      { name: 'Cloud Migration', icon: Cloud },
      { name: 'Automation', icon: Cpu },
      { name: 'Security', icon: Shield },
      { name: 'Consulting', icon: Globe }
    ]
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    subtitle: 'Intelligent systems and autonomous workflows',
    technologies: [
      { name: 'Machine Learning', icon: BrainIcon },
      { name: 'NLP', icon: Terminal },
      { name: 'Computer Vision', icon: Monitor },
      { name: 'RPA', icon: Zap },
      { name: 'Predictive AI', icon: Database },
      { name: 'OpenAI API', icon: Zap }
    ]
  },
  {
    icon: Code2,
    title: 'Custom Software',
    subtitle: 'Tailored software solutions for unique business needs',
    technologies: [
      { name: 'Python', icon: Code2 },
      { name: 'Node.js', icon: Code2 },
      { name: 'Java', icon: Code2 },
      { name: 'C#', icon: Code2 },
      { name: 'Go', icon: Code2 },
      { name: 'Ruby', icon: Code2 }
    ]
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development',
    subtitle: 'Conversion-optimized retail platforms',
    technologies: [
      { name: 'Shopify', icon: ShoppingCart },
      { name: 'Magento', icon: Box },
      { name: 'WooCommerce', icon: Smartphone },
      { name: 'Headless', icon: Layers },
      { name: 'Stripe', icon: Shield },
      { name: 'Marketplaces', icon: Globe }
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'High-performance native and cross-platform apps',
    technologies: [
      { name: 'React Native', icon: MobileIcon },
      { name: 'Flutter', icon: Layers },
      { name: 'Swift', icon: Zap },
      { name: 'Kotlin', icon: Code2 },
      { name: 'Objective-C', icon: Code2 },
      { name: 'Xcode', icon: Monitor },
      { name: 'SwiftUI', icon: Palette },
      { name: 'UIKit', icon: Box },
      { name: 'XCTest', icon: Terminal },
      { name: 'Java', icon: Code2 },
      { name: 'Android Studio', icon: Monitor },
      { name: 'Jetpack Compose', icon: Layers },
      { name: 'XML Layouts', icon: Code2 },
      { name: 'KMM', icon: Smartphone },
      { name: 'Ionic', icon: Layers },
      { name: '.NET MAUI', icon: Box }
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    subtitle: 'Scalable infrastructure and rapid deployment',
    technologies: [
      { name: 'AWS', icon: Cloud },
      { name: 'Azure', icon: Cloud },
      { name: 'Docker', icon: Box },
      { name: 'Kubernetes', icon: Layers },
      { name: 'Jenkins', icon: Terminal },
      { name: 'Terraform', icon: Code2 }
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User-centric design that drives engagement',
    technologies: [
      { name: 'Figma', icon: Palette },
      { name: 'Adobe XD', icon: Palette },
      { name: 'Prototyping', icon: Zap },
      { name: 'User Testing', icon: Globe },
      { name: 'Design Systems', icon: Box },
      { name: 'Visual Identity', icon: Monitor }
    ]
  }
];

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04Z" />
    </svg>
  );
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to Digital Transformation
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelector('.tech-header'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );
  }, []);

  const activeDomain = techDomains[activeIndex];
  const DomainIcon = activeDomain.icon;

  return (
    <section id="about" ref={sectionRef} className="py-10 md:py-20 bg-[#FBFBFC] overflow-hidden font-display">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section (Elite Mini) */}
        <div className="tech-header text-center mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-display font-bold text-[#111827] tracking-tight leading-[1.1] uppercase">
            We've Helped Leaders <span className="text-[#FF6600]">Outlast Trends.</span> Your Turn?
          </h2>
          <p className="text-slate-600 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] bg-slate-50 inline-block px-4 py-1.5 rounded-md border border-slate-100 mt-4">
            Every major platform and emerging technology
          </p>
        </div>

        {/* Main Interface - Elite Compact (Fixed Height with Scrolling - Deep Clearance Height) */}
        <div className="bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden shadow-[0_20px_70px_-15px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-12 h-auto md:h-[600px] lg:h-[600px]">

          {/* Sidebar - left side (Scrollable - Enhanced Safe-Zone) */}
          <div className="md:col-span-4 lg:col-span-3 bg-[#FFF9F5] p-5 lg:p-7 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col relative h-[350px] sm:h-[450px] md:h-full">
            <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-8 px-2">
              Technology Domains
            </h3>
            <div className="space-y-1.5 flex-grow overflow-y-auto pr-2 custom-scrollbar pb-16">
              {techDomains.map((domain, index) => (
                <button
                  key={domain.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-md transition-all duration-300 group ${activeIndex === index
                    ? 'bg-[#111827] text-white shadow-xl translate-x-1'
                    : 'hover:bg-white/70 text-slate-600'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-md transition-colors ${activeIndex === index ? 'bg-[#F97316] shadow-lg' : 'bg-white shadow-sm border border-slate-100'}`}>
                      <domain.icon className={`w-3.5 h-3.5 ${activeIndex === index ? 'text-white' : 'text-[#111827]'}`} />
                    </div>
                    <span className={`font-bold text-[14px] tracking-tight ${activeIndex === index ? 'text-white' : 'text-slate-600'}`}>
                      {domain.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeIndex === index ? 'text-white opacity-100' : 'text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content Area - right side (Scrollable) */}
          <div className="md:col-span-8 lg:col-span-9 p-5 sm:p-7 lg:p-10 relative flex flex-col bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-grow overflow-y-auto pr-4 custom-scrollbar pb-24 h-full"
              >
                {/* Domain Header (Elite Mini) */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-[#F97316] rounded-md flex items-center justify-center shadow-lg shadow-orange-100">
                    <DomainIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-[#111827] tracking-tight capitalize">
                      {activeDomain.title}
                    </h4>
                    <p className="text-slate-400 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">
                      {activeDomain.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tech Grid (Elite Density) */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {activeDomain.technologies.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.01 }}
                      className="bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-slate-300 py-4 sm:py-6 px-3 rounded-md flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all group cursor-pointer hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <tech.icon className="w-4 h-4 text-[#111827] group-hover:text-[#F97316] group-hover:stroke-[3px] transition-all" />
                      </div>
                      <span className="text-[13px] font-bold text-[#111827] text-center leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA at Bottom Right (High-Status Floating Position) */}
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-14 z-20">
              <button className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-md font-bold text-[10px] sm:text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-orange-500/20 active:scale-95 group">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #FDF4ED; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #F97316; border-radius: 10px; opacity: 0.6; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #EA580C; }
        
        /* Smooth Scrolling */
        .custom-scrollbar { scroll-behavior: smooth; }
      `}} />
    </section>
  );
}
