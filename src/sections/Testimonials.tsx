import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const testimonialSets = [
  {
    featured: {
      name: 'Sukhraj Sandhar,',
      role: 'Owner & Director, Ojas Enterprises Inc',
      content: '“They are honest and easy to do business with.” OrangeMantra’s efforts have resulted in improved keyword ranking, meeting expectations. Their communicative and responsive approach fosters an easy partnership. On top of their technical expertise, their professionalism and transparency are impressive.',
      rating: 5
    },
    grid: [
      {
        name: 'Moubarack Magadji',
        role: 'Lead Programmer, MELCOM',
        content: '“We’re impressed by their flexibility and ability to meet tight deadlines.” OrangeMantra has been successful in addressing user complaints and ensuring the e-commerce website’s stability. The team demonstrates good project management and flexibility.',
        rating: 5,
        tag: 'FINTECH'
      },
      {
        name: 'Choko la ,',
        role: 'Manager Marketing, Cosmic Kitchen Private Limited',
        content: '“They were excellent and sincere team.” OrangeMantra successfully revamped a friendly-user website. As a result, the web traffic increased by 20%, which was notable in the partnership. The team provided valuable guidance and communicated well.',
        rating: 5,
        tag: 'E-COMMERCE'
      }
    ]
  },
  {
    featured: {
      name: 'Julianne Foster',
      role: 'Head of Growth, Global Retail Inc',
      content: '“Unmatched technical precision and strategic depth.” The transition to our new digital infrastructure was seamless. Their team handled complex data migrations and high-traffic optimization with absolute professionalism, resulting in a 40% performance boost.',
      rating: 5
    },
    grid: [
      {
        name: 'Arjun Mehta',
        role: 'CTO, NextGen Health',
        content: '“Revolutionary approach to patient data management.” The secure architecture they built has streamlined our entire operation while maintaining 100% HIPAA compliance and enhancing overall patient engagement scores.',
        rating: 5,
        tag: 'HEALTH-TECH'
      },
      {
        name: 'Sergei Volkov',
        role: 'Founder, BlockChain Solutions',
        content: '“The ultimate partner for scalable infrastructure.” Their depth of knowledge in distributed systems and high-security protocols saved us months of development time and provided a bulletproof foundation for our global launch.',
        rating: 5,
        tag: 'CRYPTO'
      }
    ]
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonialSets.length);

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, []);

  const pauseAutoPlay = () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  const resumeAutoPlay = () => { autoPlayRef.current = setInterval(next, 5000); };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-header", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 90%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="py-10 lg:py-14 bg-white overflow-hidden font-display relative border-t border-slate-50"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 text-center">
        
        {/* Header content */}
        <div className="testimonial-header mb-8 lg:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.1]">
            Voices <span className="text-[#F97316]">of Trust</span>
          </h2>
          <div className="w-12 h-1.5 bg-[#F97316] mx-auto rounded-full mt-3" />
          <p className="text-slate-500 text-[13px] font-medium leading-relaxed mt-4">
            Real results from real partnerships with <span className="text-[#F97316]">industry leaders</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 lg:space-y-5"
            >
              {/* Featured Card */}
              <div className="testimonial-card relative bg-white border border-[#F97316]/20 rounded-xl p-5 lg:p-8 shadow-xl shadow-orange-500/5 mx-auto max-w-5xl">
                 <TestimonialContent item={testimonialSets[currentIndex].featured} />
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
                 {testimonialSets[currentIndex].grid.map((item, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-xl p-5 shadow-xl shadow-slate-200/5 hover:border-[#F97316]/30 transition-all duration-500">
                       <TestimonialContent item={item} />
                    </div>
                 ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8 lg:mt-10">
           {testimonialSets.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-[#F97316] w-6' : 'bg-slate-200'}`}
              />
           ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialContent({ item }: any) {
  return (
    <div className="space-y-5 relative h-full flex flex-col items-start text-left group">
       {/* Meta Info: Rating & Quote */}
       <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-50 border border-slate-100 rounded-lg group-hover:border-[#F97316]/20 transition-colors">
             <Quote size={11} className="text-[#F97316] fill-[#F97316]/10" />
             <div className="flex items-center gap-0.5 ml-1.5">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} size={9} className="fill-[#F97316] text-[#F97316]" />
                ))}
             </div>
          </div>
          {item.tag && (
            <span className="bg-slate-900 group-hover:bg-[#F97316] text-white text-[6.5px] font-bold tracking-widest px-2 py-0.5 rounded-md transition-colors leading-none uppercase">
              {item.tag}
            </span>
          )}
       </div>

       {/* Narrative */}
       <div className="flex-grow space-y-3">
          <p className="text-slate-600 text-[11.5px] lg:text-[12.5px] font-medium leading-[1.6] italic opacity-90 group-hover:opacity-100 transition-opacity">
             {item.content}
          </p>
       </div>

       {/* Attribution */}
       <div className="flex items-end justify-between w-full pt-3.5 border-t border-slate-50 group-hover:border-slate-100 transition-colors">
          <div>
             <h4 className="text-[12.5px] font-bold text-[#111827] leading-none mb-1.5 group-hover:text-[#F97316] transition-colors">{item.name}</h4>
             <p className="text-[9.5px] font-bold text-slate-400 leading-none">{item.role}</p>
          </div>
          
          <div className="flex items-center gap-1.2 px-1.5 py-0.5 bg-emerald-50 border border-emerald-100/50 rounded-md">
             <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                <CheckCircle2 size={7} className="text-white" />
             </div>
             <span className="text-[7.5px] font-bold text-emerald-600 uppercase tracking-widest leading-none pt-0.5 ml-1">Verified</span>
          </div>
       </div>
    </div>
  );
}
