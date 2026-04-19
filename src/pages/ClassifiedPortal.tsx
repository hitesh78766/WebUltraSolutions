import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Tag,
   Search,
   Globe,
   Zap,
   TrendingUp,
   ArrowRight,
   Monitor,
   Cpu,
   Shield,
   Sparkles,
   Target
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const classifiedPillars = [
   {
      tag: "Intelligence",
      title: "CLASSIFIED DATA ARCHITECTURE",
      desc: "We engineer high-fidelity classified portal architectures that categorize global market data in real-time. Our strategic indexing approach ensures your platform remains the authoritative source for trade and commerce.",
      icon: Tag,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Scalability",
      title: "MARKET SYNCHRONIZATION",
      desc: "Synchronizing high-volume listing data into unified enterprise-grade portals. We implement advanced search frameworks that transform complex user interactions into authoritative market consensus.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Integrity",
      title: "TRANSACTIONAL TRUST",
      desc: "Architected for sustained platform integrity through proactive listing management. We use precision-engineered verification protocols to ensure your digital ecosystem remains robust and secure.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Conversion",
      title: "MONETIZATION PROTOCOLS",
      desc: "High-yield monetization architectures designed for elite classified platforms. We implement advanced regional ad-tech and micro-transaction protocols that maximize platform throughput and revenue scaling.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Agility",
      title: "BEHAVIOR INTELLIGENCE",
      desc: "Real-time user behavior analysis systems integrated with predictive search logic. Our classified platforms evolve based on precise interaction data, ensuring your ecosystem stays ahead of global market trends.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function ClassifiedPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNeuralStorm />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-3">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-xs text-white capitalize">Classified Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING CLASSIFIED DOMINANCE.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 md:mr-4">
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 200,
                                       damping: 10,
                                       delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02)
                                    }}
                                    className={`inline-block ${word === "DOMINANCE." ? "text-[#FF6600]" : ""}`}
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </span>
                        ));
                     })()}
                  </h1>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="text-slate-600 mb-2 text-xs md:text-sm lg:text-base font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     High-performance classified portal architectures for global market leaders. We unify your digital footprint through strategic listing distribution and verifiable growth protocols.
                  </motion.p>
               </div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
            <div className="grid grid-cols-1 gap-6 lg:gap-10">
               <div className="flex flex-col gap-8 lg:gap-12">
                  {classifiedPillars.map((pillar, idx) => (
                     <div
                        key={idx}
                        className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:gap-10 items-center`}
                     >
                        <motion.div
                           initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           whileHover={{ y: -6, scale: 1.01 }}
                           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[45%] relative h-[200px] md:h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
                        >
                           <motion.img
                              src={pillar.image}
                              alt={pillar.title}
                              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/img:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />
                           {/* ELITE BADGE */}
                           <div className="absolute top-4 right-4 md:top-6 md:right-6">
                              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-1.5 md:gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                 <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Elite Standard</span>
                              </div>
                           </div>
                           <span className={`absolute bottom-4 ${idx % 2 === 0 ? "right-4" : "left-4"} md:bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-3xl md:text-4xl font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[55%] space-y-6 px-4 lg:px-0"
                        >
                           <div className="space-y-4">
                              <div className="flex items-center gap-5">
                                 <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-all duration-700">
                                    <pillar.icon size={16} className="md:size-[22px]" />
                                 </div>
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-4 sm:w-6 h-[2px] bg-primary" />
                                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>
                              <div className="pt-2">
                                 <button className="flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-900 capitalize tracking-widest group/link">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#FF6600]" />
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
