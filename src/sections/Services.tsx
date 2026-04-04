import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Palette,
  Code2,
  ShoppingCart,
  Smartphone,
  Database,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';


// Import local assets
import imgWebDesign from '../assets/services/webdesign.png';
import imgWebDev from '../assets/services/webdev.png';
import imgEcommerce from '../assets/services/ecommerce.png';
import imgMobile from '../assets/services/mobile.png';
import imgSoftware from '../assets/services/software.png';
import imgMarketing from '../assets/services/marketing.png';


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'We create visually stunning, user-centric interface designs that don’t just capture attention but drive meaningful engagement. Our design philosophy combines modern aesthetics with seamless UX to elevate your digital brand identity to elite standards.',
    color: 'from-blue-500/20 to-transparent',
    iconColor: 'text-blue-600',
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building robust, enterprise-grade web applications using cutting-edge frameworks like React, Next.js, and Node.js. We focus on scalability, performance optimization, and clean architecture to ensure your technical infrastructure is future-proof.',
    color: 'from-violet-500/20 to-transparent',
    iconColor: 'text-violet-600',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Launch high-converting online stores with custom e-commerce solutions. From seamless multi-payment gateways to advanced inventory management and user-friendly checkout flows, we provide everything needed to scale your retail business globally.',
    color: 'from-emerald-500/20 to-transparent',
    iconColor: 'text-emerald-600',
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Developing high-performance, native and cross-platform mobile applications for iOS and Android. Our mobile solutions feature fluid animations, offline capabilities, and intuitive touch interfaces designed to provide a premium user experience on every device.',
    color: 'from-rose-500/20 to-transparent',
    iconColor: 'text-rose-600',
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: Database,
    title: 'Software Dev',
    description: 'Custom software engineering designed to solve complex business challenges. We deliver end-to-end software lifecycles, including architecture design, API development, and system integration, focused on maximizing your operational efficiency and ROI.',
    color: 'from-amber-500/20 to-transparent',
    iconColor: 'text-amber-600',
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Data-driven marketing strategies that amplify your brand’s visibility and convert traffic into loyal customers. Through advanced SEO, PPC management, and social media orchestration, we ensure your business dominates the digital landscape.',
    color: 'from-indigo-500/20 to-transparent',
    iconColor: 'text-indigo-600',
    image: "https://images.unsplash.com/photo-1460926092272-c0ad3af274b9?auto=format&fit=crop&q=80&w=1000"
  },
];



export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Heading Reveal
    gsap.fromTo(el.querySelector('.service-header'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );

    // Auto-advance logic
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);


  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-8 lg:py-10 overflow-hidden bg-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 space-y-8 lg:space-y-12">

        {/* Header - Compacted */}
        <div className="service-header text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            <span className="text-[8px] text-indigo-600 font-black uppercase tracking-[0.2em]">Our Services</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 leading-tight tracking-tight">
            Engineering The Future Of
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block pt-3 pb-3 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"
            >
              Digital Solutions.
            </motion.span>
          </h2>

          <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-medium max-w-xl mx-auto mt-6">
            Webultrasolution delivers unparalleled excellence across technical domains for global brands.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="service-container relative group">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute inset-y-0 -left-6 -right-6 z-20 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Sliding Container */}
          <div className="relative overflow-hidden px-4">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {services.map((service, i) => (
                <div key={i} className="min-w-full px-2">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50/60 rounded-[2rem] p-5 lg:p-8 overflow-hidden border border-slate-100 group shadow-sm"
                  >
                    {/* Image Column */}
                    <div className="relative aspect-video md:aspect-[1.4/1] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="p-1 px-2 bg-white/30 backdrop-blur-md rounded-lg border border-white/40">
                          <span className="text-[8px] font-black text-white uppercase tracking-widest">{service.title}</span>
                        </div>
                      </div>
                    </div>

                    {/* Text Column */}
                    <div className="space-y-4 lg:pl-2">
                      <h3 className="text-xl lg:text-[2rem] font-display font-bold text-slate-800 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-[11px] lg:text-sm leading-relaxed font-medium">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {['Analysis', 'Execution', 'Optimization'].map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-white rounded-full text-[8px] font-black text-indigo-600 border border-slate-100 shadow-xs uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button className="group flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-full font-black text-[10px] hover:bg-indigo-600 transition-all hover:shadow-indigo-500/30">
                          <span>Start Solution</span>
                          <ArrowRight size={12} className="translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-8 bg-indigo-600' : 'w-3 bg-slate-200 hover:bg-slate-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
