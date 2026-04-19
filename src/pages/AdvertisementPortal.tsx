import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Globe,
   Zap,
   Shield,
   ArrowRight,
   Activity,
   Sparkles,
   ChevronRight,
   Target,
   BarChart3,
   Megaphone,
   Monitor,
   Layers
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const adProtocols = [
   {
      tag: "Strategy",
      title: "STRATEGIC PROMOTION MATRIX",
      desc: "Our advertisement portal functions as a high-velocity strategic matrix designed specifically for the elite-tier promotion of institutional brands and corporate ecosystems. By leveraging deep-market psychological insights and architectural brand positioning, we offer significant operational advantages that facilitate the surgical refinement of your market identity. We specialize in the convergence of creative strategy and technical deployment, ensuring that every ad placement acts as a cornerstone for growth.",
      icon: Target
   },
   {
      tag: "Technics",
      title: "AD SERVING ARCHITECTURE",
      desc: "The core of our infrastructure resides in a proprietary ad-serving architecture engineered for sub-millisecond latency and maximum throughput. Specialized software solutions enable the seamless serving of ads, meticulous ad counting, and optimization for maximum profitability. Ongoing monitoring of diverse advertising campaigns ensures their effectiveness across the global digital lattice with 100% integrity.",
      icon: Layers
   },
   {
      tag: "Objectives",
      title: "ADVERTISING REQUIREMENTS",
      desc: "We recognize that high-status brands operate with complex objectives. Whether your goal is massive brand-building, cinematic product launches, driving sales growth, or event marketing, we provide specifically tailored advertising packages that align with your institutional requirements. Every campaign is a custom-coded experience designed to maintain prestige.",
      icon: Megaphone
   },
   {
      tag: "Reach",
      title: "GLOBAL 24/7 CONNECTIVITY",
      desc: "Our global digital lattice ensures your message maintains a perpetual presence across every timezone, round the clock. Sophisticated systems monitor click-through metrics and engagement depth, ensuring you exceed your advertising goals with surgical precision and mathematical certainty for maximum outreach impact.",
      icon: Globe
   }
];

export default function AdvertisementPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      
      // GSAP Entrance
      gsap.fromTo(".protocol-node", 
         { opacity: 0, y: 30 },
         { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".protocol-section",
               start: "top 80%",
            }
         }
      );

      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* LIGHT THEME CINEMATIC HERO WITH ENHANCED ANIMATION */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* Subtle Orange Glow Animation */}
            <motion.div 
               animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                  x: [0, 50, 0],
                  y: [0, -30, 0]
               }}
               transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
               }}
               className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-orange-200/40 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -mr-20 sm:-mr-30 md:-mr-40 -mt-20 sm:-mt-30 md:-mt-40 z-0"
            />
            
            <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none">
               <ThreeNetworkGlobe />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-3">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                     <span className="font-system-caption text-xs text-white capitalize">Advertisement Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const words = [
                           { text: "ADVERTISEMENT", color: "text-dark" },
                           { text: "NETWORK.", color: "text-orange-600" }
                        ];
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className={`inline-block mr-2 md:mr-4 ${word.color}`}>
                              {word.text.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{
                                       duration: 0.8,
                                       delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.04),
                                       ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className="inline-block"
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </span>
                        ));
                     })()}
                  </h1>

               </div>

               <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="w-full"
               >
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="text-slate-600 text-xs md:text-sm lg:text-base font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     "Our understanding of customers is reflected in the high-status user experience we provide."
                  </motion.p>
               </motion.div>
            </div>
         </div>

         {/* THE PERIPHERY: HIGH-FIDELITY PROTOCOL SECTIONS */}
         <section className="bg-white relative py-12 sm:py-16 md:py-20 lg:py-32 protocol-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">

               {/* INTRO BLOCK with IMAGE */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-8"
                  >
                     <div className="space-y-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase text-slate-950 text-center lg:text-left">
                           <span className="text-orange-600">Advertising</span> <span className="text-slate-950">Protocol.</span>
                        </h2>
                        <div className="w-12 sm:w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0" />
                     </div>
                     <div className="space-y-4 sm:space-y-6 text-slate-600 text-xs md:text-sm lg:text-base font-semibold leading-relaxed px-2 sm:px-0">
                        <p>
                           Our advertisement portal is a high-status tool designed for the strategic promotion of global brands. We provide specialized technology solutions enabling seamless ad serving, meticulous conversion counting, and mathematical optimization for maximum institutional profitability.
                        </p>
                        <p className="text-slate-950 font-bold border-l-4 border-orange-500 pl-4 sm:pl-8 py-2 capitalize text-[10px] md:text-[12px] font-semibold tracking-wider bg-slate-50">
                           We collaborate with you to tailor the perfect advertising package that aligns with your specific institutional requirements.&quot;
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative aspect-[16/10] sm:aspect-[16/9] group"
                  >
                     <div className="absolute -inset-4 bg-orange-600/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                     <div className="relative h-full overflow-hidden shadow-2xl border border-slate-100 bg-white">
                        <img
                           src="/images/ad_strategy.png"
                           alt="Advertisement Architecture"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                         <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <span className="font-system-caption text-primary uppercase tracking-widest">Global Outreach Matrix</span>
                            <h4 className="text-lg md:text-xl lg:text-xl font-display font-bold tracking-tight uppercase text-white">Digital Presence Infrastructure</h4>
                         </div>
                     </div>
                  </motion.div>
               </div>

               {/* INTERACTIVE PROTOCOL LIST - PEHRA PATTERN */}
               <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
                  {adProtocols.map((protocol, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 md:gap-12 lg:gap-24 items-start protocol-node`}
                     >
                        <div className="lg:w-1/3 space-y-3 sm:space-y-4 md:space-y-6 lg:sticky lg:top-32 w-full">
                           <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                              <div className="relative group">
                                 <div className="absolute -inset-2 bg-orange-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                 <div className="relative w-8 h-8 sm:w-10 md:w-12 md:h-12 bg-slate-50 flex items-center justify-center text-orange-500 border border-slate-100 shadow-sm transition-transform group-hover:scale-110">
                                    <protocol.icon size={20} className="sm:size-[24px] md:size-[28px]" />
                                 </div>
                              </div>
                              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-100">0{idx + 1}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-system-caption text-primary text-center lg:text-left block">{protocol.tag}</span>
                              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight leading-none text-center lg:text-left">
                                 {protocol.title.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "text-slate-950" : "text-orange-600"}>
                                       {word}{' '}
                                    </span>
                                 ))}
                              </h3>
                           </div>
                           <div className="pt-2 sm:pt-3 md:pt-4 flex items-center justify-center lg:justify-start gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-system-caption text-slate-400 uppercase tracking-widest">
                              <ChevronRight size={10} className="sm:size-[12px] text-primary" />
                              Active Protocol
                           </div>
                        </div>

                        <div className="lg:w-2/3 w-full">
                           <div className="relative">
                              <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-slate-100 hidden lg:block overflow-hidden">
                                 <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: '100%' }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="w-full bg-orange-600"
                                 />
                              </div>
                              <p className="font-system-body text-slate-700 font-semibold leading-relaxed lg:pl-0 text-center lg:text-left text-[11px] sm:text-[12px] md:text-sm px-2 sm:px-0">
                                 {protocol.desc}
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>

            </div>
         </section>
      </div>
   );
}
