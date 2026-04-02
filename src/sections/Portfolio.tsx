import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Eye, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Aurum & Co.',
    category: 'Luxury Brand',
    image: '/images/portfolio-1.jpg',
    description: 'Elegant luxury brand website with immersive animations.',
    tags: ['Web Design', 'Animation'],
    color: 'from-amber-400 to-amber-600',
  },
  {
    title: 'Atelier Luxe',
    category: 'E-commerce',
    image: '/images/portfolio-2.jpg',
    description: 'Modern fashion platform with seamless shopping.',
    tags: ['React', 'Stripe'],
    color: 'from-rose-400 to-rose-600',
  },
  {
    title: 'Analytica',
    category: 'SaaS Dashboard',
    image: '/images/portfolio-3.jpg',
    description: 'Analytics dashboard with real-time visualization.',
    tags: ['Dashboard', 'D3.js'],
    color: 'from-accent-400 to-accent-600',
  },
  {
    title: 'FitTrack Pro',
    category: 'Mobile App',
    image: '/images/portfolio-4.jpg',
    description: 'Fitness tracking app with personalized plans.',
    tags: ['React Native'],
    color: 'from-emerald-400 to-emerald-600',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

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

      // Projects stagger animation
      const cardElements = cards.querySelectorAll('.portfolio-card');
      cardElements.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            }
          }
        );

        // Parallax effect on scroll for images
        const cardImage = card.querySelector('.card-image');
        if (cardImage) {
          gsap.fromTo(cardImage, 
            { y: '-10%', scale: 1.1 },
            { 
              y: '10%',
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        }
      });

    }, section);

    return () => ctx.revert();
  }, []);

  // Card hover effect
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
    const card = e.currentTarget;
    const image = card.querySelector('.card-image');
    const overlay = card.querySelector('.card-overlay');
    const content = card.querySelector('.card-content');

    if (isEnter) {
      gsap.to(card, {
        y: -6,
        duration: 0.35,
        ease: 'power2.out'
      });
      gsap.to(image, {
        scale: 1.06,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(content, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out'
      });
    } else {
      gsap.to(card, {
        y: 0,
        duration: 0.35,
        ease: 'power2.out'
      });
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(content, {
        y: 16,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-5 border border-slate-100 shadow-soft">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-500 font-medium">Our Work</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-semibold text-slate-800 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Explore our portfolio of successful projects showcasing our expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card group relative"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow duration-400 border border-slate-100">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/50 to-transparent opacity-0" />
                
                {/* Content */}
                <div className="card-content absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0">
                  {/* Category */}
                  <span className={`inline-block w-fit px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white mb-2`}>
                    {project.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-800 text-xs font-medium rounded-full hover:bg-slate-50 transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </button>
                  </div>
                </div>

                {/* Index Number */}
                <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft">
                  <span className="text-accent-500 font-display font-semibold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="btn-interactive inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-600 font-medium rounded-full shadow-soft border border-slate-200 hover:border-accent-200 hover:shadow-soft-lg transition-all">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
