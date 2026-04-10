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
      <div className="pt-[80px] bg-white min-h-screen font-secondary selection:bg-orange-600 selection:text-white overflow-x-hidden">
         {/* LIGHT THEME CINEMATIC HERO WITH ENHANCED ANIMATION */}
         <div className="relative h-[250px] lg:h-[320px] bg-[#FDFBF9] flex items-center overflow-hidden border-b border-orange-100/30">
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
               className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] -mr-40 -mt-40 z-0"
            />
            
            <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none">
               <ThreeNetworkGlobe />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
               <div className="space-y-4 text-center lg:text-left">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100 rounded-sm shadow-sm"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">Elite Advertising Hub</span>
                  </motion.div>

                  <h1 className="text-2xl lg:text-4xl font-display font-black text-slate-950 tracking-tight uppercase leading-[1.1] flex flex-wrap justify-center lg:justify-start gap-x-3">
                     {(() => {
                        const words = ["Advertisement", "Network."];
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className={`inline-block ${word === "Network." ? "text-orange-600 italic" : ""}`}>
                              {word.split("").map((char, charIdx) => (
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

                  {/* ELITE STATUS STACK */}
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2"
                  >
                     {[
                        { label: "Daily Reach", val: "50M+", icon: Activity },
                        { label: "Global Nodes", val: "2,400+", icon: Globe },
                        { label: "CTR Average", val: "4.82%", icon: BarChart3 }
                     ].map((badge, i) => (
                        <div key={i} className="px-3 py-1.5 bg-white border border-orange-100 rounded flex items-center gap-2 group hover:shadow-lg transition-all">
                           <badge.icon size={12} className="text-orange-600" />
                           <div className="flex flex-col items-start">
                              <span className="text-[9px] font-black text-slate-950 uppercase leading-none tracking-tight">{badge.val}</span>
                              <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{badge.label}</span>
                           </div>
                        </div>
                     ))}
                  </motion.div>
               </div>

               <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="max-w-md"
               >
                  <p className="text-[12px] lg:text-[14px] font-semibold text-slate-600 leading-relaxed border-l-4 border-orange-600 pl-6 lg:pl-8 py-1 uppercase tracking-tight italic">
                     "Our understanding of customers is reflected in the high-status user experience we provide."
                  </p>
               </motion.div>
            </div>
         </div>

         {/* THE PERIPHERY: HIGH-FIDELITY PROTOCOL SECTIONS */}
         <section className="bg-white relative py-20 lg:py-32 protocol-section">
            <div className="max-w-7xl mx-auto px-8 lg:px-12 space-y-32">

               {/* INTRO BLOCK with IMAGE */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-8"
                  >
                     <div className="space-y-4">
                        <h2 className="text-xl lg:text-3xl font-display font-black text-slate-950 uppercase tracking-tight leading-[0.9]">
                           Advertising <span className="text-orange-600">Protocol.</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-600" />
                     </div>
                     <div className="space-y-6 text-slate-600 text-sm lg:text-base font-semibold leading-relaxed">
                        <p>
                           Our advertisement portal is a high-status tool designed for the strategic promotion of global brands. We provide specialized technology solutions enabling seamless ad serving, meticulous conversion counting, and mathematical optimization for maximum institutional profitability.
                        </p>
                        <p className="text-slate-950 font-black border-l-4 border-slate-950 pl-8 py-2 uppercase text-xs tracking-tight italic bg-slate-50">
                           &quot;We collaborate with you to tailor the perfect advertising package that aligns with your specific institutional requirements.&quot;
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative aspect-[16/10] group"
                  >
                     <div className="absolute -inset-4 bg-orange-600/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                     <div className="relative h-full overflow-hidden shadow-2xl border border-slate-100 bg-white">
                        <img
                           src="/images/ad_strategy.png"
                           alt="Advertisement Architecture"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                         <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Global Outreach Matrix</span>
                            <h4 className="text-xl font-bold uppercase tracking-tight">Digital Presence Infrastructure</h4>
                         </div>
                     </div>
                  </motion.div>
               </div>

               {/* INTERACTIVE PROTOCOL LIST - PEHRA PATTERN */}
               <div className="space-y-32">
                  {adProtocols.map((protocol, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-start protocol-node`}
                     >
                        <div className="lg:w-1/3 space-y-6 sticky top-32">
                           <div className="flex items-center gap-4">
                              <div className="relative group">
                                 <div className="absolute -inset-2 bg-orange-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                 <div className="relative w-16 h-16 bg-slate-50 flex items-center justify-center text-orange-600 border border-slate-100 shadow-sm transition-transform group-hover:scale-110">
                                    <protocol.icon size={32} />
                                 </div>
                              </div>
                              <div className="text-4xl font-display font-black text-slate-100">0{idx + 1}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600">{protocol.tag}</span>
                              <h3 className="text-lg lg:text-2xl font-display font-black uppercase tracking-tight leading-none">
                                 {protocol.title.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "text-slate-950" : "text-orange-600"}>
                                       {word}{' '}
                                    </span>
                                 ))}
                              </h3>
                           </div>
                           <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              <ChevronRight size={12} className="text-orange-600" />
                              Active Protocol
                           </div>
                        </div>

                        <div className="lg:w-2/3">
                           <div className="relative">
                              <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-slate-100 hidden lg:block overflow-hidden">
                                 <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: '100%' }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="w-full bg-orange-600"
                                 />
                              </div>
                              <p className="text-sm lg:text-base font-semibold text-slate-700 leading-relaxed lg:pl-0">
                                 {protocol.desc}
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* CONCLUSION BLOCK - SIGNATURE PRESTIGE */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative py-10 lg:py-14 px-8 rounded-sm bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
               >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

                  <div className="relative z-10 max-w-4xl mx-auto space-y-5">
                     <div className="w-10 h-10 mx-auto rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-600 shadow-xl group-hover:scale-110 transition-transform duration-700">
                        <Zap size={20} />
                     </div>

                     <div className="relative">
                        <h3 className="text-sm lg:text-base font-display font-medium tracking-tight leading-relaxed text-slate-200 max-w-2xl mx-auto italic">
                           "Deploy your institutional message across our sophisticated advertising infrastructure to reach a vast global audience and exceed your conversion goals with mathematical certainty."
                        </h3>
                     </div>

                     <div className="flex items-center justify-center gap-8 pt-4">
                        <div className="h-[1px] w-24 bg-white/10" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-orange-500">Industry Leader</span>
                        <div className="h-[1px] w-24 bg-white/10" />
                     </div>
                  </div>

                  <motion.div
                     animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                     }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[100px]"
                  />
               </motion.div>

            </div>
         </section>
      </div>
   );
}
