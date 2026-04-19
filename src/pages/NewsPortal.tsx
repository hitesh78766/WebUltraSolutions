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
      image: "/assets/news_aggregation.png"
   },
   {
      tag: "Scalability",
      title: "ENTERPRISE DISTRIBUTION",
      desc: "Architected for massive traffic and instantaneous dispersal. We implement highly scalable distribution frameworks that ensure your editorial content reaches a global audience with zero latency.",
      icon: Zap,
      image: "/assets/news_distribution.png"
   },
   {
      tag: "Integrity",
      title: "EDITORIAL PRECISION",
      desc: "Precision-engineered editorial workflows integrated with real-time data monitoring. We safeguard your news integrity while ensuring absolute transparency and compliance with global journalism standards.",
      icon: Shield,
      image: "/assets/news_editorial.png"
   },
   {
      tag: "Conversion",
      title: "MONETIZATION PROTOCOLS",
      desc: "Advanced revenue architectures designed for elite publishing. We implement high-status ad-tech integrations that maximize yield without compromising the user experience or editorial prestige.",
      icon: BarChart3,
      image: "/assets/news_monetization.png"
   },
   {
      tag: "Engagement",
      title: "RETENTION ARCHITECTURE",
      desc: "Engagement-optimized growth protocols that turn visitors into loyal subscribers. Our systems analyze user behavior in real-time to serve personalized content streams that drive long-term platform value.",
      icon: TrendingUp,
      image: "/assets/news_engagement.png"
   },
   {
      tag: "Agility",
      title: "RAPID DEPLOYMENT",
      desc: "Unit-tested components and rapid deployment workflows that ensure your platform evolves at the speed of global news. We provide the technical agility required to stay ahead of the competition.",
      icon: Cpu,
      image: "/assets/news_agility.png"
   }
];

export default function NewsPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNetworkGlobe />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-3">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-xs text-white capitalize">News Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
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
                     className="text-slate-600 text-xs md:text-sm lg:text-base font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     High-performance news portal architectures for global media leaders. We unify your editorial footprint through strategic data distribution and engagement-optimized growth protocols.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4"
               >
                  {[
                     { label: 'Cloud Distribution', icon: Globe },
                     { label: 'Real-time Aggregation', icon: Sparkles },
                     { label: 'Security Protocols', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-3 md:px-4 py-2 md:py-2 bg-white border border-slate-100 shadow-sm rounded-sm flex items-center gap-2 md:gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group mb-3">
                        <div className="w-4 h-4 md:w-7 md:h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <span className="text-[8px] md:text-[10px] font-semibold text-slate-700 capitalize tracking-widest leading-none">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
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
                           className="w-full lg:w-[45%] relative h-[200px] md:h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
                        >
                           <motion.img
                              src={pillar.image}
                              alt={pillar.title}
                              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/img:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />

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
                                       <div className="w-6 h-[2px] bg-[#FF6600]" />
                                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-none text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>
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
