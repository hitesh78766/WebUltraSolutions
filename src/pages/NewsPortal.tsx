import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Globe, 
   Zap, 
   TrendingUp, 
   BarChart3, 
   ArrowRight,
   Monitor,
   Cpu,
   Shield,
   Search,
   Sparkles
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const portalPillars = [
   {
      tag: "Intelligence",
      title: "DYNAMIC CONTENT AGGREGATION",
      desc: "We engineer high-fidelity news portal architectures that aggregate global data streams in real-time. Our strategic content delivery ensures your platform remains the authoritative source for high-impact journalism.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1504711432813-0b72af752be3?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Scalability",
      title: "ENTERPRISE DISTRIBUTION",
      desc: "Architected for massive traffic and instantaneous dispersal. We implement highly scalable distribution frameworks that ensure your editorial content reaches a global audience with zero latency.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Integrity",
      title: "EDITORIAL PRECISION",
      desc: "Precision-engineered editorial workflows integrated with real-time data monitoring. We safeguard your news integrity while ensuring absolute transparency and compliance with global journalism standards.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function NewsPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNetworkGlobe />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Elite News Architectures</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING GLOBAL NEWS PORTALS.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-4">
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
                                    className={`inline-block ${word === "PORTALS." ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-xs lg:text-sm font-medium max-w-xl leading-relaxed"
                  >
                     High-performance news portal architectures for global media leaders. We unify your editorial footprint through strategic data distribution and engagement-optimized growth protocols.
                  </motion.p>
               </div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8 bg-[#FDFBF9]">
            <div className="grid grid-cols-1 gap-6 lg:gap-10">
               <div className="flex flex-col gap-8 lg:gap-12">
                  {portalPillars.map((pillar, idx) => (
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
                           className="w-full lg:w-[45%] relative h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
                        >
                           <motion.img 
                               src={pillar.image} 
                               alt={pillar.title}
                               className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/img:scale-110"
                            />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />
                           <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-[50px] font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
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
                                 <div className="relative w-12 h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-all duration-700">
                                    <pillar.icon size={22} />
                                 </div>
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-6 h-[2px] bg-[#FF6600]" />
                                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-none text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              <p className="text-[12px] lg:text-[14px] font-medium leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>
                              <div className="pt-2">
                                 <button className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest group/link">
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
