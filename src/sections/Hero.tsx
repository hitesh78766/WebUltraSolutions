import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Sparkles, ShoppingCart, Monitor, Globe, Search
} from 'lucide-react';




gsap.registerPlugin(ScrollTrigger);

const sliderData = [
  {
    badge: 'Experience',
    title: 'Ecommerce Development',
    subtitle: 'Business-impacting Problems Need Business-centric Solutions',
    features: [
      '1000+ Projects Delivered',
      '24+ Years Experience',
      '97% Client Retention',
      '100% Global Reach'
    ],
    cta: 'Connect with Us',
    color: 'bg-[#FF6600]',
    accent: 'text-[#FF6600]',
    border: 'border-[#5A4AF4]/30',
    bg: 'bg-[#FFF7F0]',
    mockup: 'hero_mockup_ecommerce.png'
  },
  {
    badge: 'Innovation',
    title: 'Next-Gen App Solutions',
    subtitle: 'Empowering Businesses with Cutting-Edge Mobile & Web Applications',
    features: [
      '500+ Apps Developed',
      'Expert Flutter & React Team',
      'High Performance & Scalable',
      'Seamless User Experience'
    ],
    cta: 'Explore Apps',
    color: 'bg-[#FF6600]', // Standardized to Slide 1
    accent: 'text-[#FF6600]', // Standardized to Slide 1
    border: 'border-[#5A4AF4]/30', // Standardized to Slide 1
    bg: 'bg-[#FFF7F0]', // Standardized to Slide 1
    mockup: 'hero_mockup_ecommerce.png'
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
      className="relative flex flex-col w-full overflow-hidden"
    >
      {/* Top Hero Content with Peach Background */}
      <div className={`relative px-6 md:px-14 py-12 pt-24 w-full transition-colors duration-1000 ${slide.bg}`}>
        {/* Premium Linear Gradient & Diagonal Motif (High Visibility) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF6600]/10 to-transparent skew-x-12 transform translate-x-1/3" />
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#FF6600]/15 rounded-full blur-[120px] animate-pulse" />

          {/* Sharp Diagonal Light Beams from reference */}
          <div className="absolute top-0 right-[25%] w-4 h-[200%] bg-gradient-to-b from-white/60 via-white/10 to-transparent -rotate-[25deg] transform -translate-y-1/2" />
          <div className="absolute top-0 right-[15%] w-2 h-[200%] bg-gradient-to-b from-white/40 via-white/5 to-transparent -rotate-[25deg] transform -translate-y-1/2" />
          <div className="absolute top-0 right-[5%] w-8 h-[200%] bg-gradient-to-b from-white/30 via-white/0 to-transparent -rotate-[25deg] transform -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-full mx-auto px-6 md:px-14 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* Left Content */}
            <div className="flex flex-col items-start gap-8">
              {/* Experience Badge (Sharpened) */}
              <div className={`inline-flex items-center gap-2 px-5 py-1.5 ${slide.color} rounded-md shadow-lg`}>
                <span className="text-[12px] font-bold text-white uppercase tracking-wider">{slide.badge}</span>
              </div>

              {/* Hero Title (Border-less) */}
              <div className="py-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-display font-bold leading-[1.1] tracking-tight uppercase lg:whitespace-nowrap">
                  {(() => {
                    const words = slide.title.split(' ');
                    return words.map((word, wordIdx) => (
                      <span
                        key={wordIdx}
                        className={`inline-block mr-3 lg:mr-4 ${wordIdx === words.length - 1 ? slide.accent : 'text-slate-900'}`}
                      >
                        {word.split('').map((char, charIdx) => (
                          <span key={`${currentSlide}-${wordIdx}-${charIdx}`} className="hero-char inline-block whitespace-pre">
                            {char}
                          </span>
                        ))}
                      </span>
                    ));
                  })()}
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-slate-600 text-[11px] sm:text-sm md:text-base max-w-none lg:whitespace-nowrap font-semibold leading-relaxed font-secondary">
                {slide.subtitle}
              </p>

              {/* Avatars & Transformations */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-slate-200 shadow-xl overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=u${i + currentSlide}`} alt="Transformations" />
                    </div>
                  ))}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-white shadow-xl flex items-center justify-center text-[#FF6600] font-bold text-lg sm:text-xl">
                    +
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-bold text-slate-900">500+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Transformations</div>
                </div>
              </div>

              {/* CTA Button (Sharpened) */}
              <div className="pt-4">
                <button className={`group relative px-6 py-3 ${slide.color} text-white text-sm font-bold rounded-md transition-all hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 shadow-orange-500/20`}>
                  <span>{slide.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Mockup (Significantly Smaller) */}
            <div className="relative flex justify-center md:justify-end lg:justify-end">
              <div className="relative w-full max-w-[450px] transform hover:scale-[1.02] transition-transform duration-700">
                <img
                  src={`/${slide.mockup}`}
                  alt="Digital Transformation"
                  className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Row (Elite White & Compact) */}
      <div className="relative z-10 w-full bg-[#FDFBF9] px-6 md:px-14 py-6 border-t border-slate-100/50">
        <div className="max-w-full mx-auto">
          <div className="mt-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
            {slide.features.map((feature, i) => {
              const [val, ...rest] = feature.split(' ');
              return (
                <div key={i} className="p-4 lg:p-5 bg-white border border-slate-100 shadow-sm rounded-md transition-all group hover:shadow-xl hover:-translate-y-1 flex flex-col items-center">
                  <div className={`mb-1.5 w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center ${slide.accent} group-hover:bg-[#FF6600] group-hover:text-white transition-colors shadow-sm`}>
                    {i === 0 && <Globe className="w-4 h-4" />}
                    {i === 1 && <Sparkles className="w-4 h-4" />}
                    {i === 2 && <Monitor className="w-4 h-4" />}
                    {i === 3 && <Search className="w-4 h-4" />}
                  </div>
                  <div className="space-y-0 text-center">
                    <div className={`text-xl lg:text-2xl font-bold ${slide.accent} tracking-tight`}>{val}</div>
                    <div className="text-[9px] whitespace-nowrap font-bold text-slate-500 uppercase tracking-widest leading-none">{rest.join(' ')}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Client Logo Marquee Section */}
      <div className="w-full bg-white py-10 border-t border-slate-100 overflow-hidden">
        <div className="max-w-full mx-auto px-4">
          {/* Header Line */}
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-[1px] flex-1 max-w-[400px] bg-gradient-to-r from-transparent via-[#FF6600]/40 to-transparent" />
            <span className="text-[10px] md:text-[12px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Trusted by World's Best</span>
            <div className="h-[1px] flex-1 max-w-[400px] bg-gradient-to-l from-transparent via-[#FF6600]/40 to-transparent" />
          </div>

          {/* Marquee Content (Colorful) */}
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-8 items-center">
              {[
                { name: 'ecom express', color: 'text-[#E31E5D]' },
                { name: 'EICHER', color: 'text-[#E31D24]' },
                { name: 'FURLENCO', color: 'text-[#00A9E0]' },
                { name: 'Mahindra', color: 'text-[#ED1C24]' },
                { name: 'DECATHLON', color: 'text-[#0082C3]' },
                { name: 'Haldiram\'s', color: 'text-[#ED1C24]' },
                { name: 'ecom express', color: 'text-[#E31E5D]' },
                { name: 'EICHER', color: 'text-[#E31D24]' },
                { name: 'FURLENCO', color: 'text-[#00A9E0]' },
                { name: 'Mahindra', color: 'text-[#ED1C24]' },
                { name: 'DECATHLON', color: 'text-[#0082C3]' },
                { name: 'Haldiram\'s', color: 'text-[#ED1C24]' }
              ].map((brand, i) => (
                <div key={i} className="mx-6 sm:mx-10 md:mx-14 flex items-center justify-center">
                  <span className={`text-xl md:text-2xl font-bold ${brand.color} uppercase tracking-tighter opacity-70 hover:opacity-100 transition-all cursor-default`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Mirror for continuous scroll */}
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-8 items-center">
              {[
                { name: 'ecom express', color: 'text-[#E31E5D]' },
                { name: 'EICHER', color: 'text-[#E31D24]' },
                { name: 'FURLENCO', color: 'text-[#00A9E0]' },
                { name: 'Mahindra', color: 'text-[#ED1C24]' },
                { name: 'DECATHLON', color: 'text-[#0082C3]' },
                { name: 'Haldiram\'s', color: 'text-[#ED1C24]' },
                { name: 'ecom express', color: 'text-[#E31E5D]' },
                { name: 'EICHER', color: 'text-[#E31D24]' },
                { name: 'FURLENCO', color: 'text-[#00A9E0]' },
                { name: 'Mahindra', color: 'text-[#ED1C24]' },
                { name: 'DECATHLON', color: 'text-[#0082C3]' },
                { name: 'Haldiram\'s', color: 'text-[#ED1C24]' }
              ].map((brand, i) => (
                <div key={i} className="mx-14 flex items-center justify-center">
                  <span className={`text-xl md:text-2xl font-bold ${brand.color} uppercase tracking-tighter opacity-70 hover:opacity-100 transition-all cursor-default`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Line */}
          <div className="flex items-center justify-center gap-8 mt-4">
            <div className="h-[1px] flex-1 max-w-[400px] bg-gradient-to-r from-transparent via-[#FF6600]/40 to-transparent" />
            <span className="text-[10px] md:text-[12px] font-bold text-slate-400 uppercase tracking-[0.1em] whitespace-nowrap">MORE THAN 150 BRANDS</span>
            <div className="h-[1px] flex-1 max-w-[400px] bg-gradient-to-l from-transparent via-[#FF6600]/40 to-transparent" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}} />
    </section>
  );
}
